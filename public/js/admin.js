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
      mainDiv.append(divOne);
      var divTwo = $("<div>")
        .attr("id", "admin-col")
        .attr("class", "col-sm");
      divOne.append(divTwo);
      var divThree = $("<div>").attr("id", "admin-card");
      divTwo.append(divThree);
      var divFour = $("<div>")
        .attr("id", "adminJob-title")
        .attr("class", "card-header")
        .text(data[i].title);
      divThree.append(divFour);
      var divFive = $("<div>").attr("class", "card-body");
      divThree.append(divFive);
      var h5 = $("<h5>")
        .attr("id", "admin-skill")
        .attr("class", "card-title")
        .text(data[i].skills);
      divFive.append(h5);
      var p = $("<p>")
        .attr("id", "admin-jobDescription")
        .attr("class", "card-text")
        .text(data[i].description);
      divFive.append(p);
      var divSix = $("<div>").attr("class", "card-footer text-muted");
      divThree.append(divSix);
      var schedule = $("<button>")
        .attr("type", "button")
        .attr("class", "btn btn-secondary")
        .attr("id", "scheduleBtn")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "bottom")
        .attr("title", "Schedule")
        .text("Schedule");
      divThree.append(schedule);
      var notQualified = $("<button>")
        .attr("type", "button")
        .attr("class", "btn btn-secondary")
        .attr("id", "qualifiedBtn")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "bottom")
        .attr("title", "Not Qualified")
        .text("Not Qualified");
      divThree.append(notQualified);
      var interviewed = $("<button>")
        .attr("type", "button")
        .attr("class", "btn btn-secondary")
        .attr("id", "InterviewedBtn")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "bottom")
        .attr("title", "Interviewed")
        .text("Interviewed");
      divThree.append(interviewed);
      var offer = $("<button>")
        .attr("type", "button")
        .attr("class", "btn btn-secondary")
        .attr("id", "InterviewedBtn")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "bottom")
        .attr("title", "Offer the Job")
        .text("Offer the Job");
      divThree.append(offer);
      var divSeven = $("<div>")
        .attr("id", "admin-col")
        .attr("class", "col-sm");
      divOne.append(divSeven);
      var divEight = $("<div>")
        .attr("id", "admin-txt")
        .attr("class", "form-group");
      divSeven.append(divEight);
      var textArea = $("<textarea>")
        .attr("id", "exampleFormControlTextarea1")
        .attr("class", "form-control")
        .attr("placeholder", "Save Your Notes")
        .attr("rows", "8");
      divEight.append(textArea);
    }
  }
}
