/* Generates the sidebar and top-bar HTML for every page.
   Call buildShell(pageId) where pageId matches the nav data-page. */

function getSidebarHTML() {
    return `
    <div id="sidebar-overlay" class="sidebar-overlay"></div>
    <aside id="sidebar" class="sidebar">
        <div class="sidebar-logo">
            <div class="sidebar-logo-icon"><i class="fas fa-chart-line"></i></div>
            <div>
                <h1>WEALTHWIZE</h1>
                <p>Portfolio Intelligence</p>
            </div>
        </div>

        <span class="nav-section-title">Main</span>
        <a href="./index.html" data-page="dashboard" class="nav-link"><i class="fas fa-th-large"></i> Dashboard</a>
        <a href="./portfolio.html" data-page="portfolio" class="nav-link"><i class="fas fa-briefcase"></i> Portfolio</a>
        <a href="./watchlist.html" data-page="watchlist" class="nav-link"><i class="fas fa-eye"></i> Watchlist <span class="nav-badge">6</span></a>
        <a href="./analytics.html" data-page="analytics" class="nav-link"><i class="fas fa-chart-pie"></i> Analytics</a>

        <span class="nav-section-title">Tools</span>
        <a href="./transactions.html" data-page="transactions" class="nav-link"><i class="fas fa-exchange-alt"></i> Transactions</a>
        <a href="./alerts.html" data-page="alerts" class="nav-link"><i class="fas fa-bell"></i> Alerts <span class="nav-badge">2</span></a>
        <a href="./settings.html" data-page="settings" class="nav-link"><i class="fas fa-cog"></i> Settings</a>

        <div class="sidebar-profile" onclick="openModal('profile-modal')">
            <img id="sidebar-profile-img" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar">
            <div class="sidebar-profile-info">
                <h4 id="sidebar-profile-name">Felix Vance</h4>
                <p>Elite Member</p>
            </div>
        </div>
    </aside>`;
}

function getTopBarHTML(title, subtitle) {
    return `
    <div class="top-bar">
        <div class="top-bar-left">
            <button id="mobile-menu-btn" class="mobile-menu-btn"><i class="fas fa-bars"></i></button>
            <div class="page-title">
                <h2>${title}</h2>
                <p>${subtitle}</p>
            </div>
        </div>
        <div class="top-bar-search" style="position:relative;">
            <i class="fas fa-search"></i>
            <input type="text" id="global-search" placeholder="Search markets, stocks, crypto..." autocomplete="off">
            <div id="global-search-suggestions" class="suggestions-dropdown custom-scrollbar" style="top:40px;left:0;right:0;max-height:350px;"></div>
        </div>
        <div class="top-bar-right">
            <div class="live-badge"><div class="live-dot"></div><span>MARKETS LIVE</span></div>
            <button class="top-bar-btn" onclick="openModal('profile-modal')"><i class="fas fa-user"></i></button>
        </div>
    </div>`;
}

function getFooterHTML() {
    return `
    <footer class="footer-ticker">
        <div class="ticker-label">MARKET NEWS</div>
        <div style="overflow:hidden;flex:1;">
            <div class="ticker-scroll" id="news-ticker">
                <span>• FED expected to maintain rates in upcoming meeting</span>
                <span>• Tech sector shows resilience amid global uncertainty</span>
                <span>• Gold hits new all-time high as safe-haven demand surges</span>
                <span>• Crude Oil prices stabilize after inventory reports</span>
                <span>• Nvidia earnings beat estimates by 22%</span>
                <span>• Bitcoin ETFs see record inflows this quarter</span>
            </div>
        </div>
    </footer>`;
}

function getProfileModalHTML() {
    return `
    <div id="profile-modal" class="modal-overlay" style="opacity:0;transition:opacity 0.3s">
        <div class="modal-box" style="transform:scale(0.95);transition:transform 0.3s">
            <div class="modal-header">
                <h3>User Profile</h3>
                <button class="modal-close" onclick="closeModal('profile-modal')"><i class="fas fa-times"></i></button>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:14px;margin-bottom:24px;">
                <div style="position:relative;">
                    <img id="profile-edit-img" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" style="width:80px;height:80px;border-radius:50%;border:2px solid rgba(212,175,55,0.3);background:rgba(16,185,129,0.2);">
                    <button onclick="generateRandomAvatar()" style="position:absolute;bottom:0;right:0;width:28px;height:28px;background:linear-gradient(135deg,#D4AF37,#F9E79F);border:2px solid var(--bg-card);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--forest-green);font-size:10px;"><i class="fas fa-sync-alt"></i></button>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Display Name</label>
                <input type="text" id="profile-name-input" class="form-input" value="Felix Vance">
            </div>
            <div style="background:var(--glass);border:1px solid var(--glass-border);border-radius:14px;padding:16px;margin-bottom:20px;">
                <div style="display:flex;justify-content:space-between;font-size:10px;font-weight:800;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;">
                    <span>Account Tier</span><span style="color:var(--gold);">Platinum</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:12px;font-weight:700;">Lifetime Performance</span>
                    <span style="font-size:18px;font-weight:800;color:var(--emerald);">+24.5%</span>
                </div>
            </div>
            <button onclick="saveProfile()" class="btn-gold" style="width:100%;justify-content:center;padding:14px;">SAVE CHANGES</button>
        </div>
    </div>`;
}

function generateRandomAvatar() {
    state.user.seed = Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/avataaars/svg?seed=${state.user.seed}`;
    document.getElementById('profile-edit-img').src = url;
    if (document.getElementById('sidebar-profile-img')) document.getElementById('sidebar-profile-img').src = url;
}

function saveProfile() {
    state.user.name = document.getElementById('profile-name-input').value || 'User';
    saveState();
    if (document.getElementById('sidebar-profile-name')) document.getElementById('sidebar-profile-name').textContent = state.user.name;
    closeModal('profile-modal');
}
