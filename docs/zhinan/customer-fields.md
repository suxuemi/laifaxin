---
id: customer-fields
title: 客户字段
description: 学习如何在来发信系统中高效管理客户字段。本文详细介绍了什么是客户字段，如何创建和自定义字段（如“国家”字段），以及如何在联系人列表和新增界面中灵活显示、隐藏及排序这些关键信息，助您精准管理客户数据。
tags:
  - 客户管理
  - 自定义字段
  - 字段设置
  - 联系人信息
  - 数据管理
keywords:
  - 客户字段
  - 自定义字段
  - 来发信
  - CRM
  - 联系人管理
  - 公司字段
  - 字段显示
  - 字段排序
date: 2024-07-30
---

# ⚙️ 客户字段：个性化管理客户信息 {#mastering-customer-fields}

- 系统入口：👉 [**<span style={{color: '#e67c00'}}>客户字段 - 来发信</span>**](https://web.laifaxin.com/settings/fields)
- 功能说明：针对 [1️⃣ 联系人](https://web.laifaxin.com/contacts/contacts) 或 [2️⃣ 公司](https://web.laifaxin.com/contacts/companies) 列表显示的字段进行管理。

![在系统设置中进入字段管理功能的界面截图](https://cos.files.maozhishi.com/data/web/web-files/img/20241028220654.png)

_图示：字段管理功能入口示意图_

## 一、理解客户字段的价值 {#understanding-customer-fields-value}

**<span style={{color: '#8e44ad'}}>什么是字段？</span>**

- 假设你有一个“联系人A”，他的“性别”是“男”，“年龄”是“30”，那么“性别”和“年龄”就是这个联系人A的字段；
- 系统已内置了默认字段，如果这些字段不符合你的要求，你可以进行“添加/修改/删除”操作；

![字段管理功能示意图](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199418.png)

_图示：字段管理功能概览_

## 二、高效创建与管理自定义字段 {#creating-managing-custom-fields}

### 1. 字段列表概览 {#field-list-overview}

界面如下，你可以看到 <span style={{color: '#3578e5'}}>字段名称</span>、<span style={{color: '#3578e5'}}>创建者</span>、<span style={{color: '#3578e5'}}>归属</span> 和 <span style={{color: '#3578e5'}}>类型</span>。

![字段管理列表界面截图，显示默认字段和自定义字段](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199419.png)

_图示：字段列表界面_

### 2. 新建自定义字段实战（以“国家”为例） {#creating-custom-field-example}

这里我们以“联系人”为例，新建一个“国家”字段。

#### ① 第一步：发起新建 {#step-one-initiate-new}

在界面右上角，点击 <span style={{color: '#3578e5'}}>【新建】</span> 按钮。

![点击字段列表右上角的“新建”按钮](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199420.png)

_图示：点击新建按钮_

#### ② 第二步：配置字段属性 {#step-two-configure-properties}

1.  **字段名称** ：输入“国家”
2.  **字段归属** ：必选，这里请选择“联系人”（<u><span style={{color: '#d93025'}}>“公司”字段暂时是不生效的</span></u>）
3.  **字段类型** ：国家是一个单行文本，所以此处选择的是“单行文本”。

![新建字段的配置弹窗，展示了如何填写字段名称、归属和类型](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199421.png)

_图示：设置字段信息_

#### ③ 第三步：选择合适的字段类型 {#step-three-choose-field-type}

字段类型共有5种，请根据你想要记录的信息类型进行选择。以“国家”字段为例，如果国家选项较少，你可以选择“选项”类型；如果国家数量较多，建议选择“单行文本”。

![字段类型选项列表：单行文本、多行文本、选项、日期、数字](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199422.png)

_图示：字段类型选择_

如果你选择了选项，那么：

1.  你需要设置是否<span style={{color: '#3578e5'}}>允许选择多个选项</span>；
2.  你需要设置<span style={{color: '#3578e5'}}>备选项</span>，即你的联系人可能来自哪些国家，就需要在这里设置对应的国家名称。

![当字段类型选择为“选项”时的详细设置界面，包括是否多选和添加备选项](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199423.png)

_图示：选项类型设置详情_

### 3. 查看与验证新建字段 {#viewing-verifying-new-field}

成功新建“国家”字段后，你可以在字段列表中看到这个<span style={{color: '#3578e5'}}>名称</span>为“国家”的字段，其<span style={{color: '#3578e5'}}>创建者</span>会显示为 “custom”。

![字段列表显示新添加的“国家”字段，创建者为custom](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199424.png)

_图示：查看新建的字段_

## 三、灵活控制字段的显示与排序 {#controlling-field-display-order}

### 1. 在新增客户界面显示字段 {#displaying-fields-on-add-contact}

如果你希望在新增联系人时就能看到并编辑“国家”字段，那么在新增联系人界面，点击 <span style={{color: '#3578e5'}}>【自定义显示字段】</span>。

![新增联系人界面，点击右上角的“自定义显示字段”按钮](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199425.png)

_图示：自定义新增客户时的显示字段_

在显示设置界面，从左侧列表中勾选“国家”，它就会出现在右侧的已显示字段列表中。然后点击 <span style={{color: '#3578e5'}}>【保存】</span>。

![在自定义显示字段弹窗中，将“国家”字段从左侧勾选到右侧已显示列表](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199426.png)

_图示：设置显示字段_

完成设置后，在新增联系人界面，你就可以直接对“国家”字段进行编辑了。

![新增联系人界面已包含可编辑的“国家”字段](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199427.png)

_图示：新增联系人界面显示国家字段_

### 2. 在客户列表界面管理字段显示 {#managing-field-display-on-contact-list}

联系人信息通常以列表形式展示。如果你希望在列表中直接看到客户的“国家”信息（默认可能不显示），就需要进行显示项设置。

#### ① 查看默认显示项 {#viewing-default-display-items}

默认的联系人列表中可能包含一些你不需要的显示项，我们可以对这些项进行隐藏或调整显示。

![联系人列表默认显示的列（字段）](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199436.png)

_图示：客户列表默认显示项_

#### ② 进入显示项设置 {#accessing-display-item-settings}

点击列表界面右上角的 <span style={{color: '#3578e5'}}>【数据操作】</span> 按钮，然后选择 <span style={{color: '#3578e5'}}>【编辑字段】</span>。

![在联系人列表右上角点击“数据操作”并选择“编辑字段”的截图](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199437.png)

_图示：进入设置显示项界面_

#### ③ 移除不需要的显示项 {#removing-unneeded-display-items}

点击字段名称旁边的“x”图标，即可将该项从列表中移除。例如，我在这里移除了：<span style={{color: '#3578e5'}}>公司</span>、<span style={{color: '#3578e5'}}>名字</span>、<span style={{color: '#3578e5'}}>姓氏</span>、<span style={{color: '#3578e5'}}>性别</span>、<span style={{color: '#3578e5'}}>生日</span>。

![编辑列表显示字段弹窗：点击字段旁的“x”移除](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199438.png)

_图示：移除不需要的显示项_

移除部分字段后，显示的字段如下图所示，仅剩下：<span style={{color: '#3578e5'}}>名称</span>、<span style={{color: '#3578e5'}}>验证结果</span>、<span style={{color: '#3578e5'}}>标签</span>、<span style={{color: '#3578e5'}}>主页</span>、<span style={{color: '#3578e5'}}>昵称</span>、<span style={{color: '#3578e5'}}>来源</span>、<span style={{color: '#3578e5'}}>归属</span>、<span style={{color: '#3578e5'}}>邮箱</span>等8个显示项。

![移除部分字段后，右侧显示的字段列表](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199439.png)

_图示：移除后的显示项列表_

点击 <span style={{color: '#3578e5'}}>【保存】</span> 后，列表的实际显示效果如下。

![联系人列表在移除字段并保存后的显示效果](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199440.png)

_图示：保存后的列表显示效果_

#### ④ 添加新的显示项 {#adding-new-display-items}

在左侧的可用字段列表中，勾选你想要新增的显示项（例如“星级”和“国家”），这些被勾选的项会自动添加到右侧的已显示字段列表中。

![在编辑列表显示字段弹窗中，从左侧可用字段勾选“星级”和“国家”添加到右侧显示列表](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199441.png)

_图示：新增显示项_

#### ⑤ 调整显示项顺序 {#reordering-display-items}

如果你想把“星级”字段调整到“主页”字段的前面，只需按住“星级”字段，然后将其拖动到“主页”字段的上方即可。

![在编辑列表显示字段弹窗中，通过拖拽调整“星级”字段的顺序](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199442.png)

_图示：排序显示项_

拖动完成后，“星级”字段的位置已经更新。确认无误后，点击 <span style={{color: '#3578e5'}}>【保存】</span>。

![确认“星级”字段已经成功移动到“主页”字段上方](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199443.png)

_图示：确认排序结果_

保存排序设置后，列表的显示效果如下：“星级”字段现在展示在“主页”字段之前。

![联系人列表在新增并排序字段后的显示效果](https://cos.files.maozhishi.com/public/attachments/xsj/1664451199444.png)

_图示：最终列表显示效果_

### 3. 在编辑客户界面显示字段 {#displaying-fields-on-edit-contact}

请参照前文“[在新增客户界面显示字段](#displaying-fields-on-add-contact)”部分的说明进行操作。

## 四、拓展与资源 {#extensions-and-resources}

### 1. 常见问题 {#faq}

- **❓ 自定义字段有数量限制吗？**

  > - 答：目前系统对自定义字段的数量没有硬性限制，但建议根据实际需求合理创建，避免过多冗余字段影响管理效率。

- **❓ “公司”类型的字段何时会生效？**

  > - 答：当前版本中，“公司”归属的字段主要用于未来功能拓展，具体生效时间请关注👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)的官方更新通知。

- **❓ 如果我误删了一个字段，数据会丢失吗？**

  > - 答：<u><span style={{color: '#d93025'}}>删除字段是一个不可逆操作</span></u>，与该字段相关的已填写数据将会丢失。请在删除前务必确认。

- **❓ 我可以批量修改联系人的自定义字段信息吗？**
  > - 答：是的，你可以在联系人列表通过批量选择联系人，然后使用批量编辑功能来更新自定义字段的值。

### 2. 学习建议 {#learning-suggestions}

- 💡 **先规划后创建** ：在创建自定义字段前，先梳理清楚你的业务需求和数据管理目标，避免盲目添加。
- 🎯 **保持简洁** ：字段并非越多越好，只创建那些对你分析客户、进行营销或提供服务<span style={{color: '#e67c00'}}><u>真正有价值</u></span>的字段。
- regelmatig **定期审视** ：随着业务发展，定期回顾你的字段设置，移除不再需要的字段，调整现有字段，确保其始终服务于你的最新需求。
- 🤝 **团队共享** ：如果团队协作，确保所有成员都理解各个自定义字段的含义和用途，保证数据录入的<span style={{color: '#e67c00'}}><u>一致性和准确性</u></span>。

### 3. 相关阅读 {#related-reading}

- 📚 [联系人管理](./manage-contacts) - 学习如何高效管理你的所有<span style={{color: '#e67c00'}}><u>联系人信息</u></span>，包括导入、分组和查找。
- 📚 [公司管理](./manage-company) - 探索如何组织和跟踪与你业务相关的<span style={{color: '#e67c00'}}><u>公司实体数据</u></span>。
- 📚 [邮件模板设计](./email-templates) - 了解如何创建吸引人的<span style={{color: '#e67c00'}}><u>邮件模板</u></span>，有效利用客户字段进行个性化邮件营销。

🔗 **本文永久链接：** https://laifa.xin/zhinan/customer-fields
