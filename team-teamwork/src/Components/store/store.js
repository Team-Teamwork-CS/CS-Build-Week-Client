import React from "react"
import { connect } from 'react-redux'
import { STORE_SIZE } from "../../config/constants"
import { tiles } from "../../data/map/3"
import store from "../../config/store"
import "./styles.css"

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
            return "bow"
    }
}
function StoreTile(props) {
    return (
        <div
            className={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: STORE_SIZE,
                width: STORE_SIZE
            }}
        ></div>
    )
}
function StoreRow(props) {
    return (
        <div className="row" style={{height: 100}}>
            {props.tiles.map((tile, index) => (
                <StoreTile tile={tile} key={`storeTile ${index}`} />
            ))}
        </div>
    )
}
const Store = props => {
    store.dispatch({
        type: "CREATE_STORE",
        payload: {
            tiles
        }
    })
return (
    <div
        style={{
            width: "auto",
            height: "auto",
            border: "2px solid grey",
            margin: "20px"
        }}
    >
        <div style={{borderBottom: "2px solid grey"}}>
            <h2 style={{marginTop: 10, textAlign: "center"}}>
                Store
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
                    <StoreRow tiles={row} key={`storeRow ${index}`} />
            ))}
        </div>
    </div>
    )
}
function mapStateToProps(state) {
    return {
        items: state.store.items
    }
}

export default connect(mapStateToProps)(Store)