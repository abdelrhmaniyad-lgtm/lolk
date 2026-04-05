document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const shopBtn = document.getElementById('shop-now-btn');
    if(shopBtn) {
        shopBtn.addEventListener('click', () => {
             document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            alert(`Thanks for subscribing with ${input.value}!`);
            input.value = '';
        });
    }
});

let cartCount = 0;
function addToCart(productName) {
    cartCount++;
    const cartIcon = document.querySelector('.cart-icon');
    if(cartIcon) {
        cartIcon.textContent = `Cart (${cartCount})`;
        cartIcon.style.opacity = '0.5';
        setTimeout(() => cartIcon.style.opacity = '1', 200);
    }
    alert(`Added ${productName} to your cart.`);
}
