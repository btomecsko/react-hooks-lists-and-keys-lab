import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkMap = links.map( x => {
    return <a key = {x} href= {"#"+x}> {x}</a>
  })

  return <nav>{linkMap}</nav>;
}

export default NavBar;
