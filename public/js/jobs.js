// On-click Call for Location, Skills and Keyword search
$("#search-button").on("click", function() {
  // save the character they typed into the character-search input
  var searchJobs = $("#jobSearch")
    .val()
    .trim();

  console.log(searchJobs);

  // AJAX - search by keyword
  $.ajax("/api/jobs", {
    type: "POST"
  }).then(function(data) {
    console.log(data);
    // code to display compare searchJobs to Database data
    // Then display on page
  });
});
