var formdata,name,rollnum;
var namearr = [''];

function data () {
formdata = document.getElementById("form1");
name = formdata.elements["name"].value;
rollnum = formdata.elements["rollnum"].value;

if(name == "" || rollnum == ""){
    	alert("field cannot be blank");
    }
    else{
    	localStorage.setItem(name , rollnum);
    	alert("Your Data hass been Stored ");
    }
}


function login(){

	formdata = document.getElementById("form1");
	var name = formdata.elements["name"].value;
	var rollnum = formdata.elements["rollnum"].value;

	for(var i = 0; i < namearr.length ; i++){
		if (rollnum == localStorage.getItem(name)) {
			window.location = "main.html?name=" + name;
		}else {
			alert("Sign up First!");
		}
	}
}