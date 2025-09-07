# Bill Receipt Generator

A modern, responsive web application for generating professional fuel station receipts with customizable templates and brand logos.

## Features

- 🔐 **Secure Login System** - Protected access with user authentication
- 🎨 **Multiple Templates** - Classic Printer and Modern Digital receipt styles
- 🏢 **Brand Support** - Pre-configured logos for major fuel brands (Indian Oil, Bharat Petroleum, HP, etc.)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🌙 **Dark Mode** - Built-in dark/light theme support
- 💾 **Export Functionality** - Download receipts as PNG images
- ⚡ **Real-time Preview** - Instant preview of receipt changes

## Login Credentials

The application uses the following credentials:

- **Username**: `admin`
- **Password**: `admin@bill`

## Getting Started

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Application**
   Navigate to `http://localhost:5173` in your browser

4. **Login**
   Use the credentials above to access the application

### GitHub Pages Deployment

The application is configured for automatic deployment to GitHub Pages.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Automatic Deployment**
   - The GitHub Action will automatically build and deploy on every push to main
   - Your app will be available at: `https://yourusername.github.io/bill-receipt-generator/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

## Usage

1. **Login** with your credentials
2. **Customize** receipt details using the form on the left
3. **Preview** your receipt in real-time on the right
4. **Download** the receipt as a PNG image
5. **Logout** when finished

## Technologies Used

- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- HTML2Canvas for image export
- Context API for state management

## License

This project is licensed under the MIT License.
