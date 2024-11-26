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
function registrarActividad(mensaje) {
    var timestamp = new Date().toISOString();
    registroDeActividad.push("[".concat(timestamp, "] ").concat(mensaje));
}
function mensajeCentrado(mensaje) {
    var anchoDeConsola = process.stdout.columns || 80;
    var padding = Math.max(0, Math.floor((anchoDeConsola - mensaje.length) / 2));
    var espacios = Array(padding).fill(' ').join('');
    console.log(espacios + mensaje);
}
function registrarse() {
    var registrado = false;
    while (!registrado) {
        var nombre = readlineSync.question('Nombre: ');
        var edad = readlineSync.questionInt('Edad: ');
        registrado = CasinoMain.agregarJugador(new Jugador_1.Jugador(nombre, edad));
        if (registrado) {
            jugadorActual = new Jugador_1.Jugador(nombre, edad);
            console.clear();
            console.log("Jugador registrado exitosamente en el casino.");
            registrarActividad("Un nuevo jugador se ha registrado en el casino: " + nombre + ", Edad: " + edad + " años.");
            menuPrincipal();
        }
        else {
            console.log("Registro fallido. Solo las personas con mayoria de edad pueden apostar.");
            console.log();
        }
    }
}
function jugarJuego(jugadorActual, juegoElegido, opcion) {
    var juegos = [
        {
            numeroDeJuego: 0,
            nombreDelJuego: 'Fiesta Frutal',
            menuDelJuego: menuFiestaFrutal,
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83C\uDF52\uD83C\uDF52\uD83C\uDF52' - \u00A1Cereza Triple!   X 10\n            \uD83C\uDFB0 '\uD83C\uDF4B\uD83C\uDF4B\uD83C\uDF4B' - \u00A1Limonada Triple! X 5\n            \uD83C\uDFB0 '\uD83C\uDF4A\uD83C\uDF4A\uD83C\uDF4A' - \u00A1Naranja Triple!  X 2\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            "
        },
        {
            numeroDeJuego: 1,
            nombreDelJuego: 'Fortuna de Diamantes',
            menuDelJuego: menuFortunaDiamantes,
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83D\uDC8E\uD83D\uDC8E\uD83D\uDC8E' - \u00A1Diamante Triple!         X 10\n            \uD83C\uDFB0 '\uD83C\uDF40\uD83C\uDF40\uD83C\uDF40' - \u00A1Tr\u00E9bol de la Suerte!    X 5\n            \uD83C\uDFB0 '\u2B50\u2B50\u2B50'   - \u00A1Estrella Radiante!      X 2\n            \uD83C\uDFB0 '\uD83C\uDF81\uD83C\uDF81\uD83C\uDF81' - \u00A1Premio Especial! \uD83C\uDF81 Tirada GRATIS\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \u00A1Haz girar los rodillos y prueba tu suerte! \uD83C\uDFB0\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            "
        },
        {
            numeroDeJuego: 2,
            nombreDelJuego: 'Ruleta',
            menuDelJuego: menuRuleta,
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83C\uDFA1 Reglas del Juego \uD83C\uDFA1\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            La ruleta tiene los n\u00FAmeros del 0 al 37. \n            Elige un n\u00FAmero para apostar y buena suerte. \uD83C\uDF40\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ",
            preguntaParametroOpcional: "¿Cuál es el número al que desea apostar? Ingrese: "
        },
        {
            numeroDeJuego: 3,
            nombreDelJuego: 'Carrera de Caballos',
            menuDelJuego: menuCarreraDeCaballos,
            mensajeDelJuego: "\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83C\uDFC7 Carrera de Caballos \uD83C\uDFC7\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            Los caballos disponibles son:\n            \uD83D\uDC0E Caballo 1 - Margarita\n            \uD83D\uDC0E Caballo 2 - Picante\n            \uD83D\uDC0E Caballo 3 - Tormenta\n            \uD83D\uDC0E Caballo 4 - Petiso\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ",
            preguntaParametroOpcional: "¿A cuál caballo desea apostar? Ingrese: "
        }
    ];
    var juegoEncontrado = juegos.find(function (juego) { return juego.numeroDeJuego === juegoElegido; });
    if (juegoEncontrado && opcion === 1) {
        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
        var apuesta = parseInt(readlineSync.question("¿Cuántas fichas desea apostar? Ingrese: "));
        console.clear();
        if (juegoElegido === 2 || juegoElegido === 3) {
            mensajeCentrado(juegoEncontrado.mensajeDelJuego);
            var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
            mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta, parametroOpcional));
        }
        else {
            mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta));
        }
        readlineSync.question("Presiona Enter para continuar");
        console.clear();
        registrarActividad("El jugador ".concat(jugadorActual.getNombre(), " jug\u00F3 a ").concat(juegoEncontrado.nombreDelJuego, ", apostando ").concat(apuesta, " fichas."));
        juegoEncontrado.menuDelJuego();
    }
    else if (juegoEncontrado && opcion === 2) {
        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
        if (juegoElegido === 2 || juegoElegido === 3) {
            var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
            mensajeCentrado(CasinoMain.jugarApostandoTodo(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas(), parametroOpcional));
        }
        else {
            mensajeCentrado(CasinoMain.jugarApostandoTodo(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas()));
        }
        readlineSync.question("Presiona Enter para continuar");
        console.clear();
        registrarActividad("El jugador ".concat(jugadorActual.getNombre(), " jug\u00F3 a ").concat(juegoEncontrado.nombreDelJuego, ", apostando ").concat(jugadorActual.getFichas(), " fichas."));
        juegoEncontrado.menuDelJuego();
    }
    else {
        console.log("❌ Juego no encontrado. Por favor, selecciona un número válido.");
    }
}
function menuRuleta() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a la Ruleta");
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menu de juegos");
        console.log("4. Volver al menu principal");
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        switch (opcion) {
            case 1:
                jugarJuego(jugadorActual, 2, opcion);
                break;
            case 2:
                jugarJuego(jugadorActual, 2, opcion);
                break;
            case 3:
                menuJuegos();
                break;
            case 4:
                menuPrincipal();
                break;
            default:
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function menuCarreraDeCaballos() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a la Carrera de Caballos");
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menu de juegos");
        console.log("4. Volver al menu principal");
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        switch (opcion) {
            case 1:
                jugarJuego(jugadorActual, 3, opcion);
                break;
            case 2:
                jugarJuego(jugadorActual, 3, opcion);
                break;
            case 3:
                menuJuegos();
                break;
            case 4:
                menuPrincipal();
                break;
            default:
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function menuTragamonedas() {
    mensajeCentrado("Bienbenido A Las Tragamonedas");
    console.log();
    console.log("1. Fiesta Frutal");
    console.log("2. Fortuna de Diamantes");
    console.log("4. Volver al menu de Juegos");
    var opcion = readlineSync.questionInt("Ingrese: ");
    switch (opcion) {
        case 1:
            console.clear();
            menuFiestaFrutal();
            break;
        case 2:
            console.clear();
            menuFortunaDiamantes();
            break;
        case 3:
            console.clear();
            menuJuegos();
            return;
        default:
            console.clear();
            console.log("Opción inválida. Seleccione nuevamente");
            menuInicial();
            break;
    }
}
function menuFiestaFrutal() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a Fiesta Frutal");
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menu de juegos");
        console.log("4. Volver al menu principal");
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        switch (opcion) {
            case 1:
                jugarJuego(jugadorActual, 0, opcion);
                break;
            case 2:
                jugarJuego(jugadorActual, 0, opcion);
                break;
            case 3:
                menuJuegos();
                break;
            case 4:
                menuPrincipal();
                break;
            default:
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function menuFortunaDiamantes() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a Fortuna de Diamantes");
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menu de juegos");
        console.log("4. Volver al menu principal");
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        switch (opcion) {
            case 1:
                jugarJuego(jugadorActual, 1, opcion);
                break;
            case 2:
                jugarJuego(jugadorActual, 1, opcion);
                break;
            case 3:
                menuJuegos();
                break;
            case 4:
                menuPrincipal();
                break;
            default:
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
                break;
        }
    }
    else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}
function menuJuegos() {
    mensajeCentrado("Juegos disponibles en el casino:");
    console.log();
    console.log("1. Tragamonedas");
    console.log("2. Carrera de Caballos");
    console.log("3. Ruleta");
    console.log("4. Volver al menu principal");
    var opcion = readlineSync.questionInt("Ingrese: ");
    switch (opcion) {
        case 1:
            console.clear();
            menuTragamonedas();
            break;
        case 2:
            console.clear();
            menuCarreraDeCaballos();
            break;
        case 3:
            console.clear();
            menuRuleta();
            break;
        case 4:
            console.clear();
            menuPrincipal();
            return;
        default:
            console.clear();
            console.log("Opción inválida. Seleccione nuevamente");
            menuInicial();
            break;
    }
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
                console.log("¿Cuantas fichas desea comprar?");
                var fichasAComprar = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cambiarDineroPorFichas(jugadorActual, fichasAComprar);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                registrarActividad("El jugador " + jugadorActual.getNombre() + " compro " + fichasAComprar + " fichas");
                menuPrincipal();
                break;
            case 3:
                console.clear();
                console.log("Sus fichas actuales son: " + jugadorActual.getFichas());
                console.log("¿Cuantas fichas desea cambiar?");
                var fichasAVender = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cobrarLaCaja(jugadorActual, fichasAVender);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                registrarActividad("El jugador " + jugadorActual.getNombre() + " vendio " + fichasAVender + " fichas");
                menuPrincipal();
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
function menuInicial() {
    console.clear();
    console.log();
    mensajeCentrado("Bienvenido al Casino " + CasinoMain.getNombreCasino());
    console.log();
    console.log("1. Ingresar");
    console.log("2. Salir");
    console.log("");
    var opcion = readlineSync.questionInt("Ingrese: ");
    switch (opcion) {
        case 1:
            console.clear();
            registrarse();
            break;
        case 2:
            console.clear();
            terminarJuego();
        default:
            console.clear();
            console.log("Opción inválida. Seleccione nuevamente");
            menuInicial();
            break;
    }
}
function iniciarJuego() {
    CasinoMain.abrirCasino();
    registrarActividad("El casino " + CasinoMain.getNombreCasino() + " abrio sus puertas");
    menuInicial();
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
