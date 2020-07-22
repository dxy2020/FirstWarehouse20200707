# 安装依赖包：--save-dev和-save的区别及意义

1. 首先这样做会生成一个package.json的配置文件，并在里面增加相应的版本信息，以后运行程序时，安装依赖包可以直接 npm  install或者你有安装淘宝镜像,那就cnpm install 就一键安装了

```shell
#当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下npm install module-name），然后连同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）。
#-save和save-dev可以省掉你手动修改package.json文件的步骤。 

npm install module-name -save
#自动把模块和版本号添加到dependencies部分 

npm install module-name -save-dve
#自动把模块和版本号添加到devDependencies部分

#至于配置文件区分这俩部分， 是用于区别开发依赖模块和产品依赖模块， 以我见过的情况来看 devDepandencies主要是配置测试框架， 例如jshint、mocha。
```

> --save-dev	开发环境依赖  

> --save	生产环境依赖

**区别：**

在依据package.json中显示的插件  输入cnpm install 开发，生产环境依赖都会被安装，而要单独安装生产环境的依赖不需要全部安装依赖就可以在有--save的依赖中。

输入 `cnpm install --production `即可单独安装生产环境的依赖