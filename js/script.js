var Buzz={};

Buzz.init=function(){
  document.getElementById("btn").addEventListener("click", Buzz.showVideo);
}

Buzz.showVideo=function(){
  document.getElementById("btn-container").style.display="none";
  document.getElementById("video-container").style.display="block";
  var video = document.getElementById("myvideo");
  var h=window.innerHeight;
  var w=window.innerWidth;
  video.style.height=h+"px";
  video.style.width=w+"px";
  console.log(h);
  video.play();
  setTimeout(function(){
    document.getElementById("second-button").style.display="inline-block";
  }, 65000);
}

Buzz.init();
