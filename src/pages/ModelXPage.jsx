import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelXImage from '../assets/model-x.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '335mi', description: 'Range (EPA est.)' },
    { title: '149mph', description: 'Top Speed' },
    { title: '3.8sec', description: '3.8sec' },
];
export default function ModelXPage() {
    return (
        <div className=' container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model X'
                    description='From $68,590*'
                    backgroundImage={modelXImage}
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
                    image1={modelXImage}
                    image2={teslaChargerImage}
                    text1='High strength, Class II steel tow bar. Capable of towing up to 5,000 lbs.'
                    text2='Input your zip code to search for Tesla showrooms and schedule a Demo Drive.'
                />
            </section>
        </div>
    )
}