document.addEventListener('DOMContentLoaded', function () {
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((el, index) => {
            el.style.display = index === step ? 'block' : 'none';
        });
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
            // Chama a atualização da revisão ao chegar na última etapa
            if (currentStep === steps.length - 1) {
                updateReview();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    function updateReview() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const desc = document.getElementById('desc').value;

        // Atualiza a revisão com os valores preenchidos
        document.getElementById('review').innerText = `Nome: ${name}, Email: ${email}, Descrição: ${desc}`;
    }

    showStep(currentStep);
});
