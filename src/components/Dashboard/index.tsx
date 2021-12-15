import { useContext, useEffect, useState } from "react";
import setaImg from "../../assets/seta.svg";
import { api } from "../../services/api";
import { CardProduto } from "../CardProduto";
import { Container, Order } from "./styles";
import ReactLoading from "react-loading";
import { BuscaContext } from "../../context/BuscaContext";
import { OrderModal } from "../OrderModal";
import { IProduto } from "../../models/produto";

export function Dashboard() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [isLoadingProdutos, setIsLoadingProdutos] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [position, setPosition] = useState({ content: { left: 0, top: 0 } });
  // const { produtos, setProdutos } = useContext(BuscaContext);
  const { searchProduto, searchCategoria, searchOrder } = useContext(BuscaContext);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  function handleOpenOrderModal() {
    setIsOrderModalOpen(true);
  }
  function handleCloseOrderModal() {
    setIsOrderModalOpen(false);
  }

  const fetchProdutos = async (searchProduto: string) => {
    console.log(searchProduto);
    console.log(searchOrder);

    await api
      .get("/produto", {
        params: { titulo: searchProduto, categoria: searchCategoria, orderBy: searchOrder },
      })
      .then((response) => {
        setProdutos(response.data);
        setNotFound(false);
      })
      .catch(() => {
        setNotFound(true);
        setProdutos([]);
      });
    setIsLoadingProdutos(false);
  };

  useEffect(() => {
    setIsLoadingProdutos(true);
    fetchProdutos(searchProduto);
  }, [searchProduto, searchCategoria, searchOrder]);

  return (
    <>
      <Order>
        <button onClick={(evt)=> {handleOpenOrderModal(); setPosition({ content: { left: evt.clientX, top: evt.clientY } });}}>
          <p>Ordenar por</p> <img className="seta" src={setaImg} alt="seta" />
        </button>
        <OrderModal
        isOpen={isOrderModalOpen}
        onRequestClose={handleCloseOrderModal}
        style={position}
      />
      </Order>
      
      <Container>
        {isLoadingProdutos ? (
          <ReactLoading
            type="bubbles"
            color="#FF3E3E"
            height={666}
            width={666}
          />
        ) : (
          produtos.map((item, index) => {
            return <CardProduto key={index} produto={item} />;
          })
        )}
        {notFound && <h2>Produto ou Categoria não encontrada!</h2>}
      </Container>
    </>
  );
}
