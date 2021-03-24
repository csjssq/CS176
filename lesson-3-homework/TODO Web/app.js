// 绑定事件-写函数
document.querySelector('form').addEventListener('submit',submit);
document.getElementsByTagName('form')[0].setAttribute('onsubmit', 'return false')

var input = document.querySelector('input');
var ul = document.querySelector('ul');

function submit(){
    if(input.value !=''){
        var li = document.createElement('li');
        li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${input.value}</label>`;
        ul.appendChild(li);
        //指定控件为'显示(展开)'状态
        document.querySelector('.tasksBoard').style.display = 'block';
    }
    input.value = '';
}


document.getElementById('clear').addEventListener('click',clearall);
function clearall(e){
    var ul = document.querySelector('ul').innerHTML = '';
    document.querySelector('.tasksBoard').style.display = 'none';
  }

document.querySelector('ul').addEventListener('click',TODO);
function TODO(e){
    if(e.target.className == 'delete'){
        e.target.parentNode.remove();
	    e.target.remove();
        let lis = document.getElementsByTagName('li'); //local 
        if (lis.length===0){
            clearall();
        }
        
    }
    else {
        //因为上文没加，利用nextSibling处理旁边
        const task = e.target.nextSibling;
        if(e.target.checked){
            // CSS
            task.style.textDecoration = "line-through";
            task.style.color = "#ff0000";
        }
        else {
            //调回来
            task.style.textDecoration = "none";
            task.style.color = "#2f4f4f";
        }
    }
  }
  