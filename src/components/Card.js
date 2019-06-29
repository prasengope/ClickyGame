import React from "react";

class Card extends React.Component{
    state = {
        isClicked: false
    }

    handleClick = (event) =>{
        if(this.state.isClicked){
            console.log('has been clicked')
        } else{
            this.setState ({isClicked : true})
        }
        

    };
    render(){
        return(
            <div onClick = {this.handleClick}>
                <img src="https://via.placeholder.com/200x100" alt ="" />


           </div>
        )

    }
}


export default Card;