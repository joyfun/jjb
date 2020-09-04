# 京价保 - 自动申请京东价格保护

京价保是一个帮你监控商品价格变化自动申请京东价格保护，顺便帮你签到领京豆、钢镚的 Chrome 拓展。

**强烈推荐使用 Chrome 商店安装**（这样才能获得自动更新）：

<a target='_blank' rel='nofollow' href='https://chrome.google.com/webstore/detail/gfgkebiommjpiaomalcbfefimhhanlfd'>
  <img alt='Chrome
  web store' width='496' height='150' src='https://jjbcdn.zaoshu.so/web/cws_badge_496x150.png' />
</a>

同时提供

Firefox 版本：

<a href="https://addons.mozilla.org/zh-CN/firefox/addon/jjb/" target="_black">
  <img alt="安装 Firefox 版" class="firefox" src="https://d33wubrfki0l68.cloudfront.net/4ce5ce101cdaa4030248fab2934960ad1cc6960e/3f95c/firefox-quantum.png" width="32px">
</a>


Microsoft Edge 版本：

<a href="https://microsoftedge.microsoft.com/addons/detail/ljdjkkjiognkghfjndoddoplekppngge" target="_black">
  <img alt="安装 Edge 版" class="edge" src="https://edgetipscdn.microsoft.com/insider-site/images/favicon.fbd89822.png" width="32px">
</a>

或者直接下载的 CRX文件手动安装（非常不建议）

<a href="http://jjb.zaoshu.so/updates/latest" target="_black">
  <img alt="下载 CRX 文件" class="firefox" src="https://jjbcdn.zaoshu.so/crx-icon.png" width="32px">
</a>

*此方法通常只适用于 Chromium 内核的国产浏览器，因为 Chrome 出于安全原因已禁止通过除 Chrome 官方商店以外的其他渠道安装拓展。*

## 主要功能

* 自动监控最近订单商品的价格变化，在商品降价时自动申请价格保护
* 自动签到领取京豆
* 自动领白条券
* 自动领Plus券
* 自动领全品类
* 商品价格走势图

## 界面截图

