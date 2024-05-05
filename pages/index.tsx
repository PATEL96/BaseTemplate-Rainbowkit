"use client"
import dynamic from 'next/dynamic'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Balance from '@/components/Ba;lance'
 

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Balance />
      </main>
      <Footer />
    </>
  )
}