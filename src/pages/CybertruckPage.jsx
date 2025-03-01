import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import cybertruckImage from "../assets/cybertruck.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import teslaChargerImage from "../assets/tesla-charger.jpg";
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    { title: '2.6SEC†', description: '0-60 MPH' },
    { title: '340MILES*', description: 'EST. RANGE' },
    { title: '11,000LBS', description: 'TOWING CAPACITY' },
];

export default function CybertruckPage() {
    return (
        <div className='container'>
            <section className='section'>
                <ImageBackgroundSection
                    header='Cybertruck'
                    description='EST. $57,390*'
                    backgroundImage={cybertruckImage}
                    featureItems={featureItems}/>
            </section>
            <section className='section'>
                <ImageBackgroundNoText
                    backgroundImage={teslaChargerImage}
                />
            </section>
            <section className='section'>
                <ImageGrid
                    image1={cybertruckImage}
                    image2={teslaChargerImage}
                    text1='DURABLE AND RUGGED ENOUGH TO GO ANYWHERE. TACKLE ANYTHING WITH ELECTRONICALLY ADAPTIVE AIR SUSPENSION THAT OFFERS 12” OF TRAVEL AND 17” OF CLEARANCE.'
                    text2='AN ULTRA-HARD STAINLESS-STEEL EXOSKELETON HELPS TO REDUCE DENTS, DAMAGE AND LONG-TERM CORROSION. REPAIRS ARE SIMPLE AND QUICK.'
                />
            </section>
        </div>
    )
}