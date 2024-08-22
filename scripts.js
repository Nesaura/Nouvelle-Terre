document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content-section");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            const sectionPosition = section.offsetTop + section.clientHeight / 2;

            if (scrollPosition >= sectionPosition) {
                section.classList.add("active");
            }
        });
    });

    const scrollDown = document.querySelector(".scroll-down");
    scrollDown.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(scrollDown.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});

var timeline_json = "TimelineNT.json";
    
var timeline = new TL.Timeline('timeline-embed', timeline_json);

// Function to load news articles
function loadNews() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsSection = document.getElementById('news-section');

            data.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'news-article';

                const title = document.createElement('h3');
                title.textContent = article.title;

                const date = document.createElement('p');
                date.className = 'news-date';
                date.textContent = `Date: ${article.date}`;

                const content = document.createElement('p');
                content.className = 'news-content';
                content.textContent = article.content;

                const readMore = document.createElement('a');
                readMore.href = article.link;
                readMore.className = 'read-more';
                readMore.textContent = 'Read more';

                articleDiv.appendChild(title);
                articleDiv.appendChild(date);
                articleDiv.appendChild(content);
                articleDiv.appendChild(readMore);
                newsSection.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Error loading news:', error));
}

// Load news articles when the page loads
window.onload = loadNews;