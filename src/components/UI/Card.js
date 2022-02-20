import './Card.css';
function Card(props)
{
    //applying multiple css classes 
    const classes ='card ' + props.className;
 return <div className={classes}> {props.children}</div>//children return everything between opening and closing custom component tag.
 //its always passed implicitly for every custom component. its a wrapper Component.
}

export default Card;