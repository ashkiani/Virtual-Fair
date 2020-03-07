// AJAX GET call to pull all jobs applied to
$.ajax("/api/apply", {
  type: "POST"
}).then(function(data) {
  console.log(data);
  //render job results
  loadJobs(data);
});

// function to render html
function loadJobs(data) {
  var mainDiv = $(".mainDiv").html("");

  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      var divOne = $("<div>").attr("class", "col-sm");
      mainDiv.append(divOne);
      var divTwo = $("<div>")
        .attr("class", "card")
        .attr("id", "appl-card");
      divOne.append(divTwo);
      var divThree = $("<div>").attr("class", "card-body");
      divTwo.append(divThree);
      var h5 = $("<h5>")
        .attr("class", "card-title")
        .attr("id", "jobOutput")
        .text(data[i].note);
      divThree.append(h5);
      var hr = $("<hr>").attr("id", "hr");
      divThree.append(hr);
      var h6 = $("<h6>")
        .attr("id", "location-output")
        .text(data[i].jobTitle);
      divThree.append(h6);
      var hr2 = $("<hr>").attr("id", "hr");
      divThree.append(hr2);
      var p = $("<p>")
        .attr("class", "card-text")
        .attr("id", "desc-output")
        .text(data[i].status);
      divThree.append(p);
      var remove = $("<button>")
        .attr("type", "button")
        .attr("class", "btn btn-secondary")
        .attr("id", "remove-application")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "bottom")
        .attr("title", "Remove");
      var check = $("<i>").attr("class", "far fa-trash-alt");
      remove.append(check);
      divThree.append(remove);
    }
  }
}
