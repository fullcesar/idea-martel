import ItemListContainer from "./components/itemlistcont";
import NavBar from "./components/navbar";
import ItemCount from "./components/itemCount";

function App() {
  return (
      <>
        <NavBar />
        <ItemListContainer estilos={{'textAlign': 'center'}}>Tienda</ItemListContainer>
        <ItemCount stock="10" intial="1" />
      </>
  );
}

export default App;
