# VertexGuard Cyber Security Admin Dashboard

VertexGuard is a modern, high-performance cyber security administration dashboard designed for real-time threat monitoring, incident management, and system configuration. Built with a focus on UI/UX excellence, it provides a "Mission Control" experience for security analysts.

## ✨ Key Features

- **Real-time Overview**: Comprehensive dashboard with live threat analytics, risk scores, and system health monitoring.
- **Incident Management**: Advanced incident log with severity tracking, analyst activity feeds, and automated reporting tools.
- **Threat Intelligence**: Detailed breakdown of attack vectors, global threat maps, and AI-driven security recommendations.
- **File Security**: Storage analytics and deep-scan history for endpoint file systems.
- **Dynamic Theming**: Multiple "Hacker" inspired themes (Dark, Green, Blue, etc.) to suit different operational environments.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop with a sticky navigation system and touch-friendly controls.
- **Advanced Settings**: Granular control over RBAC, network configurations, data retention policies, and security protocols.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (Utility-first CSS)
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Charts**: Recharts (High-performance SVG charts)

## 🚀 Getting Started Locally

Follow these steps to get the project running on your local machine.

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone https://github.com/lunia290/VertexGuard.git
   cd VertexGuard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to `http://localhost:3000` in your web browser.

### Build for Production

To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` folder.

## 📂 Project Structure

- `src/components/`: Reusable UI components (Sidebar, Header, etc.)
- `src/pages/`: Individual dashboard pages and views.
- `src/constants/`: Mock data and application constants.
- `src/types.ts`: TypeScript interfaces and type definitions.
- `src/utils.ts`: Utility functions (e.g., Tailwind class merging).

## 🛡️ Security Note

This is a frontend demonstration dashboard. For production use, ensure integration with a secure backend API and implement proper authentication/authorization flows.

---
Built with ❤️ by Lunia290

## 🎉 Credits

**Built by lunia290** – thank you for using and contributing!  
Feel free to open issues or pull requests with improvements.

---

> Happy coding!  
> Let me know if you’d like help customizing or deploying this dashboard.

```