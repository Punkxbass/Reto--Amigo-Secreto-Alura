/* Almacena los amigos como objetos,
con nombre y color asignado para mantener consistencia visual */
let amigos = [];
// Almacena los colores generados para evitar que se repitan
let coloresUsados = [];
// Indica luego de cuantos registros se puede repetir un color
const sePuedeRepetirColorLuegoDe = 5;

// Configura la tecla "Enter" para agregar amigos
document.getElementById('amigo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarAmigo();
});

/**
 * Agrega un nuevo amigo validando:
 * 1. Que el campo no esté vacío
 * 2. Que no contenga números
 * 3. Que tenga un color único asignado
 * Actualiza la lista visual y limpia el input
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('¡Por favor, escribe un nombre válido!');
        return;
    }

    if (/\d/.test(nombre)) {
        alert('¡Ten en cuenta que los números no son válidos en los nombres!');
        return;
    }

    // Genera un color único y lo asigna al amigo
    const nuevoColor = generarColorUnico();
    amigos.push({ nombre: nombre, color: nuevoColor });
    input.value = '';
    actualizarLista();
}

/**
 * Genera colores hexadecimales que no se hayan usado en los últimos 5 registros
 * @returns {string} indica un color hexadecimal único
 */
function generarColorUnico() {
    const letras = '0123456789ABCDEF';
    let color;
    
    do { // Repite hasta que se genere un color único
        color = '#';
        for (let i = 0; i < 6; i++) { // Genera un color hexadecimal aleatorio
            color += letras[Math.floor(Math.random() * 16)]; // Añade un carácter aleatorio
        }
    } while (coloresUsados.includes(color)); // Verifica que no se haya usado antes
    
    // Mantiene un historial de máximo 5 colores
    coloresUsados.push(color);
    // Elimina el color más antiguo si se excede el límite
    if (coloresUsados.length > sePuedeRepetirColorLuegoDe) coloresUsados.shift();
    //  Retorna el color generado
    return color;
}

/**
 * Actualiza la lista visual conservando los colores asignados previamente
 * Crea elementos de lista <li> con:
 * - Número de orden con color persistente
 * - Nombre del amigo
 */
function actualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Contenedor de la lista
    lista.innerHTML = ''; // Limpia la lista antes de actualizarla
    lista.style.display = 'block'; // Muestra la lista de amigos

    //  Crea un elemento de lista <li> por cada amigo registrado
    amigos.forEach((amigo, indice) => {
        const li = document.createElement('li');
        li.className = 'lista-elementos';

        // Número de orden con color asignado
        const formatoNumero = document.createElement('span');
        formatoNumero.textContent = indice + 1; // Número de inicio (0 + 1)
        formatoNumero.className = 'formato-numero';
        formatoNumero.style.backgroundColor = amigo.color; // Usa el color almacenado

        // Nombre del amigo
        const colorNombre = document.createElement('span');
        colorNombre.className = 'name-text';
        colorNombre.textContent = amigo.nombre;

        // Añade los elementos al contenedor de la lista
        li.appendChild(formatoNumero);
        li.appendChild(colorNombre);
        lista.appendChild(li);
    });
}

/**
 * Realiza el sorteo con efecto de animación ocultando la lista de amigos:
 * 1. Valida que existan amigos registrados
 * 2. Oculta la lista de amigos al iniciar el sorteo
 * 3. Muestra secuencia aleatoria y resultado final
 */
function sortearAmigo() {
    // Verifica que existan amigos registrados
    if (amigos.length === 0) {
        alert('¡Recuerda agregar amigos antes de sortear!');
        return;
    }
    // Elementos de la interfaz
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    const inputAmigo = document.getElementById('amigo'); 

    // Oculta la lista de amigos al iniciar el sorteo
    listaAmigos.style.display = 'none';
    resultado.innerHTML = '';
    let contador = 0;
    // Intervalo de tiempo para mostrar secuencia aleatoria
    const intervalo = setInterval(() => {
        const temporal = amigos[Math.floor(Math.random() * amigos.length)].nombre;
        resultado.textContent = temporal;
        contador++;
        // Muestra el resultado final al superar las 15 iteraciones
        if (contador >= 15) {
            clearInterval(intervalo);
            const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)].nombre;
            resultado.innerHTML = `
                <li>🎉 ¡${amigoSecreto} será el amigo secreto! 🎉</li>
                <div style="margin-top: 10px; font-size: 0.8em;">
                    Presiona "V" para ver la lista | "R" para repetir
                </div>
            `;
            // Configura las teclas "V" para mostrar la lista o "R" para repetir el sorteo
            const handleKeyPress = (e) => {
                // Verifica que no se esté escribiendo en el input de amigos
                if (document.activeElement.id !== 'amigo') {
                    
                    // Si no se esta en el input, muestra la lista al presionar la tecla "V"
                    if (e.key.toLowerCase() === 'v') {
                        listaAmigos.style.display = 'block';
                        resultado.innerHTML = `
                            <li>🎉 ¡${amigoSecreto} será el amigo secreto! 🎉</li>
                            <div style="margin-top: 10px; font-size: 0.8em;">
                                Lista visible | Presiona "R" para nuevo sorteo
                            </div>
                        `;
                // Si no se esta en el input, repite el sorteo al presionar la tecla "R"
                } else if (e.key.toLowerCase() === 'r') {
                    document.removeEventListener('keydown', handleKeyPress);
                    sortearAmigo();
                }
                }
            };
            // Escucha las teclas "V" y "R" para mostrar la lista o repetir el sorteo
            document.addEventListener('keydown', handleKeyPress);
        }
        // Intervalo de 100 ms para mostrar la secuencia aleatoria
    }, 100);
}