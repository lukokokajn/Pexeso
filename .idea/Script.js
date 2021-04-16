let container;
let pole1;
let pole2;

let Function = function () {
    container = document.getElementById("container")
    pole1 = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    pole2 = pole1.length;

    Double(pole1);
    Random(pole1);
    Pole();
}

let Double = function (item) {
    for (let i = 0; i < pole2; i++) {
        item.push(item[i])
    }
    return item;
}

let Random = function (item1) {
    for (let j = 0; j < pole1.length; j++) {
        let randomator = Math.floor(Math.random() * 16);
        let pole1Element = pole1[j];

        pole1[j] = pole1[randomator];
        pole1[randomator] = pole1Element;
    }
    return item1;
}

let Pole = function () {
    for (let x = 0; x < pole1.length; x++) {
        let div = document.createElement('div')

        div.innerText = pole1[x]
        container.appendChild(div)
    }
}
window.onload = Function;