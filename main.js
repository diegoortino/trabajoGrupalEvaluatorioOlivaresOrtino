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
        var nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre);
        if (!nombreValido) {
            console.log("El nombre contiene caracteres inválidos. Solo se permiten letras y espacios, sin números.");
            continue;
        }
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
            console.log("Registro fallido. Solo las personas con mayoría de edad pueden apostar.");
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
                if (apuesta > 0) {
                    console.clear();
                    console.log("Recorda que la ruleta tiene los numeros del 0 al 37");
                    var numeroElegido = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "));
                    console.clear();
                    console.log(CasinoMain.jugarJuego(jugadorActual, 2, apuesta, numeroElegido));
                    registrarActividad("El jugador " + jugadorActual.getNombre() + " jugó a la Ruleta, apostando " + apuesta + " fichas.");
                    menuRuleta();
                }
                else {
                    console.clear();
                    console.log("Debe ingresar un número positivo.");
                    menuRuleta();
                }
                menuRuleta();
            case 2:
                console.clear();
                var fichas = jugadorActual.getFichas();
                var numeroElegidoApostandoTodo = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "));
                console.clear();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 2, fichas, numeroElegidoApostandoTodo));
                registrarActividad("El jugador " + jugadorActual.getNombre() + " jugó a la Ruleta, eligió el numero " + (numeroElegidoApostandoTodo) + " apostando " + fichas + " fichas.");
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
    ;
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
                mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                var apuesta = parseInt(readlineSync.question("\u00BFCu\u00E1ntas fichas desea apostar? Ingrese: "));
                console.clear();
                if (juegoElegido === 2 || juegoElegido === 3) {
                    if (juegoEncontrado.preguntaParametroOpcional) {
                        var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                        mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta, parametroOpcional));
                    }
                }
                else {
                    mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta));
                }
                readlineSync.question("Presiona Enter para continuar");
                console.clear();
                registrarActividad("El jugador ".concat(jugadorActual.getNombre(), " jug\u00F3 a ").concat(juegoEncontrado.nombreDelJuego, ", apostando ").concat(apuesta, " fichas."));
                jugarJuego(jugadorActual, juegoElegido);
                break;
            case 2:
                mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                if (juegoElegido === 2 || juegoElegido === 3) {
                    var parametroOpcional = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                    mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas(), parametroOpcional));
                }
                else {
                    mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas()));
                }
                readlineSync.question("Presiona Enter para continuar");
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
                console.clear();
                if (CasinoMain.cambiarDineroPorFichas(jugadorActual, fichasAComprar)) {
                    console.log("Fichas compradas exitosamente!");
                    console.log();
                    registrarActividad("El jugador " + jugadorActual.getNombre() + " compró " + fichasAComprar + " fichas");
                    menuPrincipal();
                }
                else {
                    console.log("Ingrese un numero valido.");
                    console.log();
                    menuPrincipal();
                }
                break;
            case 3:
                console.clear();
                console.log("Sus fichas actuales son: " + jugadorActual.getFichas());
                console.log("¿Cuantas fichas desea cambiar?");
                var fichasAVender = parseInt(readlineSync.question("Ingrese: "));
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
}
iniciarJuego();
