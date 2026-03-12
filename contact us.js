$(function(){

  $("#cTopic").change(function(){
    alert("Topic selected: " + $(this).val());
  });

  $("#contactForm").submit(function(e){
    e.preventDefault();

    let name = $("#cName").val().trim();
    let email = $("#cEmail").val().trim();
    let topic = $("#cTopic").val();
    let msg = $("#cMessage").val().trim();

    if(!name || !email || !msg){
      alert("Please fill all fields!");
      return;
    }

    let list = JSON.parse(localStorage.getItem("contacts") || "[]");
    list.push({name,email,topic,msg});

    localStorage.setItem("contacts", JSON.stringify(list));

    alert("Message Sent!");
    $("#contactForm")[0].reset();
  });

});
