$(function () {
  $(".xuong,.kn").click(function () {
    $("body,html").animate({ scrollTop: $("#khoiedu").offset().top }, 700);
    return false;
  });
  $(".sp").click(function () {
    $("body,html").animate({ scrollTop: $("#dam-me").offset().top }, 700);
    return false;
  });

  $(".cm").click(function () {
    $("body,html").animate({ scrollTop: $("#phanhoi").offset().top }, 700);
    return false;
  });

  $(".tt").click(function () {
    $("body,html").animate({ scrollTop: $("#thongtin").offset().top }, 700);
    return false;
  });
  $(".ht").click(function () {
    $("body,html").animate({ scrollTop: $("#ok_ht").offset().top }, 700);
    return false;
  });
  $(".mt").click(function () {
    $("body,html").animate({ scrollTop: $("#ok_mt").offset().top }, 700);
    return false;
  });

 


  
  
});



