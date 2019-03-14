import { stringify } from 'query-string'
import { useState, useEffect } from 'react'

export const airtableURL = (path: string, params?: object) =>
  `https://api.airtable.com/v0/appcOrZ06NTREiuZH${path}?api_key=keyAgp7jEHb7WHIMF&cellFormat=string&timeZone=YYYY-MM-DD&userLocale=en-GB&${stringify(
    params
  )}`

export const airtableFetchArgs = (
  body?: any,
  fetchArgs?: Partial<RequestInit>
) =>
  ({
    ...fetchArgs,
    mode: 'cors',
    method: fetchArgs ? fetchArgs.method : body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...(fetchArgs || { headers: {} }).headers,
    },
  } as Partial<RequestInit>)

export const useAirtableData = <T>(
  path: string,
  opts?: Partial<RequestInit>
) => {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      setError(false)

      fetch(path, opts)
        .then(res => res.json())
        .then(
          (output: {
            records: {
              createdTime: string
              id: string
              fields: T
            }[]
          }) => {
            setData(output.records.map(record => record.fields))
            setLoading(false)
            setError(false)
          }
        )
        .catch(e => {
          setLoading(false)
          setError(true)
        })
    },
    [path, JSON.stringify(opts)]
  )

  return { data, isError, isLoading }
}
