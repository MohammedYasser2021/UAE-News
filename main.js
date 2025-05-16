// DOM Elements
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const subscribeForm = document.getElementById('subscribe-form');
const latestNewsGrid = document.getElementById('latest-news-grid');
const featuredStoriesGrid = document.getElementById('featured-stories-grid');
const categoryCards = document.querySelectorAll('.category-card');

// News Data - Simulating fetched content
const newsData = [
    {
        id: 1,
        title: 'Dubai Expo 2025 Announces New Cultural Initiative',
        excerpt: 'The upcoming Dubai Expo will showcase cultural heritage from all seven emirates in a special pavilion.',
        image: 'imgs/img1.jpeg',
        category: 'Culture',
        author: 'Sarah Al Mansoori',
        date: 'July 10, 2025',
    },
    {
        id: 2,
        title: 'Abu Dhabi Investment Fund Secures Major Global Deals',
        excerpt: 'The sovereign wealth fund announced three significant international investments totaling over $5 billion.',
      image: 'imgs/img2.jpeg',
        category: 'Business',
        author: 'Omar Al Suwaidi',
        date: 'July 9, 2025',
    },
    {
        id: 3,
        title: 'UAE National Football Team Qualifies for World Cup 2026',
        excerpt: 'Historic victory against Australia secures UAE\'s place in the upcoming World Cup tournament.',
        image: 'imgs/img3.jpeg',
        category: 'Sports',
        author: 'Ahmed Al Zaabi',
        date: 'July 8, 2025',
    },
    {
        id: 4,
        title: 'UAE-US Sign New Trade Agreement Worth $50 Billion',
        excerpt: 'The landmark deal will boost bilateral trade and investment between the two nations.',
        image: 'imgs/img4.jpeg',
        category: 'Politics',
        author: 'Fatima Al Hashemi',
        date: 'July 7, 2025',
    },
    {
        id: 5,
        title: 'Sharjah Literature Festival Attracts Global Authors',
        excerpt: 'The annual event will host over 200 authors from 50 countries in the biggest edition yet.',
       image: 'imgs/img5.jpeg',
        category: 'Culture',
        author: 'Noura Al Kaabi',
        date: 'July 6, 2025',
    },
    {
        id: 6,
        title: 'UAE Space Agency Announces Mission to Mars in 2027',
        excerpt: 'Following the success of the Hope Probe, a new mission will send rovers to explore the red planet.',
       image: 'imgs/img6.jpeg',
        category: 'Science',
        author: 'Ibrahim Al Qasim',
        date: 'July 5, 2025',
    }
];

const featuredNews = [
    {
        id: 7,
        title: 'UAE Celebrates 55th National Day with Spectacular Events',
        excerpt: 'Celebrations across all seven emirates feature drone shows, fireworks, and cultural performances.',
        image: 'imgs/img7.webp',
        category: 'National',
        author: 'Khalid Al Blooshi',
        date: 'July 11, 2025',
    },
    {
        id: 8,
        title: 'UAE New AI Strategy to Create 20,000 Tech Jobs',
        excerpt: 'Government initiative aims to position the UAE as a global leader in artificial intelligence by 2030.',
        image: 'imgs/img8.webp',
        category: 'Technology',
        author: 'Mariam Al Mheiri',
        date: 'July 10, 2025',
    },
    {
        id: 9,
        title: 'Dubai New Sustainable City Project Breaks Ground',
        excerpt: 'The eco-friendly development will house 10,000 residents and use 100% renewable energy.',
        image: 'imgs/img9.jpg',
        category: 'Environment',
        author: 'Rashid Al Maktoum',
        date: 'July 9, 2025',
    }
];

// Mobile Navigation Toggle
mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = mobileNavToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Create News Card Function
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    card.innerHTML = `
        <img src="${news.image}" alt="${news.title}" class="news-image">
        <div class="news-content">
            <span class="category">${news.category}</span>
            <h3>${news.title}</h3>
            <div class="meta">
                <span class="author">By ${news.author}</span>
                <span class="date">${news.date}</span>
            </div>
            <p>${news.excerpt}</p>
            <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return card;
}

// Populate Latest News
function populateLatestNews() {
    latestNewsGrid.innerHTML = '';
    
    newsData.slice(0, 3).forEach(news => {
        const card = createNewsCard(news);
        latestNewsGrid.appendChild(card);
    });
}

// Populate Featured Stories
function populateFeaturedStories() {
    featuredStoriesGrid.innerHTML = '';
    
    featuredNews.forEach(news => {
        const card = createNewsCard(news);
        featuredStoriesGrid.appendChild(card);
    });
}

// Subscribe Form Submission
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
    });
}

// Category Card Click Events
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        
        // Filter news by category (in a real app, this would fetch from an API)
        const filteredNews = newsData.filter(news => 
            news.category.toLowerCase() === category
        );
        
        // For demo purposes, we'll just alert the category
        alert(`You clicked on ${category} category. In a real app, this would show ${category} news.`);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileNavToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Add animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.news-card, .category-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.animation = 'fadeIn 0.5s ease forwards';
        }
    });
}

// Hero image bullets functionality
document.addEventListener('DOMContentLoaded', function() {
    const bullets = document.querySelectorAll('.hero-bullets .bullet');
    const featuredImage = document.getElementById('hero-featured-image');
    
    bullets.forEach(bullet => {
        bullet.addEventListener('click', function() {
            // Update active bullet
            bullets.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update featured image
            const imageSrc = this.getAttribute('data-image');
            featuredImage.src = imageSrc;
            featuredImage.classList.add('fade-in');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                featuredImage.classList.remove('fade-in');
            }, 500);
        });
    });
});


// Initialize the Page
function initPage() {
    populateLatestNews();
    populateFeaturedStories();
    
    // Add scroll event for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation check
    setTimeout(animateOnScroll, 500);
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);