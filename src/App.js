import Row from "./Components/Row";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import requests from "./requests";

function App() {
  return (
    <div className="main">
      <NavBar />
      <Banner fetchUrl={requests.fetchNetflixOriginal} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginal}
        isLarge={true}
      />
      <Row
        title="TRENDING NOW"
        fetchURL={requests.fetchTrending}
        isLarge={false}
      />
      <Row
        title="TOP RATTED"
        fetchURL={requests.fetchTopRated}
        isLarge={false}
      />
      <Row
        title="ACTION MOVIES"
        fetchURL={requests.fetchActionMovie}
        isLarge={false}
      />
      <Row
        title="COMEDY MOVIES"
        fetchURL={requests.fetchComedyMovie}
        isLarge={false}
      />
      <Row
        title="HORROR MOVIES"
        fetchURL={requests.fetchHorrorMovie}
        isLarge={false}
      />
      <Row
        title="ROMANTIC MOVIES"
        fetchURL={requests.fetchRomanceMovie}
        isLarge={false}
      />
      <Row
        title="DOCUMENTARIES"
        fetchURL={requests.fetchDocumentaries}
        isLarge={false}
      />
    </div>
  );
}

export default App;
