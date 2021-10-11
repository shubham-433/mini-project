// API k ey e4fc72735a3743afae298a92b13d3dd0
console.log("welcome");
news_container = document.getElementById('news-container');
console.log(news_container)
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=e4fc72735a3743afae298a92b13d3dd0', true);


// for wait or loading 
let wait=document.getElementById('wait').addEventListener('progress',waitfunc());
function waitfunc(){
    let wait = document.getElementById('wait');
    // alert("Video progress");
    wait.innerHTML="<h1>please wait....</h1>"
}


//  when data is loaded 

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
         console.log(articles)
        articles.forEach(function (element, index) {
          
            let news = `<div class="news">
            <div class="title"><b>${element["title"]}</b></div>
            <img class="news-image" src="${element['urlToImage']}" alt="blank" >
            <div class="discription" >${element["content"]}</div>
            <button  class="read-btn"><a  href="${element['url']}" target="_blank">Read More</a></button>
        </div>`
            newsHtml += news;

        })
        news_container.innerHTML = newsHtml;
    } else {

        console.log("Some error occured")
    }
    wait = document.getElementById('wait').style.display='none';
}


xhr.send()
