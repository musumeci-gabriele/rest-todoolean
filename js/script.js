$(document).ready(function(){


  // CALL TO CREATE
  $(".btn-list").click(function(){

    var element = $("#input-list").val();
    if (element != "") {
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
      // clear input
      $("#input-list").val("");
    } else {
      alert("Non hai inserito nulla.")
    }

  });

  // CALL TO READ

  // CALL TO UPDATE (PUT)

  // CALL TO DELETE
  $("#elm-template .delete").click(function(){
    alert("stai cancellando l'elemento");
    // var elmList = $(this).find("#list");
    // var id = elmList.attr("id");
    //
    // // richiamo dal server l'elemtento inserito in lista
    // $.ajax({
    //   "url": "http://157.230.17.132:3026/todos/"+id,
    //   "method": "DELETE",
    //   "success": function (data) {
    //     elmList.remove();
    //   },
    //   "error": function (error) {
    //     alert("E' avvenuto un errore. ");
    //   }
    // });

  });

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
