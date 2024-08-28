// mini grocery with javascript objects

const products = {
    piattos: 14,
    nova: 15,
    coke: 10,
    rc: 10,
    nesfruita: 15,
    nestea: 20,
    tang: 20,
    barnuts: 2,
    polvoron: 2,
    end: 0
}

for (let key in products) {
    console.log(key.charAt(1));
}
