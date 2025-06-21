---
id: how-to-use-google-maps-plugin
title: "✨ 如何使用谷歌地图插件？"
description: 本文详细介绍了如何使用谷歌地图插件进行特定区域和特定商家的快速自动收集，包括设置关键词、国家和地区，以及如何导出结果等功能。
tags: [谷歌地图, 插件使用, 数据采集, 商家搜索, 自动化]
keywords:
  [谷歌地图插件, 数据采集, 商家搜索, 关键词设置, 地区筛选, 数据导出, laifaxin]
---

# ✨ 如何使用谷歌地图插件？

在 📚[下载并安装插件](./how-to-install-google-maps-plugin) 后，本文将指导您如何设置 **<span style={{color: '#8e44ad'}}>关键词</span>**、**<span style={{color: '#8e44ad'}}>国家</span>** 和 **<span style={{color: '#8e44ad'}}>地区</span>**，以实现对特定区域内目标商家列表的自动化采集。

:::warning[前提条件]
为确保插件正常运行，请在开始前完成以下设置：

- 1️⃣ **网络环境**：确保您可以正常访问 Google 地图。
- 2️⃣ **独立浏览器**：采集过程会持续打开新的地图页面，为避免干扰您的正常工作，推荐使用独立的浏览器，例如 👉[**百分浏览器**](https://www.centbrowser.cn/)。
- 3️⃣ **避免最小化**：采集期间 <u><span style={{color: '#d93025'}}>请勿最小化</span></u> 浏览器窗口，否则将严重影响采集效率。
  :::

---

## 一、核心功能演示 {#core-function-demonstration}

<video src='https://web-files.laifa.xin/cj-google-maps/ggdt-sysm.mp4' controls></video>

_图示：谷歌地图插件核心功能演示视频。_

---

## 二、采集功能详解 {#collection-functions-explained}

### 1. 采集当前页面 {#collect-current-page}

此功能用于快速抓取您在谷歌地图上手动搜索后，当前页面显示的所有商家。

- **1️⃣ 点击搜索按钮**：在谷歌地图上完成一次搜索后，例如搜索 <u><span style={{color: '#e67c00'}}>doctor, Acton, Australian Capital Territory, Australia</span></u>，然后点击插件悬浮窗上的 <span style={{color: '#3578e5'}}>【搜索当前页面】</span> 按钮。
- **2️⃣ 查看商家数据**：插件将立即抓取页面上的商家数据，并以列表的形式展示在插件中。

![点击"搜索当前页面"按钮](https://cos.files.maozhishi.com/data/web/web-files/img/20241027185603.png)

_图示：在谷歌地图搜索结果页，点击插件按钮开始采集。_

![查看当前页面采集结果](https://cos.files.maozhishi.com/data/web/web-files/img/20241027184740.png)

_图示：插件抓取到的当前页商家列表。_

### 2. 批量自动采集 {#batch-automatic-collection}

- **固定插件到浏览器**：为方便使用，建议将插件图标固定在浏览器右上角的工具栏中。

![把谷歌地图商家采集插件固定到浏览器](https://cos.files.maozhishi.com/data/web/web-files/img/1730024513415_d.png)

_图示：点击浏览器右上角的拼图图标，找到插件并点击<span style={{color: '#3578e5'}}>固定</span>图钉。_

这是插件的核心功能，通过设置条件，实现大规模、自动化的商家信息采集。

#### ① 打开主界面 {#open-main-interface}

- 首先，将插件固定在浏览器工具栏中，然后点击插件图标，选择 <span style={{color: '#3578e5'}}>【进入搜索界面】</span>。

![将插件固定到浏览器并打开主界面](https://cos.files.maozhishi.com/data/web/web-files/img/1730025352882_d.png)

_图示：插件主界面分为"搜索条件设置区"和"进度与结果列表区"。_

#### ② 配置搜索任务 {#configure-search-task}

- **关键词**：输入商家在谷歌地图上的 **<span style={{color: '#8e44ad'}}>名称</span>** 或 **<span style={{color: '#8e44ad'}}>行业分类</span>** 中包含的关键词。支持输入后按回车确认，或从下拉推荐中选择。
- **国家/地区**：选择目标国家，然后进一步选择要采集的州省或城市。

:::note[如何选择有效的关键词？]

- **首选分类词**：应使用商家在 **谷歌地图上的官方行业分类**。您可以下载 👉[**谷歌地图官方行业分类完整列表**](https://web-files.laifa.xin/cj-google-maps/cj-google-maps-categories.xlsx) 进行参考。
- **站在客户角度思考**：如果您生产<u><span style={{color: '#e67c00'}}>扳手</span></u>，您应该搜索的目标是<u><span style={{color: '#e67c00'}}>五金店 (Hardware store)</span></u>，而不是<u><span style={{color: '#e67c00'}}>扳手</span></u>。
- **深入研究**：若不确定，请参考 📚[如何利用谷歌地图开发客户](./how-to-use-google-maps-for-customer-development) 中的方法论，研究几个典型目标客户，找到最合适的关键词。
  :::

- **地区选择层级**：
  - **州省**：仅显示国家下的一级行政区。
  - **城市 (默认)**：显示一、二级行政区。
  - **邮编**：显示最精细的邮政编码区域，适用于餐馆等密度极高的行业。

![设置关键词、国家和地区](https://cos.files.maozhishi.com/data/web/web-files/img/1730027407196_d.png)

_图示：配置搜索任务，例如在澳大利亚搜索"dental clinic"。_

#### ③ 监控任务进度 {#monitor-task-progress}

- 配置完成后，点击 <span style={{color: '#3578e5'}}>【搜索】</span> 开始任务。您可以在进度区实时监控任务状态、已用/剩余时间及已采集的结果数量。
- 您可以随时对任务进行 <span style={{color: '#3578e5'}}>【暂停】</span>、<span style={{color: '#3578e5'}}>【继续】</span> 或 <span style={{color: '#3578e5'}}>【停止】</span> 操作。

![任务进度监控](https://cos.files.maozhishi.com/data/web/web-files/img/1730028039380_d.png)

_图示：任务运行中的进度显示界面。_

- **任务状态与操作**：根据任务的当前状态，可用的操作按钮会有所不同。

| 任务状态   | 可用操作                                                                                                                                       | 截图                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **运行中** | <span style={{color: '#3578e5'}}>【暂停】</span>：暂停当前任务。                                                                               | <img src="https://cos.files.maozhishi.com/data/web/web-files/img/20240819022225.png" alt="运行中状态" /> |
| **已暂停** | <span style={{color: '#d93025'}}>【停止】</span>：彻底结束当前任务。<br /><span style={{color: '#3578e5'}}>【继续】</span>：从暂停处继续任务。 | <img src="https://cos.files.maozhishi.com/data/web/web-files/img/20241027192144.png" alt="已暂停状态" /> |

#### ④ 管理商家列表 {#manage-business-list}

- **数据同步与筛选**：
  - **云端同步**：勾选 <span style={{color: '#3578e5'}}>【云端数据同步】</span> (会员功能) 可将数据自动备份至云端。详情请见 📚[云端同步与管理商家](./cloud-synchronize-merchants-and-centralized-data-management)。
  - **视图筛选**：使用 <span style={{color: '#3578e5'}}>【筛选视图】</span> 功能，可以按预设条件自动分类和筛选商家。详情请见 📚[如何快速筛选采集的商家](./how-to-quickly-filter-target-google-maps-businesses)。
- **列表交互与显示**：
  - **搜索商家**：在列表上方的搜索框中输入关键词，可以快速在当前结果中查找特定商家。
  - **显示设置**：点击右上角的设置图标，可以自定义显示的 <span style={{color: '#3578e5'}}>【字段】</span>、列表的 <span style={{color: '#3578e5'}}>【密度】</span> 以及 <span style={{color: '#3578e5'}}>【每页行数】</span>。

#### ⑤ 导出采集结果 {#export-collection-results}

- **导出步骤**：
  - **1. 勾选商家**：在商家列表中，手动勾选您需要导出的数据。
  - **2. 选择数量**：您可以点击表头的复选框进行 <span style={{color: '#3578e5'}}>【全选】</span>，或在 <span style={{color: '#3578e5'}}>【高级】</span> 菜单中自定义选择数量。
  - **3. 确认导出**：点击右侧的 <span style={{color: '#3578e5'}}>【导出】</span> 按钮，并在弹窗中确认信息后，即可将结果保存为 `.csv` 格式的表格文件。您也可以下载 👉[**结果样表**](https://web-files.laifa.xin/cj-google-maps/result.csv) 查看格式。

![管理和导出商家列表](https://cos.files.maozhishi.com/data/web/web-files/img/1730029362788_d.png)

_图示：在商家列表区进行筛选、搜索、勾选并导出数据。_

---

## 三、高级功能与设置 {#advanced-features-and-settings}

### 1. 运行设置 {#runtime-settings}

- 在设置菜单中，您可以调整多项参数以优化采集性能：
  - **滚动延迟**：网络状况好可适当调低此值（如<u><span style={{color: '#e67c00'}}>0.1s</span></u>）以加速。
  - **超时时间**：网络状况差可适当调高此值（如<u><span style={{color: '#e67c00'}}>60s</span></u>）以防跳过页面。
  - **去重选项**：建议勾选 <span style={{color: '#3578e5'}}>【删除重复项】</span> (基于Place ID)，其他去重选项请根据需求谨慎使用。

![运行参数设置界面](https://cos.files.maozhishi.com/data/web/web-files/img/20241027194817.png)

_图示：插件的详细运行参数设置。_

---

## 四、账号福利与推广 {#account-benefits-and-promotions}

### 1. 新手礼包领取 {#newbie-gift-and-trial}

- **登录账号**：点击插件右上角的 <span style={{color: '#3578e5'}}>【立即登录】</span>，按照提示完成注册和登录。

![用户登录界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240818221653.png)
_图示：点击"立即登录"以注册或登录账号。_

- **自动领取时长**：新注册用户完成首次登录后，系统会自动赠送 **<span style={{color: '#e67c00'}}>3天试用时长</span>**。

![成功领取试用时长](https://cos.files.maozhishi.com/data/web/web-files/img/20240818221752.png)
_图示：新用户将自动获得3天试用。_

### 2. 兑换使用时长 {#redeem-duration}

- 您可以通过联系客服或参与活动获取兑换码。在插件头像菜单中点击 <span style={{color: '#3578e5'}}>【兑换码】</span>，输入有效的兑换码即可增加您的使用时长。

![输入兑换码以增加使用时长](https://cos.files.maozhishi.com/data/web/web-files/img/1730194309805_d.png)

_图示：在指定窗口输入兑换码。_

### 3. 获取推广奖励 {#promotion-rewards}

- 在头像菜单中点击 <span style={{color: '#3578e5'}}>【邀请有礼】</span>，即可获取您的专属推广包。
- **邀请福利**：每成功邀请一位好友，您将获得 **<span style={{color: '#e67c00'}}>3天时长</span>** 奖励；若好友付费，您还将获得其消费金额的 **<span style={{color: '#e67c00'}}>20%作为佣金</span>**。详情请见 📚[邀请好友福利说明](./what-are-the-benefits-of-inviting-friends-to-use-the-google-maps-plugin)。

![邀请有礼界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240819031624.png)

_图示：推广奖励界面，可获取专属推广包。_

---

## 五、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么搜索出的商家大部分都不相关？**

  > - 答：这通常是 **<span style={{color: '#8e44ad'}}>关键词选择不当</span>** 导致的。请确保您使用的是谷歌地图官方的行业分类词，而不是来自其他平台或自己设想的词语。建议先投入时间研究目标客户在地图上的确切用词。

- **❓ 采集速度很慢怎么办？**

  > - 答：首先，确保浏览器窗口没有被最小化。其次，可以尝试在 <span style={{color: '#3578e5'}}>【运行设置】</span> 中降低 <span style={{color: '#3578e5'}}>【滚动延迟】</span>。如果需要大幅提升效率，可以 📚[开启多个采集窗口](./how-to-multi-open-google-maps-plugin) 同时执行不同任务。

- **❓ 采集到的数据安全吗？会丢失吗？**
  > - 答：数据默认存储在本地浏览器中，有丢失风险。强烈建议开启 <span style={{color: '#3578e5'}}>【云端数据同步】</span> 功能，将数据安全地备份到云端服务器，随时随地访问。

### 学习建议 {#learning-proposal}

- 🎯 **先规划，后采集**：不要立即开始大规模采集。先花10分钟研究您的行业，确定3-5个核心的、准确的分类关键词，这将事半功倍。
- 🔄 **迭代优化**：将首次采集到的结果视为样本，从中发现更多相关的分类和关键词，再用这些新词进行下一轮采集，不断优化您的搜索策略。
- ⚙️ **熟悉设置**：花几分钟了解 <span style={{color: '#3578e5'}}>【运行设置】</span> 中的每个选项，根据您的网络环境和采集需求进行微调，可以显著提升采集体验。

### 相关阅读 {#related-reading}

- 📚 [插件安装指南](./how-to-install-google-maps-plugin) - 从这里开始，确保插件已正确安装。
- 📚 [谷歌地图客户开发方法论](./how-to-use-google-maps-for-customer-development) - 学习如何科学地分析客户，找到最有效的**<span style={{color: '#8e44ad'}}>搜索关键词</span>**。
- 📚 [插件使用常见问题解答](./google-maps-plugin-faq) - 更多问题和解决方案的集合。

---

🔗 **本文永久链接：** https://laifa.xin/chajian/how-to-use-google-maps-plugin
