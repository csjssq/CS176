var menu = document.querySelector('.channel');
  var srcOffsetTop = menu.offsetTop;
  // console.log(srcOffsetTop);
  function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset; } else if (document.compatMode && document.compatMode != 'BackCompat') { scrollPos = document.documentElement.scrollTop; } else if (document.body) { scrollPos = document.body.scrollTop;
    }
    return scrollPos;
   }
  function menuScroll(){
    var menuTop = getScrollTop();
    // console.log(menuTop);
    if(menuTop>menu.offsetTop && menu.offsetTop !=0){
      menu.style.position = "fixed";
      menu.style.top = "0";
    }else if(menuTop<srcOffsetTop){
      menu.style.top = "";
      menu.style.position = "static";
    }
  };
  $(function() {
    
    var t = "0";
    var a = "0";
    var list = "";
    // for (var i = 0; i < 5; i++) {
    //   t++;
    //   list += '<li>' + t + '</li>'
    // }
    $(".list ul").html(list);
    window.addEventListener('scroll', function() {
      if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
        $("#loading").show();
        if (a >= 10) {
          $("#loading").text("我是有底线的")
        } else {
          setTimeout(function() {
            loading();
          }, 10);
        }

      }
    });
    
    function getDateDiff(dateTimeStamp){
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if(diffValue < 0){return;}
      var monthC =diffValue/month;
      var weekC =diffValue/(7*day);
      var dayC =diffValue/day;
      var hourC =diffValue/hour;
      var minC =diffValue/minute;
      if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
      }
      else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
      }
      else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
      }
      else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
      }
      else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
      }else
      result="刚刚";
      return result;
    }

    function loading() {
      var listtwo = "";
      var wantto = "";
        $.ajax({
            //请求方式
            type:"GET",
            //文件位置
            url:"result.json",
            //返回数据格式为json,也可以是其他格式如
            dataType: "json",
            //请求成功后要执行的函数，拼接html
            success: function(data){
            console.log(a-1);
            console.log(data.data[a-1].title);
            var title =data.data[a-1].title;
            console.log(title);
            listtwo += "<li>" + title+ "</li>";
            if(data.data[a-1].single_mode == true){
              console.log("success");
              wantto+="<div class='single-mode'><div class='single-mode-lbox'>"
                     + "<a class='img-wrap' href='#'>"
                     + "<img src='"+data.data[a-1].middle_image+"' class='lazy-load-img'></a>"
                     + "</div>"
                     + "<div class='single-mode-rbox'><div class='single-mode-rbox-inner'>"
                     + "<div class='title-box'><a class='link' href='#'>"
                     + data.data[a-1].title
                     + "</a></div>"
                     + "<div class='footer-bar'><div class='footer-bar-left'>"
                     + "<a class='footer-bar-action tag tag-style-other' href='#'>"
                     + data.data[a-1].chinese_tag 
                     + "</a><a class='footer-bar-action media-avatar' href='#'><img src='"
                     + data.data[a-1].media_avatar_url
                     + "'</img></a><a class='footer-bar-action source' href='#'>&nbsp;"
                     + data.data[a-1].source
                     + "&nbsp;</a><a class='footer-bar-action source' href='#'>&nbsp;"
                     + data.data[a-1].comments_count+"评论"
                     + "</a><span class='footer-bar-action time' href='#'>&nbsp;&nbsp;";
              // 对时间戳操作
              var timestamp = data.data[a-1].behot_time;
              var newDate = new Date();
              newDate.setTime(timestamp*1000);
              time = newDate.toLocaleString(); //准确时间
              be_time = getDateDiff(timestamp*1000);
              wantto+= be_time+"</span><span class='footer-bar-action time' href='#'>&nbsp;发布时间&nbsp;"
                     + time
                     + "</span></div><div class='footer-bar-right'><div class='action-dislike'><i class='bui-icon icon-close-small'></i>不感兴趣"
              //        + "</div></div></div></div></div></div>"
                    //  + ""
            }else{
              console.log("failed");
              wantto+="<div class='no-mode'>"
                     + "<div class='title-box'><a class='link' href='#'>"
                     + data.data[a-1].title
                     + "</a></div>"
                     + "<div class='footer-bar'><div class='footer-bar-left'>"
                     + "<a class='footer-bar-action tag tag-style-other' href='#'>"
                     + data.data[a-1].chinese_tag 
                     + "</a><a class='footer-bar-action media-avatar' href='#'><img src='"
                     + data.data[a-1].media_avatar_url
                     + "'</img></a><a class='footer-bar-action source' href='#'>&nbsp;"
                     + data.data[a-1].source
                     + "&nbsp;</a><a class='footer-bar-action source' href='#'>&nbsp;"
                     + data.data[a-1].comments_count+"评论"
                     + "</a><span class='footer-bar-action time' href='#'>&nbsp;&nbsp;";
              // 对时间戳操作
              var timestamp = data.data[a-1].behot_time;
              var newDate = new Date();
              newDate.setTime(timestamp*1000);
              time = newDate.toLocaleString(); //准确时间
              be_time = getDateDiff(timestamp*1000);
              wantto+= be_time+"</span><span class='footer-bar-action time' href='#'>&nbsp;发布时间&nbsp;"
                     + time
                     + "</span></div><div class='footer-bar-right'><div class='action-dislike'><i class='bui-icon icon-close-small'></i>不感兴趣"
            }
            // wantto+="<div"
            $(".list ul").append(wantto);
            }
        });
        a++;
        
    }

  });