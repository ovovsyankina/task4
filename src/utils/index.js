import { createBrowserHistory, createHashHistory } from "history";

export const verifyUrlImage = (urlImg) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(urlImg);
};
export const history = createHashHistory();
