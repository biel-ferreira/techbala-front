export interface IProduto {
  titulo: string;
  preco: number;
  imagem: string;
  categoria: string;
  estoque: number;
  descricao: string;
  informacoestecnicas: {
    modelo: string;
    marca: string;
    peso: number;
    especificacoes: string;
    garantia: string;
    dimensoes: {
      comprimento: number;
      largura: number;
      altura: number;
    };
  };
}

export interface IProdutoCarrinho extends IProduto{
  quantity: number
}
