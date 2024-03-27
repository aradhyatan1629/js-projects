const apiKey = '059628fd0ad647dcbe1bf854083c8c0d';
const blogContainer = document.getElementById('blog-container');
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchRandomNews(){
    try{
       const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
       const respone = await fetch(apiUrl)
       const data = await respone.json();
       return data.articles;      
    }
    catch(error){
        console.error('Error fetch random news ',error);
        return [];
    }
}

searchButton.addEventListener('click',async function(e){
    const query = searchField.value.trim();
    if(query!==''){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        }
        catch(error){
            console.log('Error fetching news by query',error);
        }
    }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&sources=techcrunch&apiKey=${apiKey}`;
        const respone = await fetch(apiUrl)
        const data = await respone.json();
        return data.articles;      
     }
     catch(error){
         console.error('Error fetch random news ',error);
         return [];
     }
}


function displayBlogs(articles){
    blogContainer.innerHTML = '';
    articles.forEach((article)=>{
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card')
        const img = document.createElement('img');
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement('h2');
        const truncatedTitle = article.title.length>30 ? article.title.slice(0,30) + "...." : article.title;
        title.textContent=truncatedTitle;  
        const description = document.createElement('p');
        description.textContent = article.description;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click',function(e){
            window.open(article.url,'_blank')
        })
        blogContainer.appendChild(blogCard);
    })
}

(async ()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.error('Error fetch random news ',error);
    }
})();

