export class Jugador {
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