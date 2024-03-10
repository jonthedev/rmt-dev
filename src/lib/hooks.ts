import { useEffect, useState } from "react"
import { BASE_API_URL } from "./consts"

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  return {
    jobItems,
    isLoading
  }
}
