export function formatNumbers(value: string): string {
  let length = value.length;
  let formatStr = new Array<string>();
  let subStrLength: number = 0;
  if (length <= 3) {
    return value;
  }
  if (length % 2 === 0) {
    subStrLength = 1;
    formatStr.push(value.substring(0, subStrLength));
  } else {
    subStrLength = 2;
    formatStr.push(value.substring(0, subStrLength));
  }
  value = value.substring(subStrLength, value.length);
  for (let i = 0; i <= value.length - 1; i++) {
    if (i % 2 !== 0) {
      formatStr.push(value.substr(i - 1, 1).concat(value.substr(i, 1)));
    } else {
      let restItems = value.length - i;
      if (restItems === 3) {
        formatStr.push(value.substring(i, value.length));
        break;
      }
    }
  }
  return formatStr.join(',');
}
