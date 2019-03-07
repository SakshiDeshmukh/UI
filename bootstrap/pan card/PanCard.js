$(document).ready(()=>{
console.log("hggfdfdg");
$('#displayform').click(()=>{

  $('#accnocard').val($('#accno').val());
  $('#namecard').val($('#name').val());
  $('#fnamecard').val($('#fname').val());
  $('#dobcard').val($('#dob').val());

});

$('#register').click(()=>{

    const getacc = document.getElementById('accno').value;
    localStorage.setItem('accno',getacc);
    const getname = document.getElementById('name').value;
    localStorage.setItem('name',getname);
    const getfname = document.getElementById('fname').value;
    localStorage.setItem('fname',getfname);
    const getdob = document.getElementById('dob').value;
    localStorage.setItem('dob',getdob);
    
    });
  });
//const uinfo = document.getElementById('DisplayData').innerHTML;

  //  document.getElementById('DisplayData').innerHTML+=`<div>`;
    //document.getElementById('DisplayData').innerHTMl+=`INCOME TAX DEPARTMENT`;
    //document.getElementById('DisplayData').innerHTML+=`GOVT. OF INDIA`;
    //document.getElementById('DisplayData').innerHTML+=`$()`;

