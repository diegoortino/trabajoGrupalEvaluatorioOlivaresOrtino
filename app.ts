import * as readlineSync from "readline-sync";

export interface ICasino {
    abrirCasino(): void;
    cerrarCasino(): void;
    verMayoriaEdad(jugador:Jugador): boolean;
    cambiarDineroPorFichas(jugador:Jugador, valor:number): void;
    cobrarLaCaja(jugador:Jugador, valor:number): void; 
}

export abstract class Juego{
    protected nombreDelJuego: string;
    protected esGanador: boolean;
    

    constructor(nombreDelJuego:string, esGanador:boolean){
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): string;
    abstract apostarTodo(saldo: number, parametroAdicional?: any): string;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number;
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
    abstract toString():string;
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

    toString(): string {
        return this.nombreDelJuego;
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

    toString(): string {
        return this.nombreDelJuego;
    }
}

export class Ruleta extends Juego {
    private numeros: number = 38;
    private ganador: number;
    constructor(){
        super("Ruleta",true)
    }
    jugar(apuesta: number, numeroElegido: number,): string {
        this.ganador = 2 /*Math.floor(Math.random() * this.numeros)*/;
        if (numeroElegido === this.ganador) {
            this.esGanador = true;
            return `¡Felicidades! Has ganado la apuesta. El número ganador fue ${this.ganador}.`;
        } else {
            this.esGanador = false;
            return `Lo siento, perdiste. El número ganador fue ${this.ganador}.`;
        }
    }
    apostarTodo(saldo: number, numeroElegido: number): string {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido === this.ganador) {
            this.esGanador = true;
            return `¡Felicidades! Has ganado la apuesta. El número ganador fue ${this.ganador}.`;
        } else {
            this.esGanador = false;
            return `Lo siento, perdiste. El número ganador fue ${this.ganador}.`;
        }
    }
    verResultado(): boolean {
        return this.esGanador
    }
    calcularResultado(apuesta: number): number {
        if(this.esGanador === false) {
            return -apuesta;
        }else {
            return apuesta * 37;
        }
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

    toString(): string {
        return this.nombreDelJuego;
    }
}

export class Jugador {
    private nombre: string;
    private edad: number;
    private dinero: number = 1000;
    private fichas: number = 0;

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

    getDinero(): number {
        return this.dinero;
    }

    getFichas(): number {
        return this.fichas;
    }

    setDinero(nuevoValorDinero): void {
        this.dinero = nuevoValorDinero
    }

    setFichas(nuevoValorFichas: number): void {
        this.fichas = nuevoValorFichas;
    }
}

export class Casino implements ICasino{
    private nombreCasino: string;
    private estaAbierto: boolean = false;
    private jugadores: Jugador[] = [];
    private juegos: Juego[] = [];

    constructor(nombreCasino: string) {
        this.nombreCasino = nombreCasino;
    }

    getNombreCasino(): string {
        return this.nombreCasino;
    }

    abrirCasino(): void {
        if(!this.estaAbierto){
            this.estaAbierto = true;
        } else {
            this.estaAbierto = false;
        };
    }

    cerrarCasino(): void {
        if(this.estaAbierto){
            this.estaAbierto = false;
        } else {
            this.estaAbierto = true;
        };
    }

    verMayoriaEdad(jugador:Jugador): boolean {
        if (jugador.getEdad() >= 18) {
            return true
        } else {
            return false
        }
    }

    cambiarDineroPorFichas (jugador:Jugador, valor:number): void {    
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();

        if (valor > 0 && dineroDelJugador >= valor) {
            dineroDelJugador -= valor;
            fichasDelJugador += valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    }

    cobrarLaCaja (jugador:Jugador, valor:number) : void  {
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();

        if (valor > 0 && fichasDelJugador >= valor) {
            dineroDelJugador += valor;
            fichasDelJugador -= valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    }

    agregarJugador(jugador: Jugador): boolean {
        if (this.verMayoriaEdad(jugador)) {
            this.jugadores.push(jugador);
            return true;
        } else {
            return false;
        }
    }

    agregarJuego(JuegoClase: new () => Juego): void {
        const juego = new JuegoClase();
        this.juegos.push(juego);
    }

    modificarFichas(jugador: Jugador, resultado:number):void{
        let nuevoValor = jugador.getFichas() + resultado;
        jugador.setFichas(nuevoValor);
    }

    jugarJuego(jugador:Jugador, numeroDeJuego:number,apuesta: number, parametroAdicional?: any): string{
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= apuesta){
            const juegoSeleccionado = this.juegos[numeroDeJuego];
            let jugar = juegoSeleccionado.jugar(apuesta,parametroAdicional);
            let resultado = juegoSeleccionado.calcularResultado(apuesta);
            this.modificarFichas(jugador,resultado);
            return jugar
        } else { return "No tenes suficientes fichas"
            }
    } else{
        return "a"
    } 
    }
    
    jugarApostandoTodo(jugador:Jugador, numeroDeJuego:number,fichas: number, parametroAdicional?: any): string{
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= fichas){
            const juegoSeleccionado = this.juegos[numeroDeJuego];
            let jugar = juegoSeleccionado.jugar(fichas,parametroAdicional);
            let resultado = juegoSeleccionado.calcularResultado(fichas);
            this.modificarFichas(jugador,resultado);
            return jugar
        } else { return "No tenes suficientes fichas"
            }
    } else{
        return "a"
    } 
    }
 }