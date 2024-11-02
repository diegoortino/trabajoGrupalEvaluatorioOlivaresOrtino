var CarreraDeCaballos = /** @class */ (function () {
    function CarreraDeCaballos(caballos) {
        this.caballos = caballos;
    }
    CarreraDeCaballos.prototype.jugar = function (apuesta, caballoElegido) {
        console.log("Iniciando la carrera de caballos...");
        var posiciones = Array(this.caballos.length).fill(0);
        var meta = 20;
        var ganador = -1;
        // Simulación de la carrera
        while (ganador === -1) {
            console.clear();
            for (var i = 0; i < this.caballos.length; i++) {
                posiciones[i] += Math.floor(Math.random() * 3); // Avance aleatorio de 0 a 2 espacios
                if (posiciones[i] >= meta)
                    ganador = i; // Verificar si algún caballo alcanzó la meta
                console.log("".concat(this.caballos[i], ": ") + " ".repeat(posiciones[i]) + "🐎");
            }
            console.log("\n" + "-".repeat(30));
            console.log("Meta 🏁");
            // Retrasar la animación
            var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
            delay(200);
        }
        // Mensaje de resultado
        var mensaje = "El ganador es ".concat(this.caballos[ganador], "!");
        console.log("\n".concat(mensaje));
        // Calcular el nuevo saldo
        var nuevoSaldo = (ganador === caballoElegido) ? apuesta * 2 : 0;
        return {
            mensaje: ganador === caballoElegido ? "Felicidades, ganaste con el caballo ".concat(this.caballos[ganador], "!") : "Lo siento, perdiste. Gan\u00F3 el caballo ".concat(this.caballos[ganador], "."),
            nuevoSaldo: nuevoSaldo
        };
    };
    return CarreraDeCaballos;
}());
// Ejemplo de uso
var carrera = new CarreraDeCaballos(["Caballo1", "Caballo2", "Caballo3", "Caballo4"]);
console.log(carrera.jugar(1000, 2));
