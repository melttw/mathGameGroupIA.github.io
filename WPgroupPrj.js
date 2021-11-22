let totalQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
var f_size=100;
  var m_size=100;
const playersdata=[];

var cnt=0;
          windows.onload = function showfreq() {
            setinterval(function(){


          //var m_gen = document.getElementById("Male");
          //var f_gen = document.getElementById("Female");
          var first = document.getElementById("First");
          var second = document.getElementById("Second");
          first.innerHTML = "<img src='blue.jpg' id='Male' width=40>";
          document.getElementById("Male").height=m_size;
          second.innerHTML = "<img src='pink.jpg' id='Female' width=40>"
          document.getElementById("Female").height=f_size;

        }, 5000);
      }

             function calculateAge(){
                var dateInput = document.getElementById("dob").value;
                var DateOB = new Date(dateInput);

                var month_diff = Date.now() - DateOB.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                document.getElementById("a").value = Math.abs(year - 1970);

            }//End calculateAge


// Task 10
            function findPercentageScore() {
                let ln = playersdata[cnt-1].lastname.value;
                let fn = playersdata[cnt-1].firstname.value;
                // display current date
                const date = new Date();
                const n = date.toDateString();
                var correct = playersdata[cnt-1].CorrectAnswers;
                var amount = playersdata[cnt-1].TotalQuestions;
                var percentage = (correct/ amount) * 100 ;
                // use to display the data into the textarea
                document.getElementById("showpercentage").value= "Name: " + fn +" "+ln+"\n"+"Date : "
                 + n +"\n"+"Number of questions:" +amount+"\n"+"Number of correct answer: "+correct+ "\n"+"The percentage score: " +percentage+"%";

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



                 player={
                    "firstname":document.getElementById("fn"),
                    "lastname":document.getElementById("ln"),
                     "emails":document.getElementById("email"),
                     "DOB":document.getElementById("dob"),
                    "Gen":document.getElementById("gd"),
                    "Age":document.getElementById("a"),
                    "TotalQuestions":0,
                    "CorrectAnswers":0,
                    "WrongAnswers":0,
                    "Questions":[],
                    "Answers":[]
                }

                  if(document.getElementById("gd").value == "male"){
                      m_size+50;
                    }
                    if (document.getElementById("gd").value == "female"){
                      f_size+50;;
                    }

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
                playersdata.push(player);
               // playersdata[cnt]=player;
               console.log(playersdata[cnt]);
                cnt++;


            return false;
          }

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
                playersdata[cnt-1].Questions[cnt-1]=num1+"*"+num2;
                playersdata[cnt-1].Answers[cnt-1]=answer;
              var product = num1 * num2;

              var numCheck = isNaN(answer);

              if (numCheck === true){
                  answer = alert ("Please enter a number to continue.");
              }  //END IF
                    //numCheck = isNaN(answer); While statement



                //If checks if the answer is correct.
                if(answer == product){

                    playersdata[cnt-1].CorrectAnswers++;
                    playersdata[cnt-1].TotalQuestions++;
                }else{
                    //alert("I'm sorry, but you are wrong.");
                    playersdata[cnt-1].WrongAnswers++;
                    playersdata[cnt-1].TotalQuestions++;
                } //END IF
              showall();
            }// END CheckAnswer


        function showall(){
            document.getElementById("showAllPlayers").value="";
            var quest="";
            var dd=""
            var j=0;


            for(let i=0; i<playersdata.length; i++){
                document.getElementById("showAllPlayers").value+=playersdata[i].firstname.value+" "+playersdata[i].lastname.value+" "+playersdata[i].Age.value+"\n";

    }
}
