document.addEventListener('DOMContentLoaded', function() {
    const name = "Kamu";
    const textToType = "Hallo " + name + ", hemmmm... bingung mau mulai dari mana? Aku mau ngomong sama kamu, tapi bingung mau gimana? sebenarnya aku suka sama kamu selama ini. Tapi, aku ragu buat ngomong langung. Kamu mau enggak jadi pacar aku?";
    const typingTextElement = document.getElementById("writing-text");

    function typeText(text, index, callback) {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(function() {
                typeText(text, index, callback);
            }, 100); // Delay between typing each character
        } else {
            setTimeout(callback, 1000); // Wait for a second before finishing typing
        }
    }

    typeText(textToType, 0);
});
