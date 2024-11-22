interface ICasino {
    abrirCasino(): void;
    cerrarCasino(): void;
    verMayoriaEdad(jugador:Jugador): boolean;
    cambiarDineroPorFichas(jugador:Jugador, valor:number): void;
    cobrarLaCaja(jugador:Jugador, valor:number): void; 
}

abstract class Juego{
    protected nombreDelJuego: string;
    protected esGanador: boolean;
    

    constructor(nombreDelJuego:string, esGanador:boolean){
        this.nombreDelJuego = nombreDelJuego;
        this.esGanador = esGanador;
    }

    abstract jugar(apuesta: number, parametroAdicional?: any): number;
    abstract apostarTodo(saldo: number, parametroAdicional?: any): number;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number;
    abstract mensajeResultado(resultado:number, parametroAdicional?: any):string;
}

export abstract class Tragamonedas extends Juego {
    protected versionDelJuego: string;
    protected apuestaMinima: number;
    protected tipoDeRodillo: string;
    protected resultadoRodillos : string[];


    constructor(nombreDelJuego: string, esGanador: boolean, versionDelJuego: string, apuestaMinima: number, tipoDeRodillo: string) {
        super(nombreDelJuego, esGanador);
        this.versionDelJuego = versionDelJuego;
        this.apuestaMinima = apuestaMinima;
        this.tipoDeRodillo = tipoDeRodillo;
        
    }
    abstract jugar(apuesta: number): number;
    abstract apostarTodo(saldo: number): number;
    abstract verResultado():boolean;
    abstract calcularResultado(apuesta:number):number;
    abstract mensajeResultado(resultado: number, parametroAdicional?: any): string 

     

}

export class Variacion1 extends Tragamonedas {
 
    
    constructor() {
        super("Tragamonedas Variacion 1",true, "V1", 10, "Madera");
    }

    verResultado(): boolean {
        return this.esGanador;
    }

    



    jugar(apuesta: number): number {

        const rodillos = ['🍒', '🍋', '🔔', '⭐', '🍊'];
        this.resultadoRodillos = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];
        

        const combinacionGanadora = this.resultadoRodillos.every(symbol => symbol === '🍒') || 
                                    this.resultadoRodillos.every(symbol => symbol === '🍋') || 
                                    this.resultadoRodillos.every(symbol => symbol === '🔔');

