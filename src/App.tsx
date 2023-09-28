import "./App.css";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { updateCron } from "./cron-actions";
import FormInput from "./form-input";

export type FormValues = {
  minute: number | "*";
  hour: number | "*";
  dayOfMonth: number | "*";
  month: number | "*";
  dayOfWeek: number | "*";
};

export type CronOptions =
  | "minute"
  | "hour"
  | "dayOfMonth"
  | "month"
  | "dayOfWeek";

function App() {
  const { handleSubmit, register } = useForm<FormValues>();
  const { state, actions } = useStateMachine({
    updateCron,
  });

  const onSubmit = (data: FormValues) => {
    actions.updateCron(data);
  };

  return (
    <div className="flex flex-col gap-2">
      <section className="flex flex-col gap-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 border border-black rounded-md p-2 items-center justify-center max-w-lg"
        >
          <FormInput
            label="Minute"
            placeholder="Minute"
            testName="minute"
            {...register("minute")}
            defaultValue={state.yourDetails.minute}
            error="This field is required"
          />
          <FormInput
            label="Hour"
            placeholder="Hour"
            testName="hour"
            {...register("hour")}
            defaultValue={state.yourDetails.hour}
          />
          <FormInput
            label="Day of Month"
            placeholder="Day of Month"
            testName="dayOfMonth"
            {...register("dayOfMonth")}
            defaultValue={state.yourDetails.dayOfMonth}
          />
          <FormInput
            label="Month"
            placeholder="Month"
            testName="month"
            {...register("month")}
            defaultValue={state.yourDetails.month}
          />
          <FormInput
            label="Day of Week"
            testName="dayOfWeek"
            placeholder="Day of Week"
            {...register("dayOfWeek")}
            defaultValue={state.yourDetails.dayOfWeek}
          />
          <input
            className="bg-[#2dc373] border-black px-2 py-1 rounded-md cursor-pointer hover:shadow-md hover:text-white"
            type="submit"
          />
        </form>
      </section>
    </div>
  );
}

export default App;
