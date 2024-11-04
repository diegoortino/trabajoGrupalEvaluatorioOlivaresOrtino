import * as readlineSync from "readline-sync";

interface IJuego {
    jugar(apuesta: number, parametroAdicional?: any): string;
    apostarTodo(saldo: number, parametroAdicional?: any): string;
}

abstract class Juego implements IJuego{
    protected nombreDelJuego:string;

    constructor(nombreDelJuego:string){
        this.nombreDelJuego = nombreDelJuego;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): string;
    abstract apostarTodo(saldo: number, parametroAdicional?: any): string;
}

abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;

    constructor(nombreDelJuego: string, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
    }
    abstract jugar(apuesta: number): string;
    abstract apostarTodo(saldo: number): string;
}

class Variacion1 extends Tragamonedas {

    constructor() {
        super("Tragamonedas Variacion 1", "V1", 10, "Madera");
    }

    jugar(apuesta: number): string {
        if (apuesta < this.apuestaMinima) {
            return "❌ La apuesta mínima es "+ this.apuestaMinima +" 💰.";
        }

        // Simulando el resultado de los rodillos
        const rodillos = ['🍒', '🍋', '🔔', '⭐', '🍊'];
        const resultado = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];

        const combinacionGanadora = resultado.every(symbol => symbol === '🍒') || 
                                     resultado.every(symbol => symbol === '🍋') || 
                                     resultado.every(symbol => symbol === '🔔');

        if (combinacionGanadora) {
            return "🎉 ¡Ganaste! 🎉 Resultado: ${resultado.join(' ')}. Jugaste a ${this.nombreDelJuego} con una apuesta de ${apuesta} 💵.";
        } else {
            return "😞 Perdiste. 😞 Resultado: ${resultado.join(' ')}. Jugaste a ${this.nombreDelJuego} con una apuesta de ${apuesta} 💵.";
        }
    }

    apostarTodo(saldo: number): string {
        return "🎲 Apostando todo el saldo (${saldo}) en ${this.nombreDelJuego} 🎰.";
    }
}


class Variacion2 extends Tragamonedas {
    constructor() {
        super("Tragamonedas Variacion 2", "V2", 10, "Digital");
    }

    jugar(apuesta: number): string {
        return "Jugando a ${this.nombreDelJuego} con una apuesta de ${apuesta}.";
    }

    apostarTodo(saldo: number): string {
        return "Apostando todo el saldo (${saldo}) en ${this.nombreDelJuego}.";
    }
}

class Ruleta extends Juego {
    private numeros: number = 38;

    constructor(){
        super("Ruleta")
    }

    jugar(apuesta: number, numeroElegido: number): string {
        return "Jugando a la ${this.nombreDelJuego} con una apuesta de ${apuesta} al número ${numeroElegido}.";
    }

    apostarTodo(saldo: number): string {
        return "Apostando todo el saldo (${saldo}) en la ${this.nombreDelJuego}.";
    }
}

class CarreraDeCaballos extends Juego {
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoElegido: number;

    constructor(){
        super("Carrera de Caballos")
    }

    listarCaballos(): number {
        console.log("Elige un caballo para apostar:");
        this.caballos.forEach((caballo, index) => {
            console.log("${index + 1}. ${caballo}");
        });

        const caballoElegido = readlineSync.questionInt("Ingresa el número del caballo elegido: ");
        const indice = caballoElegido - 1;

        if (indice >= 0 && indice < this.caballos.length) {
            return this.caballoElegido = indice;
        } else {
            console.log("Selección inválida. Por favor, elige un número válido.");
            return this.listarCaballos();
        }
    }

    jugar(apuesta: number, caballoElegido: number): string {
        return "Jugando a ${this.nombreDelJuego} con una apuesta de ${apuesta} al ${caballoElegido}.";
    }

    apostarTodo(saldo: number, caballoElegido: number): string {
        return "Apostando todo el saldo (${saldo}) al ${caballoElegido} en ${this.nombreDelJuego}.";
    }
}

class Jugador {
    private nombre: string;
    private edad: number;
    private saldo: number;

    constructor(nombre: string, edad: number, saldo: number = 1000) {
        this.nombre = nombre;
        this.edad = edad;
        this.saldo = saldo;
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

    agregarJugador(jugador: Jugador): void {
        if (jugador.getEdad() >= 18) {
            this.jugadores.push(jugador);
        } else {
            console.log("${jugador.getEdad} no es mayor de edad y no puede jugar en el casino.");
        }
    }

    agregarJuego(juego: Juego): void {
        this.juegos.push(juego);
    }

    listarJuegos(): void {
        console.log("Juegos disponibles en el casino:");
        this.juegos.forEach(juego => {
            console.log("- ${juego["nombreDelJuego"]}");
        });
    }
}