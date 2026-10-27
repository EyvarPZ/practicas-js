const botones = document.querySelectorAll('[data-ejercicio]');
const ventana = document.querySelector('#ventana-practica');
const formulario = document.querySelector('#formulario-practica');
const titulo = document.querySelector('#titulo-practica');
const cerrar = document.querySelector('#cerrar');

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
    botones.forEach((item) => item.classList.remove('seleccionado'));
    boton.classList.add('seleccionado');
    abrirPractica(boton.dataset.ejercicio);
    });
});

function abrirPractica(tipo) {
    ventana.classList.add('visible');

    if (tipo === 'suma') {
    titulo.textContent = 'Suma de dos números';
    formulario.innerHTML = `
        <label class="campo">Primer valor
        <input id="valor1" type="number">
        </label>
        <label class="campo">Segundo valor
        <input id="valor2" type="number">
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const valor1 = Number(document.querySelector('#valor1').value);
        const valor2 = Number(document.querySelector('#valor2').value);
        document.querySelector('#resultado').textContent =
        `Resultado: ${valor1} + ${valor2} = ${valor1 + valor2}`;
    });
        }

    if (tipo === 'signo') {
    titulo.textContent = 'Número positivo o negativo';
    formulario.innerHTML = `
        <label class="campo">Número
        <input id="numero" type="number">
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const numero = Number(document.querySelector('#numero').value);
        let mensaje;

        if (numero > 0) mensaje = `${numero} es positivo.`;
        else if (numero < 0) mensaje = `${numero} es negativo.`;
        else mensaje = 'El número es cero.';

        document.querySelector('#resultado').textContent = mensaje;
    });
    }

    if (tipo === 'calculadora') {
    titulo.textContent = 'Calculadora';
    formulario.innerHTML = `
        <label class="campo">Primer valor
        <input id="valor1" type="number">
        </label>
        <label class="campo">Segundo valor
        <input id="valor2" type="number">
        </label>
        <label class="campo">Operación
        <select id="operacion">
            <option value="sumar">Sumar</option>
            <option value="restar">Restar</option>
            <option value="multiplicar">Multiplicar</option>
            <option value="dividir">Dividir</option>
        </select>
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const a = Number(document.querySelector('#valor1').value);
        const b = Number(document.querySelector('#valor2').value);
        const operacion = document.querySelector('#operacion').value;
        let resultado;

        if (operacion === 'sumar') resultado = a + b;
        if (operacion === 'restar') resultado = a - b;
      if (operacion === 'multiplicar') resultado = a * b;
        if (operacion === 'dividir') {
        resultado = b === 0 ? 'No se puede dividir entre cero.' : a / b;
        }

        document.querySelector('#resultado').textContent =
        `Resultado: ${a} / ${b} = ${resultado}`;
    });
    }

    if (tipo === 'pares') {
    titulo.textContent = 'Suma de números pares e impares';
    formulario.innerHTML = `
        <label class="campo">Límite del número
        <input id="limite" type="number">
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const limite = Number(document.querySelector('#limite').value);
        let sumaPares = 0;
        let sumaImpares = 0;

        for (let i = 1; i < limite; i++) {
        if (i % 2 === 0) sumaPares += i;
        else sumaImpares += i;
        }

        document.querySelector('#resultado').innerHTML = `
        <div>La suma de los primeros ${limite - 1} números pares es..</div>
        <div>${sumaPares}</div>
        <div>La suma de los primeros ${limite - 1} números impares es..</div>
        <div>${sumaImpares}</div>
        `;
    });
    }

    if (tipo === 'tabla') {
    titulo.textContent = 'Tabla de multiplicar';
    formulario.innerHTML = `
        <label class="campo">Número
        <input id="numero" type="number">
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const numero = Number(document.querySelector('#numero').value);
        let texto = '';

        for (let i = 1; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}<br>`;
        }

        document.querySelector('#resultado').innerHTML = texto;
    });
    }

    if (tipo === 'jubilacion') {
    titulo.textContent = 'Cálculo de jubilación';
    formulario.innerHTML = `
        <label class="campo">Edad
        <input id="edad" type="number">
        </label>
        <label class="campo">Años trabajados
        <input id="trabajados" type="number">
        </label>
        <button class="ejecutar" id="ejecutar">Ejecutar práctica</button>
        <div class="resultado" id="resultado"></div>
    `;

    document.querySelector('#ejecutar').addEventListener('click', () => {
        const edad = Number(document.querySelector('#edad').value);
        const trabajados = Number(document.querySelector('#trabajados').value);
        const resultado = edad >= 65 || trabajados >= 30
        ? 'Puede jubilarse.'
        : 'Todavía no puede jubilarse.';

        document.querySelector('#resultado').textContent = resultado;
    });
    }
}

cerrar.addEventListener('click', () => {
    ventana.classList.remove('visible');
});

ventana.addEventListener('click', (evento) => {
    if (evento.target === ventana) {
    ventana.classList.remove('visible');
    }
});
