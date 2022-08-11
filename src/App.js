import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <section>
        <Routes>
          <Route path="/" element="a" />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
