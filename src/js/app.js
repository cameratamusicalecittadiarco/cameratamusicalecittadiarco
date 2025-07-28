// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Mobile navigation toggle  
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile nav...'); // Debug log
    
    const mobileNavTrigger = document.querySelector('.mobile-nav-trigger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    console.log('Mobile trigger found:', mobileNavTrigger); // Debug log
    console.log('Mobile nav found:', mobileNav); // Debug log
    
    if (mobileNavTrigger && mobileNav) {
        mobileNavTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile nav clicked!'); // Debug log
            mobileNav.classList.toggle('dn');
            console.log('Nav classes after toggle:', mobileNav.className); // Debug log
        });
        console.log('Mobile nav listener attached successfully');
    } else {
        console.log('Mobile nav elements not found');
    }
});
