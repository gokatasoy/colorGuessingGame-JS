//html i yaz
//css ekle
// JS başla => {
//     1-) Butonlara id olarak vermek için 3 elemanlı bi dizi oluştur.
//     2-) R, G ve B değişkenleri içine random fonksiyonu ile oluşturuğun değeri ata
//     3-) Bu değer senin tahmin edilecek değerin old. için bu değeri colorName etiketine ver.
//     4-) 3 butondan birine ulaşabilmek için random fonksiyonu ile 0, 1 ve 2 arasından bi değer üret. O random değerden renk butonuna ulaşmış olacaksın.
//     5-) Bulduğun indexin styleine ulaş ve r, g ve b değişkenlerini onun bg sine ver.
//     6-) Splice metodunu kullanarak array dizisinden indexli elemanı at ve 2indexli yeni dizi elde et.
//     7-) r1, r2 gibi geriye kalan 2 butona da random fonksiyonu yardımıyla r,g,b değerlerini ata.
//     8-) Guess adlı bi fonksiyon yaz ve bu fonksiyonda if else blokları aç.
//     9-) if (aktif elementin id'si indexe eşitse right) else(wrong)
//     10-) butonlara ulaş ve removeAttr aracılılığıyla click eventlerini kaldır. 
//     11-) replay butonuna reload fonksiyonunu ata.
//     12-) Bitir.
// }

let array = [0, 1, 2]

let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)

document.getElementById("color_code").innerHTML = "( " + r + " , " + g + " ," + b + " )"

let index = Math.floor((Math.random()) * 3)

document.getElementById(index).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

array.splice(index, 1)

let r1 = Math.floor(Math.random() * 256)
let g1 = Math.floor(Math.random() * 256)
let b1 = Math.floor(Math.random() * 256)
document.getElementById(array[0]).style.backgroundColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

let r2 = Math.floor(Math.random() * 256)
let g2 = Math.floor(Math.random() * 256)
let b2 = Math.random(Math.random() * 256)
document.getElementById(array[1]).style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

function guess() {
    if (document.activeElement.id == index){
        document.getElementById("color_code").innerHTML=("CORRECT !!")
        document.getElementById("color_code").style.color = "green"
    }
    else{
        document.getElementById("color_code").innerHTML=("WRONG !!")
        document.getElementById("color_code").style.color = "red"
    }

    document.getElementsByClassName("btn")[0].removeAttribute("onclick")
    document.getElementsByClassName("btn")[1].removeAttribute("onclick")
    document.getElementsByClassName("btn")[2].removeAttribute("onclick")
}

function replay(){
    window.location.reload();
}