import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";
import "./styles.css";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "dirt";
    case 6:
      return "treasure";
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    ></div>
  );
}

function MapRow(props) {
<<<<<<< HEAD
  return <div classname="row" style={{height: 40}}>
    {
      props.tiles.map(tile => <MapTile tile={tile} />)
    }
  </div>
=======
  return (
    <div className="row" style={{ height: 80 }}>
      {props.tiles.map((tile, index) => (
        <MapTile tile={tile} key={`mapTile ${index}`} />
      ))}
    </div>
  );
>>>>>>> 5009a68ef6fe2477931060718bdb9d937f4a2df6
}

function Map(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
<<<<<<< HEAD
        height: "400px"        
        
=======
        height: "800px",
        backgroundColor: "green"
>>>>>>> 5009a68ef6fe2477931060718bdb9d937f4a2df6
      }}
    >
      {props.tiles.map((row, index) => (
        <MapRow tiles={row} key={`mapRow ${index}`} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}

export default connect(mapStateToProps)(Map);
