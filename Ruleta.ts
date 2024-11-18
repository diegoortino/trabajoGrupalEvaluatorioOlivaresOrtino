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
    apostarTodo(saldo: number, numeroElegido: number): number {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
                this.esGanador = true;
                const resultado = this.calcularResultado(saldo);
                return resultado
            } else {
                this.esGanador = false;
                const resultado = this.calcularResultado(saldo);
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
            return apuesta * 37;
        }
    }
    mensajeResultado(resultado: number, numeroElegido: number): string {
        if (resultado == 0 ) {
            return "No ingresaste un numero valido";
        } else {
            if (this.esGanador == true) {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :destellos: :gorro_de_fiesta: ¡FELICIDADES! :gorro_de_fiesta: :destellos:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :cara_de_fiesta: ¡Has ganado la apuesta!
                :diamante_azul_pequeño: Número elegido: ${numeroElegido} :1234:
                :diamante_azul_pequeño: Número ganador: ${this.ganador} :dardo:
                :bolsa_de_dinero: ¡Ganancia total! :bolsa_de_dinero:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        } else {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :decepcionado: :corazón_partido: Lo siento, perdiste :corazón_partido: :decepcionado:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :diamante_azul_pequeño: Número elegido: ${numeroElegido} :1234:
                :diamante_azul_pequeño: Número ganador: ${this.ganador} :dardo:
                :dinero_con_alas: Mejor suerte la próxima vez :dinero_con_alas:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        }
    }
    }
}