$('.show-hide-add-peak').click(function() {
	$('.add-peak-body').toggle("slow");
	$('.show-hide-plus').toggle();
	$('.show-hide-minus').toggle();
});

var url = "http://10.21.66.103:3000/api/";
$("document").ready(function() {
    $("#getcontent").click(getContent);
    $("#add-data").click(addContent);
    $("#search-data").click(searchData);
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
	var nodejsInfo = '<div class="node-info">Node.js IP Address: ' + data['ip'] + ' <br/> Node.js Host Name: ' + data['hostname'] + '</div>';
    document.getElementById("nodeInfo").innerHTML = nodejsInfo;
}

function setContent(data, status, jqxhr) {
            document.getElementById("demobox").innerHTML = "";
            document.getElementById('demobox').appendChild(createTable(data));
            $('#peak-data').DataTable();
}

function createTable(array, tableBody) {
    var keylist = ['_PartId', 'PartNo', 'PartDescription', 'PartVer', 'PartQty'];
    var table = document.createElement('table');
    table.className = 'table table-striped data-table';
    table.id = "peak-data";
    
    var thead = document.createElement('thead');
    
    var tr = document.createElement('tr');
    for(var i = 0; i < keylist.length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(keylist[i].toUpperCase()));
        tr.appendChild(td);
        table.appendChild(tr);
    }
    
    thead.appendChild(tr);
    table.appendChild(thead);
    
    var tableBody = document.createElement('tbody');
    
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
    var searchString = document.getElementById("search-text").value;
    var y = document.getElementById("search-criteria");
    var strCrit = y.options[y.selectedIndex].value;
    $.ajax(url + "sql/?" + strCrit + "=" + searchString.replace(/ /g, '%20'),
        { success: setContent,
          type: "GET",
          dataType: "json" });
    document.getElementById("search-text").value = "";
}

function addContent() {
    document.getElementById("demobox").innerHTML = "";
    var content = {}
    content['rank'] = document.getElementById("rank-text").value;
    content['peak'] = document.getElementById("peak-text").value;
    content['elevation'] = document.getElementById("elevation-text").value;
    content['state'] = document.getElementById("state-text").value;
    content['range'] = document.getElementById("range-text").value;
    $.ajax(url + "peaks/",
            { success: $('.data-message').toggle(300).delay(3000).toggle(300),
              type: "POST",
              data: content });
    $('#rank-text').val('');
    $('#peak-text').val('');
    $('#elevation-text').val('');
    $('#range-text').val('');
    $('#state-text').val('');
}
