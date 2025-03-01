export default function ImageBackgroundNoText({ backgroundImage }) {
    return (
        <div
            className="image-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    );
}