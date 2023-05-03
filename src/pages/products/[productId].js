import NavBar from '@/componets/NavBar'
import React from 'react'
import { useRouter } from 'next/router'

export default function ProductDetial({id}) {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>
      <NavBar/>
      <h1>Request:{router.query.productId}</h1>
    </div>
  )
}
// export async function getSticProps({params}){
// console.log(params);
// return{
//  props:{
//   id:params.id
//  }
// }
// }