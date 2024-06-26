let num: number = 35;
const nombre: string = "hola";

// Functions
// function saludar(name: string) {
//   console.log(`hola ${name}`);
// }

// saludar("pepe");
// saludar(2);

// function saludar({ name, age}) {
//   console.log(`Hola ${name}, tienes ${age}`);
// }

// saludar({ name: 2, age: "pepe" });

// function saludar({ name, age }: { name: string; age: number }) : number {
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age
// }

// saludar()

const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

function throwError(message: string): never {
  throw new Error(message);
}

function sumar2(a, b) {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
}

const avengers = ["Spidey", "Hulk", "Avengers"];

// avengers.forEach((avengers) => {
//   console.log(avengers.toUpperCase());
// });

// let hero = {
//   name: "thor",
//   age: 1500,
// };

type Hero = {
  readonly id?: number;
  name: string;
  age: number;
  isActive?: boolean;
};

let hero: Hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "thor¿", age: 100 });
thor.id.crypto.randomUUID();
