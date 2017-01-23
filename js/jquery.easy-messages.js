/**
 * easy-messages.js jQuery Plugin
 * -----------------------------------------------
 * Author: Copyright (c) 2016 Dmitry Chursin
 * Version: 1.0.0
 * License: MIT
 * -----------------------------------------------
 */
(function($) {
  $.fn.extend({
    easymessages: function(options) {
      var
        control,
        controls,
        hideMessage,
        showMessage,
        removeMessage,
        defaults = {
          fadeSpeed: 500,
          messageText: 'easy-messages',
          messageClose: true,
          messageOpacity: 1
        },
        settings = $.extend({}, defaults, options);
      controls = $(this);
      showMessage = function(control, index) {
        if (settings.messageClose) {
          var closeButton = '<a class="close" href="#" title="close"></a>';
          $(closeButton).click(function(e) {
            control.animate({
              opacity: 0
            }, settings.fadeSpeed).slideUp(settings.fadeSpeed);
            e.preventDefault();
          }).prependTo(control.children('div'));
        } else
          control.children('div').css('padding', '12px');
        control.slideDown(settings.fadeSpeed).animate({
          opacity: settings.messageOpacity
        }, settings.fadeSpeed);
      }
      controls.each(function(index) {
        return showMessage($(this), index);
      });
    }
  });
})(jQuery);