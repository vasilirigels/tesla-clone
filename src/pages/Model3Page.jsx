import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import model3Image from '../assets/model-3.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '15 min', description: 'Recharge up to 175 miles†' },
    { title: '341 mi', description: 'Range (EPA est.)' },
    { title: 'AWD', description: 'Dual Motor' },
];
export default function Model3Page() {
    return (
        <div className=' container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model 3'
                    description='Lease starting at $329/mo*'
                    backgroundImage={model3Image}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
            <section className='section'>
                <ImageGrid
                    image1={model3Image}
                    image2={teslaChargerImage}
                    text1='Enjoy new styling, increased range and less noise with upgraded tires and wheels.'
                    text2='Go up to 341 miles (EPA est.) on a single charge with updated exterior styling optimized for maximum aerodynamics.'
                />
            </section>
        </div>
    )
}