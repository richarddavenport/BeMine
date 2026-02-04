function goToYesPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page1.classList.remove('active');
    page2.classList.add('active');
    
    // Add confetti animation
    createConfetti();
}

function handleNo() {
    const noButton = document.querySelector('.btn-no');
    
    // Move the button away when hovered/clicked
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Reset after a short delay
    setTimeout(() => {
        noButton.style.transform = '';
    }, 500);
}

function createConfetti() {
    const confetti = ['❤️', '💕', '💖', '💗'];
    
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        element.textContent = confetti[Math.floor(Math.random() * confetti.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = '-30px';
        element.style.fontSize = '2rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        
        document.body.appendChild(element);
        
        // Animate falling
        const duration = 2 + Math.random() * 2;
        let top = -30;
        const interval = setInterval(() => {
            top += 2 + Math.random() * 2;
            element.style.top = top + 'px';
            element.style.opacity = 1 - (top / window.innerHeight);
            
            if (top > window.innerHeight) {
                clearInterval(interval);
                element.remove();
            }
        }, 30);
    }
}
