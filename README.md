# China Energy Data Visualization Platform

An interactive data visualization dashboard built with HTML + ECharts, showcasing multi-dimensional energy data including production, consumption, import, and export statistics across China.

## 🌟 Features

### 📊 Data Overview
- National primary energy production vs consumption comparison
- Visualized major energy mineral reserves
- Energy industry investment trends
- Energy elasticity coefficient analysis
- China map regional data distribution

### 🔋 Energy Consumption
- Total energy consumption growth trends
- Per capita energy consumption statistics
- Residential energy consumption analysis
- Coal consumption proportion pie chart
- Detailed daily energy consumption data table

### ⚡ Production & Import/Export
- Clean energy electricity generation and growth rates
- Energy product import/export comparisons
- Electricity generation statistics
- High-energy-consumption product trade data
- Per capita energy production data table

### 📖 About Section
- Project background introduction
- China energy profile overview
- Data source references
- Contact information

## 🛠️ Technology Stack

- **Frontend**: HTML5 + CSS3 + JavaScript
- **Visualization**: ECharts 5.0+
- **Libraries**: jQuery
- **Responsive Design**: Adaptive layout
- **Effects**: Canvas starry sky animation background

## 📁 Project Structure

```
china-energy-visualization/
├── index.html              # Homepage (starry sky animation)
├── 数据总览.html           # Data overview page
├── 能源消费.html           # Energy consumption analysis
├── 生产与进出口.html       # Production & import/export data
├── 关于更多.html           # Project introduction page
├── README.md              # Project documentation
├── css/                   # Styles directory
│   ├── comon0.css         # Data overview styles
│   ├── comon1.css         # Energy consumption styles
│   ├── comon2.css         # Production & trade styles
│   └── cssbg.css          # About page background styles
├── js/                    # JavaScript directory
│   ├── echarts.js         # ECharts visualization library
│   ├── jquery.js          # jQuery library
│   ├── js.js              # Data overview charts logic
│   ├── js2.js             # Energy consumption charts logic
│   ├── js3.js             # Production & trade charts logic
│   ├── china.js           # China map data
│   ├── area_echarts.js    # Regional charts logic
│   └── index.html         # Background effects
└── images/                # Images directory
    ├── bg.jpg          # 背景图片
    ├── bg1.jpg          # 背景图片
    ├── bg2.jpg          # 背景图片
    ├── loading.gif        # Loading animation
    ├── 能源1.jpg          # Background images
    ├── 能源2.jpg          # Background images
    ├── 能源3.jpg          # Background images
    ├── 能源4.jpg          # Background images
    └── 能源5.jpg          # Background images
```

## 🚀 Quick Start

### Method 1: Direct Open
1. Download project files
2. Open `index.html` directly in browser
3. Click navigation buttons to access sub-pages

### Method 2: Local Server (Recommended)
```bash
# Using Python built-in server
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Then visit http://localhost:8000
```

## 📊 Data Sources

- National Bureau of Statistics - Annual Energy Data
- 《2023 China Mineral Resources Report》
- 《2023 China Natural Resources Bulletin》
- 《2022 National Mineral Resources Reserve Statistics》

## ✨ Special Features

- **Dynamic Starry Background**: Interactive canvas animation on homepage
- **Real-time Clock**: Live time display on every page
- **Responsive Design**: Adapts to different screen sizes
- **Data Visualization**: Multiple chart types using ECharts
- **Interactive Experience**: Click anywhere on homepage to display random energy-related quotes

## 🎯 Use Cases

- Energy data analysis and presentation
- Educational demonstrations
- Data visualization learning reference
- Large-screen data display projects

## 👥 Authors

- **Developer**: YANKEESEAN

## 📄 License

This project is for learning and demonstration purposes only. Data sources are from public channels. Please credit the original source when using.

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this project!

---

**Data-Driven Decisions, Visualization for Future Insights** 📈

## 🌐 Live Demo

