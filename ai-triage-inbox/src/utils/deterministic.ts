export function hashString(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);

    hash |= 0;
  }

  return Math.abs(hash);
}

export function seededNumber(seed: string, min: number, max: number) {
  const hash = hashString(seed);

  return min + (hash % (max - min));
}

export function seededBoolean(seed: string, probability = 0.1) {
  const hash = hashString(seed);

  return (hash % 100) / 100 < probability;
}
