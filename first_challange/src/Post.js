import "./Post.css"
import Button from "./Button";
export default function Post({name , content , title}){
return(
<div className={"Post-div"}>
<h2>{name}</h2>
<hr></hr>
<h4>{content}</h4>
<Button title={title} />
</div>
);
}