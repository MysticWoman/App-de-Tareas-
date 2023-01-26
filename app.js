// Modal
const $openButton = document.querySelector("#open-modal")
const $containModal =document.querySelector(".contain-modal")
const $closeButton =document.querySelector("#close-modal")

$openButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.add("show-modal")
})
$closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.remove("show-modal")
})