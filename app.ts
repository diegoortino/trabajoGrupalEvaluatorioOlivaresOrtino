import * as readlineSync from "readline-sync";

export interface IJuego {
    jugar(apuesta: number, parametroAdicional?: any): string;
    apostarTodo(saldo: number, parametroAdicional?: any): string;
    verResultado():boolean;
    calcularResultado(apuesta:number):number;
}

export abstract class Juego implements IJuego{
    protected nombreDelJuego: string;
    protected esGanador: boolean;
    

    constructor(nombreDelJuego:string, esGanador:boolean){
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): string;
    abstract apostarTodo(saldo: number, parametroAdicional?: any): string;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number
}

export abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;


    constructor(nombreDelJuego: string, esGanador: boolean, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego, esGanador);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
    }
    abstract jugar(apuesta: number): string;
    abstract apostarTodo(saldo: number): string;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number
}

export class Variacion1 extends Tragamonedas {
    
    constructor() {
        super("Tragamonedas Variacion 1",true, "V1", 10, "Madera");
    }

    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }

    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
    }

    jugar(apuesta: number): string {
        throw new Error("Method not implemented.");
    }

    apostarTodo(saldo: number): string {
        throw new Error("Method not implemented.");
    }
}

export class Variacion2 extends Tragamonedas {
    
    constructor() {
        super("Tragamonedas Variacion 2", true, "V2", 10, "Digital");
    }

    jugar(apuesta: number): string {
        throw new Error("Method not implemented.");
    }

    apostarTodo(saldo: number): string {
        throw new Error("Method not implemented.");
    }
    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }
    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
    }
}

export class Ruleta extends Juego {
    
    private numeros: number = 38;

    constructor(){
        super("Ruleta",true)
    }

    jugar(apuesta: number, numeroElegido: number): string {
        throw new Error("Method not implemented.");
    }

    apostarTodo(saldo: number): string {
        throw new Error("Method not implemented.");
    }
    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }
    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
    }
}

export class CarreraDeCaballos extends Juego {
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoElegido: number;

    constructor(){
        super("Carrera de Caballos", true)
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

    jugar(apuesta: number, caballoElegido: number): string {
        console.log(`Iniciando la carrera de caballos...`);

        const ganador = Math.floor(Math.random() * this.caballos.length);
        console.log(`\nEl ganador es ${this.caballos[ganador]}!`);

        if (ganador === caballoElegido) {
            return `Felicidades, ¡ganaste! El ganador es ${this.caballos[ganador]}.`;
        } else {
            return `Lo siento, perdiste. El ganador es ${this.caballos[ganador]}.`;
        }
    }

    apostarTodo(saldo: number, caballoElegido: number): string{
        console.log(`Iniciando la carrera de caballos...`);

        const ganador = Math.floor(Math.random() * this.caballos.length);
        console.log(`\nEl ganador es ${this.caballos[ganador]}!`);

        if (ganador === caballoElegido) {
            return `Felicidades, ¡ganaste! El ganador es ${this.caballos[ganador]}.`;
        } else {
            return `Lo siento, perdiste. El ganador es ${this.caballos[ganador]}.`;
        }
    }
    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }
    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
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
        this.saldo += cantidad;
    }
}

export class Casino {
    private nombreCasino: string;
    private jugadores: Jugador[] = [];
    private juegos: Juego[] = [];

    constructor(nombreCasino: string) {
        this.nombreCasino = nombreCasino;
    }

    getNombreCasino():string {
        return this.nombreCasino;
    }

    agregarJugador(nombre: string, edad: number): boolean {
        const jugador = new Jugador(nombre, edad);
        if (jugador.getEdad() >= 18) {
            this.jugadores.push(jugador);
            return true;
        } else {
            console.log(`${jugador.getNombre()} no es mayor de edad y no puede jugar en el casino.`);
            return false;
        }
    }
    
    getSaldoJugador(): number {
        return this.jugadores[0].getSaldo();
    }

    agregarJuego(JuegoClase: new () => Juego): void {
        const juego = new JuegoClase();
        this.juegos.push(juego);
    }

    listarJuegos(): void {
        this.juegos.forEach((juego, index) => {
            console.log(`${index + 1}. ${juego["nombreDelJuego"]}`);
        });
    }
    
    jugarJuego(opcionElegida: number, apuesta: number, parametroAdicional?: any): void {
    }

    apostarTodo(opcionElegida: number, apuesta: number, parametroAdicional?: any): void {
    }
    
}