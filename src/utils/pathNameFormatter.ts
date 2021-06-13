export default function pathNameFormatter (path: string): string | number {
  if (path === '/') {
    return 0
  }

  const [, ...rest] = path.split('')
  return rest[0].toUpperCase() + rest.slice(1, rest.length).join('')
}
