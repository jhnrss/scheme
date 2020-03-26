$(document).ready(function() {
    $('#searchproj').on('click', function() {
        if($('#projresults').hasClass('invisible')) {
            $('#projresults').removeClass('invisible')
            $('#projresults').addClass('visible')
            $('#searchproj').addClass('disabled')
        }
    })

    $('#closeres').on('click', function() {
        $('#projresults').removeClass('visible')
        $('#projresults').addClass('invisible')
        $('#searchproj').removeClass('disabled')
    })
})