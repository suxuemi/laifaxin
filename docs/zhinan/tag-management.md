---
title: 🌟 标签管理
description: 本文介绍了如何在系统中进行联系人标签与公司标签的管理，包括新建与编辑标签、标签与分组关系等内容。通过学习本文，您可以快速了解标签的应用，提升管理效率，更好地组织和分类联系人及公司信息。
id: tag-management
tags: [标签管理, 联系人管理, 公司管理, 数据组织]
keywords: [标签管理, 联系人标签, 公司标签, 标签分组, 客户管理, CRM, 数据分类]
---

# 🌟 标签管理

- **系统入口**：<span style={{color: '#3578e5'}}>【设置】</span> > <span style={{color: '#3578e5'}}>【标签管理】</span>
- **功能说明**：标签分为<u><span style={{color: '#e67c00'}}>联系人标签</span></u>与<u><span style={{color: '#e67c00'}}>公司标签</span></u>，分别对应管理 📚[联系人](./manage-contacts)与公司。
  - 👉 通过 📚[联系人视图与标签](./contacts-tags-views) 快速了解标签的应用。
- **界面预览**：标签管理界面预览

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028212111.png)

_图示：标签管理界面，展示了联系人标签和公司标签的目录结构。_

## 一、新建与编辑标签/分组 {#create-and-edit}

### 1. 新建/编辑标签 {#tags}

- **操作指南**：
  - **新建标签**：点击界面右上角的<span style={{color: '#3578e5'}}>【+ 标签】</span>开始新建。
  - **编辑标签**：点击已有标签右侧的 **编辑图标** 即可修改。
  - **标签信息**：
    - <span style={{color: '#3578e5'}}>标签名称</span>：输入标签的名称。
    - <span style={{color: '#3578e5'}}>标签目录</span>：选择所属的标签目录（文件夹）。
    - <span style={{color: '#3578e5'}}>标签颜色</span>：为标签设置背景色，方便快速识别。
    - <span style={{color: '#3578e5'}}>标签备注</span>：仅管理员可见的内部备注。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028212724.png)

_图示：新建或编辑标签时，填写名称、选择目录、颜色并添加备注。_

### 2. 新建/编辑分组 {#grouping}

- **核心概念**：
  - **<span style={{color: '#8e44ad'}}>**标签 (Tag)**</span>**：直接应用于 **联系人** 或 **公司** 的标记。
  - **<span style={{color: '#8e44ad'}}>**分组 (Group)**</span>**：即标签的文件夹/目录，用于组织和管理大量标签。
- **操作指南**：
  - **新建分组**：点击<span style={{color: '#3578e5'}}>【+ 目录】</span>按钮创建新的标签分组。
  - <span style={{color: '#3578e5'}}>目录名称</span>：输入分组的名称。
  - <span style={{color: '#3578e5'}}>目录备注</span>：为分组添加内部备注。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028213245.png)

_图示：创建标签分组（目录）以更好地组织标签。_

### 3. 公司标签 {#company}

- <u><span style={{color: '#e67c00'}}>公司标签</span></u> 的所有管理操作（新建、编辑、删除、分组）与联系人标签完全一致，只需切换到<span style={{color: '#3578e5'}}>【公司标签】</span>选项卡即可。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028220352.png)

_图示：在"公司标签"选项卡下管理公司相关的标签。_

## 二、常用操作 {#common-operations}

### 1. 搜索 {#search}

- **功能**：在搜索框中输入关键词，快速查找特定的标签或分组。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028214519.png)

_图示：使用搜索功能快速定位标签或分组。_

### 2. 统计 {#statistics}

- **功能**：点击右上角的<span style={{color: '#3578e5'}}>【统计】</span>按钮，系统将计算并显示每个标签或分组下包含的联系人/公司数量。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028214751.png)

_图示：标签统计功能，显示每个标签下的联系人数量。_

### 3. 删除 {#delete}

- **删除标签**：点击标签右侧的<span style={{color: '#3578e5'}}>【删除】</span>图标即可。
- ⚠️ **重要提示**：删除标签本身 **不会** 删除该标签下的联系人或公司数据。

![](https://cos.files.maozhishi.com/data/web/web-files/img/20241028215628.png)

_图示：删除标签的操作提示。_

---

## 三、拓展与资源 {#expansion-and-resources}

### 1. 常见问题 {#faq}

- **❓ 标签和分组有什么区别？**

  > - 答：**<span style={{color: '#8e44ad'}}>**标签**</span>** 是直接附加到联系人或公司上的属性，用于分类。**<span style={{color: '#8e44ad'}}>**分组**</span>** 是标签的"文件夹"，用于组织和管理标签本身，使标签结构更清晰。

- **❓ 我删除了一个标签，为什么被打上该标签的联系人还在？**

  > - 答：删除标签只是移除了这个分类标记，并不会影响联系人或公司记录本身。这是一个安全设置，防止误删客户数据。

- **❓ 我可以给一个联系人打上多个标签吗？**
  > - 答：可以。一个联系人或公司可以同时拥有多个标签，以便于从不同维度进行交叉筛选和管理。

### 2. 学习建议 {#learning-suggestions}

- 1️⃣ **规划标签体系**：在大量使用前，先规划好您的标签体系。可以按<u><span style={{color: '#e67c00'}}>客户来源</span></u>、<u><span style={{color: '#e67c00'}}>客户阶段</span></u>、<u><span style={{color: '#e67c00'}}>产品兴趣</span></u>等维度建立分组，再在分组下创建具体标签。
- 2️⃣ **颜色区分优先级**：善用标签颜色功能。例如，用红色标记<u><span style={{color: '#d93025'}}>高优先级客户</span></u>，用绿色标记<u><span style={{color: '#e67c00'}}>已成交客户</span></u>，一目了然。
- 3️⃣ **结合视图使用**：标签的最大威力在于和 📚[联系人视图](./contacts-tags-views) 结合。创建一个视图，筛选条件设置为"标签包含'重点客户'"，即可动态查看所有重点客户。

### 3. 相关阅读 {#related-reading}

- 📚 [联系人视图与标签](./contacts-tags-views)

  > 学习如何创建视图并利用标签作为筛选条件，实现动态客户分群管理。

- 📚 [管理联系人](./manage-contacts)

  > 了解如何在联系人详情页为其添加或移除标签。

- 📚 [自定义字段](./customer-fields)
  > 除了标签，自定义字段是另一个强大的数据组织工具。了解何时使用标签，何时使用自定义字段。

---

🔗 **本文永久链接：** https://laifa.xin/zhinan/tag-management
