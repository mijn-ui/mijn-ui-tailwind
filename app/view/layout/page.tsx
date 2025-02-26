// Temporary page component.
// TODO: Refactor to implement a proper structure.
"use client"

import HTMLReactParser from "html-react-parser/lib/index"
import React, { useEffect, useState } from "react"

const View = () => {
  const [reactElement, setReactElement] = useState<React.ReactNode>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const src = "/_templates/layout"

  useEffect(() => {
    const fetchHtml = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch(`/tailwind/api/get-html?filename=${src}`, {
          cache: "force-cache",
        })
        const data = await response.json()
        const parsedHTML = HTMLReactParser(data.html)
        setReactElement(parsedHTML)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchHtml()
  }, [src])

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 size-5 animate-spin"
          height="1em"
          width="1em"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        <p className="text-sm">Loading...</p>
      </div>
    )
  }

  if (error) {
    return <p className="text-sm text-danger">Error loading content. Please try refreshing the page again.</p>
  }

  return reactElement
}

export default View
