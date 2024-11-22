import { Tragamonedas } from "./Tragamonedas";

export class Variacion2 extends Tragamonedas {
    
    constructor() {
        super("Tragamonedas Variacion 2",true, "V2", 10, "Digital");
    }

    verResultado(): boolean {
        return this.esGanador;
    }

    jugar(apuesta: number): number {

        const rodillos = ['💎', '🍀', '⭐', '🎁', '❌', '💀'];
        this.resultadoRodillos = [
        rodillos[Math.floor(Math.random() * rodillos.length)],
        rodillos[Math.floor(Math.random() * rodillos.length)],
        rodillos[Math.floor(Math.random() * rodillos.length)]
        ];
    

        const esGranPremio = this.resultadoRodillos.every(symbol => symbol === '💎');
        const esPremioMediano = this.resultadoRodillos.every(symbol => symbol === '🍀');
        const esPremioPequeño = this.resultadoRodillos.every(symbol => symbol === '⭐');
        const esPremioEspecial = this.resultadoRodillos.every(symbol => symbol === '🎁');

        if (esGranPremio || esPremioMediano || esPremioPequeño || esPremioEspecial) {

            this.esGanador = true;
            const resultado = this.calcularResultado(apuesta);
            return resultado;
        } else {
            this.esGanador = false;
            return -apuesta;
        }

    }


    apostarTodo(saldo: number): number {
        return this.jugar(saldo);
    }
    calcularResultado(apuesta: number): number {
        if (this.resultadoRodillos.every(symbol => symbol === '💎')) {
            return apuesta * 10;
        } else if (this.resultadoRodillos.every(symbol => symbol === '🍀')) {
            return apuesta * 5;
        } else if (this.resultadoRodillos.every(symbol => symbol === '⭐')) {
            return apuesta * 2;
        } else if (this.resultadoRodillos.every(symbol => symbol === '🎁')) {
            return 0 ;
        }else{
            return 0;
        }
        
    }
    


    mensajeResultado(apuesta: number): string {
        if (this.esGanador) {
            if (this.resultadoRodillos.every(symbol => symbol === '💎')) {
                return `
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎊 ¡Has ganado el Gran Premio! 🎊
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━
                            `;
                        } else if (this.resultadoRodillos.every(symbol => symbol === '🍀')) {
                            return `
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎊 ¡Has ganado el Premio Mediano! 🎊
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━
                            `;
                        } else if (this.resultadoRodillos.every(symbol => symbol === '⭐')) {
                            return `
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎉🎉 ¡FELICIDADES! 🎉🎉
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎊 ¡Has ganado el Premio Pequeño! 🎊
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio obtenido: ${this.calcularResultado(apuesta)} 💰
                ━━━━━━━━━━━━━━━━━━━━━━━━
                            `;
                        } else if (this.resultadoRodillos.every(symbol => symbol === '🎁')) {
                            return `
                ━━━━━━━━━━━━━━━━━━━━━━━━
                ✨✨ ¡Felicidades! Has ganado el Premio Especial! ✨✨
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💰 Apuesta: ${apuesta} 💵
                🏆 Premio Especial obtenido: Esta Tirada Te Salio Gratis
                ━━━━━━━━━━━━━━━━━━━━━━━━
                            `;
                        } else {
                            return "Error Al Mostrar Resultado ";
                        }
                    } else {
                        return `
                ━━━━━━━━━━━━━━━━━━━━━━━━
                😞💔 Lo siento, perdiste 😞💔
                ━━━━━━━━━━━━━━━━━━━━━━━━
                🎰 Resultado: ${this.resultadoRodillos.join(' ')} 
                💸 Apuesta perdida: ${apuesta} 💵
                💭 Mejor suerte la próxima vez 💭
                ━━━━━━━━━━━━━━━━━━━━━━━━
                `;
        }
    }
}

