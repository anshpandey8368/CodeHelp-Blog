import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlogPosts , page} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts(page);
  }, [page]);


  return (
    <div className="App">
     <Header />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
