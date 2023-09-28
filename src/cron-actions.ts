import { GlobalState } from "little-state-machine";

export function updateCron(
  state: GlobalState,
  payload: {
    minute: number | "*";
    hour: number | "*";
    dayOfMonth: number | "*";
    month: number | "*";
    dayOfWeek: number | "*";
  }
) {
  console.log(payload);
  return {
    ...state,
    yourDetails: {
      ...payload,
    },
  };
}
