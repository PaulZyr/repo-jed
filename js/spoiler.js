document.addEventListener("DOMContentLoaded", function(ev) {
  // var taskList = document.querySelector(".task-list");
  var taskLists = document.querySelectorAll(".task-list");
  // console.log(1);
  // console.log(ev);
  // console.log(2);
  // console.log(taskLists);

  taskLists.forEach(function cb(curEl, index, arry){
    // console.log(3);
    // console.log(curEl, index, arry);
    curEl.addEventListener("click", spoiler);
  })
  // document.addEventListener("click", spoiler);

  function spoiler(event){
    let btn = event.target
    let spoilerContent

    if (!btn.matches('.spoiler-btn') || null ) return //console.log("nothing for work")

    spoilerContent = null || event.target.closest('li').querySelector('pre.spoiler-content')
    if (spoilerContent === null) {
      let node = document.createElement('pre')
      node.classList.add('spoiler-content')
      node.textContent = event.target.closest('li').querySelector('script').textContent
      event.target.closest('li').append(node)
      spoilerContent = event.target.closest('li').querySelector('pre.spoiler-content')
    }

    btn.textContent.toLowerCase() === "spoiler open" ? btn.textContent = "spoiler close" : btn.textContent = "spoiler open";
    (spoilerContent.style.display === "none" || spoilerContent.getAttribute('style') === null ) ? spoilerContent.style.display = "block" : spoilerContent.style.display = "none";
  }
});
