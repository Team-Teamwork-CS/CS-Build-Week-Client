import React, { useEffect, useState } from "react";
import Player from "../player";
import Map from "../map/";
import axios from "axios";

import { createTileLayout } from "../../data/map/1";
import store from "../../config/store";

function World(props) {
  useEffect(() => {
    axios
      .get("https://teamwork-mud.herokuapp.com/api/adv/rooms/")
      .then(res => {
        console.log("res.data", res.data);
        store.dispatch({
          type: "ADD_TILES",
          payload: {
            tiles: createTileLayout(res.data)
          }
        });
      })
      .catch(err => console.log(err));
  }, []);

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
      <Map />
      <Player />
    </div>
  );
}

export default World;
