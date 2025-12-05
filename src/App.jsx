import {Header, Footer, Home, About, SkillsInfo} from './components'

function App() {

    return (
        <>
            <Header/>
            <main>
                <Home/>
                <div className='container'>
                    <h1>React Portfolio</h1>
                </div>
                <About/>
                <SkillsInfo/>
            </main>
            <Footer/>
        </>
    )
}

export default App
