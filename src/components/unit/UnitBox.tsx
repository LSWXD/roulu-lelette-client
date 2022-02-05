/* package */
import type { NextPage } from "next";

/* component */
import { useEffect, useState } from "react";

/* style */
import style from "./UnitBox.module.scss";

const UnitBox: NextPage = () => {
  const data: Object = [
    {
      name: "잼민이",
      type: "잼민이",
      rank: "Normal",
      power: 5,
      description: "잼민이의 어쩌구",
    },
    {
      name: "엄",
      type: "엄준식",
      rank: "Rare",
      power: 5,
      description: "1일커밋용....ㅠ",
    },
    {
      name: "잼민이3",
      type: "잼민이3",
      rank: "Rare",
      power: 5,
      description: "잼민이의 어쩌구3",
    },
    {
      name: "잼민이4",
      type: "잼민이4",
      rank: "Rare",
      power: 5,
      description: "잼민이의 어쩌구4",
    },
    {
      name: "잼민이5",
      type: "잼민이5",
      rank: "Rare",
      power: 5,
      description: "잼민이의 어쩌구5",
    },
  ];

  const [unitObjs, setUnitObj] = useState([]);

  useEffect(() => {
    const unitData: any = data;
    setUnitObj(unitData);
  }, []);

  return (
    <div className={style.outerDiv}>
      {unitObjs.map((unitObj: any, index: number) => {
        const name: string = unitObj.name;
        const type: string = unitObj.type;
        const rank: string = unitObj.rank;
        const power: number = unitObj.power;
        const description: string = unitObj.description;

        return (
          <section className={style.section} key={index}>
            <div className={style.rankNameDiv}>{rank}</div>
            <div className={style.innerDiv}>
              <img className={style.imgDiv} src="" alt="" />

              <div className={style.infoOuterDiv}>
                <div className={style.infoDiv}>
                  이름: <span className={style.infoSpan}>{name}</span>
                </div>

                <div className={style.infoDiv}>
                  타입: <span className={style.infoSpan}>{type}</span>
                </div>

                <div className={style.infoDiv}>
                  효과: <span className={style.infoSpan}>{power}</span>
                </div>

                <div className={style.infoDiv}>
                  설명: <span className={style.infoSpan}>{description}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default UnitBox;
