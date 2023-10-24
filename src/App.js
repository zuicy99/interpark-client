import Header from "./components/Heder";

function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단영역 --> */}
      <Header />
      {/* <!-- 메인영역 --> */}
      <div className="main"></div>
      {/* <!-- 하단영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
