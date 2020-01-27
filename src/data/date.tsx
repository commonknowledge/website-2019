import { format, parseISO } from "date-fns"
import { FC, Fragment } from "react"
import React from "react"

export const NumericDate: FC<{ value?: string }> = ({ value }) => (
  <Fragment>{value && format(parseISO(value), "dd.LL.yyyy")}</Fragment>
)

export const YearRange: FC<{
  value: { date?: string; endDate?: string }
}> = ({ value }) => (
  <Fragment>
    {value.date &&
      `${format(parseISO(value.date), "yyyy")}–${
        value.endDate ? format(parseISO(value.endDate), "yyyy") : "Ongoing"
      }`}
  </Fragment>
)
