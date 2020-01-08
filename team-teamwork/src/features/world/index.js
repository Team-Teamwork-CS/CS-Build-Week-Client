import React from "react";
import Player from "../player";
import Map from "../map/";

import { tiles } from "../../data/map/1";
import store from "../../config/store";

function World(props) {
<<<<<<< HEAD
  store.dispatch({type: 'ADD_TILES', payload: {
    tiles
  }})
=======
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
    }
  });
>>>>>>> 5009a68ef6fe2477931060718bdb9d937f4a2df6
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
<<<<<<< HEAD
      
=======
>>>>>>> 5009a68ef6fe2477931060718bdb9d937f4a2df6
    </div>
  );
}

export default World;
