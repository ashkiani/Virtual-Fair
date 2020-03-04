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
    console.log(data);
    //render job results
    // loadJobs(data);
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

var mainDiv = $("#mainDiv");
    mainDiv.html("");

function loadJobs() {
  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      var divOne = $("<div>").attr("class", "card job-card");
      mainDiv.append(divOne);
      var jobTitle = $("<h5>").attr("class", "card-header").css({"border-bottom", "1px solid #fff"}).text(data[i].jobTitle);
      divOne.append(jobTitle);
      var divTwo = $("<div>").attr("class","card-body");
      mainDiv.append(divTwo);
      var location = $("<h5>").("class","card-title").text(data[1].location);
      divTwo.append(location);
      var hr = $("<hr>").css("background-colo","#DC4749");
      divTwo.append("hr");

      

    }
  }
}
