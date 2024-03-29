import React, { createContext, useState } from "react"
import { useSearchQuery, useSearchTextContext } from "../lib/hooks"
import { RESULTS_PER_PAGE } from "../lib/consts"
import { SortBy, PageDirections, JobItem } from "../lib/types"

type JobItemsContext = {
  jobItems: JobItem[] | undefined
  jobItemsSortedAndSliced: JobItem[]
  isLoading: boolean
  totalNumberOfResults: number
  totalNumberOfPages: number
  currentPage: number
  sortBy: SortBy
  handleChangePage: (direction: PageDirections) => void
  handleChangeSortBy: (newSortBy: SortBy) => void
}

export const JobItemsContext = createContext<JobItemsContext | null>(null)

export const JobItemsContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { debouncedSearchText } = useSearchTextContext()

  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<SortBy>("relevant")

  const totalNumberOfResults = jobItems?.length || 0
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore
    } else {
      return a.daysAgo - b.daysAgo
    }
  })

  const jobItemsSortedAndSliced = jobItemsSorted.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )

  const handleChangePage = (direction: PageDirections) => {
    if (direction === "next") {
      setCurrentPage(prev => prev + 1)
    } else if (direction === "previous") {
      setCurrentPage(prev => {
        return prev <= 1 ? 0 : prev - 1
      })
    }
  }

  const handleChangeSortBy = (newSortBy: SortBy) => {
    setSortBy(newSortBy)
    setCurrentPage(1)
  }

  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSortedAndSliced,
        isLoading,
        totalNumberOfResults,
        totalNumberOfPages,
        currentPage,
        sortBy,
        handleChangePage,
        handleChangeSortBy
      }}
    >
      {children}
    </JobItemsContext.Provider>
  )
}
