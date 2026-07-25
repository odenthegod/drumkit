# drumkit
JS Drum Kit

A simple browser-based drum machine built with HTML, CSS, and vanilla JavaScript. Press keys A through L on your keyboard and each one plays a different drum sound — clap, hihat, kick, openhat, boom, ride, snare, tom, and tink — while the matching key on screen lights up with its own glow color, just like a real drum pad.

There are no frameworks or libraries involved. script.js listens for keyboard presses, finds the matching <audio> element using its data-key attribute, plays the sound, and adds a short animated "pressed" effect to the pad using CSS transitions. style.css handles the whole visual look, and index.html holds the structure.

It's a great beginner project for understanding the DOM, event listeners, and CSS transitions.

🔗 Try it live here: https://odenthegod.github.io/drumkit/
