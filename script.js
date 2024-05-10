//SGN your JS code here. If required.
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