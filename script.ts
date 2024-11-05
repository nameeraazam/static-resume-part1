const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

let isSkillsVisible = false;

toggleButton.addEventListener('click', () => {
  isSkillsVisible = !isSkillsVisible;
  skillsSection.style.display = isSkillsVisible ? 'block' : 'none';
  toggleButton.textContent = isSkillsVisible ? 'Hide Skills' : 'Show Skills';
});