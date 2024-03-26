
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './context/ContextProvider'
function App() {
  

  return (
    <UserContextProvider>
      <h1>Plase login Here</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
