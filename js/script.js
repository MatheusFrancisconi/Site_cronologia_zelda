const elementos = document.querySelectorAll(".revelar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("ativo");
        } else {
            entry.target.classList.remove("ativo");
        }

    });
});

elementos.forEach((elemento) => {
    observer.observe(elemento);
});