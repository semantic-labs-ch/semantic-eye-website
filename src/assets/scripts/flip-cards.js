// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    // Detect if the device supports hover (typically has a mouse)
    // AND doesn't primarily use touch (coarse pointer)
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (hasHover) {
        // Mouse/Desktop: Use CSS hover (remove JS toggling)
        // Just add a class to enable hover styles
        document.body.classList.add('mouse-device');
        
        // Optional: Ensure any flipped class is removed (clean slate)
        flipCards.forEach(card => {
            card.classList.remove('flipped');
        });
        
    } else {
        // Touch/Mobile: Use click/tap toggling
        document.body.classList.add('touch-device');
        
        flipCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('flipped');
            });
        });
    }
});