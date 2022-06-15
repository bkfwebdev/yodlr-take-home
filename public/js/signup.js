/* signup js code */
const axios = require('axios');
const myForm = document.getElementById("registrationForm");
myForm.addEventListener("submit",function(e){
e.preventDefault();
let user_email = document.getElementById("useremail").value;
axios
  .post('http://localhost:3000/users', {
    email: user_email,
    firstName: first_name,
    lastName: last_name
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
  alert('Registration Complete');
});
