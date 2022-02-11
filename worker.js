// Do all the checks before Submit

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkNumber(value){
   return value.match(/\d/g).length===10;
}

function checkNames(value) {
  return (value.match(/^[A-Za-z]+$/))

}




function submit(){
  var fname = document.getElementById("fname").value
  var mname = document.getElementById("mname").value
  var lname = document.getElementById("lname").value
  var gender = document.getElementById("gender").value
  var number = document.getElementById("pnumber").value
  var email = document.getElementById("email").value
  var address = document.getElementById("address").value
  var fullname = fname + " " + mname + " " + lname
  if(checkEmail(email) && checkNumber(number) && checkNames(fname) && checkNames(mname)
      && checkNames(lname)){
        //store with local storage for passing
        localStorage.setItem("fullname", fullname)
        localStorage.setItem("gender", gender)
        localStorage.setItem("number", number)
        localStorage.setItem("email" , email)
        localStorage.setItem("address" , address)

        location.href = "cv.html"

    }
    else{
      alert("Something went wrong in the Form")
    }
}




//Here just set the elements of the cv.html page for viewing
