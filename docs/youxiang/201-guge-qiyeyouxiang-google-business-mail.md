---
id: 201-guge-qiyeyouxiang-google-business-mail
title: '谷歌企业套件（Google Workspace）：应用专用密码登录指南'
description: '本文详细讲解如何为您的谷歌企业邮箱 (Google Workspace) 设置应用专用密码，以便在第三方客户端（如来发信）中安全地收发邮件。内容覆盖管理员启用两步验证的权限，以及用户生成和使用“应用密码”的完整步骤。'
tags:
  ['谷歌企业邮箱', 'Google Workspace', '应用专用密码', 'App Password', 'IMAP', 'SMTP', '两步验证']
keywords:
  [
    '谷歌企业邮箱',
    'Google Workspace',
    'Gmail',
    'IMAP',
    'SMTP',
    '应用专用密码',
    'App Password',
    '两步验证',
    '2FA',
    '安全性较低的应用',
  ]
---

# 谷歌企业邮箱 (Workspace):应用密码

**<span style={{color: '#8e44ad'}}>谷歌企业套件 (Google Workspace)</span>** 是 Google 提供的企业级云端办公解决方案，其核心服务之一便是强大的企业邮箱。为保障企业数据的最高安全性，Google 强制要求在第三方客户端（如 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中登录时，必须启用 **<span style={{color: '#8e44ad'}}>“两步验证”</span>** (2-Step Verification) 并使用专门生成的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** (App Password)。

:::info
直接使用您的主账户密码登录第三方客户端是 **不被允许的**，除非管理员在后台开启了“安全性较低的应用”这一 **极不推荐** 的选项。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置 Google Workspace 邮箱时，请使用以下标准 Gmail 服务器参数：

| **服务类型** | **服务器地址**   | **SSL 端口** |
| :----------- | :--------------- | :----------- |
| IMAP (收信)  | `imap.gmail.com` | 993          |
| SMTP (发信)  | `smtp.gmail.com` | 465          |

## 二、管理员：启用两步验证权限 {#admin-enable-2sv-permission}

在用户可以生成应用密码之前，**企业管理员** 必须首先在 Google Workspace 管理后台中授予用户开启两步验证的权限。

