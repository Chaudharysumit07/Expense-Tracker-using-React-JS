import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"
import { useState } from "react";


function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

 
  // const clickHandler=()=>{
  //   setTitle('Updated');
  //   console.log(title);
  // };
  return (
    <li>
    {/* //jsx allows only one root element per return statement eg. can't use multiple divs
    // solution-wrap multiple divs inside one div */}
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
