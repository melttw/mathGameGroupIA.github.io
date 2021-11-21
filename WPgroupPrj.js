let totalQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


let playersdata=[

      ]
             function calculateAge(){
                var dateInput = document.getElementById("dob").value;
                var DateOB = new Date(dateInput);

                var month_diff = Date.now() - DateOB.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                document.getElementById("a").value = Math.abs(year - 1970);

            }//End calculateAge


            //Task 11   // function is use to disable the play and result button
            function disable()
            {
                document.getElementById("Start").disabled = true;
                document.getElementById("Accept").disabled = true;
                document.getElementById("Next").disabled = true;
                // use to clear the form data and enable input
                document.getElementById("mathGame").reset();
            }//End disable

// Task 10
            function findPercentageScore() {
                let ln = document.getElementById('ln').value;
                let fn = document.getElementById('fn').value;
                // display current date

                const date = new Date();
                const n = date.toDateString();
                var correct = correctAnswers ;
                var amount = totalQuestions;
                var percentage;
                
                if (amount == 0){
                  percentage = 0;
                }else{
                  percentage = Math.round((correct/ amount) * 100);
                }

                // use to display the data into the textarea
                document.getElementById("showpercentage").value= "Name: " + fn +" "+ln+"\n"+"Date: "
                 + n +"\n"+"Number Of Questions: " +amount+"\n"+"Number Of Correct Answer: "+correct+ "\n"+"The Percentage Score: " +percentage+"%";

                 //Used to enable inputs,
                 document.getElementById("fn").disabled = false;
                 document.getElementById("ln").disabled = false;
                 document.getElementById("dob").disabled = false;
                 document.getElementById("a").disabled = false;
                 document.getElementById("gd").disabled = false;
                 document.getElementById("email").disabled = false;

                 // Used to disable all buttons
                 document.getElementById("Start").disabled = true;
                 document.getElementById("Accept").disabled = true;
                 document.getElementById("Next").disabled = true;

                 //Used to enable registerButton
                  document.getElementById("Register").disabled = false;

                  // Used to reset form.
                 document.getElementById('fn').value='';
                 document.getElementById('ln').value='';
                 document.getElementById('dob').value='';
                 document.getElementById('a').value='';
                 document.getElementById('gd').value='';
                 document.getElementById('email').value='';

             }


            function register(){

              document.getElementById("fn").disabled = true;
              document.getElementById("ln").disabled = true;
              document.getElementById("dob").disabled = true;
              document.getElementById("a").disabled = true;
              document.getElementById("gd").disabled = true;
              document.getElementById("email").disabled = true;
              document.getElementById("Register").disabled = true;
              document.getElementById("Start").disabled = false;
              document.getElementById("end").disabled = false;


          /*  STILL USING
                let player={
                    "firstname":document.getElementById("fn"),
                    "lastname":document.getElementById("ln"),
                     "emails":document.getElementById("Email"),
                     "DOB":document.getElementById("dob"),
                    "Gen":document.getElementById("gd"),
                    "Age":document.getElementById("a")
                }



                var fn=document.form["mathGame"]["firstname"].value;
                var ln=document.form["mathGame"]["lastname"].value;
                var dob=document.form["mathGame"]["dateofbirth"].value;
                var a=document.form["mathGame"]["age"].value;
                var gn=document.form["mathGame"]["gender"].value;*/


                /*STILL USING
                if(player.firstname.value =="" || player.firstname.value == null){
                    alert("First Name cannot be blank");
                    return false;
                }
                if(player.lastname.value =="" || player.lastname.value == null){
                    alert("Last Name cannot be blank");
                    return false;
                }
                if(player.DOB.value =="" || player.DOB.value == null){
                    alert("Date of Birth cannot be blank");
                    return false;
                }
                if(player.Age.value =="" || player.Age.value == null){
                    alert("Age cannot be blank");
                    return false;
                }
                if(player.Gen.value =="" || player.Gen.value == null){
                    alert("Gender cannot be blank");
                    return false;
                }
                playersdata.push(player); */

            return false;
          } //END register

//Task 4

            function PlayGame(){


                document.getElementById('num1').value = Math.floor(Math.random() * 8) + 1;
                document.getElementById('num2').value = Math.floor(Math.random() * 4) + 1;

                document.getElementById("Accept").disabled = false;
                document.getElementById("Next").disabled = false;
                document.getElementById("answer").disabled = false;

                document.getElementById("answer").value = "";

                //Checks if the value entered is a number.

                //This while forces user to enter value until it is a number.


            }//End PlayGame


//Task 6
            function CheckAnswer(){

              answer = document.getElementById('answer').value;
              num1 = document.getElementById('num1').value;
              num2 = document.getElementById('num2').value;

              var product = num1 * num2;


              var numCheck = isNaN(answer);

              if (numCheck === true){
                  answer = alert ("Please enter a number to continue.");
              }  //END IF
                    //numCheck = isNaN(answer); While statement



                //If checks if the answer is correct.
                if(answer == product){
                  //alert("Yay! You are correct.");
                    correctAnswers ++;
                    totalQuestions ++;
                }else{
                    //alert("I'm sorry, but you are wrong.");
                    wrongAnswers ++;
                    totalQuestions ++;
                } //END IF

            }// END CheckAnswer
