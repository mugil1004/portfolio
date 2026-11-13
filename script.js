/**
 * Mugilarasan K - Portfolio JavaScript
 * Modern Interactive Behaviors & UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light Mode)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const rootHtml = document.documentElement;

  // Retrieve stored theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  rootHtml.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = rootHtml.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootHtml.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });

  // ------------------------------------------------------------------------
  // 2. Mobile Navigation Menu
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Navbar Scrolled Style & Active Section Highlighting
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active link
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. Dynamic Typing Effect in Hero
  // ------------------------------------------------------------------------
  const typedTextEl = document.getElementById('typedText');
  const roles = [
    'Aspiring Java Developer',
    'Computer Science Undergrad',
    'OOP & Problem Solving Enthusiast',
    'Full Stack & Mobile Builder'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const delayBetweenWords = 1800;

  function typeWriter() {
    const currentWord = roles[roleIdx];

    if (!isDeleting) {
      typedTextEl.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(typeWriter, delayBetweenWords);
        return;
      }
      setTimeout(typeWriter, typingSpeed);
    } else {
      typedTextEl.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeWriter, 400);
        return;
      }
      setTimeout(typeWriter, deletingSpeed);
    }
  }

  if (typedTextEl) {
    typeWriter();
  }

  // ------------------------------------------------------------------------
  // 5. Projects Category Filtering
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'modalEnter 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 6. Copy to Clipboard Functionality
  // ------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        // Fallback for browsers that block clipboard API
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. Resume Modal Controls & PDF Printing
  // ------------------------------------------------------------------------
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  function openResume() {
    resumeModal.classList.add('active');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    resumeModal.classList.remove('active');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openResumeBtn) {
    openResumeBtn.addEventListener('click', openResume);
  }

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', closeResume);
  }

  // Close when clicking modal backdrop
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResume();
      }
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('active')) {
      closeResume();
    }
  });

  // Print / Save to PDF
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ------------------------------------------------------------------------
  // 8. Contact Form Validation & Submission
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please provide a valid email format.';
        isValid = false;
      }

      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please specify a subject.';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please write your message.';
        isValid = false;
      }

      if (!isValid) return;

      // Prepare mailto link to open user's mail client directly
      const recipient = 'kmukilan885@gmail.com';
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hi Mugilarasan,\n\n${messageInput.value.trim()}\n\n---\nFrom: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      showToast('Opening your email app to send message...');

      // Open mail client
      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 700);
    });
  }

  // ------------------------------------------------------------------------
  // 9. Toast Notification Helper
  // ------------------------------------------------------------------------
  const toastBox = document.getElementById('toastBox');
  let toastTimer;

  function showToast(message) {
    if (!toastBox) return;
    toastBox.textContent = message;
    toastBox.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBox.classList.remove('show');
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // 10. Footer Current Year
  // ------------------------------------------------------------------------
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
