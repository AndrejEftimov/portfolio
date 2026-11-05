export function assetPath(path) {
  const normalizedPath = path.replace(/^\/+/, '')
  const baseUrl = import.meta.env?.BASE_URL ?? '/'
  return `${baseUrl}${normalizedPath}`
}
