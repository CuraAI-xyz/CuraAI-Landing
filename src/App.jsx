import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Solutions from './components/Solutions'
import Awards from './components/Awards'
import Footer from './components/Footer'
import Support from './components/Support'
import QA from './components/QA'
import Videos from './components/Videos'
function App() {
 
  return (
    <main>
    <div className='bg-home'>
    <Header/>
    <Home/>
    </div>
    <div className='bg-solutions'>
    <Solutions/>
    <Awards/>
    <Support/>
    <QA/>
    <Videos/>
    </div>
    <Footer/>
    </main>
  )
}

export default App
