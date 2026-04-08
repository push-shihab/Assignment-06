import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <div>
        <ToastContainer></ToastContainer>
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
