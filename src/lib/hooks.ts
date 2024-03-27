import { SetStateAction, useEffect, useState } from "react"
import { BASE_API_URL } from "./consts"
import { JobItem, JobItemExpanded } from "./types"
import { useQuery } from "@tanstack/react-query"
import { handleError } from "./utils"

// --------------------------------------------------

type JobItemApiResponse = {
  public: boolean
  jobItem: JobItemExpanded
}

const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`)
  //4xx or 5xx

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.description)
  }
  const data = await response.json()
  return data
}

// --------------------------------------------------

type JobItemsApiResponse = {
  public: boolean
  sorted: boolean
  jobItems: JobItem[]
}

const fetchJobItems = async (
  searchText: string
): Promise<JobItemsApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`)
  // 4xx or 5xx
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.description)
  }
  const data = await response.json()
  return data
}

export function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError
    }
  )
  const isLoading = isInitialLoading
  return [data?.jobItem, isLoading] as const
}

export const useJobItems = (searchText: string) => {
  const { data, isInitialLoading } = useQuery(
    ["job-items", searchText],
    () => (searchText ? fetchJobItems(searchText) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: handleError
    }
  )
  const isLoading = isInitialLoading
  return [data?.jobItems, isLoading] as const
}

// --------------------------------------------------

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1)
      setActiveId(id)
    }
    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return activeId
}

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timerId)
  }, [value, delay])

  return debouncedValue
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
