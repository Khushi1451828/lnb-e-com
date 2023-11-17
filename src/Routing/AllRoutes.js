import {Routes  , Route} from 'react-router-dom'

import Home from "../Screens/Home"
import About from "../Screens/About"



import Navbar from '../Layout/Navbar'
import ViewMore from '../Screens/ViewMore'
import MemoDemo from '../Screens/UseMemoDemo'
import UseCallbackDemo from '../Screens/UseCallbackDemo'
import ContextDemo from '../Screens/ContextDemo'
import UseRefDemo from '../Screens/UseRefDemo'
import UseReducer from '../Screens/UseReducer'
import ProductsWithSearch from '../Screens/ProductsWithSearch'

function AllRoutes(){


return(
<>
    <Navbar/>
    <Routes>

    <Route path="/"  element={<Home/>} />
    <Route path="/home"  element={<Home/>} />
    <Route path="/memodemo"  element={<MemoDemo/>} />
    <Route path="/callback-demo" element={<UseCallbackDemo/>}/>
<Route path="/context-demo" element={<ContextDemo/>}/>
<Route path="/useRef-demo" element={<UseRefDemo/>}/>
<Route path="/useReducer" element={<UseReducer/>}/>
<Route path="/products" element={<ProductsWithSearch/>}/>
    <Route path="/about"  element={<About/>} />
    <Route path="/viewmore/:id" element={<ViewMore/>}/></Routes>
</>


)



}

export default AllRoutes