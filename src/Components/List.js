import React from "react";

class List extends React.Component{
    render(){
        const {list} = this.props;
        const numbersList = list.map(num => {
            return(
                <div className="list">
                    <div>Name: {num.name}</div>
                    <div>Age: {num.age}</div>
                    <div>Belt: {num.belt}</div>
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