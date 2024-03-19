import { useEffect, useState } from "react"
import { BASE_API_URL } from "./consts"
import { JobItem } from "./types"

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const jobItemsSliced = jobItems.slice(0, 7)

  useEffect(() => {
    if (!searchText) return

    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`)
      const data = await response.json()
      setIsLoading(false)
      setJobItems(data.jobItems)
    }
    fetchData()
  }, [searchText])

  return [jobItemsSliced, isLoading] as const
}
