import { FeedbackType, feedbackTypes } from "..";
import { Header } from "../../Header";
export type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <Header title="Escolha seu problema" />

      <div className="flex py-8 gap-8 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="py-5 bg-zinc-800 rounded-lg w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all duration-500 ease-linear focus:border-brand-500 focus:outline-none outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
