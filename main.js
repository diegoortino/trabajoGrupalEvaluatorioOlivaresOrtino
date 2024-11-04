"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var app_1 = require("./app");
var CasinoMain = new app_1.Casino("Lucky 38 de New Vegas");
CasinoMain.agregarJuego(app_1.Variacion1);
CasinoMain.agregarJuego(app_1.Variacion2);
CasinoMain.agregarJuego(app_1.Ruleta);
CasinoMain.agregarJuego(app_1.CarreraDeCaballos);
function menuPrincipal() {
    console.clear();
    mensajeCentrado("Usted esta en el lobby del casino " + CasinoMain.getNombreCasino());
    console.log("Juegos disponibles en el casino:");
    CasinoMain.listarJuegos();
    console.log("5. Salir");
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
        registrado = CasinoMain.agregarJugador(nombre, edad);
        if (registrado) {
            console.log("Jugador registrado exitosamente en el casino.");
            menuPrincipal();
        }
        else {
            console.log("Registro fallido. Inténtalo nuevamente.");
            console.log();
        }
    }
}
function menuInicial() {
    console.clear();
    console.log();
    mensajeCentrado("Bienvenido al Casino " + CasinoMain.getNombreCasino());
    console.log("");
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
            console.log("Esperamos verte pronto");
            process.exit();
        default:
            console.clear();
            console.log("Opción inválida. Seleccione nuevamente");
            menuInicial();
            break;
    }
}
function iniciarJuego() {
    menuInicial();
}
iniciarJuego();
