
document.querySelectorAll(".progress").forEach(bar=>{

let width = bar.getAttribute("data-width");

setTimeout(()=>{

bar.style.width=width;

},300);

});