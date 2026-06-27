import React from "react";

function capitalize(str) {
  let lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function Alert(props) {
  if (props.alert === null) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert">
      <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
    </div>
  );
}