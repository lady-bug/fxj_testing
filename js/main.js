var footerEl = document.getElementsByTagName('footer');
var mainEl = document.getElementsByClassName('main-container');
footerEl[0].classList.remove('relative');
footerEl[0].classList.add('fixed');
mainEl[0].classList.remove('relative');
mainEl[0].classList.add('fixed');
var CheckIfScrollBottom = debouncer(function() {
	if(getDocHeight() == getScrollXY()[1] + window.innerHeight) {
       footerEl[0].classList.remove('fixed');
       footerEl[0].classList.add('relative');
       mainEl[0].classList.remove('fixed');
       mainEl[0].classList.add('relative');
    } else {
      footerEl[0].classList.remove('relative');
      footerEl[0].classList.add('fixed');
      mainEl[0].classList.remove('relative');
      mainEl[0].classList.add('fixed');
    }
},100);

document.addEventListener('scroll',CheckIfScrollBottom);

function debouncer(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}}
function getScrollXY(){var a=0,b=0;return"number"==typeof window.pageYOffset?(b=window.pageYOffset,a=window.pageXOffset):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(b=document.body.scrollTop,a=document.body.scrollLeft):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)&&(b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft),[a,b]}
function getDocHeight(){var a=document;return Math.max(a.body.scrollHeight,a.documentElement.scrollHeight,a.body.offsetHeight,a.documentElement.offsetHeight,a.body.clientHeight,a.documentElement.clientHeight)}
