import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="main container-custom pt-[50px] pb-[50px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">Page not found</p>
        <Link to="/" className="text-blue-500">Go back to home</Link>
      </div>
    </section>
  )
}
