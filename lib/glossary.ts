export type Term = {
  slug: string;
  word: string;
  en: string;
  def: string;
  post?: { slug: string; title: string; kind?: "post" | "work" };
};

export const terms: Term[] = [
  {
    slug: "light",
    word: "光",
    en: "Light",
    def: "界面最初的隐喻。我们不让一切闪耀，只让真正重要的东西发光——光的方向，就是注意力的方向。",
    post: { slug: "light-as-interface-metaphor", title: "光与界面的隐喻" },
  },
  {
    slug: "zero",
    word: "零",
    en: "Zero",
    def: "设计的起点。先让一切归于零，再决定什么值得被点亮。零不是空无，是克制的第一块基石。",
  },
  {
    slug: "negative-space",
    word: "留白",
    en: "Negative Space",
    def: "页面里最有信息量的面积。它制造「不重要」的参照系，让重要的内容得以被看见。",
    post: { slug: "whitespace-is-a-decision", title: "留白，是一种设计决策" },
  },
  {
    slug: "breath",
    word: "呼吸",
    en: "Breath",
    def: "元素之间的节奏。间距不是空白，是眼睛的停顿；停顿对了，内容才有被记住的可能。",
  },
  {
    slug: "restraint",
    word: "克制",
    en: "Restraint",
    def: "不添加的勇气。每一个留在页面上的元素，都必须先通过拒绝的审查。",
    post: { slug: "refusal-is-the-first-move", title: "拒绝，是设计的第一动作" },
  },
  {
    slug: "precision",
    word: "精确",
    en: "Precision",
    def: "间距以 4px 为刻度，动效以毫秒为单位。审美必须经得起量化的检验，细节构成可信。",
    post: { slug: "the-stubbornness-of-a-pixel", title: "一个像素的固执" },
  },
  {
    slug: "dark",
    word: "暗",
    en: "Dark",
    def: "不是浅色界面的反相，而是让界面从「被照亮」变成「自发光」。亮度本身成为最重要的权重。",
    post: { slug: "the-quietness-of-dark-ui", title: "深色界面的安静美学" },
  },
  {
    slug: "silhouette",
    word: "轮廓",
    en: "Silhouette",
    def: "光退场后依然清晰的存在。当日蚀发生，我们才真正看见形状——克制有时是移除光源。",
    post: { slug: "eclipse-tide", title: "Eclipse Tide", kind: "work" },
  },
  {
    slug: "rhythm",
    word: "节奏",
    en: "Rhythm",
    def: "重复中的变化。行距、段距、区块间隔的呼吸规律，让界面像音乐一样有可预期的起伏。",
    post: { slug: "the-breath-of-design-systems", title: "设计系统的呼吸感" },
  },
  {
    slug: "voice",
    word: "语气",
    en: "Voice",
    def: "字体与字距替我们说出的那句话。在用户读到第一个字之前，语气已经到达。",
    post: { slug: "typeface-is-a-voice", title: "字体即语气" },
  },
];
