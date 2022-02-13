import '../sass/main.scss';

// alternador do menu
// selecionando o botão toggleMenu
const toggleMenu = document.querySelector('.header-toggle-menu');

// adicionar um evento de clique ao botão
// ao clicarmos no botão será adicionado uma classe active
// tanto para o botão como para o menu
// a classe active do menu faz o menu abrir
toggleMenu.addEventListener('click', function () {

    // add active ao botão
    this.classList.toggle('active');
    // selecionando o menu próximo ao botão
    const menu = this.nextElementSibling;
    // add active ao menu
    menu.classList.toggle('active');
});


// faqs
const questions = document.querySelectorAll('.faq__header');

questions.forEach(question => {
    question.addEventListener('click', function () {

        let itemAtivo = document.querySelector('.faq.active .faq__header2');

        if (itemAtivo && itemAtivo !== this) {
            console.log('executei');
            // fecha quem tá aberto
            checkFaq(itemAtivo);
        }
        checkFaq(question);
    });
});

function checkFaq(question) {

    // seleciona o item pai
    const parent = question.parentElement;

    // add active ao item pai
    parent.classList.toggle('active');

    // seleciona a resposta
    const answer = question.nextElementSibling;


    if (answer.style.maxHeight) {
        // se tiver altura então "feche"
        answer.style.maxHeight = null;
    }
    else {
        //senão abra
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}







