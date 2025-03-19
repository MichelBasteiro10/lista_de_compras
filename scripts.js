// Obtendo elementos
const form = document.querySelector(`form`);
const newItem = document.querySelector(`#new-item`);
const list = document.querySelector(`#list ul`);
const statusBar = document.querySelector(`#status-bar`);
const closeButton = document.querySelector("#status-bar img[alt='delete']")

// Prevenindo o recarregamento da página e adicionado elemento.
form.onsubmit = (event) => {
    event.preventDefault();
    addItemList();
    removeItem();
    checkboxChecked();
};

// Criando novo elemento da lista de compras.
function addItemList() {
    const item = newItem.value.trim();
    if (item === ``) return;

    // Criando o li e adicionando a classe item responsavel pela estilização.
    const li = document.createElement(`li`);
    li.classList.add(`item`);

    // Cria o elemento img e adiciona a imagem correta.
    const checkbox = document.createElement(`img`);
    checkbox.src = "assets/icons/checkbox-default.svg";
    checkbox.alt = `Checkbox`

    // Resgata o valor recebido no input e atribui a tag p.
    const text = document.createElement(`p`);
    text.textContent = item;

    // Cria o elemento img e adiciona a imagem correta.
    const lixeira = document.createElement(`img`);
    lixeira.src = "assets/icons/delete.svg";
    lixeira.alt = `Lixeira`

    // Adiciona os elementos dentro da <li>.
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(lixeira);

    // Adiciona a <li> dentro da <ul>.
    list.appendChild(li);

    // Limpando o input.
    newItem.value = ``
}

function checkboxChecked () {
    list.addEventListener(`click`, (event) => {
        // Verifica se o clique foi no checkbox
        if (event.target.tagName ===`img` && event.target.src.includes(`checkbox-default`));

        // Alterna entre default e checked.
        if (event.target.src.includes(`checkbox-default`)) {
            event.target.src = "assets/icons/checkbox-selected.svg";
        } else {
            event.target.src = "assets/icons/checkbox-default.svg";
        }
    });
}

// Removendo item da lista
function removeItem() {
    list.addEventListener(`click`, (event) => {
        // Verificando se o clique foi na lixeira.
        if (event.target && event.target.alt === `Lixeira`) {
            // remove a <li> correspondente a lixeira clicada.
            event.target.parentElement.remove();

            // Exibindo a status-bar.
            statusBar.classList.remove(`hide`);
            
            // Esconde a status-bar após 3seg
            setTimeout(() => {
                statusBar.classList.add(`hide`);
            }, 3000)

            // Remove imediatamente a status-bar se o icone for clicado.
            closeButton.addEventListener(`click`, () => {
                statusBar.classList.add(`hide`)
            })
        }
    });
}