        if (combinacionGanadora) {

            this.esGanador = true;
            const resultado = this.calcularResultado(apuesta);
            return resultado;
        } else {
            this.esGanador = false;
            return -apuesta;
        }
       
    }


    apostarTodo(saldo: number): number {
        const rodillos = ['🍒', '🍋', '🔔', '⭐', '🍊'];
        const resultadoRodillos = [
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)],
            rodillos[Math.floor(Math.random() * rodillos.length)]
        ];

        const combinacionGanadora = resultadoRodillos.every(symbol => symbol === '🍒') || 
                                     resultadoRodillos.every(symbol => symbol === '🍋') || 
                                     resultadoRodillos.every(symbol => symbol === '🔔');

        if (combinacionGanadora) {

            this.esGanador = true;
            const resultado = this.calcularResultado(saldo);
            return resultado;
        } else {
            this.esGanador = false;
            return -saldo;
        }
    }
    calcularResultado(apuesta: number): number {
        if (this.resultadoRodillos.every(symbol => symbol === '🍒')) {
            return apuesta * 10;

        } else if (this.resultadoRodillos.every(symbol => symbol === '🍋')) {
            return apuesta * 5;

        } else if (this.resultadoRodillos.every(symbol => symbol === '🔔')) {
            return apuesta * 2;
        }
        return 0;
    }


    mensajeResultado(apuesta: number): string {
        if (this.esGanador == true) {
            return "🎉 ¡Ganaste! 🎉 Resultado: ${this.resultadoRodillos.join(' ')}. Jugaste a ${this.nombreDelJuego} con una apuesta de ${apuesta} 💵.";
        } else {
            return "😞 Perdiste. 😞 Resultado: ${this.resultadoRodillos.join(' ')}. Jugaste a ${this.nombreDelJuego} con una apuesta de ${apuesta} 💵.";
        }
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

class Ruleta extends Juego {
    private numeros: number = 38;
    private ganador: number;
    protected esGanador:boolean = false

    constructor(){
        super("Ruleta",false)
    }

    jugar(apuesta: number, numeroElegido: number,): number {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
                this.esGanador = true;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            } else {
                this.esGanador = false;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            }
        } else {
            return 0;
        }
    }
    apostarTodo(saldo: number, numeroElegido: number): number {
        this.ganador = Math.floor(Math.random() * this.numeros);
        if (numeroElegido >= 0 && numeroElegido < this.numeros) {
            if (numeroElegido === this.ganador) {
                this.esGanador = true;
                const resultado = this.calcularResultado(saldo);
                return resultado
            } else {
                this.esGanador = false;
                const resultado = this.calcularResultado(saldo);
                return resultado
            }
        } else {
            return 0;
        }
    }
    verResultado(): boolean {
        return this.esGanador
    }
    calcularResultado(apuesta: number): number {
        if(this.esGanador === false) {
            return -apuesta;
        }else {
            return apuesta * 37;
        }
    }
    mensajeResultado(resultado: number, numeroElegido: number): string {
        if (resultado == 0 ) {
            return "No ingresaste un numero valido";
        } else {
            if (this.esGanador == true) {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :destellos: :gorro_de_fiesta: ¡FELICIDADES! :gorro_de_fiesta: :destellos:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :cara_de_fiesta: ¡Has ganado la apuesta!
                :diamante_azul_pequeño: Número elegido: ${numeroElegido} :1234:
                :diamante_azul_pequeño: Número ganador: ${this.ganador} :dardo:
                :bolsa_de_dinero: ¡Ganancia total! :bolsa_de_dinero:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        } else {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :decepcionado: :corazón_partido: Lo siento, perdiste :corazón_partido: :decepcionado:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :diamante_azul_pequeño: Número elegido: ${numeroElegido} :1234:
                :diamante_azul_pequeño: Número ganador: ${this.ganador} :dardo:
                :dinero_con_alas: Mejor suerte la próxima vez :dinero_con_alas:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        }
    }
    }
}

class CarreraDeCaballos extends Juego {
    protected esGanador: boolean = false;
    private caballos: string[] = ["Caballo 1 - Margarita", "Caballo 2 - Picante", "Caballo 3 - Tormenta", "Caballo 4 - Petiso"];
    private caballoGanador: number;

    constructor(){
        super("Carrera de Caballos", false)
    }

    listarCaballos(): string {
        return this.caballos.join("\n");
    }

    jugar(apuesta: number, caballoElegido: number,): number {
        this.caballoGanador = Math.floor(Math.random() * this.caballos.length);
        if (caballoElegido >= 0 && caballoElegido < this.caballos.length) {
            if (caballoElegido === this.caballoGanador) {
                this.esGanador = true;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            } else {
                this.esGanador = false;
                const resultado = this.calcularResultado(apuesta);
                return resultado
            }
        } else {
            return 0;
        }
    }

    apostarTodo(saldo: number, caballoElegido: number): number {
        return this.jugar(saldo, caballoElegido);
    }

    verResultado(): boolean {
        return this.esGanador
    }
    calcularResultado(apuesta: number): number {
        if(this.esGanador === false) {
            return -apuesta;
        }else {
            return apuesta * 2;
        }
    }
    mensajeResultado(resultado: number, caballoElegido: number): string {
        if (resultado == 0 ) {
            return "No ingresaste un numero valido";
        } else {
            if (this.esGanador == true) {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :destellos: :gorro_de_fiesta: ¡FELICIDADES! :gorro_de_fiesta: :destellos:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :cara_de_fiesta: ¡Has ganado la apuesta!
                :diamante_azul_pequeño: Caballo elegido: ${caballoElegido} :1234:
                :diamante_azul_pequeño: Caballo ganador: ${this.caballos[this.caballoGanador]} :dardo:
                :bolsa_de_dinero: ¡Ganancia de ${this.caballoGanador}! :bolsa_de_dinero:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        } else {
            return `
                ━━━━━━━━━━━━━━━━━━━━━━━
                :decepcionado: :corazón_partido: Lo siento, perdiste :corazón_partido: :decepcionado:
                ━━━━━━━━━━━━━━━━━━━━━━━
                :diamante_azul_pequeño: Caballo elegido: ${caballoElegido} :1234:
                :diamante_azul_pequeño: Caballo ganador: ${this.caballos[this.caballoGanador]} :dardo:
                :dinero_con_alas: Mejor suerte la próxima vez :dinero_con_alas:
                ━━━━━━━━━━━━━━━━━━━━━━━
                            `;
        }
    }
    }
}

