
// Sual 1 
const a = 60
if (a < 1000) {
    console.log('a 1000-den boyuk olmalidir')
}
else if (a > 100000) {
    console.log('a 100000-de kicik olmalidir')
}
else {
    if (a%3 === 0) {
        console.log('dogru eded daxil etmisiniz')
    }
    else {
        console.log('a 3-e bolunen eded olmalidir')
    }
    }

    // Sual 2 
    const user = {
        name: 'Elnur',
        height: 179,
        phone: {
            model: 'Iphone',
        },
        orders: ['book', 'mouse', 'mousepad']
    }

    /* a) */ console.log(++user.height)  
    /* b) */ user.phone.model = 'Samsung'
    console.log(user.phone)
    /* c) */  
    /* d) */ delete user.name
    console.log(user)
    /* e) */ user.orders.shift()
    console.log(user)
    /* f) */ user.orders.pop()
    console.log(user)
    /* g) */ user.orders.unshift('ball')
    console.log(user)
    /* h) */ user.orders.push('headphones')
    console.log(user)
    /* i) */

    // Sual 3 
    const info = ["Resul", "Serifov", 35]
    // ["Resul Serifov", 25] 
    


