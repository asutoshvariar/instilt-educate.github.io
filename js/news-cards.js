const cardData = [
    {
        imgSrc: '../assets/img/news-cards/RWEN19-spotlight.png',
        heading: 'Celebrating the Completion of our First Africa Batch!',
        about: 'In 2023, we launched our first cohort in Rwanda, marking our inaugural venture into a new continent. Partnering with the Rwanda Girls Initiative, we empowered bright female students through immersive English learning and educational support, demonstrating the impact of our program.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/celebrating-the-completion-of-our-first-africa-batch',
    },  
    {
        imgSrc: '../assets/img/news-cards/BCI-colab.png',
        heading: 'Empowering Education: New Batches in India and Africa',
        about: 'This year, we expanded education initiatives in Africa, India, and beyond. Partnering with Barefoot College International, we launched English programs in Senegal, Madagascar, Zanzibar, and Guatemala. In Punjab, India, we enhanced English proficiency for students and teachers to boost access to higher education.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/empowering-education-new-batches-in-india-and-africa-and-launching-the-india-council',
    },
    {
        imgSrc: '../assets/img/news-cards/INEN28grad.png',
        heading: 'Salaam Baalak Trust - First Batch Graduation!',
        about: 'In July, our first batch with Salaam Baalak Trust saw 14 high school graduates transform through Instilts lessons.They improved their English and experienced personal growth, celebrated in a heartfelt graduation ceremony honoring their journey and hard work.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/salaam-baalak-trust-batch-s-graduation',
    }, 
];


function createPosts(cards) {
    const container = document.getElementById('card-container');
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('news-col-md-4');

        cardElement.innerHTML = `
            <div class="news-card1">
                <div class="news-card-body text-center">
                    <img src="${card.imgSrc}" style="height: 250px border-radius: 5px">
                        <h3 class="news-heading-container" id="interactive">${card.heading}</h3>
                    <div class="news-text-container">
                        <p class="article-about small" id="interactive-about" margin-top: 1 flex-grow: 1>${card.about}</p>
                    </div>
                    <a href="${card.link}" target="_blank">
                        <div class="button-container">
                            <button class="news-button1" flex-grow: 1> Read More </button>
                        </div>
                    </a>
                </div>
            </div>
        `;

        if(card.isInstagramPost) {
            cardElement.innerHTML = `
            <div class="news-card1">
                <div class="news-card-body text-center">
                    <img src="${card.imgSrc}" style="height: 250px; border-radius: 5px">
                    <i class="fa-brands fa-instagram news-appIcon"></i>
                        <h3 class="news-heading-container" id="interactive">${card.heading}</h3>
                    
                    <div class="news-text-container">
                        <p class="article-about small" id="interactive-about">${card.about}</p>
                    </div>
                    <a href="${card.link}">
                        <div class="button-container">
                            <button class="news-button1"> Read More </button>
                        </div>
                    </a>
                </div>
            </div>
        `;
        }
        else if(card.isLinkedInPost){
            cardElement.innerHTML = `
            <div class="news-card1">
                <div class="news-card-body text-center">
                    <img src="${card.imgSrc}" style="height: 250px; border-radius: 5px">
                    <i class="fa-brands fa-linkedin news-appIcon"></i>
                    <h3 class="news-heading-container" id="interactive">${card.heading}</h3>
                    
                    <div class="news-text-container">
                        <p class="article-about small" id="interactive-about">${card.about}</p>
                    </div>
                    <a href="${card.link}">
                        <div class="button-container">
                            <button class="news-button1"> Read More </button>
                        </div>
                    </a>
                </div>
            </div>
        `;
        }
        else {
            cardElement.innerHTML = `
            <div class="news-card1">
                <div class="news-card-body text-center">
                    <img src="${card.imgSrc}" style="height: 250px; border-radius: 5px">
                    <h3 class="news-heading-container" id="interactive" style="font-size: 19px">${card.heading}</h3>
                    
                    <div class="news-text-container">
                        <p class="article-about small" id="interactive-about">${card.about}</p>
                    </div>
                    
                    <a href="${card.link}">
                        <div class="button-container">
                            <button class="news-button1"> Read More </button>
                        </div>
                    </a>
                </div>
            </div>
        `;
        }

    container.appendChild(cardElement);
    });
}

createPosts(cardData);
