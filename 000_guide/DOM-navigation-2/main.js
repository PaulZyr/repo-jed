'use strict'

var active = document.querySelector('.active');
var childrenList = document.getElementById('childrenList');
var root = document.getElementById('tree');
var root2 = document.getElementById('tree2');

// console.log(active);

var upBtn = document.getElementById('upBtn');
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var downBtn = document.getElementById('downBtn');

var path = {
    up: null,
    down: null,
    left: null,
    right: null,
}

function clearChildrenlist(){
    childrenList.innerHTML = '';
}

function checkDisabled() {
    if( !active.parentElement || active.parentElement === root.parentElement ){
        path.up = false;
        upBtn.setAttribute('disabled', '')
    } else {
        path.up = true;
        upBtn.removeAttribute('disabled', '')
    }
    if(!active.children || !active.children.length){
        path.updown = false;
        downBtn.setAttribute('disabled', '')
    } else {
        path.down = true;
        downBtn.removeAttribute('disabled', '')
    }
    if(!active.previousElementSibling || active.parentElement === root.parentElement){
        path.left = false;
        leftBtn.setAttribute('disabled', '')
    } else {
        path.left = true;
        leftBtn.removeAttribute('disabled', '')
    }
    if(!active.nextElementSibling || active.parentElement === root.parentElement){
        path.right = false;
        rightBtn.setAttribute('disabled', '')
    } else {
        path.right = true;
        rightBtn.removeAttribute('disabled', '')
    }
}
checkDisabled(); // start func for proverki


upBtn.addEventListener('click', function(){
    clearChildrenlist();
    active.classList.remove('active');
    active.parentElement.classList.add('active');
    active = active.parentElement;
    checkDisabled();
    console.log(active);
})
leftBtn.addEventListener('click', function(){
    clearChildrenlist();
    active.classList.remove('active');
    active.previousElementSibling.classList.add('active');
    active = active.previousElementSibling;
    checkDisabled();
    console.log(active);
})
rightBtn.addEventListener('click', function(){
    clearChildrenlist();
    active.classList.remove('active');
    active.nextElementSibling.classList.add('active');
    active = active.nextElementSibling;
    checkDisabled();
    console.log(active);
})
downBtn.addEventListener('click', function(){
    clearChildrenlist();
   var items = Array.prototype.map.call(active.children, e => e);
   var df = document.createDocumentFragment();
   
    items.forEach((e, i ) => {
        var item = document.createElement('li');
        item.innerHTML = e.tagName;
        item.addEventListener('click', function(){
            console.log(i);
            active.classList.remove('active');
            e.classList.add('active');
            active = e;
            checkDisabled();
            clearChildrenlist();
        });
        df.appendChild(item);
        // console.log(item);
    });
    childrenList.appendChild(df);
});

document.addEventListener('keydown', function(ev){
    if(ev.key === 'ArrowUp' || ev.keyCode === 87 && path.up){
        clearChildrenlist();
        active.classList.remove('active');
        active.parentElement.classList.add('active');
        active = active.parentElement;
        checkDisabled();
    }
});
document.addEventListener('keydown', function(ev){
    if(ev.key === 'ArrowLeft' || ev.keyCode === 65 && path.left){
        clearChildrenlist();
        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');
        active = active.previousElementSibling;
        checkDisabled();
    }
});
document.addEventListener('keydown', function(ev){
    if(ev.key === 'ArrowRight' || ev.keyCode === 68 && path.right){
        clearChildrenlist();
        active.classList.remove('active');
        active.nextElementSibling.classList.add('active');
        active = active.nextElementSibling;
        checkDisabled();
    }
});
document.addEventListener('keydown', function(ev){
    if(ev.key === 'ArrowDown' || ev.keyCode === 83 && path.down){
        clearChildrenlist();
        var items = Array.prototype.map.call(active.children, e => e);
        var df = document.createDocumentFragment();

         items.forEach((e, i ) => {
        var item = document.createElement('li');
        item.innerHTML = e.tagName;
        item.addEventListener('click', function(){
            console.log(i);
            active.classList.remove('active');
            e.classList.add('active');
            active = e;
            checkDisabled();
            clearChildrenlist();
        });
        df.appendChild(item);
        // console.log(item);
    });
    childrenList.appendChild(df);
    }
});