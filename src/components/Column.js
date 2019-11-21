import React from "react" ;
import Card from "./Card";

const Column = ({title, cards}) => {
  return (
    <div style = {styles.container}>

    <h4> {title} </h4>
      { cards.map(card => (
        <Card text = {card.text} />
      ))}
    </div>
  );
};

 const styles = {
   container: {
     backgroundColor:"#dfe3e6",
     borderRadius: 3,
     width: 300,
     padding: 8,
     marginRight: 8
   }
 };

 export default Column;