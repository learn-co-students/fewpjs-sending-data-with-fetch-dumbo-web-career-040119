// Add your code here
function submitData(name,email){
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
      };
       
      return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          //let body = document.querySelector('body');
          //let p = document.createElement('p');
          //p.innerText = data.id;
          document.body.innerHTML = data.id;
        })
        .catch(function(error) {
          //alert("Bad things! Ragnarők!");
          document.body.innerHTML = error.message;
        });
}

// document.addEventListener('DOMContentLoaded',function(){
//     submitData("rei",'rei@rei');
// })
