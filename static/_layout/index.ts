type TemplateItems = {
  name: string
  title: string
  description: string
  htmlSrc: string
  iframeHeight: number
}

export const Templates: Record<string, TemplateItems> = {
  "dashboard-layout-01": {
    name: "dashboard-layout-01",
    title: "Dashboard Layout",
    description:
      "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
    htmlSrc: "_layout/dashboard-layout-01",
    iframeHeight: 740,
  },
  "dashboard-layout-02": {
    name: "dashboard-layout-02",
    title: "Dashboard Layout with Sidebar",
    description:
      "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
    htmlSrc: "_layout/dashboard-layout-02",
    iframeHeight: 740,
  },
  "header-01": {
    name: "header-01",
    title: "Header",
    description: "Navigation header at the top of the UI that provides access to key sections and features.",
    htmlSrc: "_layout/header",
    iframeHeight: 740,
  },
  "sidebar-01": {
    name: "sidebar-01",
    title: "Sidebar",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_layout/sidebar",
    iframeHeight: 740,
  },
  "sidebar-02": {
    name: "sidebar-02",
    title: "Sidebar without icons",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_layout/sidebar-without-icons",
    iframeHeight: 740,
  },
  "sidebar-03": {
    name: "sidebar-03",
    title: "Sidebar with Dropdown Items",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_layout/sidebar-dropdown-items",
    iframeHeight: 740,
  },
  "sidebar-04": {
    name: "sidebar-04",
    title: "Double Sidebar",
    description:
      "Two vertical navigation panels for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_layout/sidebar-double",
    iframeHeight: 740,
  },
  "gantt-chart": {
    name: "gantt-chart",
    title: "Gantt Chart",
    description: "A project management tool that visualizes tasks and resources over time.",
    htmlSrc: "_layout/gantt-chart",
    iframeHeight: 740,
  },
}
