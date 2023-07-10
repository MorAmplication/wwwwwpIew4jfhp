import { Mor as TMor } from "../api/mor/Mor";

export const MOR_TITLE_FIELD = "username";

export const MorTitle = (record: TMor): string => {
  return record.username || String(record.id);
};
