import React from "react";

const Separator: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <div style={{ height: "1px" }} className={`flex-1 bg-custom-shadow`} />
  </div>
);

export default Separator;
