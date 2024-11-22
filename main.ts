import * as fs from "fs";
import * as readlineSync from "readline-sync";
import { Casino } from "./Casino";
import { Jugador } from "./Jugador";
import { Ruleta } from "./Ruleta";
import { Variacion1 } from "./Variacion1";
import { Variacion2 } from "./Variacion2";
import { CarreraDeCaballos } from "./CarreraDeCaballos";

let CasinoMain = new Casino("Lucky 38 de New Vegas");
let jugadorActual: Jugador | null = null;
let registroDeActividad: string[] = [];

CasinoMain.agregarJuego(Variacion1);
CasinoMain.agregarJuego(Variacion2);
CasinoMain.agregarJuego(Ruleta);
CasinoMain.agregarJuego(CarreraDeCaballos);

function registrarActividad(mensaje: string) {
    const timestamp = new Date().toISOString();
    registroDeActividad.push(`[${timestamp}] ${mensaje}`);
}

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
            jugadorActual = new Jugador(nombre, edad);
            console.clear();
            console.log("Jugador registrado exitosamente en el casino.");
            registrarActividad("Un nuevo jugador se ha registrado en el casino: " + nombre +", Edad: "+ edad+" años.");
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
                console.log("Recorda que la ruleta tiene los numeros del 0 al 37")
                const numeroElegido = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "))
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 2, apuesta, numeroElegido));
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó a la Ruleta, eligió el numero " + (numeroElegido)+ " apostando "+ apuesta + " fichas.");
                menuRuleta()
            case 2:
                console.clear();
                const fichas = jugadorActual.getFichas();
                const numeroElegidoApostandoTodo = parseInt(readlineSync.question("Cual es el numero al que desea apostar? ingrese: "))
                console.clear();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual,2,fichas,numeroElegidoApostandoTodo));
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó a la Ruleta, eligió el numero " + (numeroElegidoApostandoTodo )+ " apostando "+ fichas + " fichas.");
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
                console.clear();
                console.log(`
                        Los caballos disponibles son:
                        Caballo 1 - Margarita
                        Caballo 2 - Picante
                        Caballo 3 - Tormenta
                        Caballo 4 - Petiso
                        `);
                const caballoElegidoCaso1 = parseInt(readlineSync.question("A cual caballo desea apostar? ingrese: ")) - 1;
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 3, apuesta, caballoElegidoCaso1));
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó a la carrera de caballos,  aposto al caballo numero " + (caballoElegidoCaso1 +1)+ " "+ apuesta + " fichas.");
                menuCarreraDeCaballos()
            case 2:
                console.clear();
                const fichas = jugadorActual.getFichas();
                console.log(`
                        Los caballos disponibles son:
                        Caballo 1 - Margarita
                        Caballo 2 - Picante
                        Caballo 3 - Tormenta
                        Caballo 4 - Petiso
                        `);
                const caballoElegidoCaso2 = parseInt(readlineSync.question("A cual caballo desea apostar? ingrese: ")) - 1;
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 3, fichas, caballoElegidoCaso2));
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó a la carrera de caballos todo su saldo,  aposto al caballo numero " + (caballoElegidoCaso2 +1) +" "+ fichas + " fichas.");
                menuCarreraDeCaballos();
            case 3:
                console.clear();
                menuJuegos();
            default:
                console.clear();
                console.log("Opción inválida. Seleccione nuevamente");
                menuCarreraDeCaballos();
                break;
        }
    } else {
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

    const opcion = readlineSync.questionInt("Ingrese: ");
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

    mensajeCentrado("Bienvenido a Fiesta Frutal")
    console.log("Fichas: " + jugadorActual.getFichas());
    console.log();
    console.log("1. Apostar un monto");
    console.log("2. Apostar todo");
    console.log("3. Volver al menu de juegos");;

        
        const opcion = readlineSync.questionInt("Ingrese: ");

        console.clear();
        console.log(`
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ✨✨ Combinaciones Ganadoras ✨✨
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            🎰 '🍒🍒🍒' - ¡Cereza Triple!   X 10
            🎰 '🍋🍋🍋' - ¡Limonada Triple! X 5
            🎰 '🍊🍊🍊' - ¡Naranja Triple!  X 2
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `);
        switch (opcion) {
            case 1:
                const apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.clear();
                console.log(apuesta);
                console.log(CasinoMain.jugarJuego(jugadorActual, 0, apuesta));
                readlineSync.question("Presiona enter para continuar");
                console.clear();
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó en el tragamonedas Fiesta Frutal, su apuesta fue de " + apuesta + " fichas.");
                menuFiestaFrutal()

            case 2:
                const fichas = jugadorActual.getFichas();
                console.clear();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 0, fichas));
                readlineSync.question("Presiona enter para continuar");
                console.clear();
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó en el tragamonedas Fiesta Frutal apostando todo su saldo, su apuesta fue de " + fichas + " fichas.");
                menuFiestaFrutal()

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

