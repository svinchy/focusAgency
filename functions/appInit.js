import { IMG } from './images.js';
import { render } from './render.js';

export const appInit = function appInit() {
  // Import content data inline (no imports allowed between project files)
  const content = {
    navbar: {
      en: { service: 'service', about: 'we are', contact: 'contact' },
      ka: { service: 'სერვისი', about: 'ჩვენ ვართ', contact: 'კონტაქტი' }
    },
    banner: {
      en: { subtitle: 'Increase your sales and brand awareness with our team', title: 'Focus Agency' },
      ka: { subtitle: 'გაზარდეთ თქვენი გაყიდვები და ბრენდის ცნობადობა ჩვენი გუნდით', title: 'Focus Agency' }
    },
    services: {
      en: {
        title: 'We offer full digital services',
        items: [
          { title: 'Social Media Marketing', description: 'Content creation and advertising', image: IMG.media },
          { title: 'Google Analytics', description: 'Full Google services support', image: IMG.analytics },
          { title: 'Web Development', description: 'Website building and management', image: IMG.web },
          { title: 'Video Production', description: 'Full photo/video production', image: IMG.video }
        ]
      },
      ka: {
        title: 'ჩვენ გთავაზობთ სრულ ციფრულ მომსახურებას',
        items: [
          { title: 'სოც მედია მარკეტინგი', description: 'კონტენტის შექმნა და რეკლამა', image: IMG.media },
          { title: 'გუგლ ანალიტიკა', description: 'სრული Google სერვისების მომსახურება', image: IMG.analytics },
          { title: 'ვებ დეველოპმენტი', description: 'საიტების აწყობა და მართვა', image: IMG.web },
          { title: 'ვიდეო პროდაქშენი', description: 'სრული ფოტო/ვიდეო მომსახურება', image: IMG.video }
        ]
      }
    },
    serviceContent: {
      en: {
        socialMediaMarketing: ['Social Media Strategy','Content Planning & Calendar','Visual & Copy Content Creation','Social Media Management','Targeted Ad Campaigns','Audience Analysis & Segmentation','Brand Voice & Style Development','Performance Analytics & Reporting','Social Media Audit','Engagement Growth','Influencer Marketing','Campaign Optimization','Ad Budget Management','Crisis Communication Management','Brand Awareness Growth'],
        googleAnalytics: ['Google Analytics Setup & Monitoring','Keyword Research','On-Page SEO','Off-Page SEO / Link Building','Technical SEO Audit','Local SEO Optimization','Competitor Analysis','Content Optimization','SEO Reporting & Insights','Google Ads Campaign Setup','Search Campaign Optimization','Display Ads Management','Remarketing Campaigns','Conversion Tracking & Optimization','Analytical Reporting'],
        webDevelopment: ['Website Planning & Strategy','UI/UX Design','Front-End Development','Back-End Development','CMS Development','E-Commerce Solutions','SEO & Optimization','Maintenance & Support','Specialized Web Solutions'],
        videoProduction: ['Social-first videos (Reels, Shorts, TikTok)','Commercial / Ad video','Corporate / Brand video','Product video','Medical / Healthcare videos','Construction / Industrial videos','Aerial videography','Video content strategy','Video ad media planning (Meta, YouTube, TikTok)','Translation & subtitles in multiple languages','Video upload & YouTube SEO optimization']
      },
      ka: {
        socialMediaMarketing: ['სოციალური მედიის სტრატეგიის შემუშავება','კონტენტ პლანირება და კალენდარი','ვიზუალური და ტექსტური კონტენტის შექმნა','ოციალური ქსელების მართვა','მიზნობრივი სარეკლამო კამპანიები','აუდიტორიის ანალიზი და სეგმენტაცია','ბრენდის ტონისა და სტილის დეველოპმენტი','შედეგების ანალიტიკა და რეპორტინგი','სოციალური მედიის აუდიტი','მომხმარებელთა ჩართულობის ზრდა','ინფლუენსერ მარკეტინგი','სოციალური კამპანიების ოპტიმიზაცია','სარეკლამო ბიუჯეტის მართვა','კრიზისული კომუნიკაციების მართვა','ბრენდის ცნობადობის ამაღლება'],
        googleAnalytics: ['გუგლ ანალიტიქსის დაყენება და მონიტორინგი','საკვანძო სიტყვების კვლევა','საძიებო სისტემისთვის ოპტიმიზაცია','გარე ბმულების სტრატეგია','ტექნიკური SEO ანალიზი','ადგილობრივი SEO ოპტიმიზაცია','კონკურენტების ანალიზი','კონტენტის ოპტიმიზაცია','SEO რეპორტინგი და შედეგების ანალიზი','გუგლ Ads კამპანიების შექმნა','ძიების კამპანიების ოპტიმიზაცია','ბანერებისა და დისპლეი რეკლამების მართვა','რემარკეტინგის კამპანიები','კონვერსიის თვალთვალი და ოპტიმიზაცია','ანალიტიკური ანგარიშების მომზადება'],
        webDevelopment: ['ვებსაიტის დაგეგმვა და სტრატეგია','მომხმარებლის ინტერფეისის და გამოცდილების დიზაინი','ფრონტ-ენდ დეველოპმენტი','ბექ-ენდ დეველოპმენტი','კონტენტის მენეჯმენტის სისტემების დეველოპმენტი','ელექტრონული კომერციის გადაწყვეტები','საძიებო ოპტიმიზაცია და შესრულების გაუმჯობესება','ტექნიკური მხარდაჭერა და მოვლა','სპეციალიზებული ვებ გადაწყვეტები'],
        videoProduction: ['სოციალური ქსელებისთვის ოპტიმიზებული ვიდეოები (Reels, Shorts, TikTok)','სარეკლამო ვიდეო (Commercial / Ad video)','კორპორაციული ვიდეო / ბრენდის ვიდეო','პროდუქტის ვიდეო','მედიცინის / ჯანმრთელობის თემატური ვიდეოები','სამშენებლო / ინდუსტრიული ვიდეოები','დრონის ვიდეოგადაღება (Aerial videography)','ვიდეოს კონტენტის სტრატეგიის შემუშავება','ვიდეო რეკლამების Mediaplan-ის დაგეგმვა (Meta, YouTube, TikTok)','თარგმნა და სუბტიტრები სხვადასხვა ენაზე','ვიდეოს ატვირთვა და SEO ოპტიმიზაცია YouTube-ზე']
      }
    },
    steps: {
      en: { title: 'Flow to Work', items: [{ number: '01', title: 'initial consultation' }, { number: '02', title: 'strategy development and implementation.' }, { number: '03', title: 'review and final refinement' }] },
      ka: { title: 'სამუშაო პროცესი', items: [{ number: '01', title: 'საწყისი კონსულტაცია' }, { number: '02', title: 'სტრატეგიის შემუშავება და დანერგვა.' }, { number: '03', title: 'შეფასება და საბოლოო დახვეწა' }] }
    },
    team: {
      en: { title: 'Our Team', more: 'know us better', members: [{ role: 'Founder', name: 'Giorgi', image: IMG.choni }, { role: 'Project Manager', name: 'Liza', image: IMG.liza }, { role: 'Graphic Designer', name: 'Mariami', image: IMG.mariami }, { role: 'Videograph', name: 'Luka', image: IMG.luka }] },
      ka: { title: 'ჩვენი გუნდი', more: 'გაგვიცანით უკეთ', members: [{ role: 'დამფუძნებელი', name: 'გიორგი', image: IMG.choni }, { role: 'პროექტ მენეჯერი', name: 'ლიზა', image: IMG.liza }, { role: 'გრაფიკული დიზაინერი', name: 'მარიამი', image: IMG.mariami }, { role: 'ვიდეოგრაფი', name: 'ლუკა', image: IMG.luka }] }
    },
    testimonial: {
      en: { title: 'people talks', messages: [{ author: 'James Harisson', text: 'I had an excellent experience everything was done accurately and on time' }, { author: 'Nina Carter', text: 'The team was responsive and execution quality was consistently high.' }, { author: 'Robert Allen', text: 'Strong communication and fast delivery through the whole process.' }, { author: 'Maria Brown', text: 'They understood the brief quickly and improved our results month by month.' }, { author: 'David Smith', text: 'Everything was clear, on schedule, and aligned with our business goals.' }, { author: 'Sophia Miller', text: 'Creative ideas with practical implementation and measurable impact.' }, { author: 'Alex Johnson', text: 'Professional workflow, transparent updates, and great final output.' }] },
      ka: { title: 'ჩვენზე ამბობენ', messages: [{ author: 'ჯეიმს ჰარისონი', text: 'ძალიან კარგი გამოცდილება მივიღე ყველაფერი ზუსტად და დროულად შესრულდა.' }, { author: 'ნინა კარტერი', text: 'გუნდი ოპერატიული იყო და შესრულების ხარისხი სტაბილურად მაღალი დარჩა.' }, { author: 'რობერტ ალენი', text: 'კომუნიკაცია ძლიერი იყო და მიწოდება მთელი პროცესის განმავლობაში სწრაფად ხდებოდა.' }, { author: 'მარია ბრაუნი', text: 'ბრიფი სწრაფად გაიგეს და შედეგები თვიდან თვემდე მნიშვნელოვნად გააუმჯობესეს.' }, { author: 'დავით სმითი', text: 'ყველაფერი იყო გასაგები, ვადებში და სრულად მიბმული ბიზნეს მიზნებზე.' }, { author: 'სოფია მილერი', text: 'კრეატიული იდეები პრაქტიკულ შესრულებასთან და გაზომვად შედეგებთან ერთად.' }, { author: 'ალექს ჯონსონი', text: 'პროფესიული სამუშაო პროცესი, გამჭვირვალე განახლებები და ძლიერი საბოლოო შედეგი.' }] }
    },
    contact: {
      en: { brand: 'focus agency', form: { legend: 'have a question?', namePlaceholder: 'name', emailPlaceholder: 'email', messagePlaceholder: 'shoot a message', submit: 'send' }, details: { phoneLabel: 'call us any time', phone: '+995 595 893 399', emailLabel: 'connect with us by email', email: 'gamarjoba@focusagency.ge', socialLabel: 'Follow us' }, address: { title: "you're welcome to visit us", line1: 'Tbilisi, Saburtalo', line2: 'Alexandre Khazbegi street N24 g' }, paragraph: 'Our agency was founded with one main purpose - to support growth and success of businesses. Every client is unique to us, which is why we always listen carefully to your needs and create strategies that deliver real results.' },
      ka: { brand: 'Focus Agency', form: { legend: 'გაქვს შეკითხვა?', namePlaceholder: 'სახელი', emailPlaceholder: 'ელ-ფოსტა', messagePlaceholder: 'მოგვწერე', submit: 'გამოგზავნე' }, details: { phoneLabel: 'დაგვირეკე ნებისმიერ დროს', phone: '+995 595 893 399', emailLabel: 'დაგვიკავშირდი ელ-ფოსტაზე', email: 'gamarjoba@focusagency.ge', socialLabel: 'გამოგვყევი' }, address: { title: 'სიამოვნებით გიმასპინძლებთ ოფისში', line1: 'თბილისი, საბურთალო', line2: 'ალექსანდრე ყაზბეგის ქუჩა N24 გ' }, paragraph: 'ჩვენი სააგენტო ერთი მთავარი მიზნისთვის შეიქმნა - ხელი შევუწყოთ ბიზნესების ზრდასა და წარმატებას. თითოეული კლიენტი ჩვენთვის უნიკალურია, ამიტომ ყურადღებით ვისმენთ შენს საჭიროებებს და ვქმნით სტრატეგიებს, რომლებიც რეალურ შედეგს იძლევა.' }
    }
  };

  window.__focusContent = content;
  window.__focusLang = localStorage.getItem('lang') || 'en';
  window.__focusPreviousLang = window.__focusLang;

  // Expose render globally
  window.__focusRender = render;

  // Enforce scroll restoration
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  // Detect runtime flags
  const ua = navigator.userAgent || '';
  const isSafari = /Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg|EdgiOS|Firefox|FxiOS|OPR|OPiOS|SamsungBrowser/i.test(ua);
  const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const isTabletOrSmaller = window.matchMedia('(max-width: 1180px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const flags = { isSafari, isCoarsePointer, isTabletOrSmaller, prefersReducedMotion, isPerformanceMode: isCoarsePointer || isTabletOrSmaller };

  if (document.body) {
    document.body.classList.toggle('is-safari', isSafari);
    document.body.classList.toggle('is-mobile-coarse', isCoarsePointer);
  }

  // Init viewport metrics
  const setMetrics = () => {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-visual-viewport-height', h + 'px');
  };
  setMetrics();
  window.addEventListener('resize', setMetrics);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setMetrics);
    window.visualViewport.addEventListener('scroll', setMetrics);
  }

  // Set initial lang on body
  document.body.dataset.lang = window.__focusLang;
  window.scrollTo(0, 0);

  // Set static image srcs (DOMQL does not render src as HTML attr)
  const setStaticImages = () => {
    const globeImg = document.querySelector('.globe');
    if (globeImg) globeImg.src = IMG.globe;

    // Quotation mark
    const quoteImg = document.querySelector('.testimonial [key="Img"]');
    if (quoteImg) quoteImg.src = IMG.quotationMark;

    // Footer street images
    const streetImgs = document.querySelectorAll('.address img');
    [IMG.street, IMG.street2].forEach((src, i) => { if (streetImgs[i]) streetImgs[i].src = src; });

    // Footer nav social icons (facebook, instagram)
    const footerNavImgs = document.querySelectorAll('footer nav img');
    [IMG.facebook, IMG.instagram].forEach((src, i) => { if (footerNavImgs[i]) footerNavImgs[i].src = src; });

    // Team member social icons (facebook, linkedin)
    document.querySelectorAll('.teamMember').forEach(member => {
      const navImgs = member.querySelectorAll('nav img');
      [IMG.facebook, IMG.linkedin].forEach((src, i) => { if (navImgs[i]) navImgs[i].src = src; });
    });

    // Service card button arrows
    document.querySelectorAll('.service button img').forEach((img, i) => {
      img.src = i % 2 === 0 ? IMG.arrow : IMG.close;
    });

    // Nav arrows (team carousel prev/next)
    const navArrowImgs = document.querySelectorAll('.navArrows button img');
    [IMG.arrowLeft, IMG.arrowRight].forEach((src, i) => { if (navArrowImgs[i]) navArrowImgs[i].src = src; });
  };
  setStaticImages();

  // Expose toggleCrispChat globally
  window.toggleCrispChat = function() {
    const overlay = document.getElementById('crisp-chat-overlay');
    const chatBtn = document.querySelector('.chatButton');
    if (!overlay) return;
    const isOpen = overlay.classList.toggle('is-visible');
    if (chatBtn) chatBtn.classList.toggle('is-active', isOpen);
    document.body.classList.toggle('chat-panel-open', isOpen);
    if (chatBtn) chatBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      overlay.removeAttribute('aria-hidden');
      overlay.removeAttribute('inert');
      const iframe = document.getElementById('crisp-chat-frame');
      if (iframe && iframe.dataset.src && !iframe.src) iframe.src = iframe.dataset.src;
      document.body.dataset.chatScrollLock = '1';
    } else {
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('inert', '');
      document.body.dataset.chatScrollLock = '0';
    }
  };
};
