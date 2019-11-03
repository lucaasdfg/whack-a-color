import React from "react";

class List extends React.Component{
    render(){
        const {list} = this.props;
        const numbersList = list.map(num => {
            return(
                <div className="list">
                    <div>Number: {num}</div>
                </div>
            )
        })
        return(
            <div>
            {numbersList}
            </div>
        )
    }
}
export default List;