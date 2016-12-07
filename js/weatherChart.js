function getFahrenheits(result){
  // Your code goes here
  hourF = result.hourly_forecast
  return hourF.map(function(element){
    return element.temp.english
  });

}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hour){
    return hour.FCTTIME.hour;
  });
}

function generateDataSet(labels, inputData) {
  // Your code goes here
  var data = {
      labels: labels,
      datasets: [
          {
            label: "Hourly Weather for New York",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: inputData
          }
      ]
  };

  return data
};

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  // $.ajax(endpoint).success(success)

      $.ajax({
        url: endpoint,
        dataType: "jsonp",
        success: success
      // success: function(data) {
      //   // debugger in success function gives us access to data
      //   // only when its successful will the data be passed
      //   // to the function, so access to data given?then
      //   success();
      // }
    });

  };
