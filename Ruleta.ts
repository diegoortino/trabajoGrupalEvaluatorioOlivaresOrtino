import { Juego } from "./Juego";

export class Ruleta extends Juego {
    private numeros: number = 38;
    private ganador: number;
    protected esGanador:boolean = false

    constructor(){
        super("Ruleta",false)
    }

    jugar(apuesta: number, numeroElegido: number,): number {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
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
    verResultado(): boolean {
        return this.esGanador
    }
    calcularResultado(apuesta: number): number {
        if(this.esGanador === false) {
            return -apuesta;
        }else {
            return apuesta * 38;
        }
    }
    mensajeResultado(resultado: number, numeroElegido: number): string {
        if (resultado == 0) {
            return "❌ No ingresaste un número válido.";
        } else {
            if (this.esGanador == true) {
                return `
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    ✨🥳 ¡FELICIDADES! 🥳✨
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    🎉 ¡Has ganado la apuesta!
                    🔹 Número elegido: ${numeroElegido} 🔢
                    🔹 Número ganador: ${this.ganador} 🎯
                    💰 ¡Ganancia total! 💰
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            } else {
                return `
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    😞💔 Lo siento, perdiste 💔😞
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    🔹 Número elegido: ${numeroElegido} 🔢
                    🔹 Número ganador: ${this.ganador} 🎯
                    💸 Mejor suerte la próxima vez 💸
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            }
        }
    }
}
    