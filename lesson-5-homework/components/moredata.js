import {useState, useEffect} from 'react'

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
    var result="";
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

function timerelate(time){
    var newdata = new Date();
    newdata.setTime(time*1000);
    var acttime = newdata.toLocaleString();
    var be_time = getDateDiff(time*1000);
    var re_time =new Array(acttime,be_time);
    return re_time;
}

function mode(item,index){
    var re_time = timerelate(item.behot_time);
    // console.log(re_time[0]);
    if(item.single_mode){
       return(
        <li key={index}>
        <div class='single-mode'>
            <div class='single-mode-lbox'>
                <a class='img-wrap' href='#'>
                    <img src={item.middle_image} class='lazy-load-img'/>
                </a>
                </div>
                <div class='single-mode-rbox'>
                    <div class='title-box'>
                        <a class='link' href='#'>{item.title}</a>
                    </div>
                    <div class='footer-bar'>
                        <div class='footer-bar-left'>
                            <a class='footer-bar-action tag tag-style-other' href='#'>
                                {item.chinese_tag}
                            </a>
                            <a class='footer-bar-action media-avatar' href='#'>
                                <img src={item.media_avatar_url}/>
                            </a>
                            <a class='footer-bar-action source' href='#'>&nbsp;{item.source}&nbsp;</a>
                            <a class='footer-bar-action source' href='#'>&nbsp;{item.comments_count}评论</a>
                            <span class='footer-bar-action time' href='#'>&nbsp;&nbsp;{re_time[1]}&nbsp;发布时间&nbsp;{re_time[0]}</span>
                        </div>
                        <div class="action-dislike">
                            <i class='bui-icon icon-close-small'></i>不感兴趣
                        </div>
                    </div>
                </div>
                </div></li>
       ) 
   }
   else return(
       <li key={index}>
      <div class='no-mode'>
        <div class="title-box">
            <a class='link' href="#">
                {item.title}
            </a>
        </div>
        <div class="footer-bar"><div class="footer-bar-left">
            <a class="footer-bar-action tag tag-style-other" href="#">
                {item.chinese_tag}

            </a>
            <a class="footer-bar-action media-avatar" href='#'>
                <img src={item.media_avatar_url}/>

            </a>
            <a class='footer-bar-action source' href="#">
                &nbsp;{item.source}&nbsp;
            </a>
            <a class="footer-bar-action source" href="#">
                &nbsp;{item.comments_count}评论
            </a>
            <span class='footer-bar-action time' href='#'>&nbsp;&nbsp;{re_time[1]}&nbsp;发布时间&nbsp;{re_time[0]}</span>
            <div class="action-dislike">
                            <i class='bui-icon icon-close-small'></i>不感兴趣
                        </div>
                        </div>
        </div></div>
        </li>
   )
}

function moredata(){
    var [flag,setFlag] = useState(true);
    var [data, setData]=useState({
        array:[]
    });

    useEffect(()=>{
            localStorage.removeItem('data');
            pull();
            var t= setTimeout(()=>pull(),200);
            return()=>{
                clearTimeout(t)
            }
    },[])

    function pull(){
        console.log('e')
        fetch('http://localhost:3000/result.json').then((respnse)=>{
            respnse.json().then((res)=>{
                console.log(fetch)
                var tmp = JSON.parse(localStorage.getItem('data'))
                if(!tmp) tmp=[]
                localStorage.setItem('data',JSON.stringify([...tmp,...res.data]))
                setData({array:JSON.parse(localStorage.getItem('data'))})
            })
        })
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
                  setTimeout(function() {
                    pull();
                  }, 10);
                }
        });
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])

    return(
        <div className='center'>
            <ul>{data.array.map((item,index)=>mode(item,index))}</ul>
        </div>
    )
}

export default moredata