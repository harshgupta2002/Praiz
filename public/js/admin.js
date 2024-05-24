// Parse the URL to check for success or error query parameter
const urlParams = new URLSearchParams(window.location.search);
const success = urlParams.get('success');
const error = urlParams.get('error');
const message = urlParams.get('message');
// Display appropriate alert based on the query parameter and message
if(success){
  document.getElementById('content').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
  </svg>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
      ${message}
    <button onclick="redirectToAdmin()" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
} else if(error){
  document.getElementById('content').innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
  </svg>
  <div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      ${message}
    <button onclick="redirectToAdmin()" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
} else{
  function openRoute(route) {
  if (route === 'addProduct') {
    // Display the add product form
    document.getElementById('content').innerHTML = `
      <h2>Add Product</h2>
      <form id="addProductForm" action="/product/" method="post" >
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">

        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" cols="50"></textarea>
        <br>
        <label for="sellingPrice">Selling Price:</label>
        <input type="number" id="sellingPrice" name="sellingPrice">
        <label for="price">Dummy Price:</label>
        <input type="number" id="price" name="price">

        <label for="discount">Discount:</label>
        <input type="number" id="discount" name="discount">

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity">

        <label for="category">Category:</label>
        <select id="category" name="category">
          <option value="1">Rings</option>
          <option value="2">Necklace</option>
          <option value="3">Earrings</option>
          <option value="3">Bracelets</option>
        </select>

        <label for="color">Color:</label>
        <input type="text" id="color" name="color"><br>
        <label for="thumbnail">Thumbnail:</label>
        <input type="text" id="thumbnail" name="thumbnail"><br>
        <button type="submit" onclick="submitProduct()">Add Product</button>
      </form>`;
  } else if (route === 'getProductById') {
    // Display the get product by ID form
    document.getElementById('content').innerHTML = `
      <h2>Get Product by ID</h2>
      <form id="getProductByIdForm" action="/product/getproductById" method="post">
        <label for="productId">Product ID:</label>
        <input type="text" id="productId" name="productId" required>

        <button type="submit" onclick="getProductById()">Get Product</button>
      </form>`;
  }
  // Set Style
  else if (route === 'setStyle') {
    document.getElementById('content').innerHTML = `
      <h2>Set Style</h2>
      <form id="setStyleForm" action="/product/setStyle" method="post">
        <label for="styleType">Style Type: </label>
        <input type="text" id="styleType" name="styleType" required>
        <label for="prodId">Product Id: </label>
        <input type="text" id="prodId" name="prodId" required>
        <button onclick="handleStyleSubmit()">Set</button>
      </form>`;
  }
  else if (route === 'blockUser') {
    // Block User
    document.getElementById('content').innerHTML = `
      <h2>Block User</h2>
      <form id="blockUserForm">
        <label for="userId">User id:</label>
        <input type="text" id="blockUserId" name="UserId" required>
        <button type="submit" onclick="submit_block_user()">Block</button>
      </form>`;
  }
  else if (route === 'unblockUser') {
    // unblock User
    document.getElementById('content').innerHTML = `
      <h2>Unblock User</h2>
      <form id="unblockUserForm" action="/user/block-user" method="post">
        <label for="userId">User id:</label>
        <input type="text" id="unblockUserId" name="UserId" required>
        <button type="submit" onclick="submit_unblock__user()">Unblock</button>
      </form>`;
  }
  // else if (route === 'createBlog') {
  //   // Create Blog
  //   document.getElementById('content').innerHTML = `
  //   <form action="/save" method="post">
  //   <textarea id="editor" name="content"></textarea>
  //   <button id="submit">Create</button>
  //   </form>
  //   <script>
  //       ClassicEditor
  //           .create( document.querySelector( '#editor' ), {
  //               ckbox: {
  //                   tokenUrl: 'https://108126.cke-cs.com/token/dev/LiKxR2xEW8opQewRr142RHmdFNXCQgamEYmf?limit=10',
  //                   theme: 'lark'
  //               },
  //               toolbar: [
  //                   'ckbox', 'imageUpload', '|', 'heading', '|', 'undo', 'redo', '|', 'bold', 'italic', '|',
  //                   'blockQuote', 'indent', 'link', '|', 'bulletedList', 'numberedList'
  //               ],
  //           } )
  //           .catch( error => {
  //               console.error( error );
  //           } );
  //   </script>`
  // }
  else if (route === 'updateBlog') {
    // Update Blog
    document.getElementById('content').innerHTML = `
      <h2>Update Blog</h2>
      <form id="updateBlogForm" action="/blog/update" method="post">
        <label for="title">Title:</label>
        <input type="text" id="updatedBlogTitle" name="title" required>
        <label for="category">Category:</label>
        <input type="text" id="updatedBlogcategory" name="category" required>
        <label for="description">Description:</label>
        <textarea id="editor" name="description"></textarea>
        <button id="saveBtn" type="submit" onclick="submit_update_Blog()">Update</button>
      </form>`;
  }
  else if (route === 'getBlog') {
    // Get Blog
    document.getElementById('content').innerHTML = `
      <h2>Get Blog</h2>
      <form id="getBlogForm">
        <label for="blogId">Blog id:</label>
        <input type="text" id="getBlogId" name="blogId" required>
        <button type="submit" onclick="submit_get_Blog()">Get</button>
      </form>`;
  }
  // Order start
  else if (route === 'getOrders') {
    // Get Blog
    document.getElementById('content').innerHTML = `
      <h2>Get Orders</h2>
      <form id="getBlogForm">
        <label for="userId">User id:</label>
        <input type="text" id="getUserId" name="userId" required>
        <button type="submit" onclick="submit_get_Orders()">Get</button>
      </form>`;
  }
  // Order end
  else if(route === 'createCoupon'){
    document.getElementById('content').innerHTML = `
    <h2>Create Coupon</h2>
    <form id="create_coupon_form" action="/coupon" method="POST">
      <label for="coupon_name">Name:</label>
      <input type="text" id="coupon_name" name="name" required>
      <label for="coupon_expiry">Expires At:</label>
      <input type="date" id="coupon_expiry" name="expiry" required>
      <label for="coupon_discount">Discount:</label>
      <input type="text" id="coupon_discount" name="discount" required>

      <button type="submit" onclick="submit_create_coupon()">Create</button>
    </form>`;
  } else if(route === 'getAllCoupon'){
    fetchCouponData();
  } else if(route === 'deleteCoupon'){
    document.getElementById('content').innerHTML = `
    <h2>Delete Coupon</h2>
    <form id="create_coupon_form" action="/coupon/delete" method="post">
      <label for="coupon_name">Coupon name:</label>
      <input type="text" id="coupon_name" name="name" required>
      <button type="submit" onclick="submit_delete_coupon()">Delete</button>
    </form>`;
  }
   else {
    // You can handle other routes similarly
    document.getElementById('content').innerHTML = `<p>${route} route content will go here.</p>`;
  }
}

function getProductById() {
  // Implement logic to get product by ID
  // For simplicity, this example just displays an alert
  const productId = document.getElementById('productId').value;
  alert(`Get product with ID: ${productId}`);
}

function submitProduct() {
  // Implement logic to submit the product form
  // For simplicity, this example just displays an alert
  alert('Product added successfully!');
}

// const handleStyleSubmit = async () => {
//   try {
//     const styleType = document.getElementById('styleType').value.toLowerCase();
//     const prodId = document.getElementById('prodId').value;

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'  
//       },
//       body: JSON.stringify({
//         "type": styleType,
//         "id": prodId
//       })
//     };

//     const response = await fetch('/product/style', options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }

//     const data = await response.json();
//     //console.log("Style status: ", data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


async function submit_block_user(){
  let userId = document.getElementById('blockUserId').value;
  const response = await fetch(`/user/block-user${userId}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  //console.log(data.message);
};

const submit_unblock__user = async() => {
  let userId = document.getElementById('unblockUserId').value;
  const response = await fetch(`/user/unblock-user/${userId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  //console.log(data.message);
};

const submit_get_Blog = async() => {
  let blogId = document.getElementById('blogId').value;
  const response = await fetch(`blog/getBlog/${blogId}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  //console.log("Blog Data: ", data);
}

const submit_get_Orders = async() => {
  let blogId = document.getElementById('userId').value;
  const response = await fetch(`/user/get-orders`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  //console.log("Orders Data: ", data);
}

const fetchCouponData = async () => {
  try {
    const response = await fetch("/coupon/all_coupons", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch coupons');
    }

    const data = await response.json();
    //console.log('Data: ', data);

    const couponsHTML = data.map(coupon => {
      // Extracting just the date from the expiry timestamp
      const expiryDate = new Date(coupon.expiry).toLocaleDateString();

      return `
        <div class="coupon">
          <div class="coupon-header">
            <h2>${coupon.name}</h2>
            <span class="expiry">Expires: ${expiryDate}</span>
          </div>
          <div class="coupon-content">
            <span class="discount">${coupon.discount}% OFF</span>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('content').innerHTML = couponsHTML;
  } catch (error) {
    console.error('Error fetching coupons:', error);
  }
};
}

function redirectToAdmin() {
  window.location = '/admin';
}