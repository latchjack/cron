import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    yourDetails: {
      minute: number | "*";
      hour: number | "*";
      dayOfMonth: number | "*";
      month: number | "*";
      dayOfWeek: number | "*";
    };
  }
}
