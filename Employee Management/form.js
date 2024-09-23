const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emplyeeId = document.getElementById("emplyeeId");
const address = document.getElementById("address");
const department = document.getElementById("department")
contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    let isValid = true;
    
    // Name Validation
    if(!firstName.value.trim()){
        firstName.classList.add("error");
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    }
    else{
        firstName.classList.remove("error");
        firstName.classList.add("valid");

        document.getElementById("firstNameError").style.display = "none";
    }

    if(!lastName.value.trim()){
        lastName.classList.add("error");
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    }
    else{
        lastName.classList.remove("error");
        lastName.classList.add("valid");

        document.getElementById("lastNameError").style.display = "none";
    }

    if(!emplyeeId.value.trim()){
        emplyeeId.classList.add("error");
        document.getElementById("emplyeeIdError").style.display = "block";
        isValid = false;
    }
    else{
        emplyeeId.classList.remove("error");
        emplyeeId.classList.add("valid");
        document.getElementById("emplyeeIdError").style.display = "none";
    }

    if(!address.value.trim()){
        address.classList.add("error");
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    }
    else{
        address.classList.remove("error");
        address.classList.add("valid");
        document.getElementById("addressError").style.display = "none";
    }

    if(!department.value.trim()){
        department.classList.add("error");
        document.getElementById("departmentError").style.display = "block";
        isValid = false;
    }
    else{
        department.classList.remove("error");
        department.classList.add("valid");
        document.getElementById("departmentError").style.display = "none";
    }
    
    if(isValid){
        this.submit();
    }
})