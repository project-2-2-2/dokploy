import React from "react";

const CardTitle = ({ title, description }) => (
  <div className="mt-5 px-2 pb-1">
    <h3 className="font-[heading] text-[1.05rem] md:text-[1.1rem] tracking-[-0.02em] text-slate-900 mb-1">
      {title}
    </h3>
    <p className="max-w-[95%] text-sm leading-6 text-slate-500 font-[f1]">
      {description}
    </p>
  </div>
);

export default CardTitle;