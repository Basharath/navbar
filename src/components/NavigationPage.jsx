import React from "react";

export default function NavigationPage({ location }) {
  return <div>You are in "{location.pathname.slice(1)}" section</div>;
}
