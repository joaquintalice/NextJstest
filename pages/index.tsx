import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'



export default function Home() {
  return (

    <MainLayout>
      <div className={'description'}>

        <h1>Home page</h1>

        <h1>Ir a <Link className={'title'} href='/about'>About</Link></h1>

        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </div>
    </MainLayout>
  )
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <MainLayout>
//       <DarkLayout>
//         {page}
//       </DarkLayout>
//     </MainLayout>
//   );
// }
