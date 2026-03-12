$(function(){

  $("#loginForm").submit(function(e){
    e.preventDefault();
  
    $("#spinner").show();

    setTimeout(() => {

      let id = $("#loginId").val().trim();
      let pw = $("#loginPassword").val().trim();

      let users = JSON.parse(localStorage.getItem("users") || "[]");
      let found = users.find(u => u.username === id || u.email === id);

      if(!found){
        alert("User not found!");
        $("#spinner").hide();
        return;
      }

      if(found.password !== pw){
        alert("Wrong password!");
        $("#spinner").hide();
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", found.username);

      alert("Login successful!");
      window.location.href = "home.html";

    }, 800);

  });

});
