$(document).ready(function() {
  console.log("ready!");
  // On-click AJAX call for Keyword search
  $("#search-button").on("click", function() {
    event.preventDefault();
    let locations = [
      parseInt(
        $("#ddLocation")
          .children(":selected")
          .attr("id")
      )
    ];
    let skills = [
      parseInt(
        $("#ddSkills")
          .children(":selected")
          .attr("id")
      )
    ];
    // Make a new search
    var newSearch = {
      locations: locations,
      skills: skills,
      keywords: $("#jobSearch")
        .val()
        .trim()
    };
    // AJAX - search job criteria
    $.ajax("/api/jobs", {
      data: newSearch,
      type: "POST"
    }).then(function(data) {
      console.log(data);
      //render job results
      var mainDiv = $("#mainDiv").html("");

      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          var divOne = $("<div>").attr("class", "card job-card");
          mainDiv.append(divOne);
          var jobTitle = $("<h5>")
            .attr("class", "card-header")
            .css({ "border-bottom": "1px solid #fff" })
            .text(data[i].title);
          divOne.append(jobTitle);
          var divTwo = $("<div>").attr("class", "card-body");
          divOne.append(divTwo);
          var location = $("<h5>")
            .attr("class", "card-title")
            .text(data[i].location);
          divTwo.append(location);
          var hr = $("<hr>").css("background-colo", "#DC4749");
          divTwo.append(hr);
          var p = $("<p>")
            .attr("class", "card-text")
            .text(data[i].description);
          divTwo.append(p);
          var apply = $("<button>")
            .attr("type", "button")
            .attr("class", "btn btn-secondary")
            .attr("data-toggle", "tooltip")
            .attr("title", "Apply");
          var check = $("<i>").attr("class", "far fa-check-square fa-2x");
          apply.append(check);
          divTwo.append(apply);
          var save = $("<button>")
            .attr("type", "button")
            .attr("id", "applyJob")
            .attr("class", "btn btn-secondary")
            .attr("data-toggle", "tooltip")
            .attr("title", "Save");
          var i2 = $("<i>").attr("class", "far fa-star fa-2x");
          save.append(i2);
          divTwo.append(save);
        }
      }
    });
  });

  // AJAX - get all jobs from database
  $.ajax("/api/jobs", {
    type: "GET"
  }).then(function(data) {
    console.log(data);
    //render job results
    var mainDiv = $("#mainDiv").html("");

    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        var divOne = $("<div>").attr("class", "card job-card");
        mainDiv.append(divOne);
        var jobTitle = $("<h5>")
          .attr("class", "card-header")
          .css({ "border-bottom": "1px solid #fff" })
          .text(data[i].title);
        divOne.append(jobTitle);
        var divTwo = $("<div>").attr("class", "card-body");
        divOne.append(divTwo);
        var location = $("<h5>")
          .attr("class", "card-title")
          .text(data[i].location);
        divTwo.append(location);
        var hr = $("<hr>").css("background-colo", "#DC4749");
        divTwo.append(hr);
        var p = $("<p>")
          .attr("class", "card-text")
          .text(data[i].description);
        divTwo.append(p);
        var apply = $("<button>")
          .attr("type", "button")
          .attr("class", "btn btn-secondary")
          .attr("data-toggle", "tooltip")
          .attr("title", "Apply");
        var check = $("<i>").attr("class", "far fa-check-square fa-2x");
        apply.append(check);
        divTwo.append(apply);
        var save = $("<button>")
          .attr("type", "button")
          .attr("id", "applyJob")
          .attr("class", "btn btn-secondary")
          .attr("data-toggle", "tooltip")
          .attr("title", "Save");
        var i2 = $("<i>").attr("class", "far fa-star fa-2x");
        save.append(i2);
        divTwo.append(save);
      }
    }
  });
});