![主界面](https://jjbcdn.zaoshu.so/jjb-popup.2.5.8.1.png)


## 重要提示

1. 京价保并非开源软件，不许可您以任何形式进行再发行，请仔细阅读[#协议和授权](https://github.com/sunoj/jjb#%E5%8D%8F%E8%AE%AE%E5%92%8C%E6%8E%88%E6%9D%83)。

2. 当前仓库是插件源代码，无法直接安装，如需安装请自行参考 [#如何开发](https://github.com/sunoj/jjb#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91) 编译。

3. 京价保绝对不会在任何情况下强行劫持任何网页的访问，如果发现类似问题请善用 Google 搜索并使用二分法停用插件排除，同时考虑运营商劫持的可能性。或者，为了防止京价保的影响亦可直接卸载京价保。故不再回复类似的 Issue。详情参考：[#安全提示](https://github.com/sunoj/jjb#%E5%AE%89%E5%85%A8%E6%8F%90%E7%A4%BA)


## 如何开发

* 安装依赖
> yarn

* 开始开发
> VERSION=2.1.1 BROWSER=chrome yarn build

`主要作用就是合并压缩代码，质疑代码和市场版本不一致，请先自行打包一下再对比`

## 价格

京价保可以免费使用，如果京价保确实帮到你，你可以通过打赏作者来鼓励京价保继续更新。

![打赏作者](https://jjbcdn.zaoshu.so/weixin_pay.png?imageView2/0/h/300)

你的打赏能帮助京价保保持更新，适配京东的页面修改，添加更多自动功能。

## 历史价格走势图

“[价格走势图](https://blog.jjb.im/price-chart.html)”是京价保 2.0 版本引入的新功能。

这是一个计划已久的功能，京价保的核心价保功能原本已经在监控已购商品的价格变化，本功能通过将这些价格信息共享，实现了一个互助的价格历史数据库。

![](https://i.v2ex.co/6G1a56k5.png)

目前京价保的价格历史数据库只覆盖了不到 2% 的 SKU，如果在商品页面看不到走势图请不要意外。

## 安全提示

京价保不会在任何情况下强行劫持访问、插入恶意代码、上传隐私信息或利用你的电脑挖矿。

若你发现任何类似问题，请首先确保你使用的是商店版本，不建议在任何情况下使用第三方提供的安装包。

京价保目前有约两万人正在使用（包括 Chrome 和 Firefox 以及其他浏览器非市场版本），其中至少有数千名开发者，京价保的代码有近千人关注，若怀疑京价保代码有问题，不妨直接审查代码。

如果你确实发现京东页面（或者还有其他电商和非电商网站）被劫持，请考虑运营商劫持的可能性，并筛查拓展列表。

### 隐私政策

京价保的部分功能链接带有京东联盟的返利链接，如果介意可以关闭这些功能。

了解详见：https://blog.jjb.im/policy.html

### 关于黑号

网络上有很多人表示多次领券和申请价格保护会导致账号“黑号”，不知道其对京东的风控政策是如何了解的，为何正常使用其官方提供的功能会导致账号被“黑”？

目前没有任何一例可靠的报告表明使用京价保会导致“黑号”，作者本人和同事家人使用京价保近一年，即使在开发阶段疯狂测试申请价格保护账号亦无任何异常。

但，若你担心此项风险，决定自我审查，关闭领券功能或直接卸载京价保即可。

> Tips. 如果发现这部分情况下无法领券，有可能是因为你参加了一个特殊的活动：“爱奇艺会员+京东PLUS 89元”，了解详情可参考：https://github.com/sunoj/jjb/issues/96

## 系统支持

目前京价保对 Windows 和 Mac 平台的 Chrome 有较好的支持。

据用户反应，部分 Chromium 内核的国产浏览器可能有兼容问题（例如搜狗浏览器）。

Ubuntu 有明确的兼容问题，由于作者不拥有任何 Ubuntu 设备，因此暂时无法解决。

## 获取信息

你可以 Telegram 上关注京价保： https://t.me/jingjiabao

您还可以关注京价保的公众号（发布更新通知）：

![京价保公众号](https://jjbcdn.zaoshu.so/wechat/qrcode_for_gh_21550d50400c_430.jpg?imageView2/0/h/300)

京价保现在还有一个官方博客： https://blog.jjb.im

或者也可以关注京价保的知乎专栏：https://zhuanlan.zhihu.com/jjblog

## 协议和授权

京价保并非一个开源软件，作者保留全部的权利。
公开源代码的目的是为了让使用者能够审计代码，但是你仍然可以就以下方式合法的使用本项目的全部代码和资源：

1. 个人使用
2. 以学习目的使用全部或部分代码

但你不可以：

1. 将本项目的部分或全部代码和资源进行任何形式的再发行（尤其是上传到 Chrome 商店）
2. 利用本项目的部分或全部代码和资源进行任何商业行为

## 贡献代码

京价保并非一个开源项目，也不是社区共同创造，其全部功能由作者独立完成。

如果你愿意放弃所有权利，并将权利无条件转让给京价保作者，欢迎您贡献代码。

## 提交反馈

欢迎提交 issue，请写清楚遇到问题的原因，浏览器和操作系统环境，重现的流程。

任何反馈问题的 issue 均需按照模板格式填写，否则将被直接关闭。

如果有开发能力，建议在本地调试出出错的代码。

不接受功能请求的 issue，功能请求可能会被直接关闭，请谅解（正确的方式是打赏并附言）。

若有功能建议或其他非技术反馈，请使用应用内反馈。由于京价保不设客服人员，反馈将默认不回复。

## 联系作者

请发邮件至：`ming@tiny.group`

请勿发送功能咨询邮件，将不会收到回复。相关功能细节请自行了解。

## 衍生项目

<h3>
  <a href="https://github.com/sunoj/teaclub" target="_blank">茶友会</a>
</h3>
