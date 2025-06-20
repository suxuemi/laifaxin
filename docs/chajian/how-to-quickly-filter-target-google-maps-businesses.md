---
id: how-to-quickly-filter-target-google-maps-businesses
title: '✨ 如何快速筛选谷歌地图上批量采集到的商家？'
description: 本文介绍如何通过云端同步管理本地采集到的谷歌地图商家列表，创建视图并设置条件，快速筛选出目标谷歌地图商家。通过示例演示，您将学会按国家、州省等条件筛选商家，提高效率，精准找到您的目标客户。
tags: [谷歌地图, 商家筛选, 数据筛选, 视图管理, 客户开发]
keywords: [谷歌地图, 数据筛选, 商家筛选, 视图, 客户管理, laifaxin, 云端同步]
---

# ✨ 如何快速筛选谷歌地图采集的商家？

通过 📚[云端同步与管理商家](./cloud-synchronize-merchants-and-centralized-data-management)，您可以将插件采集的商家数据同步到云端进行集中管理。但采集到的商家，**不一定都是您的目标**❗️ 因此，在执行后续操作前，进行高效筛选至关重要。

- **查看入口**：👉 [**<span style={{color: '#e67c00'}}>谷歌地图搜客</span>**](https://web.laifaxin.com/search/google-map)
- **登录提示**：请确保使用与插件相同的账号登录。

---

## 一、创建筛选视图 {#create-filter-view}

**<span style={{color: '#8e44ad'}}>视图 (View)</span>** 是一个强大的动态筛选器。您可以创建一个视图，并为其定义一套筛选规则。后续所有采集到的商家，只要符合该规则，都会被 **<span style={{color: '#8e44ad'}}>自动归类</span>** 到此视图中。

:::tip
我们以创建一个名为"美国-美容用品店"的视图为例，用于筛选分类为 <u><span style={{color: '#e67c00'}}>Beauty supply store</span></u> 的商家。
:::

- **步骤**：在 👉 [**<span style={{color: '#e67c00'}}>谷歌地图搜客</span>**](https://web.laifaxin.com/search/google-map) 页面右上角，点击 <span style={{color: '#3578e5'}}>【创建新视图】</span>，输入视图名称并提交。

![创建新视图](https://cos.files.maozhishi.com/data/web/web-files/img/1728560050033_d.png)

_图示：输入视图名称"美国-美容用品店"并创建。_

- **视图操作**：将鼠标悬停在视图上，可进行 <span style={{color: '#3578e5'}}>【设为默认】</span>、<span style={{color: '#3578e5'}}>【取消固定】</span>、<span style={{color: '#3578e5'}}>【重命名】</span> 及 <span style={{color: '#3578e5'}}>【删除】</span> 等操作。

![管理已创建的视图](https://cos.files.maozhishi.com/data/web/web-files/img/20241010202551.png)

_图示：视图的各项管理操作。_

---

## 二、配置筛选条件 {#set-filter-criteria}

:::tip
以下教程演示如何为视图关联 **<span style={{color: '#8e44ad'}}>分类</span>** 为 <u><span style={{color: '#e67c00'}}>Beauty supply store</span></u> 的商家。
:::

- 1️⃣ 切换到目标视图，此时 <span style={{color: '#3578e5'}}>【筛选】</span> 按钮上没有数字，表示条件为空。

![条件为空的视图](https://cos.files.maozhishi.com/data/web/web-files/img/1728560120485_d.png)

_图示：视图的初始状态，未设置任何筛选条件。_

- 2️⃣ 点击 <span style={{color: '#3578e5'}}>【筛选】</span>，在右侧弹出的窗口中点击 <span style={{color: '#3578e5'}}>【新增筛选条件】</span>。

![进入条件设置流程](https://cos.files.maozhishi.com/data/web/web-files/img/1728560179577_d.png)

_图示：准备为视图添加筛选规则。_

- 3️⃣ **设置筛选规则**：
    - **选择字段**：选择 <span style={{color: '#3578e5'}}>【分类】</span>。
    - **设置条件**：选择 <span style={{color: '#3578e5'}}>【包含】</span>。
    - **输入关键词**：输入 <u><span style={{color: '#e67c00'}}>Beauty supply store</span></u>，然后点击 <span style={{color: '#3578e5'}}>【确定】</span>。

![三个步骤完成设置](https://cos.files.maozhishi.com/data/web/web-files/img/20241010194351.png)

_图示：设置规则为"分类"字段"包含"关键词"Beauty supply store"。_

- 4️⃣ **查看结果**：设置完成后，视图自动从 **<span style={{color: '#8e44ad'}}>40,683</span>** 个总商家中，筛选出了 **<span style={{color: '#8e44ad'}}>342</span>** 个符合条件的商家。

![查看筛选结果](https://cos.files.maozhishi.com/data/web/web-files/img/1728560775045_d.png)

_图示：视图已成功筛选出所有匹配的商家，并自动更新了计数。_

---

## 三、更多筛选案例 {#more-filter-examples}

### 1. 按国家或州省筛选 {#filter-by-country-or-state}

- **案例**：筛选出 **<span style={{color: '#8e44ad'}}>国家</span>** 为 <u><span style={{color: '#e67c00'}}>美国</span></u> 或 **<span style={{color: '#8e44ad'}}>州省</span>** 为 <u><span style={{color: '#e67c00'}}>加利福尼亚州</span></u> 的商家。

![按国家筛选](https://cos.files.maozhishi.com/data/web/web-files/img/20241010205240.png)

_图示：设置筛选条件为"国家"等于"美国"。_

![按州省筛选](https://cos.files.maozhishi.com/data/web/web-files/img/20241010205423.png)

_图示：设置筛选条件为"州省"等于"加利福尼亚州"。_

### 2. 按分类或名称筛选 {#filter-by-category-or-name}

- **案例**：筛选出 **<span style={{color: '#8e44ad'}}>分类</span>** 或 **<span style={{color: '#8e44ad'}}>名称</span>** 中包含 <u><span style={{color: '#e67c00'}}>hair</span></u> 或 <u><span style={{color: '#e67c00'}}>beauty</span></u> 的商家。

![按分类关键词筛选](https://cos.files.maozhishi.com/data/web/web-files/img/20241010205933.png)

_图示：设置筛选条件为"分类"包含"hair"或"beauty"。_

![按名称关键词筛选](https://cos.files.maozhishi.com/data/web/web-files/img/20241010210318.png)

_图示：设置筛选条件为"名称"包含"hair"或"beauty"。_

### 3. 按采集时间筛选 {#filter-by-time}

- **案例**：只查看 **<span style={{color: '#8e44ad'}}>最近1天内</span>** 新采集到的商家。

![按创建时间筛选](https://cos.files.maozhishi.com/data/web/web-files/img/20241011104054.png)

_图示：设置筛选条件为"创建时间"在"1"天之内。_

:::note[💡 如何验证时间筛选是否正确？]
在结果列表中，您可以拖动表格横向滚动条，找到 <span style={{color: '#3578e5'}}>【创建时间】</span> 列进行核对，以确保其与您的设置相符。
:::

---

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题

- **❓ 筛选和搜索有什么区别？**
> - 答：**<span style={{color: '#8e44ad'}}>搜索</span>** 是一个一次性的动作，用于在 **<span style={{color: '#8e44ad'}}>当前所有数据</span>** 中查找。而 **<span style={{color: '#8e44ad'}}>视图筛选</span>** 是一个 **<span style={{color: '#8e44ad'}}>持续生效的规则</span>**，它不仅会筛选现有数据，还会自动归类未来新增的、符合规则的数据。

- **❓ 我可以组合多个条件吗？**
> - 答：可以。您可以添加多个筛选条件，并设置它们之间的逻辑关系（<span style={{color: '#3578e5'}}>【并且】</span> / <span style={{color: '#3578e5'}}>【或者】</span>），以构建非常精确的目标客户画像。例如，筛选出"美国的"并且"分类包含 restaurant"的商家。

### 学习建议

- 1️⃣ **从简单开始**：先从单个条件的视图开始，熟悉操作。例如，为您的主要目标国家或核心产品分类创建一个专属视图。
- 2️⃣ **善用逻辑关系**：当您需要更精细的定位时，尝试组合使用条件。<u><span style={{color: '#e67c00'}}>并且 (AND)</span></u> 会缩小范围，<u><span style={{color: '#e67c00'}}>或者 (OR)</span></u> 会扩大范围。
- 3️⃣ **定期审视视图**：随着业务的拓展，您可能需要调整或创建新的视图。定期检查您的视图设置，确保它们仍然符合您当前的市场策略。

### 相关阅读

- 📚 [欢迎使用谷歌地图插件](./google-maps-plugin-welcome) - 了解插件的基础功能和核心价值。
- 📚 [云端同步与管理地图商家](./cloud-synchronize-merchants-and-centralized-data-management) - 学习如何将本地采集的数据同步到云端，这是使用视图筛选功能的前提。
- 📚 [如何利用谷歌地图提取邮箱？](./how-to-extract-email-from-google-maps) - 学习在筛选出目标商家后，如何进一步 **<span style={{color: '#8e44ad'}}>提取他们的邮箱</span>**。

---

🔗 **本文永久链接：** https://laifa.xin/chajian/how-to-quickly-filter-target-google-maps-businesses

<!--@include: ../parts/document-signature.md-->





