import { useRouter } from "next/router"

import Link from "next/link"


type NavTypes = {
    text: string,
    href: string,
}
const style = {
    color: 'rgb(0, 195, 249)',
    textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }: NavTypes) => {

    const { asPath } = useRouter();
    console.log(useRouter())
    // console.log(asPath)

    return (
        <Link style={asPath === href ? style : null} href={href} > {text} </Link>
    )
}
