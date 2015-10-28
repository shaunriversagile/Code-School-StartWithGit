/**
 * Created by timmalesky on 10/28/15.
 */

var req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if (req.status===200 && req.readyState===4){
        var jsn = JSON.parse(req.responseText);
        var sel = document.getElementById("mySelect");
        for (var x=0; x<jsn.length;x++){
            var option = document.createElement("option");
            option.text = jsn[x].name;
            option.value = jsn[x].abberviation;
            sel.add(option);


        }

    }

};

req.open ('GET', 'http://code-school-api.herokuapp.com/states','true');
req.send ();