
 
 
  $(document).ready(function() {
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function() {
      $videoSrc = $(this).attr("data-src");
      console.log("button clicked" + $videoSrc);
    });
  
    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function(e) {
      console.log("modal opened" + $videoSrc);
      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
      );
    });
  
    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function(e) {
      // a poor man's stop video
      $("#video").attr("src", $videoSrc);
    });
  
    // document ready
  });
 
 const api_url ='https://api.covidtracking.com/v1/us/current.json';     
  fetchData();
  async function fetchData(){
      const resposne =  await fetch(api_url);
      const data = await resposne.json();
      console.log(data);
      document.getElementById('death').textContent=numberWithCommas(data[0].death);
      document.getElementById('recovered').textContent=numberWithCommas(data[0].hospitalized);
      document.getElementById('positive').textContent=numberWithCommas(data[0].positive);
      
  }
  function numberWithCommas(x) {
    console.log(x);
     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }



 