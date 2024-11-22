"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
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
