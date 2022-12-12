$(document).ready(function(){
    var first = 1;
    function changeImage() {
        if (first > 6) {
           first = 1
        } else if (first < 1) {
           first = 6
        }
        $(".picture").attr("src","assets/house" + first + ".html");
      }
  $(".picture").click(function(){
    $(location).attr('href', "house" +  + first + ".html")
  })
  $("#right").click(function(){
    first = first + 1;
    changeImage();
  })

  $("#left").click( function(){
    first -= 1;
    changeImage();
  })
})