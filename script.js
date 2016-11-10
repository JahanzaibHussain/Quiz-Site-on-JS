function data () {

var formdata,name,rollnum;

formdata = document.getElementById("form1");
name = formdata.elements["name"].value;
rollnum = formdata.elements["rollnum"].value;

if(name.value == "" || rollnum.value == ""){
    	alert("field cannot be blank");
    }
    else{
    	localStorage.setItem(name , rollnum);
    	alert("Your Data hass been Stored ");
    }
}


/*function login(){

	for(var i = 0; i < namearr.length ; i++){
		if (rollnum.value == localStorage.getItem(name.value)) {
			alert("Success fonud");
		}else {
			alert("Sign up First!");
		}
	}
}*/