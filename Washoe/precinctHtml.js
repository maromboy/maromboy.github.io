function get_precinct_html(e){
    var html = '<div style="width: 150px;">'
    html = html+ '<div style="text-align: center; background-color:grey; color:white;">'
    html = html + '<strong> Precinct - '+e.features[0].properties.PRECINCT + '</strong></div>'
    html = html + '<br> Township: ' + e.features[0].properties.TOWNSHIP 
    html = html + '<br> Committee Capitan: '  + e.features[0].properties.CAPITAN 
    html = html + '<br> Seats Filled: '  + e.features[0].properties.FILLED 
    html = html + '<br> Seats Vacant: '  + e.features[0].properties.VACANT 
    
    html = html + '</div> '
    return html
};