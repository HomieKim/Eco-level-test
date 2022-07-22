import { RESULT } from './constatns';

export function getData(lv: string) {
  const { lv1, lv2, lv3, lv4 } = RESULT;
  if (lv === 'lv1') {
    return lv1;
  } else if (lv === 'lv2') {
    return lv2;
  } else if (lv === 'lv3') {
    return lv3;
  } else {
    return lv4;
  }
}
