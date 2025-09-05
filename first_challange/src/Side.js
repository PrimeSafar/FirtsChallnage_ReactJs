import "./Side.css";
import Button from "./Button";
export default function Side() {
  const myButton = [
    {
      id: 1,
      title: "safar",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello world</div>,
    },
    {
      id: 2,
      title: "alex",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello world</div>,
    },
    {
      id: 3,
      title: "vanilla",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello form2</div>,
    },
    {
      id: 4,
      title: "123",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello alex</div>,
    },
    {
      id: 5,
      title: "aldsfsex",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello child</div>,
    },
    {
      id: 6,
      title: "asash",
      c: <div style={{ fontSize: "1rem", color: "red" }}>Hello world</div>,
    },
  ];
  const ListButton = myButton.map((but) => {
    return (
      <Button key={but.id} title={but.title}>
        {but.c}
      </Button>
    );
  });
  return <div className={"side-div"}>{ListButton}</div>;
}
