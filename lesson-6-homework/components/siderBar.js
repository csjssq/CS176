import {useEffect} from 'react'
function sideBar(){
    // useEffect(()=>{
    //     let tar = document.getElementById('_next');
    //     tar.parentNode.innerHTML = tar.children[0].innerHTML;
    //   })
    return(
        <div className="sideBar">
        <i class="fa fa-bars"></i>
        <i class="fa fa-home"></i>
        <i class="fa fa-search"></i>
        <i class="fa fa-volume-up"></i>
        <i class="fa fa-user"></i>
        <i class="fa fa-spotify"></i>
        <i class="fa fa-cog"></i>
        <i class="fa fa-soundcloud"></i>
        </div>
    )
}

export default sideBar
