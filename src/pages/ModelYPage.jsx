import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import ModelYImage from '../assets/model-y.jpg'
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from '../assets/tesla-charger.jpg'
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '260mi', description: 'Range (EPA est.)' },
    { title: '135mph', description: 'Top Speed' },
    { title: '6.6sec', description: '0-60 mph'},
];


export default function ModelYPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Model Y'
                    description='Lease starting at $379/mo*'
                    backgroundImage={ModelYImage}
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
                    image1={ModelYImage}
                    image2={teslaChargerImage}
                    text1='Electronic fold-flat releases in trunk.'
                    text2='High strength, Class II steel tow bar capable of towing up to 3,500 lbs'
                />
            </section>
        </div>
    )
}