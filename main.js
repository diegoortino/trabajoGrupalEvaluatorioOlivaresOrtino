"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Casino_1 = require("./Casino");
var Jugador_1 = require("./Jugador");
var Ruleta_1 = require("./Ruleta");

var Variacion1_1 = require("./Variacion1");
var Variacion2_1 = require("./Variacion2");
var CarreraDeCaballos_1 = require("./CarreraDeCaballos");
var CasinoMain = new Casino_1.Casino("Lucky 38 de New Vegas");
var jugadorActual = null;
CasinoMain.agregarJuego(Variacion1_1.Variacion1);
CasinoMain.agregarJuego(Variacion2_1.Variacion2);

CasinoMain.agregarJuego(Ruleta_1.Ruleta);
CasinoMain.agregarJuego(CarreraDeCaballos_1.CarreraDeCaballos);
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
            menuPrincipal();
        }
        else {
            console.log("Registro fallido. Solo las personas con mayoria de edad pueden apostar.");
            console.log();
        }
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
        var opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                var apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.log("Recorda que la ruleta tiene los numeros del 0 al 37");
                var numeroElegido = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "));
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 2, apuesta, numeroElegido));
                menuRuleta();
            case 2:
                console.clear();
                var fichas = jugadorActual.getFichas();
                var numeroElegidoApostandoTodo = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "));
                console.clear();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 2, fichas, numeroElegidoApostandoTodo));
                menuRuleta();
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
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
        var opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                var apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.clear();
                console.log("\n                        Los caballos disponibles son:\n                        Caballo 1 - Margarita\n                        Caballo 2 - Picante\n                        Caballo 3 - Tormenta\n                        Caballo 4 - Petiso\n                        ");
                var caballoElegidoCaso1 = parseInt(readlineSync.question("A cual caballo desea apostar? ingrese: ")) - 1;
                console.clear();

                console.log(CasinoMain.jugarJuego(jugadorActual, 3, apuesta, caballoElegidoCaso1));

                menuRuleta();
            case 2:
                console.clear();
                var fichas = jugadorActual.getFichas();
                console.log("\n                    Los caballos disponibles son:\n                    Caballo 1 - Margarita\n                    Caballo 2 - Picante\n                    Caballo 3 - Tormenta\n                    Caballo 4 - Petiso\n                    ");
                var caballoElegidoCaso2 = parseInt(readlineSync.question("A cual caballo desea apostar? ingrese: ")) - 1;
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 1, fichas, caballoElegidoCaso2));
                menuRuleta();
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
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
        ;
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        console.log("\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83C\uDF52\uD83C\uDF52\uD83C\uDF52' - \u00A1Cereza Triple!   X 10\n            \uD83C\uDFB0 '\uD83C\uDF4B\uD83C\uDF4B\uD83C\uDF4B' - \u00A1Limonada Triple! X 5\n            \uD83C\uDFB0 '\uD83C\uDF4A\uD83C\uDF4A\uD83C\uDF4A' - \u00A1Naranja Triple!  X 2\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ");
        switch (opcion) {
            case 1:
                var apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.clear();
                console.log(apuesta);
                console.log(CasinoMain.jugarJuego(jugadorActual, 0, apuesta));
                readlineSync.question("Presiona cualquier tecla para continuar... ");
                menuFiestaFrutal();
            case 2:
                var fichas = jugadorActual.getFichas();
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 0, fichas));
                readlineSync.question("Presiona cualquier tecla para continuar... ");
                menuFiestaFrutal();
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
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
        var opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        console.log("\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \u2728\u2728 Combinaciones Ganadoras \u2728\u2728\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \uD83C\uDFB0 '\uD83D\uDC8E\uD83D\uDC8E\uD83D\uDC8E' - \u00A1Diamante Triple! X 10\n            \uD83C\uDFB0 '\uD83C\uDF40\uD83C\uDF40\uD83C\uDF40' - \u00A1Tr\u00E9bol de la Suerte! X 5\n            \uD83C\uDFB0 '\u2B50\u2B50\u2B50' - \u00A1Estrella Radiante! X 2\n            \uD83C\uDFB0 '\uD83C\uDF81\uD83C\uDF81\uD83C\uDF81' - \u00A1Premio Especial! Tirada GRATIS\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            \u00A1Haz girar los rodillos y prueba tu suerte! \uD83C\uDFB0\n            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n            ");
        switch (opcion) {
            case 1:
                var apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 1, apuesta));
                readlineSync.question("Presiona cualquier tecla para continuar... ");
                menuFortunaDiamantes();
            case 2:
                var fichas = jugadorActual.getFichas();
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 1, fichas));
                readlineSync.question("Presiona cualquier tecla para continuar... ");
                menuFortunaDiamantes();
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
        }
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
                console.log("¿Cuantas fichas desea comprar?");
                var fichasAComprar = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cambiarDineroPorFichas(jugadorActual, fichasAComprar);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                menuPrincipal();
                break;
            case 3:
                console.clear();
                console.log("¿Cuantas fichas desea cambiar?");
                var fichasAVender = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cobrarLaCaja(jugadorActual, fichasAVender);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                menuPrincipal();
                break;
            case 4:
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
    menuInicial();
}
function terminarJuego() {
    console.clear();
    console.log();
    console.log("Esperamos verte pronto");
    CasinoMain.cerrarCasino();
    process.exit();
}
iniciarJuego();
