import './ImageGrid.css';

export default function ImageGrid({ image1, image2, text1, text2 }) {
    return (
        <div className="grid-container">
            <div
                className="grid-item image-grid-img"
                style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div className="grid-item grid-item-text">{text1}</div>
            <div className="grid-item grid-item-text">{text2}</div>
            <div
                className="grid-item image-grid-img"
                style={{ backgroundImage: `url(${image2})` }}
            ></div>
        </div>
    );
}