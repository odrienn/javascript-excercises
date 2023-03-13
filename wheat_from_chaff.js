// https://www.codewars.com/kata/5bdcd20478d24e664d00002c

function wheatFromChaffs(values) {
  let len = values.length;
    for (let i = 0; i < len; i++) {
    if (values[i] > 0) {
        for (let j = len; j > i; j--) {
            if (values[j] < 0) {
                [values[i], values[j]] = [values[j], values[i]];
                len = j;
                break;
            }
        }
    }
    }
    return values;
}
