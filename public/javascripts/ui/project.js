$(document).ready(function() {
    
    $('#createproj').on('click', function() {
        if($('#projform').hasClass('invisible')) {
            $('#projform').removeClass('invisible')
            $('#projform').addClass('visible')
        }
        else {
            $('#projform').removeClass('visible')
            $('#projform').addClass('invisible')
        }
    })

    $('#closeform').on('click', function() {
        $('#projform').removeClass('visible')
        $('#projform').addClass('invisible')
    })
})