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
exports.CarreraDeCaballos = void 0;
var Juego_1 = require("./Juego");
var CarreraDeCaballos = /** @class */ (function (_super) {
    __extends(CarreraDeCaballos, _super);
    function CarreraDeCaballos() {
        var _this = _super.call(this, "Carrera de Caballos", false) || this;
        _this.esGanador = false;
        _this.caballos = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
        return _this;
    }
    CarreraDeCaballos.prototype.listarCaballos = function () {
        return this.caballos.join("\n");
    };
    CarreraDeCaballos.prototype.jugar = function (apuesta, caballoElegido) {
        this.caballoGanador = Math.floor(Math.random() * this.caballos.length);
        if (caballoElegido >= 0 && caballoElegido < this.caballos.length) {
            if (caballoElegido === this.caballoGanador) {
                this.esGanador = true;
                var resultado = this.calcularResultado(apuesta);
                return resultado;
            }
            else {
                this.esGanador = false;
                var resultado = this.calcularResultado(apuesta);
                return resultado;
            }
        }
        else {
            return 0;
        }
    };
    CarreraDeCaballos.prototype.apostarTodo = function (saldo, caballoElegido) {
        return this.jugar(saldo, caballoElegido);
    };
    CarreraDeCaballos.prototype.verResultado = function () {
        return this.esGanador;
    };
    CarreraDeCaballos.prototype.calcularResultado = function (apuesta) {
        if (this.esGanador === false) {
            return -apuesta;
        }
        else {
            return apuesta * 2;
        }
    };
    CarreraDeCaballos.prototype.mensajeResultado = function (resultado, caballoElegido) {
        if (resultado == 0) {
            return "No ingresaste un numero valido";
        }
        else {
            if (this.esGanador == true) {
                return "\n                 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDF8A \u00A1Has ganado la apuesta! \uD83C\uDF8A\n                \uD83D\uDC0E Caballo elegido: ".concat(this.caballos[caballoElegido], " \uD83D\uDC0E\n                \uD83C\uDFC6 Caballo ganador: ").concat(this.caballos[this.caballoGanador], " \uD83C\uDFC6\n                \uD83D\uDCB0 \u00A1Ganancia de ").concat(resultado, "! \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else {
                return "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83D\uDE1E\uD83D\uDC94 Lo siento, perdiste \uD83D\uDE1E\uD83D\uDC94\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83D\uDC0E Caballo elegido: ".concat(this.caballos[caballoElegido], " \uD83D\uDC0E\n                \uD83C\uDFC6 Caballo ganador: ").concat(this.caballos[this.caballoGanador], " \uD83C\uDFC6\n                \uD83D\uDCB8 Mejor suerte la pr\u00F3xima vez \uD83D\uDCB8\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
        }
    };
    return CarreraDeCaballos;
}(Juego_1.Juego));
exports.CarreraDeCaballos = CarreraDeCaballos;
