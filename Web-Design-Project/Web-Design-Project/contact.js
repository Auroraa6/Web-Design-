function checkMail()
{
    var val = document.myform.email.value;
    if (val.indexOf('@') == -1)
        return false;
    else
        return true;
}

function increment(){
    var number=document.getElementById('number');
    
    var n = number.innerHTML;
    number.innerHTML = Number(n) + 1;
}

function decrement(){
    var number=document.getElementById('number');
    var n = number.innerHTML;
    number.innerHTML = Number(n) - 1;
}

function change()
{
    var parr = document.getElementById('parr');
    var cambia = document.getElementById('cambia');
    var links=document.getElementById('link');
    cambia.style.display="none";
    parr.style.display="block";
    links.style.display="inline";
    document.getElementById('like').style.display="block";
    parr.innerHTML = parr.innerHTML + document.myform.name.value + " "+document.myform.surname.value +". ";
    switch (document.myform.select.value) {
        case "Sevilla Cathedral":
            var link="https://www.catedraldesevilla.es";
            break;
        case "Giralda":
            var link="https://www.catedraldesevilla.es/la-catedral/edificio/la-giralda/";
            break;
        case "Triana Bridge":
            var link="https://www.visitasevilla.es/en/more-see/triana-bridge"
        default:
            break;
    }
    links.setAttribute("href",link);
    parr.innerHTML = parr.innerHTML + "We are very grateful that the "+ document.myform.select.value +" was you favourite part. You can use you email "+document.myform.email.value + " in the following link to visit it."; 
}