// style özelliğini anlamak
// atadık selectörlerle
const todo = document.querySelectorAll(".list-group-item")[0]
const todolist =document.querySelector(".list-group")
const clearbtn =document.querySelector("#todoClearButton")
// still özelliklerini veriyoruz. bu özelliklere w3s den bakablilirsin

todo.style.color ="white"

todo.style.backgroundColor = "purple"
todo.style.fontWeight ="900"
todo.style.paddingTop ="20px"
todo.style.paddingLeft="70px"  


todolist.style.marginTop ="60px "
clearbtn.style.backgroundColor="red"
clearbtn.style.fontWeight="300"
clearbtn.style.borderRadius ="50px"