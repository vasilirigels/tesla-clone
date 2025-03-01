import HomeSectionVideo from "../components/homeSectionVideo/HomeSectionVideo";
import ModelSPage from "./ModelSPage";
import ModelXPage from "./ModelXPage";
import CybertruckPage from "./CybertruckPage";
import ModelYPage from "./ModelYPage";
import Model3Page from './Model3Page'
import ShopPage from "./ShopPage";



const homePageSections = [
    {
        id: 'modelS',
        component: <ModelSPage />
    },
    {
        id: 'modelX',
        component: <ModelXPage />
    },
    {
        id: 'cybertruck',
        component: <CybertruckPage />
    },
    {
        id: 'modelY',
        component: <ModelYPage />
    },
    {
        id: 'model3',
        component: <Model3Page />
    },
    {
        id: 'shop',
        component: <ShopPage />
    },
]

export default function HomePage() {
    return(
        <div className='container '>
            <section className='section'>
        <HomeSectionVideo />
            </section>
            {homePageSections.map((item) => (
                <section id={item.id} className="section">
                    {item.component}
                </section>

            ))}


        </div>
    )
}