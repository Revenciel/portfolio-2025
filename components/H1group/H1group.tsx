export default function H1group(eyebrow: string, heading: string) {
    return (
        <hgroup>
            <p>{eyebrow}</p>
            <h1>{heading}</h1>
        </hgroup>
    );
}