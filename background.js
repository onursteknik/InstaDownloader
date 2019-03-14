$("head").append('<style>.InDwButton{margin: 0 auto; font-size: 12px; padding: 10px; font-weight:bold; display: block; cursor:pointer; background-color: #009ac9; border: 1px solid transparent; color: #ffffff; -webkit-border-radius: 3px; border-radius: 3px; -webkit-transition: all 0.3s ease-in-out; -moz-transition: all 0.3s ease-in-out; transition: all 0.3s ease-in-out;} .InDwButton:hover{background-color: #ffffff; color: #009ac9; border-color: #009ac9;}</style>')

function InDwGetImages() {
  $("article").each(function (i, v) {
    if ($(v).find("span.videoSpritePlayButton").length > 0) {

      if ($(v).find("div.coreSpriteRightChevron").length > 0 || $(v).find("div.coreSpriteLeftChevron").length > 0) {
        var liList = $(v).find('div:nth-child(2) > div > div ul li');
        $.each(liList, function (a, b) {
          if ($(b).find("video").length > 0) {
            if ($(b).find("video").parent().find("a").length <= 0) {
              var vd = $(b).find("video");
              var src = vd.attr("src");
              vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
            }
            else if ($(b).find("img").parent().find("a").attr("href") == "undefined") {
              var vd = $(b).find("img");
              var src = vd.attr("src");
              vd.parent().find("a").remove();
              vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
            }
          }
        });
      }
      else {
        var vd = $(v).find("div:nth-child(2) > div > div > div > div > div video");
        var src = vd.attr("src");
        if (vd.parent().find("a").length <= 0) {
          vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
        }
      }
    }
    else {
      if ($(v).find("div.coreSpriteRightChevron").length > 0 || $(v).find("div.coreSpriteLeftChevron").length > 0) {
        var liList = $(v).find('div:nth-child(2) > div > div ul li');
        $.each(liList, function (a, b) {
          if ($(b).find("img").length > 0) {
            if ($(b).find("img").parent().find("a").length <= 0) {
              var img = $(b).find("img");
              var src = img.attr("src");
              img.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
            }
            else if ($(b).find("img").parent().find("a").attr("href") == "undefined") {
              var img = $(b).find("img");
              var src = img.attr("src");
              img.parent().find("a").remove();
              img.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
            }
          }
        });
      }
      else {
        var img = $(v).find("div:nth-child(2) > div > div > div img");
        var src = $(v).find("div:nth-child(2) > div > div > div img").attr("src");

        if (img.parent().find("a").length <= 0) {
          $(v).find("div:nth-child(2) > div > div > div img").parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
        }
      }
    }
  });
}
function InDwGetProfileImages(e) {
  console.log("deneme");
  var v = $(e);
  console.log(v);

  if (v.find("span.videoSpritePlayButton").length > 0) {

    if (v.find("div.coreSpriteRightChevron").length > 0 || v.find("div.coreSpriteLeftChevron").length > 0) {
      var liList = v.find('div:nth-child(2) > div > div ul li');
      $.each(liList, function (a, b) {
        if ($(b).find("video").length > 0) {
          if ($(b).find("video").parent().find("a").length <= 0) {
            var vd = $(b).find("video");
            var src = vd.attr("src");
            vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
          }
          else if ($(b).find("img").parent().find("a").attr("href") == "undefined") {
            var vd = $(b).find("img");
            var src = vd.attr("src");
            vd.parent().find("a").remove();
            vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
          }
        }
      });
    }
    else {
      var vd = v.find("div:nth-child(2) > div > div > div > div > div video");
      var src = vd.attr("src");
      if (vd.parent().find("a").length <= 0) {
        vd.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="video.mp4">İndir</a>');
      }
    }
  }
  else {
    if (v.find("div.coreSpriteRightChevron").length > 0 || v.find("div.coreSpriteLeftChevron").length > 0) {
      var liList = v.find('div:nth-child(2) > div > div ul li');
      $.each(liList, function (a, b) {
        if ($(b).find("img").length > 0) {
          if ($(b).find("img").parent().find("a").length <= 0) {
            var img = $(b).find("img");
            var src = img.attr("src");
            img.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
          }
          else if ($(b).find("img").parent().find("a").attr("href") == "undefined") {
            var img = $(b).find("img");
            var src = img.attr("src");
            img.parent().find("a").remove();
            img.parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
          }
        }
      });
    }
    else {
      var img = v.find("div:nth-child(2) > div > div > div img");
      var src = v.find("div:nth-child(2) > div > div > div img").attr("src");

      if (img.parent().find("a").length <= 0) {
        v.find("div:nth-child(2) > div > div > div img").parent().append('<a class="InDwButton" target="_blank" style="z-index:1;top:10px;right:10px;position:absolute;" href="' + src + '" download="img.png">İndir</a>');
      }
    }
  }
}

setTimeout(function () {
  if (document.location.href == "https://www.instagram.com" || document.location.href == "https://www.instagram.com/") {
    InDwGetImages();
  }
}, 1000);

$(document).scroll(function () {
  if (document.location.href == "https://www.instagram.com" || document.location.href == "https://www.instagram.com/") {
    InDwGetImages();
  }
});

$(document).click(function (event) {
  var cl = $(event.target).attr("class");
  cl = cl.trim();
  if (cl == "coreSpriteRightChevron" || cl == "coreSpriteLeftChevron") {
    if (document.location.href == "https://www.instagram.com" || document.location.href == "https://www.instagram.com/") {
      InDwGetImages();
    }
    else {
      setTimeout(function () {
        InDwGetProfileImages("body > div._2dDPU.vCf6V > div.zZYga > div > article");
        console.log($("body > div._2dDPU.vCf6V > div.zZYga > div > article"));
      },800);
    }
  }
  else if (cl == "Ln-UN") {
    setTimeout(function () {
      InDwGetProfileImages("body > div._2dDPU.vCf6V > div.zZYga > div > article");
      console.log($("body > div._2dDPU.vCf6V > div.zZYga > div > article"));
    },800);
  }
});