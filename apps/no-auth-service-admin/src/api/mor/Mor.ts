import { JsonValue } from "type-fest";

export type Mor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
