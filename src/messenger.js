module.exports = async function message(fetch) {
  const result_fetch = await fetch.json();
  const retorno = [];
  // data.id;
  // data.attributes.discount_percentage;
  // data.attributes.price;
  // data.attributes.price_with_discount;
  // data.attributes.title;
  result_fetch.data.map((produto) => {
    const detail = produto.attributes;
    const objeto_produto = {
      id: produto.id,
      texto: `
Titulo:${detail.title}
Preço original:${detail.price}
Preço com Desconto:${detail.price_with_discount}
Percentual de desconto:${detail.discount_percentage}%
Link: https://kabum.com.br/produto/${produto.id}
            `,
    };
    retorno.push(objeto_produto);
  });
  return retorno;
};
