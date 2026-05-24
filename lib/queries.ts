export const IMOVEL_PROJECTION = `{
  ...,
  imagemCapa{..., asset->},
  galeria[]{..., asset->},
  "categoriaNome": categoria->nome,
  "categoriaSlug": categoria->slug.current,
  "bairroNome": bairro->nome,
  "cidadeNome": cidade->nome,
  bairro->{nome},
  cidade->{nome}
}`;

export const QUERY_FEATURED = `*[_type == "imovel" && isDestaque == true][0...6]${IMOVEL_PROJECTION}`;

export const QUERY_TRENDING = `*[_type == "imovel"] | order(views desc)[0...4]${IMOVEL_PROJECTION}`;

export const QUERY_BY_SLUG = `*[_type == "imovel" && slug.current == $slug][0]${IMOVEL_PROJECTION}`;

export const QUERY_CATEGORIAS = `*[_type == "categoria"] | order(nome asc) { _id, nome, "slug": slug.current }`;

export const QUERY_CIDADES = `*[_type == "cidade"] | order(nome asc) { _id, nome }`;

export const QUERY_BAIRROS = `*[_type == "bairro"] | order(nome asc) { _id, nome, "cidadeId": cidade._ref }`;
