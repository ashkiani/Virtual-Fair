// On-click AJAX call for Keyword search
$("#search-button").on("click", function() {
  // save the character they typed into the character-search input
  var searchJobs = $("#jobSearch")
    .val()
    .trim();

  console.log(searchJobs);

  // AJAX - search by keyword
  $.ajax("/api/jobs", {
    type: "GET"
  }).then(function(data) {
    console.log(data.length);
    //render job results
    loadJobs(data);
  });
});

// // On-click AJAX call for Locations search
// $("#search-button").on("click", function() {
//   // save the character they typed into the character-search input
//   var searchJobs = $("#jobSearch")
//     .val()
//     .trim();

//   console.log(searchJobs);

//   // AJAX - search by keyword
//   $.ajax("/api/jobs", {
//     type: "GET"
//   }).then(function(data) {
//     console.log(data);
//     // code to display compare searchJobs to Database data
//     // Then display on page
//   });
// });

// // On-click AJAX call for Skills search
// $("#search-button").on("click", function() {
//   // save the character they typed into the character-search input
//   var searchJobs = $("#jobSearch")
//     .val()
//     .trim();

//   console.log(searchJobs);

//   // AJAX - search by keyword
//   $.ajax("/api/jobs", {
//     type: "GET"
//   }).then(function(data) {
//     console.log(data);
//     // code to display compare searchJobs to Database data
//     // Then display on page
//   });
// });

function loadJobs(data) {
  var mainDiv = $("#mainDiv").html("");

  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      var divOne = $("<div>").attr("class", "card job-card");
      mainDiv.append(divOne);
      var jobTitle = $("<h5>")
        .attr("class", "card-header")
        .css({ "border-bottom": "1px solid #fff" })
        .text(data[i].Title);
      divOne.append(jobTitle);
      var divTwo = $("<div>").attr("class", "card-body");
      divOne.append(divTwo);
      var location = $("<h5>")
        .attr("class", "card-title")
        .text(data[i].Location);
      divTwo.append(location);
      var hr = $("<hr>").css("background-colo", "#DC4749");
      divTwo.append(hr);
      var p = $("<p>")
        .attr("class", "card-text")
        .text(data[i].Description);
      divTwo.append(p);
      var apply = $("<button>")
        .attr("type", "button")
        .attr("id", "applyJob")
        .attr("class", "btn btn-secondary")
        .attr("data-toggle", "tooltip")
        .attr("title", "Apply");
      var i = $("<i>").attr("class", "far fa-check-square fa-2x");
      apply.append(i);
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
}
