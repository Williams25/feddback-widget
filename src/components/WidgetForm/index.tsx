import { useState } from "react";
import { Footer } from "../Footer";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/icons/Bug.svg",
      alt: "imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "/icons/Emoji.svg",
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: "/icons/Thought.svg",
      alt: "imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState<boolean>(false);

  const handleRestartFeedback = () => {
    setFeedbackSend(false);
    setFeedbackType(null);
  };
  const handleFeedBackSend = () => setFeedbackSend(true);

  return (
    <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackSend && (
        <>
          {!feedbackType && (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          )}

          {feedbackType && (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedBackRestarted={handleRestartFeedback}
              onFeedBackSend={handleFeedBackSend}
            />
          )}
        </>
      )}

      {feedbackSend && (
        <FeedbackSuccessStep onFeedBackRestarted={handleRestartFeedback} />
      )}
      <Footer />
    </div>
  );
};
