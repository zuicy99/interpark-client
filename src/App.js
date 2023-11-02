import Header from "./components/Heder";
import Recommend from "./components/Recommend";

import Visual from "./components/Visual";
import Tour from "./components/Tour";
import Tiket from "./components/Tiket";

function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단영역 --> */}
      <Header />
      {/* <!-- 메인영역 --> */}
      <div className="main">
        <Visual />
        <Recommend />
        <Tour />
        <Tiket />
      </div>
      {/* <!-- 하단영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
