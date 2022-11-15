// components
import Navbar from './components/Navbar';
import Products from './components/Products';
import Searchbar from './components/Searchbar';
import SingleProductView from './components/SingleProductView';
import Category from './components/Category';
import Footer from "./components/Footer";
import Menu from './components/Menu';




function App() {
  return (
  <>
    <Navbar />
    <Category />
      {/* <Menu /> */}
      <Products />
    <Footer />
  </>
  );
}

export default App;
