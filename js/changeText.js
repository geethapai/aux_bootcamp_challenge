function changeText () {
  var latestItem = localStorage.getItem("itemValue2");
  var previousItem = localStorage.getItem("itemValue");

  console.log(latestItem + " " + previousItem);

  if (latestItem < previousItem) {
    $("#grade").append("Awesome! You tossed out less food than in previous weeks! You saved $10-12 by eating all the food you bought! And you prevented more uneaten food from going into landfills!");
  } 
  else if (latestItem === previousItem) {
    $("#grade").append("Not bad! You threw out the same number of items last week. Next week see if you can buy less food, or freeze leftovers.");
  }
  else {
    $("#grade").append("Uh oh...you threw out more items this week than last week. Maybe this was an atypical week. Next week, try planning your shopping around what you will cook.");
  }

}

window.addEventListener("load", changeText, false);