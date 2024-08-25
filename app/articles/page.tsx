import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page ({}: Props) {
  return (
    
    <div>  Liste des articles <ul>
          <li> <Link href="/articles/1" >Article 1 </Link> </li>
          <li> <Link href="/articles/2" > Article 2 </Link> </li>
      </ul>

      </div>
    
  )
}