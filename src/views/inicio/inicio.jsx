import inicio from "../../assets/img/inicio.png";
import LayoutComponent from "../../components/Layout/LayoutComponent";

function Inicio() {
    return(
        <LayoutComponent>
            <img src={inicio}  className="w-full h-full"/>
        </LayoutComponent>
    )
}

export default Inicio
