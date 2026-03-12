const menuCards = document.querySelectorAll('.menu-card');
let currentIndex = -1;

function updateSelection() {
    menuCards.forEach(card => card.classList.remove('active'));

    if (currentIndex >= 0 && currentIndex < menuCards.length) {
        menuCards[currentIndex].classList.add('active');
        
        menuCards[currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

document.addEventListener('keydown', function(event) {
    
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return; 
    }

    const key = event.key;

    if (key === "ArrowRight") {
        if (currentIndex < menuCards.length - 1) {
            currentIndex++;
            updateSelection();
        }
    } 
    else if (key === "ArrowLeft") {
        if (currentIndex > 0) {
            currentIndex--;
            updateSelection();
        } else if (currentIndex === -1 && menuCards.length > 0) {
            currentIndex = 0;
            updateSelection();
        }
    }

    else if (key === "Enter") {
        if (currentIndex !== -1) {
            event.preventDefault(); 
            const menuName = menuCards[currentIndex].querySelector('h2').innerText;
            alert(`You selected: ${menuName}. Enjoy your delicious bread! 🍞`);
        }
    }

    else if (key === "l" || key === "L") {
        if (typeof logout === 'function') {
            logout();
        } else {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            alert("You have been logged out.");
            window.location.href = "login.html";
        }
    }

    else if (key === "h" || key === "H") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});