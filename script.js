var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skillsSection');
var isSkillsVisible = false;
toggleButton.addEventListener('click', function () {
    isSkillsVisible = !isSkillsVisible;
    skillsSection.style.display = isSkillsVisible ? 'block' : 'none';
    toggleButton.textContent = isSkillsVisible ? 'Hide Skills' : 'Show Skills';
});
