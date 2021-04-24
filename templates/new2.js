function onClickedPredictdelay() {
    console.log("Predicted delay button clicked");
    var MONTH = document.getElementById("MONTH");
    var DAY = document.getElementById("DAY");
    var DAY_OF_WEEK = document.getElementById("DAY_OF_WEEK");
	var SCHEDULED_DEPARTURE = document.getElementById("SCHEDULED_DEPARTURE");
    var DEPARTURE_TIME = document.getElementById("DEPARTURE_TIME");
	var TAXI_OUT = document.getElementById("TAXI_OUT");
	var DISTANCE = document.getElementById("DISTANCE");
    var TAXI_IN = document.getElementById("TAXI_IN");
	var SCHEDULED_ARRIVAL = document.getElementById("SCHEDULED_ARRIVAL");
	var ARRIVAL_DELAY = document.getElementById("ARRIVAL_DELAY");
    var AIRLINE = document.getElementById("AIRLINE");
    var ESTDELAY = document.getElementById("Predict_delay");
    
	var url = "http://127.0.0.1:5000/"; 
  
    $.post(url, {
        MONTH: parseInt(MONTH.value),
        DAY: parseInt(DAY.value),
        DAY_OF_WEEK: parseInt(DAY_OF_WEEK.value), 
		SCHEDULED_DEPARTURE: parseFloat(SCHEDULED_DEPARTURE.value),
        DEPARTURE_TIME: parseFloat(DEPARTURE_TIME.value),
		TAXI_OUT: parseFloat(TAXI_OUT.value),
		DISTANCE: parseInt(DISTANCE.value),
        TAXI_IN: parseFloat(TAXI_IN.value),
		SCHEDULED_ARRIVAL: parseFloat(SCHEDULED_ARRIVAL.value),
		ARRIVAL_DELAY: parseFloat(ARRIVAL_DELAY.value),
        AIRLINE: AIRLINE.value
    },function(data, status) {
        console.log(data.estimated_delay);
        ESTDELAY.innerHTML = "<h2>" + data.estimated_delay.toString() + "mins</h2>";
        console.log(status);
    });
  }



window.onload = onPageLoad;

