
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function Contact() {
    return (

        <MainLayout>
            <div className={"description"}>

                <h1>Contact page</h1>

                <h1>Ir al <Link className={"title"} href='/'>Home</Link></h1>

                <p>
                    Get started by editing&nbsp;
                    <code className={"code"}>pages/contact.tsx</code>
                </p>
            </div>
        </MainLayout>


    )
}
