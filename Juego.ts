export abstract class Juego{
    protected nombreDelJuego: string;
    protected esGanador: boolean;
    

    constructor(nombreDelJuego:string, esGanador:boolean){
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): number;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number;
    abstract mensajeResultado(resultado:number, parametroAdicional?: any):string;
}