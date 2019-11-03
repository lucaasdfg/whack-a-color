import React from "react";
import List from "./List"

class Properties extends React.Component{
    state = {
        list: [
            {name: "lucas", age: "20", belt: "red", id:0},
            {name: "yoshi", age: "100", belt: "red",id:1},
            {name: "mario", age: "50", belt: "red", id:2}
        ]
    }
    render(){
        return(
         <div>
             <List list={this.state.list}/>
         </div>
        )
    }
}
export default Properties