function cambiarTema() {
    document.querySelectorAll('section, div, body').forEach(
        elemento => elemento.classList.toggle('bg-dark')
    );
    document.querySelectorAll('*').forEach(
        elemento => elemento.tagName.toLowerCase() != 'select'? elemento.classList.toggle('text-light'): {}
    );

    document.querySelectorAll('i[id*=tema]').forEach(
        icono => icono.classList.toggle('d-none')
    );
}

function iniciar() {
    cambiarTema();

    document.getElementById('cambiar-tema').addEventListener('click', cambiarTema);
}

document.readyState != 'loading'? iniciar(): document.addEventListener('DOMContentLoaded', iniciar);