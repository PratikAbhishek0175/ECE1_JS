function calculateResult(){
    let n=document.getElementById("subject").value;
    let total=0;
    let i=0;
    for(i=0;i<n;i++)
    {
        let x=prompt("Enter subject No."+(i+1))
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>=90)
    {
        grade='A'
    }
    else if(average>=80)
    {
        grade='B'
    }
    else if(average>=70)
    {
        grade='C'
    }
    else if(average>=60)
    {
        grade='D'
    }
    else if(average>=50)
    {
        grade='E'
    }
    else if(average>=40)
    {
        grade='F'
    }
    let result=(average>=40)? 'pass':'fail'
    let r=document.getElementById("result").innerHTML="Total marks"+total+"<br>"+"Average"+average+"<br>"+"Grade"+grade+"<br>"+"Result"+result+"<br>";
}