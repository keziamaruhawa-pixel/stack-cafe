$(function(){

  $("#registerForm").submit(function(e){
    e.preventDefault();

    $("#spinner").show();

    setTimeout (() => {

      let fullname = $("#fullname").val().trim();
      let email = $("#email").val().trim();
      let username = $("#username").val().trim();
      let password = $("#password").val().trim();

      if(!fullname || !email || !username || !password){
        alert("All fields must be filled!");
        $("#spinner").hide();
        return;
      }

      let users = JSON.parse(localStorage.getItem("users") || "[]");

      if(users.some(u => u.username === username)){
        alert("Username already exists!");
        $("#spinner").hide();
        return;
      }

      users.push({fullname,email,username,password});

      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created!");
      window.location.href = "login.html";

    }, 800);

  });

});
