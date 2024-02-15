import React from "react";

type titleTypes = {
  name: string;
};

export default function Title({ name }: titleTypes) {
  return (
    <div className="title">
      <h1>{name}</h1>
    </div>
  );
}
