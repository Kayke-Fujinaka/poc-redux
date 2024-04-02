import { IEnvironmentVariables } from "../interfaces/environment-variables";

export const env: IEnvironmentVariables = {
  ENVIRONMENT: process.env.NODE_ENV || "local",
  REDUX_PERSIST_KEY: process.env.REACT_APP_REDUX_PERSIST_KEY || "root",
};
