
document.addEventListener('DOMContentLoaded', () => {
    console.log("JAVASCRIPT ESTÁ FUNCIONANDO!");

    // =====================================
    // MENU MOBILE
    // =====================================

    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {

        toggle.addEventListener('click', () => {

            const open = nav.classList.toggle('open');

            toggle.setAttribute('aria-expanded', String(open));
            toggle.textContent = open ? '×' : '☰';

        });

        // FECHAR MENU AO CLICAR EM UM LINK

        document.querySelectorAll('.nav a').forEach(link => {

            link.addEventListener('click', () => {

                nav.classList.remove('open');

                toggle.setAttribute('aria-expanded', 'false');
                toggle.textContent = '☰';

            });

        });

    }


    // =====================================
    // ANO AUTOMÁTICO NO RODAPÉ
    // =====================================

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =====================================
    // ANIMAÇÕES AO ROLAR A PÁGINA
    // =====================================

    const elementosAnimados = document.querySelectorAll(
        'section, .tema-card'
    );

    // Verifica se o navegador suporta IntersectionObserver

    if ('IntersectionObserver' in window) {

        const observador = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    observador.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.10
        });

        elementosAnimados.forEach(elemento => {

            elemento.classList.add('reveal');

            observador.observe(elemento);

        });

    } else {

        // Exibe normalmente se não houver suporte

        elementosAnimados.forEach(elemento => {
            elemento.classList.add('visible');
        });

    }

});
