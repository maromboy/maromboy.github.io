function get_precinct_html(properties){
    var html = '<div style="width: 150px;">'
    html += '<div style="text-align: center; background-color:grey; color:white;">'
    html += '<strong> Precinct - ' + properties.PRECINCT + '</strong></div>'
    html += 'Township: ' + properties.TOWNSHIP 
    html += '<br> Committee Capitan: '  + properties.CAPITAN 
    html += '<br> Seats Filled: '  + properties.FILLED 
    html += '<br> Seats Vacant: '  + properties.VACANT 
    html += '</div> '
    return html
};

function get_district_html(properties){
    var html = '<div style="width: 150px;">'
    html += '<div style="text-align: center; background-color:purple; color:white;">'
    html += '<strong>' +  properties.DISTRICT + '</strong></div>'
    html +=  'Supervisor: ' + properties.ASSEMBLYPE + '</div>'

    return html
};