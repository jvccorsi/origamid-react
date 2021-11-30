const menu ={

    seletor: '.principal',
}

console.log(menu.seletor.toUpperCase())
console.log('aa')


function upperName (name){
    return name.toUpperCase()
}

console.log(upperName('joao'))

//expressão

const upperName2 = function (name){
    return name.toUpperCase()
};
console.log(upperName2('joao2'))

//ArrowFunction
const upperName3 =  (name) => {
    return name.toUpperCase()
};
console.log(upperName3('joao3'))

//ArrowFunction2
const upperName4 =  (name) => name.toUpperCase();

console.log(upperName4('joao4'));


 