import * as readlineSync from "readline-sync";
import { CarreraDeCaballos, Casino, Ruleta, Variacion1, Variacion2, Jugador } from "./app";

let CasinoProvincial = new Casino("Casino Provincial");

CasinoProvincial.agregarJuego(Variacion1);
CasinoProvincial.agregarJuego(Variacion2);
CasinoProvincial.agregarJuego(Ruleta);
CasinoProvincial.agregarJuego(CarreraDeCaballos);

CasinoProvincial.agregarJugador(Jugador, "Carlos", 25, 1500);
CasinoProvincial.agregarJugador(Jugador, "Ana", 17);