import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <div>
        <Link href="/coffee-makers">
          <a>CoffeeMakers</a>
        </Link>
      </div>
      <div>
        <Link href="/checkout">
          <a>checkout</a>
        </Link>
      </div>
    </>
  )
}
