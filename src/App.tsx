
import Hero from './sections/hero'
import Listings from './sections/listings'
import How from './sections/how'
import Categories from './sections/categories'
import Network from './sections/network'
import Review from './sections/review'
import GetStarted from './sections/get-started'
import Footer from './sections/footer'

function App() {
 

  return (
   <main className='bg-gray-50 min-h-screen min-w-screen'>
    <Hero />
    <Listings />
    <How/>
    <Categories />
    <Network />
    <Review />
    <GetStarted />
    <Footer />
   </main>
  )
}

export default App
