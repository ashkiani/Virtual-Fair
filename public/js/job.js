$("#search-button").on("click", function(event) {
event.preventDefault();
 console.log("working on");

 $.ajax("/api/jobs", {
    type: "GET"
  })
//   .then(function(data) {
//     // console.log(data);

//     // location.reload();
//   });
});

