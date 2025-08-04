import Link from 'next/link';

export default function CTA(props: { label: string, href: string }) {
    return (
        <Link className='cta' href={props.href}>
            {props.label}
            <img src='/images/arrow.svg' className='icon' aria-hidden='true'></img>
        </Link>
    );
}