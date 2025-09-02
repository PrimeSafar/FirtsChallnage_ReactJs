// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Side from "./Side";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Post  and Side Container  */}
      <div className={"Container"}>
        {/* Post Container  */}
      <div className={"post-main"}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      {/*  --Post Container --  */}

      {/*  Side  Container   */}
      <div>
        <Side />
      </div>
      {/*  --Side Container --  */}
      </div>
      {/* --- Post  and Side Container---  */}
    </div>
  );
}

export default App;
