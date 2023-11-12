function logar(){


    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        location.href ="https://tela-menu-admin.netlify.app/"
        alert("Bem vindo ADMIN!")
    } else if (login == "captador" && senha == "captador"){
        location.href="https://tela-menu-captador.netlify.app/"
        alert("Bem vindo CAPTADOR!")
    }
    else{
        alert("Usuario ou senha incorretos")
    }
}