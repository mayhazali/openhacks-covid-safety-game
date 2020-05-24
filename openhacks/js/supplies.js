function check(){
  var question1=document.supplies_quiz.question1.value;
  var question2=document.supplies_quiz.question2.value;
  var question3=document.supplies_quiz.question3.value;
  var question4=document.supplies_quiz.question4.value;
  
  var correct_answers=0;
  
  if (question1=== "Canned and Dried Food"){
    correct_answers+=1;
  }
  if (question2==="1-2"){
    correct_answers+=1;
  }
  if (question3==="Soap"){
    correct_answers+=1;
  }
  if (question4==="Termometer"){
    correct_answers+=1;
  }
  
  var display_message=["You are ready for the next stage!", "You almost did it.", "Not quite.", "You need to read more COVID news on reliable sources."];
  var message_index=0;
  
  if (correct_answers===4){
    message_index=0;
  }
  if (correct_answers===3){
    message_index=1;
  }
  if (correct_answers===2){
    message_index=2;
  }
  if (correct_answers===1 || correct_answers===0){
    message_index=3;
  }
  
  document.getElementById("answer").style.visibility = "visible";
  document.getElementById("message").innerHTML = display_message[message_index];
  document.getElementById("correct_answers").innerHTML = correct_answers + "/4 Correct";
}