var $resultado;
var $modos;
var modos;

function obtenerEscala() {
    const modo = $modos.value;
    let escala = 'TTSTTTS';

    console.info('Obteniendo escala...');

    for (let i = 0; i < modos.indexOf(modo); i++) {
        console.log(escala);
        escala = escala.slice(1) + escala.slice(0, 1);
    }

    console.info('Escala: ' + escala);
    return escala;
}

function actualizarResultado() {
    console.info('Actualizando resultado.');

    $resultado.innerHTML = `
        <p>${
            $modos.value == 'jon'? '(Escala mayor)&nbsp;': $modos.value == 'eol'? '(Escala menor)&nbsp;': ''
        }${obtenerEscala()}</p>

        <b>T = 1 Tono</b>
        <br/>
        <b>S = 1/2 Tono (Semitono)</b>
    `;
    $resultado.classList.add('cambio');
    setTimeout(() => $resultado.classList.remove('cambio'), 1000);
}

function iniciar() {
    console.info('Iniciando...');

    $resultado = document.getElementById('resultado');
    $modos = document.getElementById('modos');
    modos = [
        'jon',
        'dor',
        'fri',
        'lid',
        'mix',
        'eol',
        'loc',
    ];
    actualizarResultado();

    $modos.addEventListener('change', actualizarResultado);
}

document.readyState != 'loading'? iniciar(): document.addEventListener('DOMContentLoaded', iniciar);