import Navbar   from '@layout/Navbar'
import Footer   from '@layout/Footer'
import Hero     from '@sections/Hero'
import About    from '@sections/About'
import Services from '@sections/Services'
import Work     from '@sections/Work'
import Skills   from '@sections/Skills'
import Process  from '@sections/Process'
import Why      from '@sections/Why'
import FAQ      from '@sections/FAQ'
import CTA      from '@sections/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Skills />
        <Process />
        <Why />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}