class Jugador {
    private nombre: string;
    private edad: number;
    private dinero: number = 1000;
    private fichas: number = 0;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    getDinero(): number {
        return this.dinero;
    }

    getFichas(): number {
        return this.fichas;
    }

    setDinero(nuevoValorDinero): void {
        this.dinero = nuevoValorDinero
    }

    setFichas(nuevoValorFichas: number): void {
        this.fichas = nuevoValorFichas;
    }
}

class Casino implements ICasino{
    private nombreCasino: string;
    private estaAbierto: boolean = false;
    private jugadores: Jugador[] = [];
    private juegos: Juego[] = [];

    constructor(nombreCasino: string) {
        this.nombreCasino = nombreCasino;
    }

    getNombreCasino(): string {
        return this.nombreCasino;
    }

    abrirCasino(): void {
        if(!this.estaAbierto){
            this.estaAbierto = true;
        } else {
            this.estaAbierto = false;
        };
    }

    cerrarCasino(): void {
        if(this.estaAbierto){
            this.estaAbierto = false;
        } else {
            this.estaAbierto = true;
        };
    }

    verMayoriaEdad(jugador:Jugador): boolean {
        if (jugador.getEdad() >= 18) {
            return true
        } else {
            return false
        }
    }

    cambiarDineroPorFichas (jugador:Jugador, valor:number): void {    
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();

        if (valor > 0 && dineroDelJugador >= valor) {
            dineroDelJugador -= valor;
            fichasDelJugador += valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    }

    cobrarLaCaja (jugador:Jugador, valor:number) : void  {
        let dineroDelJugador: number = jugador.getDinero();
        let fichasDelJugador: number = jugador.getFichas();

        if (valor > 0 && fichasDelJugador >= valor) {
            dineroDelJugador += valor;
            fichasDelJugador -= valor;
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        } else {
            jugador.setDinero(dineroDelJugador);
            jugador.setFichas(fichasDelJugador);
        }
    }

    agregarJugador(jugador: Jugador): boolean {
        if (this.verMayoriaEdad(jugador)) {
            this.jugadores.push(jugador);
            return true;
        } else {
            return false;
        }
    }

    agregarJuego(JuegoClase: new () => Juego): void {
        const juego = new JuegoClase();
        this.juegos.push(juego);
    }

    modificarFichas(jugador: Jugador, resultado:number):void{
        let nuevoValor = jugador.getFichas() + resultado;
        jugador.setFichas(nuevoValor);
    }

    jugarJuego(jugador:Jugador, numeroDeJuego:number,apuesta: number, parametroAdicional?: any): string{
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= apuesta && apuesta > 0){
            const juegoSeleccionado = this.juegos[numeroDeJuego];
            let resultado = juegoSeleccionado.jugar(apuesta,parametroAdicional);
            if (resultado == 0) {return juegoSeleccionado.mensajeResultado(resultado,parametroAdicional)

            }else{
                this.modificarFichas(jugador, resultado);
                return juegoSeleccionado.mensajeResultado(resultado ,parametroAdicional);
            }
        } else { return "No tenes suficientes fichas"
            }
    } else{
        return "a"
    } 
    }
    
    jugarApostandoTodo(jugador:Jugador, numeroDeJuego:number,fichas: number, parametroAdicional?: any): string{
        if (numeroDeJuego >= 0 && numeroDeJuego < this.juegos.length) {
            if (jugador.getFichas() >= fichas && fichas > 0){
            const juegoSeleccionado = this.juegos[numeroDeJuego];
            let resultado = juegoSeleccionado.jugar(fichas, parametroAdicional);
            if (resultado == 0) {return juegoSeleccionado.mensajeResultado(resultado,parametroAdicional)

            }else{
                this.modificarFichas(jugador, resultado);
                return juegoSeleccionado.mensajeResultado(resultado ,parametroAdicional);
            }
        } else { return "No tenes suficientes fichas"
            }
    } else{
        return "a"
    } 
    }
}