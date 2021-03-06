$(function () {
  $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 70) {
      $('.navbar').addClass('fixed-top');
    }
    if (scrollValue < 70) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  $('.slick-car').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000
  });
  $('.category-carousel').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });

  $('.trending-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 6,
    arrows: true,
    
    responsive: [
      {
        breakpoint: 886,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });
  $('.movie-category-carousel').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
  });

  // range slider
  $('input[type="range"]').change(function () {

    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    console.log($(this)[0].value);
    $('#ratingValue').text($(this)[0].value);

    $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + val + ', #ffc107), ' +
      'color-stop(' + val + ', #C5C5C5)' +
      ')'
    );
  });

  $('.btn-category').click(function() {
    $(this).toggleClass('active');
  });

  $('.movie-wrap').click(function(){
    const parent =  $(this).closest('.trending-items');
    parent.find('.movie-des').addClass('show');
  });
  $('#close').click(function(){
    const parent =  $(this).closest('.trending-items');
    parent.find('.movie-des').removeClass('show');
  });

});