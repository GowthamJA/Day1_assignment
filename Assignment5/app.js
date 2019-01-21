function homeContent(){
    var o = document.getElementById("data");
    var j = JSON.parse(o.innerHTML);
    document.getElementById("main").innerHTML=j.home.content;
}
function aboutContent(){
    var o = document.getElementById("data");
    var j = JSON.parse(o.innerHTML);
    document.getElementById("main").innerHTML=j.about.content;
}
function contactContent(){
    var o = document.getElementById("data");
    var j = JSON.parse(o.innerHTML);
    document.getElementById("main").innerHTML=j.contact.content;
}
function recentContent(){
    var o = document.getElementById("data");
    var j = JSON.parse(o.innerHTML);
    document.getElementById("main").innerHTML=j.recent.newsArray[0].news+". "+j.recent.newsArray[1].news;
}