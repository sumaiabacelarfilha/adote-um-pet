function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "Nada foi encontrado";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let link = "";
  let tags = "";

  // O "for" está percorrendo("looping") em todos os dados que foram definidos no arquivo (dados.js)
  // Durante o "loop" ele irá criar a variável - dado - atribuindo um dado que foi definido na
  // lista dados de cada vez ou em cada interação do looping
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    link = dado.link.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      link.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `<div class="item-resultado">
          <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a
          >
        </div>
        `;
    }
    console.log(dado.titulo.includes(campoPesquisa));
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado </p>";
  }
  section.innerHTML = resultados;
}
