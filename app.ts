import * as readlineSync from "readline-sync";

export interface IJuego {
    jugar(apuesta: number, parametroAdicional?: any): {mensaje:string, nuevoSaldo:number};
    apostarTodo(saldo: number, parametroAdicional?: any): {mensaje:string, nuevoSaldo:number};
}

export abstract class Juego implements IJuego{
    protected nombreDelJuego:string;

    constructor(nombreDelJuego:string){
        this.nombreDelJuego = nombreDelJuego;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): {mensaje:string, nuevoSaldo:number};
    abstract apostarTodo(saldo: number, parametroAdicional?: any): {mensaje:string, nuevoSaldo:number};
}

export abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;

    constructor(nombreDelJuego: string, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
    }
    abstract jugar(apuesta: number): {mensaje:string, nuevoSaldo:number};
    abstract apostarTodo(saldo: number): {mensaje:string, nuevoSaldo:number};
}

export class Variacion1 extends Tragamonedas {

    constructor() {
        super("Tragamonedas Variacion 1", "V1", 10, "Madera");
    }

    jugar(apuesta: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje: `Jugando a ${this.nombreDelJuego} con una apuesta de ${apuesta}.`, nuevoSaldo: 0};
    }

    apostarTodo(saldo: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje:`Apostando todo el saldo (${saldo}) en ${this.nombreDelJuego}.`, nuevoSaldo: 0};
    }
}

export class Variacion2 extends Tragamonedas {
    constructor() {
        super("Tragamonedas Variacion 2", "V2", 10, "Digital");
    }

    jugar(apuesta: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje: `Jugando a ${this.nombreDelJuego} con una apuesta de ${apuesta}.`, nuevoSaldo: 0};
    }

    apostarTodo(saldo: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje:`Apostando todo el saldo (${saldo}) en ${this.nombreDelJuego}.`, nuevoSaldo: 0};
    }
}

export class Ruleta extends Juego {
    private numeros: number = 38;

    constructor(){
        super("Ruleta")
    }

    jugar(apuesta: number, numeroElegido: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje:`Jugando a la ${this.nombreDelJuego} con una apuesta de ${apuesta} al número ${numeroElegido}.`, nuevoSaldo:0};
    }

    apostarTodo(saldo: number): {mensaje:string, nuevoSaldo:number} {
        return {mensaje:`Apostando todo el saldo (${saldo}) en la ${this.nombreDelJuego}.`, nuevoSaldo:0};
    }
}

export class CarreraDeCaballos extends Juego {
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoElegido: number;

    constructor(){
        super("Carrera de Caballos")
    }

    listarCaballos(): number {
        console.log("Elige un caballo para apostar:");
        this.caballos.forEach((caballo, index) => {
            console.log(`${index + 1}. ${caballo}`);
        });

        const caballoElegido = readlineSync.questionInt("Ingresa el numero del caballo elegido: ");
        const indice = caballoElegido - 1;

        if (indice >= 0 && indice < this.caballos.length) {
            return this.caballoElegido = indice;
        } else {
            console.log("Selección inválida. Por favor, elige un numero válido.");
            return this.listarCaballos();
        }
    }

    jugar(apuesta: number, caballoElegido: number): { mensaje: string; nuevoSaldo: number } {
        console.log(`Iniciando la carrera de caballos...`);

        const ganador = Math.floor(Math.random() * this.caballos.length);
        console.log(`\nEl ganador es ${this.caballos[ganador]}!`);

        if (ganador === caballoElegido) {
            return { mensaje: `Felicidades, ¡ganaste! El ganador es ${this.caballos[ganador]}.`, nuevoSaldo: apuesta * 4 };
        } else {
            return { mensaje: `Lo siento, perdiste. El ganador es ${this.caballos[ganador]}.`, nuevoSaldo: 0 - apuesta };
        }
    }

    apostarTodo(saldo: number, caballoElegido: number): { mensaje: string; nuevoSaldo: number } {
        console.log(`Iniciando la carrera de caballos...`);

        const ganador = Math.floor(Math.random() * this.caballos.length);
        console.log(`\nEl ganador es ${this.caballos[ganador]}!`);

        if (ganador === caballoElegido) {
            return { mensaje: `Felicidades, ¡ganaste! El ganador es ${this.caballos[ganador]}.`, nuevoSaldo: saldo * 4 };
        } else {
            return { mensaje: `Lo siento, perdiste. El ganador es ${this.caballos[ganador]}.`, nuevoSaldo: 0 };
        }
    }
}

export class Jugador {
    private nombre: string;
    private edad: number;
    private saldo: number = 1000;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    getSaldo(): number {
        return this.saldo;
    }

    modificarSaldo(cantidad: number): void {
        if (cantidad < 0){
            this.saldo - cantidad;
        } else {
            this.saldo + cantidad;
        }
    }
}

export class Casino {
    private nombreCasino: string;
    private jugadores: Jugador[] = [];
    private juegos: Juego[] = [];

    constructor(nombreCasino: string) {
        this.nombreCasino = nombreCasino;
    }

    agregarJugador(JugadorClase: new (nombre: string, edad: number) => Jugador, nombre: string, edad: number, saldo: number = 1000): void {
        const jugador = new JugadorClase(nombre, edad);

        if (jugador.getEdad() >= 18) {
            this.jugadores.push(jugador);
        } else {
            console.log(`${jugador.getNombre()} no es mayor de edad y no puede jugar en el casino.`);
        }
    }

    agregarJuego(JuegoClase: new () => Juego): void {
        const juego = new JuegoClase();
        this.juegos.push(juego);
    }

    listarJuegos(): void {
        console.log("Juegos disponibles en el casino:");
        this.juegos.forEach(juego => {
            console.log(`- ${juego["nombreDelJuego"]}`);
        });
    }
}