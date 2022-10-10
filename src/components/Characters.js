import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((items, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img  className="image" src={items.image} alt="" />
            <div className="card-boby">
              <h5 classNAme="card-title">{items.name}</h5>
              <hr />
              <p>Specie: {items.species}</p>
              <p>Location: {items.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
