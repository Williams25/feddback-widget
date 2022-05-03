import { ArrowLeft } from "phosphor-react";
import { ReactNode } from "react";
import { CloseButton } from "../CloseButton";

export type HeaderProps = {
  title?: string;
  img?: ReactNode;
  feedBackRestarted?: {
    onFeedBackRestarted?: () => void;
  };
};

export const Header = ({ title, img, feedBackRestarted }: HeaderProps) => {
  return (
    <header>
      {!!feedBackRestarted && (
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition-all duration-500 ease-linear"
          onClick={feedBackRestarted.onFeedBackRestarted}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
      )}

      {img || title ? (
        <span className="text-xl leading-6 flex items-center gap-2">
          {!!img && img}
          {!!title && title}
        </span>
      ) : null}

      <CloseButton />
    </header>
  );
};
