email.onchange = (event) => {
    validations(event.target,/^[A-Za-z.0-9]{2,}@[a-z]{2,}\.[a-z]{2,}$/,'Invalid email');
};

npass.onchange = (event) => {
    validations(event.target,/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&^*])[A-Za-z0-9!@#$%^&*]{6,16}/,'Password should contain Alphabets and a lowercase and numbers');
};

cpass.onchange = (event) => {
    var password = document.getElementById('npass');
    if(password.value == event.target.value)
        event.target.nextElementSibling.textContent = '';
    else
    {
        displayMessage(event.target,'Both passwords must be same');
    }
}

fname.onchange = (event) => {
    validations(event.target,/^[A-za-z]{5,}$/,'Invalid name');
}

dob.onchange = (event) => {
    var date = new Date(event.target.value);
    var today  = new Date();
    var age = today.getFullYear() - date.getFullYear(); 
    if(age>18 && age<60)
        event.target.nextElementSibling.textContent = '';
    else
    {
        displayMessage(event.target,'Invalid Date of Birth');
    }
};
state.onchange=(event)=>{
    var state=document.getElementById('state');
    if(state.selectedIndex=="0"){
        displayMessage(event.target,'Select state');
    }
else{
  
    event.target.nextElementSibling.textContent='';
}
}
mobile.onchange = (event) => {
    validations(event.target,/^[6789][0-9]{9}$/,'Invalid mobile');
};
education.onchange=(event)=>{
    var state=document.getElementById('pg');
    if(state.selectedIndex=="0"){
        displayMessage(event.target,'Select education');
    }
else{
  
    event.target.nextElementSibling.textContent='';
}
}
practice.onchange=(event)=>{
    var practice=document.getElementById('practice');
    if(state.selectedIndex=="0"){
        displayMessage(event.target,'Select Practice');
    }
else{
  
    event.target.nextElementSibling.textContent='';
}
}



function validations(element,pattern,message)
{
    if(pattern.test(element.value))
        element.nextElementSibling.textContent = '';
    else
    {
        displayMessage(element,message);
    }
}

function displayMessage(element,message)
{
    element.nextElementSibling.textContent = message;
    element.value='';
}

next1.onclick = () => {
    var inputFields = document.getElementsByClassName('input');
    var flag = true;
    for(index=0;index<inputFields.length;index++)
    {
        if(inputFields[index].value=='')
        {
            flag=false;
            inputFields[index].nextElementSibling.textContent = 'Please fill this field';
        }
    }
    if(flag)
    {
        var form1=document.getElementById("form1");
        var form2=document.getElementById("form2");
        form1.style.left="-450px";
        form2.style.left="50px";
    }
}
back1.onclick=function(){
    form1.style.left="40px";
    form2.style.left="450px";
}

next2.onclick = () => {
    var inputFields = document.getElementsByClassName('input2');
    var flag = true;
    var isChecked = false;
    for(index=0;index<inputFields.length;index++)
    {
        var gender = document.getElementsByName('gender');
        var box = gender[0];
        for(i=0;i<gender.length;i++)
        {
            if(gender[i].checked)
                isChecked=true;
            box = box.nextElementSibling
        }
        if(!isChecked)
           box.textContent = 'Please fill in this field';
        else
            box.textContent = '';
        if(inputFields[index].value=='' || inputFields[index].selectedIndex == '0')
        {
            flag=false;
            inputFields[index].nextElementSibling.textContent = 'Please fill this field';
        }
        flag = flag && isChecked;
    }
    if(flag)
    {
        var form2=document.getElementById("form2");
        var form3=document.getElementById("form3");
        form2.style.left="-450px";
        form3.style.left="50px";
    }
}
back2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="450px";

}
next3.onclick = () => {
        var form3=document.getElementById("form3");
        var form4=document.getElementById("form4");
        form3.style.left="-450px";
        form4.style.left="50px";
}
back3.onclick=function(){
    form3.style.left="40px";
    form4.style.left="450px";

}
next4.onclick = () => {
    var inputFields = document.getElementsByClassName('input4');
    var flag = true;
    for(index=0;index<inputFields.length;index++)
    {
        if(inputFields[index].value=='' || inputFields[index].selectedIndex == '0')
        {
            flag=false;
            inputFields[index].nextElementSibling.textContent = 'Please fill this field';
        }else{
            inputFields[index].nextElementSibling.textContent = '';
        }
    }
    if(flag)
    {
        var form4=document.getElementById("form4");
        var form5=document.getElementById("form5");
        form4.style.left="-450px";
        form5.style.left="50px";
    }
}
back4.onclick=function(){
    form4.style.left="40px";
    form5.style.left="450px";``
}

    btn.onclick = () => {
        var flag = true;
        if(document.getElementById('practice').selectedIndex=='0')
        {
            document.getElementById('practice').nextElementSibling.textContent = 'Please fill in this field';
            flag=false;
           
        }
        else
        {
            document.getElementById('practice').nextElementSibling.textContent = '';
        }
        if(!document.getElementById('check').checked)
        {
            document.getElementById('check').nextElementSibling.textContent = 'Please fill in this field';
            flag=false;
        }
        else
        {
            document.getElementById('practice').nextElementSibling.textContent = '';
        }
        if(flag)
            form5.submit();
        else    
        alert('Please fill Terms and conditions');
    }

