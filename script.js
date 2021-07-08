function compute()
{
    //This function gets called upon clicking Compute Interest Button
    //Validation on Principal input
    var principal = document.getElementById("principal").value;
    if(principal < 0) {
        alert("Enter a Positive Number!");
        return false 
        };
    //Variable declaration and definition
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
      var year = new Date().getFullYear()+parseInt(years);
 
    //This shows the output of in required format
  document.getElementById("result").innerHTML= "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
   //   alert ("If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>");

}

function updateRate() 
{
    //This function helps to dynamically show rate slider value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}
        