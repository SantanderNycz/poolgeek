async function listaFotos() {
  try {
    const conexao = await fetch("http://127.0.0.1:5500/index.html");
    if (!conexao.ok) {
      throw new Error("Erro ao listar as fotos");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
  } catch (erro) {
    console.error(erro);
  }
}

async function criaFoto(nome, valor, imagem) {
  const conexao = await fetch("http://127.0.0.1:5500/index.html", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem,
      status: true,
    }),
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  listaFotos,
  criaFoto,
};
