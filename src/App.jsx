import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="horisontalLine"></div>
      {/* контент */}
      <main className="main pad">
        <div className="content">
          <div className="contentHeader flex j-cont-sb a-items-center">
            <h1>Все кроссовки</h1>
            <div className="searchBlock flex a-items-center">
              <label htmlFor="search">
                <img
                  width={14.25}
                  height={14.25}
                  src="img/search.svg"
                  alt="Search"
                />
              </label>
              <input id="search" type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="contentBody">
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
