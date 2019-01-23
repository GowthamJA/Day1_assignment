var j;
function init(){
    var o = document.getElementById("data");
    j = JSON.parse(o.innerHTML);
    document.getElementById("main").innerHTML="<h2>"+j.home.title+'</h2>'+'<p>'+j.home.content+"</p>";

}
function homeContent(){
    document.getElementById("main").innerHTML="<h2>"+j.home.title+'</h2>'+'<p>'+j.home.content+"</p>";
}
function aboutContent(){
    document.getElementById("main").innerHTML="<h2>"+j.about.title+'</h2>'+'<p>'+j.about.content+"</p>";
}
function contactContent(){
    document.getElementById("main").innerHTML="<h2>"+j.contact.title+'</h2>'+'<p>'+j.contact.content+"</p>";
}
function recentContent(){
    document.getElementById("main").innerHTML="<h1>"+j.recent.title+'</h1>'+'<h2>'+j.recent.newsArray[0].title+"</h2>"+'<p>'+j.recent.newsArray[0].news+'<h2>'+j.recent.newsArray[1].title+"</h2>"+'<p>'+j.recent.newsArray[1].news
}
