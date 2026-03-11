# VibeBoard 🎨

**A minimalist, keyboard-driven whiteboard built in just a few hours with AI assistance**

<video width="100%" controls>
  <source src="VibeBoard.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

> **The Future of Software Engineering**: This entire application was built from scratch in just a few hours using natural language prompts with Claude Code and VibeBox. The video above shows the real-time development process - from concept to fully functional whiteboard application. This represents the future where developers can describe what they want and AI helps build it instantly. Sorry about the voice quality in the raw capture, but I wanted to show the authentic development experience!

## ✨ Features

- **Pure Keyboard Control**: No toolbars or UI clutter - everything is controlled via keyboard shortcuts
- **Vector-Based Drawing**: Crisp, scalable graphics with proper zoom support
- **Multi-Selection**: Select multiple objects with drag rectangles or Ctrl+click
- **Smart Persistence**: Auto-save with thumbnail previews and multi-instance support
- **Multi-Instance Support**: Run multiple whiteboards simultaneously with `Cmd+Shift+N`
- **Professional Zoom**: True camera-based zoom without pixelation
- **Drag & Drop**: Move individual objects or groups seamlessly

## 🎯 Tools & Shortcuts

### Drawing Tools
- `P` - Pen/Freehand drawing
- `O` - Circle
- `R` - Rectangle
- `L` - Line
- `A` - Arrow
- `T` - Text (click to type)

### Selection & Navigation
- `V` - Selection mode (drag to select multiple)
- `Space` - Pan/Navigate
- Mouse wheel or `+/-` - Zoom in/out
- `Ctrl+0` - Reset zoom to 100%

### Object Management
- `Ctrl+Z` - Undo
- `Delete/Backspace` - Delete selected objects
- `Escape` - Deselect all
- Drag selected objects to move them

### Application
- `Cmd+Shift+N` - Create new instance/window
- Auto-save every 30 seconds
- Instance selector on startup (if saved boards exist)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Run

```bash
# Clone or download the project
cd vibeboard

# Install dependencies
npm install

# Start the application
npm start
```

The application will launch in fullscreen mode. If you have saved whiteboards, you'll see the instance selector. Otherwise, you'll start with a clean canvas ready for drawing!

## 🏗️ Architecture

This is a modern Electron application with:
- **Frontend**: Pure HTML5 Canvas with object-oriented drawing system
- **Backend**: Electron main process with IPC communication
- **Persistence**: localStorage with smart state management
- **Multi-Instance**: Secure process isolation with context bridges

### Key Technical Features
- High-DPI canvas support for crisp rendering
- Object-based architecture (not just bitmap drawing)
- Smart coordinate transformation for zoom/pan
- Thumbnail generation for saved states
- Secure IPC communication between processes

## 🎬 Development Story

This project showcases the incredible potential of AI-assisted development. The entire application - from initial concept to fully functional whiteboard with advanced features like multi-instance support, persistence, and professional UI - was built in approximately 3-4 hours using conversational programming with Claude Code.

**What was achieved in hours, not days:**
- Complete Electron application setup
- Advanced canvas drawing system
- Multi-object selection and manipulation
- Zoom and pan functionality
- State persistence with thumbnails
- Multi-instance architecture
- Professional UI design
- Auto-save system

This represents a fundamental shift in how software can be created - from describing what you want in natural language to having a fully functional application.

## 🔧 Project Structure

```
vibeboard/
├── main.js           # Electron main process
├── preload.js        # Secure IPC bridge
├── index.html        # Main application UI
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## 🤝 Contributing

This project demonstrates the power of AI-assisted development. Feel free to:
- Fork and extend the functionality
- Submit issues or feature requests
- Use this as inspiration for your own AI-assisted projects

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with [Claude Code](https://claude.ai/code) - Anthropic's AI coding assistant
- Developed as part of the VibeBox project
- Demonstrates the future of collaborative human-AI software development

---

*"The best way to predict the future is to build it"* - and now we can build it by simply describing it. Welcome to the future of software engineering! 🚀