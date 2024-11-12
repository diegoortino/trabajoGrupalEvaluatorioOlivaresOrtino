"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var app_1 = require("./app");
var CasinoMain = new app_1.Casino("Lucky 38 de New Vegas");
var jugadorActual = null;
/*CasinoMain.agregarJuego(Variacion1);
CasinoMain.agregarJuego(Variacion2);*/
CasinoMain.agregarJuego(app_1.Ruleta);
/*CasinoMain.agregarJuego(CarreraDeCaballos);*/
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
        registrado = CasinoMain.agregarJugador(new app_1.Jugador(nombre, edad));
        if (registrado) {
            jugadorActual = new app_1.Jugador(nombre, edad);
            console.log();
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
                console.log(CasinoMain.jugarJuego(jugadorActual, 0, apuesta, numeroElegido));
                menuRuleta();
            case 2:
                console.clear();
                var fichas = jugadorActual.getFichas();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 0, fichas, 2));
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
        mensajeCentrado("Bienvenido a las carreras de caballos");
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
                console.log(CasinoMain.jugarJuego(jugadorActual, 2, apuesta, 2));
                menuRuleta();
            case 2:
                console.clear();
                var fichas = jugadorActual.getFichas();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 2, fichas, 2));
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
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a las Tragamonedas");
        console.log("Dinero: " + jugadorActual.getDinero());
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
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
