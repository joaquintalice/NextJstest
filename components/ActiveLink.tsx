import { useRouter } from "next/router"

import Link from "next/link"
import { CSSProperties, FC } from "react"


interface props {
    text: string,
    href: string,
}
const style: CSSProperties = {
    color: 'rgb(0, 195, 249)',
    textDecoration: 'underline',
}

export const ActiveLink: FC<props> = ({ text, href }: props) => {

    const { asPath } = useRouter();
    // console.log(asPath)

    return (
        <Link style={asPath === href ? style : undefined} href={href} > {text} </Link>
    )
}
