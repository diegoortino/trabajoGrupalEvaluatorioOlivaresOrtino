import { Tragamonedas } from "./Tragamonedas";

export class Variacion1 extends Tragamonedas {
 
    constructor() {
        super("Fiesta Frutal",true, "V1", 10, "Madera");
    }

    verResultado(): boolean {
        return this.esGanador;
    }

    tirarPalanca(): string {
        return `
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        🎰 ¡TIRANDO LA PALANCA! 🎰
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        🕹️ Palanca en movimiento... ¡Buena suerte! 🍀
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `;
    }
    

    jugar(apuesta: number): number {

        const rodillos = ['🍒', '🍋', '🔔', '⭐', '🍊'];
        this.resultadoRodillos = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];
        
        const combinacionGanadora = this.resultadoRodillos.every(symbol => symbol === '🍒') || 
                                    this.resultadoRodillos.every(symbol => symbol === '🍋') || 
                                    this.resultadoRodillos.every(symbol => symbol === '🍊');

        if (combinacionGanadora) {

            this.esGanador = true;
            const resultado = this.calcularResultado(apuesta);
            return resultado;
        } else {
            this.esGanador = false;
            return -apuesta;
        }
       
    }

    calcularResultado(apuesta: number): number {
        if (this.resultadoRodillos.every(symbol => symbol === '🍒')) {
            return apuesta * 10;

        } else if (this.resultadoRodillos.every(symbol => symbol === '🍋')) {
            return apuesta * 5;

        } else if (this.resultadoRodillos.every(symbol => symbol === '🍊')) {
            return apuesta * 2;
        }
        return 0;
    }

    mensajeResultado(apuesta: number): string {
        if (this.esGanador) {
            if (this.resultadoRodillos.every(symbol => symbol === '🍒')) {
                return this.tirarPalanca() +`
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                🍒 ¡Cereza Suprema! 🍒
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            } 
            else if (this.resultadoRodillos.every(symbol => symbol === '🍋')) {
                return this.tirarPalanca() +`
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                🍋 ¡Limón Mágico! 🍋
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            } 
            else if (this.resultadoRodillos.every(symbol => symbol === '🍊')) {
                return this.tirarPalanca() +`
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                🍊 ¡El Poder Naranja! 🍊
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            }else{
                return "Error Al Mostrar Resultado ";
            }
                
            } else {
                return this.tirarPalanca() +`
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        😞💔 Lo siento, perdiste 😞💔
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💸 Apuesta perdida: ${apuesta} 💵
                💭 No te rindas, la próxima vez ganarás 💭
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                `;
            }
    }
}
