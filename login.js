function login(event){
    event.preventDefault();

    // alert("Function Called");

    var f_loginEmail = document.getElementById("flipkart_login_email").value;
    var f_loginPassword = document.getElementById("flipkart_login_password").value;

    if(f_loginEmail && f_loginPassword){
        var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_users"));
        var flagForEmail = false;
        var flipkart_currentUser;

        for(i=0;i<flipkart_storage.length;i++){
            if(flipkart_storage[i].userEmail == f_loginEmail && flipkart_storage[i].userPassword == f_loginPassword){
                flagForEmail = true;
                flipkart_currentUser = flipkart_storage[i];
            }
        }

        if(flagForEmail){
            localStorage.setItem("flipkart_currrent_user", JSON.stringify(flipkart_currentUser));
            window.location.href = `./index.html`;
        } else {
            alert("Check your credentials");
        }
    } else {
        alert("All fields are mandatory");
    }
}