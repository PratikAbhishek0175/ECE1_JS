//types of conditions
//if condition
//if....else condition
//if....else if condition
//switch case

//if....else
let age = 20;
if (age<18)
{
    document.write("<b> age is eligible to vote</b>")
}
else
{
    document.write("<b> age is not eligible to vote</b>")
}

//switch case
let grade = 'A';
document.write("Entering switch block<br/>");
switch (grade){
    case 'A':document.write("Good Job <br/>");
    break;
    case 'B':document.write("Pretty Good <br/>");
    break;
    case 'C':document.write("Passed <br/>");
    break;
    case 'D':document.write("Not so Good <br/>");
    break;
}