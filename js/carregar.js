const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa =>  card(tarefa) )


function card(tarefa){

    //template literals
    const content =  
    `
    <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon star is-small"></i></span>
                <span class="is-success">${tarefa.pontos}</span>
            </a>
            <progress class="nes-progress is-success" value="50" max="100"></progress>
            
            <button type="button" class="nes-btn is-primary">-</button>
            <button type="button" class="nes-btn is-error">Apagar</button>
            <button type="button" class="nes-btn is-primary">+</button>
        </div>
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document
    .querySelector("#lista-de-tarefas")
    .appendChild(card);

}