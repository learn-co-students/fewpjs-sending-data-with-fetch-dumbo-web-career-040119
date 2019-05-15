function submitData(userName, userEmail){
  const userObject = {
    name: userName,
    email: userEmail
  }

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userObject)
  }

  return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log("object: ", object)
      document.body.innerHTML = object.id;
    })
    .catch(function(error) {
      console.log("error: ", error.message)
      document.body.innerHTML = error.message;
    })
}
