const cardData = [
    {
        imgSrc: 'nc-carousel-images/img2.png',
        heading: '300 Members Milestone',
        about: 'Instilt Educate is thrilled to announce that we have reached 300 members! Starting as a high schooler-run nonprofit, we have grown globally with students from India to Rwanda. Our dedicated tutors ensure a rewarding experience for all.',
        link: 'https://www.linkedin.com/posts/instilt-edu_instilt-instilteducate-nonprofit-activity-7169154605942038528-QTed?utm_source=share&utm_medium=member_desktop',
        isLinkedInPost: true
    },  
    {
        imgSrc: 'nc-carousel-images/img6.png',
        heading: 'Meet Batch INEN23',
        about: 'Meet Batch INEN23!!🧡👩🏻‍🤝‍👨🏽 thank you to our fantastic batch managers and tutors for their commitment, support and always making class a fun time🫶',
        link: 'https://www.instagram.com/p/CyZ5O8IOTOM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        isInstagramPost: true
    },
    {
        imgSrc: 'nc-carousel-images/img3.png',
        heading: 'Youthify Collaboration',
        about: 'We are excited to announce an exciting collaboration with Youthify! Youthify is a non-profit based in India that aims to dismantle the stigma around mental health and spread awareness. We hope this collaboration shines a light on an important issue: the importance of mental health in education.',
        link: 'https://www.linkedin.com/posts/instilt-edu_instilt-educate-is-excited-to-announce-an-activity-7249524576374681602-6bpJ?utm_source=share&utm_medium=member_desktop',
        isLinkedInPost: true
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
                    <i class="fa-brands fa-instagram appIcon"></i>
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
                    <i class="fa-brands fa-linkedin appIcon"></i>
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
