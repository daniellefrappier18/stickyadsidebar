$(document).ready(function() {
    function sidebarScroll(){
      var tmpWindow = $(window);
      var wrapper = $('.main').height();
      var content = $('.content').outerHeight();
      var header = $('header').height();
      var sidebar = $('#sidebar');
      var offsetTop;
      var offsetBottom;

      if ( sidebar )
      {
          var sidebarOffset = sidebar.offset();

          if ( sidebarOffset )
          {
            offsetTop = sidebarOffset.top;

            tmpWindow.scroll( function(){
                var sidebarWithpadding =  sidebar.height() + 35;
                offsetBottom = (wrapper + header) - sidebarWithpadding;

                if ( tmpWindow.scrollTop() < offsetTop )
                {
                  sidebar.removeClass('fixed bottom');
                }
                else if ( tmpWindow.scrollTop() > offsetBottom )
                {
                  sidebar.removeClass('fixed').addClass('bottom');
                }
                else
                {
                  sidebar.removeClass('bottom').addClass('fixed');
                }

                // For when the post content is smaller than the sidebar
                if ( content < 1500 )
                {
                    sidebar.addClass('small');
                } 
              }
              );
            
          }
        }
    }
sidebarScroll();
});
