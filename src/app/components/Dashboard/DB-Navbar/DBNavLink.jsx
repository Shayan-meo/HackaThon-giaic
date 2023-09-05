import Link from "next/link";
import React from "react";

const DBNavLink = (props) => {
  return (
    <li className="nav-item mx-2">
      <Link href={props.href} className="nav-link">
        {props.text}
      </Link>
    </li>
  );
};

export default DBNavLink;
