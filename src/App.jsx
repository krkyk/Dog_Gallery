import "./styles.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Gallery from "./components/main/Gallery";
// import Form from "./components/main/Form";

export default function App() {
  return (
    <>
      <Header />
      {/* <Form /> */}
      <Gallery />
      <Footer />
    </>
  );
}
