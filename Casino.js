"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(nombreCasino) {
        this.estaAbierto = false;
        this.jugadores = [];
        this.juegos = [];
        this.nombreCasino = nombreCasino;
    }
    Casino.getInstance = function (nombreCasino) {
        if (!Casino.instance) {
            Casino.instance = new Casino(nombreCasino);
        }
        return Casino.instance;
    };
    Casino.prototype.getNombreCasino = function () {
        return this.nombreCasino;
    };
    Casino.prototype.abrirCasino = function () {
        if (!this.estaAbierto) {
            this.estaAbierto = true;
        }
        else {
            this.estaAbierto = false;
        }
        ;
    };
    Casino.prototype.cerrarCasino = function () {
        if (this.estaAbierto) {
            this.estaAbierto = false;
        }
        else {
            this.estaAbierto = true;
        }
        ;
    };
    Casino.prototype.verMayoriaEdad = function (jugador) {
        if (jugador.getEdad() >= 18) {
            return true;
        }
        else {
            return false;
        }
    };
    Casino.prototype.cambiarDineroPorFichas = function (jugador, valor) {
        var dineroDelJugador = jugador.getDinero();
        var fichasDelJugador = jugador.getFichas();
        if (valor > 0 && dineroDelJugador >= valor) {
            dineroDelJugador -= valor;
            fichasDelJugador += valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
        else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    };
    Casino.prototype.cobrarLaCaja = function (jugador, valor) {
        var dineroDelJugador = jugador.getDinero();
        var fichasDelJugador = jugador.getFichas();
        if (valor > 0 && fichasDelJugador >= valor) {
            dineroDelJugador += valor;
            fichasDelJugador -= valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
        else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    };
    Casino.prototype.agregarJugador = function (jugador) {
        if (this.verMayoriaEdad(jugador)) {
            this.jugadores.push(jugador);
            return true;
        }
        else {
            return false;
        }
    };
    Casino.prototype.agregarJuego = function (JuegoClase) {
        var juego = new JuegoClase();
        this.juegos.push(juego);
    };
    Casino.prototype.modificarFichas = function (jugador, resultado) {
        var nuevoValor = jugador.getFichas() + resultado;
        jugador.setFichas(nuevoValor);
    };
    Casino.prototype.jugarJuego = function (jugador, numeroDeJuego, apuesta, parametroAdicional) {
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= apuesta && apuesta > 0) {
                var juegoSeleccionado = this.juegos[numeroDeJuego];
                var resultado = juegoSeleccionado.jugar(apuesta, parametroAdicional);
                if (resultado == 0) {
                    return juegoSeleccionado.mensajeResultado(resultado, parametroAdicional);
                }
                else {
                    this.modificarFichas(jugador, resultado);
                    return juegoSeleccionado.mensajeResultado(resultado, parametroAdicional);
                }
            }
            else {
                return "No tenes suficientes fichas";
            }
        }
        else {
            return "Revisar errores: este mensaje no deberia retornarnse";
        }
    };
    Casino.instance = null;
    return Casino;
}());
exports.Casino = Casino;
