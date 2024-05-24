const express = require('express');
const app = express();
app.use(express.static('public'));
const ejs = require('ejs');
app.set('view engine', 'ejs');
const bodyParser = require("body-parser");
const dbConnect = require('./config/dbConnect');
const {notFound, errorHandler} = require("./middlewares/errorHandler");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const couponRouter = require('./routes/couponRoute');
const paymentRoute = require('./routes/paymentRoute');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
dbConnect();
const { getAllProduct } = require("./controller/productCtrl");
const User = require('./models/userModel');
const Cart = require('./models/cartModel');
const Order = require('./models/orderModel');
const Product = require('./models/productModel');
const AllOrder = require('./models/allOrderModel');
const { isAdmin } = require('./middlewares/authMiddleware');
const { updateOrderStatus } = require('./controller/userCtrl');


// ------*******************---------------

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use("/myacc", authMiddleware, (req,res)=>{
//     res.render('myacc');
// });
// app.use("/", (req,res)=>{
//     res.render('home');

//     const id = req.params;
// });

// app.use("/sproduct/:id", getAllProduct, (req, res) => {
//     res.render('sproduct');
// });

app.use("/user", authRouter);
app.use("/product", productRouter);
app.use("/coupon", couponRouter);
app.use("/blog", blogRouter);
app.use('/checkout',paymentRoute);
// router.post("/product/login", loginUserCtrl);

// app.use(notFound);
// app.use(errorHandler);

// ------*******************---------------

app.get("/", async (req,res)=>{
    const token = req.cookies?.refreshToken;
    const user = await User.findOne({ 'refreshToken': token });
    const product = await Product.find();
    console.log("New user: " , user, "Token: ", token);
    if(user){
        res.render('index', {user: user, Products: product});
    } else {
        res.render('index', {user: ' ', Products: product});
    }
});

app.get("/admin", isAdmin, (req,res)=>{
    res.render('admin');
})

app.get("/myacc", async(req,res)=>{
    const token = req.cookies?.refreshToken;
    const user = await User.findOne({ 'refreshToken': token });
    if(user){
        console.log("User: ", user);
        res.render('register', {user: user});
    } else {
        res.render('register', {user: ' '});
    }
});

app.get("/viewAccount", async (req, res) => {
    const token = req.cookies?.refreshToken;
    if(token){
        const user = await User.findOne({ 'refreshToken': token });
        const allOrder = await AllOrder.findOne({ 'orderby': user?._id });
        if(allOrder){
            const products = allOrder.orders;
            console.log("Products:", products);
            res.render('myAccount', {user: user, Products: products});
        } else {
            res.render('myAccount', {user: user, Products: ""});
        }
    } else{
        res.redirect('/myacc');
    }
});

app.get('/cart', async (req, res) => {
    const token = req.cookies?.refreshToken;
    if(token){
        const user = await User.findOne({ 'refreshToken': token });
        const product = await Cart.find();
        console.log("Cart Products : ", product);
        res.render('cartPage', user);
    } else{
        res.redirect('/myacc');
    }
});

app.get('/sale', async (req, res) => {
    const token = req.cookies?.refreshToken;
    if(token){
        const user = await User.findOne({ 'refreshToken': token });
        res.render('error', {user: user, error_msg: "Coming Soon"});
    } else{
        res.redirect('/myacc');
    }
});

// search
app.get('/search', async (req, res) => {
    const token = req?.cookies?.refreshToken;
    const user = await User.findOne({ 'refreshToken': token });
    try {
        const search = req.query.search;
        const searchWords = search.split(' ').filter(word => word.trim() !== '');
        const priceRegex = /^price:\s*(<|<=|>|>=)\s*(\d+(\.\d*)?)$/i; // Regex pattern for price search
        const results = [];

        for (const word of searchWords) {
            const regexSearch = escapeRegex(word);

            if (priceRegex.test(word)) {
                const match = priceRegex.exec(word);
                const operator = match[1];
                const priceValue = parseFloat(match[2]);

                if (!isNaN(priceValue)) {
                    const priceQuery = {};

                    if (operator === '<') {
                        priceQuery.$lt = priceValue;
                    } else if (operator === '<=') {
                        priceQuery.$lte = priceValue;
                    } else if (operator === '>') {
                        priceQuery.$gt = priceValue;
                    } else if (operator === '>=') {
                        priceQuery.$gte = priceValue;
                    }

                    const priceResults = await Product.find({ sellingPrice: priceQuery });
                    results.push(priceResults);
                }
            } else {
                const wordResults = await Product.find({
                    $or: [
                        { title: { $regex: regexSearch, $options: 'i' } },
                        { category: { $regex: regexSearch, $options: 'i' } },
                        { color: { $regex: regexSearch, $options: 'i' } },
                        { style: { $regex: regexSearch, $options: 'i' } }
                    ]
                });
                results.push(wordResults);
            }
        }

        const commonResults = results.reduce((acc, curr) => {
            return acc.filter(product => curr.some(item => item._id.toString() === product._id.toString()));
        });

        if (commonResults.length > 0) {
            // res.status(200).send({ success: true, msg: "Common Product Details", data: commonResults });
            if(user){
                res.render('products', {user: user, Products: commonResults});
            } else {
                res.render('products', {user: "", Products: commonResults});
            }
        } else {
            res.redirect("/");
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}



app.get('/aboutUs', (req, res) => {
    res.render('aboutUs', {user: req.user?req.user:' '});
});

app.get('/returnPolicy', (req, res) => {
    res.render('policyPage', {user: req.user?req.user:' '});
});

app.get('/shipping', (req,res)=> {
    res.render('shippingPolicy', {user: req.user?req.user:' '});
})

app.get('/terms&conditions', (req, res) => {
    res.render('terms_and_conditions', {user: req.user?req.user:''});
});

app.get('/thankYou', async(req, res) => {
    const token = req?.cookies?.refreshToken;
    const user = await User.findOne({ 'refreshToken': token });
    const order = await Order.findOne({ 'orderby': user?._id });
    
    if(order){
        // Update the existing AllOrder document or create a new one
    AllOrder.findOneAndUpdate(
        { orderby: user?._id }, // Find the document by user ID
        { $push: { orders: { $each: order.products } } }, // Push new order IDs into the orders array
        { upsert: true, new: true } // Create a new document if not found, return the updated document
    )
    .then((updatedAllOrder) => {
        console.log('AllOrder saved/updated successfully:', updatedAllOrder);
    })
    .catch((err) => {
        console.error('Error saving/updating AllOrder:', err);
    });

    // Update Products
    order.products.forEach(async(product) => {
        const existingProduct = await Product.findOne({ '_id': product._id });
        await Product.findOneAndUpdate(
            { _id: product._id}, 
            { $set: {quantity: existingProduct.quantity - product.count} },
            { new: true}
        );
    });

    // Delete the cart document where _id matches the user?._id
    await Cart.deleteOne({ 'orderby': user?._id })
    .then((result) => {
      if (result.deletedCount === 1) {
        console.log('Cart document deleted successfully');
      } else {
        console.log('Cart document not found or not deleted');
      }
    })
    .catch((err) => {
      console.error('Error deleting cart document:', err);
    });

    // Delete the order document where _id matches the user?._id
    await Order.deleteOne({ 'orderby': user?._id })
    .then((result) => {
      if (result.deletedCount === 1) {
        console.log('Order document deleted successfully');
      } else {
        console.log('Order document not found or not deleted');
      }
    })
    .catch((err) => {
      console.error('Error deleting order document:', err);
    });
    if(user){
        res.render('thankYou', {user: user});
    } else {
        res.render('thankYou', {user: ""});
    }
    } else {
        res.redirect('/');
    }
});

// Error Message
app.get('/error', async(req,res) => {
    const token = req?.cookies?.refreshToken;
    const user = await User.findOne({ 'refreshToken': token });

    if(user){
        res.render('error', {user: user});
    } else {
        res.render('error', {user: "" });
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at PORT ${PORT}`);
});