import { AmitInfo } from "./AmitInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<AmitInfo>;
}
