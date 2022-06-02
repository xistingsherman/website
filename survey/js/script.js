
var fname;
var totalQuestions;
var currentQuestion = 0;
var age_group_value;
var answerbox;
var q_group;
var button;

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$(document).ready(function() {
  answerbox = document.getElementById('answer');
  button = document.getElementById('next');

  $questions = $('.questions');
  $questions.hide();
  $($questions.get(currentQuestion)).fadeIn();
});

function reset(){
  $($questions.get(currentQuestion)).fadeOut(function () {
    currentQuestion = 0;
    button.disabled = false;
    answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
    $("#answer").css("color", "black");
    $( document ).ready(function() {
    $('form').each(function() { this.reset() });
  });
    $($questions.get(currentQuestion)).fadeIn();
  });
}
//listener
function next(){
  totalQuestions = $('.questions').size;

  answerbox.innerHTML = "";

  $($questions.get(currentQuestion)).fadeOut(function () {

    switch(currentQuestion) {
      case 0:
      currentQuestion = 1;
      break;

      case 1:
      $("#answer").css("color", "red");
      answerbox.innerHTML = "";
      var age_group = document.getElementsByName('q1');
      for(var i = 0; i < age_group.length; i++){
        if(age_group[i].checked){
          age_group_value = age_group[i].value;
        }
      }
      if (age_group_value === "parentInfant"){
        currentQuestion = 2;
      }
      else if(age_group_value === "preschool"){
        currentQuestion = 8;
      }
      else if(age_group_value === "schoolAge"){
        currentQuestion = 21;
      }
      else if(age_group_value === "juniorAdult"){
        currentQuestion = 61;
        answerbox.innerHTML = "Junior Adult";
        button.disabled = true;
      }
      else if(age_group_value === "adult"){
        currentQuestion = 37;
      }
      else{
        $("answerbox").css("color", "red");
        answerbox.innerHTML = "Please select an option.";
      }
      break;

      case 2:
      q_group = document.getElementsByName('q2');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else if (q_group_value === "no"){
        currentQuestion = 42;
        answerbox.innerHTML = "Cannot take classes yet";
        button.disabled = true;
      }
      else{
        $("answerbox").css("color", "red");
        answerbox.innerHTML = "Please select an option.";
      }
      break;
      case 3:
      q_group = document.getElementsByName('q3');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 42;
        answerbox.innerHTML = "Cannot take classes yet";
        button.disabled = true;
      }
      break;
      case 4:
      q_group = document.getElementsByName('q4');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 43;
        answerbox.innerHTML = "Parent Infant Beginner";
        button.disabled = true;
      }
      break;
      case 5:
      q_group = document.getElementsByName('q5');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 43;
        answerbox.innerHTML = "Parent Infant Beginner";
        button.disabled = true;
      }
      break;
      case 6:
      q_group = document.getElementsByName('q6');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 44;
        answerbox.innerHTML = "Parent Infant Intermediate";
        button.disabled = true;
      }
      break;
      case 7:
      q_group = document.getElementsByName('q7');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 45;
        answerbox.innerHTML = "Parent Preschool";
        button.disabled = true;
      }
      else{
        currentQuestion = 44;
        answerbox.innerHTML = "Parent Infant Intermediate";
        button.disabled = true;
      }
      break;



      case 8:
      q_group = document.getElementsByName('q8');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 46;
        answerbox.innerHTML = "Preschool I Beginer";
        button.disabled = true;
      }
      else{
        currentQuestion++;
      }
      break;
      case 9:
      q_group = document.getElementsByName('q9');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 47;
        answerbox.innerHTML = "Preschool I";
        button.disabled = true;
      }
      break;
      case 10:
      q_group = document.getElementsByName('q10');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 47;
        answerbox.innerHTML = "Preschool I";
        button.disabled = true;
      }
      break;
      case 11:
      q_group = document.getElementsByName('q11');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 48;
        answerbox.innerHTML = "Preschool II";
        button.disabled = true;
      }
      break;
      case 12:
      q_group = document.getElementsByName('q12');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 49;
        answerbox.innerHTML = "Preschool III";
        button.disabled = true;
      }
      break;
      case 13:
      q_group = document.getElementsByName('q13');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 50;
        answerbox.innerHTML = "Preschool III Endurance";
        button.disabled = true;
      }
      break;
      case 14:
      q_group = document.getElementsByName('q14');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 51;
        answerbox.innerHTML = "Preschool IV";
        button.disabled = true;
      }
      break;
      case 15:
      q_group = document.getElementsByName('q15');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 51;
        answerbox.innerHTML = "Preschool IV";
        button.disabled = true;
      }
      break;
      case 16:
      q_group = document.getElementsByName('q16');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 51;
        answerbox.innerHTML = "Preschool IV";
        button.disabled = true;
      }
      break;
      case 17:
      q_group = document.getElementsByName('q17');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 52;
        answerbox.innerHTML = "Preschool V";
        button.disabled = true;
      }
      break;
      case 18:
      q_group = document.getElementsByName('q18');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 52;
        answerbox.innerHTML = "Preschool V";
        button.disabled = true;
      }
      break;
      case 19:
      q_group = document.getElementsByName('q19');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion++;
      }
      else{
        currentQuestion = 52;
        answerbox.innerHTML = "Preschool V";
        button.disabled = true;
      }
      break;
      case 20:
      q_group = document.getElementsByName('q20');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 53;
        answerbox.innerHTML = "Preschool VI";
        button.disabled = true;
      }
      else{
        currentQuestion = 52;
        answerbox.innerHTML = "Preschool V";
        button.disabled = true;
      }
      break;
      case 21:
      q_group = document.getElementsByName('q21');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 22;
      }
      else{
        currentQuestion = 54;
        answerbox.innerHTML = "School Age I";
        button.disabled = true;
      }
      break;
      case 22:
      q_group = document.getElementsByName('q22');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 23;
      }
      else{
        currentQuestion = 54;
        answerbox.innerHTML = "School Age I";
        button.disabled = true;
      }
      break;
      case 23:
      q_group = document.getElementsByName('q23');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 24;
      }
      else{
        currentQuestion = 54;
        answerbox.innerHTML = "School Age I";
        button.disabled = true;
      }
      break;
      case 24:
      q_group = document.getElementsByName('q24');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 25;
      }
      else{
        currentQuestion = 55;
        answerbox.innerHTML = "School Age II";
        button.disabled = true;
      }
      break;

      case 25:
      q_group = document.getElementsByName('q25');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 26;
      }
      else{
        currentQuestion = 55;
        answerbox.innerHTML = "School Age II";
        button.disabled = true;
      }
      break;
      case 26:
      q_group = document.getElementsByName('q26');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 27;
      }
      else{
        currentQuestion = 56;
        answerbox.innerHTML = "School Age III";
        button.disabled = true;
      }
      break;
      case 27:
      q_group = document.getElementsByName('q27');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 28;
      }
      else{
        currentQuestion = 56;
        answerbox.innerHTML = "School Age III";
        button.disabled = true;
      }
      break;
      case 28:
      q_group = document.getElementsByName('q28');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 29;
      }
      else{
        currentQuestion = 56;
        answerbox.innerHTML = "School Age III";
        button.disabled = true;
      }
      break;
      case 29:
      q_group = document.getElementsByName('q29');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 30;
      }
      else{
        currentQuestion = 57;
        answerbox.innerHTML = "School Age III Endurance";
        button.disabled = true;
      }
      break;
      case 30:
      q_group = document.getElementsByName('q30');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 31;
      }
      else{
        currentQuestion = 57;
        answerbox.innerHTML = "School Age III Endurance";
        button.disabled = true;
      }
      break;
      case 31:
      q_group = document.getElementsByName('q31');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 32;
      }
      else{
        currentQuestion = 57;
        answerbox.innerHTML = "School Age III Endurance";
        button.disabled = true;
      }
      break;
      case 32:
      q_group = document.getElementsByName('q32');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 33;
      }
      else{
        currentQuestion = 58;
        answerbox.innerHTML = "School Age IV";
        button.disabled = true;
      }
      break;
      case 33:
      q_group = document.getElementsByName('q33');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 34;
      }
      else{
        currentQuestion = 58;
        answerbox.innerHTML = "School Age IV";
        button.disabled = true;
      }
      break;
      case 34:
      q_group = document.getElementsByName('q34');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 35;
      }
      else{
        currentQuestion = 58;
        answerbox.innerHTML = "School Age IV";
        button.disabled = true;
      }
      break;
      case 35:
      q_group = document.getElementsByName('q35');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 36;
      }
      else{
        currentQuestion = 59;
        answerbox.innerHTML = "School Age V";
        button.disabled = true;
      }
      break;
      case 36:
      q_group = document.getElementsByName('q36');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 60;
        answerbox.innerHTML = "School Age VI";
        button.disabled = true;
      }
      else{
        currentQuestion = 59;
        answerbox.innerHTML = "School Age V";
        button.disabled = true;
      }
      break;
      case 37:
      q_group = document.getElementsByName('q37');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 62;
        answerbox.innerHTML = "Adult Beginner"
        button.disabled = true;
      }
      else{
        currentQuestion = 38;
      }
      break;
      case 38:
      q_group = document.getElementsByName('q38');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 39;
      }
      else{
        currentQuestion = 62;
        answerbox.innerHTML = "Adult Beginner";
        button.disabled = true;
      }
      break;
      case 39:
      q_group = document.getElementsByName('q39');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 40;
      }
      else{
        currentQuestion = 62;
        answerbox.innerHTML = "Adult Beginner";
        button.disabled = true;

      }
      break;
      case 40:
      q_group = document.getElementsByName('q40');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 41;
      }
      else{
        currentQuestion = 63;
        answerbox.innerHTML = "Adult Intermediate/Advanced";
        button.disabled = true;
      }
      break;
      case 41:
      q_group = document.getElementsByName('q41');
      for(var i = 0; i < q_group.length; i++){
        if(q_group[i].checked){
          q_group_value = q_group[i].value;
        }
      }
      if (q_group_value === "yes"){
        currentQuestion = 65;
        answerbox.innerHTML = "Triathlon Training – Intermediate/Advanced";
        button.disabled = true;
      }
      else{
        currentQuestion = 64;
        answerbox.innerHTML = "Triathlon Training – Beginner ";
        button.disabled = true;
      }
      break;
    }

    $($questions.get(currentQuestion)).fadeIn();
  });
}

