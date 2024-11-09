import * as readlineSync from "readline-sync";
import { CarreraDeCaballos, Casino, Ruleta, Variacion1, Variacion2, Jugador } from "./app";

let CasinoMain = new Casino("Lucky 38 de New Vegas");
let jugadorActual: Jugador | null = null;

CasinoMain.agregarJuego(Variacion1);
CasinoMain.agregarJuego(Variacion2);
CasinoMain.agregarJuego(Ruleta);
CasinoMain.agregarJuego(CarreraDeCaballos);

function mensajeCentrado(mensaje: string) {
    const anchoDeConsola = process.stdout.columns || 80;
    const padding = Math.max(0, Math.floor((anchoDeConsola - mensaje.length) / 2));
    const espacios = Array(padding).fill(' ').join('');
    console.log(espacios + mensaje);
}

function registrarse() {
    let registrado : boolean = false;

    while (!registrado) {
        const nombre = readlineSync.question('Nombre: ');
        const edad = readlineSync.questionInt('Edad: ');
        
        registrado = CasinoMain.agregarJugador(new Jugador(nombre, edad));
        
        if (registrado) {
            jugadorActual = new Jugador(nombre,edad);
            console.log();
            console.log("Jugador registrado exitosamente en el casino.");
            menuPrincipal();
        } else {
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

        
        const opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                const apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.log(CasinoMain.jugarJuego(jugadorActual,2,apuesta,2));
                menuRuleta()
            case 2:
                console.clear();
                const fichas = jugadorActual.getFichas();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual,2,fichas,2));
                menuRuleta()
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
                console.log("Opción inválida. Seleccione nuevamente");
                menuRuleta();
                break;
        }
    } else {
        console.log("Error: No hay un jugador registrado.");
        terminarJuego();
    }
}

function menuCarreraDeCaballos() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a la Carrera de Caballos");
        console.log("Dinero: " + jugadorActual.getDinero());
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
    } else {
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
    } else {
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

    const opcion = readlineSync.questionInt("Ingrese: ");
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
        
        const opcion = readlineSync.questionInt("Ingrese: ");
        switch (opcion) {
            case 1:
                console.clear();
                menuJuegos();
                break;
            case 2:
                console.clear();
                console.log("¿Cuantas fichas desea comprar?");
                const fichasAComprar = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cambiarDineroPorFichas(jugadorActual,fichasAComprar);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                menuPrincipal();
                break;
            case 3:
                console.clear();
                console.log("¿Cuantas fichas desea cambiar?");
                const fichasAVender = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cobrarLaCaja(jugadorActual,fichasAVender);
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
    } else {
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

    const opcion = readlineSync.questionInt("Ingrese: ");
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

iniciarJuego()