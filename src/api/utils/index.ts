export function makeId(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getRandomSubset<T>(array: T[]): T[] {
  const subset: T[] = [];

  const copyArray = array.slice();

  const subsetLength = Math.floor(Math.random() * (array.length + 1));

  for (let i = 0; i < subsetLength; i++) {
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    subset.push(copyArray[randomIndex]);
    copyArray.splice(randomIndex, 1);
  }

  return subset;
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function formatString(str: string, params: any): string {
  const formattedString = str.replace(
    /\{\{(\w+)\}\}/g,
    (_, key) => params[key],
  );
  return formattedString;
}

export function formatList(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  } else if (strings.length === 1) {
    return strings[0];
  } else {
    const lastItem = strings.pop(); // Remove the last item
    const formattedList = strings.join(', ') + ' and ' + lastItem;
    return formattedList;
  }
}
