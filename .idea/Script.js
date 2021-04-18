let container;
let cards;
let cards1;

let Function = function () {
    container = document.getElementById("container")
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    cards1 = cards.length;

    Double(cards);
    Random(cards);
    Pole();
}

let Double = function (item) {
    for (let i = 0; i < cards1; i++) {
        item.push(item[i])
    }
    return item;
}

let Random = function (item1) {
    for (let j = 0; j < cards.length; j++) {
        let randomator = Math.floor(Math.random() * 16);
        let pole1Element = cards[j];

        cards[j] = cards[randomator];
        cards[randomator] = pole1Element;
    }
    return item1;
}

let Pole = function () {
    for (let x = 0; x < cards.length; x++) {
        let div = document.createElement('div')

        div.innerText = cards[x]
        container.appendChild(div)
    }
}
window.onload = Function;