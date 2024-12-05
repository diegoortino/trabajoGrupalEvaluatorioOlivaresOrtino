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
exports.Ruleta = void 0;
var Juego_1 = require("./Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this, "Ruleta", false) || this;
        _this.numeros = 38;
        _this.esGanador = false;
        return _this;
    }
    Ruleta.prototype.jugar = function (apuesta, numeroElegido) {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
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
    Ruleta.prototype.verResultado = function () {
        return this.esGanador;
    };
    Ruleta.prototype.calcularResultado = function (apuesta) {
        if (this.esGanador === false) {
            return -apuesta;
        }
        else {
            return apuesta * 38;
        }
    };
    Ruleta.prototype.mensajeResultado = function (resultado, numeroElegido) {
        if (resultado == 0) {
            return "❌ No ingresaste un número válido.";
        }
        else {
            if (this.esGanador == true) {
                return "\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \u2728\uD83E\uDD73 \u00A1FELICIDADES! \uD83E\uDD73\u2728\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83C\uDF89 \u00A1Has ganado la apuesta!\n                    \uD83D\uDD39 N\u00FAmero elegido: ".concat(numeroElegido, " \uD83D\uDD22\n                    \uD83D\uDD39 N\u00FAmero ganador: ").concat(this.ganador, " \uD83C\uDFAF\n                    \uD83D\uDCB0 \u00A1Ganancia total! \uD83D\uDCB0\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
            }
            else {
                return "\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83D\uDE1E\uD83D\uDC94 Lo siento, perdiste \uD83D\uDC94\uD83D\uDE1E\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                    \uD83D\uDD39 N\u00FAmero elegido: ".concat(numeroElegido, " \uD83D\uDD22\n                    \uD83D\uDD39 N\u00FAmero ganador: ").concat(this.ganador, " \uD83C\uDFAF\n                    \uD83D\uDCB8 Mejor suerte la pr\u00F3xima vez \uD83D\uDCB8\n                    \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                ");
            }
        }
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
