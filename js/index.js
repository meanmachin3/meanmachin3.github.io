$(document).ready(function() {
            $('#myContainer').multiscroll({
            	sectionsColor: ['#4C6085', '#39A0ED', '#36F1CD'],
            	//anchors: ['first', 'second', 'third'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['Home', 'Projects', 'Resume'],
            	loopBottom: true,
            	loopTop: true
            });

            $('.ms-section').mouseenter(function(){
                $(this).find('.ms-overlay').fadeIn(1000);
            })
            $('.ms-section').mouseleave(function(){
                $('.ms-overlay').fadeOut(500);
            })

         });
