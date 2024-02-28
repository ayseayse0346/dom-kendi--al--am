// HTML ELEMENTLERİ ÜZERİNDE GEZİNME
const todo = document.querySelector(".list-group-item")
const todolist = document.querySelector(".list-group")
const card = document.querySelector(".card")
const todolastchild = document.querySelector(".list-group-item:nth-child(4)")
const row = document.querySelector(".row")
const container = document.querySelector(".container")
let value ;
// !ebeveynden çocuklara erişmek
value =todolist
value = todolist.children  //böyle çocuklarının hepsini dönebilir.
value =todolist.children[0]
value =todolist.children[todolist.children.length-1]//sonuncu çocuğu almak için
value=todolist.children[3].textContent ="değişti"

value =Array.from(todolist.children)


// !çocuktan anneye erişmek

value = todo;
value = todo.parentElement.parentElement //iki tane parent elennt bir üst anne ye erişir.

// ?adım adım da anneye erişebilirz.

let ul = todo.parentElement
let cartbody = ul.parentElement
let cardelement = cartbody.parentElement

//!kardeşler arasında gezime

value=todo
value =todo.nextElementSibling.nextElementSibling //kardşinin kardişi buşekilde erişebiliriz.

// bir önceki kardeşe nasıl erişiriz?
value =todolastchild
value=todolastchild.previousElementSibling
// ÖRENK
value =row.children[0].children[3].children[0]textContent="todo listesi başaldı"


// örnek:



