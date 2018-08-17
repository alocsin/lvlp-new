$('.filters-list a').on('click', function() {
  var filter = $(this).data('filter')

  console.log(filter)

  $('.all-projects').addClass('hidden')
  $(filter).removeClass('hidden')

  $('.all-projects').fadeOut(800)
  $(filter).delay(800).fadeIn(800)

  // this will add a class name of selected to the current filter link that we clicked on
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')

  // this blocks link from following the href
  return false
})

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out-up',
    inDuration: 800,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 0,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
