import * as readlineSync from "readline-sync";
import { CarreraDeCaballos, Casino, Ruleta, Variacion1, Variacion2, Jugador } from "./app";

let CasinoMain = new Casino("Lucky 38 de New Vegas");

CasinoMain.agregarJuego(Variacion1);
CasinoMain.agregarJuego(Variacion2);
CasinoMain.agregarJuego(Ruleta);
CasinoMain.agregarJuego(CarreraDeCaballos);

function menuPrincipal() {
    console.clear();
    mensajeCentrado("Usted esta en el lobby del casino " + CasinoMain.getNombreCasino());
    console.log("Juegos disponibles en el casino:");
    CasinoMain.listarJuegos();
    console.log("5. Salir");
}

function mensajeCentrado(mensaje: string) {
    const anchoDeConsola = process.stdout.columns || 80;
    const padding = Math.max(0, Math.floor((anchoDeConsola - mensaje.length) / 2));
    const espacios = Array(padding).fill(' ').join('');
    console.log(espacios + mensaje);
}

function registrarse() {
    let registrado = false;

    while (!registrado) {
        const nombre = readlineSync.question('Nombre: ');
        const edad = readlineSync.questionInt('Edad: ');
        
        registrado = CasinoMain.agregarJugador(nombre, edad);
        
        if (registrado) {
            console.log("Jugador registrado exitosamente en el casino.");
            menuPrincipal();
        } else {
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

    const opcion = readlineSync.questionInt("Ingrese: ");
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

iniciarJuego()