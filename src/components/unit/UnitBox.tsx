/* package */
import type { NextPage } from "next";

/* component */
import { useEffect, useState } from "react";

/* style */
import style from "./UnitBox.module.scss";

const UnitBox: NextPage = () => {
  const data = [
    {
      name: "잼민이",
      type: "잼민이",
      power: 5,
      description: "잼민이의 어쩌구",
    },
  ];

  useEffect(() => {
    const unitName = data[0]
    const unitType = data[1]
    const unitPower = data[2]
    const unitDescription = data[3]

  }, data);


  return (
    <div className={style.outerDiv}>
      <li className={style.li}>
        <div className={style.rankNameDiv}>Normal</div>

        <div className={style.innerDiv}>
          <img className={style.imgDiv} src="" alt="" />

          <div className={style.infoOuterDiv}>
            <div className={style.infoDiv}>
              이름: <span className={style.infoSpan}>잼민이</span>
            </div>

            <div className={style.infoDiv}>
              타입: <span className={style.infoSpan}>잼민이</span>
            </div>

            <div className={style.infoDiv}>
              효과: <span className={style.infoSpan}>+5</span>
            </div>

            <div className={style.infoDiv}>
              설명:{" "}
              <span className={style.infoSpan}>잼민이의 찡찡거림이다.</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default UnitBox;
