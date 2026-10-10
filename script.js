// Tailwind CSS configuration

tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'sans-serif'],
			},
			colors: {
				brand: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					900: '#134e4a',
				},
				accent: {
					purple: '#a855f7',
					cyan: '#06b6d4',
					emerald: '#10b981',
					amber: '#f59e0b',
				},
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				float: 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' },
				},
			},
		},
	},
}

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const mobileLinks = document.querySelectorAll('.mobile-link')

menuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden')
})

mobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		mobileMenu.classList.add('hidden')
	})
})

// Project Modal logic
function openProjectModal(title, description) {
	document.getElementById('modal-title').innerText = title
	document.getElementById('modal-desc').innerText = description
	document.getElementById('project-modal').classList.remove('hidden')
}

function closeProjectModal() {
	document.getElementById('project-modal').classList.add('hidden')
}

// Fixed navbar enhancement & active nav-link highlighting on scroll
const navbar = document.getElementById('navbar')
const sections = document.querySelectorAll('section[id]')
const desktopNavLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', () => {
	const scrollPos = window.scrollY

	// Add enhanced background/shadow when scrolled down
	if (navbar) {
		if (scrollPos > 30) {
			navbar.classList.add('scrolled')
		} else {
			navbar.classList.remove('scrolled')
		}
	}

	// Update active nav-link according to current visible section
	let currentSectionId = ''
	sections.forEach(section => {
		const sectionTop = section.offsetTop - 120
		const sectionHeight = section.offsetHeight
		if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
			currentSectionId = section.getAttribute('id')
		}
	})

	desktopNavLinks.forEach(link => {
		const href = link.getAttribute('href')
		if (href && href === `#${currentSectionId}`) {
			link.classList.add('active-nav')
		} else {
			link.classList.remove('active-nav')
		}
	})
})

