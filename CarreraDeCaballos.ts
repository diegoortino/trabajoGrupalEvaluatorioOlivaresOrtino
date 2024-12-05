import { Juego } from "./Juego";

export class CarreraDeCaballos extends Juego {
    protected esGanador: boolean = false;
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoGanador: number;

    constructor(){
        super("Carrera de Caballos", false)
    }

    jugar(apuesta: number, caballoElegido: number): number {
        const indiceCaballoElegido = caballoElegido - 1;
    
        this.caballoGanador = Math.floor(Math.random() * this.caballos.length);
    
        if (indiceCaballoElegido >= 0 && indiceCaballoElegido < this.caballos.length) {
            if (indiceCaballoElegido === this.caballoGanador) {
                this.esGanador = true;
            } else {
                this.esGanador = false;
            }
    
            const resultado = this.calcularResultado(apuesta);
            return resultado;
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
                🐎 Caballo elegido: ${this.caballos[caballoElegido-1]} 🐎
                🏆 Caballo ganador: ${this.caballos[this.caballoGanador]} 🏆
                💰 ¡Ganancia de ${resultado}! 💰
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        } else {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                😞💔 Lo siento, perdiste 😞💔
                ━━━━━━━━━━━━━━━━━━━━━━━
                🐎 Caballo elegido: ${this.caballos[caballoElegido-1]} 🐎
                🏆 Caballo ganador: ${this.caballos[this.caballoGanador]} 🏆
                💸 Mejor suerte la próxima vez 💸
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        }
    }
    }
}