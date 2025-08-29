/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  // 从配置中获取主题色，如果没有配置则使用默认值 #928CEE
  const themeColor = siteConfig('HEXO_THEME_COLOR', 'FAF9EE', CONFIG)

  return (
    <style jsx global>{`
      :root {
        --theme-color: ${themeColor};
        --link-color: #A2AF9B;
        --link-hover-color: #DCCFC0;
      }

      // 底色
      #theme-hexo body {
        background-color: #FAF9EE; /* 改为您想要的背景色 */
      }
      .dark #theme-hexo body {
        background-color: black;
      }

      /*  菜单下划线动画 */
      #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(
          var(--link-color),
          var(--link-color)
        );
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }

      #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: var(--link-hover-color) !important; /* 改为悬停颜色 */
      }

      /* 文章列表中标题行悬浮时的文字颜色 */
      #theme-hexo h2:hover .menu-link {
        color: var(--link-hover-color) !important;
      }
      .dark #theme-hexo h2:hover .menu-link {
        color: var(--link-hover-color) !important;
      }

      /* 下拉菜单悬浮背景色 */
      #theme-hexo li[class*='hover:bg-indigo-500']:hover {
        background-color: var(--link-color) !important;
      }

      /* tag标签悬浮背景色 */
      #theme-hexo a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--link-color) !important;
      }

      /* 社交按钮悬浮颜色 */
      #theme-hexo i[class*='hover:text-indigo-600']:hover {
        color: var(--link-hover-color) !important;
      }
      .dark #theme-hexo i[class*='dark:hover:text-indigo-400']:hover {
        color: var(--link-hover-color) !important;
      }

      /* MenuGroup 悬浮颜色 */
      #theme-hexo #nav div[class*='hover:text-indigo-600']:hover {
        color: var(--link-hover-color) !important;
      }
      .dark #theme-hexo #nav div[class*='dark:hover:text-indigo-400']:hover {
        color: var(--link-hover-color) !important;
      }

      /* 最新发布文章悬浮颜色 */
      #theme-hexo div[class*='hover:text-indigo-600']:hover,
      #theme-hexo div[class*='hover:text-indigo-400']:hover {
        color: var(--link-hover-color) !important;
      }

      /* 分页组件颜色 */
      #theme-hexo .text-indigo-400 {
        color: var(--link-color) !important;
      }
      #theme-hexo .border-indigo-400 {
        border-color: var(--link-color) !important;
      }
      #theme-hexo a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--link-color) !important;
        color: white !important;
      }
      /* 移动设备下，搜索组件中选中分类的高亮背景色 */
      #theme-hexo div[class*='hover:bg-indigo-400']:hover {
        background-color: var(--link-color) !important;
      }
      #theme-hexo .hover\:bg-indigo-400:hover {
        background-color: var(--link-color) !important;
      }
      #theme-hexo .bg-indigo-400 {
        background-color: var(--link-color) !important;
      }
      #theme-hexo a[class*='hover:bg-indigo-600']:hover {
        background-color: var(--link-color) !important;
        color: white !important;
      }

      /* 右下角悬浮按钮背景色 */
      #theme-hexo .bg-indigo-500 {
        background-color: var(--link-color) !important;
      }
      .dark #theme-hexo .dark\:bg-indigo-500 {
        background-color: var(--link-color) !important;
      }

      // 移动设备菜单栏选中背景色
      #theme-hexo div[class*='hover:bg-indigo-500']:hover {
        background-color: var(--link-color) !important;
      }

      /* 文章浏览进度条颜色 */
      #theme-hexo .bg-indigo-600 {
        background-color: var(--link-color) !important;
      }
      /* 当前浏览位置标题高亮颜色 */
      #theme-hexo .border-indigo-800 {
        border-color: var(--link-color) !important;
      }
      #theme-hexo .text-indigo-800 {
        color: var(--link-color) !important;
      }
      .dark #theme-hexo .dark\:text-indigo-400 {
        color: var(--link-color) !important;
      }
      .dark #theme-hexo .dark\:border-indigo-400 {
        border-color: var(--link-color) !important;
      }
      .dark #theme-hexo .dark\:border-white {
        border-color: var(--link-color) !important;
      }
      /* 目录项悬浮时的字体颜色 */
      #theme-hexo a[class*='hover:text-indigo-800']:hover {
        color: var(--link-hover-color) !important;
      }
      /* 深色模式下目录项的默认文字颜色和边框线颜色 */
      .dark #theme-hexo .catalog-item {
        color: white !important;
        border-color: white !important;
      }
      .dark #theme-hexo .catalog-item:hover {
        color: var(--link-hover-color) !important;
      }
      /* 深色模式下当前高亮标题的边框线颜色 */
      .dark #theme-hexo .catalog-item.font-bold {
        border-color: var(--link-color) !important;
      }

      /* 文章底部版权声明组件左侧边框线颜色 */
      #theme-hexo .border-indigo-500 {
        border-color: var(--link-color) !important;
      }

      /* 归档页面文章列表项悬浮时左侧边框线颜色 */
      #theme-hexo li[class*='hover:border-indigo-500']:hover {
        border-color: var(--link-color) !important;
      }

      /* 自定义右键菜单悬浮高亮颜色 */
      #theme-hexo .hover\:bg-blue-600:hover {
        background-color: var(--link-color) !important;
      }
      .dark #theme-hexo li[class*='dark:hover:border-indigo-300']:hover {
        border-color: var(--link-color) !important;
      }
      /* 深色模式下，归档页面文章列表项默认状态左侧边框线颜色 */
      .dark #theme-hexo li[class*='dark:border-indigo-400'] {
        border-color: var(--link-color) !important;
      }
      /* 深色模式下，归档页面文章标题悬浮时的文字颜色 */
      .dark #theme-hexo a[class*='dark:hover:text-indigo-300']:hover {
        color: var(--link-hover-color) !important;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-hexo .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      /* Custem */
      .tk-footer {
        opacity: 0;
      }

      // 选中字体颜色
      ::selection {
        background: color-mix(in srgb, var(--link-color) 30%, transparent);
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--link-color);
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: var(--link-color) transparent;
      }

      /* 添加全局链接颜色 */
      #theme-hexo a {
        color: var(--link-color);
        transition: color 0.2s ease;
      }

      #theme-hexo a:hover {
        color: var(--link-hover-color);
      }
    `}</style>
  )
}

export { Style }
