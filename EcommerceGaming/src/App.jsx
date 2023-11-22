// App.js
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path ='/' element={<ItemListContainer/>}/>
          <Route path ='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path ='*' element={<h1>404 NOT FOUND </h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

/*// Componente para ItemListContainer con categoría
const ItemListContainerWithCategory = () => {
  const { categoryId } = useParams();

  // Utiliza el hook useEffect para cargar los productos de la categoría
  useEffect(() => {
    // Lógica para cargar productos de la categoría
    fetchProducts(categoryId)
      .then((products) => {
        // Procesar y mostrar los productos
      })
      .catch((error) => {
        // Manejar errores
      });
  }, [categoryId]);

  return (
    <ItemListContainer greeting={`Productos en la categoría: ${categoryId}`} />
  );
};*/
