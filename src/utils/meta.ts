export const absoluteURL = (baseURL: string, url: string) => {
  const currentURL = new URL(url)
  const host = new URL(baseURL)
  host.pathname = currentURL.pathname
  return host.toString()
}
