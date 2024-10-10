export function manSize(size: number = 0) {
  const num = 1024.0; //byte
  if (size < num) return size + 'B';
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + 'KiB'; //kb
  if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + 'MiB'; //M
  if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + 'GiB'; //G
  return (size / Math.pow(num, 4)).toFixed(2) + 'TiB'; //T
}
