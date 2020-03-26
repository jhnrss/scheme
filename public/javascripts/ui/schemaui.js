$(document).ready(function() {
    
    $('#useschema').on('click', function() {
        if($('#schemasearch').hasClass('invisible')) {
            $('#schemasearch').removeClass('invisible')
            $('#schemasearch').addClass('visible')
        }
        else {
            $('#schemasearch').removeClass('visible')
            $('#schemasearch').addClass('invisible')
        }
    })

    $('#searchschema').on('click', function() {
        if($('#schemaresults').hasClass('invisible')) {
            $('#schemaresults').removeClass('invisible')
            $('#schemaresults').addClass('visible')
            $('#searchschema').addClass('disabled')
        }
    })
    
    if($('#searchschema').hasClass('disabled')) {
        $('#searchwarn').removeClass('invisible')
    }

    $('#closeres').on('click', function() {
        $('#schemaresults').removeClass('visible')
        $('#schemaresults').addClass('invisible')
        $('#searchschema').removeClass('disabled')
    })
})