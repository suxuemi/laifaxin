---
title: ✨ 如何将谷歌地图界面语言显示为英文？
id: how-to-display-google-maps-interface-language-as-english
description: 本指南详细介绍了如何通过修改谷歌地图URL中的"hl"参数，将界面语言切换为英文或其他任何支持的语言，以辅助进行精准的客户特征分析。
tags: [谷歌地图, 界面语言, 切换语言, 英文显示, hl参数, 数据分析]
keywords:
  [
    谷歌地图,
    谷歌地图语言,
    hl参数,
    切换英文,
    Google Maps language,
    host language,
    URL parameter,
  ]
---

# ✨ 如何将谷歌地图界面语言设为英文？

在进行全球市场客户开发时，将 **<span style={{color: '#e67c00'}}>谷歌地图</span>** 的界面语言切换为目标市场的官方语言或通用的英语，是进行精准分析的第一步。本文将指导您如何通过一个简单的URL参数实现这一操作。

---

## 一、认识语言参数 (hl) {#understanding-the-hl-parameter}

**<span style={{color: '#8e44ad'}}>hl</span>** 参数是 **<span style={{color: '#e67c00'}}>谷歌地图</span>** URL中的一个关键参数，它代表 "Host Language" (主机语言)，用于控制地图界面的显示语言。

- **默认语言**：如果您不主动设置该参数，**<span style={{color: '#e67c00'}}>谷歌地图</span>** 会自动根据您的浏览器语言设置来决定界面语言。
- **指定语言**：通过手动在URL中添加或修改 <u><span style={{color: '#e67c00'}}>hl</span></u> 参数，您可以强制地图以任何支持的语言显示。

### 1. 参数格式 {#parameter-format}

参数的基本格式非常简单，即在目标语言代码前加上 <u><span style={{color: '#e67c00'}}>hl=</span></u>。

- 例如，要将语言设置为 **英文**，您需要使用的参数是 <u><span style={{color: '#e67c00'}}>hl=en</span></u>。
- 要将语言设置为 **法语**，参数则是 <u><span style={{color: '#e67c00'}}>hl=fr</span></u>。

### 2. 支持的语言列表 {#supported-languages}

**<span style={{color: '#e67c00'}}>谷歌地图</span>** 支持超过70种语言。下表列出了部分常用语言及其对应的 <u><span style={{color: '#e67c00'}}>hl</span></u> 参数值。

|   显示语言   |                      hl 参数值                       |
| :----------: | :--------------------------------------------------: |
| 中文（简体） | <u><span style={{color: '#e67c00'}}>zh-CN</span></u> |
|     英文     |  <u><span style={{color: '#e67c00'}}>en</span></u>   |
|     法语     |  <u><span style={{color: '#e67c00'}}>fr</span></u>   |
|     德语     |  <u><span style={{color: '#e67c00'}}>de</span></u>   |
|     日语     |  <u><span style={{color: '#e67c00'}}>ja</span></u>   |
|   西班牙语   |  <u><span style={{color: '#e67c00'}}>es</span></u>   |
|     俄语     |  <u><span style={{color: '#e67c00'}}>ru</span></u>   |
|   阿拉伯语   |  <u><span style={{color: '#e67c00'}}>ar</span></u>   |

💡 **查看完整语言列表**

