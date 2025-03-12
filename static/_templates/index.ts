type TemplateItems = {
  name: string
  title: string
  description: string
  htmlSrc: string
  iframeHeight: number
}

export const Templates: Record<string, TemplateItems> = {
  "dashboard-layout": {
    name: "dashboard-layout",
    title: "Dashboard Layout",
    description:
      "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
    htmlSrc: "_templates/dashboard-layout",
    iframeHeight: 740,
  },
}
