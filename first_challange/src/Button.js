import "./BUTTON.css"
export default function Button({title , children}){
    if(!title){
        return null
    }
    return(
        <button>
                {title}
                {children}
            </button>
    );
}
