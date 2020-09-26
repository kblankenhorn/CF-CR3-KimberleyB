var teamJson = JSON.parse(team);
console.table(teamJson);

var doc = document.getElementById('employees');

for(var i=0;i<teamJson.length;i++)
{
    doc.innerHTML += `<li><p>Name: ${teamJson[i].Name} <br> Email: ${teamJson[i].Email} </p><br></li>`;
    doc.innerHTML += `<img src="${teamJson[i].img}">`;


    // if document is read = change color
    if(teamJson[i].read == true)
    {
    document.getElementsByTagName('p')[i].style.backgroundColor = "red";
    }
}

