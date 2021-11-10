function get_precinct_html(e){
    var html = '<div style="width: 150px;">'
    html += '<div style="text-align: center; background-color:grey; color:white;">'
    html += '<strong> Precinct - '+e.features[0].properties.PRECINCT + '</strong></div>'
    html += '<br> Township: ' + e.features[0].properties.TOWNSHIP 
    html += '<br> Committee Capitan: '  + e.features[0].properties.CAPITAN 
    html += '<br> Seats Filled: '  + e.features[0].properties.FILLED 
    html += '<br> Seats Vacant: '  + e.features[0].properties.VACANT 
    html += '</div> '
    return html
};