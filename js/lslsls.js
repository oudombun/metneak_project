btn.onclick=()=>{
				let obj={
					fn:document.getElementById('firstname').value,
					ln:document.getElementById('lastname').value,
					s1:document.getElementById('primary').value,
					s2:document.getElementById('secondary').value,
					s3:document.getElementById('highschool').value,
					y1:document.getElementById('year1').value,
					y2:document.getElementById('year2').value,
					y3:document.getElementById('year3').value,
					jerry:document.getElementById('jerryj').value,			
					city:document.getElementById('input'),

				}
				
				let validation={
					fn:false,
					ln:false,
					s1:false,
					s2:false,
					s3:false,
					y1:false,
					y2:false,
					y3:false,
					jerry:false,
					city:false
				}

				if(obj.s1==""){
					msgerror("(*Please select an item in the list)","errors1");
				}else{
					msgerror("","errors1")
					validation.s1=true;
				}

				if(obj.s2==""){
					msgerror("(*Please select an item in the list)","errors2");
				}else{
					msgerror("","errors2")
					validation.s2=true;
				}

				if(obj.s3==""){
					msgerror("(*Please select an item in the list)","errors3");
				}else{
					msgerror("","errors3")
					validation.s3=true;
				}


				//Day
				if(obj.jerry==""){
					msgerror("(*Required)","hellowrld");
				}else{
					msgerror("","hellowrld")
					validation.jerry=true;
				}

				//First name & Last name
				if(obj.fn==""){
					msgerror("(*Required)", "err1");
				}else if (!/^[a-z]*$/.test(obj.fn)) {
					msgerror("Name Must Be a-z and No whiteSpace","err1");
				}else if (obj.fn.length < 4 || obj.fn.length > 20) {
					msgerror("*Name must be between 4 to 20 characters", "err1");
				}else {
					msgerror("","err1");
					validation.fn=true;				}

				if(obj.ln==""){
					msgerror("(*Required)", "err2");
				}else if (!/^[a-z]*$/.test(obj.ln)) {
					msgerror("Name Must Be a-z and No whiteSpace","err2");
				}else if (obj.ln.length < 4 || obj.ln.length > 20) {
					msgerror("*Name must be between 4 to 20 characters", "err2");
				}else {
					msgerror("","err2");
					validation.ln=true;
				}

				//Place of birth
				var selectedCity=obj.city.options[obj.city.selectedIndex].value;
				if(selectedCity==1){
					msgerror("(*Please select an item in the list)","errorj");
				}else{
					msgerror("","errorj");
					validation.city=true;
				}


				//Primary School
				if(obj.y1==""){
					msgerror("(*Please select an item in the list)","erroryear1");
				}else{
					msgerror("","erroryear1")
					validation.y1=true;
				}

				//Secondary School
				if(obj.y2==""){
					msgerror("(*Please select an item in the list)","erroryear2");
				}else{
					msgerror("","erroryear2")
					validation.y2=true;
				}

				//High School
				//Secondary School
				if(obj.y3==""){
					msgerror("(*Please select an item in the list)","erroryear3");
				}else{
					msgerror("","erroryear3")
					validation.y3=true;
				}


				if(validation.fn&validation.ln&validation.y1&validation.y2&validation.y3&validation.city&validation.jerry&validation.s1&validation.s2&validation.s3){
					$("#successRecordModal").modal("show");
				}
			}
			

			//Custom Error
			function msgerror (text,element) {
				document.getElementById(element).innerHTML=text;
			}

			//Random Option
			function random_function()
            {
                var a=document.getElementById("input").value;
                if(a==="1")
                {
                    var arr=["",""];
                }else if(a==="2"){
                    var arr=["ដង្កោ","៧មករា","ដូនពេញ","ទួលគោក","ចំការមន"];
                }
                else if(a==="3")
                {
                    var arr=["ក្រឡាញ់","ជីក្រែង","ស្វាយលើ"];
                }
                else if(a==="4")
                {
                    var arr=["តាខ្មៅ"];
                }
                else if(a==="5")
                {
                    var arr=["ស្រែអំបិល","គិរីសាគរ","មណ្ឌលសីមារ"];
                }
                else if(a==="6")
                {
                    var arr=["ឆ្លូង","ស្នួល","សំបូរ"];
                }
                else if(a==="7")
                {
                    var arr=["ប៉ៃលិន","សាលាក្រៅ"];
                }
                else if(a==="8")
                {
                    var arr=["សង្កែ","ថ្មគោល","បវេល"];
                }
                else if(a==="9")
                {
                    var arr=["ក្រឡាញ់","ជីក្រែង","ស្វាយលើ"];
                }
                else if(a==="10")
                {
                    var arr=["បាកាន","ក្រគរ","វាលវែង"];
                }
                
                var string="<option value=0></option>";
                
                for(i=0;i<arr.length;i++)
                {
                    string=string+"<option>"+arr[i]+"</option>";
                }
                string="<select id='test1' name='any_name' class='browser-default custom-select'>"+string+"</select>";
                document.getElementById("output").innerHTML=string;
            }

