import React from "react";
import { nanoid } from "nanoid";

import { AddonFile } from "../../shared/data/interface/addon-file.interface";

import "./style/index.scss";

type Props = {
  addon: AddonFile[]
}

const AddonMaterial = ({ addon }: Props) => {
  return (
    <div className="addon-material">
      <div className="addon-material__title">
        <span>Дополнительные материалы</span>
      </div>
      {/*{
                addon.map(m => (
                    <div className='addon-material__material'
                        key={m.id}
                    >
                        <a href={m.url}>
                            <span>{m.title}</span>
                        </a>
                    </div>
                ))
            }*/}
      <div className="addon-material__material"
           key={nanoid()}
      >
        <a href={addon?.[0]?.["presentation"]}>
          <span>Презентация</span>
        </a>
      </div>
      <div className="addon-material__material"
           key={nanoid()}
      >
        <a href={addon?.[0]?.["manual"]}>
          <span>Методические указания</span>
        </a>
      </div>
    </div>
  );
};

export default AddonMaterial;