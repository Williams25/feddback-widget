import { Header } from "../../Header";

export type FeedbackSuccessStepProps = {
  onFeedBackRestarted: () => void;
};

export const FeedbackSuccessStep = ({
  onFeedBackRestarted,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src="/icons/Success.svg" alt="" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-all ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedBackRestarted}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
