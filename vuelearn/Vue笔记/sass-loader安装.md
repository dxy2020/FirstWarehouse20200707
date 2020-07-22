# sass-loader安装

> 1.安装sass的依赖包

```undefined
npm install --save-dev sass-loader
```

（若出错，因为sass-loader版本过高导致，可以将其package.json中的版本改为7.3.1，然后再重新安装sass-loader包，若是还过高，则重装6.x,`cnpm i sass-loader@6.x --save-dev`）

> 2.//sass-loader依赖于node-sass,所以要安装node-sass

```shell
npm install --save-dev node-sass
```

<font color=red>推荐：(成功安装)</font>

```shell
#第一步
cnpm install --save-dev node-sass
#第二步
cnpm i sass-loader@6.x --save-dev
```

> 3.在build文件夹下的webpack.base.conf.js的rules里面添加配置

```css
{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}
```

> 注意：下面这个 加不加视情况定（css的）

```css
 {
    test:/\.css$/,
    loader:'style-loader'
 },
 {
    test:/\.css$/,
    loader:'css-loader'
 },
```

> 4.在APP.vue中修改style标签

```xml
<style lang="scss">
```

> 5.然后运行项目

```ruby
$ npm run dev
```