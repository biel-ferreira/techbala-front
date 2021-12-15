import { Container, InfoContato, InfoPagamentos, InfoPedidos, InfoPessoal } from "./styles"
import EmailImg from "../../assets/Email.svg"
import ConfigImg from "../../assets/Config.svg"
import CardImg from "../../assets/Cartao.svg"
import CartImg from "../../assets/Carrinho.svg"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { api } from "../../services/api"
import { useNavigate } from "react-router"


interface PerfilProps {
    onOpenUpdateModal: () => void;
}

export function Perfil({ onOpenUpdateModal }: PerfilProps) {


    const navigate = useNavigate();
    const { usuario, token } = useContext(AuthContext);

    return (
        <Container>
            <label className="label" htmlFor="InfoPessoal">Bem Vindo, {usuario.nome}!</label>
            <InfoPessoal>
                <form>
                    <input className="upload" name="file" type="file" alt="foto-perfil" onChange={async (e) => {
                        console.log(e)
                        if (e.target.files?.length) {
                            const body = new FormData()
                            body.append("file", e.target.files[0])
                            console.log(token)
                            await api
                                .post('/auth/upload', body, {
                                    headers: {
                                        "content-type": "multipart/form-data", 'Authorization': `Bearer ${token}`
                                    }
                                }).catch(console.log)
                            const a = document.querySelector('.uploadSub') as HTMLInputElement;
                            if (a) { a.click() }
                        }
                    }} ></input>
                    <button className="uploadSub" type="submit" onClick={() => navigate("/perfil")}></button>
                </form>
                <img className="perfil-image" src={usuario.imagem} alt="perfil-img" onClick={() => {
                    const a = document.querySelector('.upload') as HTMLInputElement;
                    if (a) { a.click() }
                }} />
                <div className="text-info">
                    <div className="box">
                        <p className="textName">{usuario.nome}</p>
                        <img className="config-btt" src={ConfigImg} alt="config" onClick={onOpenUpdateModal} />
                    </div>
                    <div className="box">
                        <p className="textEmail"> <img src={EmailImg} alt="email" /> {usuario.email}</p>
                    </div>
                </div>
            </InfoPessoal>
            <InfoPagamentos>
                <p className="pagamentos">Formas de pagamento</p>
                <div className="box">
                    <p className="textCard"> <img src={CardImg} alt="card-img" /> Cartão de crédito </p>
                    <p className="textCard">VISA ************4444</p>
                </div>
            </InfoPagamentos>
            <label className="label" htmlFor="InfoPedidos"> <img src={CartImg} alt="Cart" /> Seus pedidos</label>
            <InfoPedidos>
                <div className="barra">
                    <p className="pedidosBar">Número do pedido</p>
                    <p className="pedidosBar">Status</p>
                    <p className="pedidosBar">Data</p>
                    <p className="pedidosBar">Pagamento</p>
                    <p className="pedidos">#1101010</p>

                    <p className="pedidos">Concluído</p>


                    <p className="pedidos">12/12/2021</p>


                    <p className="pedidos">Boleto Bancário</p>
                </div>
            </InfoPedidos>
            <InfoContato>

                <div className="box">
                    <p>Endereço</p>
                    <p>{usuario?.endereco?.rua}</p>
                    <p>Número {usuario?.endereco?.casanum}, complemento {usuario?.endereco?.complemento}</p>
                    <p>CEP {usuario?.endereco?.cep}, {usuario?.endereco?.bairro} - {usuario?.endereco?.cidade}, {usuario?.endereco?.estado}</p>
                </div>
                <div className="box1">
                    <p>Telefone</p>
                    <p>{usuario?.telefone?.fixo}</p>
                    <p>{usuario?.telefone?.celular}</p>
                </div>
            </InfoContato>
        </Container >
    )
}