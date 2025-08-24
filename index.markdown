---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: 你好！世界！
subtitle: 开发者 | 创造者 | 探索者。
---

## 👋 欢迎来到我的数字小屋

这里是我在互联网上的一片自留地，主要用于记录和分享。

### 🚀 我最近在做的事

-   正在学习 **Pyside6** 等 **Python** 相关技术开发。
-   在开发一个有趣的工具 （暂时保密）。

### 📝 最新文章

{% for post in site.posts limit:3 %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
[查看更多文章](/blog)

---

### 🛠 技术栈

**熟悉的语言和工具：**

| 领域         | 技术栈                                     |
| :----------- | :----------------------------------------- |
| **前端**     | JavaScript, HTML, CSS     |
| **后端**     | Python, C++               |
| **工具**     | Git, VS Code, Zeal                       |

---

### 📫 找到我

-   **GitHub**: [@ok-lzr](https://github.com/ok-lzr)
-   **Email**: [csgdnrxg@163.com](mailto:csgdnrxg@163.com)
> **名言激励**：The future is in my hands. It’s totally up to me.