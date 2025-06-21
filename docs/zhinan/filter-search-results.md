---
id: filter-search-results
title: 筛选搜索结果
description: 通过视图功能快速筛选客户，累积条件，实现高效筛选目标客户。
tags: ['客户筛选', '搜索结果', '数据视图', '外贸工具', '销售线索', '高效筛选']
keywords:
  [
    '视图筛选',
    '搜索任务',
    '客户数据筛选',
    '排除大公司',
    '筛选条件设置',
    '来发信功能',
    '目标客户定位',
  ]
---

# 筛选搜索结果

> - 视图可帮你在搜索任务结束后，快速筛选客户，并且可以不断累积条件，让筛选愈加高效。
> - **功能入口**：[**<span style={{color: '#3578e5'}}>【批量搜客任务】</span>**](https://web.laifaxin.com/search/tasks)
> - **高阶应用**：👉 📚[高效筛选篇](./efficient-filtering-section)

:::warning 👉 友情提示！

- **要排除大型公司**：大型公司只适合精准开发，如果你是批量开发，建议针对中小客户。
- **如何排除大公司**：<u><span style={{color: '#e67c00'}}>员工数</span></u>、<u><span style={{color: '#e67c00'}}>潜客邮箱数</span></u>建议限制小于<u><span style={{color: '#e67c00'}}>100</span></u>.
- 🔔 大公司保存太多邮箱，一方面会造成浪费，另外，也会导致拦截严重。
  :::

- **典型案例**：32家客户却有8,399,237个邮箱，说明有关联超大型的公司。👉 解决方案参见[排除异常数据](#exclude-abnormal-data)

[![关联超大型公司导致邮箱数量异常](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163109.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163109.png)

_图示：少数客户关联了大量邮箱，表明数据中可能包含超大型公司。_

## 一、查看搜索结果 {#view-search-results}

- 📚[**批量搜客任务**](https://web.laifaxin.com/search/tasks)：创建的搜客任务在此处查看。
- **查看任务结果**：任务完成后，点击<span style={{color: '#3578e5'}}>【结果】</span>进入查看任务结果

[![查看批量搜客任务结果](https://cos.files.maozhishi.com/data/web/web-files/img/20240923102410.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923102410.png)

_图示：在批量搜客任务页面点击"结果"按钮查看已完成的任务。_

- **任务结果预览**：在结果中可以查看搜索到的客户信息，如<u><span style={{color: '#e67c00'}}>名称</span></u>、<u><span style={{color: '#e67c00'}}>国家</span></u>、<u><span style={{color: '#e67c00'}}>社媒</span></u>、<u><span style={{color: '#e67c00'}}>官网</span></u>、<u><span style={{color: '#e67c00'}}>行业</span></u>、<u><span style={{color: '#e67c00'}}>网站页面数</span></u>、<u><span style={{color: '#e67c00'}}>网站标题</span></u>、<u><span style={{color: '#e67c00'}}>网站描述</span></u>、<u><span style={{color: '#e67c00'}}>公司简介</span></u>

[![任务结果预览](https://cos.files.maozhishi.com/data/web/web-files/img/20240923110015.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923110015.png)

_图示：任务结果页面展示了搜索到的客户详细信息列表。_

## 二、视图筛选客户 {#view-filter-customers}

### 1. 新建视图 {#new-view}

- 进入任务后，点击<span style={{color: '#3578e5'}}>【创建新视图】</span>，输入<u><span style={{color: '#e67c00'}}>视图名称</span></u>，点击<span style={{color: '#3578e5'}}>【提交】</span>完成创建。

[![创建新视图](https://cos.files.maozhishi.com/data/web/web-files/img/20240923112846.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923112846.png)

_图示：在任务结果页面创建新的筛选视图。_

### 2. 常用设置 {#common-settings}

- 点击<span style={{color: '#3578e5'}}>⚙️齿轮</span>图标，可打开视图的常用设置

[![打开视图常用设置](https://cos.files.maozhishi.com/data/web/web-files/img/20240923142225.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923142225.png)

_图示：点击齿轮图标访问视图的设置选项。_

- 我们可以看到有四个功能按钮：<span style={{color: '#3578e5'}}>【设置默认】</span>、<span style={{color: '#3578e5'}}>【取消固定】</span>、<span style={{color: '#3578e5'}}>【重命名】</span>、<span style={{color: '#3578e5'}}>【删除视图】</span>

[![视图常用设置功能按钮](https://cos.files.maozhishi.com/data/web/web-files/img/20240923142310.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923142310.png)

_图示：视图设置菜单中的四个主要功能按钮。_

- **功能说明**：
  - **1️⃣ 设为默认**：进入任务时，默认进入该视图。
    > - 可以看到该视图前多了一个标识，且默认打开该视图，而不是"所有联系人"。
    >
    >   [![默认视图标识](https://cos.files.maozhishi.com/data/web/web-files/img/20240923143534.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923143534.png)
    >
    >   _图示：视图被设为默认后，前方会显示特殊标识。_
  - **2️⃣ 取消固定**：取消固定后视图将从当前栏中消失。
  - **3️⃣ 重命名**：修改这个视图的名字。
  - **4️⃣ 删除视图**：删除当前的这个视图。

### 3. 条件设置 {#condition-settings}

- **1️⃣ 选择视图**：进入你要设置条件的视图
- **2️⃣ 点击筛选**：点击左上角的<span style={{color: '#3578e5'}}>【筛选】</span>，开始设置条件
- **3️⃣ 新增条件**：点击<span style={{color: '#3578e5'}}>【新增筛选条件】</span>开始新增条件

[![新增筛选条件](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150138.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150138.png)

_图示：通过"筛选"按钮来新增筛选条件。_

- **4️⃣ 选择字段**：选择你要设置条件的字段，如<u><span style={{color: '#e67c00'}}>国家/地区</span></u>
- **5️⃣ 设置条件**：按照你的需要设置条件，如你想排除<u><span style={{color: '#e67c00'}}>中国</span></u>的公司，可以按照下图设置
- **6️⃣ 预览条件**：点击确定后，可以看到生效的条件

[![设置并预览筛选条件](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150545.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150545.png)

_图示：设置排除特定国家的筛选条件。_

- **7️⃣ 固定条件**：如果你想条件长期使用，需要点击视图上的<span style={{color: '#3578e5'}}>【保存】</span>

[![保存筛选条件](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150730.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923150730.png)

_图示：点击"保存"以永久固定筛选条件到当前视图。_

### 4. 筛选逻辑 {#screening-logic}

- **筛选逻辑**：条件之间的逻辑关系

[![筛选逻辑关系图](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164736.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164736.png)

_图示："并且"与"或者"的筛选逻辑关系示意图。_

- **1️⃣ "并且"的关系**
  - **关系为<u><span style={{color: '#e67c00'}}>并且</span></u>**：只有**符合所有的条件才会匹配**
- **2️⃣ "或者"的关系**
  - **关系为<u><span style={{color: '#e67c00'}}>或者</span></u>**：只要**符合任一的条件都会匹配**

## 三、筛选条件示例 {#filtering-conditions-example}

### 1. 排除特定地区 {#exclude-specific-areas}

- **完整教程** 👉 📚[❌ 1️⃣ 排除特定地区](./efficient-filtering-section#exclude-specific-regions)
- 排除<u><span style={{color: '#e67c00'}}>中国</span></u>、<u><span style={{color: '#e67c00'}}>中国香港</span></u>、<u><span style={{color: '#e67c00'}}>中国台湾</span></u>、<u><span style={{color: '#e67c00'}}>中国澳门</span></u>、<u><span style={{color: '#e67c00'}}>印度</span></u>

[![排除特定地区的筛选设置](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164145.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164145.png)

_图示：筛选条件配置，用于排除多个指定国家或地区。_

### 2. 排除特定网站 {#exclude-specific-websites}

- <u><span style={{color: '#e67c00'}}>网站标题</span></u>和<u><span style={{color: '#e67c00'}}>网站描述</span></u>不包含以下关键词，详解见 👉 📚[❌ 2⃣ 排除特定网站](./efficient-filtering-section#exclude-specific-websites)

```
news;videos;blog;B2B Database;business data;B2B data;digital marketing;trade databases;global trade;
```

[![排除特定网站的筛选设置](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164557.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20240923164557.png)

_图示：配置筛选条件，以在网站标题和描述中排除特定关键词。_

### 3. 排除异常数据 {#exclude-abnormal-data}

- **1️⃣ 发现问题**：
  > - **问题描述** ：**1,922**家公司，却有<u><span style={{color: '#e67c00'}}>11,955,618</span></u>个邮箱，说明结果命中了许多超大型的公司

[![邮箱数量异常的数据](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163549.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163549.png)

_图示：少数公司关联了极大量的邮箱，提示存在异常数据。_

> - **定位问题**：我们进入结果，通过<u><span style={{color: '#e67c00'}}>潜客邮箱</span></u>或<u><span style={{color: '#e67c00'}}>官网邮箱</span></u>进行排序。

[![通过邮箱数量排序定位问题](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163930.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20241023163930.png)

_图示：通过对邮箱数量进行降序排序，可以快速定位到异常公司。_

- **2️⃣ 分析问题**：由于有些网站的邮箱过多导致，这些网站我们批量营销是没有意义的
  > - 👉 **解决方案**：我们限制<u><span style={{color: '#e67c00'}}>官网邮箱数</span></u>以及<u><span style={{color: '#e67c00'}}>潜客邮箱数</span></u>都在<u><span style={{color: '#e67c00'}}>100</span></u>以内 .
- **3️⃣ 筛选设置**：点击左上角<span style={{color: '#3578e5'}}>【筛选】</span>，设置条件为：<u><span style={{color: '#e67c00'}}>官网邮箱数</span></u>以及<u><span style={{color: '#e67c00'}}>潜客邮箱数</span></u>皆小于<u><span style={{color: '#e67c00'}}>100</span></u> .
  > - 👉 **注意事项**：条件之间是"并且"的关系，且视图最好是<u><span style={{color: '#e67c00'}}>另存为</span></u>新视图，便于后续使用。

[![设置邮箱数量上限的筛选条件](https://cos.files.maozhishi.com/data/web/web-files/img/20241023164415.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20241023164415.png)

_图示：将官网邮箱数和潜客邮箱数都限制在100以内。_

> - **检查条件**：对邮箱进行排序，确认条件是否生效

[![检查条件是否生效](https://cos.files.maozhishi.com/data/web/web-files/img/20241023164611.png)](https://cos.files.maozhishi.com/data/web/web-files/img/20241023164611.png)

_图示：再次排序检查，确认邮箱数大于100的公司已被成功排除。_

:::tip

- **请注意**：
- 1️⃣ **条件累计**：如果你已经有其他常用视图，请把以上条件加到你的常用视图中。
- 2️⃣ **限制数量**：<u><span style={{color: '#e67c00'}}>100</span></u>只是演示数值，你可以设置<u><span style={{color: '#e67c00'}}>200</span></u>或<u><span style={{color: '#e67c00'}}>50</span></u>，根据自身情况而定。
  :::

### 4. 更多筛选示例 {#more-filtering-examples}

- **更多示例** 👉 📚[客户筛选篇](./efficient-filtering-section)

:::warning 👉 筛选目标

- 通过以上筛选，确保<u><span style={{color: '#e67c00'}}>目标客户准确度在70%</span></u>以上，接下来👉 📚[保存这些客户的邮箱](./save-customer-emails)
  :::

---

## 四、拓展与资源 {#extension-and-resources}

### 1. 常见问题 {#faq}

- **❓ 为什么我设置了排除中国的条件，但结果里还是有中国公司？**

  > - 答：请检查您的筛选逻辑。如果您使用了"或者"逻辑，同时又包含了其他允许所有国家的条件，那么中国公司可能依然会因为满足其他条件而被显示。确保排除条件在"并且"逻辑组中，或者单独作为一个必须满足的排除规则。

- **❓ 我可以保存多少个视图？**
  > - 答：您可以创建并保存多个视图，以便在不同的搜索任务和筛选场景中快速切换。我们建议为每一种常用的筛选逻辑组合创建一个独立的视图，并使用清晰的名称进行标记。

### 2. 学习建议 {#learning-suggestions}

- **迭代优化**：筛选不是一次性的操作。建议从一个基础视图开始，根据每次搜索结果的质量，不断增加或调整筛选条件，逐步优化您的客户筛选模型。
- **定期审查**：定期回顾您保存的视图，特别是默认视图。随着您对市场和客户的理解加深，旧的筛选条件可能需要更新，以确保始终能高效地定位到最精准的客户群体。
- **结合排除与包含**：高效的筛选是"排除法"和"包含法"的结合。在排除无效信息（如特定地区、垃圾网站）的同时，也要积极使用"包含"条件来锁定具有明确特征的优质客户（如包含特定行业词、特定技术词的客户）。

### 3. 相关阅读 {#related-reading}

- 📚[**《高效筛选篇》**](./efficient-filtering-section)：深入学习更高级、更复杂的筛选技巧和策略，最大化您的客户定位效率。
- 📚[**《保存客户邮箱》**](./save-customer-emails)：学习如何在筛选出目标客户后，将他们的邮箱地址有效地保存到系统中，为下一步的邮件营销做准备。
- 📚[**《批量搜客任务》**](./bulk-search-task)：了解如何从零开始创建一个批量搜客任务，这是所有筛选工作的前提和基础。

---

🔗 **本文永久链接：** https://laifa.xin/zhinan/filter-search-results

<!--@include: ../parts/document-signature.md-->
