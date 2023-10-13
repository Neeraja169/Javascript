let surveyForm = document.getElementById('surveyForm');
  let popup = document.getElementById('popup');
    surveyForm.addEventListener('submit', function (event) {
      event.preventDefault();

        //retrieve from values
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let dob = document.getElementById('dob').value;
        let country = document.getElementById('country').value;
        let gender = [...document.querySelectorAll('input[type="checkbox"]')]
          .filter(input => input.checked)
          .map(input => input.labels[0].textContent)
          .join(', ');
          const profession = document.getElementById('profession').value;
          const email = document.getElementById('email').value;
          const mobile = document.getElementById('mobile').value;

          // Display values in the popup
            document.getElementById('popupFirstName').textContent = firstName;
            document.getElementById('popupLastName').textContent = lastName;
            document.getElementById('popupDob').textContent = dob;
            document.getElementById('popupCountry').textContent = country;
            document.getElementById('popupGender').textContent = gender;
            document.getElementById('popupProfession').textContent = profession;
            document.getElementById('popupEmail').textContent = email;
            document.getElementById('popupMobile').textContent = mobile;

          // Show the popup
            popup.style.display = 'block';
        });

        surveyForm.addEventListener('reset', function () {
            // Reset the form and hide the popup
            surveyForm.reset();
            popup.style.display = 'none';
        });