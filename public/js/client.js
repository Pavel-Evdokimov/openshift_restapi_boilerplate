$(document).ready(function() {
  // add function to handle html form data to json object
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

  function setEventListenerToButton(buttonId) {
    $("#" + buttonId).click(function() {
      sendFormDataToServer(buttonId);
    });
  }

  function sendFormDataToServer(buttonId) {
    var $form = $("#" + buttonId).parent();
    var formData = $form.serializeObject();
    if (formData) {
      $.ajax({
        type: "POST",
        url: $form.attr("action"),
        data: formData,
        success: function() {
          alert("Yey!");
        },
        dataType: "application/json"
      });
    }
  }

  // TODO: getDataFromServer - get json object

  setEventListenerToButton("addNewForm");
});
