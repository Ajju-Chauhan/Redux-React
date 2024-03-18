import Header from "./assets/components/Header";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayContaint from "./assets/components/DisplayContaint";
import Container from "./assets/components/Container";
import Controls from "./assets/components/Controls";
function App() {
  return (
    <>
    {/* class="container d-flex justify-content-center align-items-center" */}
      <div className="px-4 py-5 my-5 justify-content-center text-center">
        <Container>
        <Header />

        <div className="col-lg-6 mx-auto">
          <DisplayContaint/>
          
          <Controls/>
          
        </div>
        </Container>
      </div>
    </>
  );
}

export default App;
