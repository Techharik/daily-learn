// class Person {
//     private name: string;

//     public constructor(name: string, private age: number) {
//         this.name = name;
//         age = 12
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const person = new Person("Jane", 2);
// console.log(person.getName());


interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public toString(): string {
        return `Square[width=${this.width}]`;
    }
}

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello',