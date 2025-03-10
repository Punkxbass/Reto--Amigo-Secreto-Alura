# 🎁 Reto: Amigo Secreto | Desafío de Programación Alura

## Descripción
Aplicación web que permite organizar sorteos de amigo secreto de manera aleatoria y divertida. Este proyecto forma parte de un desafío de programación de Alura. El código HTML y CSS fue proporcionado previamente para que los participantes nos concentráramos exclusivamente en desarrollar la lógica de programación con JavaScript.

## Propósito del desafío

El propósito principal de este desafío es aplicar los conocimientos adquiridos, centrándose en conceptos clave como:

- Uso adecuado de variables y constantes
- Implementación de estructuras condicionales
- Creación y organización de funciones
- Manipulación de listas (arrays) y objetos
- Eventos y manejo del DOM
- Generación de valores aleatorios
- Validación de datos de entrada

## Características principales

- **Interfaz intuitiva:** Diseño sencillo y atractivo.
- **Gestión de participantes:** Sistema para añadir nombres a la lista de participantes.
- **Identificación visual:** Asignación automática de colores únicos a cada participante.
- **Animación de sorteo:** Efecto visual dinámico durante la selección del amigo secreto.
- **Atajos de teclado:** Implementación de teclas "Enter", "V" y "R" para mejorar la experiencia de usuario.

## Tecnologías utilizadas

- HTML5
- CSS3 
- JavaScript (desarrollado como parte del desafío)
- Google Fonts (Inter y Merriweather)

## Conceptos de programación aplicados

### Variables y constantes
```javascript
let amigos = [];
let coloresUsados = [];
const sePuedeRepetirColorLuegoDe = 5;
```

### Funciones y su organización
```javascript
function agregarAmigo() { /* ... */ }
function generarColorUnico() { /* ... */ }
function actualizarLista() { /* ... */ }
function sortearAmigo() { /* ... */ }
```

### Manipulación de arrays y objetos
```javascript
amigos.push({ nombre: nombre, color: nuevoColor });
coloresUsados.push(color);
if (coloresUsados.length > sePuedeRepetirColorLuegoDe) coloresUsados.shift();
```

### Eventos y control del DOM
```javascript
document.getElementById('amigo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarAmigo();
});
document.addEventListener('keydown', handleKeyPress);
```

### Validaciones
```javascript
if (!nombre) {
    alert('¡Por favor, escribe un nombre válido!');
    return;
}

if (/\d/.test(nombre)) {
    alert('¡Ten en cuenta que los números no son válidos en los nombres!');
    return;
}
```

## Cómo usar

1. Abre el archivo `index.html` en tu navegador web.
2. Escribe el nombre de cada participante en el campo de texto.
3. Presiona "Añadir" o la tecla "Enter" para agregar cada nombre a la lista.
4. Una vez que hayas agregado todos los participantes, haz clic en "Sortear amigo".
5. ¡Disfruta de la animación y descubre quién será el amigo secreto!
6. Usa la tecla "V" para ver nuevamente la lista de participantes o "R" para realizar otro sorteo.

## Estructura del proyecto

```
/
├── index.html          # Estructura HTML
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript desarrollada en el desafío
└── assets/             # Directorio de recursos
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Detalles de implementación

### Generación de colores únicos
Se implementó un algoritmo que garantiza que los colores asignados a los participantes no se repitan en los últimos 5 registros, mejorando así la experiencia visual.

### Validación de datos
El programa valida que:
- No se ingresen campos vacíos
- Los nombres no contengan números
- Existan participantes antes de realizar un sorteo

### Animación del sorteo
Se creó una secuencia animada que muestra diferentes nombres de forma aleatoria antes de revelar el resultado final, generando expectativa en los usuarios.

## Aprendizajes aplicados

Este proyecto demuestra la aplicación práctica de conceptos fundamentales de programación, tales como:

- Manipulación del DOM para crear una interfaz dinámica
- Implementación de eventos para responder a las acciones del usuario
- Uso de temporizadores para crear efectos de animación
- Generación y validación de datos aleatorios
- Gestión de estados y actualización de la interfaz

## Posibles mejoras futuras

- Implementar asignación de parejas sin repeticiones
- Añadir persistencia de datos mediante localStorage
- Implementar opciones de configuración adicionales
- Optimizar el código para mayor eficiencia

---

Desarrollado como un reto para hacer más divertidos los intercambios de regalos 🎁.
