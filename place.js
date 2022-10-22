let compList = document.querySelectorAll('.company');
let listNo = document.querySelectorAll('#sno');
let cgpaList = document.querySelectorAll('#gpa');
let cgpa;
let table = document.querySelector('.table');

// to display list of companies
function display()
{
    let count =1;
    for(let i=0 ; i<compList.length;i++)
    {
        let temp = parseFloat(cgpaList[i].innerText);
        if(cgpa>=temp)
        {
            table.classList.remove('false')
            compList[i].classList.remove('false');
            let no =count
            count++;
            listNo[i].innerText=no.toString();
        }
    }
}


// to reset 
function reset () {
    table.classList.add('false')
    for(let i=0 ; i<compList.length;i++)
    {
        compList[i].classList.add('false');
    }
}

// add event listener for button 

document.getElementById('btn').addEventListener('click' , function () {
    cgpa=document.querySelector('#cgpa_input').value;
    cgpa = parseFloat(cgpa);
    console.log(cgpa)
    reset();
    display();
})