import Navbar   from '@layout/Navbar'
import Footer   from '@layout/Footer'
import Hero     from '@sections/Hero'
import About    from '@sections/About'
import Services from '@sections/Services'
import Work     from '@sections/Work'
import Skills   from '@sections/Skills'
import FAQ      from '@sections/FAQ'
import CTA      from '@sections/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <div className="border-y border-[#C9ADA7]/50 bg-[#E8DAD6] py-12 text-[#22223B] md:py-16">
          <div className="mx-auto grid max-w-300 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 xl:px-0">
            <About />
            <Skills />
          </div>
        </div>
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}