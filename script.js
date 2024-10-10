// Author : Saad Jabrane
// date : 2024/10/09
// tutorial : https://udemy.com/course/50-projects-50-days

const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

const circles = document.querySelectorAll('.circle');

let activeCircle = 0;

nextBtn.addEventListener("click", () => {
    activeCircle++;
}
)

previousBtn.addEventListener("click", () => {
    activeCircle--;
}
)

function update() {
    circles.forEach((circle, i) => {
        if (i <= activeCircle) {
            circle.classList.add('active');
        }
    })
}