function han() {
    let far = document.getElementById("far").value
    let af = document.getElementById("af").value

    if(far == "Aisyah" && af == "kelaperan"){
        location.href= "berhasilLogIn.html";
    }else
    alert("wrong password");
}