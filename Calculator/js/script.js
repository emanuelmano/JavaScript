function take(button){
			var x = button.value;
			document.getElementById('result').value += x;
			
		}
		
		
		var total = 0;
		var znak = ""; 

		function plus(){

			
			znak="+";
			total+=parseInt(document.getElementById('result').value);
			
			document.getElementById('result').value="";


		}


			function sum(){
				

				if(znak=='+'){

				document.getElementById('result').value=

				total+parseInt(document.getElementById('result').value);

				} else if(znak=='-'){

					document.getElementById('result').value=

					total-parseInt(document.getElementById('result').value);

					

				}else if(znak=='*'){

					document.getElementById('result').value=

					total*parseInt(document.getElementById('result').value);

					

				}else if(znak=='/'){

					document.getElementById('result').value=

					total/parseInt(document.getElementById('result').value);

					

				}

			}


			function minus(){
				

				znak='-';

				if(total==0){

					total=parseInt(document.getElementById('result').value);	
				}else{

					total-=parseInt(document.getElementById('result').value);	
				}
				
					

			
			    document.getElementById('result').value="";


		}

		function multiply(){

			
			if(total==0){
				total=1;
			}
			znak="*";
			total*=parseInt(document.getElementById('result').value);
			
			document.getElementById('result').value="";
		}


		function divide(){

			znak="/";

			if(total==0){
				total=parseInt(document.getElementById('result').value);
			}else{
				total/=parseInt(document.getElementById('result').value);
			}

			document.getElementById('result').value="";
		}

		function clear_ce(){

			total="";
			znak="";
			document.getElementById('result').value="";

		}
