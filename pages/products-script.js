// Products Page - Search & Filter Functionality
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const productCards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('noResults');

function filterAndSort() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    let visibleCount = 0;

    // Filter products
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const matches = productName.includes(searchTerm);
        
        if (matches) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Sort products
    const visibleCards = Array.from(productCards).filter(card => card.style.display !== 'none');
    
    if (sortValue === 'price-low') {
        visibleCards.sort((a, b) => {
            const priceA = parseInt(a.dataset.price) || 0;
            const priceB = parseInt(b.dataset.price) || 0;
            return priceA - priceB;
        });
    } else if (sortValue === 'price-high') {
        visibleCards.sort((a, b) => {
            const priceA = parseInt(a.dataset.price) || 0;
            const priceB = parseInt(b.dataset.price) || 0;
            return priceB - priceA;
        });
    }

    // Reorder DOM
    const parent = productCards[0].parentNode;
    visibleCards.forEach(card => {
        parent.appendChild(card);
    });

    // Show/hide no results
    if (visibleCount === 0) {
        noResults.style.display = 'flex';
    } else {
        noResults.style.display = 'none';
    }
}

// Event listeners
if (searchInput) {
    searchInput.addEventListener('input', filterAndSort);
}

if (sortSelect) {
    sortSelect.addEventListener('change', filterAndSort);
}

// Add smooth animation to products
productCards.forEach(card => {
    card.style.animation = 'fadeInUp 0.6s ease forwards';
});
