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
exports.Casino = void 0;
var readlineSync = require("readline-sync");
var Juego = /** @class */ (function () {
    function Juego(nombreDelJuego) {
        this.nombreDelJuego = nombreDelJuego;
    }
    return Juego;
}());
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombreDelJuego, versionDelJuego, apuestaMinima, tipoDeRodillo) {
        var _this = _super.call(this, nombreDelJuego) || this;
        _this.versionDelJuego = versionDelJuego;
        _this.apuestaMinima = apuestaMinima;
        _this.tipoDeRodillo = tipoDeRodillo;
        return _this;
    }
    return Tragamonedas;
}(Juego));
var Variacion1 = /** @class */ (function (_super) {
    __extends(Variacion1, _super);
    function Variacion1() {
        return _super.call(this, "Tragamonedas Variacion 1", "V1", 10, "Madera") || this;
    }
    Variacion1.prototype.jugar = function (apuesta) {
        return { mensaje: "Jugando a ".concat(this.nombreDelJuego, " con una apuesta de ").concat(apuesta, "."), nuevoSaldo: 0 };
    };
    Variacion1.prototype.apostarTodo = function (saldo) {
        return { mensaje: "Apostando todo el saldo (".concat(saldo, ") en ").concat(this.nombreDelJuego, "."), nuevoSaldo: 0 };
    };
    return Variacion1;
}(Tragamonedas));
var Variacion2 = /** @class */ (function (_super) {
    __extends(Variacion2, _super);
    function Variacion2() {
        return _super.call(this, "Tragamonedas Variacion 2", "V2", 10, "Digital") || this;
    }
    Variacion2.prototype.jugar = function (apuesta) {
        return { mensaje: "Jugando a ".concat(this.nombreDelJuego, " con una apuesta de ").concat(apuesta, "."), nuevoSaldo: 0 };
    };
    Variacion2.prototype.apostarTodo = function (saldo) {
        return { mensaje: "Apostando todo el saldo (".concat(saldo, ") en ").concat(this.nombreDelJuego, "."), nuevoSaldo: 0 };
    };
    return Variacion2;
}(Tragamonedas));
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this, "Ruleta") || this;
        _this.numeros = 38;
        return _this;
    }
    Ruleta.prototype.jugar = function (apuesta, numeroElegido) {
        return { mensaje: "Jugando a la ".concat(this.nombreDelJuego, " con una apuesta de ").concat(apuesta, " al n\u00FAmero ").concat(numeroElegido, "."), nuevoSaldo: 0 };
    };
    Ruleta.prototype.apostarTodo = function (saldo) {
        return { mensaje: "Apostando todo el saldo (".concat(saldo, ") en la ").concat(this.nombreDelJuego, "."), nuevoSaldo: 0 };
    };
    return Ruleta;
}(Juego));
var CarreraDeCaballos = /** @class */ (function (_super) {
    __extends(CarreraDeCaballos, _super);
    function CarreraDeCaballos() {
        var _this = _super.call(this, "Carrera de Caballos") || this;
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
        var posiciones = Array(this.caballos.length).fill(0);
        var meta = 20;
        var ganador = -1;
        while (ganador === -1) {
            console.clear();
            for (var i = 0; i < this.caballos.length; i++) {
                posiciones[i] += Math.floor(Math.random() * 3); // Avance aleatorio de 0 a 2 espacios
                if (posiciones[i] >= meta)
                    ganador = i; // Verificar si algún caballo alcanzo la meta
                console.log("".concat(this.caballos[i], ": ") + " ".repeat(posiciones[i]) + "🐎");
            }
            console.log("\n" + "-".repeat(30));
            console.log("Meta 🏁");
        }
        console.log("\nEl ganador es ".concat(this.caballos[ganador], "!"));
        if (ganador === caballoElegido) {
            return { mensaje: "Felicidades, el ganador es ".concat(this.caballos[ganador], "!"), nuevoSaldo: apuesta * 4 };
        }
        else
            return { mensaje: "Felicidades, el ganador es ".concat(this.caballos[ganador], "!"), nuevoSaldo: 0 - apuesta };
    };
    CarreraDeCaballos.prototype.apostarTodo = function (saldo, caballoElegido) {
        console.log("Iniciando la carrera de caballos...");
        var posiciones = Array(this.caballos.length).fill(0);
        var meta = 20;
        var ganador = -1;
        while (ganador === -1) {
            console.clear();
            for (var i = 0; i < this.caballos.length; i++) {
                posiciones[i] += Math.floor(Math.random() * 3); // Avance aleatorio de 0 a 2 espacios
                if (posiciones[i] >= meta)
                    ganador = i; // Verificar si algún caballo alcanzo la meta
                console.log("".concat(this.caballos[i], ": ") + " ".repeat(posiciones[i]) + "🐎");
            }
            console.log("\n" + "-".repeat(30));
            console.log("Meta 🏁");
        }
        console.log("\nEl ganador es ".concat(this.caballos[ganador], "!"));
        if (ganador === caballoElegido) {
            return { mensaje: "Felicidades, el ganador es ".concat(this.caballos[ganador], "!"), nuevoSaldo: saldo * 4 };
        }
        else
            return { mensaje: "Felicidades, el ganador es ".concat(this.caballos[ganador], "!"), nuevoSaldo: 0 - saldo };
    };
    return CarreraDeCaballos;
}(Juego));
var Jugador = /** @class */ (function () {
    function Jugador(nombre, edad, saldo) {
        if (saldo === void 0) { saldo = 1000; }
        this.nombre = nombre;
        this.edad = edad;
        this.saldo = saldo;
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
        if (cantidad < 0) {
            this.saldo - cantidad;
        }
        else {
            this.saldo + cantidad;
        }
    };
    return Jugador;
}());
var Casino = /** @class */ (function () {
    function Casino(nombreCasino) {
        this.jugadores = [];
        this.juegos = [];
        this.nombreCasino = nombreCasino;
    }
    Casino.prototype.agregarJugador = function (jugador) {
        if (jugador.getEdad() >= 18) {
            this.jugadores.push(jugador);
        }
        else {
            console.log("".concat(jugador.getEdad, " no es mayor de edad y no puede jugar en el casino."));
        }
    };
    Casino.prototype.agregarJuego = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.listarJuegos = function () {
        console.log("Juegos disponibles en el casino:");
        this.juegos.forEach(function (juego) {
            console.log("- ".concat(juego["nombreDelJuego"]));
        });
    };
    return Casino;
}());
exports.Casino = Casino;
var carrera1 = new CarreraDeCaballos();
carrera1.jugar(500, 2);
