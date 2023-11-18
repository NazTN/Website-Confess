document.addEventListener('DOMContentLoaded', function() {
    const textToType = "Thanks Ya atas jawabannya untuk kamu yang di sana :)";
    const typingTextElement = document.getElementById("thanks-text");

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