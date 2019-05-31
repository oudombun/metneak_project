var rIndex,table = document.getElementById("table");
var isDel=false;
var record= document.querySelector(".record");
$(document).ready(function(){
  showRecord();
});
function showRecord(){
	record.innerHTML=table.rows.length;
}
function changeActive() {
	var selected = document.getElementById("gender").value;
	var genText = document.getElementById("mygen");
	var genIcon = document.querySelector(".fa-venus-double");
  	if(selected!=0){
  		genIcon.classList.add("active");
  		genText.classList.add("active");
  	}else{
  		genText.classList.remove("active");
  		genIcon.classList.remove("active");
  	}
}
// check the empty input
function checkValidInput(){

    var isValidName=false,isValidSchool=false,isValidPhone=false,isValidGender,
        name = document.getElementById("name").value,
        gender = document.getElementById("gender").value,
        school = document.getElementById("school").value,
        contact = document.getElementById("contact").value;

    var labelName=document.querySelector(".lbl1");
    var labelGender=document.querySelector("#firstselect");
    var labelSchool=document.querySelector(".lbl3");
    var labelContact=document.querySelector(".lbl4");

    var isName = /^[A-Z]?[a-zA-Z]*$/;
    var isSchool=/[a-zA-Z]/;
    // var isPhone =/^0?\d{8,9}$/;
    var isPhone =/\(\d{3}\)-\d{3}-\d{3,4}/;
    // if (contact.match(isPhonenum) !=null) {
    // 	alert("valid");
    // }else{
    // 	alert("invalid");
    // }
    // return;
    if(name ===""){
        // alert("name is required");
        labelName.innerHTML="Student Name<span id='temp1' style='color:red;'> (Name is Required)</>";
        isValidName = false;
    }else if(isName.test(name)){
        labelName.innerHTML="Student Name";
        isValidName=true;
    }
    else{
        labelName.innerHTML="Student Name<span id='temp1' style='color:red;'> (field cannot contain space or number)</>";
        /*sweet alert*/
        isValidName = false;
    }

    if(gender ===""){
        // alert("name is required");
        labelGender.innerHTML="Gender<span id='temp1' style='color:red;'> (Please choose gender)</>";
        isValidGender = false;
    }else{
        
        isValidGender=true;
    }

    if(school ===""){
        labelSchool.innerHTML="School<span id='temp2' style='color:red;'> (School is Required)</>";
        isValidSchool = false;
    }else if(isSchool.test(school)){
        labelSchool.innerHTML="School";

        isValidSchool=true;
    }
    else{
        labelSchool.innerHTML="School<span id='temp2' style='color:red;'> (field cannot contain any number)</>";
        isValidSchool = false;
    }

     if(contact ===""){
        labelContact.innerHTML="Contact<span id='temp3' style='color:red;'> (Contact is Required)</>";
        isValidPhone = false;
    }else if(isPhone.test(contact)){
        labelContact.innerHTML="Contact";
        isValidPhone=true;
    }
    else{
        labelContact.innerHTML="Contact<span id='temp3' style='color:red;'> (Invalid PhoneNumber)</>";
        isValidPhone = false;
    }
    if(isValidName&&isValidSchool&&isValidPhone&&isValidGender)
        return true;
    else{
        // swal({
        //   title: "Error",
        //   text: "Something's wrong with your information! Please try again",
        //   icon: "error",
        //   button: "OK",
        // });
        return false;
    } 
        

}


// add Row Btn
function addHtmlTableRow()
{
    checkValidInput();
    // return;
	// get the table by id
	// create a new row and cells
	// get value from input text
	// set the values into row cell's
	var LastID =table.rows.length+1;
	if(checkValidInput()){
		var newRow = table.insertRow(table.length);
		cell1 = newRow.insertCell(0);
		cell2 = newRow.insertCell(1);
		cell3 = newRow.insertCell(2);
		cell4 = newRow.insertCell(3);
		cell5 = newRow.insertCell(4);
		name = document.getElementById("name").value;
		gender = document.getElementById("gender").value;
		school = document.getElementById("school").value;
		contact = document.getElementById("contact").value;
		cell1.innerHTML = LastID;
		cell2.innerHTML = name;
		cell3.innerHTML = gender;
		cell4.innerHTML = school;
		cell5.innerHTML = contact;
        $("#successRecordModal").modal("show");
		selectedRowToInput();
		clear();	
		showRecord();

	}
}
// display selected row data into input text
function selectedRowToInput(){
    for(var i = 0; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          for(var j=0;j<table.rows.length;j++){
            table.rows[j].classList.remove("active");
          }
          this.classList.add("active");
          rIndex = this.rowIndex-1;
          isDel=true;
        };
    }
}
selectedRowToInput();

function confirmDelete(){
    if(isDel){
        $("#deleteRecordModal").modal("show");
    }else{
        $("#nullRecordModal").modal("show");
    }
}
function removeSelectedRow(){
	// if(isDel){
        
	    table.deleteRow(rIndex);
	    isDel=false;
	    showRecord();
        $("#deleteRecordModal").modal("hide");
	// }
    // clear();
}
function clear(){
	// clear input text
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("school").value = "";
    document.querySelector(".lbl1").classList.remove("active");
    document.querySelector(".lbl2").classList.remove("active");
    document.querySelector(".lbl3").classList.remove("active");
    // document.querySelector(".lbl4").classList.remove("active");
    // document.querySelector(".fa-user-circle").classList.remove("active");
    // document.querySelector(".fa-graduation-cap").classList.remove("active");
    // document.querySelector(".fa-phone").classList.remove("active");
    // document.querySelector(".fa-venus-double").classList.remove("active");
}