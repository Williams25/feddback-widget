import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseButton = () => (
  <Popover.Button
    className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 transition-all duration-500 ease-linear"
    title="fechar formulario de feedback"
  >
    <X weight="bold" className="w-4 h-4" />
  </Popover.Button>
);
