//SGN your JS code here. If required.
In your HTML, the submit button does not have an id, but in your JavaScript, you’re trying to get the button by its id. This is why the error is occurring.

To fix this, you need to add an id to your submit button in the HTML. Here’s how you can do it:

<input type="submit" id="submit" value="Save" />
Also, it seems you are trying to change CSS variables using JavaScript. To achieve this, you need to use the setProperty method. Here’s how you can modify your JavaScript code:

window.onload = function() {
    const submit = document.getElementById("submit");

    if(submit) {
        submit.addEventListener('click', (event) => {
            event.preventDefault(); // to prevent form submission
            const fontSize = document.getElementById("fontsize").value;
            const fontColor = document.getElementById("fontcolor").value;
            document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
            document.documentElement.style.setProperty('--fontcolor', fontColor);
            document.cookie = `fontSize=${fontSize}; expires=Sat, 11 May 2024 17:30:00 GMT`;
            document.cookie = `fontColor=${fontColor}; expires=Sat, 11 May 2024 17:35:00 GMT`;
        });
    } else {
        console.error('Submit button not found');
    }
};