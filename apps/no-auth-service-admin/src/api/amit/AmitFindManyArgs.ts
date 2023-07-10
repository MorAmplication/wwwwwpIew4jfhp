import { AmitWhereInput } from "./AmitWhereInput";
import { AmitOrderByInput } from "./AmitOrderByInput";

export type AmitFindManyArgs = {
  where?: AmitWhereInput;
  orderBy?: Array<AmitOrderByInput>;
  skip?: number;
  take?: number;
};
