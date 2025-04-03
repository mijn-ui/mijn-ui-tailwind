// This need to be automated using the node execution.
// You have to resgister the file manually in order to make it resizeable/viewable component.

type ViewPageItems = {
  name: string
  title: string
  description: string
  htmlSrc: string
  iframeHeight: number
}

export const ViewPages: Record<string, ViewPageItems> = {
  // Layout Components
  "dashboard-layout-01": {
    name: "dashboard-layout-01",
    title: "Dashboard Layout",
    description:
      "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
    htmlSrc: "_view/dashboard-layout-01",
    iframeHeight: 740,
  },
  "dashboard-layout-02": {
    name: "dashboard-layout-02",
    title: "Dashboard Layout with Sidebar",
    description:
      "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
    htmlSrc: "_view/dashboard-layout-02",
    iframeHeight: 740,
  },
  "header-01": {
    name: "header-01",
    title: "Header",
    description: "Navigation header at the top of the UI that provides access to key sections and features.",
    htmlSrc: "_view/header",
    iframeHeight: 740,
  },
  "sidebar-01": {
    name: "sidebar-01",
    title: "Sidebar",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_view/sidebar",
    iframeHeight: 740,
  },
  "sidebar-02": {
    name: "sidebar-02",
    title: "Sidebar without icons",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_view/sidebar-without-icons",
    iframeHeight: 740,
  },
  "sidebar-03": {
    name: "sidebar-03",
    title: "Sidebar with Dropdown Items",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_view/sidebar-dropdown-items",
    iframeHeight: 740,
  },
  "sidebar-04": {
    name: "sidebar-04",
    title: "Double Sidebar",
    description:
      "Two vertical navigation panels for site or app sections, typically positioned at the side of the screen.",
    htmlSrc: "_view/sidebar-double",
    iframeHeight: 740,
  },
  // Blocks
  "gantt-chart": {
    name: "gantt-chart",
    title: "Gantt Chart",
    description: "A project management tool that visualizes tasks and resources over time.",
    htmlSrc: "_view/gantt-chart",
    iframeHeight: 740,
  },
  "screen-state": {
    name: "screen-state",
    title: "Screen State",
    description: "Component for displaying different UI states like loading, empty, or error conditions.",
    htmlSrc: "_view/screen-state",
    iframeHeight: 480,
  },
  "drawer-left": {
    name: "drawer-left",
    title: "Drawer",
    description:
      "A panel that slides in from the left side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-left",
    iframeHeight: 740,
  },
  "drawer-right": {
    name: "drawer-right",
    title: "Drawer",
    description:
      "A panel that slides in from the right side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-right",
    iframeHeight: 740,
  },
  "drawer-top": {
    name: "drawer-top",
    title: "Drawer",
    description:
      "A panel that slides in from the top side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-top",
    iframeHeight: 740,
  },
  "drawer-bottom": {
    name: "drawer-bottom",
    title: "Drawer",
    description:
      "A panel that slides in from the bottom side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-bottom",
    iframeHeight: 740,
  },
  "drawer-without-overlay": {
    name: "drawer-without-overlay",
    title: "Drawer",
    description:
      "A panel that slides in from the left side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-without-overlay",
    iframeHeight: 740,
  },
  "drawer-form": {
    name: "drawer-form",
    title: "Drawer",
    description:
      "A panel that slides in from the left side of the screen, showing menu items or content without leaving the current page.",
    htmlSrc: "_view/drawer-form",
    iframeHeight: 740,
  },
}
