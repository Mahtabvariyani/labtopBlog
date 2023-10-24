"use client"

import React from "react";
import Lottie from "lottie-react";
import Lottie404 from "./Lottie404.json";

function page() {
  return (
    <div>
      <Lottie animationData={Lottie404} loop={true} />
    </div>
  );
}

export default page;
