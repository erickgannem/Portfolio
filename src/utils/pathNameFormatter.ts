export default function pathNameFormatter (path: string): string | boolean {
  if (path === '/') {
    return false
  }

  const [, ...rest] = path.split('')
  return rest[0].toUpperCase() + rest.slice(1, rest.length).join('')
}
