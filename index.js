// code your solution here

function saturdayFun(fun = "roller-skate"){
   return `This Saturday, I want to ${fun}!`
}
saturdayFun()


function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork()

function wrapAdjective(adj = "*"){
    return function (secretWord = "special"){
        return `You are ${adj}${secretWord}${adj}!`
    }
}
wrapAdjective()