---
id: story-writer-github-image-hosting-guide
title: 📝 小书匠图床迁移终极指南：从语雀到GitHub，一步一坑全解析
description: 还在为语雀、Notion等平台图片防盗链而烦恼吗？本教程将提供终极解决方案，手把手教你如何利用小书匠（Story-writer）配合GitHub，一键批量迁移图片链接，并对所有可能遇到的坑进行详细图解，让你轻松搞定图床问题。
tags: [小书匠, 图床迁移, GitHub, Markdown, 语雀, 内容创作, 技术教程]
keywords: [小书匠教程, GitHub图床, 图片防盗链, Markdown编辑器, 语雀图片迁移, 批量替换图片链接, Story-writer, 静态博客]
---

# 图床迁移：从语雀到GitHub，手摸手教学
**接前文**：[🚀 不卖课！手把手教你10分钟上线收询盘的网站！](https://www.laifa.xin/share/website/ai-powered-website-in-10-minutes)

在内容创作和迁移的过程中，我们常常会遇到一个棘手的问题：从语雀、Notion等笔记平台导出的内容，其图片链接往往带有“防盗链”机制。这意味着，当你把这些内容直接发布到自己的网站或博客时，图片会全部失效，显示为一个难看的“裂图”图标。

本文将提供一个终极解决方案：利用强大的Markdown编辑器**小书匠（Story-writer）**，配合免费稳定的**GitHub**作为图床，实现对这些带防盗链的图片链接进行一键式、批量的迁移。本教程将覆盖从软件安装、图床配置，到实战转换的全过程，并对新手极易遇到的**每一个坑**都进行详细说明和图解，确保你跟着走就能成功。

---

## 一、准备工作：下载与安装

首先，我们需要下载并安装小书匠。请根据你的操作系统选择对应的版本。

**下载链接：**
*   **Win64位版本：** [https://dd.laifa.xin/xsj-win64.exe](https://dd.laifa.xin/xsj-win64.exe) (内存大于4G的Windows系统建议下载此版)
*   **Win32位版本：** [https://dd.laifa.xin/xsj-win32.exe](https://dd.laifa.xin/xsj-win32.exe)
*   **macOS (Apple Silicon M1/M2/M3) 版本：** [https://dd.laifa.xin/xsj-osxarm.zip](https://dd.laifa.xin/xsj-osxarm.zip)
*   **macOS (Intel) 版本：** [https://dd.laifa.xin/xsj-osx64.zip](https://dd.laifa.xin/xsj-osx64.zip)

**【macOS M系列芯片用户特别注意】**
如果您使用的是M1/M2/M3等ARM架构的Mac，下载 `osxarm` 版本后，若发现应用无法启动，请打开“终端”应用，执行以下命令：
```bash
# 假设你把解压后的文件放在了“下载”文件夹
cd /Users/你的用户名/Downloads/Story-writer-osxarm
xattr -cr ./Story-writter.app
```
这个命令会移除macOS的安全隔离属性，允许应用正常运行。安装过程与其他软件无异，此处不再赘述。

---

## 二、基础设置：优化你的编辑体验

为了方便我们后续观察Markdown源码和预览效果，建议关闭小书匠默认的“所见即所得”模式。

1.  打开小书匠，在编辑器下方的状态栏找到并点击“修改编辑器配置”。

    ![点击“修改编辑器配置”](https://cos.files.maozhishi.com/data/web/web-files/img/20250724180635.png)

2.  在弹出的配置窗口中，**取消勾选“所见即所得”**。

    ![取消勾选“所见即所得”](https://cos.files.maozhishi.com/data/web/web-files/img/20250724180746.png)

设置后，你的编辑器将变为左侧是Markdown源码，右侧是实时预览的经典布局，这对于我们检查图片链接是否被正确替换非常有帮助。

---

## 三、核心配置：绑定GitHub图床

这是整个流程中最关键也是最容易出错的一步。我们将分步完成GitHub的设置，并将其绑定到小书匠。

### 步骤1：进入小书匠绑定设置

1.  点击小书匠左下角的齿轮图标，进入“设置”。

    ![进入小书匠设置](https://cos.files.maozhishi.com/data/web/web-files/img/20250724153225.png)

2.  在设置菜单中，选择“存储” > “绑定”。

    ![进入绑定设置页面](https://cos.files.maozhishi.com/data/web/web-files/img/20250724153346.png)

3.  在图床服务列表中，找到并点击 `githubimg` 进行配置。

    ![选择githubimg服务进行配置](https://cos.files.maozhishi.com/data/web/web-files/img/20250724153551.png)

### 步骤2：获取GitHub授权令牌 (Token)

Token相当于小书匠访问你GitHub仓库的密码，请务必妥善保管。

1.  在`githubimg`配置界面，点击`token`旁边的链接，它会引导你跳转到GitHub的Token生成页面。

    ![点击链接生成Token](https://cos.files.maozhishi.com/data/web/web-files/img/20250724154003.png)

2.  登录你的GitHub账号（支持Google快速登录）。

    ![登录GitHub账号](https://cos.files.maozhishi.com/data/web/web-files/img/20250724155207.png)

3.  在“New personal access token”页面进行如下设置：
    *   **Note**：给这个Token起个名字，方便自己识别，如 `xiaoshujiang-token`。
    *   **Expiration**：设置有效期，建议选择“No expiration”（永不过期）或较长时间。
    *   **Select scopes**：这是最重要的一步！**必须勾选 `repo`**，它会自动包含所有子权限。

    ![设置Token的名称、有效期和权限](https://cos.files.maozhishi.com/data/web/web-files/img/20250724155657.png)

4.  拉到页面底部，点击“Generate token”按钮。

    ![点击生成Token按钮](https://cos.files.maozhishi.com/data/web/web-files/img/20250724155830.png)

5.  **立即复制并保存生成的Token！** 这个Token只会显示一次，离开页面后将无法再次查看。

    ![复制并保存生成的Token](https://cos.files.maozhishi.com/data/web/web-files/img/20250724155946.png)

### 步骤3：创建并初始化GitHub仓库

这个仓库将作为我们存放图片的网络空间。

1.  在GitHub页面，点击右上角的“+”号，选择“New repository”，或者直接访问 [github.com/new](https://github.com/new)。

    ![创建新的GitHub仓库](https://cos.files.maozhishi.com/data/web/web-files/img/20250724160211.png)

2.  设置仓库信息：
    *   **Repository name**：给仓库起个名字，例如 `nibaba`。
    *   **Public/Private**：**必须选择 `Public`（公开）**，否则图片无法被外部访问。
    *   点击“Create repository”。

    ![填写仓库名称并设置为公开](https://cos.files.maozhishi.com/data/web/web-files/img/20250724160340.png)

3.  仓库创建成功。

    ![仓库创建成功页面](https://cos.files.maozhishi.com/data/web/web-files/img/20250724160525.png)

4.  **【重点！防坑指南】初始化仓库。** 新创建的空仓库无法直接使用，否则小书匠会报错。我们必须在里面创建一个文件来完成初始化。最简单的方法是创建一个`README.md`文件。
    *   点击页面上的“creating a new file”或“Add a README file”。

    ![点击创建README文件以初始化仓库](https://cos.files.maozhishi.com/data/web/web-files/img/20250724161431.png)

    *   文件名默认为`README.md`，无需修改。直接点击右上角的“Commit changes...”，在弹窗中再次点击“Commit changes”。

    ![提交README文件的创建](https://cos.files.maozhishi.com/data/web/web-files/img/20250724161737.png)

5.  初始化完成。请注意，此时仓库的主分支名称是 `main`。

    ![初始化完成，注意主分支名为main](https://cos.files.maozhishi.com/data/web/web-files/img/20250724161945.png)

### 步骤4：在小书匠中完成配置

现在，回到小书匠的`githubimg`配置界面，填入我们准备好的信息。

![在小书匠中填写GitHub图床配置](https://cos.files.maozhishi.com/data/web/web-files/img/20250724160744.png)

*   **token**：粘贴你刚刚在GitHub生成的Token（通常以`ghp_`开头）。
*   **仓库**：填写你的仓库名称，例如 `nibaba`。
*   **文件名称生成规则**：建议修改为 `/img/{{filename}}`，这样所有图片都会存放在仓库的`img`目录下，便于管理。避免使用中文路径。
*   **【重点！防坑指南】对应的分支**：**务必将默认的 `master` 修改为 `main`**，与你在GitHub上看到的分支名保持一致。

### 步骤5：常见问题与解决方案

如果在配置或测试中遇到错误，99%是以下两个原因：

*   **错误1：仓库未初始化 (409 Conflict Error)**
    如果你跳过了初始化仓库的步骤，测试时会看到类似下面的`409`错误。
    ```json
    {"path":"/repos/apan-tony/nibaba/git/refs/heads","request":{"dataType":"json"},"error":409}
    ```
    ![仓库未初始化导致的409报错](https://cos.files.maozhishi.com/data/web/web-files/img/20250724161255.png)
    **解决方案：** 返回GitHub，按照**步骤3**的方法，在仓库里创建一个`README.md`文件。

*   **错误2：分支名称不匹配**
    如果你的分支是`main`，但小书匠里填的是`master`，会看到下面的报错。
    ![分支名称不匹配导致的报错](https://cos.files.maozhishi.com/data/web/web-files/img/20250724162305.png)
    **解决方案：** 在小书匠的`githubimg`配置中，将“对应的分支”从`master`修改为`main`。

### 步骤6：激活并测试图床

1.  配置无误后，回到“绑定”页面，勾选 `githubimg`，使其成为当前默认的图床服务。

    ![勾选githubimg作为默认图床](https://cos.files.maozhishi.com/data/web/web-files/img/20250724162445.png)

2.  关闭设置窗口，返回主编辑器界面。

    ![点击返回编辑器界面](https://cos.files.maozhishi.com/data/web/web-files/img/20250724210003.png)

3.  **测试粘贴上传**：随便截一张图，然后在小书匠的编辑器中按下 `Ctrl+V` (或 `Cmd+V`) 粘贴。如果图片链接自动变成了以`raw.githubusercontent.com`开头的地址，恭喜你，图床配置成功！

    ![粘贴截图测试图床是否正常工作](https://cos.files.maozhishi.com/data/web/web-files/img/20250724162651.png)

---

## 四、实战操作：一键批量迁移图片链接

万事俱备，现在开始执行最终的转换任务。

### 步骤1：找到“图床转移”功能

1.  首先，将你从语雀等平台复制的、包含旧图片链接的Markdown全文，粘贴到小书匠的编辑器中。
2.  在编辑器的顶部菜单栏找到并点击“图床转移”按钮。

    ![找到并点击“图床转移”按钮](https://cos.files.maozhishi.com/data/web/web-files/img/20250724142244.png)

    **【提示】** 如果你没有看到这个菜单栏，可能是因为处于“页签模式”。可以点击左上角的“切换页签模式”按钮。

    ![点击“切换页签模式”以显示菜单栏](https://cos.files.maozhishi.com/data/web/web-files/img/20250724142459.png)

    切换后，你应该就能在右侧看到“图床转移”按钮了。

    ![在另一种模式下找到“图床转移”按钮](https://cos.files.maozhishi.com/data/web/web-files/img/20250724144746.png)

### 步骤2：执行转换

我们以下面这段包含语雀图片链接（`cdn.nlark.com`）的代码为例：

```markdown
![](https://cdn.nlark.com/yuque/0/2025/png/209822/1753201459682-632743aa-d982-4443-a0d9-de48452e33c3.png)
<font style="color:#FF0000;">产品编号HY-001</font>
![](https://cdn.nlark.com/yuque/0/2025/png/209822/1753201460043-e8373b48-adbc-4c52-ad29-f1f3835d5dae.png)<font style="color:#FF0000;">产品名称:长方形玻璃保鲜饭盒（两分格） （1040ML）</font>
<font style="color:#FF0000;">容量:1040ML</font>
![](https://cdn.nlark.com/yuque/0/2025/png/209822/1753201460403-cdc4a3bf-925a-4d33-a61a-d17e5f569df9.png)
<font style="color:#FF0000;">产品编号HY-003</font>
<font style="color:#FF0000;">产品编号HY-004</font>
![](https://cdn.nlark.com/yuque/0/2025/png/209822/1753201460699-9fc9706a-dcf9-40cd-a381-1f88dab442e8.png)<font style="color:#FF0000;">产品名称:圆形玻璃保鲜饭盒（两分格） （960ML）</font>
<font style="color:#FF0000;">容量:960ML</font>
```

1.  将上述内容粘贴到小书匠后，点击“图床转移”。

    ![将内容粘贴后点击“图床转移”](https://cos.files.maozhishi.com/data/web/web-files/img/20250724205143.png)

2.  在弹出的“网络图片地址转换”窗口中，勾选右上角的“全选”，然后点击最下方的“转换”按钮。此时“转换后地址”一栏是空的。

    ![在转换窗口中全选并点击转换](https://cos.files.maozhishi.com/data/web/web-files/img/20250724205344.png)

3.  耐心等待。小书匠会开始下载原图片并上传到你的GitHub仓库，窗口会显示“处理中...”。**此过程请勿进行任何操作。**

    ![转换正在进行中](https://cos.files.maozhishi.com/data/web/web-files/img/20250724205456.png)

### 步骤3：验证结果

1.  转换完成后，“转换后地址”一栏会填上新的GitHub链接。点击“确定”按钮。

    ![转换完成，新地址已生成](https://cos.files.maozhishi.com/data/web/web-files/img/20250724205659.png)

2.  回到编辑器，你会发现文中的所有图片链接都已经被成功替换了！

    ![正文中的图片链接已被成功替换](https://cos.files.maozhishi.com/data/web/web-files/img/20250724205752.png)

转换后的内容如下，图片链接已经变成了稳定、无防盗链的GitHub链接：

```markdown
![](https://raw.githubusercontent.com/apan-tony/nibaba/main/img/1753361533417.png)
<font style="color:#FF0000;">产品编号HY-001</font>
![](https://raw.githubusercontent.com/apan-tony/nibaba/main/img/1753361533419.png)<font style="color:#FF0000;">产品名称:长方形玻璃保鲜饭盒（两分格） （1040ML）</font>
<font style="color:#FF0000;">容量:1040ML</font>
![](https://raw.githubusercontent.com/apan-tony/nibaba/main/img/1753361533421.png)
<font style="color:#FF0000;">产品编号HY-003</font>
<font style="color:#FF0000;">产品编号HY-004</font>
![](https://raw.githubusercontent.com/apan-tony/nibaba/main/img/1753361533420.png)<font style="color:#FF0000;">产品名称:圆形玻璃保鲜饭盒（两分格） （960ML）</font>
<font style="color:#FF0000;">容量:960ML</font>
```

至此，你已经成功地将所有图片迁移到了自己的图床。这份处理好的Markdown“原料”，现在可以放心地交给AI进行下一步的梳理和美化，或者直接用于发布你的网站和博客了。