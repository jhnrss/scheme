$(document).ready(function() {
    
    $('#use').on('click', function() {
        if($('#query').hasClass('invisible')) {
            $('#query').removeClass('invisible')
            $('#query').addClass('visible')
        }
        else {
            $('#query').removeClass('visible')
            $('#query').addClass('invisible')
        }
    })

    $('#search').on('click', function() {
        if($('#results').hasClass('invisible')) {
            $('#results').removeClass('invisible')
            $('#results').addClass('visible')
            $('#search').addClass('disabled')
            $('#querytext').addClass('disabled')
        }
    })
    
    if($('#search').hasClass('disabled')) {
        $('#searchwarn').removeClass('invisible')
    }

    $('#closeres').on('click', function() {
        $('#results').removeClass('visible')
        $('#results').addClass('invisible')
        $('#search').removeClass('disabled')
        $('#querytext').removeClass('disabled')
    })
})