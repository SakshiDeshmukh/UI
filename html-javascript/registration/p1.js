const _submit = () =>{
    const val = document.getElementById('name').value;
    localStorage.setItem('name',val);

    const v2 = document.getElementById('n2').value;
    localStorage.setItem('n2',v2);
    const v3 = document.getElementById('n3').value;
    localStorage.setItem('n3',v3);
    const v4 = document.getElementById('n4').value;
    localStorage.setItem('n4',v4);
    const v5 = document.getElementById('n5').value;
    localStorage.setItem('n5',v5);
    const v6 = document.getElementById('n6').value;
    localStorage.setItem('n6',v6);
}