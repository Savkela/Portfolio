import './Styles/main.scss';  // Uvezite main.scss ovde
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
