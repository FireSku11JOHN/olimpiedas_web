

function pesquisar () {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisar = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisar);

    
    if (!campoPesquisar) {
        section.innerHTML = `<p>Nenhum resultado equivalente encontrado. Digite o nome do atleta oiu esporte.</p>`
        return;
    };
    
    campoPesquisar = campoPesquisar.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        
        if (titulo.includes(campoPesquisar) || descricao.includes(campoPesquisar) || tags.includes(campoPesquisar)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p> 
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
    `
        };

        if (!resultados) {
            resultados = `<p>Nenhum resultado equivalente encontrado.</p>`
        };
        };

    section.innerHTML = resultados;

}