| 显示语言          | hl参数值                                               | 显示语言            | hl参数值                                              |
| :---------------- | :----------------------------------------------------- | :------------------ | :---------------------------------------------------- |
| 南非荷兰语        | <u><span style={{color: '#e67c00'}}>af</span></u>      | 阿尔巴尼亚语        | <u><span style={{color: '#e67c00'}}>sq</span></u>     |
| 阿姆哈拉语        | <u><span style={{color: '#e67c00'}}>am</span></u>      | 阿拉伯语            | <u><span style={{color: '#e67c00'}}>ar</span></u>     |
| 亚美尼亚语        | <u><span style={{color: '#e67c00'}}>hy</span></u>      | 阿塞拜疆语          | <u><span style={{color: '#e67c00'}}>az</span></u>     |
| 孟加拉语          | <u><span style={{color: '#e67c00'}}>bn</span></u>      | 保加利亚语          | <u><span style={{color: '#e67c00'}}>bg</span></u>     |
| 缅甸语            | <u><span style={{color: '#e67c00'}}>my</span></u>      | 加泰罗尼亚语        | <u><span style={{color: '#e67c00'}}>ca</span></u>     |
| 中文（简体）      | <u><span style={{color: '#e67c00'}}>zh-CN</span></u>   | 中文（繁体）        | <u><span style={{color: '#e67c00'}}>zh-TW</span></u>  |
| 捷克语            | <u><span style={{color: '#e67c00'}}>cs</span></u>      | 丹麦语              | <u><span style={{color: '#e67c00'}}>da</span></u>     |
| 荷兰语            | <u><span style={{color: '#e67c00'}}>nl</span></u>      | 英语（英国）        | <u><span style={{color: '#e67c00'}}>en-GB</span></u>  |
| 英语              | <u><span style={{color: '#e67c00'}}>en</span></u>      | 爱沙尼亚语          | <u><span style={{color: '#e67c00'}}>et</span></u>     |
| 菲律宾语          | <u><span style={{color: '#e67c00'}}>fil</span></u>     | 芬兰语              | <u><span style={{color: '#e67c00'}}>fi</span></u>     |
| 法语（加拿大）    | <u><span style={{color: '#e67c00'}}>fr-CA</span></u>   | 法语                | <u><span style={{color: '#e67c00'}}>fr</span></u>     |
| 格鲁吉亚语        | <u><span style={{color: '#e67c00'}}>ka</span></u>      | 德语                | <u><span style={{color: '#e67c00'}}>de</span></u>     |
| 希腊语            | <u><span style={{color: '#e67c00'}}>el</span></u>      | 古吉拉特语          | <u><span style={{color: '#e67c00'}}>gu</span></u>     |
| 希伯来语          | <u><span style={{color: '#e67c00'}}>iw</span></u>      | 印地语              | <u><span style={{color: '#e67c00'}}>hi</span></u>     |
| 匈牙利语          | <u><span style={{color: '#e67c00'}}>hu</span></u>      | 冰岛语              | <u><span style={{color: '#e67c00'}}>is</span></u>     |
| 印度尼西亚语      | <u><span style={{color: '#e67c00'}}>id</span></u>      | 意大利语            | <u><span style={{color: '#e67c00'}}>it</span></u>     |
| 日语              | <u><span style={{color: '#e67c00'}}>ja</span></u>      | 卡纳达语            | <u><span style={{color: '#e67c00'}}>kn</span></u>     |
| 哈萨克语          | <u><span style={{color: '#e67c00'}}>kk</span></u>      | 高棉语              | <u><span style={{color: '#e67c00'}}>km</span></u>     |
| 韩语              | <u><span style={{color: '#e67c00'}}>ko</span></u>      | 吉尔吉斯语          | <u><span style={{color: '#e67c00'}}>ky</span></u>     |
| 老挝语            | <u><span style={{color: '#e67c00'}}>lo</span></u>      | 拉脱维亚语          | <u><span style={{color: '#e67c00'}}>lv</span></u>     |
| 立陶宛语          | <u><span style={{color: '#e67c00'}}>lt</span></u>      | 马其顿语            | <u><span style={{color: '#e67c00'}}>mk</span></u>     |
| 马来语            | <u><span style={{color: '#e67c00'}}>ms</span></u>      | 马拉雅拉姆语        | <u><span style={{color: '#e67c00'}}>ml</span></u>     |
| 马拉地语          | <u><span style={{color: '#e67c00'}}>mr</span></u>      | 蒙古语              | <u><span style={{color: '#e67c00'}}>mn</span></u>     |
| 尼泊尔语          | <u><span style={{color: '#e67c00'}}>ne</span></u>      | 挪威语              | <u><span style={{color: '#e67c00'}}>no</span></u>     |
| 波斯语            | <u><span style={{color: '#e67c00'}}>fa</span></u>      | 波兰语              | <u><span style={{color: '#e67c00'}}>pl</span></u>     |
| 葡萄牙语（巴西）  | <u><span style={{color: '#e67c00'}}>pt-BR</span></u>   | 葡萄牙语（葡萄牙）  | <u><span style={{color: '#e67c00'}}>pt-PT</span></u>  |
| 旁遮普语          | <u><span style={{color: '#e67c00'}}>pa</span></u>      | 罗马尼亚语          | <u><span style={{color: '#e67c00'}}>ro</span></u>     |
| 俄语              | <u><span style={{color: '#e67c00'}}>ru</span></u>      | 塞尔维亚语          | <u><span style={{color: '#e67c00'}}>sr</span></u>     |
| 塞尔维亚语 (拉丁) | <u><span style={{color: '#e67c00'}}>sr-Latn</span></u> | 僧伽罗语            | <u><span style={{color: '#e67c00'}}>si</span></u>     |
| 斯洛伐克语        | <u><span style={{color: '#e67c00'}}>sk</span></u>      | 斯洛文尼亚语        | <u><span style={{color: '#e67c00'}}>sl</span></u>     |
| 西班牙语          | <u><span style={{color: '#e67c00'}}>es</span></u>      | 西班牙语 (拉丁美洲) | <u><span style={{color: '#e67c00'}}>es-419</span></u> |
| 斯瓦希里语        | <u><span style={{color: '#e67c00'}}>sw</span></u>      | 瑞典语              | <u><span style={{color: '#e67c00'}}>sv</span></u>     |
| 泰米尔语          | <u><span style={{color: '#e67c00'}}>ta</span></u>      | 泰卢固语            | <u><span style={{color: '#e67c00'}}>te</span></u>     |
| 泰语              | <u><span style={{color: '#e67c00'}}>th</span></u>      | 土耳其语            | <u><span style={{color: '#e67c00'}}>tr</span></u>     |
| 乌克兰语          | <u><span style={{color: '#e67c00'}}>uk</span></u>      | 乌尔都语            | <u><span style={{color: '#e67c00'}}>ur</span></u>     |
| 乌兹别克语        | <u><span style={{color: '#e67c00'}}>uz</span></u>      | 越南语              | <u><span style={{color: '#e67c00'}}>vi</span></u>     |
| 威尔士语          | <u><span style={{color: '#e67c00'}}>cy</span></u>      |                     |                                                       |

