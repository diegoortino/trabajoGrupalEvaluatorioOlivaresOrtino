"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = exports.Jugador = exports.CarreraDeCaballos = exports.Ruleta = exports.Variacion2 = exports.Variacion1 = exports.Tragamonedas = exports.Juego = void 0;
var readlineSync = require("readline-sync");
var Juego = /** @class */ (function () {
    function Juego(nombreDelJuego, esGanador) {
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }
    return Juego;
}());
exports.Juego = Juego;
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombreDelJuego, esGanador, versionDelJuego, apuestaMinima, tipoDeRodillo) {
        var _this = _super.call(this, nombreDelJuego, esGanador) || this;
        _this.versionDelJuego = versionDelJuego;
        _this.apuestaMinima = apuestaMinima;
        _this.tipoDeRodillo = tipoDeRodillo;
        return _this;
    }
    return Tragamonedas;
}(Juego));
exports.Tragamonedas = Tragamonedas;
var Variacion1 = /** @class */ (function (_super) {
    __extends(Variacion1, _super);
    function Variacion1() {
        return _super.call(this, "Tragamonedas Variacion 1", true, "V1", 10, "Madera") || this;
    }
    Variacion1.prototype.verResultado = function () {
        throw new Error("Method not implemented.");
    };
    Variacion1.prototype.calcularResultado = function (apuesta) {
        throw new Error("Method not implemented.");
    };
    Variacion1.prototype.jugar = function (apuesta) {
        throw new Error("Method not implemented.");
    };
    Variacion1.prototype.apostarTodo = function (saldo) {
        throw new Error("Method not implemented.");
    };
    Variacion1.prototype.toString = function () {
        return this.nombreDelJuego;
    };
    return Variacion1;
}(Tragamonedas));
exports.Variacion1 = Variacion1;
var Variacion2 = /** @class */ (function (_super) {
    __extends(Variacion2, _super);
    function Variacion2() {
        return _super.call(this, "Tragamonedas Variacion 2", true, "V2", 10, "Digital") || this;
    }
    Variacion2.prototype.jugar = function (apuesta) {
        throw new Error("Method not implemented.");
    };
    Variacion2.prototype.apostarTodo = function (saldo) {
        throw new Error("Method not implemented.");
    };
    Variacion2.prototype.verResultado = function () {
        throw new Error("Method not implemented.");
    };
    Variacion2.prototype.calcularResultado = function (apuesta) {
        throw new Error("Method not implemented.");
    };
    Variacion2.prototype.toString = function () {
        return this.nombreDelJuego;
    };
    return Variacion2;
}(Tragamonedas));
exports.Variacion2 = Variacion2;
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this, "Ruleta", true) || this;
        _this.numeros = 38;
        return _this;
    }
    Ruleta.prototype.jugar = function (apuesta, numeroElegido) {
        this.ganador = 2 /*Math.floor(Math.random() * this.numeros)*/;
        if (numeroElegido === this.ganador) {
            this.esGanador = true;
            return "\u00A1Felicidades! Has ganado la apuesta. El n\u00FAmero ganador fue ".concat(this.ganador, ".");
        }
        else {
            this.esGanador = false;
            return "Lo siento, perdiste. El n\u00FAmero ganador fue ".concat(this.ganador, ".");
        }
    };
    Ruleta.prototype.apostarTodo = function (saldo, numeroElegido) {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido === this.ganador) {
            this.esGanador = true;
            return "\u00A1Felicidades! Has ganado la apuesta. El n\u00FAmero ganador fue ".concat(this.ganador, ".");
        }
        else {
            this.esGanador = false;
            return "Lo siento, perdiste. El n\u00FAmero ganador fue ".concat(this.ganador, ".");
        }
    };
    Ruleta.prototype.verResultado = function () {
        return this.esGanador;
    };
    Ruleta.prototype.calcularResultado = function (apuesta) {
        if (this.esGanador === false) {
            return -apuesta;
        }
        else {
            return apuesta * 37;
        }
    };
    return Ruleta;
}(Juego));
exports.Ruleta = Ruleta;
var CarreraDeCaballos = /** @class */ (function (_super) {
    __extends(CarreraDeCaballos, _super);
    function CarreraDeCaballos() {
        var _this = _super.call(this, "Carrera de Caballos", true) || this;
        _this.caballos = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
        return _this;
    }
    CarreraDeCaballos.prototype.listarCaballos = function () {
        console.log("Elige un caballo para apostar:");
        this.caballos.forEach(function (caballo, index) {
            console.log("".concat(index + 1, ". ").concat(caballo));
        });
        var caballoElegido = readlineSync.questionInt("Ingresa el numero del caballo elegido: ");
        var indice = caballoElegido - 1;
        if (indice >= 0 && indice < this.caballos.length) {
            return this.caballoElegido = indice;
        }
        else {
            console.log("Selección inválida. Por favor, elige un numero válido.");
            return this.listarCaballos();
        }
    };
    CarreraDeCaballos.prototype.jugar = function (apuesta, caballoElegido) {
        console.log("Iniciando la carrera de caballos...");
        var ganador = Math.floor(Math.random() * this.caballos.length);
        console.log("\nEl ganador es ".concat(this.caballos[ganador], "!"));
        if (ganador === caballoElegido) {
            return "Felicidades, \u00A1ganaste! El ganador es ".concat(this.caballos[ganador], ".");
        }
        else {
            return "Lo siento, perdiste. El ganador es ".concat(this.caballos[ganador], ".");
        }
    };
    CarreraDeCaballos.prototype.apostarTodo = function (saldo, caballoElegido) {
        console.log("Iniciando la carrera de caballos...");
        var ganador = Math.floor(Math.random() * this.caballos.length);
        console.log("\nEl ganador es ".concat(this.caballos[ganador], "!"));
        if (ganador === caballoElegido) {
            return "Felicidades, \u00A1ganaste! El ganador es ".concat(this.caballos[ganador], ".");
        }
        else {
            return "Lo siento, perdiste. El ganador es ".concat(this.caballos[ganador], ".");
        }
    };
    CarreraDeCaballos.prototype.verResultado = function () {
        throw new Error("Method not implemented.");
    };
    CarreraDeCaballos.prototype.calcularResultado = function (apuesta) {
        throw new Error("Method not implemented.");
    };
    CarreraDeCaballos.prototype.toString = function () {
        return this.nombreDelJuego;
    };
    return CarreraDeCaballos;
}(Juego));
exports.CarreraDeCaballos = CarreraDeCaballos;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, edad) {
        this.dinero = 1000;
        this.fichas = 0;
        this.nombre = nombre;
        this.edad = edad;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getEdad = function () {
        return this.edad;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.getFichas = function () {
        return this.fichas;
    };
    Jugador.prototype.setDinero = function (nuevoValorDinero) {
        this.dinero = nuevoValorDinero;
    };
    Jugador.prototype.setFichas = function (nuevoValorFichas) {
        this.fichas = nuevoValorFichas;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var Casino = /** @class */ (function () {
    function Casino(nombreCasino) {
        this.estaAbierto = false;
        this.jugadores = [];
        this.juegos = [];
        this.nombreCasino = nombreCasino;
    }
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
            if (jugador.getFichas() >= apuesta) {
                var juegoSeleccionado = this.juegos[numeroDeJuego];
                var jugar = juegoSeleccionado.jugar(apuesta, parametroAdicional);
                var resultado = juegoSeleccionado.calcularResultado(apuesta);
                this.modificarFichas(jugador, resultado);
                return jugar;
            }
            else {
                return "No tenes suficientes fichas";
            }
        }
        else {
            return "a";
        }
    };
    Casino.prototype.jugarApostandoTodo = function (jugador, numeroDeJuego, fichas, parametroAdicional) {
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= fichas) {
                var juegoSeleccionado = this.juegos[numeroDeJuego];
                var jugar = juegoSeleccionado.jugar(fichas, parametroAdicional);
                var resultado = juegoSeleccionado.calcularResultado(fichas);
                this.modificarFichas(jugador, resultado);
                return jugar;
            }
            else {
                return "No tenes suficientes fichas";
            }
        }
        else {
            return "a";
        }
    };
    return Casino;
}());
exports.Casino = Casino;
