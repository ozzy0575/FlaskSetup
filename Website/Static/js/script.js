document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeTextButton");
    const paragraph = document.querySelector("main p");

    changeTextButton.addEventListener("click", function () {
        paragraph.textContent = "Text changed using JavaScript!";
    });
});
