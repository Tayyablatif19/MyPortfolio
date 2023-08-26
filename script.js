// 1-) for changing the skills under the name
const skillsElement = document.getElementById("skills");
const skills = ["Electrical Engineering Student", "Front-End Web Developer", "Photographer", "Digital Artist"];
let skillIndex = 0;

function updateSkills() {
  skillsElement.textContent = skills[skillIndex];
  skillIndex = (skillIndex + 1) % skills.length;
}

updateSkills(); 
setInterval(updateSkills, 1000); 

// 2-)swiping functions for images

