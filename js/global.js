    jQuery(function ($) {
        jQuery(document).ready( function() {
            $('#mobile-menu').mmenu({
                "extensions": [
                    "effect-menu-zoom",
                    "pagedim-black"
                ]
            });
//            var acc = $(".agency-recurring-accordion");
//            var i;
//            for (i = 0; i < acc.length; i++) {
//                $(acc[i]).on('click',function(){
//                    $(this).toggleClass('active');
//                    $(this).next().toggleClass('show');
//                });
//            }
            $(document).ready(function() {
                function close_accordion_section() {
                    $('.accordion .accordion-section-title').removeClass('active');
                    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                }

                $('.accordion-section-title').click(function(e) {
                    // Grab current anchor value
                    var currentAttrValue = $(this).attr('href');

                    if($(e.target).is('.active')) {
                        close_accordion_section();
                    }else {
                        close_accordion_section();

                        // Add active class to section title
                        $(this).addClass('active');
                        // Open up the hidden content panel
                        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                    }

                    e.preventDefault();
                });
            });



            // Populate select dropdown
            $('#parts-column a.parts').each(function(){
                $('#far_parts_mobile, #gsam_parts_mobile').append('<option value="'+$(this).html()+'">Part '+$(this).html()+'</option>');
            });

            // Manually click FAR part button when select change
            $('#far_parts_mobile, #gsam_parts_mobile').on('change',function(){
                var partlink = $(this).val();
                $('#parts-column a.parts').each(function(i){
                    var num = $(this).html();
                    if(partlink == num){
                        $('#parts-column a.parts')[i].click();
                    }
                    else if(partlink == 'farindex'){
                        $('#browsefarinternal')[0].click();
                    }
                    else if(partlink == 'gsamindex'){
                        $('#browsegsaminternal')[0].click();
                    }
                    else if(partlink == 'table_content'){
                        $('#table_content')[0].click();
                    }
                });
            });



            var fired = false;
            $('.view-archives tbody .views-field-title').on('click',function(){
                fired = true;

                var width = $(window).width();
                if(width<980){
                    $(this).parent().siblings().find('.views-field-title').removeClass('activeRow');
                    $(this).parent().siblings().find('.views-field-title .pdf-zip-wrapper').remove();
                    if( $(this).hasClass('activeRow') ){
                        $(this).find('.pdf-zip-wrapper').remove();
                        $(this).removeClass('activeRow');
                    }
                    else{
                        var pdfLink = $(this).parent().find('.views-field-field-pdf-file').html();
                        var zipLink = $(this).parent().find('.views-field-field-zip-file').html();
                        $(this).addClass('activeRow');
                        $(this).append('<div class="pdf-zip-wrapper"><div class="pdf-wrapper">'+pdfLink+'</div><div class="zip-wrapper">'+zipLink+'</div></div>');

                    }
                }
            }).on('click', '.pdf-zip-wrapper', function(e) { // clicked on descendant div
                e.stopPropagation();
            });
            $(document).ajaxStop(function(){
                fired = false;
            });
            $(document).ajaxStop(function(){
                // to make the code excutable if user uses pagination or filter (ajax call)
                $('.view-archives tbody .views-field-title').on('click',function(){
                    // alert('aa='+fired);
                    if(!fired){
                        var width = $(window).width();
                        if(width<980){
                            $(this).parent().siblings().find('.views-field-title').removeClass('activeRow');
                            $(this).parent().siblings().find('.views-field-title .pdf-zip-wrapper').remove();
                            if( $(this).hasClass('activeRow') ){
                                $(this).find('.pdf-zip-wrapper').remove();
                                $(this).removeClass('activeRow');
                            }
                            else{
                                var pdfLink = $(this).parent().find('.views-field-field-pdf-file').html();
                                var zipLink = $(this).parent().find('.views-field-field-zip-file').html();
                                $(this).addClass('activeRow');
                                $(this).append('<div class="pdf-zip-wrapper"><div class="pdf-wrapper">'+pdfLink+'</div><div class="zip-wrapper">'+zipLink+'</div></div>');
                            }
                        }
                    }//aa
                }).on('click', '.pdf-zip-wrapper', function(e) { // clicked on descendant div
                    e.stopPropagation();
                });

            });



            // Search Filters in Modal

            // Excute when user change window size
            $(window).resize(function(){
                var width = $(window).width();
                if(width<980){
                    $('#filtersModal .modal-content').append( $('.filter-sidebar') );
                }
                else{
                    $('#main-content-internal').append( $('.filter-sidebar') );
                }
            });

            // Excute on page load
            var width = $(window).width();
            if(width<980){
                // move side filters inside modal only if exists, otherwise, remove filter button from mobile
                if ( $('.filter-sidebar').length > 0 ) {
                    $('#filtersModal .modal-content').append( $('.filter-sidebar') );
                }
                else{
                    //$('#show_filters').remove();
                    $('#filtersModal .modal-content').append( $('.apachesolr-browse-blocks') );
                }
                // In desktop, move side filter back to it's position
            }
            else{
                $('#main-content-internal').append( $('.filter-sidebar') );
            }

            var modal = document.getElementById('filtersModal');
            // Display modal
            $('#show_filters').on('click',function(){
                $('#filtersModal').show();
            })
            // Hide modal when click X
            $('.modal-content .close').on('click',function(){
                $('#filtersModal').hide();
            })
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            /*landing page carousel*/
            $('#landing-slider').slick({
                dots:           true,
                speed:          800,
                autoplaySpeed:  3000,
                autoplay:       true,
                dotsClass:      'landing-slider-dots',
                prevArrow:      '<button type="button" class="slick-prev custom-prev">Previous</button>',
                nextArrow:      '<button type="button" class="slick-next custom-next">Next</button>'
            });
            if($('body').hasClass('page-search')){

                // Checkbox styling solution for search results page

                $('.page-search .block-facetapi input[type=checkbox], #advanced-search-type input[type=checkbox]').each(function() {
                    var span = $('<span class="' + $(this).attr('type') + ' ' + $(this).attr('class') + '"></span>').click(doCheck);
                    if ($(this).is(':checked')) {
                        span.addClass('checked');
                    }
                    $(this).wrap(span).addClass('hide_it');
                });
                function doCheck() {
                    if ($(this).hasClass('checked')) {
                        $(this).removeClass('checked');
                        $(this).children().prop("checked", false);
                    } else {
                        $(this).addClass('checked');
                        $(this).children().prop("checked", true);
                    }
                }


            }
            if($('body').is('.page-gsam-archives, .page-far-archives, .page-far-looseleaf, .page-gsam-looseleaf')){
                $('#edit-title-wrapper').after('<p>OR</p>');

                /*Adds the 'OR' after AJAX is fired and content is loaded*/
                Drupal.behaviors.loadAfterAjax = {
                    attach: function() {
                        $('#edit-title-wrapper').once().after('<p>OR</p>');
                    }
                }
            };
            $("#close_box").click(function() {
                $('#cboxClose').click();
                $( "#parts-column" ).css( "display","block" );
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    $( "#parts-column" ).css( "display","block" );
                }
            });
            $("#open_box").click(function() {
                if ($('#parts-column').css('display') == 'block'){
                    $( "#parts-column" ).css( "display","none" );
                    $("#browse").removeClass('small');
                }
            });
            $( "#far-image" ).click(function() {
                $( "#parts-column" ).toggle( "slide" );
                var src = $("#far-OC").attr('src') == "../sites/all/themes/acquisition/images/far-part-open.png" ? "../sites/all/themes/acquisition/images/far-part-closed.png" : "../sites/all/themes/acquisition/images/far-part-open.png";
                var alt = $("#far-OC").attr('alt') == "View Parts" ? "Hide Parts" : "View Parts";
                var title = $("#far-OC").attr('title') == "View Parts" ? "Hide Parts" : "View Parts";
                $("#far-OC").attr('src', src);
                $("#far-OC").attr('alt', alt);
                $("#far-OC").attr('title', title);
                $("#browse").toggleClass('small');
            });
            $( "#gsam-image" ).click(function() {
                $( "#parts-column" ).toggle( "slide" );
                var src = $("#gsam-OC").attr('src') == "../sites/all/themes/acquisition/images/far-part-open.png" ? "../sites/all/themes/acquisition/images/gsam-part-closed.png" : "../sites/all/themes/acquisition/images/gsam-part-open.png";
                var alt = $("#gsam-OC").attr('alt') == "View Parts" ? "Hide Parts" : "View Parts";
                var title = $("#gsam-OC").attr('title') == "View Parts" ? "Hide Parts" : "View Parts";
                $("#gsam-OC").attr('src', src);
                $("#gsam-OC").attr('alt', alt);
                $("#gsam-OC").attr('title', title);
                $("#browse").toggleClass('small');
            });


               // $("#nice-menu-1").append('<li class="show_bookmark"><a class="view_bookmark"><span class="viewBookmark"><img src="sites/all/themes/acquisition/images/bookmark-far.png" alt="View Bookmarks" title="View Bookmarks" /></span></a></li>');
                $(".block-favorites").append('<div class="close_bookmark"><a class="bookmark_close"><span><img src="sites/all/themes/acquisition/images/close-bookmark.png" alt="Close Bookmarks" title="Close Bookmarks" /></span></a></div>');

            $("#addBookmark").click(function() {
                            Drupal.favorites.add();
                            $(function(){
                                $("#infor").show().fadeIn(1000);
                                setTimeout(function(){
                                    $("#infor").show().fadeOut(1000, function(){
                                       // location.reload(true);
                                    });
                                }, 1000);
                            });

                        });
            $(".close_bookmark").click(function() {
                $( ".block-favorites" ).toggle();
            });

            $(".favorites-remove").click(function() {
                $("#rmBookmark").show().delay(2000).fadeOut();
            });
            setTimeout(function () {
                $(".view_bookmark").click(function() {
                    $( ".block-favorites" ).toggle();
                }),2000});
                jQuery('a.part').each(function(){
                    if( jQuery(this).attr('id')=='far_part' ){
                        jQuery(this).removeAttr('id');
                        jQuery(this).attr('class','far_part');
                    }            
                });
        });
    });
    jQuery(document).ready(function() {

        if( jQuery('.page-search #main-content-wrapper h2').html() == null ){
            jQuery('#show_filters').hide();
        }
        if (jQuery('.apachesolr-browse-blocks>h2').text()==='Browse available categories'){
            jQuery('<div class="messages error"><h2 class="element-invisible">Error message</h2>Please enter some keywords.</div>').insertAfter(".apachesolr-browse-blocks");
            jQuery('#show_filters').hide();
        }
        jQuery( ".page-gsam-looseleaf .view-header" ).insertAfter( "#views-exposed-form-loose-leafs-page-1 > div" );
        jQuery( ".page-far-looseleaf .view-header" ).insertAfter( "#views-exposed-form-loose-leafs-page > div" );
        jQuery( document ).ajaxComplete(function() {
            jQuery( ".page-gsam-looseleaf .view-header" ).insertAfter( "#views-exposed-form-loose-leafs-page-1 > div" );
        });
        jQuery( document ).ajaxComplete(function() {
            jQuery( ".page-far-looseleaf .view-header" ).insertAfter( "#views-exposed-form-loose-leafs-page > div" );
        });
    });


    (function ($) {
        Drupal.behaviors.acquisitionresponsiveThemeAutocomplete = {
            attach: function (context, settings) {

                Drupal.jsAC.prototype.found = function (matches) {

                    if (!this.input.value.length) {
                        return false;
                    }


                    var ul = $('<ul></ul>');
                    var ac = this;
                    var i =0;
                    for (key in matches) {
                        $('<li></li>')
                            .html($('<div></div>').html(matches[key]))
                            .mousedown(function () { ac.hidePopup(this); })
                            .mouseover(function () { ac.highlight(this); })
                            .mouseout(function () { ac.unhighlight(this); })
                            .addClass(i%2 == 0 ? "ac_even" : "ac_odd")
                            .data('autocompleteValue', key)
                            .appendTo(ul);
                        i++;
                    }


                    if (this.popup) {
                        if (ul.children().length) {
                            $(this.popup).empty().append(ul).show();
                            $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
                        }
                        else {
                            $(this.popup).css({ visibility: 'hidden' });
                            this.hidePopup();
                        }
                    }
                };

            }
        };
    })(jQuery);