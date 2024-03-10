import './App.css'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'

function App() {

  return (
    <>
      <h1>React Context API</h1>
      <a href="https://es.react.dev/reference/react/createContext"
        target='_blank'
      >
        Documentación
      </a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </>
  )
}

export default App
