var Buzz={};

Buzz.init=function(){
  document.getElementById("btn").addEventListener("click", Buzz.showVideo);
  //document.getElementById("second-button").addEventListener("click", Buzz.showDiary);
}

Buzz.showVideo=function(){
  document.getElementById("btn-container").style.display="none";
  document.getElementById("video-container").style.display="block";
  var video = document.getElementById("myvideo");
  video.play();
  setTimeout(function(){
    document.getElementById("second-button").style.display="inline-block";
  }, 5000);
}

Buzz.showDiary=function(){
  console.log("I am in modal");
  $("#myModal").show();
  console.log("I am in modal");
}

Buzz.init();