function menuFortunaDiamantes() {
    if (jugadorActual) {
        mensajeCentrado("Bienvenido a Fortuna de Diamantes")
        console.log("Fichas: " + jugadorActual.getFichas());
        console.log();
        console.log("1. Apostar un monto");
        console.log("2. Apostar todo");
        console.log("3. Volver al menu de juegos");
        
        const opcion = readlineSync.questionInt("Ingrese: ");
        console.clear();
        console.log(`
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    ✨✨ Combinaciones Ganadoras ✨✨
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            🎰 '💎💎💎' - ¡Diamante Triple! X 10
            🎰 '🍀🍀🍀' - ¡Trébol de la Suerte! X 5
            🎰 '⭐⭐⭐' - ¡Estrella Radiante! X 2
            🎰 '🎁🎁🎁' - ¡Premio Especial! Tirada GRATIS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ¡Haz girar los rodillos y prueba tu suerte! 🎰
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `);
        switch (opcion) {
            case 1:
                const apuesta = parseInt(readlineSync.question("¡Cuantas fichas desea apostar? ingrese: "));
                console.clear();
                console.log(CasinoMain.jugarJuego(jugadorActual, 1, apuesta));
                readlineSync.question("Presiona enter para continuar");
                console.clear();
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó en el tragamonedas Fortuna De Diamantes, su apuesta fue de " + apuesta + " fichas.");
                menuFortunaDiamantes()

            case 2:
                const fichas = jugadorActual.getFichas();
                console.clear();
                console.log(CasinoMain.jugarApostandoTodo(jugadorActual, 1, fichas));
                readlineSync.question("Presiona enter para continuar");
                console.clear();
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " jugó en el tragamonedas Fortuna De Diamantes apostando todo su saldo, su apuesta fue de " + fichas + " fichas.");
                menuFortunaDiamantes()
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
                console.log("Su dinero actual es de: " + jugadorActual.getDinero()+"$")
                console.log("¿Cuantas fichas desea comprar?");
                const fichasAComprar = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cambiarDineroPorFichas(jugadorActual,fichasAComprar);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " compro "+ fichasAComprar + " fichas");
                menuPrincipal();
                break;
            case 3:
                console.clear();
                console.log("Sus fichas actuales son: "+ jugadorActual.getFichas())
                console.log("¿Cuantas fichas desea cambiar?");
                const fichasAVender = parseInt(readlineSync.question("Ingrese: "));
                CasinoMain.cobrarLaCaja(jugadorActual,fichasAVender);
                console.clear();
                console.log();
                console.log("Operacion Realizada");
                registrarActividad("El jugador "+ jugadorActual.getNombre() + " vendio "+ fichasAVender + " fichas");
                menuPrincipal();
                break;
            case 4:
                registrarActividad("El jugador "+jugadorActual.getNombre() +" se retiro del casino con " + jugadorActual.getFichas() + " fichas y con " + jugadorActual.getDinero() + " dolares");
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
    console.clear();
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
    registrarActividad("El casino "+ CasinoMain.getNombreCasino() + " abrio sus puertas");
    menuInicial();
}

function terminarJuego() {
    console.clear();
    console.log();
    console.log("Esperamos verte pronto");
    registrarActividad("El casino "+ CasinoMain.getNombreCasino() + " cerró sus puertas");


    const contenidoRegistro = registroDeActividad.join("\n");
    const nombreArchivo = `registro_casino_${new Date().toISOString().replace(/[:.]/g, "_")}.txt`;

    fs.writeFileSync(nombreArchivo, contenidoRegistro, "utf-8");
    console.log(`Registro de actividad guardado en: ${nombreArchivo}`);

    CasinoMain.cerrarCasino();
    process.exit();
}

iniciarJuego()
