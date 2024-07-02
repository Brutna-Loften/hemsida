import * as promisesJson from "./promises.json";

// TODO: Should probably name this something else
export type Promise = (typeof promisesJson)[number];

export const Data = {
  promises: Array.from(promisesJson),
};
