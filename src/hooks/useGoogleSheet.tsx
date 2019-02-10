import sheetrock from 'sheetrock'
import { useState, useEffect } from 'react'

type SheetrockRow = { num: number; cellsArray: string[]; labels: string[] }

/**
 * Hook to extract data from Google Sheets.
 * Will force a re-render in the consumer component when data is loaded, via the setState hook.
 *
 * @example const data = useGoogleSheet("http://...")
 * @param url of the Google Sheet (ensure it is "public on the web")
 * @param query See https://developers.google.com/chart/interactive/docs/reference#Query for docs
 */
const useGoogleSheet = ({
  url,
  query = 'select *',
}: {
  url: string
  query: string
}): null | SheetrockRow[] => {
  const [data, setData] = useState(null)

  useEffect(
    () => {
      sheetrock({
        url,
        query,
        callback(
          err: any,
          opts: any,
          res: {
            rows: SheetrockRow[]
          }
        ) {
          if (err) {
            return setData(new Error(err))
          }
          return setData(res.rows)
        },
      })
    },
    [url, query]
  )

  return data
}

export default useGoogleSheet
