$(function(){

  $("#forgotForm").submit(function(e){
    e.preventDefault();

    let email = $("#fpEmail").val().trim();
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    let idx = users.findIndex(u => u.email === email);

    if(idx === -1){
      alert("Email not found!");
      return;
    }

    $("#resetArea").show().data("index", idx);
  });

  $("#resetBtn").click(function(){
    let idx = $("#resetArea").data("index");
    let newPass = $("#newPwd").val().trim();

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    users[idx].password = newPass;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated!");
    window.location.href = "login.html";
  });

});
