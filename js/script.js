$(document).ready(function(){


  // CALL TO CREATE
  $(".btn-list").click(function(){

    var element = $("#input-list").val();
    // invio al server l'elemtento inserito in input
    $.ajax({
      "url": "http://157.230.17.132:3026/todos",
      "method": "POST",
      "data": {
        "text": element
      },
      "success": function (data) {
        addElement(data);
      },
      "error": function (error) {
        alert("E' avvenuto un errore. ");
      }
    });
    $("#input-list").val("");
  });

  // CALL TO READ

  // CALL TO UPDATE (PUT)

  // CALL TO DELETE

  // FUNCTION ADD. ELEMENT with Handlebars
  function addElement(data){
    var source = $("#elm-template").html();
    var template = Handlebars.compile(source);

    var context = {
      "id" : data.id,
      "text" : data.text
    }

    var html = template(context);
    $("#list").append(html);
  }

});
