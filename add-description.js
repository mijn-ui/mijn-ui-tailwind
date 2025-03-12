import fs from "fs"
import path from "path"

// Component descriptions
const componentDescriptions = [
  {
    name: "accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
  },
  {
    name: "alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    name: "alert",
    description: "Displays a short, important message to attract the user's attention without interrupting their task.",
  },
  {
    name: "avatar",
    description: "An image element that represents a user, either with a profile picture or initials.",
  },
  {
    name: "badge",
    description: "Small status descriptor for UI elements, displaying counts or labels.",
  },
  {
    name: "breadcrumb",
    description: "Navigation aid showing hierarchy path, helping users understand their location within the app.",
  },
  {
    name: "button",
    description: "Interactive element that triggers an action or event when activated by the user.",
  },
  {
    name: "calendar",
    description: "Date display and selection component that allows users to view and pick dates.",
  },
  {
    name: "card",
    description: "Container that groups related content and actions about a single subject.",
  },
  {
    name: "checkbox",
    description: "Form control that allows selecting multiple options from a set.",
  },
  {
    name: "combo-box",
    description:
      "Input with an associated dropdown that lets users select from a predefined list or enter custom values.",
  },
  {
    name: "date-picker",
    description: "Form component that helps users select a date or date range from a calendar interface.",
  },
  {
    name: "dropdown-menu",
    description: "Toggleable menu that displays a list of actions or options.",
  },
  {
    name: "gantt-chart",
    description: "Project management tool that displays activities or tasks against time in a horizontal bar chart.",
  },
  {
    name: "input",
    description: "Basic form element for collecting user text data through a single-line text field.",
  },
  {
    name: "kanban",
    description:
      "Visual project management tool that displays tasks as cards in columns representing different stages.",
  },
  {
    name: "list",
    description: "Container that displays multiple items in a vertical arrangement.",
  },
  {
    name: "navbar",
    description: "Navigation header at the top of the UI that provides access to key sections and features.",
  },
  {
    name: "pagination",
    description: "Control for navigating between pages of content with numbered links.",
  },
  {
    name: "progress-bar",
    description: "Visual indicator showing the completion progress of a task or operation.",
  },
  {
    name: "radio-group",
    description: "Form control that allows selecting one option from a set of mutually exclusive choices.",
  },
  {
    name: "screen-state",
    description: "Component for displaying different UI states like loading, empty, or error conditions.",
  },
  {
    name: "separator",
    description: "Visual divider that creates space or distinguishes between sections of content.",
  },
  {
    name: "sidebar",
    description: "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
  },
  {
    name: "stepper",
    description: "Multi-step process indicator that guides users through a sequence of defined stages.",
  },
  {
    name: "strength-indicator",
    description: "Visual feedback on password strength or other measured qualities.",
  },
  {
    name: "switch",
    description: "Toggle control that changes between two states, typically used for enabling or disabling features.",
  },
  {
    name: "tab-bar",
    description: "Navigation element with multiple selectable tabs that display different content sections.",
  },
  {
    name: "table",
    description: "Data container displaying information in rows and columns for efficient data comparison.",
  },
  {
    name: "textarea",
    description: "Multi-line text input field for collecting longer form content from users.",
  },
]

// Directory path
const componentsDir = path.join(process.cwd(), "content", "docs", "components")

// Process each MDX file
fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err)
    return
  }

  files.forEach((file) => {
    if (path.extname(file) === ".mdx") {
      const componentName = path.basename(file, ".mdx")
      const filePath = path.join(componentsDir, file)

      // Find description for this component
      const componentInfo = componentDescriptions.find((comp) => comp.name === componentName)

      if (!componentInfo) {
        console.warn(`No description found for component: ${componentName}`)
        return
      }

      // Read the file
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err)
          return
        }

        // Check if description already exists
        if (data.includes("description:")) {
          console.log(`Description already exists in ${file}, skipping...`)
          return
        }

        // Find the frontmatter and add description after title
        const updatedContent = data.replace(
          /(---\s*\n)(.*?)(title:.*?\n)(.*?)(---)/s,
          `$1$2$3description: ${componentInfo.description}\n$4$5`,
        )

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedContent, "utf8", (err) => {
          if (err) {
            console.error(`Error writing file ${file}:`, err)
            return
          }
          console.log(`Updated ${file} with description.`)
        })
      })
    }
  })
})

console.log("Processing MDX files to add descriptions...")
