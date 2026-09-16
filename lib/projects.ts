export type Project = {
  slug: string;
  index: string;
  title: string;
  field: string;
  year: string;
  summary: string;
  description: string[];
  accent: string;
  visual: "lumen" | "whisper" | "gravity" | "prism" | "still" | "eclipse";
};

export const projects: Project[] = [
  {
    slug: "lumen-grid",
    index: "01",
    title: "Lumen Grid",
    field: "信息层级 / 界面系统",
    year: "2026",
    summary: "以光强替代字号与色彩，建立一套可量化的信息层级语言。",
    description: [
      "传统界面用字号、字重与色彩区分信息层级，维度越多，噪声越大。Lumen Grid 提出一个更单纯的假设：把「光」当作唯一的权重维度。",
      "每一级信息对应一档固定的光强——标题是满光，正文是 70% 的漫射光，辅助信息退到轮廓光。层级不再是设计师的直觉，而是一套可复算的刻度。",
      "项目产出 6 档光强刻度、对应的对比度映射表，以及一套据此构建的组件原型。",
    ],
    accent: "rgba(240,201,138,0.5)",
    visual: "lumen",
  },
  {
    slug: "whisper-type",
    index: "02",
    title: "Whisper Type",
    field: "排版 / 字体系统",
    year: "2026",
    summary: "一套以「呼吸感」为核心的排版系统：字距即音量，留白即停顿。",
    description: [
      "字体系统的评价标准通常只有可读性，Whisper Type 加上第二个维度：呼吸感。",
      "通过精细的字距、行距与段落节奏，让文字像说话一样有停顿和轻重。大标题收紧字距形成凝聚，正文放宽行距形成铺陈，注释用最细的字重轻声低语。",
      "整套系统包含 8 组排印预设，覆盖从品牌标题到脚注的全部场景。",
    ],
    accent: "rgba(160,180,255,0.45)",
    visual: "whisper",
  },
  {
    slug: "gravity-cursor",
    index: "03",
    title: "Gravity Cursor",
    field: "微交互 / 动效研究",
    year: "2026",
    summary: "给光标赋予重力与惯性，让界面产生真实的物理质感。",
    description: [
      "大多数光标特效只是跟随，Gravity Cursor 研究的是「被吸引」：光标接近元素时被轻微牵引，离开时带着惯性滑出。",
      "项目用一套轻量的物理参数——质量、阻尼、引力半径——替换传统的缓动曲线。界面第一次有了「手感」。",
      "该研究被提炼为一份动效规范，可在任何前端项目中落地。",
    ],
    accent: "rgba(140,220,200,0.45)",
    visual: "gravity",
  },
  {
    slug: "prism",
    index: "04",
    title: "Prism",
    field: "色彩系统 / 品牌工具",
    year: "2025",
    summary: "低饱和、高宽容度的棱镜色板：白、灰与一束暖光的完整光谱。",
    description: [
      "Prism 不是一个完整的色环，而是一束白光经过棱镜后的谦逊光谱——以近黑、暖白与灰为基底，只保留一档强调色。",
      "每个色阶都经过对比度校准（AA 级），保证在深色界面上的可用性。项目同时提供色板生成器，输出 Tailwind 可直接使用的配置。",
    ],
    accent: "rgba(220,170,220,0.4)",
    visual: "prism",
  },
  {
    slug: "still-water",
    index: "05",
    title: "Still Water",
    field: "界面语言 / 视觉探索",
    year: "2025",
    summary: "玻璃与水的界面语言：克制的通透，安静的光泽。",
    description: [
      "拟物设计早已过时，但「质感」从未过时。Still Water 探索一种克制的通透——半透明面板、柔和的光泽、几乎不可见的边缘。",
      "它不是模仿水，而是借用水的物理直觉：光线穿过、折射、在边缘留下极细的高光。整套语言由 CSS 独立实现，无一张位图。",
    ],
    accent: "rgba(150,200,230,0.4)",
    visual: "still",
  },
  {
    slug: "eclipse-tide",
    index: "06",
    title: "Eclipse Tide",
    field: "光效 / 视觉研究",
    year: "2026",
    summary: "当日蚀发生，光被遮蔽的瞬间——轮廓、阴影与留白成为主角。",
    description: [
      "「零光」并不是没有光，而是光暂时退场。Eclipse Tide 研究的是界面里那个最安静的瞬间：当所有高亮熄灭，用户的目光会落在哪里。",
      "项目以日蚀为隐喻构建了一组深空界面原型：极暗的底、一圈逐渐收窄的光环、以及被遮挡后依然清晰的轮廓线。强调的不是「发光」，而是「光曾经在过这里」。",
      "研究发现，当界面主动移除光源，用户对轮廓与阴影的敏感度会显著上升——克制在此刻不再是风格，而是一种注意力管理。",
    ],
    accent: "rgba(240,201,138,0.4)",
    visual: "eclipse",
  },
];
