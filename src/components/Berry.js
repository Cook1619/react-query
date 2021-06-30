import React from "react";
import { useBerry } from "../queries/pokemon";

export const Berry = () => {
  const { data } = useBerry();
  console.log(data);
  return (
    <div>
      {data?.map((berry) => (
        <div key={berry.name}>{berry.name}</div>
      ))}
    </div>
  );
};
