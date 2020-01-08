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
  return (
    <div className="row" style={{ height: 80 }}>
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
        height: "800px",
        backgroundColor: "green"
      }}
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
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
