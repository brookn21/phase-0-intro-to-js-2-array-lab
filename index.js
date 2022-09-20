// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newCats = [...cats]
    newCats.push(name)
    return newCats
}

function prependCat(name){
    let newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name){
    let newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat(name){
    let newCats = [...cats]
    newCats.shift(name)
    return newCats
}