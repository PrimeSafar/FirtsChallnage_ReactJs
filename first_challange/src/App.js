// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Side from "./Side";
import MyButton1 from "./myButton";
import Input from "./Input";
import Form from "./form";


const showSide = true;
function App() {
  const myPostArr = [
    { id: 1, name: "safar", content: "doing homework", title: "no title" },
    { id: 2, name: "alex", content: "doing program", title: "no title" },
    { id: 3, name: "vanilla", content: "doing post", title: "no title" },
  ];
  const myPostRender = myPostArr.map((post) => {
    return (
      <Post
        key={post.id}
        name={post.name}
        content={post.content}
        title={post.title}
      />
    );
  });
  return (
    <div className="App">
      <Form />
      {/* <Header /> */}
      {/* <MyButton1 /> */}
     
      {/* Post  and Side Container  */}

      <div className={"Container"}>
        {/* <div className={"post-main"}>{myPostRender}</div> */}
       
        <div>
          {/* <AppSide /> */}
           {/* <Input /> */}

        </div>
        
      </div>
      {/* --- Post  and Side Container---  */}
    </div>
  );
}
function AppSide() {
  if (showSide) {
    return <Side />;
  } else {
    return (
      <div style={{ fontSize: "2rem", color: "black" }}>
        Its False Condition{" "}
      </div>
    );
  }
}
export default App;
