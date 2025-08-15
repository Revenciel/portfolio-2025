import React from "react";

export const Section = ({
    children, theme
}: Readonly<{
    children: React.ReactNode,
    theme: string,
}>) => {
    return (
        <section className={'band ' + theme}>
            <div className='wrapper'>
                {children}
            </div>
        </section>
    )
} 