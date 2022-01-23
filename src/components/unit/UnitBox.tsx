import type { NextPage } from "next";

import style from "./UnitBox.module.scss";

const UnitBox: NextPage = () => {
  return (
    <div className={style.outerDiv}>
      <div className={style.rankNameDiv}>Normal</div>
      
      <div className={style.innerDiv}>
        <img className={style.imgDiv} />

        <div className={style.infoOuterDiv}>
          <div>
            name:<span></span>
          </div>
          <div>
            type:<span></span>
          </div>
          <div>
            power:<span></span>
          </div>
          <div>
            description:<span></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UnitBox;
