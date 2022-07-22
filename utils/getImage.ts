const getImagePath = (path: string) => `/images/${path}`;
export const IMAGES:ImageType = {
  LV1:getImagePath("iconLv1.png"),
  LV2:getImagePath("iconLv2.png"),
  LV3:getImagePath("iconLv3.png"),
  LV4:getImagePath("iconLv4.png"),
}
type ImageType = {
  LV1:string;
  LV2:string;
  LV3:string;
  LV4:string;
}