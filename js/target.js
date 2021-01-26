let lnk = document.querySelectorAll("a[href^= 'http']");
lnk.forEach(function (i) {console.log(i);i.setAttribute('target', 'blank') });
