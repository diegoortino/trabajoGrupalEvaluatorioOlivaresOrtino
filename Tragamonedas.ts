import { Juego } from "./Juego";

export abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;
    protected resultadoRodillos : string[];


    constructor(nombreDelJuego: string, esGanador: boolean, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego, esGanador);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
        
    }

    abstract jugar(apuesta: number): number;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number;
    abstract mensajeResultado(resultado: number, parametroAdicional?: any): string 
}