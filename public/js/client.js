$(document).ready(function() {

  function setEventListenerToButton(buttonId) {
    $("#" + buttonId).click(function() {
      sendFormDataToServer(buttonId);
    });
  }

  function sendFormDataToServer(buttonId) {
    var $form = $("#" + buttonId).parent();
    var formData = $form.serialize();
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

  setEventListenerToButton("addNewForm");
});
