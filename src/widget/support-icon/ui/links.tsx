import React from "react";
import { dataSupp } from "../data/support-data";
import LinkIcon from "./link-icon";

const Links = () => {
  return (
    <div className={"support-icon__list"}>
      {
        dataSupp.map((d, i) => (
          <LinkIcon
            key={d.id}
            number={i + 1}
            id={d.id}
            link={d.link}
            img={d.img}
          />
        ))
      }
    </div>
  );
};

export default Links;