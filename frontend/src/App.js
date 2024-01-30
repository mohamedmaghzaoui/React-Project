


function App() {
  return (
    <div className="App">

      <Home />

      <BrowserRouter>
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;