import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'


export default function About() {
    return (

        <>
            <div className={'description'}>

                <h1>About page</h1>

                <h1>Ir al <Link className={'title'} href='/'>Home</Link></h1>

                <p>
                    Get started by editing&nbsp;
                    <code className={'code'}>pages/about.tsx</code>
                </p>
            </div>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {

    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )

}