/* ═══════════════════════════════════════════════════
   WealthWize — Shared Application Logic
   ═══════════════════════════════════════════════════ */

const COLORS = { gold: '#D4AF37', goldLight: '#F9E79F', emerald: '#10B981', red: '#EF4444', bg: '#05100B' };

const stockMaster = [
    { symbol: 'NVDA', name: 'Nvidia Corp', ltp: 898.94, change: 12.4, sector: 'Tech', pe: 64.2, mktCap: '2.2T', vol: '42.3M', high52: 974.00, low52: 262.20, rsi: 68 },
    { symbol: 'MSFT', name: 'Microsoft', ltp: 420.17, change: 4.5, sector: 'Tech', pe: 36.8, mktCap: '3.1T', vol: '22.1M', high52: 430.82, low52: 283.33, rsi: 55 },
    { symbol: 'BTC', name: 'Bitcoin', ltp: 64204.50, change: 2100.2, sector: 'Crypto', pe: 0, mktCap: '1.3T', vol: '28.5B', high52: 73750, low52: 25000, rsi: 48 },
    { symbol: 'AAPL', name: 'Apple Inc', ltp: 182.41, change: -2.1, sector: 'Tech', pe: 28.5, mktCap: '2.8T', vol: '55.2M', high52: 199.62, low52: 165.67, rsi: 41 },
    { symbol: 'TSLA', name: 'Tesla Motors', ltp: 174.12, change: -5.4, sector: 'Auto', pe: 42.1, mktCap: '554B', vol: '98.4M', high52: 299.29, low52: 152.37, rsi: 35 },
    { symbol: 'RELIANCE', name: 'Reliance Ind', ltp: 2980.45, change: 15.2, sector: 'Energy', pe: 28.9, mktCap: '20.1T₹', vol: '8.2M', high52: 3024.90, low52: 2220.30, rsi: 62 },
    { symbol: 'ETH', name: 'Ethereum', ltp: 3452.12, change: 85.4, sector: 'Crypto', pe: 0, mktCap: '415B', vol: '14.2B', high52: 4093, low52: 1520, rsi: 52 },
    { symbol: 'AMZN', name: 'Amazon', ltp: 178.15, change: 3.2, sector: 'Retail', pe: 52.3, mktCap: '1.9T', vol: '48.7M', high52: 180.14, low52: 101.15, rsi: 65 },
    { symbol: 'GOOGL', name: 'Alphabet', ltp: 154.22, change: 0.8, sector: 'Tech', pe: 24.6, mktCap: '1.9T', vol: '25.1M', high52: 155.20, low52: 102.63, rsi: 58 },
    { symbol: 'META', name: 'Meta Platforms', ltp: 485.58, change: 9.6, sector: 'Tech', pe: 33.1, mktCap: '1.2T', vol: '18.9M', high52: 502.30, low52: 207.13, rsi: 72 },
    { symbol: 'JPM', name: 'JPMorgan', ltp: 198.45, change: -1.2, sector: 'Finance', pe: 11.8, mktCap: '572B', vol: '10.3M', high52: 200.30, low52: 135.12, rsi: 49 },
    { symbol: 'XOM', name: 'Exxon Mobil', ltp: 121.45, change: -0.5, sector: 'Energy', pe: 13.5, mktCap: '512B', vol: '15.6M', high52: 123.75, low52: 95.77, rsi: 51 },
    { symbol: 'V', name: 'Visa Inc', ltp: 278.92, change: 3.8, sector: 'Finance', pe: 30.2, mktCap: '575B', vol: '7.8M', high52: 290.96, low52: 220.15, rsi: 59 },
    { symbol: 'WMT', name: 'Walmart', ltp: 165.30, change: 1.4, sector: 'Retail', pe: 27.4, mktCap: '445B', vol: '9.1M', high52: 170.20, low52: 145.30, rsi: 61 },
    { symbol: 'SOL', name: 'Solana', ltp: 142.85, change: 6.3, sector: 'Crypto', pe: 0, mktCap: '63B', vol: '3.2B', high52: 210.12, low52: 18.50, rsi: 44 },
    { symbol: 'NFLX', name: 'Netflix', ltp: 628.40, change: 11.2, sector: 'Tech', pe: 44.7, mktCap: '272B', vol: '6.5M', high52: 639.00, low52: 315.62, rsi: 69 },
];

