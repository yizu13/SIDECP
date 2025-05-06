import MainLayout from "../layaout/Layaout";
import InicioPage from "./InicioPage";


export default function InicioDash(){


    return(
        <MainLayout setPage={{page: 0, subpage: null}}>
            <InicioPage/>
            </MainLayout>
    )
}