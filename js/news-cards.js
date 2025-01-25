const cardData = [
    {
        imgSrc: 'nc-carousel-images/RWEN19-grad1.png',
        heading: 'RWEN19s Graduation',
        about: 'In 2023, we launched our first cohort in Rwanda, marking our inaugural venture into a new continent. Partnering with the Rwanda Girls Initiative, we empowered bright female students through immersive English learning and educational support, demonstrating the impact of our program.',
        link: 'https://docs.google.com/document/d/1yegh-gNAYybsg7TZFSNV9rXnRvHnT-XIM2WH7bdMu2A/edit?tab=t.0',
    },  
    {
        imgSrc: 'nc-carousel-images/emp-edu.png',
        heading: 'Empowering Education',
        about: 'This year, we expanded education initiatives in Africa, India, and beyond. Partnering with Barefoot College International, we launched English programs in Senegal, Madagascar, Zanzibar, and Guatemala. In Punjab, India, we enhanced English proficiency for students and teachers to boost access to higher education.',
        link: 'https://docs.google.com/document/d/1yegh-gNAYybsg7TZFSNV9rXnRvHnT-XIM2WH7bdMu2A/edit?tab=t.0',
    },
    {
        imgSrc: 'nc-carousel-images/INEN28grad.png',
        heading: 'INEN28s Graduation',
        about: 'In July, our first batch with Salaam Baalak Trust saw 14 high school graduates transform through Instilts lessons.They improved their English and experienced personal growth, celebrated in a heartfelt graduation ceremony honoring their journey and hard work.',
        link: 'https://docs.google.com/document/d/1yegh-gNAYybsg7TZFSNV9rXnRvHnT-XIM2WH7bdMu2A/edit?tab=t.0',
    }, 
    {
        imgSrc: 'nc-carousel-images/img7.png',
        heading: 'Meet Batch INEN22',
        about: 'Meet one of our batches -INEN22!!🍎👩🏻‍🤝‍👨🏽 Thank you to our amazing academic batch managers and tutors for always making class such an interactive and amazing experience🫶',
        link: 'https://www.instagram.com/p/Cw6gIyau5l3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        isInstagramPost: true
    },
    {
        imgSrc: 'nc-carousel-images/img5.png',
        heading: '19th Cohort Graduation',
        about: 'We celebrate the graduation of 26 students from our 19th cohort in Rwanda. With the Rwanda Girls Initiative’s help, these students now have the skills and confidence to pursue their dreams and make a positive impact in their communities.',
        link: 'https://www.linkedin.com/posts/instilt-edu_instilt-instilteducate-barefootcollegeinternational-activity-7212206006024441856-uV0Y?utm_source=share&utm_medium=member_desktop',
        isLinkedInPost: true
    },
    {
        imgSrc: 'nc-carousel-images/img4.png',
        heading: 'New Batches Launched',
        about: 'We are excited to launch our two batches with Barefoot College International - GTEN35 and AFEN36 with a total of 15 students. Tutors fluent in French, Swahili, and Spanish are empowering these students with English skills to support their success.',
        link: 'https://www.linkedin.com/posts/instilt-edu_instilt-instilteducate-barefootcollegeinternational-activity-7212206006024441856-uV0Y?utm_source=share&utm_medium=member_desktop',
        isLinkedInPost: true
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
                        <h3 class="article-heading" id="interactive" style="font-size: 20px">${card.heading}</h3>
                    <div class="news-text-container">
                        <p class="article-about small" id="interactive-about" margin-top: 1 flex-grow: 1>${card.about}</p>
                    </div>
                    <a href="${card.link}">
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
                        <h3 class="article-heading" id="interactive" style="font-size: 20px">${card.heading}</h3>
                    
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
                        <h3 class="article-heading" id="interactive" style="font-size: 20px">${card.heading}</h3>
                    
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
                    <h3 class="article-heading" id="interactive" style="font-size: 20px">${card.heading}</h3>
                    
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
