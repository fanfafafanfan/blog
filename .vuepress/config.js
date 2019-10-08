const Node = [
    '',
    '什么是node',
    '文件系统'
]
module.exports = {
    title: '笔记',
    description: '一个总结学习的存档文件',
    markdown: {
        toc: {
            includeLevel: [1, 2, 3, 4, 5, 6]
        },
        lineNumbers: true
    },
    themeConfig: {
        repo: 'fanfafafanfan/blog/',
        navbar: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            { text: '主页', link: '/' },
            { text: '导读', link: '/guide/' },
        ],
        lastUpdated: '更新于', // string | boolean
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: {   // 放到主题配置的选项中即可,/node/ 对应你 node 文件夹readme中的 permalink
            '/node/': Node
        }
    },
    plugins: [
        require('./plugins/myloader'),
        require('./plugins/myrouter'),
        'vuepress-plugin-viewer',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress', [
            'vuepress-plugin-comment',
            {
                choosen: "gitalk",
                options: {
                  id: "<%- frontmatter.commentid || frontmatter.permalink %>",
                  title: "「Comment」<%- frontmatter.title %>",
                  body:
                    "<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>",
                  clientID: "Iv1.24015de76b835d55",
                  clientSecret: "d08ab9cf24ebe2b2ca47f5cef6f47c2382ab5349",
                  repo: "blog",
                  owner: "fanfafafanfan",
                  admin: ["fanfafafanfan"],
                  distractionFreeMode: false
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ]
    ]
}