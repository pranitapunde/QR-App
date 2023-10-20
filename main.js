
let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("select");
let image = document.querySelector("img");


const generateQR = async (e) => {
    e.preventDefault();
    // console.log (input.value,select.value);
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`)

    // console.log(response.url);
    image.setAttribute("src", response.url);
    form.reset();

};

form.addEventListener("submit", generateQR);