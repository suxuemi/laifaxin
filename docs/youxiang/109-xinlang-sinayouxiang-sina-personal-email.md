---
id: 109-xinlang-sinayouxiang-sina-personal-email
title: '新浪邮箱 (@sina.com/@sina.cn): 启用IMAP/SMTP服务与授权码'
description: 本文指导如何在第三方邮件客户端（如来发信）设置新浪邮箱（@sina.com/@sina.cn）。内容包括IMAP/SMTP服务器参数、在网页版邮箱后台开启IMAP4/SMTP服务并通过手机验证获取“客户端授权码”的详细步骤，以及使用授权码登录第三方客户端的方法。
tags: ['新浪邮箱', 'Sina Mail', 'IMAP', 'SMTP', '授权码']
keywords:
  [
    '新浪邮箱',
    'Sina',
    'sina.com',
    'sina.cn',
    'IMAP',
    'SMTP',
    '授权码',
    '客户端授权码',
    'POP3',
    '邮箱配置',
  ]
---

# 新浪邮箱 (@sina.com/@sina.cn): 启用IMAP/SMTP服务与授权码

新浪邮箱（@sina.com, @sina.cn）在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方客户端中的设置独具一格。与多数邮箱不同，您不能直接使用账户密码登录，而必须首先在网页版邮箱中开启 **<span style={{color: '#8e44ad'}}>“IMAP/SMTP服务”</span>**，然后获取一个专用的 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 来代替原始密码进行验证。本指南将为您清晰展示每一步操作。

:::tip
新浪邮箱（Sina Mail）由新浪公司（sina.com）提供，旗下有免费邮箱（@sina.com/@sina.cn/@2008.sina.com）和付费的VIP邮箱（@vip.sina.com）。本指南主要适用于免费版。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 或其他客户端中手动配置新浪邮箱时，请使用以下服务器参数：

| **服务类型** | **服务器地址**  | **SSL 端口** |
| :----------- | :-------------- | :----------- |
| IMAP (收信)  | `imap.sina.com` | 993          |
| SMTP (发信)  | `smtp.sina.com` | 465          |

## 二、启用服务与获取授权码 {#enable-service-get-auth-code}

获取 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 是在新浪邮箱上配置第三方客户端的核心步骤。

### 1. 登录并开启服务 {#login-and-enable-service}

- 登录新浪邮箱官网：[https://mail.sina.com.cn/](https://mail.sina.com.cn/)
- 导航至页面右上角的 <span style={{color: '#3578e5'}}>【设置】</span>，然后进入 <span style={{color: '#3578e5'}}>【客户端POP/IMAP/SMTP】</span> 标签页。
- 在页面下方找到“IMAP4/SMTP服务”部分，将 **<span style={{color: '#3578e5'}}>“服务状态”</span>** 设置为 <span style={{color: '#3578e5'}}>【开启】</span>。

![新浪邮箱设置界面 - 开启IMAP4/SMTP服务](https://cos.files.maozhishi.com/public/attachments/xsj/1641804370195.png)
_图示：在新浪邮箱后台开启IMAP/SMTP服务_

### 2. 安全验证 {#security-verification}

开启服务时，系统会要求进行安全验证。请根据提示输入您账户绑定的手机号码，并填写接收到的短信验证码，然后点击 <span style={{color: '#3578e5'}}>【确定】</span>。

![新浪邮箱 - 手机验证以开启服务并获取授权码](https://cos.files.maozhishi.com/public/attachments/xsj/1641804370206.png)
_图示：通过手机短信完成安全验证_

### 3. 获取并保存授权码 {#get-and-save-auth-code}

验证成功后，系统会弹窗显示一个16位的 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>**。

![新浪邮箱 - 成功获取客户端授权码提示](https://cos.files.maozhishi.com/public/attachments/xsj/1641804370207.png)
_图示：成功获取客户端授权码_

:::warning
此授权码仅显示一次，请立即复制并妥善保管。如果忘记，则需要重复上述步骤重新获取。
:::

## 三、配置来发信客户端 {#configure-laifaxin-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加新浪邮箱时，在 <span style={{color: '#3578e5'}}>“密码”</span> 字段中，**粘贴上一步获取的16位“客户端授权码”**，而不是您的邮箱登录密码。

![来发信系统添加邮箱界面 - 输入客户端授权码作为密码](https://cos.files.maozhishi.com/public/attachments/xsj/1641804370208.png)
_图示：使用“客户端授权码”作为密码在来发信中添加邮箱_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 新浪邮箱为什么要使用“授权码”而不是账户密码登录第三方客户端？**

  > - 答：这是新浪邮箱的一项安全策略。使用授权码可以避免在第三方应用中暴露您的真实密码，从而降低账户被盗的风险。授权码是针对特定客户端生成的，可以随时在网页端禁用，安全性更高。

- **❓ 如果我更换了手机号码，会影响获取授权码吗？**
  > - 答：会的。获取授权码需要通过绑定的手机进行安全验证。如果您更换了手机号，请务必先在新浪邮箱的账户安全设置中更新您的密保手机，否则将无法完成验证并获取新的授权码。

### 学习建议 {#learning-suggestions}

- 🎯 **即时验证**：获取 <u><span style={{color: '#e67c00'}}>授权码</span></u> 后，立即在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://web.laifaxin.com/login) 中配置邮箱，确保其有效。
- 🔐 **安全保管**：将生成的 <u><span style={{color: '#e67c00'}}>授权码</span></u> 妥善保存在密码管理器中，并明确标注其用途（例如：“新浪邮箱用于来发信”）。
- ⚙️ **定期检查**：定期登录新浪邮箱网页版，检查 <span style={{color: '#3578e5'}}>【客户端POP/IMAP/SMTP】</span> 设置，确保服务状态正常，并管理已生成的授权码。

### 相关阅读 {#related-reading}

- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 了解国内另一主流服务商腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录机制。
- 📚 [网易邮箱 (@163.com/@126.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 探索网易邮箱体系中类似的 **<span style={{color: '#8e44ad'}}>“客户端授权密码”</span>** 设置流程。
- 📚 [搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 查看搜狐邮箱获取 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 的具体步骤。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/109-xinlang-sinayouxiang-sina-personal-email
