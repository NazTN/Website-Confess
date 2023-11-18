document.addEventListener('DOMContentLoaded', function() {
    // Delay in milliseconds (25 seconds)
    const delay = 20000;

    // Timeout to show the hidden div after the delay
    setTimeout(function() {
        const hiddenDiv = document.getElementById("submitform");

        // Log the element and its classList for debugging
        console.log("Hidden Div Element:", hiddenDiv);
        console.log("ClassList before removal:", hiddenDiv.classList);

        hiddenDiv.classList.remove("hidden");

        // Log the classList after removal for debugging
        console.log("ClassList after removal:", hiddenDiv.classList);
    }, delay);
});