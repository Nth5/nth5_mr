:root {
  --theme-color: #A6B0E0; /* 中蓝色，主要主题色 */
  --theme-accent: #7D7BB8; /* 深蓝紫色，用于强调 */
  --bg-main: #FFF5E9; /* 浅米色，主背景 */
  --bg-card: #C9D1F0; /* 浅蓝色，卡片背景 */
}

#theme-hexo body {
  background-color: var(--bg-main);
}
.dark #theme-hexo body {
  background-color: #1a1a1a; /* 深色模式下保持深色 */
}

/* 卡片效果 */
#theme-hexo .post-card, 
#theme-hexo .card {
  background-color: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

/* 标签样式 */
#theme-hexo .tag {
  background-color: var(--theme-color);
  color: white;
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 0.85rem;
}

/* 悬浮、按钮、边框色保持 theme-color */
#theme-hexo a:hover,
#theme-hexo .menu-link:hover {
  color: var(--theme-accent) !important;
}
#theme-hexo .border-indigo-500 {
  border-color: var(--theme-color) !important;
}

/* 滚动条使用深蓝紫 */
::-webkit-scrollbar-thumb {
  background-color: var(--theme-accent);
}
