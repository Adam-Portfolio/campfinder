// <!-- Example starter JavaScript for disabling form submissions if there are invalid fields (from https://getbootstrap.com/docs/5.3/forms/validation/)  -->
(function () {
  "use strict";

  // https://www.npmjs.com/package/bs-custom-file-input
  bsCustomFileInput.init();

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validated-form");

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
