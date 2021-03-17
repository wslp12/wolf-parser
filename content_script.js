var nextpageElem = document.querySelector(".nextpage");
var prevPageElem = document.querySelector(".prepage");
window.onload = function () { 
    var height = document.getElementsByTagName("body")[0].scrollHeight;

    window.addEventListener('scroll', function(event) {
        var y = window.scrollY;
        var mError = (y / height * 100).toFixed(1)
        if (mError >= 96) {
            document.querySelector(".webtoon-body").appendChild(nextpageElem)
            document.querySelector(".webtoon-body").appendChild(prevPageElem)
            const href = window.location.href.replace(/(.*num=)(.*)/g, (a,b,c,d,e,f,g) => {
                return result = b + (parseInt(c, 10) + 1)
            })
            window.location.href = href;
        } else {
            nextpageElem.remove();
            prevPageElem.remove();
        }
    });
}


removeElem("body", ".webtoon-body")
console.log(document.querySelectorAll(".group")[4].remove())
document.querySelector(".updown").remove()
document.querySelector(".top-banner").remove()
document.querySelector("center").remove()
nextpageElem.remove();
prevPageElem.remove();


function removeElem(pElem, nElem) {
    var bpChildNodes = document.querySelector(pElem).childNodes
    var childNodes = Array.from(bpChildNodes).filter((el) => el !== document.querySelector(nElem))
    Array.from(childNodes).forEach((el) => el.remove())
}
