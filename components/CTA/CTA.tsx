import Link from 'next/link';

export default function CTA(props: { label: string, href: string }) {
    return (
        <div className='cta'>
            <Link href={props.href}>
                <span className="label">
                    {props.label}
                    <img src="/images/arrow.svg" className="icon" aria-hidden="true" />
                </span>
            </Link>

        </div>
    );
}