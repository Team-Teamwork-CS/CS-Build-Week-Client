import React from "react";
import Player from "../player";
import Map from "../map/";

import { tiles } from "../../data/map/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "800px",
        margin: "20px auto",
        gridRow: "1/3"
      }}
    >
      <Map tiles={tiles} />
      <Player />
    </div>
  );
}

export default World;
