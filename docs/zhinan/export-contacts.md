---
title: 导出联系人
description: 本文介绍如何在来发信系统中导出客户联系人数据。内容包括选择客户导出、选择导出字段、查看导出记录、仅导出有效邮箱，以及通过筛选条件（如标签、邮箱后缀）导出特定客户群的操作方法。
id: export-contacts
tags: ["联系人导出", "数据导出", "客户数据", "来发信", "有效邮箱", "标签筛选"]
keywords:
  [
    "导出联系人",
    "客户数据导出",
    "Excel导出",
    "CSV导出",
    "筛选导出",
    "有效邮箱导出",
    "来发信教程",
  ]
---

# 导出联系人

**操作入口：**[<span style={{color: '#3578e5'}}>【点此进入导出客户页面】</span>](https://www.laifa.xin/web-daorulishi-import-history)

👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 支持单次最多50000联系人的导出，支持数量选择、显示选择、以及二次导出。

![来发信导出客户功能界面概览](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416039.png)

_图示：来发信导出客户功能界面，展示了导出选项和历史记录入口。_

## 一、导出客户 {#export-customers}

### 1. 选择客户导出 {#select-customers-to-export}

选择联系人，点击“<span style={{color: '#3578e5'}}>数据操作</span>”选择“<span style={{color: '#3578e5'}}>导出数据</span>”

![选择联系人后点击“数据操作”并选择“导出数据”](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416053.png)

_图示：在联系人列表中选择客户，然后通过“<span style={{color: '#3578e5'}}>数据操作</span>”菜单选择“<span style={{color: '#3578e5'}}>导出数据</span>”选项。_

按照提示选择要导出的数据和字段

![导出数据弹窗，选择导出的数据范围和字段](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416049.png)

_图示：弹出的“<span style={{color: '#3578e5'}}>导出数据</span>”对话框，允许用户选择导出的数据范围（如“已选定客户”）和需要包含的字段。_

导出后的文件会下载到本地

![文件下载提示，显示导出的客户数据文件已下载](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416050.png)

_图示：浏览器文件下载提示，表明包含导出客户数据的文件已成功下载到本地。_

打开文件预览信息

![Excel文件预览，显示导出的客户信息](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416051.png)

_图示：打开的Excel电子表格文件，预览已导出的客户联系人详细信息。_

### 2. 查看导出记录 {#view-export-history}

在导出界面右上角是可以看到“<span style={{color: '#3578e5'}}>导出记录</span>”入口，我们点击进入

![导出界面右上角，点击“导出记录”入口](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416052.png)

_图示：在客户导出功能界面的右上角，点击“<span style={{color: '#3578e5'}}>导出记录</span>”按钮查看历史导出任务。_

我们可以看到详细的导出记录，包含导出时间和记录数，可进行“<span style={{color: '#3578e5'}}>下载</span>”操作

![导出记录列表，显示历史导出任务及下载选项](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416059.png)

_图示：导出记录列表页面，展示了每一次导出操作的时间、导出的联系人数量，并提供重新“<span style={{color: '#3578e5'}}>下载</span>”文件的选项。_

## 二、仅导出有效邮箱 {#export-valid-emails-only}

选择“<span style={{color: '#3578e5'}}>有效邮箱</span>”

![在筛选条件中选择“有效邮箱”](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416060.png)

_图示：在联系人列表的筛选器中，选择“邮箱验证结果”为“<span style={{color: '#3578e5'}}>有效邮箱</span>”，以仅显示有效邮箱的联系人。_

点击“<span style={{color: '#3578e5'}}>数据操作</span>”，选择“<span style={{color: '#3578e5'}}>导出数据</span>”

![选择有效邮箱后，点击“数据操作”导出](https://cos.files.maozhishi.com/public/attachments/xsj/1664451416067.png)

_图示：筛选出“<span style={{color: '#3578e5'}}>有效邮箱</span>”后，通过“<span style={{color: '#3578e5'}}>数据操作</span>”菜单选择“<span style={{color: '#3578e5'}}>导出数据</span>”，以仅导出这些有效邮箱的联系人。_

## 三、两个补充案例 {#additional-examples}

### 1. 导出标签“<span style={{color: '#3578e5'}}>美国</span>”下的<span style={{color: '#3578e5'}}>有效邮箱</span> {#export-valid-emails-by-tag}

先创建筛选，通过把标签“<span style={{color: '#3578e5'}}>美国</span>”与验证结果“<span style={{color: '#3578e5'}}>有效邮箱</span>”进行关联，然后批量选择导出。

### 2. 导出标签“<span style={{color: '#3578e5'}}>美国</span>”的Gmail<span style={{color: '#3578e5'}}>邮箱</span> {#export-gmail-emails-by-tag}

- 创建筛选：把标签“<span style={{color: '#3578e5'}}>美国</span>”与字段“<span style={{color: '#3578e5'}}>邮箱</span>”结尾是“@gmail.com”进行关联
- 选择已筛选出的客户，并导出。

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 导出联系人时可以选择特定字段吗？**

  > - 答：是的，👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 系统在导出时允许您<u><span style={{color: '#e67c00'}}>选择需要导出的特定数据字段</span></u>，例如邮箱、电话、公司名称等，以满足不同的数据使用需求。

- **❓ 单次最多可以导出多少联系人？**

  > - 答：系统支持单次最多导出<u><span style={{color: '#e67c00'}}>50,000</span></u>个联系人。如果您的联系人数量超过此限制，建议分批导出。

- **❓ 如何只导出经过邮箱验证的<span style={{color: '#3578e5'}}>有效邮箱</span>？**

  > - 答：您可以在联系人列表中先筛选出“<span style={{color: '#3578e5'}}>邮箱验证结果</span>”为“<span style={{color: '#3578e5'}}>有效邮箱</span>”的联系人，然后选择这些已筛选的联系人进行“<span style={{color: '#3578e5'}}>导出数据</span>”操作。

- **❓ 导出的文件是什么格式？**
  > - 答：导出的文件通常为<u><span style={{color: '#e67c00'}}>Excel兼容的格式</span></u>（如.xlsx或.csv），方便您在其他软件中打开和处理。

### 学习建议 {#learning-suggestions}

- **💡 定期备份数据**：定期使用“<span style={{color: '#3578e5'}}>导出</span>”功能备份您的<u><span style={{color: '#e67c00'}}>客户联系人数据</span></u>，以防数据意外丢失。
- **🎯 精准筛选导出**：善用筛选条件（如<span style={{color: '#3578e5'}}>标签</span>、“<span style={{color: '#3578e5'}}>邮箱验证结果</span>”、自定义字段等）来导出<u><span style={{color: '#e67c00'}}>特定的客户群体</span></u>，提高工作效率。
- **✅ 核对导出字段**：在执行导出前，仔细核对您选择的<u><span style={{color: '#e67c00'}}>导出字段</span></u>，确保包含了所有需要的信息，避免重复操作。
- **📖 查看导出历史**：如果您需要重新下载之前导出的文件，或查看历史导出记录，可以访问“<span style={{color: '#3578e5'}}>导出记录</span>”功能。

### 相关阅读 {#related-reading}

- 📚[添加与管理联系人](./add-contacts)：了解如何<u><span style={{color: '#e67c00'}}>导入和管理您的联系人列表</span></u>，这是进行有效导出的基础。
- 📚[联系人标签与视图](./contacts-tags-views)：学习如何使用<u><span style={{color: '#e67c00'}}>标签和视图</span></u>来组织联系人，从而实现更<u><span style={{color: '#e67c00'}}>精准的筛选和导出</span></u>。
- 📚[邮箱验证功能详解](./email-verification)：深入了解<u><span style={{color: '#e67c00'}}>邮箱验证</span></u>的重要性，以及如何结合验证结果导出<u><span style={{color: '#e67c00'}}>高质量的邮箱列表</span></u>。

🔗 **本文永久链接：** https://laifa.xin/zhinan/export-contacts
