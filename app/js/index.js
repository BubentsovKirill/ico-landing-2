var Layout = function(){
 
    var scrollPage = function(){
          var menu = $('.mobile-menu');
          $("#navigation-desc, #navigation-mob").on("click","a", function (event) {
            menu.css('display','none');
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate({scrollTop: top},1000);
        });
    }

    var navbarScroll = function(){
     var header = $('#navigation-desktop, #navigation-mobile'); 
     var headerHeigth = $('header').height();
     $(window).bind('scroll', function() {
          if ($(window).scrollTop() > headerHeigth) {
             $('header').removeClass('top').addClass('not-top');
             $('.black').css('display','none');
             $('.white').css('display','block');
          } else {
             $('header').removeClass('not-top').addClass('top');
             $('.black').css('display','block');
             $('.white').css('display','none');
          }
      });
    };

    var languagePopub = function(){
    	var button = $('.language a, .mobile-language');
    	var languagePopub = $('.language ul, .mobile-language-menu');
    	button.on('click', function(event){
    		event.preventDefault();
			languagePopub.fadeToggle(300);
    	})
    };

    var showMobileMenu = function(){
    	var button = $('.menu-button');
    	var menu = $('.mobile-menu');
    	button.on('click', function(){
    		menu.fadeToggle('fast');
    	})
    };

    var showCurrentVideo = function(){
        var useDivs = $('#block4 .discription');
        var videos = $('#block4 .video');
        useDivs.on('click', function(){
            var blockNumber = $(this).data('item');
            useDivs.each(function(index, el) {
                $(el).removeClass('active');
                if($(el).data('item') == blockNumber){
                    $(el).addClass('active');
                }
            });
            videos.each(function(index, item){
                item.style.display = 'none';
                if($(item).data('item') == blockNumber){
                    item.style.display = 'block';
                }
            });
        });
    };

    return {
      initScrollPage: function(){
        scrollPage();
      },
    	initShowMobileMenu: function(){
    		showMobileMenu();
    	},
      initScroll : function(){
        navbarScroll();
      },
      initLanguagePopub: function(){
      	languagePopub();	
      },
      initShowCurrentVideo: function(){
          showCurrentVideo();
      },
      init: function(){
          this.initScrollPage();
          this.initShowCurrentVideo();
        	this.initShowMobileMenu();
        	this.initLanguagePopub();
          this.initScroll();
      }
    }
}();