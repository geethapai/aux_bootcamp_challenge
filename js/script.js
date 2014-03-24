//start anonymous function

  //onclick store value to local storage and go to the next page
  $("body").on("click", "#mySaveButton", function(event) {

      event.preventDefault();

        var itemValue = $("#items").val();
        var itemValue2 = $("#items2").val();

        itemValue ? localStorage.setItem("itemValue", itemValue) : false;
        itemValue2 ? localStorage.setItem("itemValue2", itemValue2) : false;

      window.location.href=$("form").attr("action");

  }); 
  
  //comparing items values by week and changing screen text based on output

