import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";
import "./styles.css";

function getTileSprite(type) {
  switch (type) {
    case 1:
      return "mountain";
    case 2:
      return "forest";
    case 3:
      return "rough";
    case 4: 
      return "desert";
    case 5: 
      return "bush";
    case 6: 
      return "grasslands";
    case 7:
      return "river"
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
  return (
    <div className="row" style={{ height: 80 }}>
      {props.tiles.map((tile, index) => (
        <MapTile tile={tile} key={`mapTile ${index}`} />
      ))}
    </div>
  );
}

function Map(props) {
  const display = () => {
    if (props.tiles.length > 0) {
      return props.tiles.map((row, index) => (
        <MapRow tiles={row} key={`mapRow ${index}`} />
      ));
    }
  };

  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
        height: "800px"
      }}
    >
      {display()}
      {/*  */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}

export default connect(mapStateToProps)(Map);
