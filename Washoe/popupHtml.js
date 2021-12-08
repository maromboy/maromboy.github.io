function get_precinct_html(properties){
    var html = '<div style="width: 150px;">'
    html += '<div style="text-align: center; background-color:grey; color:white;">'
    html += '<strong> Precinct - ' + properties.PRECINCT + '</strong></div>'
    html += 'Committee Capitan: '  + 'TBD'
    html += '<br> Phone: '  + '775-111-8888'
    html += '<br> <a href="mailto:someone@example.com">Send email</a>'
    html += '</div><br> '
    return html
};

function get_district_html(properties){
    var html = '<div style="width: 150px;">'
    html += '<div style="text-align: center; background-color:purple; color:white;">'
    html += '<strong>' +  properties.DISTRICT + '</strong></div>'
    html +=  'Supervisor: ' + properties.ASSEMBLYPE + '</div>'
    html +=  '<a href="' + properties.LINK + 'target=_blank">Contact</a>'

    return html
};