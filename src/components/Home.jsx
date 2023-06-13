import Head from '../Helpers/Head'
import UserFeed from './Feed/Feed'

export default function Home() {
  return (
    <section className='container main-container'>
      <Head title="Fotos" description="Grid de Fotos"/>
      <UserFeed user={0}/>
    </section>
  )
}
