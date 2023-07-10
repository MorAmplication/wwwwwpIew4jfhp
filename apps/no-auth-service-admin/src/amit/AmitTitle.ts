import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "username";

export const AmitTitle = (record: TAmit): string => {
  return record.username || String(record.id);
};
