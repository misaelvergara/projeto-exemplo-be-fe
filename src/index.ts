interface HeroInterface {
    name: string;
    vulgo: string;
};

const batman = {
    name: "bruce wayne",
    vulgo: "batman"
}

const ironMan = {
    name: "tony stark",
    vulgo: "iron man"
}

const spiderMan = {
    name: "peter park",
    vulgo: "spider man"
}

const blackWidow = {
    name: "Natasha Romanov",
    vulgo: "viuva negra"
}

function printHero (heroi: HeroInterface, heroina: HeroInterface) {
    console.log("Imprimindo...")
    console.log("Primeiro valor à ser imprimido:")
    console.log(heroi);
    console.log("Segundo valor à ser imprimido:")
    console.log(heroina);
    console.log("Pronto!")
}

printHero(spiderMan, blackWidow)