import React from "react";
import { connect } from "react-redux";
import { INV_SIZE } from "../../config/constants";
import { tiles } from "../../data/map/2";
import store from "../../config/store";
import "./styles.css";

function getTileSprite(type) {
  switch (type) {
    case 1:
      return "shield";
    case 2:
      return "sword";
    case 3:
      return "axe";
    case 4:
      return "chainBoots";
    case 5:
      return "goldSkull";
    case 6:
      return "bow";
  }
}

function InventoryTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: INV_SIZE,
        width: INV_SIZE
      }}
    ></div>
  );
}

function InventoryRow(props) {
  console.log(props);
  return (
    <div className="row" style={{ height: 100 }}>
      {props.tiles.map((tile, index) => (
        <InventoryTile tile={tile} key={`invTile ${index}`} />
      ))}
    </div>
  );
}

const Inventory = props => {
  store.dispatch({
    type: "CREATE_INV",
    payload: {
      tiles
    }
  });

  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        border: "2px solid grey",
        margin: "20px"
      }}
    >
      <div style={{ borderBottom: "2px solid grey" }}>
        <h2 style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}>
          Inventory
        </h2>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 50px)",
          backgroundColor: "darkGrey"
        }}
      >
        {tiles &&
          tiles.map((row, index) => (
            <InventoryRow tiles={row} key={`invRow ${index}`} />
          ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    items: state.inventory.items
  };
}

export default connect(mapStateToProps)(Inventory);
