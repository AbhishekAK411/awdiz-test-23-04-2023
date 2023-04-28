window.onload = () =>{
    
    var storage = JSON.parse(localStorage.getItem("flipkart_currrent_user"));

    if(!!storage){
        var switch_div = document.getElementById("switch_div");

        var name = `<button>${storage.userName}</button>`;
        switch_div.innerHTML = name;
    } else {
        alert("current user is absent");
    }

}

function logout(event){
    event.preventDefault();

    var storage = JSON.parse(localStorage.getItem("flipkart_currrent_user"));
    if(storage){
        localStorage.removeItem("flipkart_current_user");
        window.location.href = `./login.html`;
        alert("You have logged off successfully");
    } else {
        alert("You are not logged in");
    }
}