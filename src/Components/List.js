import React from "react";

const List = props => {
  const { list } = props;
  const numbersList = list.map(num => {
    return (
      <div className="list" key={num.id}>
        <div>Name: {num.name}</div>
        <div>Age: {num.age}</div>
        <div>Belt: {num.belt}</div>
      </div>
    );
  });
  return <div className="num-list">{numbersList}</div>;
};
export default List;
