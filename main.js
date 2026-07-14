import './style.css'

/* ============================================================
   DATA
   ============================================================ */
const danceForms = [
  {
    name: 'Bharatanatyam',
    origin: 'Tamil Nadu',
    image: 'https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'One of the oldest and most widely practiced classical dance forms of India, characterized by fixed upper torso, bent legs, and a rich vocabulary of hand gestures and facial expressions.',
  },
  {
    name: 'Mohiniyattam',
    origin: 'Kerala',
    image: 'https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A graceful dance form from Kerala, traditionally performed by women. The name refers to the mythical enchantress Mohini, and the dance is known for its gentle, swaying movements.',
  },
  {
    name: 'Kathakali',
    origin: 'Kerala',
    image: 'https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A highly stylized classical dance-drama from Kerala, distinguished by its elaborate makeup, intricate costumes, and expressive facial gestures that bring ancient epics to life.',
  },
  {
    name: 'Ottan Thullal',
    origin: 'Kerala',
    image: 'https://images.pexels.com/photos/16715886/pexels-photo-16715886.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A solo performance art from Kerala combining dance, poetry, and music. Known for its humor, social commentary, and the distinctive green makeup and ornate costume of the performer.',
  },
  {
    name: 'Kerala Nadanam',
    origin: 'Kerala',
    image: 'https://images.pexels.com/photos/28236025/pexels-photo-28236025.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A contemporary classical dance form that blends elements of Kerala\'s traditional dance heritage. It celebrates the cultural richness of the region with elegant choreography.',
  },
  {
    name: 'Folk & Ritual Arts',
    origin: 'South India',
    image: 'https://images.pexels.com/photos/5262079/pexels-photo-5262079.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beyond the classical forms, we offer training in various regional folk and ritual performance traditions that form the living cultural fabric of South India.',
  },
]

const galleryImages = [
  { src: 'https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bharatanatyam dancer performing on stage', span: 'tall' },
  { src: 'https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Mohiniyattam dancer in Kerala setting', span: 'wide' },
  { src: 'https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kathakali dancer in vibrant costume', span: '' },
  { src: 'https://images.pexels.com/photos/16715886/pexels-photo-16715886.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dancer in traditional Indian dress', span: '' },
  { src: 'https://images.pexels.com/photos/28236025/pexels-photo-28236025.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kerala cultural performance', span: 'wide' },
  { src: 'https://images.pexels.com/photos/5262079/pexels-photo-5262079.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian classical dance pose', span: 'tall' },
  { src: 'https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Traditional Bharatanatyam dancer in Kerala attire', span: '' },
  { src: 'https://images.pexels.com/photos/30424951/pexels-photo-30424951.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Graceful classical dancer performing', span: '' },
]

