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



// Serrialize to form to json data $('form').serializeObject()
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

var $form = $("#" + 'addNewForm').parent();
var formData = $form.serializeObject();
$.ajax({
  type: "POST",
  url: "/api",
  data: formData,
  success: function() {
    alert("Yey!");
  },
  dataType: "application/json"
});
