document.addEventListener('DOMContentLoaded', function() {
    const listaItens = document.querySelectorAll('.menu .list_guia li');

    listaItens.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
});
