import Header from "./components/Header";
import Visual from "./components/Visual";
import Recommend from "./components/Recommend";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <Header />
      {/* <!-- 메인 영역 --> */}
      <div className="main">
        <Visual />
        <Recommend />
        <Tour />
      </div>
      {/* <!-- 하단 영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
