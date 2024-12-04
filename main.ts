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

function mensajeError(mensaje:string){
    console.clear()
    mensajeCentrado(mensaje)
    readlineSync.question("Presiona Enter para continuar");
    console.clear();
}

function mensajeCentrado(mensaje: string) {
    const anchoDeConsola = process.stdout.columns || 80;
    const padding = Math.max(0, Math.floor((anchoDeConsola - mensaje.length) / 2));
    const espacios = Array(padding).fill(' ').join('');
    console.log(espacios + mensaje);
}

function jugarJuego(jugadorActual: Jugador, juegoElegido: number) {
    let juegos = [
        { 
            numeroDeJuego: 0,
            nombreDelJuego: 'Fiesta Frutal',
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
            mensajeDelJuego: `
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    🎡 Reglas del Juego 🎡
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            La ruleta tiene los números del 0 al 37. 
            Elige un numero para apostar y buena suerte. 🍀
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `,
            preguntaParametroOpcional: `Cual es el número al que desea apostar? Ingrese: `
        },

        { 
            numeroDeJuego: 3,
            nombreDelJuego: 'Carrera de Caballos',
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
            preguntaParametroOpcional: `A cual caballo desea apostar? Ingrese: `
        }
    ];


    let juegoEncontrado = juegos.find(juego => juego.numeroDeJuego === juegoElegido);
    let opcion = 0;

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
                console.log(`Cuantas fichas desea apostar?`)
                const apuesta = validarVariables()
                console.clear();
                if (juegoElegido === 2 || juegoElegido === 3) {
                    if (juegoEncontrado.preguntaParametroOpcional) {
                        mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                        const parametroOpcional: number = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                        mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta, parametroOpcional));
                        readlineSync.question("Pulse enter para continuar...")
                    }
                } else {
                    mensajeError(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, apuesta));
                }
                
                console.clear();
                registrarActividad(`El jugador ${jugadorActual.getNombre()} jugó a ${juegoEncontrado.nombreDelJuego}, apostando ${apuesta} fichas.`);
                jugarJuego(jugadorActual,juegoElegido);
                break;
            case 2:
                if (juegoElegido === 2 || juegoElegido === 3) {
                    mensajeCentrado(juegoEncontrado.mensajeDelJuego);
                    const parametroOpcional: number = parseInt(readlineSync.question(juegoEncontrado.preguntaParametroOpcional));
                    mensajeCentrado(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas(), parametroOpcional));
                    readlineSync.question("Pulse enter para continuar...")
                } else {
                    mensajeError(CasinoMain.jugarJuego(jugadorActual, juegoEncontrado.numeroDeJuego, jugadorActual.getFichas()));
                }
                
                console.clear();
                registrarActividad(`El jugador ${jugadorActual.getNombre()} jugó a ${juegoEncontrado.nombreDelJuego}, apostando ${jugadorActual.getFichas()} fichas.`);
                jugarJuego(jugadorActual,juegoElegido);
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
    } else {
        console.log("Juego no encontrado. Por favor, selecciona un número válido.");
        menuJuegos();
    }
}

function iniciarJuego() {
    CasinoMain.abrirCasino();
    registrarActividad("El casino "+ CasinoMain.getNombreCasino() + " abrio sus puertas");
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
    
    let  opcion = parseInt(readlineSync.question("Ingrese: "));
    
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
            mensajeError("Valor ingresado Invalido, ingrese uno valido")
            menuInicial();
            break;
        }
    
    


}
    
function registrarse() {
    let registrado: boolean = false;

    while (!registrado) {
        const nombre = readlineSync.question('Nombre: ');

        // Validar que el nombre solo contenga letras y espacios
        const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
        if (!nombreValido) {
            console.clear();
            console.log("El nombre ingresado no es válido. Solo se permiten letras y espacios.");
            continue; // Volver a pedir el nombre
        }

        let edad: number = 0;
        let edadValida = false;

        while (!edadValida) {
            
            const input = readlineSync.question("Edad: ");

            // Validar que sea un número entero mayor o igual a 18
            edad = parseInt(input);

            if (isNaN(edad)) {
                console.clear()
                console.log("La edad ingresada no es válida. Debe ser un número.");
            } else if (edad < 18) {
                console.clear()
                console.log("Solo las personas mayores de 18 años pueden registrarse.");
            } else {
                console.clear()
                edadValida = true;
            }
        }

        registrado = CasinoMain.agregarJugador(new Jugador(nombre, edad));

        if (registrado) {
            jugadorActual = new Jugador(nombre, edad);
            console.clear();
            console.log("Jugador registrado exitosamente en el casino.");
            registrarActividad("Un nuevo jugador se ha registrado en el casino: " + nombre + ", Edad: " + edad + " años.");
            menuPrincipal();
        } else {
            console.log("Registro fallido. Solo las personas con mayoría de edad pueden apostar.");
            console.log();
        }
    }
}

function validarVariables(opcion?:number): number {
    let monto: number = 0;
    let validacion: boolean = true;

    while (validacion) {
        const input = readlineSync.question("Ingrese: ");
        monto = parseInt(input);

        if(jugadorActual){
            if (isNaN(monto) || monto <= 0) {
                console.log("El valor ingresado no es válido. Debe ingresar un número mayor a 0.");
            } else if (jugadorActual.getDinero() < monto && opcion == 2 ) {
                console.log("El monto ingresado debe ser menor o igual a la cantidad de dinero que tienes.");
            } else if (jugadorActual.getFichas() < monto && opcion == 3 ) {
                console.log("El monto ingresado debe ser menor o igual a la cantidad de fichas que tienes.");
            }else{                
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
        
        const opcion = readlineSync.questionInt("Ingrese: ");
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
                    const fichasAComprar: number = validarVariables(opcion);
                    CasinoMain.cambiarDineroPorFichas(jugadorActual, fichasAComprar);
                    console.clear();
                    console.log();
                    console.log("Operación Realizada");
                    registrarActividad("El jugador " + jugadorActual.getNombre() + " compró " + fichasAComprar + " fichas");
                    menuPrincipal();
                    break;
            case 3:
                console.clear();
                console.log("Sus fichas actuales son: "+ jugadorActual.getFichas())
                console.log("¿Cuantas fichas desea cambiar?");
                const fichasAVender = validarVariables(opcion);
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

function menuJuegos() {
    if (jugadorActual) {
    mensajeCentrado("Juegos disponibles en el casino:");
    console.log();
    console.log("1. Tragamonedas");
    console.log("2. Ruleta");
    console.log("3. Carrera de Caballos");
    console.log("4. Volver al menú principal");

    const opcion = readlineSync.questionInt("Ingrese: ");
    switch (opcion) {
        case 1:
            console.clear();
            mensajeCentrado("Bienvenido A Las Tragamonedas");
            console.log();
            console.log("1. Fiesta Frutal");
            console.log("2. Fortuna de Diamantes");
            console.log("3. Volver al menú de Juegos");

            const subOpcion = readlineSync.questionInt("Ingrese: ");
            switch (subOpcion) {
                case 1:
                    console.clear();
                    jugarJuego(jugadorActual,0);
                    break;
                case 2:
                    console.clear();
                    jugarJuego(jugadorActual,1);
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
            jugarJuego(jugadorActual,2);
            break;

        case 3:
            console.clear();
            jugarJuego(jugadorActual,3);
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
    } else {
    console.log("Error: No hay un jugador registrado.");
    terminarJuego();
}
}

function registrarActividad(mensaje: string) {
    const timestamp = new Date().toISOString();
    registroDeActividad.push(`[${timestamp}] ${mensaje}`);
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