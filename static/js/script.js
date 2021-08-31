function iniciar() {
    document.querySelectorAll('a').forEach(link => link.target = '_blank');
}

document.readyState != 'loading'? iniciar(): document.addEventListener('DOMContentLoaded', iniciar);