import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Solutions from './components/Solutions'
import Footer from './components/Footer'
import QA from './components/QA'
function App() {
 
  return (
    <main>
    <div className='bg-home'>
    <Header/>
    <Home/>
    </div>
    <div className='bg-solutions'>
    <Solutions/>
    <QA/>
    </div>
    <Footer/>
    </main>
  )
}

export default App
