
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("Error: No se puede dividir por cero.");
        return "Indefinido";
    }
    return a / b;
}


function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero === null) return null; 
        numero = Number(numero);
    } while (isNaN(numero));

    return numero;
}


function iniciarCalculadora() {
    let continuar = true;

    while (continuar) {
        let operacion = prompt(
            "Selecciona una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
        );

        if (operacion === "5" || operacion === null) {
            alert("Saliendo de la calculadora.");
            continuar = false;
            break;
        }

        let num1 = obtenerNumero("Ingresa el primer número:");
        if (num1 === null) break;

        let num2 = obtenerNumero("Ingresa el segundo número:");
        if (num2 === null) break;

        let resultado;
        switch (operacion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Opción no válida.");
                continue;
        }

        alert(`El resultado es: ${resultado}`);
    }
}

iniciarCalculadora();
