#!/usr/bin/env sh

# 上面这行代码在 windows 系统没用

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'qifandao.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# https://github.com/fanfafafanfan/blog.git  这里替换成你自己的地址
git push -f https://github.com/fanfafafanfan/fanfafafanfan.github.io.git master

cd -

rm -rf .vuepress/dist