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
exports.Variacion1 = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var Variacion1 = /** @class */ (function (_super) {
    __extends(Variacion1, _super);
    function Variacion1() {
        return _super.call(this, "Fiesta Frutal", true, "V1", 10, "Madera") || this;
    }
    Variacion1.prototype.verResultado = function () {
        return this.esGanador;
    };
    Variacion1.prototype.tirarPalanca = function () {
        return "\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n        \uD83C\uDFB0 \u00A1TIRANDO LA PALANCA! \uD83C\uDFB0\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n        \uD83D\uDD79\uFE0F Palanca en movimiento... \u00A1Buena suerte! \uD83C\uDF40\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n        ";
    };
    Variacion1.prototype.jugar = function (apuesta) {
        var rodillos = ['🍒', '🍋', '🔔', '⭐', '🍊'];
        this.resultadoRodillos = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];
        var combinacionGanadora = this.resultadoRodillos.every(function (symbol) { return symbol === '🍒'; }) ||
            this.resultadoRodillos.every(function (symbol) { return symbol === '🍋'; }) ||
            this.resultadoRodillos.every(function (symbol) { return symbol === '🍊'; });
        if (combinacionGanadora) {
            this.esGanador = true;
            var resultado = this.calcularResultado(apuesta);
            return resultado;
        }
        else {
            this.esGanador = false;
            return -apuesta;
        }
    };
    Variacion1.prototype.calcularResultado = function (apuesta) {
        if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍒'; })) {
            return apuesta * 10;
        }
        else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍋'; })) {
            return apuesta * 5;
        }
        else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍊'; })) {
            return apuesta * 2;
        }
        return 0;
    };
    Variacion1.prototype.mensajeResultado = function (apuesta) {
        if (this.esGanador) {
            if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍒'; })) {
                return this.tirarPalanca() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83C\uDF52 \u00A1Cereza Suprema! \uD83C\uDF52\n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
            }
            else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍋'; })) {
                return this.tirarPalanca() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83C\uDF4B \u00A1Lim\u00F3n M\u00E1gico! \uD83C\uDF4B\n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
            }
            else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍊'; })) {
                return this.tirarPalanca() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83C\uDF4A \u00A1El Poder Naranja! \uD83C\uDF4A\n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
            }
            else {
                return "Error Al Mostrar Resultado ";
            }
        }
        else {
            return this.tirarPalanca() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                        \uD83D\uDE1E\uD83D\uDC94 Lo siento, perdiste \uD83D\uDE1E\uD83D\uDC94\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB8 Apuesta perdida: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83D\uDCAD No te rindas, la pr\u00F3xima vez ganar\u00E1s \uD83D\uDCAD\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
        }
    };
    return Variacion1;
}(Tragamonedas_1.Tragamonedas));
exports.Variacion1 = Variacion1;
