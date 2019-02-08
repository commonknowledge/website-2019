import 'url-polyfill'

export const absoluteURL = (baseURL: string, pathname: string) => {
  const host = new URL(baseURL)
  host.pathname = pathname
  return host.toString()
}
