import { convertToParamMap } from "@angular/router";

export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

//Formaa abreviada

// export class Ingredient {
//     constructor(public name:string, public amount: number) {}
// }

// Esta forma hace exactamente lo mismo que arriba pero de forma más corta.
// Se logra poniendo la palabra reservada public delante de los parámetros.