const defaultPortfolio = [
    { symbol: 'NVDA', qty: 42, avgCost: 450.20, buyDate: '2024-03-15' },
    { symbol: 'MSFT', qty: 120, avgCost: 380.15, buyDate: '2024-01-22' },
    { symbol: 'BTC', qty: 0.85, avgCost: 42000.00, buyDate: '2023-11-10' },
];

const defaultWatchlist = ['AAPL', 'TSLA', 'ETH', 'GOOGL', 'META', 'SOL'];

const defaultTransactions = [
    { type: 'buy', symbol: 'NVDA', qty: 42, price: 450.20, date: '2024-03-15', total: 18908.40 },
    { type: 'buy', symbol: 'MSFT', qty: 120, price: 380.15, date: '2024-01-22', total: 45618.00 },
    { type: 'buy', symbol: 'BTC', qty: 0.85, price: 42000, date: '2023-11-10', total: 35700.00 },
    { type: 'sell', symbol: 'AAPL', qty: 50, price: 188.50, date: '2024-02-28', total: 9425.00 },
    { type: 'buy', symbol: 'ETH', qty: 2.5, price: 2800.00, date: '2024-04-05', total: 7000.00 },
    { type: 'dividend', symbol: 'MSFT', qty: 0, price: 0.75, date: '2024-06-15', total: 90.00 },
];

/* ═══ State Management ═══ */
let state = {
    user: { name: 'Felix Vance', seed: 'Felix' },
    portfolio: [...defaultPortfolio],
    watchlist: [...defaultWatchlist],
    transactions: [...defaultTransactions],
    alerts: [
        { symbol: 'NVDA', condition: 'above', price: 950, active: true },
        { symbol: 'BTC', condition: 'below', price: 60000, active: true },
    ],
    goals: [
        { name: 'Retirement Fund', target: 500000, current: 142800, color: COLORS.gold },
        { name: 'Emergency Fund', target: 50000, current: 38500, color: COLORS.emerald },
        { name: 'Vacation', target: 8000, current: 5200, color: '#818CF8' },
    ],
};

function saveState() { localStorage.setItem('wealthwize_v2', JSON.stringify(state)); }

function loadState() {
    const saved = localStorage.getItem('wealthwize_v2');
    if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
    }
}

/* ═══ Helpers ═══ */
function getStockMeta(symbol) {
    return stockMaster.find(s => s.symbol === symbol) || { name: 'Unknown', ltp: 0, change: 0, sector: 'N/A' };
}

