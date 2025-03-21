fetch('https://newsapi.org/v2/top-headlines?category=health&apikey=48ffb75f1ee04c2fa611fc90345e2177')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.createElement('div');
    newsContainer.classList.add('news-container');
    data.articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add("custom-container");
    articleDiv.classList.add('section');
    const articleTitle = document.createElement('h2');
    const articleBody = document.createElement('p');
      articleTitle.textContent = article.title;
      articleBody.textContent = article.description;
      articleDiv.appendChild(articleTitle);
      articleDiv.appendChild(articleBody);
      newsContainer.appendChild(articleDiv);
    });
    document.body.appendChild(newsContainer);
  })
  .catch(error => console.error('Error fetching news:', error));