function resetForm(oForm){
  //document.getElementById("myForm").reset();
  var frm_elements = oForm.elements;

  for (i = 0; i < frm_elements.length; i++)
  {
    field_type = frm_elements[i].type.toLowerCase();
    switch (field_type)
    {
      case "text":
      case "hidden":
      frm_elements[i].value = "";
      break;
      case "radio":
      case "checkbox":
      if (frm_elements[i].checked)
      {
        frm_elements[i].checked = false;
      }
      break;
      default:
      break;
    }
  }
}

function getAgeGroup () {
  var answerbox = document.getElementById('answer');
  document.getElementById('answer').innerHTML = age_group_value;
}

function updateName() {
  fname = document.getElementsByName("fname")[0].value;
  document.getElementById('firstname0').innerHTML = fname;
  document.getElementById('firstname1').innerHTML = fname;
  document.getElementById('firstname2').innerHTML = fname;
  document.getElementById('firstname3').innerHTML = fname;
  document.getElementById('firstname4').innerHTML = fname;
  document.getElementById('firstname5').innerHTML = fname;
  document.getElementById('firstname6').innerHTML = fname;
  document.getElementById('firstname7').innerHTML = fname;
  document.getElementById('firstname8').innerHTML = fname;
  document.getElementById('firstname9').innerHTML = fname;
  document.getElementById('firstname10').innerHTML = fname;
  document.getElementById('firstname11').innerHTML = fname;
  document.getElementById('firstname12').innerHTML = fname;
  document.getElementById('firstname13').innerHTML = fname;
  document.getElementById('firstname14').innerHTML = fname;
  document.getElementById('firstname15').innerHTML = fname;
  document.getElementById('firstname16').innerHTML = fname;
  document.getElementById('firstname17').innerHTML = fname;
  document.getElementById('firstname18').innerHTML = fname;
  document.getElementById('firstname19').innerHTML = fname;
  document.getElementById('firstname20').innerHTML = fname;
  document.getElementById('firstname21').innerHTML = fname;
  document.getElementById('firstname22').innerHTML = fname;
  document.getElementById('firstname23').innerHTML = fname;
  document.getElementById('firstname25').innerHTML = fname;
  document.getElementById('firstname26').innerHTML = fname;
  document.getElementById('firstname27').innerHTML = fname;
  document.getElementById('firstname28').innerHTML = fname;
  document.getElementById('firstname29').innerHTML = fname;
  document.getElementById('firstname30').innerHTML = fname;
  document.getElementById('firstname31').innerHTML = fname;
  document.getElementById('firstname32').innerHTML = fname;
  document.getElementById('firstname33').innerHTML = fname;
  document.getElementById('firstname34').innerHTML = fname;
  document.getElementById('firstname35').innerHTML = fname;
  document.getElementById('firstname36').innerHTML = fname;

}
