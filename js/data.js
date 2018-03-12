var url = "http://10.21.66.103:3000/api/";

$("document").ready(function() {
    $("#getcontent").click(getContent);
    $("#addcontent").click(addContent);
    $("#searchdata").click(searchData);
    $("#getnodeinfo").click(getNodeInfo);
});

function getContent() {
    $.ajax(url + "sql/",
        { success: setContent,
          type: "GET",
          dataType: "json" });
}

function getNodeInfo() {
    $.ajax(url + "info/",
        { success: setInfo,
          type: "GET",
          dataType: "json" });
}

function setInfo(data, status, jqxhr) {
    var nodejsInfo = '<b>Node.js Server Info</b></br>IP Address: ' + data['ip'] + '</br>Host Name: ' + data['hostname'];
    document.getElementById("nodeInfo").innerHTML = nodejsInfo;
}

function setContent(data, status, jqxhr) {
            document.getElementById("demobox").innerHTML = "";
            document.getElementById('demobox').appendChild(createTable(data));
}

function createTable(array, tableBody) {
    var keylist = ['_ID', 'PARTNO', 'PARTDESC', 'PARTAVAIL', 'PARTREV'];
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.border = '1';
    table.width = '97%';
    table.align = 'center';

    var tr = document.createElement('tr');
    for(var i = 0; i < keylist.length; i++) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(keylist[i].toUpperCase()));
        tr.appendChild(th);
        tableBody.appendChild(tr);
    }

    for(var i = 0; i < array.length; i++) {
         tr = document.createElement('tr');

         for(var key in array[i]){
            if(keylist.indexOf(key) > -1){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(array[i][key]));
                tr.appendChild(td);
            }
         }
         tableBody.appendChild(tr);
    }
    table.appendChild(tableBody);
	return table
}

function searchData() {
    document.getElementById("demobox").innerHTML = "";
    var searchString = document.getElementById("searchText").value;
    var y = document.getElementById("searchCriteria");
    var strCrit = y.options[y.selectedIndex].value;
    $.ajax(url + "sql/?" + strCrit + "=" + searchString.replace(/ /g, '%20'),
        { success: setContent,
          type: "GET",
          dataType: "json" });
    document.getElementById("searchText").value = "";
}

function addContent() {
    document.getElementById("demobox").innerHTML = "";
    var content = {}
    content['rank'] = document.getElementById("rankText").value;
    content['peak'] = document.getElementById("peakText").value;
    content['elevation'] = document.getElementById("elevationText").value;
    content['state'] = document.getElementById("stateText").value;
    content['range'] = document.getElementById("rangeText").value;
    $.ajax(url + "peaks/",
        { success: document.getElementById("demobox").innerHTML = "</br><center><b>Data Added</b></center>",
          type: "POST",
          data: content });
    document.getElementById("rankText").value = "";
    document.getElementById("peakText").value = "";
    document.getElementById("elevationText").value = "";
    document.getElementById("rangeText").value = "";
    document.getElementById("stateText").value = "";
}

