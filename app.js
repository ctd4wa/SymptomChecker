/* GOALS OF THE JAVASCRIPT FILES
- Write questions to correlate to different symptoms of the four diseases
- Track the response of each question according to each disease
- spit out the results for the user to see their percentages of each
*/

/* TOP SYMPTOMS FOR EACH ILLNESS

COVID-19 - Fever, cough, shortness of breath, headaches, sore throat
Common cold - Runny nose, sneezing, sore throat, aches and pains, cough
Flu - Headaches, fatigue, fever, dry cough, aches and pains
Allergies - shortness of breath, runny nose, sneezing, dry cough, headaches
*/

 
    
 document.getElementById("form1").onsubmit=function(e) {
    
   fever = document.querySelector('input[name = "fever"]:checked').value;

   cough = document.querySelector('input[name = "cough"]:checked').value;

   breath = document.querySelector('input[name = "breath"]:checked').value;

   headache = document.querySelector('input[name = "headache"]:checked').value;

   pain = document.querySelector('input[name = "pain"]:checked').value;

   throat = document.querySelector('input[name = "throat"]:checked').value;

   fatigue = document.querySelector('input[name = "fatigue"]:checked').value;
    
   runny = document.querySelector('input[name = "runny"]:checked').value;

   sneeze = document.querySelector('input[name = "sneeze"]:checked').value;
     
   // initialize score variables 
   virus = 0;
   flu = 0;
   cold = 0;
   allergy = 0;
   
   //function to calculate score for each question
   function eachscore(x){
   if(x == "cough") { virus = virus + 1; flu = flu + 1; cold = cold + 1; allergy = allergy +1}
   if(x == "fever") { virus = virus + 1; flu = flu + 1}
   if(x == "breath") { virus = virus + 1; allergy = allergy + 1}
   if(x == "headache") { virus = virus + 1; flu = flu + 1; allergy = allergy +1}
   if(x == "pain") { cold = cold +1; flu = flu +1}
   if(x == "throat") { virus = virus + 1; cold = cold + 1; flu = flu + 1}
   if(x == "fatigue") { flu = flu + 1}
   if(x == "runny") { cold = cold + 1; allergy = allergy + 1}
   if(x == "sneeze") { cold = cold + 1; allergy = allergy + 1}
   }
   // for the above function, you could also change the 1 to a variable so you could give more points for certain questions
   
   //call function for each question
   eachscore(eval("cough"));
   eachscore(eval("fever"));
   eachscore(eval("breath"));
   eachscore(eval("headache"));
   eachscore(eval("pain"));
   eachscore(eval("throat"));	  
   eachscore(eval("fatigue"));
   eachscore(eval("runny"));
   eachscore(eval("sneeze"));
   
   
   
   all = [virus, cold, flu, allergy];

   console.log(all);
   
 //get the max score  in the array
 maxscore = Math.max.apply(Math,all);
 
   //figure out which score is the max score by identifying its index number
 for(i=0; i<all.length; i++) {
 if(all[i]==maxscore) {
 highest = i;
 }
 }
 

// object holding scores and feedback	
scores = [{index:0, feedback: "You are currently showing symptoms most similar to COVID-19."},
{index:1, feedback: "You are currently showing symptoms most similar to the common cold."},
{index:2, feedback: "You are currently showing symptoms most similar to the flu."},
{index:3, feedback: "You are currently showing symptoms most similar to seasonal allergies."}];


//loop to match index to score and reply with feedback
for(i=0;i<scores.length; i++) {
if(highest == scores[i].index) {
document.getElementById("answer4").innerHTML = scores[i].feedback;
}
}

    



      
    return false; // required to not refresh the page; just leave this here
    console.log(all);	   
    
 e.preventDefault();
}
{/* // end the submit function */}
