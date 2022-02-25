import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import AddRecord from "./pages/AddRecord";
import SearchResults from "./pages/SearchResults"
import {ContextProvider} from "./context/Context"

function App()
{
  return (
    // Statelerin oluşturulması Context API ile yapıldı
    //Uygulamamızda toplamda üç sayfamız var. Anasayfa - Yeni kayıt ekleme sayfası - Sonuçların gösterildiği sayfa
    
    <ContextProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addRecord" element={<AddRecord />}></Route>
            <Route path="/searchResults" element={<SearchResults />}></Route>
          </Routes>
      </Router>

    </ContextProvider>
  )
}

export default App;