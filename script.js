// Built by LucyBot. www.lucybot.com
function getData() {
    var timesApiKey = "f1bb99ffa47b463e858491a110c726db"
    
    // http://api.nytimes.com/svc/search/v2/articlesearch.json?q=space&fq=news_desk:(%22Science%22)&api-key=5b0537f47127488b86fa6f4be023fc8b
    var keyword_input = document.getElementById("input").value
    var topic_input = document.getElementById("input2").value    
    console.log("INPUT", keyword_input)
    console.log("INPUT", topic_input)
    
var timesSearchEndpoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword_input}&fq=news_desk:("${topic_input}")&api-key=f1bb99ffa47b463e858491a110c726db`;
console.log(timesSearchEndpoint)
    fetch(timesSearchEndpoint)
        .then(

            function(data) {
                return data.json()
            })
        .then(
            function(json) {
                console.log(json)
        var headlinePath = json.response.docs[0].headline.main
        console.log(headlinePath)
        var blurPath = json.response.docs["0"].lead_paragraph
        var articlePath = json.response.docs["0"].web_url
        var headline = document.createElement('h3')
        var blur = document.createElement('h3')
        var article = document.createElement('p')
        headline.innerHTML = headlinePath
        blur.innerHTML = blurPath
        article.innerHTML = articlePath
        document.getElementById('p').appendChild(headline)
        document.getElementById('p').appendChild(blur)
        document.getElementById('p').appendChild(article)
        // document.body.appendChild(headline)
        // document.body.appendChild(blur)
        // document.body.appendChild(article)
        console.log(headline)
        console.log(blur)
        console.log(article)
        
})
}



