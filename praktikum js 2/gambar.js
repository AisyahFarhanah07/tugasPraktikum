function hewan(){
    let name = document.getElementById("name")
    let gambar = document.getElementById("gambar")

    if(name.value == "gajah"){
        return gambar.src = "foto/gajah.jpg"
    }else if(name.value == "jerapah"){
        return gambar.src = "foto/Jerapah.jpg"
    }else if(name.value == "kucing"){
        return gambar.src = "foto/kucing.jpg"
    }else if(name.value == "kuda"){
        return gambar.src = "foto/kuda.jpg"
    }else if(name.value == "kura-kura"){
        return gambar.src = "foto/KURA-KURA.jpg"
    }else if(name.value == "sapi"){
        return gambar.src = "foto/sapi.jpg"
    }
}