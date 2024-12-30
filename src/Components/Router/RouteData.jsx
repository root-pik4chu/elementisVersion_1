import React from 'react'
import {BrowserRouter as Router , Routes , Route, useLocation} from 'react-router-dom'
import Layout from '../../Layout'
import Footer from '../footer/Footer'

import About from '../About/About'
import Home from '../home/Home'
import {AnimatePresence , motion} from'framer-motion'
import NavBar from '../NavBar/NavBar'

const RouteData = () => {



  return (

    <div>
      
      <Router>
         <AnimateRoute />
      </Router>

    </div>
  )
}
const AnimateRoute = ()=>{
  const location = useLocation()

  return (<AnimatePresence mode='wait'>
  <Routes location={location } key={location.pathname}>
     <Route path='/' element={<Layout />} >
        <Route index element={<PageWrapper component={<Home />} />} />
        <Route path='/About' element={< PageWrapper component={<About />} />} />
     </Route>
  </Routes>
  </AnimatePresence>
  )
}

const PageWrapper = ({component})=>{
  return (<motion.div
  
    initial={{y:'100%'}}
    animate = {{y:0}}
    exit = {{y:"-100%"}}
    transition={{duration: 0.5 , ease:"easeInOut"}}
    className ='h-full'
    >
    {component}
    </motion.div>
  )
}

export default RouteData


