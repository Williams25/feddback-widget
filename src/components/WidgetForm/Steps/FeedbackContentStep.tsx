import { FormEvent, useState } from "react";
import { Header } from "../../Header";
import { FeedbackType, feedbackTypes } from "..";
import { ScreenShotButton } from "../../ScreenShotButton";

export type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedBackRestarted: () => void;
  onFeedBackSend: () => void;
};

export const FeedbackContentStep = ({
  feedbackType,
  onFeedBackRestarted,
  onFeedBackSend,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [commet, setCommet] = useState<string>("");

  const feedbackInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFeedBackSend();
    console.log({ screenshot, commet });
  };

  return (
    <>
      <Header
        title={feedbackInfo.title}
        img={
          <img
            src={feedbackInfo.image.source}
            alt={feedbackInfo.image.alt}
            className="w-6 h-6 mr-1"
          />
        }
        feedBackRestarted={{ onFeedBackRestarted }}
      />

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="p-2 min-w-[304px] w-full min-h-[112px] placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md hover:border-brand-500  focus:ring-brand-500 focus:ring-1 focus:border-brand-500 focus:outline-none outline-none resize-none scrollbar-thumb-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          value={commet}
          onChange={(e) => setCommet(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 fex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-all duration-500 ease-in-out disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={commet.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
