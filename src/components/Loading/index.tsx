import { CircleNotch } from "phosphor-react";

export const Loading = () => (
  <div className="w-4 h-4 flex items-center justify-center overflow-hidden animate-spin">
    <CircleNotch weight="bold" className="w-4 h-4" />
  </div>
);
