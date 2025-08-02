# 🚨 Fake eBay Phishing Site - Cybersecurity Demo

A complete fake e-commerce website built with **React + Tailwind CSS** that simulates a phishing attack for cybersecurity education and demonstration purposes.

## ⚠️ DISCLAIMER

**This project is for EDUCATIONAL PURPOSES ONLY.** It is designed to demonstrate phishing techniques in a controlled environment for cybersecurity training. Do not use this for malicious purposes.

## 🎯 Features

### Complete E-commerce Flow
- **Login Page**: Email/password capture with fake authentication
- **Home Page**: Product catalog with add-to-cart functionality
- **Cart Page**: Shopping cart management
- **Payment Page**: Credit card information capture
- **Success Page**: Confirmation after "payment"

### Data Capture
- **Credentials**: Stored in `logins.txt`
- **Card Details**: Stored in `cards.txt`
- **Console Logging**: Real-time data capture in server console

### Modern Tech Stack
- **Frontend**: React 18 + React Router
- **Styling**: Tailwind CSS
- **Backend**: Express.js
- **Build**: Webpack with Babel

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   cd ShieldXP
   npm install
   ```

2. **Build the React app:**
   ```bash
   npm run build
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Open your browser to `http://localhost:3000`
   - The site will automatically redirect to login

### Development Mode

For development with hot reloading:

1. **Start the backend server:**
   ```bash
   npm run dev
   ```

2. **In another terminal, start the React dev server:**
   ```bash
   npm run dev:client
   ```

3. **Access the development version:**
   - Frontend: `http://localhost:3001`
   - Backend API: `http://localhost:3000`

## 📁 Project Structure

```
ShieldXP/
├── src/                    # React source code
│   ├── components/         # Reusable components
│   │   └── Header.js      # Navigation header
│   ├── pages/             # Page components
│   │   ├── Login.js       # Login page
│   │   ├── Home.js        # Product catalog
│   │   ├── Cart.js        # Shopping cart
│   │   ├── Payment.js     # Payment form
│   │   └── Success.js     # Success page
│   ├── App.js             # Main app component
│   ├── index.js           # React entry point
│   ├── index.html         # HTML template
│   └── index.css          # Tailwind CSS styles
├── public/                # Built files (generated)
├── server.js              # Express backend
├── package.json           # Dependencies
├── webpack.config.js      # Webpack configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md             # This file
```

## 🎨 Design Features

### eBay-Style UI
- **Color Scheme**: eBay red (#E53238) with professional grays
- **Typography**: Clean, modern fonts
- **Layout**: Responsive grid system
- **Components**: Cards, buttons, forms with hover effects

### Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Grid Layout**: Adaptive product grid
- **Navigation**: Collapsible header with cart indicator

### User Experience
- **Loading States**: Spinners and skeleton screens
- **Form Validation**: Real-time input formatting
- **Notifications**: Success/error feedback
- **Smooth Transitions**: CSS animations and hover effects

## 🔧 Configuration

### Tailwind CSS Customization
Edit `tailwind.config.js` to customize:
- Colors (eBay brand colors)
- Typography
- Spacing
- Breakpoints

### Product Data
Modify the products array in `server.js`:
```javascript
const products = [
    {
        id: 1,
        title: "Product Name",
        price: 99.99,
        image: "image-url",
        description: "Product description"
    }
    // Add more products...
];
```

### Server Configuration
- **Port**: Change `PORT` in `server.js`
- **Logging**: Modify `logStolenData()` function
- **Authentication**: Update login logic

## 📊 Data Capture

### Stolen Credentials
- **File**: `logins.txt`
- **Format**: `timestamp - login: {"email":"...","password":"..."}`

### Stolen Card Data
- **File**: `cards.txt`
- **Format**: `timestamp - card: {"cardNumber":"...","cvv":"...","expiry":"...","nameOnCard":"..."}`

### Console Output
Real-time logging in server console:
```
[STOLEN DATA] login: { email: 'user@example.com', password: 'password123' }
[STOLEN DATA] card: { cardNumber: '1234 5678 9012 3456', cvv: '123', expiry: '12/25', nameOnCard: 'John Doe' }
```

## 🛡️ Security Features (Demo)

### Fake Security Indicators
- **SSL Badge**: "Secure Payment" indicators
- **Encryption Claims**: "Industry-standard SSL encryption"
- **Trust Signals**: Lock icons and security messaging

### Realistic Flow
- **Authentication**: Always succeeds (no real validation)
- **Payment Processing**: Simulated processing time
- **Order Confirmation**: Fake order numbers and tracking

## 🎓 Educational Use Cases

### Cybersecurity Training
1. **Phishing Awareness**: Show how legitimate-looking sites can steal data
2. **Social Engineering**: Demonstrate trust manipulation techniques
3. **Data Protection**: Highlight what information attackers seek

### Red Team Exercises
1. **Penetration Testing**: Simulate phishing campaigns
2. **Security Assessments**: Test organizational awareness
3. **Incident Response**: Practice detection and response

## ⚡ Performance

### Optimizations
- **Code Splitting**: React Router lazy loading
- **Image Optimization**: Placeholder images for demo
- **Bundle Size**: Minimal dependencies
- **Caching**: Static asset optimization

### Build Process
```bash
# Development build
npm run dev:client

# Production build
npm run build

# Start production server
npm start
```

## 🔍 Monitoring

### Server Logs
- **Access Logs**: Request tracking
- **Error Logs**: Exception handling
- **Data Logs**: Captured information

### File Monitoring
- **logins.txt**: Credential storage
- **cards.txt**: Payment data storage
- **Console**: Real-time data capture

## 🚨 Legal Notice

This software is provided for **educational and authorized security testing purposes only**. Users are responsible for:

- **Compliance**: Following local laws and regulations
- **Authorization**: Only testing systems you own or have permission to test
- **Ethics**: Using responsibly and ethically
- **Liability**: Understanding that misuse may have legal consequences

## 📞 Support

For questions about this demo:
- **Educational Use**: Contact your cybersecurity instructor
- **Technical Issues**: Check the console for error messages
- **Legal Questions**: Consult with legal professionals

---

**Remember**: This is a demonstration tool. Use responsibly and ethically for cybersecurity education only. 