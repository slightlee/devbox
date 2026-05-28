/* ============================================================
   DevBox - Common JavaScript
   ============================================================ */

// GitHub URL (single source of truth)
const GITHUB_URL = 'https://github.com/slightlee/devbox';

// Initialize theme immediately to prevent flash
(function initTheme() {
  const stored = localStorage.getItem('devbox-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

// Tool definitions
const TOOLS = [
  {
    id: 'base64',
    name: 'Base64 编解码',
    desc: '文本与 Base64 互相转换，支持 UTF-8 中文编码',
    title: 'Base64 编解码 - DevBox',
    description: '在线 Base64 编解码工具，支持 UTF-8 中文编码，文本与 Base64 互相转换。',
    iconKey: 'lock',
    iconClass: 'icon-encode',
    category: '编码转换',
    path: 'tools/base64.html'
  },
  {
    id: 'image-base64',
    name: '图片 Base64',
    desc: '图片转换为 Base64 编码，或从 Base64 还原图片',
    title: '图片 Base64 - DevBox',
    description: '在线图片 Base64 转换工具，图片转 Base64 编码或从 Base64 还原图片。',
    iconKey: 'image',
    iconClass: 'icon-encode',
    category: '编码转换',
    path: 'tools/image-base64.html'
  },
  {
    id: 'json',
    name: 'JSON 工具',
    desc: 'JSON 格式化、压缩、语法校验，支持树形结构查看',
    title: 'JSON 工具 - DevBox',
    description: '在线 JSON 工具，支持格式化、压缩、语法校验，快速处理 JSON 数据。',
    iconKey: 'brackets',
    iconClass: 'icon-data',
    category: '数据处理',
    path: 'tools/json.html'
  },
  {
    id: 'timestamp',
    name: '时间戳转换',
    desc: 'Unix 时间戳与日期时间互相转换，实时显示当前时间戳',
    title: '时间戳转换 - DevBox',
    description: '在线时间戳转换工具，Unix 时间戳与日期时间互相转换。',
    iconKey: 'clock',
    iconClass: 'icon-time',
    category: '日期时间',
    path: 'tools/timestamp.html'
  },
  {
    id: 'jwt',
    name: 'JWT 解析',
    desc: '解析 JWT Token 的 Header、Payload 和 Signature',
    title: 'JWT 解析 - DevBox',
    description: '在线 JWT Token 解析工具，解码 Header、Payload 和 Signature。',
    iconKey: 'key',
    iconClass: 'icon-security',
    category: '安全工具',
    path: 'tools/jwt.html'
  },
  {
    id: 'url',
    name: 'URL 编解码',
    desc: 'URL 编码与解码转换，处理特殊字符和中文参数',
    title: 'URL 编解码 - DevBox',
    description: '在线 URL 编解码工具，URL 编码与解码互相转换。',
    iconKey: 'link',
    iconClass: 'icon-encode',
    category: '编码转换',
    path: 'tools/url.html'
  },
  {
    id: 'color',
    name: '颜色转换',
    desc: 'HEX、RGB、HSL 颜色格式互相转换，实时预览颜色',
    title: '颜色转换 - DevBox',
    description: '在线颜色转换工具，HEX、RGB、HSL 格式互相转换，支持颜色预览。',
    iconKey: 'palette',
    iconClass: 'icon-color',
    category: '开发辅助',
    path: 'tools/color.html'
  },
  {
    id: 'hash',
    name: '哈希生成',
    desc: '生成 MD5、SHA-1、SHA-256、SHA-512 哈希值',
    title: '哈希生成 - DevBox',
    description: '在线哈希计算工具，支持 MD5、SHA-1、SHA-256、SHA-512 等算法。',
    iconKey: 'hash',
    iconClass: 'icon-hash',
    category: '安全工具',
    path: 'tools/hash.html'
  },
  {
    id: 'uuid',
    name: 'UUID 生成',
    desc: '一键生成 UUID v4，支持批量生成和自定义数量',
    title: 'UUID 生成 - DevBox',
    description: '在线 UUID 生成工具，一键生成 UUID v4，支持批量生成。',
    iconKey: 'fingerprint',
    iconClass: 'icon-dev',
    category: '开发辅助',
    path: 'tools/uuid.html'
  },
  {
    id: 'regex',
    name: '正则测试',
    desc: '正则表达式在线测试，高亮显示匹配结果和捕获组',
    title: '正则测试 - DevBox',
    description: '在线正则表达式测试工具，实时匹配、高亮显示结果。',
    iconKey: 'scan',
    iconClass: 'icon-dev',
    category: '开发辅助',
    path: 'tools/regex.html'
  },
  {
    id: 'char-count',
    name: '字符统计',
    desc: '统计文本的字符数、词数、行数和字节数',
    title: '字符统计 - DevBox',
    description: '在线字符统计工具，实时统计文本的字符数、词数、行数、字节数等信息。',
    iconKey: 'text',
    iconClass: 'icon-text',
    category: '文本处理',
    path: 'tools/char-count.html'
  },
  {
    id: 'image-crop',
    name: '图片裁剪',
    desc: '可视化裁剪图片，支持自由框选和常用比例',
    title: '图片裁剪 - DevBox',
    description: '在线图片裁剪工具，可视化拖拽框选，支持自由裁剪和常用比例。',
    iconKey: 'scissors',
    iconClass: 'icon-dev',
    category: '开发辅助',
    path: 'tools/image-crop.html'
  },
  {
    id: 'image-compress',
    name: '图片压缩',
    desc: '压缩图片大小，支持调整质量、缩放尺寸、转换格式',
    title: '图片压缩 - DevBox',
    description: '在线图片压缩工具，支持质量压缩、尺寸缩放、格式转换，实时预览压缩效果。',
    iconKey: 'image',
    iconClass: 'icon-encode',
    category: '开发辅助',
    path: 'tools/image-compress.html'
  },
  {
    id: 'image-bg-remove',
    name: '图片去背景',
    desc: '智能识别并去除图片背景，生成透明背景 PNG',
    title: '图片去背景 - DevBox',
    description: '在线图片去背景工具，智能识别并去除图片背景，生成透明背景 PNG 图片。',
    iconKey: 'layers',
    iconClass: 'icon-dev',
    category: '开发辅助',
    path: 'tools/image-bg-remove.html'
  }
];

const CATEGORIES = ['全部', ...new Set(TOOLS.map(t => t.category))];

// Get icon SVG from icons.js
function getIcon(key) {
  return typeof ICONS !== 'undefined' ? (ICONS[key] || '') : '';
}

// Escape HTML special characters
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Get base path - always use root-relative to avoid path duplication on Cloudflare Pages
function getBasePath() {
  return '/';
}

// Render navbar
function renderNavbar() {
  const basePath = getBasePath();
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', '主导航');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  nav.innerHTML = `
    <div class="navbar-inner">
      <a href="${basePath}index.html" class="navbar-logo" aria-label="DevBox 首页">
        <span class="logo-icon">${getIcon('logo')}</span>
        DevBox
      </a>
      <div class="navbar-actions">
        <button class="theme-toggle" id="themeToggle" title="切换主题" aria-label="${currentTheme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}">
          ${currentTheme === 'dark' ? getIcon('sun') : getIcon('moon')}
        </button>
        <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub 仓库">
          ${getIcon('github')}
        </a>
      </div>
    </div>
  `;
  document.body.prepend(nav);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

// Render sidebar on tool pages
function renderSidebar(currentToolId) {
  const basePath = getBasePath();
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';
  sidebar.setAttribute('role', 'navigation');
  sidebar.setAttribute('aria-label', '工具导航');

  // Build link list
  let linksHtml = '';
  const grouped = {};
  TOOLS.forEach(t => {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  });

  for (const [cat, tools] of Object.entries(grouped)) {
    linksHtml += `<div class="sidebar-section">
      <div class="sidebar-label">${cat}</div>`;
    tools.forEach(t => {
      const active = t.id === currentToolId ? ' active' : '';
      const ariaCurrent = t.id === currentToolId ? ' aria-current="page"' : '';
      linksHtml += `<a href="${basePath}${t.path}" class="sidebar-link${active}"${ariaCurrent}>
        <span class="link-icon svg-icon">${getIcon(t.iconKey)}</span>
        ${t.name}
      </a>`;
    });
    linksHtml += '</div>';
  }

  const chevronSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;

  sidebar.innerHTML = `
    <div class="sidebar-inner">${linksHtml}</div>
    <button class="sidebar-collapse-btn" id="sidebarCollapseBtn" title="折叠侧边栏" aria-label="折叠侧边栏" aria-expanded="true">
      ${chevronSvg}
    </button>
  `;

  document.body.appendChild(sidebar);

  // Collapse toggle (all screen sizes)
  const collapseBtn = document.getElementById('sidebarCollapseBtn');
  collapseBtn.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed');
    collapseBtn.setAttribute('aria-expanded', String(!isCollapsed));
    collapseBtn.setAttribute('aria-label', isCollapsed ? '展开侧边栏' : '折叠侧边栏');
  });
}

// Toast notification
function showToast(message, type = 'success', duration = 2500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icons = { success: getIcon('check'), error: getIcon('x'), info: getIcon('info') };
  const iconSpan = document.createElement('span');
  iconSpan.className = 'svg-icon';
  iconSpan.innerHTML = icons[type] || '';
  toast.appendChild(iconSpan);
  toast.appendChild(document.createTextNode(' ' + message));
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Copy to clipboard
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('已复制到剪贴板');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast('已复制到剪贴板');
  }
}

// Render footer
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.setAttribute('role', 'contentinfo');
  footer.innerHTML = `
    <div class="container">
      <p>DevBox &mdash; 开发者常用工具集合</p>
    </div>
  `;
  document.body.appendChild(footer);
}

// Debounce
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Toggle theme
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('devbox-theme', next);
  updateThemeToggleIcon(next);
}

function updateThemeToggleIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? getIcon('sun') : getIcon('moon');
    btn.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
  }
}

// Init tool page (common setup)
function initToolPage(toolId) {
  // Set page title and meta description from TOOLS array
  const tool = TOOLS.find(t => t.id === toolId);
  if (tool) {
    document.title = tool.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = tool.description;
  }

  // Inject icons declaratively via data-icon attribute
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = getIcon(el.dataset.icon);
  });

  renderNavbar();
  renderSidebar(toolId);
  renderFooter();
}

// Reusable mode toggle for encode/decode style buttons
function setupModeToggle(btnEncodeId, btnDecodeId, modes, onChange) {
  const btnE = document.getElementById(btnEncodeId);
  const btnD = document.getElementById(btnDecodeId);
  function setMode(m) {
    btnE.classList.toggle('active', m === modes[0]);
    btnD.classList.toggle('active', m === modes[1]);
    btnE.setAttribute('aria-pressed', String(m === modes[0]));
    btnD.setAttribute('aria-pressed', String(m === modes[1]));
    if (onChange) onChange(m);
  }
  btnE.addEventListener('click', () => setMode(modes[0]));
  btnD.addEventListener('click', () => setMode(modes[1]));
  return setMode;
}

// Reusable swap I/O
function swapTextareas(inputId, outputId, onSwap) {
  const inp = document.getElementById(inputId);
  const out = document.getElementById(outputId);
  [inp.value, out.value] = [out.value, inp.value];
  if (onSwap) onSwap();
}

// Reusable copy output
function copyOutputText(outputId) {
  const v = document.getElementById(outputId).value;
  if (v) copyText(v);
  else showToast('没有内容可复制', 'info');
}

// Reusable clear
function clearTextareas(...ids) {
  ids.forEach(id => { document.getElementById(id).value = ''; });
}
