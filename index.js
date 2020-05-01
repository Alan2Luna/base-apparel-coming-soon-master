const correo = document.querySelector('.input');
const formulario = document.querySelector('.form');
const btn = document.querySelector('.btn-submit');
const warning = document.querySelector('.warning')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    warning.innerHTML = '';
    let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!expresion.test(correo.value)) {
        warning.innerHTML = "please provide a valid email";
        correo.dataset.warning='on';
    }
    else {
        warning.dataset.warning='off';
        return true;
    }
})