import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import axios from "axios";

export default function handleMovement(player) {
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case "w":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "e":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "n":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "s":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  function dispatchMove(newPos) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos
      }
    });
  }

  function dispatchDialog(dialog) {
    store.dispatch({
      type: "ADD_TEXT",
      payload: dialog
    });
  }

  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);
    axios
      .post("https://teamwork-mud.herokuapp.com/api/adv/move/", { direction })
      .then(res => {
        console.log(res.data);
        if (
          observeBoundaries(oldPos, newPos) &&
          observeImpassable(oldPos, newPos)
        ) {
          dispatchMove(newPos);
          dispatchDialog(res.data.description);
        }
      })
      .catch(err => console.log(err.response.data));
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return attemptMove("w");
      case 38:
        return attemptMove("n");
      case 39:
        return attemptMove("e");
      case 40:
        return attemptMove("s");
      default:
        console.log(e.keyCode);
    }
  }

  window.addEventListener("keydown", e => {
    if (
<<<<<<< HEAD
      e.keycode === 37 ||
      e.keycode === 38 ||
      e.keycode === 39 ||
      e.keycode === 40 ||
    ) {
    handleKeyDown(e)
=======
      e.keyCode === 37 ||
      e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 40
    ) {
      handleKeyDown(e);
>>>>>>> 2da90351435bc4be21a98b90ec1d312e28c23c90
    }
  });

  return player;
}
