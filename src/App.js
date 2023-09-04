import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/search';
import Repos from './components/repos';



function App() {
  
  return (
    
  
  <BrowserRouter>

    <Routes>
     <Route path="/" exact element={<Search/>} />
     <Route path="/search/:keyword" element={<Repos/>}/>
    </Routes>
  </BrowserRouter>
    
  )
  


}

export default App;