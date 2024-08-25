import React from 'react'

type Props = {
    params : {
        id : number ;
    }
    }
   
export default function page ({params}: Props) {
  return (
    <div>vous etes sur {params.id} article </div>
  )
}