Available via GitHub Pages:
- [Homepage](https://yankeesean.github.io/china-energy-visualization/首页.html)
- [Data Overview](https://yankeesean.github.io/china-energy-visualization/数据总览.html)
- [Energy Consumption](https://yankeesean.github.io/china-energy-visualization/能源消费.html)
- [Production & Trade](https://yankeesean.github.io/china-energy-visualization/生产与进出口.html)
- [About](https://yankeesean.github.io/china-energy-visualization/关于更多.html)

*Note: Replace `your-username` and `repository-name` with your actual GitHub information.*

## 💡 使用说明：

1. 将文件名中的中文部分可以改为英文（可选）：
   - `数据总览.html` → `overview.html`
   - `能源消费.html` → `consumption.html` 
   - `生产与进出口.html` → `production-trade.html`
   - `关于更多.html` → `about.html`

2. 保存为 `README.md` 文件
3. 提交到 GitHub：

```bash
git add README.md
git commit -m "Add English documentation"
git push
```

# 中国能源数据可视化平台

一个基于 HTML + ECharts 的能源数据可视化大屏项目，展示中国能源生产、消费、进出口等多维度数据，提供直观的数据可视化展示。

![首页预览](images/能源1.jpg)

## 🌟 功能特点

### 📊 数据总览
- 全国一次能源生产与消费总量对比
- 主要能源矿产储量可视化
- 能源工业投资趋势图表
- 能源弹性系数分析
- 中国地图区域数据分布

### 🔋 能源消费
- 能源消费总量增速趋势图
- 人均能源消费量统计
- 生活能源消费量分析
- 煤炭消费占比饼图
- 平均每天能源消费量详细数据表

### ⚡ 生产与进出口
- 主要清洁能源发电量及增长速度
- 能源品种进出口量对比
- 发电量统计图表
- 高耗能产品进出口数据
- 人均能源生产量数据表

### 📖 关于更多
- 项目创作背景介绍
- 中国能源概况说明
- 数据来源参考文献
- 联系信息

## 🛠️ 技术栈

- **前端**: HTML5 + CSS3 + JavaScript
- **可视化**: ECharts 5.0+
- **库依赖**: jQuery
- **响应式**: 自适应布局设计
- **特效**: Canvas 星空动画背景

## 📁 项目结构

```
中国能源数据可视化/
├── 首页.html              # 首页（星空动画效果）
├── 数据总览.html           # 能源数据总览页面
├── 能源消费.html           # 能源消费数据分析
├── 生产与进出口.html       # 生产与进出口数据
├── 关于更多.html           # 项目介绍页面
├── README.md              # 项目说明文档
├── css/                   # 样式文件目录
│   ├── comon0.css         # 数据总览页样式
│   ├── comon1.css         # 能源消费页样式
│   ├── comon2.css         # 生产与进出口页样式
│   └── cssbg.css          # 关于页面背景样式
├── js/                    # JavaScript 文件目录
│   ├── echarts.js         # ECharts 可视化库
│   ├── jquery.js          # jQuery 库
│   ├── js.js              # 数据总览页图表逻辑
│   ├── js2.js             # 能源消费页图表逻辑
│   ├── js3.js             # 生产与进出口页图表逻辑
│   ├── china.js           # 中国地图数据
│   ├── area_echarts.js    # 区域图表逻辑
│   └── index.html         # 背景特效相关
└── images/                # 图片资源目录
    ├── bg.jpg          # 背景图片
    ├── bg1.jpg          # 背景图片
    ├── bg2.jpg          # 背景图片
    ├── loading.gif        # 加载动画
    ├── 能源1.jpg          # 背景图片
    ├── 能源2.jpg          # 背景图片
    ├── 能源3.jpg          # 背景图片
    ├── 能源4.jpg          # 背景图片
    └── 能源5.jpg          # 背景图片
```

## 🌐 在线访问

项目已通过 GitHub Pages 部署，点击以下链接访问：

- [首页](https://yankeesean.github.io/china-energy-visualization/首页.html)
- [数据总览](https://yankeesean.github.io/china-energy-visualization/数据总览.html)
- [能源消费](https://yankeesean.github.io/china-energy-visualization/能源消费.html)
- [生产与进出口](https://yankeesean.github.io/china-energy-visualization/生产与进出口.html)
- [关于更多](https://yankeesean.github.io/china-energy-visualization/关于更多.html)

## 🚀 快速开始

### 方式一：直接打开
1. 下载项目文件
2. 用浏览器直接打开 `index.html` 即可访问首页
3. 点击首页中的导航按钮跳转到对应子页面

### 方式二：本地服务器（推荐）
```bash
# 使用 Python 内置服务器
python -m http.server 8000

# 或使用 Node.js http-server
npx http-server

# 然后访问 http://localhost:8000
```

## 📊 数据来源

- 国家统计局年度能源数据
- 《2023年中国矿产资源报告》
- 《2023中国自然资源公报》
- 《2022年全国矿产资源储量统计表》

## ✨ 特色功能

- **动态星空背景**: 首页使用 Canvas 实现的交互式星空动画
- **实时时间显示**: 每个页面都显示实时更新的时间
- **响应式布局**: 适配不同屏幕尺寸
- **数据可视化**: 使用 ECharts 实现多种图表类型
- **交互式体验**: 点击首页空白处随机显示能源相关金句

## 🎯 适用场景

- 能源数据分析与展示
- 教学演示用途
- 数据可视化学习参考
- 大屏数据展示项目

## 👥 作者信息

- **开发者**: YANKEESEAN

## 📄 许可证

本项目仅用于学习和展示目的，数据来源于公开渠道，转载请注明出处。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

**数据驱动决策，可视化洞察未来** 📈

## 💡 使用说明：

1. 在你的项目根目录下创建 `README.md` 文件
2. 将上面的内容复制进去
3. 保存文件
4. 提交到 GitHub：

```bash
git add README.md
git commit -m "添加项目说明文档"
git push
```
