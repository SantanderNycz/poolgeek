import { conectaApi } from "./conectaAPI.js";

export async function apagarCard(id) {
  try {
    const conexao = await fetch(`http://127.0.0.1:5500/index.html/${id}`, {
      method: "DELETE",
    });
    if (!conexao.ok) {
      throw new Error("Erro ao apagar o card");
    }
    return conexao;
  } catch (erro) {
    console.error(erro);
  }
}
