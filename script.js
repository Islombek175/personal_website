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
