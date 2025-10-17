/**
 * Fade-in animation utility
 * Handles smooth fade-in animations for portfolio components
 */

export const initFadeAnimations = () => {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	// Observe all elements with fade-in classes
	const fadeElements = document.querySelectorAll('.fade-in, .fade-in-stagger');
	fadeElements.forEach((element) => {
		observer.observe(element);
	});

	return () => {
		fadeElements.forEach((element) => {
			observer.unobserve(element);
		});
	};
};
