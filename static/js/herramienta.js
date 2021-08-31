var $col_herramienta;
var $boton_cerrar;
var $boton_abrir;
var $menu;

function cerrarHerramienta() {
    console.info('Cerrando herramienta...');

    $col_herramienta.classList.add('d-none');
    $menu.classList.remove('d-none');
}

function abrirHerramienta() {
    console.info('Abriendo herramienta...');

    $col_herramienta.classList.remove('d-none');
    $menu.classList.add('d-none');
}

function iniciar() {
    $col_herramienta = document.getElementById('col-herramienta');
    $boton_cerrar = $col_herramienta.querySelector('.btn-cerrar');
    $boton_abrir = document.getElementById('btn-abrir-herramienta');
    $menu = document.getElementById('menu');

    $boton_cerrar.addEventListener('click', cerrarHerramienta);
    $boton_abrir.addEventListener('click', abrirHerramienta);
}

document.readyState != 'loading'? iniciar(): document.addEventListener('DOMContentLoaded', iniciar);