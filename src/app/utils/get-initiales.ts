export function getInitiales(name: string): string {
  if (!name) return '';

  const parts = name.split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return parts.map((part) => part.charAt(0).toUpperCase()).join('');
}
