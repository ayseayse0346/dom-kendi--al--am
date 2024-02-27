// Dokument objesi.
// !window objesinin içinde tanımlanmış bir objedir.bu dokument objesi çok büyüktür. pek çok özellik ve method bulunduru..index sayfasındaki her şey document objesinin içindedir.document objesi de window içindedir.
let value = document.links.item(4)
console.log(value);

// ?SELECTORLER(SEÇİCİLER)-STYLE ÖZELLİKLERİ

// classname,ıd, tag name

//! 1-)ıd sini seçmek için const veya let ile bir değişkene tanımlayıp document.getbyıd("idsini yaz ") bu şekilde istediğimiz elementin ıdsini seçebiliriz.
const button = document.getElementById("todoAddButton")
console.log(button);
console.log(button.id);  // buıtton elementininb ıdsini öğrenebiliriz consolda
console.log(button.getAttribute("id")); //yine button elemntinin ıd sini verir. 

console.log(button.className); //class isimlerini öğrenmiş oluruz.burda aslında 4 tane class var bootstrap olarak .
console.log(button.getAttribute("class")); //clasını verir.

const classList = button.classList[3]
console.log(classList);  //buttonumun class listesini alırız. bunun bir dizi olduğunu görürüz. ve istediğimişz indextteki classları alabiliriz.

const classliste = button.classList
classliste.forEach(function(className){
    console.log(className);
})
// console.log(classliste);

// ? elemntin textini yakalmak için yani seçmek için  .ikisi aynı sonucu veirr ama farkları var 
// elemnt.textcontent  //* string olarak  o içerideki  metni alır .*/

let butonText = button.textContent
console.log(butonText);

// 2element.innerhtml //*ama burda  o stringin kenarlarında html elemnti varsa sen onu algıla diyoruz.*/

let butonText2 = button.innerHTML
console.log(butonText2);

// örnek 
 button.textContent = "<b> to do ekleyin </b>" // burda b ler bir string gibi yazıldı yani syfada öyle gözüktü 

 button.innerHTML="<b>to do ekleyin</b>" // ama burda b elementi eklemiş oluyoruz. html elemntlerini gösterir.


// !2-) classlarına göre seçmek için yine let veya const ile tanımla ve document.getelemntbyclassname("class isimlerini yaz")

const todolist = Array.from(document.getElementsByClassName("list-group-item "))  // foreach array olamdığı için yapamadık o yüzden başına array.from yazıp arraya çevirdik.

todolist.forEach(function(todo){
    console.log(todo.textContent);  //bu claasın kullanıldığı ye
})
console.log(todolist);

// ! 3-) etiketin ismiyle yakalamk için yine const veya let ile ata sonra documöent.getelemntbytagname("elelmnnt isimi")

const forms = Array.from(document.getElementsByTagName("form"))
forms.forEach(function(frm){
console.log(frm);
})
console.log(forms[1]);
console.log(forms[1].id);
console.log(forms[1].className);


const todolistem = document.getElementsByTagName("li")
console.log(todolistem);

// !! AYRI AYRI DEĞİL DE BÜTÜN ÖZELLİKLERİ SEÇEN SELECTORLER VAR 
// ? QUERYSELECTOR VE QUERYSELECTORALL

const todoul = document.querySelector(".list-group")
console.log(todoul);

// const todolistelerim = document.querySelectorAll(".list-group-item")  //eğer birden fazla bu class isminde elemnt varsa all kullanırız.hepsini seçmek istersek
// console.log(todolistelerim);

// ? mesela bu dört çocuktan 2. indexini yakalamk istersem
// const todolistelerim = document.querySelectorAll(".list-group-item")[2]
// console.log(todolistelerim);


// !not: child seçebiliriz. li:first-child , li:last-child(son çocuk), li:nth-child(2)ikinci çocuk
//  odd ve even var onlarda şu şekilde odd--> tek  even --> çiftleri seçer.
const todolistelerim = document.querySelectorAll("li:nth-child(2)")
console.log(todolistelerim);

// ÖRNEK : lilerimin içersindeki çiftleri seç ve bunu bir arraya çevir o çevirdiğim arrayı aldım foreach ile o çiftelrin üğzerinde döndüm.ve yakaladığım değişkenin stilinin arka plan rengini açık gri yap dedim

const todom = Array.from(document.querySelectorAll("li:nth-child(even)"));

todom.forEach(function(todo){
   todo.style.backgraundColor = "light-grey";
})
