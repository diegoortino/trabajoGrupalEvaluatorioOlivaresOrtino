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
var Juego = /** @class */ (function () {
    function Juego(nombreDelJuego, esGanador) {
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }
    return Juego;
}());
/*export abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;


    constructor(nombreDelJuego: string, esGanador: boolean, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego, esGanador);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
    }
    abstract jugar(apuesta: number): string;
    abstract apostarTodo(saldo: number): string;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number
}

export class Variacion1 extends Tragamonedas {
    
    constructor() {
        super("Tragamonedas Variacion 1",true, "V1", 10, "Madera");
    }

    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }

    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
    }

    jugar(apuesta: number): string {
        throw new Error("Method not implemented.");
    }

    apostarTodo(saldo: number): string {
        throw new Error("Method not implemented.");
    }

    toString(): string {
        return this.nombreDelJuego;
    }

}

export class Variacion2 extends Tragamonedas {
    
    constructor() {
        super("Tragamonedas Variacion 2", true, "V2", 10, "Digital");
    }

    jugar(apuesta: number): string {
        throw new Error("Method not implemented.");
    }

    apostarTodo(saldo: number): string {
        throw new Error("Method not implemented.");
    }
    verResultado(): boolean {
        throw new Error("Method not implemented.");
    }
    calcularResultado(apuesta: number): number {
        throw new Error("Method not implemented.");
    }

    toString(): string {
        return this.nombreDelJuego;
    }
}
*/
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
    Ruleta.prototype.apostarTodo = function (saldo, numeroElegido) {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
                this.esGanador = true;
                var resultado = this.calcularResultado(saldo);
                return resultado;
            }
            else {
                this.esGanador = false;
                var resultado = this.calcularResultado(saldo);
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
            return apuesta * 37;
        }
    };
    Ruleta.prototype.mensajeResultado = function (resultado, numeroElegido) {
        if (resultado == 0) {
            return "No ingresaste un numero valido";
        }
        else {
            if (this.esGanador == true) {
                return "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :destellos: :gorro_de_fiesta: \u00A1FELICIDADES! :gorro_de_fiesta: :destellos:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :cara_de_fiesta: \u00A1Has ganado la apuesta!\n                :diamante_azul_peque\u00F1o: N\u00FAmero elegido: ".concat(numeroElegido, " :1234:\n                :diamante_azul_peque\u00F1o: N\u00FAmero ganador: ").concat(this.ganador, " :dardo:\n                :bolsa_de_dinero: \u00A1Ganancia total! :bolsa_de_dinero:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else {
                return "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :decepcionado: :coraz\u00F3n_partido: Lo siento, perdiste :coraz\u00F3n_partido: :decepcionado:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :diamante_azul_peque\u00F1o: N\u00FAmero elegido: ".concat(numeroElegido, " :1234:\n                :diamante_azul_peque\u00F1o: N\u00FAmero ganador: ").concat(this.ganador, " :dardo:\n                :dinero_con_alas: Mejor suerte la pr\u00F3xima vez :dinero_con_alas:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
        }
    };
    return Ruleta;
}(Juego));
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
                return "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :destellos: :gorro_de_fiesta: \u00A1FELICIDADES! :gorro_de_fiesta: :destellos:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :cara_de_fiesta: \u00A1Has ganado la apuesta!\n                :diamante_azul_peque\u00F1o: Caballo elegido: ".concat(caballoElegido, " :1234:\n                :diamante_azul_peque\u00F1o: Caballo ganador: ").concat(this.caballos[this.caballoGanador], " :dardo:\n                :bolsa_de_dinero: \u00A1Ganancia de ").concat(this.caballoGanador, "! :bolsa_de_dinero:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
            else {
                return "\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :decepcionado: :coraz\u00F3n_partido: Lo siento, perdiste :coraz\u00F3n_partido: :decepcionado:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                :diamante_azul_peque\u00F1o: Caballo elegido: ".concat(caballoElegido, " :1234:\n                :diamante_azul_peque\u00F1o: Caballo ganador: ").concat(this.caballos[this.caballoGanador], " :dardo:\n                :dinero_con_alas: Mejor suerte la pr\u00F3xima vez :dinero_con_alas:\n                \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n                            ");
            }
        }
    };
    return CarreraDeCaballos;
}(Juego));
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
            return "a";
        }
    };
    Casino.prototype.jugarApostandoTodo = function (jugador, numeroDeJuego, fichas, parametroAdicional) {
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= fichas && fichas > 0) {
                var juegoSeleccionado = this.juegos[numeroDeJuego];
                var resultado = juegoSeleccionado.jugar(fichas, parametroAdicional);
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
            return "a";
        }
    };
    return Casino;
}());
