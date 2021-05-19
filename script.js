// alert("shit");
let addNewWEField = ()=>{
    //clg
   // console.log("shit");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield')
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","enter here");
    newNode.setAttribute("rows",3);

    let weOb = document.getElementById("we");
    let weAddButtonob = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonob);
}

function addnewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2')
    newNode.classList.add('aqfield');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating cv
let generateCV = ()=>{
    let img = document.getElementById("img").files[0];

    

    let reader = new FileReader();
    reader.readAsDataURL(img)

    reader.onloadend = ()=> {
        document.getElementById("imgT").setAttribute("src",reader.result);
    }

    


    let name = document.getElementById("namefield").value;
    let nameT = document.getElementById("nameT")
    let nameT1 = document.getElementById("mainnameT")

    nameT.innerHTML = name;
    nameT1.innerHTML = name;

    let contactfield = document.getElementById("contactfield").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactfield;

    let addressfield = document.getElementById("addressfield").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressfield;

    let fbfield = document.getElementById("fbfield").value;
    let fbT = document.getElementById("fbT");
    fbT.setAttribute("href",fbfield);

    let ghfield = document.getElementById("ghfield").value;
    let ghT = document.getElementById("ghT");
    ghT.setAttribute("href",ghfield); 

    //setting objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;

    //setting work experience

    let wes = document.getElementsByClassName("wefield");
    let str='';

    for(let e of wes)
    {
        str = str+ `<li>${e.value}</li>`
    }

    document.getElementById("weT").innerHTML = str;

    //setting aq experience

    let aqs = document.getElementsByClassName("aqfield");
    let str1 = "";

    for(let i of aqs)
    {
        str1 += `<li>${i.value}</li>` 
    }
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none"
    document.getElementById("cv-template").setAttribute("style","display:block");

}

let printCV = ()=>{
    window.print();
}
