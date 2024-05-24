
// Dynamic Banner
// Function to set the background image based on window width
function setDynamicBanner() {
    const category = document.getElementById('nav_loc').innerHTML;
    const element = document.getElementById('cat-banner');
    const windowWidth = window.innerWidth;
  
    //console.log("Loc: ", category);
  
    let imageUrl;
    if (windowWidth <= 575.98) {
        imageUrl = `/images/Banner/${category}/mob.jpg`;
    } else {
        imageUrl = `/images/Banner/${category}/pc.jpg`;
    }
  
    element.style.backgroundImage = `url("${imageUrl}")`;
  }
  
  // Initial call to set the background image on page load
  setDynamicBanner();
  
  // Add event listener for window resize
  window.addEventListener('resize', setDynamicBanner);
  
  // Dynamic Banner End
  