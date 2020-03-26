$(document).ready(function() {
    $('#searchproj').on('click', function() {
        if($('#projresults').hasClass('invisible')) {
            $('#projresults').removeClass('invisible')
            $('#projresults').addClass('visible')
            $('#projsearch').removeClass('visible')
            $('#projsearch').addClass('invisible')
        }
    })

    $('#closeres').on('click', function() {
        $('#projsearch').removeClass('invisible')
        $('#projsearch').addClass('visible')
        $('#projresults').removeClass('visible')
        $('#projresults').addClass('invisible')
    })
})