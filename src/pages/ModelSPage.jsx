import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelSImage from '../assets/model-s.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '405mi', description: 'Range (est.)' },
    { title: '130mph', description: 'Top Speed' },
    { title: '3.1sec', description: '0-60 mph' },
];


export default function ModelSPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model S'
                    description='From $71,090*'
                    backgroundImage={modelSImage}
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
                image1={modelSImage}
                image2={teslaChargerImage}
                text1='All functionality of Basic Autopilot and Enhanced Autopilot.'
                text2='Traffic Light and Stop Sign Control'
                />
            </section>
        </div>
    )
}