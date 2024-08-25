import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
     <h2>Bienvenue Tous le monde</h2>
     <a href="/connexion">  Nav</a>
     <Link href="/connexion">      <a >Connectez-vous</a>
     </Link>
    </main>
  )
}
