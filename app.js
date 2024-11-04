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
        throw new Error("Method not implemented.");
    };
    Ruleta.prototype.apostarTodo = function (saldo) {
        throw new Error("Method not implemented.");
    };
    Ruleta.prototype.verResultado = function () {
        throw new Error("Method not implemented.");
    };
    Ruleta.prototype.calcularResultado = function (apuesta) {
        throw new Error("Method not implemented.");
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
    return CarreraDeCaballos;
}(Juego));
exports.CarreraDeCaballos = CarreraDeCaballos;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, edad) {
        this.saldo = 1000;
        this.nombre = nombre;
        this.edad = edad;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getEdad = function () {
        return this.edad;
    };
    Jugador.prototype.getSaldo = function () {
        return this.saldo;
    };
    Jugador.prototype.modificarSaldo = function (cantidad) {
        this.saldo += cantidad;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var Casino = /** @class */ (function () {
    function Casino(nombreCasino) {
        this.jugadores = [];
        this.juegos = [];
        this.nombreCasino = nombreCasino;
    }
    Casino.prototype.getNombreCasino = function () {
        return this.nombreCasino;
    };
    Casino.prototype.agregarJugador = function (nombre, edad) {
        var jugador = new Jugador(nombre, edad);
        if (jugador.getEdad() >= 18) {
            this.jugadores.push(jugador);
            return true;
        }
        else {
            console.log("".concat(jugador.getNombre(), " no es mayor de edad y no puede jugar en el casino."));
            return false;
        }
    };
    Casino.prototype.getSaldoJugador = function () {
        return this.jugadores[0].getSaldo();
    };
    Casino.prototype.agregarJuego = function (JuegoClase) {
        var juego = new JuegoClase();
        this.juegos.push(juego);
    };
    Casino.prototype.listarJuegos = function () {
        this.juegos.forEach(function (juego, index) {
            console.log("".concat(index + 1, ". ").concat(juego["nombreDelJuego"]));
        });
    };
    Casino.prototype.jugarJuego = function (opcionElegida, apuesta, parametroAdicional) {
    };
    Casino.prototype.apostarTodo = function (opcionElegida, apuesta, parametroAdicional) {
    };
    return Casino;
}());
exports.Casino = Casino;
