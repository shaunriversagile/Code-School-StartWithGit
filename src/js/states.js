var xmlRequest = new XMLHttpRequest();

xmlRequest.onreadystatechange = function(){
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200){

        var states = JSON.parse(xmlRequest.responseText);

        var table = document.getElementById("statesTable");

        for (var x = 0; x < states.length; x++){
            var row = table.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            cell1.innerHTML = states[x].name;
            cell2.innerHTML = states[x].abbreviation;
        }
    }
};

xmlRequest.open("Get", "http://code-school-api.herokuapp.com/states", true);
xmlRequest.send();
