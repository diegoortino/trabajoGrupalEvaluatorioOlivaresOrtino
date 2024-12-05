import { Jugador } from "./Jugador";
import { Juego } from "./Juego";
import { ICasino } from "./ICasino";

export class Casino implements ICasino{
    private static instance: Casino | null = null;
    private nombreCasino: string;
    private estaAbierto: boolean = false;
    private jugadores: Jugador[] = [];
    private juegos: Juego[] = [];

    constructor(nombreCasino: string) {
        this.nombreCasino = nombreCasino;
    }

    public static getInstance(nombreCasino: string): Casino {
        if (!Casino.instance) {
            Casino.instance = new Casino(nombreCasino);
        }
        return Casino.instance;
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

    cambiarDineroPorFichas (jugador:Jugador, valor:number): boolean {    
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();
        

        if (valor > 0 && dineroDelJugador >= valor) {
            dineroDelJugador -= valor;
            fichasDelJugador += valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
            return true;
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
            return false;
        }      
    }

    cobrarLaCaja (jugador:Jugador, valor:number) : boolean  {
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();
        

        if (valor > 0 && fichasDelJugador >= valor) {
            dineroDelJugador += valor;
            fichasDelJugador -= valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
            return true;
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
            return false;
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

    verMayoriaEdad(jugador:Jugador): boolean {
        if (jugador.getEdad() >= 18) {
            return true
        } else {
            return false
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
            if (jugador.getFichas() >= apuesta && apuesta > 0){
            const juegoSeleccionado = this.juegos[numeroDeJuego];

            let resultado = juegoSeleccionado.jugar(apuesta,parametroAdicional);
            if (resultado == 0) {return juegoSeleccionado.mensajeResultado(resultado,parametroAdicional)


            }else{
                this.modificarFichas(jugador, resultado);
                return juegoSeleccionado.mensajeResultado(resultado ,parametroAdicional);
            }
        } else if(isNaN(apuesta)) {
            
            return "La valor ingresado no es un numero"

        } else { 
            return "No tenes suficientes fichas"
        }
    } else{
        return "Revisar errores: este mensaje no deberia retornarnse"
    } 
    }
}