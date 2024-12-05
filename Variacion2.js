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
exports.Variacion2 = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var Variacion2 = /** @class */ (function (_super) {
    __extends(Variacion2, _super);
    function Variacion2() {
        return _super.call(this, "Tragamonedas Variacion 2", true, "V2", 10, "Digital") || this;
    }
    Variacion2.prototype.verResultado = function () {
        return this.esGanador;
    };
    Variacion2.prototype.pulsarBoton = function () {
        return "\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                     \uD83D\uDD34 \u00A1BOT\u00D3N PULSADO! \uD83D\uDD34\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n        \uD83D\uDD79\uFE0F Activando el sistema... \u00A1A cruzar los dedos! \uD83E\uDD1E\n        \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n        ";
    };
    Variacion2.prototype.jugar = function (apuesta) {
        var rodillos = ['💎', '🍀', '⭐', '🎁', '❌', '💀'];
        this.resultadoRodillos = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];
        var esGranPremio = this.resultadoRodillos.every(function (symbol) { return symbol === '💎'; });
        var esPremioMediano = this.resultadoRodillos.every(function (symbol) { return symbol === '🍀'; });
        var esPremioPequeño = this.resultadoRodillos.every(function (symbol) { return symbol === '⭐'; });
        var esPremioEspecial = this.resultadoRodillos.every(function (symbol) { return symbol === '🎁'; });
        if (esGranPremio || esPremioMediano || esPremioPequeño || esPremioEspecial) {
            this.esGanador = true;
            var resultado = this.calcularResultado(apuesta);
            return resultado;
        }
        else {
            this.esGanador = false;
            return -apuesta;
        }
    };
    Variacion2.prototype.calcularResultado = function (apuesta) {
        if (this.resultadoRodillos.every(function (symbol) { return symbol === '💎'; })) {
            return apuesta * 10;
        }
        else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍀'; })) {
            return apuesta * 5;
        }
        else if (this.resultadoRodillos.every(function (symbol) { return symbol === '⭐'; })) {
            return apuesta * 2;
        }
        else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🎁'; })) {
            return 0;
        }
        else {
            return 0;
        }
    };
    Variacion2.prototype.mensajeResultado = function (apuesta) {
        if (this.esGanador) {
            if (this.resultadoRodillos.every(function (symbol) { return symbol === '💎'; })) {
                return this.pulsarBoton() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDF8A \u00A1Has ganado el Gran Premio! \uD83C\uDF8A\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🍀'; })) {
                return this.pulsarBoton() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDF8A \u00A1Has ganado el Premio Mediano! \uD83C\uDF8A\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else if (this.resultadoRodillos.every(function (symbol) { return symbol === '⭐'; })) {
                return this.pulsarBoton() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            \uD83C\uDF89\uD83C\uDF89 \u00A1FELICIDADES! \uD83C\uDF89\uD83C\uDF89\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDF8A \u00A1Has ganado el Premio Peque\u00F1o! \uD83C\uDF8A\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio obtenido: ").concat(this.calcularResultado(apuesta), " \uD83D\uDCB0\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else if (this.resultadoRodillos.every(function (symbol) { return symbol === '🎁'; })) {
                return this.pulsarBoton() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \u2728\u2728 \u00A1Felicidades! Has ganado el Premio Especial! \u2728\u2728\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB0 Apuesta: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83C\uDFC6 Premio Especial obtenido: Esta Tirada Te Salio Gratis\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else {
                return "Error Al Mostrar Resultado ";
            }
        }
        else {
            return this.pulsarBoton() + "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                        \uD83D\uDE1E\uD83D\uDC94 Lo siento, perdiste \uD83D\uDE1E\uD83D\uDC94\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                \uD83C\uDFB0 Resultado: ".concat(this.resultadoRodillos.join(' '), " \n                \uD83D\uDCB8 Apuesta perdida: ").concat(apuesta, " \uD83D\uDCB5\n                \uD83D\uDCAD Mejor suerte la pr\u00F3xima vez \uD83D\uDCAD\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
        }
    };
    return Variacion2;
}(Tragamonedas_1.Tragamonedas));
exports.Variacion2 = Variacion2;
