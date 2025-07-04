---
id: cloud-synchronize-merchants-and-centralized-data-management
title: "如何同步谷歌地图商家数据至云端并进行统一的数据管理？"
description: "本文介绍如何在插件中开启云端数据同步功能，以便实现谷歌地图商家信息的云端存储和集中管理。通过手动开启同步和设置同步参数，您可以在云端轻松查看和管理数据，避免数据丢失问题，提升工作效率。"
tags: ["谷歌地图", "云同步", "数据管理", "标签管理", "数据导出"]
keywords:
  ["谷歌地图", "云同步", "商家数据", "数据管理", "标签", "导出", "来发信"]
---

# 同步谷歌地图商家数据至云端统一管理 {#sync-google-maps-data-to-cloud}

通过 👉 [**<span style={{color: '#e67c00'}}>谷歌地图商家采集</span>**](./how-to-use-google-maps-plugin) 功能，您可以快速构建潜在客户列表。请注意以下几点：

- 1️⃣ **数据在本地**：插件采集的数据默认存储在本地，清理浏览器缓存可能导致数据丢失。
- 2️⃣ **默认不同步**：云端同步功能默认关闭，需要您手动开启。
- 👉 **同步云端好处**：开启后，即使更换电脑，您也能随时访问所有数据，无需担心丢失。

:::info
为便于数据管理和确保安全，我们强烈建议您开启云端同步功能。本文将引导您完成相关操作。
:::

## 一、开启云端同步 {#enable-cloud-sync}

### 1. 查看同步状态 {#check-sync-status}

默认情况下，插件的 <span style={{color: '#3578e5'}}>【云端数据同步】</span> 功能处于关闭状态。

![云端数据同步功能默认关闭](https://cos.files.maozhishi.com/data/web/web-files/img/20240919201349.png)
_图示：云端数据同步功能默认关闭_

### 2. 启用并配置同步 {#enable-and-configure-sync}

1.  **启用开关**：在插件主界面，点击 <span style={{color: '#3578e5'}}>【云端数据同步】</span> 选项前方的开关以启用。
2.  **配置参数**：点击 <span style={{color: '#3578e5'}}>【同步设置】</span>，在弹出的窗口中可以设置一个默认 **<span style={{color: '#8e44ad'}}>同步标签</span>**，所有同步的商家都将被自动标记，便于后续在云端筛选。

![启用并配置云端同步](https://cos.files.maozhishi.com/data/web/web-files/img/20241210173857.png)
_图示：启用并配置云端同步_

## 二、查看云端数据 {#view-cloud-data}

开启同步后，您可以使用相同的来发信账户登录 👉 [**<span style={{color: '#e67c00'}}>谷歌地图搜客</span>**](https://web.laifaxin.com/search/google-map) 平台，集中查看您的商家数据。

- **商家列表**：登录后，您可以看到所有已同步的商家列表。

![查看已同步的商家列表](https://cos.files.maozhishi.com/data/web/web-files/img/20240919202512.png)
_图示：查看已同步的商家列表_

- **显示设置**：您可以通过右上角的 <span style={{color: '#3578e5'}}>【显示设置】</span> 调整列表的 **<span style={{color: '#8e44ad'}}>显示密度</span>**、**<span style={{color: '#8e44ad'}}>可见字段</span>** 和每页 **<span style={{color: '#8e44ad'}}>显示数量</span>**。

![调整列表的显示设置](https://cos.files.maozhishi.com/data/web/web-files/img/1728549861722_d.png)
_图示：调整列表的显示设置_

## 三、管理云端数据 {#manage-cloud-data}

在云端平台，您可以对商家数据进行筛选、标记和导出等多种操作。

### 1. 标签管理 {#tag-management}

标签是高效筛选和组织商家的关键工具。

1.  **选择商家**：勾选您想操作的一个或多个商家。
2.  **贴新标签**：点击 <span style={{color: '#3578e5'}}>【贴标签】</span> 按钮，选择一个现有标签或 <span style={{color: '#3578e5'}}>【新增标签】</span>。

![为商家贴上新标签](https://cos.files.maozhishi.com/data/web/web-files/img/20241010174306.png)
_图示：为商家贴上新标签_

- **❓ 打了标签后，在列表中看不到"标签"列怎么办？**
  > - 答：请点击列表右上角的 <span style={{color: '#3578e5'}}>【显示设置】</span>，在弹出的字段列表中勾选 <span style={{color: '#3578e5'}}>【标签】</span> 即可。您还可以拖动字段名称来调整其显示顺序。

![在显示设置中勾选"标签"字段](https://cos.files.maozhishi.com/data/web/web-files/img/20241010175253.png)
_图示：在显示设置中勾选"标签"字段_

### 2. 导出商家数据 {#export-business-data}

您可以将筛选出的商家数据导出为 Excel 文件。

1.  **选择商家**：勾选您想导出的商家。
2.  **执行导出**：点击 <span style={{color: '#3578e5'}}>【导出】</span> 按钮。
3.  **下载文件**：系统会提示您导出任务已创建。点击 <span style={{color: '#3578e5'}}>【查看导出记录】</span>，然后在记录列表中点击 <span style={{color: '#3578e5'}}>【下载】</span> 即可获取文件。

![导出商家数据并下载文件](https://cos.files.maozhishi.com/data/web/web-files/img/20241010180925.png)
_图示：导出商家数据并下载文件_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么我在插件里采集了商家，但在云端看不到？**

  > - 答：请检查您是否已手动开启 **<span style={{color: '#8e44ad'}}>云端数据同步</span>** 功能。此功能默认关闭，需要您在插件设置中明确启用后，新的采集数据才会被同步。

- **❓ 我可以在多台电脑上同步数据吗？**
  > - 答：可以。只要您在不同的电脑上使用相同的来发信账户登录插件和云端平台，并确保每台设备上的插件都开启了云同步，数据就可以实现互通和集中管理。

### 学习建议 {#learning-suggestions}

- 🏷️ **精细化标签**：建立一套清晰、规范的标签体系（如按行业、地区、客户意向度分类），这将极大提升您筛选和跟进客户的效率。
- 定期导出**：虽然云端同步很方便，但定期将重要客户数据 **<span style={{color: '#8e44ad'}}>导出备份</span>\*\* 仍是一个好习惯，可以为您提供额外的数据安全保障。

### 相关阅读 {#related-reading}

- 📚 [谷歌地图商家采集插件使用指南](./how-to-use-google-maps-plugin)
  - 学习如何安装和使用插件来高效采集谷歌地图上的商家信息。
- 📚 [如何从谷歌地图商家中批量提取邮箱？](./how-to-extract-email-from-google-maps)
  - 了解如何利用已采集的商家数据，进一步挖掘和提取有效的联系邮箱。
- 📚 [谷歌地图插件常见问题解答](./google-maps-plugin-faq)
  - 查找关于插件安装、使用及故障排除的常见问题和解决方案。

---

🔗 **本文永久链接：** https://laifa.xin/chajian/cloud-synchronize-merchants-and-centralized-data-management
