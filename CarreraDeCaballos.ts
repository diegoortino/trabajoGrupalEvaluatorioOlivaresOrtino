import { Juego } from "./Juego";

export class CarreraDeCaballos extends Juego {
    protected esGanador: boolean = false;
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoGanador: number;

    constructor(){
        super("Carrera de Caballos", false)
    }

    listarCaballos(): string {
        return this.caballos.join("\n");
    }

    jugar(apuesta: number, caballoElegido: number,): number {
        this.caballoGanador = Math.floor(Math.random() * this.caballos.length);
        if (caballoElegido >= 0 && caballoElegido < this.caballos.length) {
            if (caballoElegido === this.caballoGanador) {
                this.esGanador = true;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            } else {
                this.esGanador = false;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            }
        } else {
            return 0;
        }
    }

    apostarTodo(saldo: number, caballoElegido: number): number {
        return this.jugar(saldo, caballoElegido);
    }

    verResultado(): boolean {
        return this.esGanador
    }
    calcularResultado(apuesta: number): number {
        if(this.esGanador === false) {
            return -apuesta;
        }else {
            return apuesta * 2;
        }
    }
    mensajeResultado(resultado: number, caballoElegido: number): string {
        if (resultado == 0 ) {
            return "No ingresaste un numero valido";
        } else {
            if (this.esGanador == true) {
            return `
                 ━━━━━━━━━━━━━━━━━━━━━━━
                🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━
                🎊 ¡Has ganado la apuesta! 🎊
                🐎 Caballo elegido: ${this.caballos[caballoElegido]} 🐎
                🏆 Caballo ganador: ${this.caballos[this.caballoGanador]} 🏆
                💰 ¡Ganancia de ${this.caballoGanador}! 💰
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        } else {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                😞💔 Lo siento, perdiste 😞💔
                ━━━━━━━━━━━━━━━━━━━━━━━
                🐎 Caballo elegido: ${this.caballos[caballoElegido]} 🐎
                🏆 Caballo ganador: ${this.caballos[this.caballoGanador]} 🏆
                💸 Mejor suerte la próxima vez 💸
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        }
    }
    }
}