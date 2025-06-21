---
id: manage-contacts
title: ✨ 管理联系人
description: 本文详细介绍了如何通过来发信平台管理联系人，包括联系人的导入、管理、跟进、营销、数据分析和团队协作等功能。
tags: [联系人管理, CRM, 客户关系, 邮件营销, B2B]
keywords: [联系人, 客户管理, CRM, 标签, 视图, 邮件群发, 数据分析, 团队协作]
---

# ✨ 管理联系人

通过 **<span style={{color: '#8e44ad'}}>管理联系人</span>** 功能，您可以轻松驾驭百万级别的客户数据，全面满足 **<span style={{color: '#8e44ad'}}>管理与跟进</span>**、**<span style={{color: '#8e44ad'}}>发送与营销</span>**、**<span style={{color: '#8e44ad'}}>数据分析</span>**、**<span style={{color: '#8e44ad'}}>团队协作</span>** 等多元化业务需求。

> **功能入口**：[https://web.laifaxin.com/contacts/contacts](https://web.laifaxin.com/contacts/contacts)

:::tip

- **重要提醒**：
  - 1️⃣ 开始之前，建议先了解 📚[**标签与视图**](./contacts-tags-views)，它将帮助您有序地管理海量客户。
  - 2️⃣ 联系人依赖外部导入或搜客保存，请参照 📚[**客户搜索**](./customer-search) 与 📚[**添加联系人**](./add-contacts)。
  - 3️⃣ 想要 **营销您的客户**，请参照 📚[**邮件群发**](./email-mass-sending)。
    :::

## 一、界面概览 {#interface-preview}

### 1. 默认视图（选择联系人前） {#default-view}

- 1️⃣ **选择区域**：勾选以选择希望管理的联系人。
- 2️⃣ **筛选与搜索**：通过 <span style={{color: '#3578e5'}}>邮箱验证结果</span> 和 <span style={{color: '#3578e5'}}>联系人标签</span> 进行筛选，或通过关键词搜索联系人。
- 3️⃣ **功能区域**：包含 <span style={{color: '#3578e5'}}>【新建联系人】</span>、<span style={{color: '#3578e5'}}>【导入联系人】</span>、<span style={{color: '#3578e5'}}>【群发邮件】</span>、<span style={{color: '#3578e5'}}>【验证邮箱】</span>、<span style={{color: '#3578e5'}}>【导出联系人】</span>、<span style={{color: '#3578e5'}}>【刷新数据】</span>、<span style={{color: '#3578e5'}}>【字段设置】</span> 等核心操作。
- 4️⃣ **视图区域**：创建与设置 📚[联系人视图](./contacts-tags-views)。
- 5️⃣ **翻页与显示**：设置页面显示数量，或跳转至指定页面。

![联系人管理界面的默认视图，展示了主要功能区域和筛选选项](https://cos.files.maozhishi.com/data/web/web-files/img/20240710213358.png)

_图示：联系人管理界面的默认视图，展示了主要功能区域和筛选选项。_

### 2. 操作视图（选择联系人后） {#action-view}

- 1️⃣ **选择区域**：勾选后，可执行 <span style={{color: '#3578e5'}}>【全选】</span>、<span style={{color: '#3578e5'}}>【高级选择】</span> 或 <span style={{color: '#3578e5'}}>【取消】</span> 操作。
- 2️⃣ **功能区域**：可执行 <span style={{color: '#3578e5'}}>【验证】</span>、<span style={{color: '#3578e5'}}>【发送】</span>、<span style={{color: '#3578e5'}}>【群发】</span>、<span style={{color: '#3578e5'}}>【修改】</span>、<span style={{color: '#3578e5'}}>【标签】</span>、<span style={{color: '#3578e5'}}>【黑名单】</span>、<span style={{color: '#3578e5'}}>【删除】</span>、<span style={{color: '#3578e5'}}>【导出】</span> 等批量操作。

![选择联系人后，界面顶部出现批量操作功能栏](https://cos.files.maozhishi.com/data/web/web-files/img/20240710214005.png)

_图示：选择联系人后，界面顶部出现批量操作功能栏。_

## 二、功能演示视频 {#demo-videos}

### 1. 查看与编辑联系人 {#view-edit-contacts-video}

<video src='https://cos.files.maozhishi.com/data/web/web-files/mp4/gllxr-ckbj.mp4' controls></video>

_图示：视频演示如何查看和编辑单个联系人的详细信息。_

### 2. 批量管理联系人 {#batch-manage-contacts-video}

<video src='https://cos.files.maozhishi.com/data/web/web-files/mp4/gllxr-plgl.mp4' controls></video>

_图示：视频演示如何筛选并批量操作多个联系人。_

## 三、显示与布局设置 {#display-settings}

### 1. 自定义显示字段 {#field-display}

- 1️⃣ **字段设置**：点击界面右上角的 <span style={{color: '#3578e5'}}>【字段设置】</span> 按钮。
- 2️⃣ **勾选显示**：在弹窗中勾选希望在列表中显示的字段。
- 3️⃣ **拖动排序**：按住字段前的拖动锚点（六个点），上下拖动以调整其显示顺序。

![通过“字段设置”弹窗，勾选并拖拽排序来决定联系人列表的显示列](https://cos.files.maozhishi.com/data/web/web-files/img/20240711203505.png)

_图示：通过“字段设置”弹窗，勾选并拖拽排序来决定联系人列表的显示列。_

### 2. 列表字段排序 {#field-sorting}

- **方式一**：在 <span style={{color: '#3578e5'}}>【字段设置】</span> 弹窗中拖动排序。
- **方式二**：在联系人列表的表头处，直接按住并拖动字段名称进行左右排序。

![在联系人列表的表头直接拖动字段名称以调整列顺序](https://cos.files.maozhishi.com/data/web/web-files/img/20240711203633.png)

_图示：在联系人列表的表头直接拖动字段名称以调整列顺序。_

### 3. 翻页与数量控制 {#pagination-quantity}

- 1️⃣ **点击翻页**：点击底部的页码进行翻页。
- 2️⃣ **显示数量**：在下拉菜单中设置每页显示的联系人数量。
- 3️⃣ **跳转页面**：输入页码并按回车，可直接跳转至指定页面。

![列表底部的翻页器，支持设置每页显示数量和页面跳转](https://cos.files.maozhishi.com/data/web/web-files/img/20240711204403.png)

_图示：列表底部的翻页器，支持设置每页显示数量和页面跳转。_

## 四、查看与编辑单个联系人 {#view-edit-single-contact}

### 1. 查看与编辑入口 {#view-edit-entry}

- **查看联系人**：在列表中单击任意联系人，右侧将滑出其详情面板。
- **编辑联系人**：在详情面板中，可直接对各项信息进行编辑。

![点击联系人后，右侧弹出详情面板，可直接查看和编辑信息](https://cos.files.maozhishi.com/data/web/web-files/img/20240710224827.png)

_图示：点击联系人后，右侧弹出详情面板，可直接查看和编辑信息。_

### 2. 编辑具体字段 {#editing-fields}

#### ① 名字与姓氏 {#name-surname}

- **开始编辑**：鼠标悬停在姓名上，点击出现的 <span style={{color: '#3578e5'}}>编辑</span> 图标。
- **编辑内容**：分别编辑 <span style={{color: '#3578e5'}}>名字</span> 和 <span style={{color: '#3578e5'}}>姓氏</span>，然后点击保存。

![编辑联系人的名字和姓氏](https://cos.files.maozhishi.com/data/web/web-files/img/20240710225824.png)

_图示：编辑联系人的名字和姓氏。_

#### ② 邮箱功能条 {#email-toolbar}

- 鼠标悬停在邮箱地址上，会显示四个快捷功能图标：
- 1️⃣ **编辑邮箱**：修改当前联系人的邮箱地址。
- 2️⃣ **复制邮箱**：将邮箱地址复制到剪贴板。
- 3️⃣ **发送邮件**：快速撰写一封新邮件给该联系人。
- 4️⃣ **打开网站**：根据邮箱域名，尝试打开该公司的网站。

![邮箱地址旁的功能条，提供编辑、复制、发送和打开网站的快捷操作](https://cos.files.maozhishi.com/data/web/web-files/img/20240710230209.png)

_图示：邮箱地址旁的功能条，提供编辑、复制、发送和打开网站的快捷操作。_

#### ③ 公司与职位 {#company-position}

- **预览公司信息**：点击公司名称，可以快速预览该公司的基本信息。
- **编辑公司与职位**：鼠标悬停在此区域，点击出现的 <span style={{color: '#3578e5'}}>编辑</span> 按钮。您可以直接选择已存在的公司，或输入新公司名后直接创建。

![编辑联系人的公司和职位信息](https://cos.files.maozhishi.com/data/web/web-files/img/20240710235739.png)

_图示：编辑联系人的公司和职位信息。_

#### ④ 标签与进度 {#tags-progress}

- **联系人标签**：点击后在弹窗中选择或管理标签。
- **联系人进度**：点击后在下拉菜单中选择当前客户的跟进状态。

![为联系人设置标签和跟进进度](https://cos.files.maozhishi.com/data/web/web-files/img/20240711000316.png)

_图示：为联系人设置标签和跟进进度。_

### 3. 其他关联操作 {#other-related-actions}

- **写跟进**：记录与客户的沟通日志。
- **写邮件**：直接向该联系人发送邮件。
- **创建任务**：为该联系人设置待办事项。
- **跟进记录**：查看所有与该联系人的历史跟进记录。
- **邮件往来**：查看与该联系人的所有历史邮件通信。

![联系人详情面板下方的多功能标签页，包括写跟进、写邮件、创建任务等](https://cos.files.maozhishi.com/data/web/web-files/img/20240711002508.png)

_图示：联系人详情面板下方的多功能标签页，包括写跟进、写邮件、创建任务等。_

## 五、批量管理联系人 {#batch-manage-contacts}

:::tip
批量管理通常遵循三步流程：

- 1️⃣ **筛选**：通过条件筛选出目标客户群体，例如 <span style={{color: '#3578e5'}}>邮箱有效</span> 的客户。
- 2️⃣ **选择**：勾选希望操作的联系人。
- 3️⃣ **操作**：执行批量操作，如 <span style={{color: '#3578e5'}}>【验证】</span>、<span style={{color: '#3578e5'}}>【群发】</span> 等。
  :::

### 1. 筛选联系人 {#filter-contacts}

- **验证与标签**：使用顶部的下拉菜单，按 <span style={{color: '#3578e5'}}>验证结果</span> 或 <span style={{color: '#3578e5'}}>联系人标签</span> 进行快速筛选。
- **关键词搜索**：在搜索框中输入名字、姓氏或邮箱进行搜索。
- **视图筛选**：点击左侧预先设置好的视图，应用更复杂的组合筛选条件。

![使用顶部的筛选器（验证结果、标签、搜索框）快速定位联系人](https://cos.files.maozhishi.com/data/web/web-files/img/20240711010825.png)

_图示：使用顶部的筛选器（验证结果、标签、搜索框）快速定位联系人。_

### 2. 选择联系人 {#select-contacts}

- **选择单个**：直接勾选联系人前的复选框。
- **选择当前页**：勾选列表头部的复选框，以选中当前页所有联系人。
- **选择全部**：勾选表头复选框后，点击提示条上的 <span style={{color: '#3578e5'}}>【全选】</span> 链接，以选中筛选结果中的所有联系人。
- **自定义数量**：点击 <span style={{color: '#3578e5'}}>【高级】</span> 并输入数量，以选择指定数量的联系人（<u><span style={{color: '#d93025'}}>最多支持选择前10,000个</span></u>）。

![通过表头的复选框和提示条，可以实现对当前页、全部或指定数量的联系人进行选择](https://cos.files.maozhishi.com/data/web/web-files/img/20240710223738.png)

_图示：通过表头的复选框和提示条，可以实现对当前页、全部或指定数量的联系人进行选择。_

### 3. 执行批量操作 {#perform-batch-actions}

#### ① 批量修改字段 {#modify-fields}

- **操作**：选择联系人后，点击 <span style={{color: '#3578e5'}}>【修改】</span> 按钮，选择要修改的字段，并输入新值或选择清空。
- **应用场景**：可用于批量修改 <span style={{color: '#3578e5'}}>负责人</span>、<span style={{color: '#3578e5'}}>客户状态</span>、<span style={{color: '#3578e5'}}>来源</span> 等信息。

![批量修改字段的弹窗，可以选择字段并设置新值](https://cos.files.maozhishi.com/data/web/web-files/img/20240711161215.png)

_图示：批量修改字段的弹窗，可以选择字段并设置新值。_

#### ② 批量修改标签 {#modify-tags}

- **操作**：选择联系人后，点击 <span style={{color: '#3578e5'}}>【标签】</span> 按钮。
- **修改类型**：
  - **新增**：在原有标签基础上，增加新选的标签。
  - **替换**：移除所有原有标签，替换为新选的标签。
  - **删除**：从原有标签中，移除新选的标签。

![批量修改标签的弹窗，提供新增、替换、删除三种操作模式](https://cos.files.maozhishi.com/data/web/web-files/img/20240711162559.png)

_图示：批量修改标签的弹窗，提供新增、替换、删除三种操作模式。_

#### ③ 加入/移出黑名单 {#blacklist-add-remove}

- **操作**：选择联系人后，点击 <span style={{color: '#3578e5'}}>【黑名单】</span> 按钮，并选择是加入还是移出，以及黑名单的类型（邮箱或域名）。
- ⚠️ **重要**：加入黑名单后，系统将**不再**向该邮箱或域名发送邮件，搜客功能也会**自动跳过**并**不再保存**黑名单内的邮箱。

![批量操作黑名单的弹窗](https://cos.files.maozhishi.com/data/web/web-files/img/20240711173450.png)

_图示：批量操作黑名单的弹窗。_

#### ④ 批量删除 {#batch-delete}

- **操作**：选择联系人后，点击 <span style={{color: '#3578e5'}}>【删除】</span> 按钮。为防止误删，系统会要求输入要删除的数量进行二次确认。
- **回收站**：已删除的联系人会进入 <span style={{color: '#3578e5'}}>回收站</span>，可在一定时间内恢复。

![批量删除联系人前的确认弹窗，需要输入数量以确认操作](https://cos.files.maozhishi.com/data/web/web-files/img/20240711174034.png)

_图示：批量删除联系人前的确认弹窗，需要输入数量以确认操作。_

#### ⑤ 批量导出 {#batch-export}

- **操作**：选择联系人后，点击 <span style={{color: '#3578e5'}}>【导出】</span> 按钮，并选择需要导出的字段。
- **导出历史**：导出的文件可在 <span style={{color: '#3578e5'}}>导出历史</span> 页面查看和下载。

![批量导出联系人的弹窗，可以选择需要导出的数据字段](https://cos.files.maozhishi.com/data/web/web-files/img/20240711174408.png)

_图示：批量导出联系人的弹窗，可以选择需要导出的数据字段。_

## 六、拓展与资源 {#expansion-and-resources}

### 1. 常见问题 {#faq}

#### ① 如何批量修改联系人的负责人？

- 答：首先，通过筛选条件找到需要修改的联系人，然后全部勾选。点击顶部操作栏的 <span style={{color: '#3578e5'}}>【修改】</span> 按钮，在弹出的窗口中，将第一个下拉框选择为 <span style={{color: '#3578e5'}}>负责人</span>，然后在第二个下拉框中选择新的负责人，最后点击确定即可。

#### ② 删除的联系人可以恢复吗？

- 答：可以。删除的联系人会进入 <span style={{color: '#3578e5'}}>回收站</span>，您可以在回收站中找到并恢复它们。请注意，回收站中的数据有保留期限。

#### ③ 批量修改标签时，“新增”和“替换”有什么区别？

- 答：**<span style={{color: '#8e44ad'}}>新增</span>** 是在联系人现有标签的基础上，再添加上您新选择的标签，原有的标签会保留。**<span style={{color: '#8e44ad'}}>替换</span>** 则是先将联系人所有的旧标签全部移除，然后换上您新选择的标签。

### 2. 学习建议 {#learning-suggestions}

- 💡 **善用视图**：花时间设置几个常用的 <span style={{color: '#3578e5'}}>视图</span>，例如“本月新增潜客”、“待跟进的重要客户”、“已成交客户”等，这将极大提升您日常工作的效率。
- 🎯 **定期清理**：定期使用 <span style={{color: '#3578e5'}}>【验证邮箱】</span> 功能清理无效联系人，并结合 <span style={{color: '#3578e5'}}>【黑名单】</span> 功能，保持联系人数据库的整洁与高效。
- ✅ **分步操作**：在进行大规模批量操作（如群发、删除）前，先用小部分数据进行测试，确保操作符合预期，避免失误。

### 3. 相关阅读 {#related-reading}

- 📚[添加联系人](./add-contacts)
  > - 学习如何将外部客户数据 **<span style={{color: '#8e44ad'}}>手动添加</span>** 或通过文件 **<span style={{color: '#8e44ad'}}>批量导入</span>** 到您的联系人库中。
- 📚[标签与视图](./contacts-tags-views)
  > - 深入了解如何利用 <u><span style={{color: '#e67c00'}}>标签</span></u> 进行客户分类，以及如何通过 <u><span style={{color: '#e67c00'}}>视图</span></u> 创建动态的客户筛选器，实现高效管理。
- 📚[邮件群发](./email-mass-sending)
  > - 掌握如何利用筛选和选择后的联系人，创建和执行高效的 **<span style={{color: '#8e44ad'}}>邮件群发</span>** 任务，实现精准营销。
- 📚[邮箱验证](./email-verification)
  > - 了解如何验证邮箱地址的有效性，降低退信率，提升邮件营销的效果。
- 📚[管理公司](./manage-company)
  > - 学习如何管理与联系人关联的公司信息，构建完整的客户画像。

---

🔗 **本文永久链接：** https://laifa.xin/zhinan/manage-contacts
