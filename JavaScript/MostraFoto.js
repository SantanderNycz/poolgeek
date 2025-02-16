import { conectaApi } from "./conectaAPI.js";
import { apagarCard } from "./apagaCard.js";

const lista = document.querySelector("[data-lista]");

/* id adicionado como argumento, para o atributo customizado data-id para armazenar o id do objeto associado ao card*/
function constroiCard(imagem, nome, valor, id) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute(
    "data-id",
    id
  ); /* adicionado attributo para armazenar o id do card */
  card.innerHTML = ` <div class="box__card">
        <img src="${imagem}" alt="">
        <h3>${nome}</h3>
    </div>

    <div class="preco">
        <p>$ ${valor}</p>
            <img id="lixeira" src="./assets/lixeira.png">
</div>
    `;
  const lixeira = card.querySelector("#lixeira");
  lixeira.addEventListener("click", async () => {
    const id = card.getAttribute("data-id");
    card.remove();
    await apagarCard(id); //chama a função apagar card
  });

  return card;
}

async function listaFotos() {
  try {
    const listaApi = await conectaApi.listaFotos();
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroiCard(
          elemento.imagem,
          elemento.nome,
          elemento.valor,
          elemento.id
        )
      )
    );
  } catch (erro) {
    console.error(erro);
  }
}
listaFotos();
