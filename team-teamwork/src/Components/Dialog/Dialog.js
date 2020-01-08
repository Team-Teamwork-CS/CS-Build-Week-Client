import React from "react";
import { connect } from "react-redux";

const Dialog = props => {
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
          Dialog
        </h2>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 50px)",

          backgroundColor: "darkGrey"
        }}
      >
        <ul
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 10,
            overflowY: "scroll",
            overFlow: "hidden",
            height: 300
          }}
        >
          {props.text.map(t => (
            <li style={{ paddingTop: 20 }}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    text: state.dialog.text
  };
}

export default connect(mapStateToProps)(Dialog);
