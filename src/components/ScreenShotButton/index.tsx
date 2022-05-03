import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";

export type ScreenShotButtonProps = {
  onScreenshot: (screenshot: string | null) => void;
  screenshot: string | null;
};

export const ScreenShotButton = ({
  onScreenshot,
  screenshot,
}: ScreenShotButtonProps) => {
  const [isTakeScreenShot, setIsTakeScreenShot] = useState<boolean>(false);

  const handleTakScreenShot = async () => {
    setIsTakeScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshot(base64image);
    setIsTakeScreenShot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors ease-out"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" onClick={() => onScreenshot(null)} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500  transition-all duration-500 ease-in-out"
      onClick={handleTakScreenShot}
    >
      {isTakeScreenShot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};