- **登录管理后台**: [https://admin.google.com/](https://admin.google.com/)
- **导航**: 在菜单中进入 <span style={{color: '#3578e5'}}>【安全性】</span> > <span style={{color: '#3578e5'}}>【身份验证】</span> > <span style={{color: '#3578e5'}}>【两步验证】</span>。
- **授权**: 勾选 <span style={{color: '#3578e5'}}>【允许用户开启两步验证】</span>。
- **强制执行**: 将下方的 <span style={{color: '#3578e5'}}>【强制执行】</span> 选项设置为 <span style={{color: '#3578e5'}}>【关闭】</span>，给予用户自行选择开启的灵活性。
- 点击 <span style={{color: '#3578e5'}}>【保存】</span>。

![管理员在后台为用户开启两步验证的权限](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565064.png)
_图示：管理员在后台为用户开启两步验证的权限_

## 三、用户：生成应用密码 {#user-generate-app-password}

管理员授权后，**邮箱用户** 需完成以下两个步骤。

### 1. 开启个人账户的两步验证 {#enable-2sv-for-account}

- **登录谷歌账户**: [https://myaccount.google.com/](https://myaccount.google.com/)
- **导航**: 进入 <span style={{color: '#3578e5'}}>【安全性】</span> 标签页，找到并点击 <span style={{color: '#3578e5'}}>【两步验证】</span>。
- **开始设置**: 点击 <span style={{color: '#3578e5'}}>【开始】</span>，并按提示绑定您的手机号码以完成验证流程。

![用户开始设置两步验证流程](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565065.png)
_图示：用户开始设置两步验证流程_

- 完成验证后，点击 <span style={{color: '#3578e5'}}>【启用】</span> 以正式开启两步验证。

![确认启用两步验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565066.png)
_图示：确认启用两步验证_

### 2. 创建并复制应用密码 {#create-and-copy-app-password}

- **访问应用密码页面**: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- **选择应用和设备**:
  - 在 <span style={{color: '#3578e5'}}>【选择应用】</span> 下拉菜单中选择 <span style={{color: '#3578e5'}}>【邮件】</span>。
  - 在 <span style={{color: '#3578e5'}}>【选择设备】</span> 下拉菜单中选择 <span style={{color: '#3578e5'}}>【Windows计算机】</span>。
- 点击 <span style={{color: '#3578e5'}}>【生成】</span>。

![选择应用和设备以生成密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565067.png)
_图示：选择应用和设备以生成密码_

- 系统会生成一个16位的 **<span style={{color: '#8e44ad'}}>应用密码</span>**。请立即 **复制** 这段密码（不含空格），并妥善保管。

![成功生成16位应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565068.png)
_图示：成功生成16位应用密码_

## 四、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位应用密码**。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用应用密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565070.png)
_图示：在密码框中输入16位应用密码_

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565059.png)
_图示：邮箱成功添加后显示【正常】状态_

## 五、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么必须区分管理员和用户的操作？**

  > - 答：在 Google Workspace 中，**<span style={{color: '#8e44ad'}}>管理员</span>** 负责制定整个组织的安全策略，例如是否允许用户使用两步验证。**<span style={{color: '#8e44ad'}}>用户</span>** 则在管理员授予的权限范围内，对自己的账户进行具体安全设置。这种分层管理是企业级服务的核心特性。

- **❓ “应用密码”和主账户密码有什么不同？**
  > - 答：**<span style={{color: '#8e44ad'}}>主账户密码</span>** 用于登录 Google 的所有网页服务，拥有最高权限。**<span style={{color: '#8e44ad'}}>“应用密码”</span>** 是一次性生成的16位密码，仅用于授权特定第三方应用访问您的部分数据（如邮件），且可以随时撤销，安全性远高于直接使用主密码。

### 关于 Google Workspace {#about-google-workspace}

**<span style={{color: '#8e44ad'}}>Google Workspace</span>** 是一款致力于打造适用于所有工作方式的办公和协作工具，提供为期14天的免费试用期。其服务不仅价格低廉，界面也整洁美观，且送达率高、不易进垃圾箱，是外贸人开发客户的首选邮箱之一。

- **官网**: [https://workspace.google.com/](https://workspace.google.com/)

### 相关阅读 {#related-reading}

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括腾讯、阿里、网易等。
- 📚 [个人 Gmail 邮箱配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 如果您需要配置个人 Gmail 邮箱，其流程与本指南的用户部分基本一致。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

<details>
<summary>
  <span style={{color: '#d93025'}}>
    <strong>⚠️ 极不推荐：启用“安全性较低的应用”访问</strong>
  </span>
</summary>

此方法会降低您账户的安全性，仅应在无法使用“应用密码”的特殊情况下作为临时解决方案。

1.  **管理员设置**：

    - 登录管理后台，进入 <span style={{color: '#3578e5'}}>【安全性】</span> > <span style={{color: '#3578e5'}}>【访问与数据控制】</span> > <span style={{color: '#3578e5'}}>【安全性较低的应用】</span>。
    - 选择 <span style={{color: '#3578e5'}}>【让用户自行管理他们能否访问安全性较低的应用】</span> 并保存。
      ![管理员允许用户管理“安全性较低的应用”](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565061.png)
      _图示：管理员允许用户管理“安全性较低的应用”_

2.  **用户设置**：
    - 访问链接: [https://myaccount.google.com/lesssecureapps](https://myaccount.google.com/lesssecureapps)
    - 开启 <span style={{color: '#3578e5'}}>【允许安全性较低的应用】</span>。
      ![用户启用“安全性较低的应用”访问权限](https://cos.files.maozhishi.com/data/web/web-files/img/1721146565062.png)
      _图示：用户启用“安全性较低的应用”访问权限_

完成以上两步后，您才可以在第三方客户端中直接使用您的 **主账户密码** 登录。

</details>

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/201-guge-qiyeyouxiang-google-business-mail
