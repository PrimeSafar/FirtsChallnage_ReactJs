import "./Side.css"
import Button from "./Button";
export default function Side(){
    return(
        <div className={"side-div"}>
            <Button title="safar" />
            <Button title="alex" />
            <Button title="john" />
        </div>
    );
}