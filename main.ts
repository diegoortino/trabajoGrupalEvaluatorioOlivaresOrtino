import * as fs from "fs";
import * as readlineSync from "readline-sync";
import { Casino } from "./Casino";
import { Jugador } from "./Jugador";
import { Ruleta } from "./Ruleta";
import { Variacion1 } from "./Variacion1";
import { Variacion2 } from "./Variacion2";
import { CarreraDeCaballos } from "./CarreraDeCaballos";
import { Juego } from "./Juego";

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

function jugarJuego(jugadorActual: Jugador, juegoElegido: number, opcion: number) {
    let juegos = [
        { 
            numeroDeJuego: 0,
            nombreDelJuego: 'Fiesta Frutal',
            menuDelJuego: menuFiestaFrutal,
            mensajeDelJuego: `
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ✨✨ Combinaciones Ganadoras ✨✨
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            🎰 '🍒🍒🍒' - ¡Cereza Triple!   X 10
            🎰 '🍋🍋🍋' - ¡Limonada Triple! X 5
            🎰 '🍊🍊🍊' - ¡Naranja Triple!  X 2
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `
        },
        {   
            numeroDeJuego: 1,
            nombreDelJuego: 'Fortuna de Diamantes',
            menuDelJuego: menuFortunaDiamantes,
            mensajeDelJuego: `
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    ✨✨ Combinaciones Ganadoras ✨✨
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            🎰 '💎💎💎' - ¡Diamante Triple!         X 10
            🎰 '🍀🍀🍀' - ¡Trébol de la Suerte!    X 5
            🎰 '⭐⭐⭐'   - ¡Estrella Radiante!      X 2
            🎰 '🎁🎁🎁' - ¡Premio Especial! 🎁 Tirada GRATIS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ¡Haz girar los rodillos y prueba tu suerte! 🎰
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `
        },
        { 
            numeroDeJuego: 2,
            nombreDelJuego: 'Ruleta',
            menuDelJuego: menuRuleta,
            mensajeDelJuego: `
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    🎡 Reglas del Juego 🎡
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            La ruleta tiene los números del 0 al 37. 
            Elige un número para apostar y buena suerte. 🍀
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `,
            preguntaParametroOpcional: "¿Cuál es el número al que desea apostar? Ingrese: "
        },
        { 
            numeroDeJuego: 3,
            nombreDelJuego: 'Carrera de Caballos',
            menuDelJuego: menuCarreraDeCaballos,
            mensajeDelJuego: `
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    🏇 Carrera de Caballos 🏇
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Los caballos disponibles son:
            🐎 Caballo 1 - Margarita
            🐎 Caballo 2 - Picante
            🐎 Caballo 3 - Tormenta
            🐎 Caballo 4 - Petiso
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `,
            preguntaParametroOpcional: "¿A cuál caballo desea apostar? Ingrese: "
        }
    ];

    let juegoEncontrado = juegos.find(juego => juego.numeroDeJuego === juegoElegido);

    if (juegoEncontrado && opcion === 1) {
        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
        const apuesta = parseInt(readlineSync.question("¿Cuántas fichas desea apostar? Ingrese: "));
        console.clear();
        if (juegoElegido === 2 || juegoElegido === 3) {
            mensajeCentrado(juegoEncontrado.mensajeDelJuego);
            const parametroOpcional: number = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
            mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta, parametroOpcional));
        } else {
            mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta));
        }
        readlineSync.question("Presiona Enter para continuar");
        console.clear();
        registrarActividad(`El jugador ${jugadorActual.getNombre()} jugó a ${juegoEncontrado.nombreDelJuego}, apostando ${apuesta} fichas.`);
        juegoEncontrado.menuDelJuego();
    } else if (juegoEncontrado && opcion === 2) {
        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
        if (juegoElegido === 2 || juegoElegido === 3) {
            const parametroOpcional: number = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
            mensajeCentrado(CasinoMain.jugarApostandoTodo(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas(), parametroOpcional));
        } else {
            mensajeCentrado(CasinoMain.jugarApostandoTodo(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas()));
        }
        readlineSync.question("Presiona Enter para continuar");
        console.clear();
        registrarActividad(`El jugador ${jugadorActual.getNombre()} jugó a ${juegoEncontrado.nombreDelJuego}, apostando ${jugadorActual.getFichas()} fichas.`);
        juegoEncontrado.menuDelJuego();
    } else {
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


        
        const opcion = readlineSync.questionInt("Ingrese: ");
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
        console.log("4. Volver al menu principal");


        
        const opcion = readlineSync.questionInt("Ingrese: ");
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
        console.log("3. Volver al menu de juegos");
        console.log("4. Volver al menu principal");


        
        const opcion = readlineSync.questionInt("Ingrese: ");
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
        console.log("4. Volver al menu principal");


        
        const opcion = readlineSync.questionInt("Ingrese: ");
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