function formatCurrency(num) {
    return '$' + Number(num).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatCompact(num) {
    if (num >= 1e9) return '$' + (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return '$' + (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return '$' + (num / 1e3).toFixed(1) + 'K';
    return formatCurrency(num);
}

function getPortfolioValue() {
    return state.portfolio.reduce((sum, item) => {
        const meta = getStockMeta(item.symbol);
        return sum + (item.qty * meta.ltp);
    }, 0);
}

function getPortfolioInvested() {
    return state.portfolio.reduce((sum, item) => sum + (item.qty * item.avgCost), 0);
}

function getPortfolioReturns() {
    return getPortfolioValue() - getPortfolioInvested();
}

function getSectorAllocation() {
    const sectors = {};
    const total = getPortfolioValue();
    state.portfolio.forEach(item => {
        const meta = getStockMeta(item.symbol);
        const val = item.qty * meta.ltp;
        sectors[meta.sector] = (sectors[meta.sector] || 0) + val;
    });
    return Object.entries(sectors).map(([name, val]) => ({
        name, value: val, pct: total > 0 ? ((val / total) * 100).toFixed(1) : 0,
    })).sort((a, b) => b.value - a.value);
}

function getTopPerformer() {
    let best = null, bestPct = -Infinity;
    state.portfolio.forEach(item => {
        const meta = getStockMeta(item.symbol);
        const pct = ((meta.ltp - item.avgCost) / item.avgCost) * 100;
        if (pct > bestPct) { bestPct = pct; best = { ...item, ...meta, returnPct: pct }; }
    });
    return best;
}

function getMarketMovers() {
    const sorted = [...stockMaster].sort((a, b) => (b.change / b.ltp) - (a.change / a.ltp));
    return { gainers: sorted.slice(0, 3), losers: sorted.slice(-3).reverse() };
}

/* ═══ Sidebar Navigation ═══ */
function initSidebar() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }

    // Highlight active nav
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Handle extensionless URLs by appending .html for matching
    if (!currentPage.endsWith('.html') && currentPage !== '') {
        currentPage += '.html';
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        let href = link.getAttribute('href');
        // Ensure relative prefix is ignored for comparison if used
        if (href.startsWith('./')) href = href.substring(2);
        
        if (href === currentPage || (currentPage === 'index.html' && (href === 'index.html' || href === './index.html' || href === '/'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Profile
    const profileImg = document.getElementById('sidebar-profile-img');
    const profileName = document.getElementById('sidebar-profile-name');
    if (profileImg) profileImg.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${state.user.seed}`;
    if (profileName) profileName.textContent = state.user.name;
}

/* ═══ Modal System ═══ */
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-box').style.transform = 'scale(1)';
    });
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.style.opacity = '0';
    const box = modal.querySelector('.modal-box');
    if (box) box.style.transform = 'scale(0.95)';
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

/* ═══ Live Price Updates ═══ */
function startLiveUpdates() {
    setInterval(() => {
        const indices = Array.from({ length: 4 }, () => Math.floor(Math.random() * stockMaster.length));
        indices.forEach(idx => {
            const stock = stockMaster[idx];
            const fluctuation = (Math.random() - 0.5) * 0.5;
            stock.ltp *= (1 + (fluctuation / 100));
            stock.change += (Math.random() - 0.5) * 0.4;

            const el = document.getElementById(`ltp-${stock.symbol}`);
            if (el) {
                el.textContent = formatCurrency(stock.ltp);
                el.classList.add(fluctuation >= 0 ? 'price-up' : 'price-down');
                setTimeout(() => el.classList.remove('price-up', 'price-down'), 600);
            }
        });
    }, 3500);
}

/* ═══ News Ticker ═══ */
function animateNewsTicker() {
    const container = document.getElementById('news-ticker');
    if (!container) return;
    let pos = container.parentElement.offsetWidth;
    const speed = 0.6;
    function tick() {
        pos -= speed;
        if (pos < -container.scrollWidth) pos = container.parentElement.offsetWidth;
        container.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(tick);
    }
    tick();
}

/* ═══ Entry Animations ═══ */
function animateCards() {
    document.querySelectorAll('.bento-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.08}s`;
        card.classList.add('animate-in');
    });
}

/* ═══ Global Search & Asset Modal ═══ */
function initGlobalSearch() {
    const input = document.getElementById('global-search');
    const box = document.getElementById('global-search-suggestions');
    if (!input || !box) return;

    input.addEventListener('input', e => {
        const v = e.target.value.toUpperCase();
        box.innerHTML = '';
        if (!v) { box.classList.remove('show'); return; }
        const f = stockMaster.filter(s => s.symbol.includes(v) || s.name.toUpperCase().includes(v));
        if (f.length) {
            box.classList.add('show');
            f.forEach(s => {
                const d = document.createElement('div'); d.className = 'suggestion-item';
                d.innerHTML = `<span><strong>${s.symbol}</strong> — ${s.name}</span><span style="font-size:11px;color:var(--text-muted);">${formatCurrency(s.ltp)}</span>`;
                d.onclick = () => { 
                    box.classList.remove('show'); 
                    input.value = '';
                    openAssetModal(s.symbol); 
                };
                box.appendChild(d);
            });
        } else {
            box.classList.remove('show');
        }
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.top-bar-search')) box.classList.remove('show');
    });
}

function openAssetModal(symbol) {
    window.location.href = './stock-detail.html?symbol=' + symbol;
}

window.toggleWatchlistFromModal = function(sym) {
    if (state.watchlist.includes(sym)) {
        state.watchlist = state.watchlist.filter(s => s !== sym);
    } else {
        state.watchlist.push(sym);
    }
    saveState();
    if (typeof build === 'function') build();
    openAssetModal(sym);
};

/* ═══ Boot ═══ */
function initApp() {
    loadState();
    initSidebar();
    animateNewsTicker();
    startLiveUpdates();
    initGlobalSearch();
    animateCards();
}