---

## 二、修改语言实战示例 {#language-modification-examples}

假设我们的原始搜索URL如下 (默认以中文显示)：
`https://www.google.com/maps/search/led/@33.9674734,-118.2538293,10.5z?entry=ttu`

![谷歌地图默认中文界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240920155739.png)

_图示：默认情况下，界面语言（如商家分类）为中文。_

### 1. 切换为英文 {#switching-to-english}

我们在原始URL末尾添加 <u><span style={{color: '#e67c00'}}>&hl=en</span></u>，注意使用 `&` 符号连接参数。
`https://www.google.com/maps/search/led/@33.9674734,-118.2538293,10.5z?entry=ttu&hl=en`

![谷歌地图英文界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240920155905.png)

_图示：添加参数后，界面上的商家分类等文本已成功变为英文。_

### 2. 切换为法语 {#switching-to-french}

同理，添加 <u><span style={{color: '#e67c00'}}>&hl=fr</span></u> 即可切换到法语界面。
`https://www.google.com/maps/search/led/@33.9674734,-118.2538293,10.5z?entry=ttu&hl=fr`

![谷歌地图法语界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240920163401.png)

_图示：将参数值改为"fr"，界面语言相应地变为法语。_

---

## 三、典型应用场景：分析客户特征 {#application-scenario-analyzing-customers}

在进行客户开发时，了解目标客户在 **<span style={{color: '#e67c00'}}>谷歌地图</span>** 上的真实 **<span style={{color: '#8e44ad'}}>商家名称</span>** 和 **<span style={{color: '#8e44ad'}}>行业分类</span>** 至关重要。为了获得最准确的信息，我们强烈建议使用 **当地语言** 或 **英语** 进行分析。

- **案例**：假设我们找到一个潜在客户，但在中文界面下，我们看到的分类是 "LED标牌商店"，这可能是经过翻译的。

![谷歌地图客户中文界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240920164533.png)

_图示：中文界面下的分类信息。_

- 切换到英文界面后 (添加 <u><span style={{color: '#e67c00'}}>&hl=en</span></u>)，我们看到其原始分类为 "LED sign store"。这为我们寻找同类客户提供了更精准的 **<span style={{color: '#8e44ad'}}>关键词</span>**。

![谷歌地图客户英文界面](https://cos.files.maozhishi.com/data/web/web-files/img/20240920164626.png)

_图示：切换到英文界面后，获得更原生的分类名称。_

---

## 四、拓展与资源 {#expansion-and-resources}

### 1. 常见问题

- **❓ 为什么要切换到英文或其他当地语言？**

  > - 答：为了更准确地分析客户在其本地市场中的 **<span style={{color: '#8e44ad'}}>商家名称</span>** 和 **<span style={{color: '#8e44ad'}}>分类</span>** 特征。使用客户的母语或通用的英语可以避免翻译误差，发现更地道的关键词。

- **❓ 修改语言会影响搜索到的商家列表吗？**
  > - 答：通常不会影响搜索到的商家本身，但会改变商家 **<span style={{color: '#8e44ad'}}>分类</span>**、**<span style={{color: '#8e44ad'}}>界面按钮</span>** 和 **<span style={{color: '#8e44ad'}}>提示信息</span>** 的显示语言，这对于理解和分析数据至关重要。

### 2. 学习建议

- 1️⃣ **实践出真知**：尝试将地图切换到您目标市场的主要语言，浏览当地的商家信息，感受语言差异带来的洞察。
- 2️⃣ **结合关键词**：在切换语言后，结合我们的 📚[谷歌地图插件使用指南](./how-to-use-google-maps-plugin) 来优化您的关键词策略，以达到最佳采集效果。
- 3️⃣ **善用表格**：将本文提供的 **<span style={{color: '#8e44ad'}}>语言代码</span>** 表格作为参考工具，方便您随时切换到所需的语言环境。

### 3. 相关阅读

- 📚 [如何使用谷歌地图进行客户开发](./how-to-use-google-maps-for-customer-development) - 学习如何结合 <u><span style={{color: '#e67c00'}}>语言切换</span></u>、<u><span style={{color: '#e67c00'}}>关键词策略</span></u> 和 <u><span style={{color: '#e67c00'}}>地图工具</span></u>，系统化地进行 <u><span style={{color: '#e67c00'}}>外贸客户开发</span></u>。
- 📚 [谷歌地图插件常见问题](./google-maps-plugin-faq) - 解答您在使用我们的 <u><span style={{color: '#e67c00'}}>谷歌地图插件</span></u> 时可能遇到的其他问题。

---

🔗 **本文永久链接：** https://laifa.xin/chajian/how-to-display-google-maps-interface-language-as-english
