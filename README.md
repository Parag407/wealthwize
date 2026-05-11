# WealthWize 📈

WealthWize is a premium, high-fidelity simulated portfolio management and stock market analysis dashboard. Built to rival professional institutional tools, it offers users a comprehensive suite of features to track holdings, analyze technical indicators, and simulate trades in a sleek, highly responsive environment.

---

## 🛠️ Built With (Tech Stack)

This project was built entirely without heavy frontend frameworks to ensure raw performance, ease of customization, and deep understanding of DOM manipulation:

- **HTML5**: Semantic structure.
- **Vanilla CSS3**: Custom-built styling utilizing modern variables, CSS Grid, and Flexbox for layout management. Tailwind was specifically avoided to maintain strict control over the custom design system.
- **Vanilla JavaScript (ES6+)**: Handles all state management, routing, event listening, and dynamic DOM injection.
- **Chart.js**: Powers all the dynamic, interactive data visualizations (Line charts, Doughnuts, Bar charts).
- **FontAwesome**: Provides crisp, scalable vector icons.
- **Browser LocalStorage**: Acts as the database, ensuring all simulated trades, goals, and watchlists persist across browser sessions.

---

## 📱 Sections & Architecture

The platform is divided into **8 Core Sections**, all tied together by a modular layout shell (Sidebar & Topbar):

1. **Dashboard (`index.html`)**: The command center. Displays quick KPI stats, a portfolio growth chart, top market performers, and a summarized holdings table.
2. **Portfolio (`portfolio.html`)**: Deep dive into current holdings. Includes unrealized P&L breakdowns, asset allocation doughnut charts, and a comparison against the S&P 500 benchmark.
3. **Watchlist (`watchlist.html`)**: Track potential investments. Features live-simulated mini-charts for each watched asset and sector filtering.
4. **Analytics (`analytics.html`)**: Advanced portfolio insights. Features a "Risk Meter", sector performance bars, P&L attribution, and a **LIVE Advanced Market Scanner** highlighting the market's Top Gainers and Losers.
5. **Transactions (`transactions.html`)**: A detailed chronological ledger of every buy, sell, and simulated dividend event.
6. **Price Alerts (`alerts.html`)**: Allows users to set target price conditions (above/below) for specific assets.
7. **Asset Details (`stock-detail.html`)**: A dedicated, full-screen immersive view for any individual asset. Features advanced technical metrics, simulated 1W/1M/6M/1Y interactive charts, and direct Buy/Sell trading controls.
8. **Settings (`settings.html`)**: User profile management, financial goal tracking, display preferences, and Data Export/Import functionalities.

---

## ✨ Key Features

- **Simulated Trading Engine**: Buy and sell shares of mock assets directly from the Asset Details page. Your portfolio balances, average costs, and transaction history update immediately.
- **Advanced Market Scanner**: Automatically ranks assets to find the market's biggest movers in real-time.
- **Dynamic Interactive Charting**: Uses Chart.js with custom gradients to render smooth price action histories across customizable timeframes.
- **Global Search Engine**: A functional search bar in the top navigation allows for instant asset lookup and dropdown auto-completion.
- **Technical Indicators**: Evaluates assets based on 52-Week Highs/Lows, Volume, Market Cap, and RSI (Relative Strength Index).
- **Goal Tracking**: Set custom financial milestones with visual progress bars.
- **Data Portability**: Users can export their entire portfolio state to a JSON file and import it later, or download a CSV of their holdings.

---

## 🎨 Design Benefits & UX

- **Bento Grid Layout**: The UI strictly adheres to a modern "Bento Box" grid system. This ensures information is neatly compartmentalized, making dense financial data easy to scan and digest.
- **Premium Aesthetics**: Utilizes a highly curated Dark/Gold theme (`#05100B` background with `#D4AF37` gold accents) and subtle **Glassmorphism** (translucent frosted glass backgrounds) to deliver a luxurious, "wealth-focused" user experience.
- **Fully Responsive**: The CSS Grid architecture automatically reflows from a complex 12-column desktop layout into a streamlined vertical stack for mobile devices, ensuring zero horizontal scrolling or broken elements.
- **Micro-Interactions**: Features smooth CSS transitions, hover states, and dynamic tag coloring (Green/Red for positive/negative changes) to make the interface feel alive and reactive.