const instructors = [
  {
    name: 'Smt. Lakshmi Nair',
    role: 'Artistic Director · Bharatanatyam',
    bio: 'With over 25 years of experience, Lakshmi ji trained under the legendary Kalakshetra tradition and has performed across India and abroad.',
    photo: 'https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sri. Ravi Menon',
    role: 'Senior Guru · Kathakali',
    bio: 'A seasoned Kathakali performer trained at Kalamandalam, Ravi ji specializes in the Pacha and Kathi character roles.',
    photo: 'https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Smt. Priya Warrier',
    role: 'Instructor · Mohiniyattam',
    bio: 'An accomplished Mohiniyattam dancer, Priya brings a contemporary sensibility to this ancient art while honoring its classical roots.',
    photo: 'https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

const events = [
  {
    day: '15', month: 'Aug', year: 2026,
    title: 'Annual Day Recital — Nritha Sandhya',
    time: '5:00 PM', venue: 'Main Auditorium',
    desc: 'An evening of solo and group performances by our senior students, showcasing all dance forms taught at the academy.',
  },
  {
    day: '02', month: 'Sep', year: 2026,
    title: 'Kathakali Workshop with Guest Guru',
    time: '10:00 AM', venue: 'Studio Hall',
    desc: 'A special intensive workshop on Kathakali mudras and abhinaya, open to intermediate and advanced students.',
  },
  {
    day: '21', month: 'Oct', year: 2026,
    title: 'Navaratri Cultural Festival',
    time: '6:30 PM', venue: 'Open Air Theatre',
    desc: 'A nine-night celebration of classical dance and music, featuring performances by gurus and invited artists.',
  },
  {
    day: '10', month: 'Dec', year: 2026,
    title: 'Arangetram — Debut Performance',
    time: '5:30 PM', venue: 'Main Auditorium',
    desc: 'The stage debut of our graduating Bharatanatyam students, marking their formal entry into the world of performance.',
  },
]

const testimonials = [
  {
    quote: 'Upasana Kalakendram has been a second home for my daughter. The gurus are not just teachers but mentors who nurture both art and character.',
    author: 'Anjali Krishnan',
    role: 'Parent',
  },
  {
    quote: 'The depth of training here is remarkable. I came in as a beginner and within three years I performed my Arangetram with confidence.',
    author: 'Meera Suresh',
    role: 'Senior Student',
  },
  {
    quote: 'As someone who returned to dance after 20 years, the academy welcomed me with warmth and patience. The Mohiniyattam classes are pure joy.',
    author: 'Dr. Vinaya Pillai',
    role: 'Adult Learner',
  },
]

/* ============================================================
   RENDER
   ============================================================ */
const app = document.querySelector('#app')

app.innerHTML = `
  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <a href="#home" class="nav-logo">
      <div class="nav-logo-mark">उ</div>
      <div class="nav-logo-text">
        <strong>Upasana Kalakendram</strong>
        <span>Classical Dance Academy</span>
      </div>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#dance-forms">Dance Forms</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#instructors">Gurus</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#contact" class="nav-cta">Enroll Now</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <header class="hero" id="home">
    <div class="hero-bg">
      <img src="https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Indian classical dance performance" />
    </div>
    <div class="hero-content">
      <span class="hero-eyebrow">Preserving Tradition · Inspiring Generations</span>
      <h1>Upasana Kalakendram</h1>
      <p class="hero-tagline">Dedicated to preserving and promoting Indian traditional dance and classical arts through devoted training and timeless expression.</p>
      <div class="hero-actions">
        <a href="#dance-forms" class="btn btn-primary">Explore Dance Forms</a>
        <a href="#about" class="btn btn-outline">Our Story</a>
      </div>
    </div>
    <div class="hero-scroll">Scroll to discover</div>
  </header>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image reveal">
          <img src="https://images.pexels.com/photos/30424951/pexels-photo-30424951.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Classical dancer in traditional attire" />
        </div>
        <div class="about-content reveal">
          <span class="section-eyebrow">Our Heritage</span>
          <h2>Where Tradition Finds Its Voice</h2>
          <p>Upasana Kalakendram is a sanctuary for Indian classical dance, where ancient traditions are preserved with reverence and passed on with devotion. Our academy provides comprehensive training in a rich array of dance forms rooted in the cultural soil of South India.</p>
          <p>From the precise geometry of Bharatanatyam to the lyrical grace of Mohiniyattam, from the dramatic power of Kathakali to the wit of Ottan Thullal — we honor each form in its authentic expression while nurturing each student's individual journey.</p>
          <div class="about-stats">
            <div class="stat"><strong>25+</strong><span>Years of Teaching</span></div>
            <div class="stat"><strong>500+</strong><span>Students Trained</span></div>
            <div class="stat"><strong>6</strong><span>Dance Forms</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DANCE FORMS -->
  <section class="dance-forms" id="dance-forms">
    <div class="container">
      <span class="section-eyebrow section-title">What We Teach</span>
      <h2 class="section-title">Classical Dance Forms</h2>
      <p class="section-subtitle">Each form carries centuries of tradition, storytelling, and spiritual depth. Discover the one that calls to you.</p>
      <div class="dance-grid">
        ${danceForms.map(d => `
          <article class="dance-card reveal">
            <div class="dance-card-image">
              <img src="${d.image}" alt="${d.name}" loading="lazy" />
            </div>
            <div class="dance-card-body">
              <h3>${d.name}</h3>
              <span class="dance-origin">Origin: ${d.origin}</span>
              <p>${d.description}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="gallery" id="gallery">
    <div class="container">
      <span class="section-eyebrow section-title">Moments in Motion</span>
      <h2 class="section-title">Gallery</h2>
      <p class="section-subtitle">A glimpse into the vibrant world of our performances, rehearsals, and celebrations.</p>
      <div class="gallery-grid">
        ${galleryImages.map(img => `
          <div class="gallery-item ${img.span === 'tall' ? 'gallery-tall' : ''} ${img.span === 'wide' ? 'gallery-wide' : ''} reveal">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- INSTRUCTORS -->
  <section class="instructors" id="instructors">
    <div class="container">
      <span class="section-eyebrow section-title">Meet Our Gurus</span>
      <h2 class="section-title">Our Instructors</h2>
      <p class="section-subtitle">Experienced gurus who carry forward the guru-shishya parampara with dedication and love.</p>
      <div class="instructor-grid">
        ${instructors.map(i => `
          <article class="instructor-card reveal">
            <div class="instructor-photo">
              <img src="${i.photo}" alt="${i.name}" loading="lazy" />
            </div>
            <h3>${i.name}</h3>
            <p class="instructor-role">${i.role}</p>
            <p class="instructor-bio">${i.bio}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- EVENTS -->
  <section class="events" id="events">
    <div class="container">
      <span class="section-eyebrow section-title">Upcoming</span>
      <h2 class="section-title">Events &amp; Performances</h2>
      <p class="section-subtitle">Join us at our recitals, workshops, and cultural celebrations throughout the year.</p>
      <div class="event-list">
        ${events.map(e => `
          <article class="event-card reveal">
            <div class="event-date">
              <div class="day">${e.day}</div>
              <div class="month">${e.month} ${e.year}</div>
            </div>
            <div class="event-info">
              <h3>${e.title}</h3>
              <div class="event-meta">
                <span>&#128337; ${e.time}</span>
                <span>&#128205; ${e.venue}</span>
              </div>
              <p class="event-desc">${e.desc}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials" id="testimonials">
    <div class="container">
      <span class="section-eyebrow section-title">Voices of Our Family</span>
      <h2 class="section-title">Testimonials</h2>
      <p class="section-subtitle">The stories of those who have walked through our doors.</p>
      <div class="testimonial-track">
        <div class="testimonial-slides" id="testimonialSlides">
          ${testimonials.map(t => `
            <div class="testimonial-slide">
              <p class="testimonial-quote">${t.quote}</p>
              <p class="testimonial-author">${t.author}</p>
              <p class="testimonial-role">${t.role}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="testimonial-dots" id="testimonialDots">
        ${testimonials.map((_, i) => `<button data-index="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i + 1}"></button>`).join('')}
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <span class="section-eyebrow">Begin Your Journey</span>
          <h2>Enroll or Visit Us</h2>
          <p>Whether you are a parent seeking training for your child, an adult returning to dance, or simply curious — we welcome you to visit our academy and experience the tradition firsthand.</p>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">&#9742;</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98470 12345</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">&#9993;</div>
              <div>
                <h4>Email</h4>
                <p>info@upasanakalakendram.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">&#127968;</div>
              <div>
                <h4>Address</h4>
                <p>Dance Academy Road, Thrissur, Kerala 680001, India</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">&#128336;</div>
              <div>
                <h4>Class Hours</h4>
                <p>Mon – Sat: 4:00 PM – 8:00 PM<br>Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
        <form class="contact-form reveal" id="contactForm">
          <div class="form-success" id="formSuccess">Thank you! Your message has been received. We will get back to you shortly.</div>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label for="interest">Dance Form of Interest</label>
            <select id="interest" name="interest">
              <option value="">Select a dance form</option>
              ${danceForms.map(d => `<option value="${d.name}">${d.name}</option>`).join('')}
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us about your interest, experience level, or any questions..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#home" class="nav-logo">
          <div class="nav-logo-mark">उ</div>
          <div class="nav-logo-text">
            <strong>Upasana Kalakendram</strong>
            <span>Classical Dance Academy</span>
          </div>
        </a>
        <p>Preserving and promoting Indian traditional dance and classical arts through devoted training, authentic expression, and the timeless guru-shishya tradition.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="YouTube">yt</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#dance-forms">Dance Forms</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Dance Forms</h4>
        <ul>
          <li><a href="#dance-forms">Bharatanatyam</a></li>
          <li><a href="#dance-forms">Mohiniyattam</a></li>
          <li><a href="#dance-forms">Kathakali</a></li>
          <li><a href="#dance-forms">Ottan Thullal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+919847012345">+91 98470 12345</a></li>
          <li><a href="mailto:info@upasanakalakendram.com">info@upasanakalakendram.com</a></li>
          <li><a href="#contact">Thrissur, Kerala</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Upasana Kalakendram. All rights reserved. &nbsp;|&nbsp; Crafted with devotion to the classical arts.</p>
    </div>
  </footer>
`

/* ============================================================
   INTERACTIVITY
   ============================================================ */

// Navbar scroll state
const navbar = document.getElementById('navbar')
const onScroll = () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled')
  else navbar.classList.remove('scrolled')
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// Mobile menu toggle
const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open')
  navLinks.classList.toggle('open')
})
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open')
    navLinks.classList.remove('open')
  })
})

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]')
const navAnchors = navLinks.querySelectorAll('a')
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
      })
    }
  })
}, { threshold: 0.4 })
sections.forEach(s => sectionObserver.observe(s))

// Testimonial carousel
const slides = document.getElementById('testimonialSlides')
const dots = document.getElementById('testimonialDots')
let currentSlide = 0
const totalSlides = testimonials.length

function goToSlide(index) {
  currentSlide = index
  slides.style.transform = `translateX(-${index * 100}%)`
  dots.querySelectorAll('button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index)
  })
}

dots.addEventListener('click', (e) => {
  if (e.target.dataset.index !== undefined) {
    goToSlide(parseInt(e.target.dataset.index))
  }
})

let autoplay = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 6000)
const testimonialSection = document.getElementById('testimonials')
testimonialSection.addEventListener('mouseenter', () => clearInterval(autoplay))
testimonialSection.addEventListener('mouseleave', () => {
  autoplay = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 6000)
})

// Contact form
const form = document.getElementById('contactForm')
const formSuccess = document.getElementById('formSuccess')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  formSuccess.classList.add('visible')
  form.reset()
  setTimeout(() => formSuccess.classList.remove('visible'), 5000)
})
