
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

function animateSkills() {
    const skills = document.querySelectorAll(".progress");
    const triggerBottom = window.innerHeight * 0.85;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;

        if (skillTop < triggerBottom) {
            if (skill.classList.contains("html")) skill.style.width = "50%";
            if (skill.classList.contains("css")) skill.style.width = "50%";
            if (skill.classList.contains("js")) skill.style.width = "30%";
            if (skill.classList.contains("csharp")) skill.style.width = "100%";
        }
    });
}
window.addEventListener("scroll", animateSkills);