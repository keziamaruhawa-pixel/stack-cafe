document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".testimonial-card");

    cards.forEach(card => {
        card.style.transition = "all 0.3s ease";
        
        card.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#ffe4c4";
            this.style.color = "#5a3e1b"; 
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            this.style.cursor = "pointer";
        });

        card.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
            this.style.transform = "";
            this.style.boxShadow = "";
            this.style.cursor = "";
        });
    });
});