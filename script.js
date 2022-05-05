console.log('------ # 1. Исправить код');
// Чтобы в консоль выводилось имя пользователя Vic вместо Vic2. Использовать нужно bind или call или apply.
var name = 'Vic 2';
var user = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};

const getName = user.getName.bind(user); // привязываем контекст this к user с помощью bind
console.log(getName() + ' bind');

const getName2 = user.getName;
console.log(getName2.call(user) + ' call') // привязываем контекст this к user с помощью call

const getName3 = user.getName;
console.log(getName3.apply(user) + ' apply') // привязываем контекст this к user с помощью apply

console.log('------ # 2. Исправить код');
// Чтобы в консоль выводился Arni.
const user1 = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};
const user2 = {
    name: 'Arni',
}

const getName4 = user1.getName;
console.log(getName4.call(user2))
