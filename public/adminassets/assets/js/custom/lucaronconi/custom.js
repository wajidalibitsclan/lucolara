/**
 * Created by matteobarale on 30/11/16.
 */



$(document).ready(function(){

    $('#add_media').on('click', function (e) {
        e.preventDefault();
        console.log('click');
        var modal = UIkit.modal("#add_media_modal");

        if ( modal.isActive() ) {
            modal.hide();
        } else {
            modal.show();
            $('#tipologia_media').on('change', function () {
                if($(this).val() == 'photo'){
                    $('#immagine_media').show();
                    $('#link_media').hide();
                }
                if($(this).val() == 'link'){
                    $('#immagine_media').hide();
                    $('#link_media').show();
                }
                if($(this).val() == ''){
                    $('#immagine_media').hide();
                    $('#link_media').hide();
                }
            });
        }
    })


    $('.save_media').on('click', function(e){
        e.preventDefault();
        console.log($('form#addMediaForm'));
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $("input[name='_token']").val()
            }

        })
        var urlAction = $("input[name='urlPost']").val();

        var options = {
            //target:        '#output2',   // target element(s) to be updated with server response
            beforeSubmit:  showRequest,  // pre-submit callback
            success:       showResponse,  // post-submit callback

            // other available options:
            url:       urlAction,        // override for form's 'action' attribute
            type:      'post',        // 'get' or 'post', override for form's 'method' attribute
            //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
            clearForm: true,        // clear all form fields after successful submit
            resetForm: false        // reset the form after successful submit

            // $.ajax options can be used here too, for example:
            //timeout:   3000
        };


        // inside event callbacks 'this' is the DOM element so we first
        // wrap it in a jQuery object and then invoke ajaxSubmit
        $('form#addMediaForm').ajaxSubmit(options);


        function showRequest(formData, jqForm, options) {
            // formData is an array; here we use $.param to convert it to a string to display it
            // but the form plugin does this for you automatically when it submits the data
            var queryString = $.param(formData);

            // jqForm is a jQuery object encapsulating the form element.  To access the
            // DOM element for the form do this:
            // var formElement = jqForm[0];
            // here we could return false to prevent the form from being submitted;
            // returning anything other than false will allow the form submit to continue
            return true;
        }



        function showResponse(responseText, statusText, xhr, $form)  {
            $('#dragula_sortable').append(responseText);
            dragula([$('#dragula_sortable')]);
            UIkit.modal("#add_media_modal").hide();
            UIkit.notify({
                message : 'Immagine Salvata',
                status  : 'success',
                timeout : 5000,
                pos     : 'top-center'
            });
            // for normal html responses, the first argument to the success callback
            // is the XMLHttpRequest object's responseText property

            // if the ajaxSubmit method was passed an Options Object with the dataType
            // property set to 'xml' then the first argument to the success callback
            // is the XMLHttpRequest object's responseXML property

            // if the ajaxSubmit method was passed an Options Object with the dataType
            // property set to 'json' then the first argument to the success callback
            // is the json data object returned by the server
        }


    });







    $('.elimina_foto').click(function (event) {
        event.preventDefault();
        var idDiv = $(this).attr('data-id');
        UIkit.modal.confirm("Sei sicuro di voler eliminare la fotografia?", function(){
            $('#' + idDiv).remove();
        });

    });
    $('.edit_foto').click(function (event) {
        event.preventDefault();
        var idDiv = $(this).attr('data-id');
        var Titolo = $(this).attr('data-titolo');
        var urlAction = $(this).attr('data-url');
        var token = $(this).attr('data-token');
        UIkit.modal.prompt("Titolo immagine:", Titolo, function(newvalue){

            event.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': token
                }

            })
            var formData = {
                title : newvalue,
            }

            console.log(formData);

            $.ajax({

                type: 'POST',
                url: urlAction,
                data: formData,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                },
                error: function (data) {
                    console.log('Error:', data.responseText);
                }
            });
            $('#' + idDiv + 'etichetta_foto').text(newvalue);
        });





    });
    $('.edit_titolo_link').click(function (event) {
        event.preventDefault();
        var idDiv = $(this).attr('data-id');
        var Titolo = $(this).attr('data-titolo');
        var urlAction = $(this).attr('data-url');
        var token = $(this).attr('data-token');
        var element = $(this);
        UIkit.modal.prompt("Titolo Video:" + Titolo, Titolo, function(newvalue){

            event.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': token
                }

            })
            var formData = {
                title : newvalue,
            }

            $.ajax({

                type: 'POST',
                url: urlAction,
                data: formData,
                context : this,
                dataType: 'json',
                success: function (data) {
                    $('#' + data._id + 'etichetta_link').text(data.title);
                    $(element).attr('data-titolo', data.title);
                },
                error: function (data) {
                    console.log('Error:', data.responseText);
                }
            });
        });
    });

    $('.edit_codice_video').click(function (event) {
        event.preventDefault();
        var idDiv = $(this).attr('data-id');
        var codice = $(this).attr('data-codice');
        var urlAction = $(this).attr('data-url');
        var token = $(this).attr('data-token');
        var element = $(this);
        UIkit.modal.prompt("Codice Video:", codice, function(newvalue){

            event.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': token
                }

            })
            var formData = {
                youtubeCode : newvalue,
            }
            console.log(formData);
            $.ajax({

                type: 'POST',
                url: urlAction,
                data: formData,
                context : this,
                dataType: 'json',
                success: function (data) {

                    console.log(data);
                    var imageUrl =  'http://img.youtube.com/vi/' + data.youtubeCode + '/0.jpg';
                    $('#' + data._id + ' .video_back').css('background-image', 'url("' + imageUrl + '")');
                    $(element).attr('data-titolo', data.title);
                },
                error: function (data) {
                    console.log('Error:', data.responseText);
                }
            });
        });
    });

    $('.set_evidenza').click(function(event){
        event.preventDefault();

        var ImgId = $(this).attr('data-id');
        var ImgUrl = $(this).attr('data-url');
        UIkit.modal.confirm("Sei sicuro di voler impostare questa foto come immagine in evidenza?", function(){

            if ($("#immagine_in_evidenza_src" ).length ) {
                $('#immagine_in_evidenza_src').attr('src', ImgUrl);
            }else{
                var img = '<img id="immagine_in_evidenza_src" src="'+ ImgUrl +'">';
                $('#immagine_in_evidenza').append(img);
            }
            if ($("#immagine_in_evidenza_id" ).length ) {
                $('#immagine_in_evidenza_id').attr('value', ImgId);
            }else{
                var input = '<input type="hidden" id="immagine_in_evidenza_id" name="immagine_in_evidenza_id" value="' + ImgId + '">';
                $('#immagine_in_evidenza').append(input);
            }
        });




    });


});

function modificaTermine(Termine){
    event.preventDefault();

    var termineId = $(Termine).attr('data-id');
    var termineNome = $(Termine).attr('data-termine').trim();
    var urlAction = $(Termine).attr('data-url');
    var token = $(Termine).attr('data-token');
    UIkit.modal.prompt("Termine:", termineNome, function(newvalue){
        event.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token
            }

        })
        var formData = {
            termine : newvalue,
        }
        console.log(formData);
        $.ajax({

            type: 'POST',
            url: urlAction,
            data: formData,
            context : this,
            dataType: 'json',
            success: function (data) {
                $('.personaggio_' + termineId).each(function() {
                    var newContent = newvalue;
                    var input = $(this).find('input');
                    newContent += input[0]
                    $(this).text(newvalue);
                    $(this).append(input);
                });
            },
            error: function (data) {
                console.log('Error:', data.responseText);
            }
        });
    });
}