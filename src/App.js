import ItemListContainer from "./components/itemlistcont";
import NavBar from "./components/navbar";

function App() {
  return (
      <>
        <NavBar />
        <ItemListContainer estilos={{'textAlign': 'center'}}>Greetings!</ItemListContainer>
      </>
  );
}

export default App;