// ==========================================
// Multi-Language (UZ / EN) Switcher
// ==========================================
const translations = {
	uz: {
		nav_hero: 'Hero',
		nav_hero_mob: 'Hero (Bosh Qism)',
		nav_about: 'Men Haqimda',
		nav_skills: "Ko'nikmalar",
		nav_projects: 'Loyihalar',
		nav_education: "Ta'lim",
		nav_education_mob: "Ta'lim va Yutuqlar",
		nav_contact: 'Aloqa',
		hero_badge: 'HERO • BOSH QISM',
		hero_title_prefix: 'Salom, men ',
		hero_role: 'Full-Stack Dasturchi & Muhandislikka Qiziquvchi',
		hero_quote:
			'"Zamonaviy texnologiyalar va sun\'iy intellekt orqali hayotni yengillashtiruvchi mukammal raqamli yechimlar yarataman."',
		hero_btn_projects: "Loyihalarni ko'rish",
		hero_btn_contact: "Bog'lanish",
		avatar_location: "Xiva, O'zbekiston",
		about_badge: "BO'LIM 2",
		about_title: 'Men haqimda',
		about_item1_label: '1. Kimman:',
		about_item1_text:
			"Men O'zbekistondagi 11-sinf o'quvchisiman va dasturlash hamda zamonaviy texnologiyalarga katta qiziqish bildiraman. Telegram botlaridan tortib veb-ilovalargacha bo'lgan turli raqamli mahsulotlarni yaratishni yoqtiraman. Men uchun dasturlash shunchaki kod yozish emas, balki muammolarga yechim topish, yangi g'oyalarni sinab ko'rish va amaliy tajriba orqali o'rganishdir.",
		about_item2_label: '2. Nimaga qiziqaman:',
		about_item2_text:
			"Men, ayniqsa, veb-dasturlash, sun'iy intellekt, jarayonlarni avtomatlashtirish va foydalanish uchun qulay interfeyslar yaratishga qiziqaman. Bundan tashqari, yangi g'oyalarni o'rganish, tanlovlarda o'zimni sinab ko'rish va olgan tajribalarim haqida fikr yuritishni yoqtiraman. Jamoam bilan Milliy AI Hackathon'da 3-o'rinni egallashim texnologiyalar olamidagi rivojlanish yo'limda muhim tajribalardan biri bo'ldi.",
		about_item3_label: '3. Maqsadim:',
		about_item3_text:
			"Maqsadim — xalqaro universitetlardan birida kompyuter fanlari yo'nalishida tahsil olish, texnologiyalar haqidagi bilimlarimni chuqurlashtirish va foydali g'oyalar ustida ishlaydigan insonlar bilan hamkorlik qilish. Kelajakda odamlarning hayotini yaxshilashga xizmat qiladigan raqamli mahsulotlar yaratish va jamiyat uchun foydali texnologik yechimlarni ishlab chiqishga hissa qo'shishni istayman.",
		skills_badge: "BO'LIM 3",
		skills_title: "Ko'nikmalar",
		skill_html_desc: 'Semantik UI',
		skill_css_desc: 'Responsive Style',
		skill_js_desc: 'ES6+ & Logic',
		skill_react_desc: 'UI Components',
		skill_node_desc: 'Backend API',
		skill_figma_desc: 'UI/UX Prototype',
		skill_git_desc: 'Version Control',
		skill_db_desc: "Ma'lumotlar bazasi",
		projects_badge: "BO'LIM 4",
		projects_title: 'Loyihalar',
		proj1_desc:
			"Restoran uchun Telegram bot (@chef_food_xiva_bot). Menyu ko'rish, buyurtma berish va boshqarish imkoniyatlarini taqdim etadi.",
		proj2_desc:
			'Bitiruvchilar uchun premium sifatli lentalar buyurtma qilish platformasi. Zamonaviy dizayn va qulay foydalanuvchi interfeysi.',
		proj3_desc:
			'Restoran uchun zamonaviy online taom buyurtma qilish va stol band qilish imkonini beruvchi interaktiv web sayt.',
		proj_demo: 'Demo & Tafsilot',
		edu_badge: "BO'LIM 5",
		edu_title: "Ta'lim va Yutuqlar",
		edu_institutions_title: "Ta'lim Dargohlari",
		edu_school_badge: "O'RTA TA'LIM",
		edu_school_name: "Xiva shahar 3-son o'rta ta'lim maktabi",
		edu_school_desc: "A'lo baholar va matematika-ingliz tili yo'nalishi",
		edu_courses_badge: 'IT DASTURLASH KURSLARI',
		edu_courses_desc:
			"HTML, CSS, JS, Telegram Bot va Web loyihalar bo'yicha intensiv ta'lim",
		edu_achievements_title: 'Yutuqlar & Sertifikatlar',
		edu_sat_title: 'SAT Natijasi: 1340 Score',
		edu_sat_desc: "Matematika va mantiqiy fikrlash bo'yicha yuqori ball",
		edu_olympiad_title: 'IT Olimpiada & Xakatonlar',
		edu_olympiad_desc:
			'Hududiy dasturlash tanlovlarida muvaffaqiyatli ishtirok va sertifikatlar',
		edu_english_title: 'Ingliz Tili (IELTS Tayyorgarlik)',
		language_proficiency_title: 'Til bilish darajasi',
		language_uzbek_name: "O'zbek tili",
		language_uzbek_level: 'Ona tili',
		language_russian_name: 'Rus tili',
		language_russian_level: 'Yuqori',
		language_english_name: 'Ingliz tili',
		language_english_level: "O'rta yuqori",
		contact_badge: "BO'LIM 6 • ALOQA",
		contact_title: "Men bilan bog'laning",
		contact_desc:
			'Savollaringiz bormi yoki birgalikda yangi loyiha yaratmoqchimisiz? Quyidagi ijtimoiy tarmoqlar orqali menga yozishingiz mumkin.',
		footer_copyright:
			'© 2026 Islambek Portfolio. Barcha huquqlar himoyalangan.',
		footer_back_top: 'Yuqoriga qaytish',
	},
	en: {
		nav_hero: 'Hero',
		nav_hero_mob: 'Hero (Home)',
		nav_about: 'About Me',
		nav_skills: 'Skills',
		nav_projects: 'Projects',
		nav_education: 'Education',
		nav_education_mob: 'Education & Awards',
		nav_contact: 'Contact',
		hero_badge: 'HERO • INTRODUCTION',
		hero_title_prefix: "Hi, I'm ",
		hero_role: 'Full-Stack Developer & Tech Enthusiast',
		hero_quote:
			'"Building seamless digital solutions that empower people through modern technologies and artificial intelligence."',
		hero_btn_projects: 'View Projects',
		hero_btn_contact: 'Contact Me',
		avatar_location: 'Khiva, Uzbekistan',
		about_badge: 'SECTION 2',
		about_title: 'About Me',
		about_item1_label: '1. Who I am:',
		about_item1_text:
			"I'm an 11th-grade student from Uzbekistan with a growing passion for programming and technology. I enjoy turning ideas into practical digital products, from Telegram bots to web applications. For me, building projects is not just about writing code; it's about solving problems, experimenting with ideas, and learning through experience.",
		about_item2_label: '2. My interests:',
		about_item2_text:
			"I'm particularly interested in web development, artificial intelligence, automation, and creating intuitive user experiences. I also enjoy exploring new ideas, challenging myself through competitions, and reflecting on what I learn along the way. Earning third place with my team at the National AI Hackathon was an important step in my journey.",
		about_item3_label: '3. My goal:',
		about_item3_text:
			"I aim to study computer science at an international university, deepen my understanding of technology, and collaborate with people who are passionate about building meaningful things. In the long term, I hope to create useful digital products and contribute to solutions that make people's lives better.",
		skills_badge: 'SECTION 3',
		skills_title: 'Skills',
		skill_html_desc: 'Semantic UI',
		skill_css_desc: 'Responsive Style',
		skill_js_desc: 'ES6+ & Logic',
		skill_react_desc: 'UI Components',
		skill_node_desc: 'Backend API',
		skill_figma_desc: 'UI/UX Prototype',
		skill_git_desc: 'Version Control',
		skill_db_desc: 'Databases',
		projects_badge: 'SECTION 4',
		projects_title: 'Projects',
		proj1_desc:
			'Telegram bot for restaurant (@chef_food_xiva_bot). Features food ordering, menu viewing, and administration.',
		proj2_desc:
			'Premium graduation sash ordering platform. Features modern design and a seamless user experience.',
		proj3_desc:
			'Modern responsive web app for restaurants with online ordering and table booking.',
		proj_demo: 'Demo & Details',
		edu_badge: 'SECTION 5',
		edu_title: 'Education & Achievements',
		edu_institutions_title: 'Education',
		edu_school_badge: 'SECONDARY EDUCATION',
		edu_school_name: 'Khiva School No. 3',
		edu_school_desc: 'Honors student, specialized in mathematics and English',
		edu_courses_badge: 'IT & CODING COURSES',
		edu_courses_desc:
			'Intensive training in HTML, CSS, JS, Telegram Bots, and Web projects',
		edu_achievements_title: 'Achievements & Certificates',
		edu_sat_title: 'SAT Score: 1340',
		edu_sat_desc: 'High score in mathematics and analytical reasoning',
		edu_olympiad_title: 'IT Olympiads & Hackathons',
		edu_olympiad_desc:
			'Successful participation and certificates in regional coding competitions',
		edu_english_title: 'English Proficiency (IELTS Prep)',
		language_proficiency_title: 'Language Proficiency',
		language_uzbek_name: 'Uzbek',
		language_uzbek_level: 'Native',
		language_russian_name: 'Russian',
		language_russian_level: 'Advanced',
		language_english_name: 'English',
		language_english_level: 'Upper Intermediate',
		contact_badge: 'SECTION 6 • CONTACT',
		contact_title: 'Get In Touch',
		contact_desc:
			'Have a question or looking to build a new project together? Reach out to me via any platform below.',
		footer_copyright: '© 2026 Islambek Portfolio. All rights reserved.',
		footer_back_top: 'Back to top',
	},
}

function setLanguage(lang) {
	const currentLang = translations[lang] ? lang : 'uz'
	const dict = translations[currentLang]

	// Update HTML lang attribute
	document.documentElement.setAttribute('lang', currentLang)

	// Update all elements with data-i18n
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n')
		if (dict[key]) {
			el.textContent = dict[key]
		}
	})

	// Update active state on all language switcher buttons
	document.querySelectorAll('.lang-btn').forEach(btn => {
		if (btn.getAttribute('data-lang') === currentLang) {
			btn.classList.add('active')
		} else {
			btn.classList.remove('active')
		}
	})

	// Persist choice in localStorage
	try {
		localStorage.setItem('site_lang', currentLang)
	} catch (e) {
		/* ignore */
	}
}

// Bind click events on all language buttons (desktop and mobile)
document.querySelectorAll('.lang-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		const chosenLang = btn.getAttribute('data-lang')
		setLanguage(chosenLang)
	})
})

// Initialize language from saved preference or default to Uzbek
const savedLang = (() => {
	try {
		return localStorage.getItem('site_lang') || 'uz'
	} catch (e) {
		return 'uz'
	}
})()
setLanguage(savedLang)
