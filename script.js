

let weAdd = ()=>{
    let newElement = document.createElement("textarea");

    newElement.classList.add("form-control");
    newElement.classList.add("mt-2");
    newElement.classList.add("wefield");

    newElement.setAttribute("rows","2");
    newElement.setAttribute("placeholder","Enter Here");


    let id1 = document.getElementById("we");
    let id2 = document.getElementById("weAddButton");

    id1.insertBefore(newElement,id2)

}

let aqAdd = ()=>{
    let newElement = document.createElement("textarea");


    newElement.classList.add("form-control")
    newElement.classList.add("mt-2")
    newElement.classList.add("aqfield")

    newElement.setAttribute("placeholder","Enter here")


    let id1 = document.getElementById("aq");
    let id2 = document.getElementById("aqAddButton");

    id1.insertBefore(newElement,id2);
}

function generatecv() {
    let name = document.getElementById("nameT");
    let name2 = document.getElementById("name2")
    let getname = document.getElementById("namefield").value;

    name2.innerHTML = getname;
    name.innerHTML = getname;

    document.getElementById("phoneT").innerHTML = document.getElementById("contactfield").value

    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value


    document.getElementById("fbT").setAttribute("href",document.getElementById("fbfield").value);
    document.getElementById("ghT").setAttribute("href","https://www.github.com");
    document.getElementById("liT").setAttribute("href","https://www.linkedin.com");

    document.getElementById("objectiveT").innerHTML = document.getElementById("obfield").value

    let str = document.getElementsByClassName("wefield")
    let str1 = "";
    //console.log(str);
    for(let i of str)
    {
        str1 += `<li>${i.value}</li>` 
    }

    document.getElementById("weT").innerHTML = str1;


    let obj = document.getElementsByClassName("aqfield")
    let obj1=""

    for(let i of obj)
    {
        obj1 += `<li>${i.value}</li>` 
    }

    document.getElementById("aqT").innerHTML = obj1;

    document.getElementById("cv-form").style = "display:none"
    document.getElementById("second").style = "display:block"
}

function printcv()
{
    window.print();
    document.getElementById("bo").style = "display:none"
}