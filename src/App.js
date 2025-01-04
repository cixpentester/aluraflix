import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer';
import Themes from './components/UI/themes.js'
import { ThemeProvider } from 'styled-components';
import { DataProvider } from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles.js'
import VideoForm from './pages/VideoForm';
import CategoryForm from './pages/CategoryForm';
import CategoryEditForm from './pages/CategoryEditForm';
import NotFound from './pages/NotFound';

function App() {

  return (
    <DataProvider>
      <ThemeProvider theme={Themes}>
        <GlobalStyle /> 
          <div className='site'>
            <Router>
              <Header />

              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/video' element={<VideoForm />}/>
                <Route path='/category' element={<CategoryForm/>}/>
                <Route path='/category-edit/:id' element={<CategoryEditForm/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
              
              <Footer />
            </Router>
          </div>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
