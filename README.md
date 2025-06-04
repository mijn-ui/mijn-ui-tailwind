# MijnUI Tailwind Components

A comprehensive, organized collection of reusable Tailwind CSS components with live previews. This library provides a clean, modern interface for browsing and previewing UI components.

## 📁 Project Structure

```
.
├── components/ # Component HTML files organized by category
│ ├── accordion/
│ │ ├── accordion.html
│ │ ├── accordion-active.html
│ │ └── ...
│ ├── button/
│ │ ├── button.html
│ │ ├── button-colors.html
│ │ └── ...
│ └── ...
├── css/
│ ├── input.css # Tailwind CSS input file
│ ├── output.css # Compiled CSS (generated)
│ └── output.min.css # Minified CSS (generated)
├── previews/ # Generated preview files (auto-generated)
│ ├── accordion-preview.html
│ ├── button-preview.html
│ └── ...
├── scripts/
│ ├── generate-previews.mts # Preview generation script
│ └── build.sh # Build script
├── index.html # Main component library page (generated)
└── package.json
```

## 🚀 Quick Start

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mijn-ui/mijn-ui-tailwind
   cd mijn-ui-tailwind
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the library**

   ```bash
   npm run build
   ```

4. **Start the development server**

   ```bash
   npm run serve
   ```

5. **Open your browser** to `http://localhost:3000`

## 🛠️ Development

### Available Scripts

| Script                   | Description                                   |
| ------------------------ | --------------------------------------------- |
| `npm run build`          | Build CSS and generate all preview files      |
| `npm run build:css`      | Compile Tailwind CSS only                     |
| `npm run build:previews` | Generate preview files only                   |
| `npm run dev`            | Build everything and start development server |
| `npm run watch`          | Watch for changes and rebuild automatically   |
| `npm run serve`          | Start a local HTTP server                     |
| `npm run clean`          | Remove all generated files                    |

### Development Workflow

1. **Start development mode**

   ```bash
   npm dev
   ```

   This will:

   - Build CSS (regular and minified versions)
   - Generate preview files
   - Start file watchers
   - Launch development server

2. **Watch mode for continuous development**

   ```bash
   npm watch
   ```

   This will:

   - Watch for CSS changes and rebuild automatically
   - Watch for component HTML changes and regenerate previews
   - Keep everything in sync

## 📝 Contributing

### Adding New Components

1. **Choose the right category**

   - Use existing folders in `components/` when possible
   - Create new folders for new component types

2. **Create component HTML files**

   ```html
   <!-- components/button/button-new-variant.html -->
   <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
   	New Button Variant
   </button>
   ```

3. **Follow naming conventions**

   - Use kebab-case: `button-primary.html`
   - Be descriptive: `alert-with-icon.html`
   - Include variants: `card-with-image.html`

4. **Test your component**
   ```bash
   npm run build:previews
   npm run serve
   ```

### Component Guidelines

- **Use semantic HTML** when possible
- **Follow Tailwind CSS best practices**
- **Keep components focused** - one component per file
- **Use consistent spacing** - follow existing patterns
- **Make components responsive** - test on different screen sizes
- **Add accessibility attributes** when needed

### File Organization

```
components/
├── [category]/
│ ├── [component-name].html # Basic component
│ ├── [component-name]-variant.html # Component variants
│ ├── [component-name]-sizes.html # Size variations
│ └── [component-name]-colors.html # Color variations
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes

- **Follow responsive design** patterns
- **Use consistent color palette**
- **Maintain proper contrast ratios**

### Component Structure

```html
<!-- Good: Semantic and accessible -->
<button
	class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
	Click me
</button>

<!-- Avoid: Non-semantic or inaccessible -->
<div class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">
	Click me
</div>
```

## 🔧 Configuration

### Tailwind Configuration

The `tailwind.config.js` file contains the Tailwind CSS configuration. Modify it to:

- Add custom colors
- Extend spacing scale
- Add custom fonts
- Configure plugins

### CSS Input

The `css/input.css` file contains Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/_ Add custom CSS here if needed _/
```

## 📖 Preview System

The preview system automatically generates:

1. **Main Index** (`index.html`)

   - Overview of all component categories
   - Statistics and navigation
   - Responsive card layout

2. **Category Previews** (`previews/[category]-preview.html`)
   - All components in a specific category
   - Clean, organized layout
   - Easy navigation back to main index

### How It Works

1. **Script scans** the `components/` directory
2. **Reads HTML files** and organizes by folder
3. **Generates preview pages** with proper styling
4. **Creates navigation** between pages
5. **Applies Tailwind CSS** for consistent styling

## 🚀 Deployment

### Static Hosting

The generated files can be deployed to any static hosting service:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy these files**
   - `index.html`
   - `previews/` folder
   - `css/output.css`

## 🤝 Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-component`
3. **Add your components** following the guidelines above
4. **Test thoroughly**: `npm run build && npm run serve`
5. **Commit your changes**: `git commit -m "feat: add new button variants"`
6. **Push to your fork**: `git push origin feature/new-component`
7. **Create a Pull Request**

### Pull Request Checklist

- [ ] Components follow naming conventions
- [ ] HTML is semantic and accessible
- [ ] Components are responsive
- [ ] Preview files generate correctly
- [ ] No console errors in browser
- [ ] Documentation updated if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All contributors who help improve this library

---

**Happy coding! 🎉**

For questions or support, please open an issue on GitHub.
