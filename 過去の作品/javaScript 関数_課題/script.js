document.write("問１");
document.write("<br>");
document.write("<br>");


function menseki(r, p=3.14){
    return(r*r*p);
}

document.write(menseki(5)+"<br>");

document.write(menseki(7)+"<br>");

document.write(menseki(10)+"<br>");


document.write("<br>");
document.write("問2");
document.write("<br>");
document.write("<br>");

function ticket(o,k,otona=500, kodomo=200){
    return(o*otona+k*kodomo+"円です。");
}

document.write(ticket(2,4));
document.write("<br>");
document.write(ticket(1,5));
document.write("<br>");
document.write(ticket(3,7));