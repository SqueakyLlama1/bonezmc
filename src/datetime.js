function setBackground() {
    const hour = new Date().getHours();
    let background = '';
    
    if (hour >= 5 && hour < 6) {
        background = 'img/time/sunrise.png';
    } else if (hour >= 6 && hour < 7) {
        background = 'img/time/day.png'
    } else if (hour >= 7 && hour < 9) {
        background = 'img/time/morning.png';
    } else if (hour >= 9 && hour < 17) {
        background = 'img/time/noon.png';
    } else if (hour >= 17 && hour < 20) {
        background = 'img/time/sunset.png';
    } else {
        background = 'img/time/midnight.png';
    }
    
    document.body.style.backgroundImage = `url('${background}')`;
}

document.addEventListener('DOMContentLoaded', function() {
    setBackground();
	setTimeout(function() {
    	document.body.classList.add('visible');
	}, 10);
    setInterval(setBackground, 10000); // 10 seconds per update check
});