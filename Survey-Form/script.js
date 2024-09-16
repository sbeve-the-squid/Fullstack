//chat gpt code I modified for my values
 document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById('dropdown');
  var form = document.getElementById('survey-form');

  function changeFormColor() {
    var selectedOption = dropdown.value;

    form.classList.remove('honeycomb', 'ketchup','cheetos', 'dillpickle');

    if (selectedOption) {
      form.classList.add(selectedOption);
    }
  }

  dropdown.addEventListener('change', changeFormColor);

  changeFormColor();
});     