import React, { useEffect, useState } from "react";
import Player from "../player";
import Map from "../map/";
import axios from "axios";

import { createTileLayout } from "../../data/map/1";
import store from "../../config/store";

function World(props) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;

    axios
      .get("https://teamwork-mud.herokuapp.com/api/adv/rooms/")
      .then(res => {
        console.log(res.data);
        store.dispatch({
          type: "ADD_TILES",
          payload: {
            tiles: createTileLayout(res.data)
          }
        });
      })
      .catch(err => console.log(err));
    console.log(axios.defaults.headers.common);
    axios
      .get("https://teamwork-mud.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res.data);
        const digits = res.data.id.toString().split("");
        store.dispatch({
          type: "SET_PLAYER",
          payload: {
            position: [digits[1] ? digits[1] * 80 : 0, digits[0] * 80]
          }
        });
        store.dispatch({
          type: "ADD_TEXT",
          payload: res.data.description
        });
      })
      .catch(err => console.log(err.response.data));
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

// rooms = [
//   {
//     name: "The Grasslands",
//     description:
//       "The tall grass makes it difficult to see whats hiding. Be careful!",
//     damage: 1,
//     helps: ["pants"]
//   },
//   {
//     name: "The Rough",
//     description:
//       "Terrain looks rough. Going to be tough to travel through here with bare feet.",
//     damage: 2,
//     helps: ["shoes"]
//   },
//   {
//     name: "The Bush",
//     description:
//       "Traveling through the bush is a nightmare! Its loaded with monsters and will destroy your body if you're not covered",
//     damage: 10,
//     helps: ["shoes", "tunic", "machete"]
//   },
//   {
//     name: "The Forest",
//     description:
//       "The sounds of the birds chirping in the forest is inviting. Just don't enter at night.",
//     damage: 5,
//     helps: ["machette"]
//   },
//   {
//     name: "The Desert",
//     description: "The desert will drain you if you are not prepared!",
//     damage: 25,
//     helps: ["shoes", "hat", "water"]
//   },
//   {
//     name: "The River",
//     description:
//       "Water looks calm, but it is impossible to know what lurks below.",
//     damage: 100,
//     helps: ["boat"]
//   },
//   {
//     name: "The Mountains",
//     description:
//       "Mountains are exhausting to travel through. Best to avoid them if possible.",
//     damage: 15,
//     helps: []
//   }
// ];

// monsters = [
//   {
//     name: "Crocodile",
//     description:
//       "A crocodile has attacked you from the waters below! If it gets a hold of you there is no avoiding death!",
//     damage: 100,
//     helps: ["flare"],
//     location: ["The River"]
//   },
//   {
//     name: "Goblin",
//     description:
//       "You notice a goblin spying on you. Don't take your eyes off it!",
//     damage: 5,
//     helps: ["torch"],
//     location: ["The Forest", "The Bush", "The Grasslands"]
//   },
//   {
//     name: "Troll",
//     description: "A troll comes crashing towards you. Be prepared to fight!",
//     damage: 10,
//     helps: ["shield", "sword"],
//     location: ["The Rough", "The Mountains"]
//   },
//   {
//     name: "snake",
//     description:
//       "You hear what sounds like a rattlesnake. Should be harmless so long as it can't bite you.",
//     damage: 100,
//     helps: ["boots", "pants"],
//     location: ["The Grasslands", "The Desert"]
//   },
//   {
//     name: "Boar",
//     description: "Kill that boar before it gets anywhere near you!",
//     damage: 15,
//     helps: ["bow"],
//     location: ["The Grasslands", "The Forest", "The Bush"]
//   }
// ];
