"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
var Casino_1 = require("./Casino");
var Jugador_1 = require("./Jugador");
var Ruleta_1 = require("./Ruleta");
var Variacion1_1 = require("./Variacion1");
var Variacion2_1 = require("./Variacion2");
var CarreraDeCaballos_1 = require("./CarreraDeCaballos");
var CasinoMain = new Casino_1.Casino("Lucky 38 de New Vegas");
var jugadorActual = null;
var registroDeActividad = [];
CasinoMain.agregarJuego(Variacion1_1.Variacion1);
CasinoMain.agregarJuego(Variacion2_1.Variacion2);
CasinoMain.agregarJuego(Ruleta_1.Ruleta);
CasinoMain.agregarJuego(CarreraDeCaballos_1.CarreraDeCaballos);
function mensajeError(mensaje) {
    console.clear();
    mensajeCentrado(mensaje);
    readlineSync.question("Presiona Enter para continuar");
    console.clear();
}
function mensajeCentrado(mensaje) {
    var anchoDeConsola = process.stdout.columns || 80;
    var padding = Math.max(0, Math.floor((anchoDeConsola - mensaje.length) / 2));
    var espacios = Array(padding).fill(' ').join('');
    console.log(espacios + mensaje);
}
function jugarJuego(jugadorActual, juegoElegido) {
    var juegos = [
        {
            numeroDeJuego: 0,
            nombreDelJuego: 'Fiesta Frutal',
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83C\uDF52\uD83C\uDF52\uD83C\uDF52' - \u00A1Cereza Triple!   X 10\n            \uD83C\uDFB0 '\uD83C\uDF4B\uD83C\uDF4B\uD83C\uDF4B' - \u00A1Limonada Triple! X 5\n            \uD83C\uDFB0 '\uD83C\uDF4A\uD83C\uDF4A\uD83C\uDF4A' - \u00A1Naranja Triple!  X 2\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            "
        },
        {
            numeroDeJuego: 1,
            nombreDelJuego: 'Fortuna de Diamantes',
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83D\uDC8E\uD83D\uDC8E\uD83D\uDC8E' - \u00A1Diamante Triple!         X 10\n            \uD83C\uDFB0 '\uD83C\uDF40\uD83C\uDF40\uD83C\uDF40' - \u00A1Tr\u00E9bol de la Suerte!    X 5\n            \uD83C\uDFB0 '\u2B50\u2B50\u2B50'   - \u00A1Estrella Radiante!      X 2\n            \uD83C\uDFB0 '\uD83C\uDF81\uD83C\uDF81\uD83C\uDF81' - \u00A1Premio Especial! \uD83C\uDF81 Tirada GRATIS\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \u00A1Haz girar los rodillos y prueba tu suerte! \uD83C\uDFB0\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            "
        },
        {
            numeroDeJuego: 2,
            nombreDelJuego: 'Ruleta',
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83C\uDFA1 Reglas del Juego \uD83C\uDFA1\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            La ruleta tiene los n\u00FAmeros del 0 al 37. \n            Elige un numero para apostar y buena suerte. \uD83C\uDF40\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ",
            preguntaParametroOpcional: "Cual es el n\u00FAmero al que desea apostar? Ingrese: "
        },
        {
            numeroDeJuego: 3,
            nombreDelJuego: 'Carrera de Caballos',
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83C\uDFC7 Carrera de Caballos \uD83C\uDFC7\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            Los caballos disponibles son:\n            \uD83D\uDC0E Caballo 1 - Margarita\n            \uD83D\uDC0E Caballo 2 - Picante\n            \uD83D\uDC0E Caballo 3 - Tormenta\n            \uD83D\uDC0E Caballo 4 - Petiso\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ",
            preguntaParametroOpcional: "A cual caballo desea apostar? Ingrese: "
        }
    ];
    var juegoEncontrado = juegos.find(function (juego) { return juego.numeroDeJuego === juegoElegido; });
    var opcion = 0;
    if (juegoEncontrado) {
        mensajeCentrado("Bienvenido al menú de " + juegoEncontrado.nombreDelJuego);
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menú de juegos");
        console.log("4. Volver al menú principal");
        opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        switch (opcion) {
            case 1:
                console.log("Cuantas fichas desea apostar?");
                var apuesta = validarVariables();
                console.clear();
                if (juegoElegido === 2 || juegoElegido === 3) {
                    if (juegoEncontrado.preguntaParametroOpcional) {
                        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                        var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                        mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta, parametroOpcional));
                        readlineSync.question("Pulse enter para continuar...");
                    }
                }
                else {
                    mensajeError(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta));
                }
                console.clear();
                registrarActividad("El jugador ".concat(jugadorActual.getNombre(), " jug\u00F3 a ").concat(juegoEncontrado.nombreDelJuego, ", apostando ").concat(apuesta, " fichas."));
                jugarJuego(jugadorActual, juegoElegido);
                break;
            case 2:
                if (juegoElegido === 2 || juegoElegido === 3) {
                    mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                    var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                    mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas(), parametroOpcional));
                    readlineSync.question("Pulse enter para continuar...");
                }
                else {
                    mensajeError(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas()));
                }
                console.clear();
                registrarActividad("El jugador ".concat(jugadorActual.getNombre(), " jug\u00F3 a ").concat(juegoEncontrado.nombreDelJuego, ", apostando ").concat(jugadorActual.getFichas(), " fichas."));
                jugarJuego(jugadorActual, juegoElegido);
                break;
            case 3:
                menuJuegos();
                break;
            case 4:
                menuPrincipal();
                break;
            default:
                console.log("Opción inválida");
                menuJuegos();
                break;
        }
    }
    else {
        console.log("Juego no encontrado. Por favor, selecciona un número válido.");
        menuJuegos();
    }
}
function iniciarJuego() {
    CasinoMain.abrirCasino();
    registrarActividad("El casino " + CasinoMain.getNombreCasino() + " abrio sus puertas");
    menuInicial();
}
function menuInicial() {
    console.clear();
    console.log();
    mensajeCentrado("Bienvenido al Casino " + CasinoMain.getNombreCasino());
    console.log();
    console.log("1. Ingresar");
    console.log("2. Salir");
    console.log("");
    var opcion = parseInt(readlineSync.question("Ingrese: "));
    switch (opcion) {
        case 1:
            console.clear();
            registrarse();
            break;
        case 2:
            console.clear();
            terminarJuego();
            break;
        default:
            console.clear();
            mensajeError("Valor ingresado Invalido, ingrese uno valido");
            menuInicial();
            break;
    }
}
function registrarse() {
    var registrado = false;
    while (!registrado) {
        var nombre = readlineSync.question('Nombre: ');
        // Validar que el nombre solo contenga letras y espacios
        var nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
        if (!nombreValido) {
            console.clear();
            console.log("El nombre ingresado no es válido. Solo se permiten letras y espacios.");
            continue;
        }
        var edad = readlineSync.questionInt("Edad: ");
        registrado = CasinoMain.agregarJugador(new Jugador_1.Jugador(nombre, edad));
        if (registrado) {
            jugadorActual = new Jugador_1.Jugador(nombre, edad);
            console.clear();
            console.log("Jugador registrado exitosamente en el casino.");
            registrarActividad("Un nuevo jugador se ha registrado en el casino: " + nombre + ", Edad: " + edad + " años.");
            menuPrincipal();
        }
        else {
            mensajeError("Registro fallido. Solo las personas con mayoría de edad pueden apostar.");
            console.log();
            menuInicial();
        }
    }
}
function validarVariables(opcion) {
    var monto = 0;
    var validacion = true;
    while (validacion) {
        var input = readlineSync.question("Ingrese: ");
        monto = parseInt(input);
        if (jugadorActual) {
            if (isNaN(monto) || monto <= 0) {
                console.log("El valor ingresado no es válido. Debe ingresar un número mayor a 0.");
            }
            else if (jugadorActual.getDinero() < monto && opcion == 2) {
                console.log("El monto ingresado debe ser menor o igual a la cantidad de dinero que tienes.");
            }
            else if (jugadorActual.getFichas() < monto && opcion == 3) {
                console.log("El monto ingresado debe ser menor o igual a la cantidad de fichas que tienes.");
            }
            else {
                validacion = false;
            }
        }
    }
    return monto;
}
function menuPrincipal() {
    if (jugadorActual) {
        console.log();
        mensajeCentrado("Usted está en el lobby del casino " + CasinoMain.getNombreCasino());
        console.log("Su dinero es de: " + jugadorActual.getDinero() + "$");
        console.log("Sus fichas son: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Jugar");
        console.log("2. Comprar Fichas");
        console.log("3. Cambiar fichas por dinero");
        console.log("4. Salir");
        var opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                menuJuegos();
                break;
            case 2:
                console.clear();
                console.log("Su dinero actual es de: " + jugadorActual.getDinero() + "$");
                ;
                console.log("¿Cuántas fichas desea comprar?");
                var fichasAComprar = validarVariables(opcion);
                CasinoMain.cambiarDineroPorFichas(jugadorActual, fichasAComprar);
                console.clear();
                console.log();
                console.log("Operación Realizada");
                registrarActividad("El jugador " + jugadorActual.getNombre() + " compró " + fichasAComprar + " fichas");
                menuPrincipal();
                break;
            case 3:
                console.clear();
                console.log("Sus fichas actuales son: " + jugadorActual.getFichas());
                console.log("¿Cuantas fichas desea cambiar?");
                var fichasAVender = validarVariables(opcion);
                CasinoMain.cobrarLaCaja(jugadorActual, fichasAVender);
                console.clear();
                if (CasinoMain.cobrarLaCaja(jugadorActual, fichasAVender)) {
                    console.log("Fichas vendidas exitosamente!");
                    console.log();
                    registrarActividad("El jugador " + jugadorActual.getNombre() + " compró " + fichasAVender + " fichas");
                    menuPrincipal();
                }
                else {
                    console.log("Ingrese un numero valido.");
                    console.log();
                    menuPrincipal();
                }
                break;
            case 4:
                registrarActividad("El jugador " + jugadorActual.getNombre() + " se retiro del casino con " + jugadorActual.getFichas() + " fichas y con " + jugadorActual.getDinero() + " dolares");
                terminarJuego();
                break;
            default:
                console.clear();
                console.log("Opción inválida. Seleccione nuevamente");
                menuPrincipal();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function menuJuegos() {
    if (jugadorActual) {
        mensajeCentrado("Juegos disponibles en el casino:");
        console.log();
        console.log("1. Tragamonedas");
        console.log("2. Ruleta");
        console.log("3. Carrera de Caballos");
        console.log("4. Volver al menú principal");
        var opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                mensajeCentrado("Bienvenido A Las Tragamonedas");
                console.log();
                console.log("1. Fiesta Frutal");
                console.log("2. Fortuna de Diamantes");
                console.log("3. Volver al menú de Juegos");
                var subOpcion = readlineSync.questionInt("Ingrese: ");
                switch (subOpcion) {
                    case 1:
                        console.clear();
                        jugarJuego(jugadorActual, 0);
                        break;
                    case 2:
                        console.clear();
                        jugarJuego(jugadorActual, 1);
                        break;
                    case 3:
                        console.clear();
                        menuJuegos();
                        break;
                    default:
                        console.clear();
                        console.log("Opción inválida. Seleccione nuevamente");
                        menuJuegos();
                        break;
                }
                break;
            case 2:
                console.clear();
                jugarJuego(jugadorActual, 2);
                break;
            case 3:
                console.clear();
                jugarJuego(jugadorActual, 3);
                break;
            case 4:
                console.clear();
                menuPrincipal();
                return;
            default:
                console.clear();
                console.log("Opción inválida. Seleccione nuevamente");
                menuJuegos();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function registrarActividad(mensaje) {
    var timestamp = new Date().toISOString();
    registroDeActividad.push("[".concat(timestamp, "] ").concat(mensaje));
}
function terminarJuego() {
    console.clear();
    console.log();
    console.log("Esperamos verte pronto");
    registrarActividad("El casino " + CasinoMain.getNombreCasino() + " cerró sus puertas");
    var contenidoRegistro = registroDeActividad.join("\n");
    var nombreArchivo = "registro_casino_".concat(new Date().toISOString().replace(/[:.]/g, "_"), ".txt");
    fs.writeFileSync(nombreArchivo, contenidoRegistro, "utf-8");
    console.log("Registro de actividad guardado en: ".concat(nombreArchivo));
    CasinoMain.cerrarCasino();
    process.exit();
}
iniciarJuego();
