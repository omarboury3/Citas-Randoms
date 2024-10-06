import {citas}  from "./citas.js";

const button = document.getElementsByClassName("next-cita-button");

const cita_texto = document.getElementsByClassName("cita-random");

const autor_texto = document.getElementsByClassName("autor-cita");

button[0].addEventListener('click', (e) => {
    
    const numeroAleatorio = Math.floor(Math.random() * citas.length);
    console.log("se clikea");


    cita_texto[0].innerHTML = `<p>"${citas[numeroAleatorio].texto}"</p>`;
    autor_texto[0].innerHTML = `<p>"${citas[numeroAleatorio].autor}"</p>`;

});