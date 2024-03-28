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

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(i = 0 ; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write(`<br><br> 
// element at index ${fruits.indexOf("apple")} is ${fruits[0]}<br>
// element at index ${fruits.indexOf("banana")} is ${fruits[1]}<br>
// element at index ${fruits.indexOf("mango")} is ${fruits[2]}<br>
// element at index ${fruits.indexOf("orange")} is ${fruits[3]}<br>
// element at index ${fruits.indexOf("strawberry")} is ${fruits[4]}<br>`)
   
// var daysNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var date = new Date("15 sep, 1989");
// document.write(date.getTime())

// var eid = new Date("june 16, 2024")
// var now = new Date()
// var diff = eid.getTime() - now.getTime()
// var months = Math.floor(diff / 86400000 / 31)
// var days = Math.floor(diff / 86400000 )
// var hours = Math.floor(diff  / 1000 / 60 / 60)
// document.write(`months left ${months} till Eid-ul-Adha<br>`)
// document.write(`days left ${days} till Eid-ul-Adha<br>`)
// document.write(`hours left ${hours} till Eid-ul-Adha<br>`)

var palindrome = prompt("enter to search palindrome")
var check = false
var user = prompt("enter again a palindrome word")
for(i = palindrome.length; i > 0; i--){
    for(j = 0; j < user.length;j++){
        if(palindrome[i] === user[j]){
            check = true
            document.write(`yes palindrome`)
break
        }
        break
    }
}
if(check === false){
    document.write(`no this is not palindrome`)
}