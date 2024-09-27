const qrCode = document.querySelector("nord-qrcode")
const input = document.querySelector("nord-input")

input.addEventListener("input", () => (qrCode.value = input.value))