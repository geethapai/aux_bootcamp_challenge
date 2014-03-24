(function(){
  var getChartData = function(){
      //retrieve food item data
      var week1 = localStorage.getItem("itemValue"),
          week2 = localStorage.getItem("itemValue2");

      //if we have something on local storage place that

      if(week1) {
        $("#foodweek1").append(week1)
      }

      if(week2) {
        $("#foodweek2").append(week2)
      }
    }

    //food items data for progress page table from local storage
  window.addEventListener("load", getChartData);
})();