function triggerHalloweenEffect() {
    document.body.classList.add('halloween-invert');
    
    const laugh = new Audio('witchlaugh.mp3');
    laugh.volume = 0.4;
    laugh.play().catch(() => {});
    
    setTimeout(() => {
        document.body.classList.remove('halloween-invert');
        witch.remove();
        document.querySelectorAll('.bat').forEach(b => b.remove());
    }, 8000);
}

setInterval(() => {
    const now = new Date();
    if (
        now.getMonth() === 9 &&
        now.getDate() === 31 &&
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() < 50
    ) {
        triggerHalloweenEffect();
    }
}, 10000); // 10 seconds per update check