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
         <Post name="safar" content="Hi from safar" title="Click Safar" />
<Post name="alex" content="Hi from alex" title="Click Alex" />
<Post name="john" content="Hi from john" title="Click John" />
<Post name="amigo" content="Hi from amigo" title="Click Amigo" />
<Post name="vanilla" content="Hi from vanilla" title="Click Vanilla" />

         
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
