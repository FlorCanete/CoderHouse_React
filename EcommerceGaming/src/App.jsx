import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/Cart.Context';
import Cart from './components/Cart';

function App(){
  return(
    <div className="App h-100">
      <CartProvider>
        <BrowserRouter>
            <NavBar/>

            <Routes>
              <Route path ='/' element={<ItemListContainer/>}/>
              <Route path ='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path ='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path ='/cart' element={<Cart/>}/>
              <Route path ='*' element={<h1>404 NOT FOUND </h1>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;

