import type { NextPage } from "next";

import UnitBox from "./UnitBox";

import style from "./index.module.scss";
const Index: NextPage = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>
        유닛소개
      </h1>
      
      <UnitBox>

      </UnitBox>
    </main>
  );
};

export default Index;
