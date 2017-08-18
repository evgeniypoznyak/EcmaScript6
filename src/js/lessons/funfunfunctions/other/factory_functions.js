// создаем собаку
const dog = () => {

    // внутри есть переменная-свойство, которая будет доступна только собаке
    const sound = 'woof';

    // возвращаем объект со свойством talk которое имеет доступ к sound (closure эффект)
    return {
        talk: () => {
            console.log(sound);
        }
    }
}

// создаем собачку с именем graf
const graf = dog();
// у собачки есть свойство talk и внутри нее есть sound = 'woof'
graf.talk()