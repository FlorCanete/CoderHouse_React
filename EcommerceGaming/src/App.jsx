import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/Cart.Context';
import Cart from './components/Cart';

function App(){
  return(
    <div className="App h-100">
        <BrowserRouter>
          <CartProvider>

            <NavBar/>

            <Routes>
              <Route path ='/' element={<ItemListContainer/>}/>
              <Route path ='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path ='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path ='/cart' element={<Cart/>}/>
              <Route path ='*' element={<h1>404 NOT FOUND </h1>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  )
}

export default App;

