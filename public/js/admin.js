const axios = require('axios');

axios
  .get('http://localhost:3000/users')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });

const myView = document.getElementById("content");
const userList = document.createElement("ul");
for(data in res.data){
    let myUser = document.createElement("li")
    myUser.innerHTML = `id:${data.id} email:${data.email} first name:${data.firstName} last name:${data.lastName} state:${data.state}`
    userList.append(myUser);
}

myView.append(userList);