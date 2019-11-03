import React from "react";
import List from "./List"

class Properties extends React.Component{
    state = {
        list: ["1","2","3","4"]
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