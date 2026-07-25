    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
        //turning off the visuals
    }

    function playSound(e) {
        //whenever user presses any key
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
        //triggering the css if we are playing the key
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    //loops
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);