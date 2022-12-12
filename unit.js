  $(document).ready(function(){
    var first = 2;
    function changeImage() {
        if (first > $(".location").data('target')) {
           first = 2
        } else if (first < 1) {
           first = $(".location").data('target');
        }
        $(".picture").attr("src","assets/house" + $(".location").data('num') + '-' + first + ".webp");
      }
  $("#right").click(function(){
    first = first + 1;
    changeImage();
  })

  $("#left").click( function(){
    first -= 1;
    changeImage();
  })
})