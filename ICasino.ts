import { Jugador } from "./Jugador";

export interface ICasino {
    abrirCasino(): void;
    cerrarCasino(): void;
    verMayoriaEdad(jugador:Jugador): boolean;
    cambiarDineroPorFichas(jugador:Jugador, valor:number): void;
    cobrarLaCaja(jugador:Jugador, valor:number): void; 
}