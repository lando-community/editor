# Landofile Editor

A web-based YAML editor for Lando configuration files with real-time validation and schema support.

## Features

- **🎨 YAML Syntax Highlighting**: Custom syntax highlighting optimized for Landofiles
- **✅ Real-time Validation**: Validates against the community-driven [Lando schema specification](https://github.com/lando-community/lando-spec)
- **🔄 Auto-formatting**: Automatically formats:
  - On file load
  - When pasting content
  - Via Format button or Ctrl+Shift+F
- **🔗 Share Support**: 
  - Generate shareable URLs with compressed content
  - Preserves comments and formatting
  - Auto-formats shared content on load
- **📝 Schema-aware Tooltips**: Hover over properties to see:
  - Property descriptions
  - Type information
  - Allowed values
  - Default values
  - Usage examples
- **⚠️ Error Highlighting**: Precise error locations with helpful messages
- **🎯 Schema-aware Autocomplete**: Suggestions based on the current context
- **🌙 Dark Mode Support**: Switch between light and dark themes with auto-detection
- **💾 File Operations**:
  - Drag & drop .lando.yml files
  - Open files via menu
  - Save with auto-naming
  - Preserves comments and structure

All schema-powered features (validation, suggestions, hover tooltips, etc) are driven by the community-driven [Lando schema specification](https://github.com/lando-community/lando-spec), ensuring accuracy and consistency with Lando's configuration format.

## Usage

### Formatting

The editor automatically formats YAML content while preserving comments and structure:
- When files are loaded (drag & drop or open)
- When content is pasted
- When using the Format button
- When using the keyboard shortcut (Ctrl+Shift+F)

### Sharing

To share your Landofile:
1. Click the Share button in the menu
2. Copy the generated URL
3. Send to others

Recipients will see the exact same content, including comments and formatting.

## Development

### Prerequisites

- [Lando](https://docs.lando.dev/install)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/lando/editor.git
cd editor
```

2. Start the development environment:

```bash
lando start
```

The editor will be available at `https://editor.lndo.site`.

### Building

To create a production build:

```bash
lando build
```
The editor will be available at `https://editor.lndo.site/public`.

### Deployment

The editor is automatically deployed to GitHub Pages when code is pushed to the main branch.
You can access the live version at: https://lando-community.github.io/editor/

## Tech Stack

- **Frontend Framework**: React 19
- **Editor**: Monaco Editor
- **UI Components**: Radix UI primitives, shadcn/ui, and Tailwind CSS
- **State Management**: Zustand
- **Build Tools**: Vite, PostCSS, Autoprefixer
- **YAML Processing**: YAML parser and AJV schema validation

### Development Notes

- Fast development and production builds with Vite
- Custom theme using Lando brand colors
- Local schema development:
  - Place `landofile-spec.json` in project root to override remote schema
  - Useful for testing schema changes locally

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

GPL-3.0-or-later
