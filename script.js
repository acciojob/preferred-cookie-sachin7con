//SGN your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById("submit");

    submit.addEventListener('click', () => {
        const fontSize = document.getElementById("fontsize").value;
        const fontColor = document.getElementById("fontcolor").value;
        document.cookie = `fontSize=${fontSize}; expires=Sat, 11 May 2024 17:30:00 GMT`;
        document.cookie = `fontColor=${fontColor}; expires=Sat, 11 May 2024 17:35:00 GMT`;
    });
});