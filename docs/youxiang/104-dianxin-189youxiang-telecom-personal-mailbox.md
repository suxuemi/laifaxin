---
id: 104-dianxin-189youxiang-telecom-personal-mailbox
title: '电信邮箱 (@189.cn): IMAP/SMTP 配置指南'
description: 本文指导如何在第三方邮件客户端（如来发信）中使用中国电信189邮箱（@189.cn）。介绍了其IMAP/SMTP服务器参数，并详细说明了如何在189邮箱网页版设置中开启“IMAP/SMTP服务”，以便直接使用邮箱登录密码进行第三方客户端登录。
tags: ['电信邮箱', '189邮箱', 'IMAP', 'SMTP', '邮箱配置']
keywords: ['电信邮箱', '189邮箱', '中国电信', 'IMAP', 'SMTP', '客户端配置']
---

# 电信邮箱 (@189.cn): IMAP/SMTP 配置指南

电信邮箱 (@189.cn) 是由中国电信提供的电子邮件服务。与需要生成专用密码的邮箱不同，189 邮箱的配置过程更为直接。本指南将详细介绍如何开启其 `IMAP/SMTP` 服务，并使用您的 **<span style={{color: '#8e44ad'}}>登录密码</span>** 将其成功绑定到 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端。

:::tip
189 邮箱在第三方客户端的配置中，**直接使用您的主账户登录密码**即可。关键步骤是在网页版邮箱设置中，手动开启 **<span style={{color: '#8e44ad'}}>“IMAP/SMTP服务”</span>**。
:::

## 一、核心参数配置 {#core-parameters-configuration}

| **服务类型** | **服务器地址** | **SSL端口** |
| :---: | :---: | :---: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.189.cn` | `993` |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.189.cn` | `465` |

## 二、开启 IMAP/SMTP 服务 {#enable-imap-smtp-service}

### 1. 访问邮箱设置

首先，登录您的 📚[189邮箱官网](http://mail.189.cn/)。登录后，点击页面右上角的 <span style={{color: '#3578e5'}}>【设置】</span> 按钮，进入设置菜单。

### 2. 启用服务

在设置页面中，找到并点击 <span style={{color: '#3578e5'}}>【IMAP/POP3/SMTP服务】</span> 标签页。然后，勾选 <span style={{color: '#3578e5'}}>【IMAP/SMTP服务】</span> 选项以启用该功能。

![在189邮箱网页版设置中启用IMAP/SMTP服务](https://cos.files.maozhishi.com/public/attachments/xsj/1641804512832.png)

_图示：在“IMAP/POP3/SMTP服务”标签页下勾选“IMAP/SMTP服务”_

## 三、在客户端中配置 {#configure-in-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加新邮箱时，填写您的 189 邮箱地址和 **<span style={{color: '#8e44ad'}}>登录密码</span>** 即可完成绑定。

![在来发信中输入邮箱和登录密码](https://cos.files.maozhishi.com/public/attachments/xsj/1641804512836.png)

_图示：使用您的189邮箱地址和登录密码进行添加_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么我开启了服务但仍然无法登录？**
> - 答：请确认您的登录密码是否正确。建议您先在网页版成功登录一次，再到客户端尝试。此外，部分地区或网络环境下，电信的服务可能会有延迟，可以稍后再试。

- **❓ 189邮箱是否支持生成类似“授权码”的安全密码？**
> - 答：截至目前，189 邮箱不支持为第三方客户端生成独立的授权码或应用密码。因此，直接使用 **<span style={{color: '#8e44ad'}}>登录密码</span>** 是唯一的配置方式。

### 学习建议 {#learning-suggestions}

- 🎯 **密码安全**：由于直接使用主密码登录，强烈建议您设置一个高强度的、包含大小写字母、数字和符号的复杂密码。
- 📖 **定期检查**：定期登录网页版邮箱，检查“登录查询”记录，确保没有异常的登录活动。
- ⚙️ **同步设置**：在客户端添加成功后，根据您的需求配置邮件的同步频率和下载范围，以优化使用体验。

### 相关阅读 {#related-reading}

- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 对比了解 **<span style={{color: '#8e44ad'}}>腾讯邮箱</span>** 的配置流程，特别是其强制使用“授权码”的安全机制。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 查看同样需要生成“授权码”的 **<span style={{color: '#8e44ad'}}>网易邮箱</span>** 是如何进行配置的。
- 📚 [移动139邮箱 (@139.com) 配置指南](./110-yidong-139youxiang-china-mobile-personal-email)
  - 了解另一家主要运营商 **<span style={{color: '#8e44ad'}}>移动139邮箱</span>** 的配置方法，它同样支持使用登录密码直接登录。
- 📚 [Sohu搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 探索 **<span style={{color: '#8e44ad'}}>搜狐邮箱</span>** 的IMAP/SMTP设置，它也采用直接密码登录的方式。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/104-dianxin-189youxiang-telecom-personal-mailbox