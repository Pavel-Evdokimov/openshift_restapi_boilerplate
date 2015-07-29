var data = {
  "title": "title1",
  "year": "2015"
};
$.ajax({
  type: "POST",
  url: "/api",
  data: data,
  success: function() {
    alert("Yey!");
  },
  dataType: "application/json"
});
$.ajax({
  type: "GET",
  url: "/api",
  data: data,
  success: function() {
    alert("Get Yey!");
  },
  dataType: "application/json"
});
