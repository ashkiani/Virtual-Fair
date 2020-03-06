$.ajax("/api/jobs", {
    type: "GET"
  }).then(function(data) {
    console.log(data);
    //render job results
    loadJobs(data);
  });// AJAX Call


function loadJobs(data) {
  var mainDiv = $("#admin-container").html("");

  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      var divOne = $("<div>").attr("class", "row");
      mainDiv.append(divdOne);
      var CardOne = $("<div>").attr("id", "admin-card");
      adminJumbotron.append(CardOne);
      var JobAdmin = $("<h5>")
        .attr("id", "adminJob-title")
        .css({ "border-bottom": "1px solid #515151;" })
        .text(data[i].title);
      CardOne.append(JobAdmin);
      var CardTwo = $("<div>").attr("class", "card-body");
      CardOne.append(CardTwo);
      var adminLocation = $("<h5>")
        .attr("id", "admin-location")
        .text(data[i].location);
      CardTwo.append(location);
      var description = $("<P>")
        .attr("id", "admin-jobDescription")
        .text(data[i].description);
      CardTwo.append(p);
      var schedule = $("button")
        .attr("type", "button")
        .attr("id", "scheduleBtn")
        .attr("data-toggle", "tooltip")
        .attr("title", "Schedule");
      CardTwo.append(schedule);
      var qualified = $("button")
        .attr("type", "button")
        .attr("id", "qualifiedBtn")
        .attr("data-toggle", "tooltip")
        .attr("title", "Not Qualified");
      CardTwo.append(qualified);
      var Interviewed = $("button")
        .attr("type", "button")
        .attr("id", "InterviewedBtn")
        .attr("data-toggle", "tooltip")
        .attr("title", "Interviewed");
      CardTwo.append(Interviewed);
      var offer = $("button")
        .attr("type", "button")
        .attr("id", "offerBtn")
        .attr("data-toggle", "tooltip")
        .attr("title", "Offer the Job");
      CardTwo.append(offer);
    }
  }
}
