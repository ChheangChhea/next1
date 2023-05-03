import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function NavBar() {
  return (
    <header>
    <ul className={styles.nav}>
    <li>
      <Link href='/'>Home</Link>
    </li>
    <li>
      <Link href='/about'>About</Link>
    </li>
    <li>
      <Link href='/policy'>Policy</Link>
    </li>
    <li>
      <Link href='/'>Contain</Link>
    </li>
   </ul>

      </header>
  )
}
