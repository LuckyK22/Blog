import './App.css'
import { useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'
import authService from './appwrite/auth'
import {login, logout } from './store/authSlice'
import {Header, Footer} from './components/index.js'


function App() {

  const [loading , setLoading ] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userDate) => {
      if(userDate){
        dispatch(login({userDate}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO
        {/* TODO:  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
    </>
  ) : null
}

export default App
