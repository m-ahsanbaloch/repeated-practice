// chapter 17 20 

// var arr = []

// var arr = ["0123","1012","2101"];
// document.write(`${arr[0]} <br> ${arr[1]} <br> ${arr[2]}`)

// for(i = 1; i <= 10;i++){
//     document.write(`${i} <br>`)
// }

// var tableOf = +prompt("enter which table you want to run")
// var tableLen = +prompt("enter the table length you want to run")
// for(i = 1 ;i <= tableLen; i++){
//     document.write(`${tableOf} x ${i} = ${tableOf * i}  <br>`)
// }

var fruits = ["apple","banana","mango","orange","strawberry"];
for(i = 0 ; i < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}
document.write(`<br><br> 
element at index ${fruits.indexOf("apple")} is ${fruits[0]}<br>
element at index ${fruits.indexOf("banana")} is ${fruits[1]}<br>
element at index ${fruits.indexOf("mango")} is ${fruits[2]}<br>`)
