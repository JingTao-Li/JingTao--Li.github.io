import{_ as n,p as s,q as a,R as t,Q as p,a1 as e}from"./framework-2d0cd674.js";const o={},c=p("p",null,"在开发中合理利用 css，可以大大提高开发效率。积累以便 Ctrl + C",-1),i=e(`<h3 id="_1-毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#_1-毛玻璃效果" aria-hidden="true">#</a> 1. 毛玻璃效果</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-鼠标放上出现一个白色的框-带动画" tabindex="-1"><a class="header-anchor" href="#_2-鼠标放上出现一个白色的框-带动画" aria-hidden="true">#</a> 2. 鼠标放上出现一个白色的框(带动画)</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 默认样式 -- 不显示 */</span>
<span class="token selector">.border:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #ffffff<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.4<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">,</span> 1<span class="token punctuation">)</span> 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* hover时改变 */</span>
<span class="token selector">.border:hover:before</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/那些开发中的css技巧/border-animation.gif" alt="边框效果图"></p><h3 id="_4-一个交错动画案例-加载" tabindex="-1"><a class="header-anchor" href="#_4-一个交错动画案例-加载" aria-hidden="true">#</a> 4. 一个交错动画案例（加载...）</h3><p><strong>html 部分</strong></p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;div class=&quot;loading&quot;&gt;
  &lt;div class=&quot;dot&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>scss 部分</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loading </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> #7ef9ff<span class="token punctuation">,</span> #89cff0<span class="token punctuation">,</span> #4682b4<span class="token punctuation">,</span> #0f52ba<span class="token punctuation">,</span> #000080<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

  <span class="token selector">.dot </span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> wave 2s ease-out infinite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">5 </span><span class="token punctuation">{</span>
      &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span>
          <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">*</span> 0.2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> wave</span> <span class="token punctuation">{</span>
  <span class="token selector">50%,
  75% </span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">80%,
  100% </span><span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/那些开发中的css技巧/loading_animation.gif" alt="交错动画演示"></p><h3 id="_5-利用伪类实现按钮边框特效" tabindex="-1"><a class="header-anchor" href="#_5-利用伪类实现按钮边框特效" aria-hidden="true">#</a> 5. 利用伪类实现按钮边框特效</h3><p><strong>html 部分</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Start<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary btn-ghost btn-border-stroke  btn-text-float-up<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-borders<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>scss 部分</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token property">https</span><span class="token punctuation">:</span><span class="token comment">//fonts.googleapis.com/css?family=Lato);</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #1a1e23<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn </span><span class="token punctuation">{</span>
  <span class="token property">--hue</span><span class="token punctuation">:</span> 190<span class="token punctuation">;</span>
  <span class="token property">--ease-in-duration</span><span class="token punctuation">:</span> 0.25s<span class="token punctuation">;</span>
  <span class="token property">--ease-in-exponential</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.95<span class="token punctuation">,</span> 0.05<span class="token punctuation">,</span> 0.795<span class="token punctuation">,</span> 0.035<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--ease-out-duration</span><span class="token punctuation">:</span> 0.65s<span class="token punctuation">;</span>
  <span class="token property">--ease-out-delay</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--ease-out-exponential</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.19<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 0.22<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem 3rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.25s<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 31%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>-primary </span><span class="token punctuation">{</span>
    <span class="token property">--hue</span><span class="token punctuation">:</span> 171<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>-ghost </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>-border-stroke </span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">,</span> 0.35<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token selector">.btn-borders </span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

      <span class="token selector">.border-top </span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.border-right </span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.border-bottom </span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.border-left </span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// when unhover, ease-out left, bottom; ease-in right, top</span>

      <span class="token selector">.border-left </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-delay<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-bottom </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-delay<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.border-right </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-top </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--hue<span class="token punctuation">)</span><span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 41%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>

      <span class="token selector">.border-top,
      .border-bottom </span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-left,
      .border-right </span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// when hover, ease-in left, bottom; ease-out right, top</span>

      <span class="token selector">.border-left </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-bottom </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-in-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.border-right </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-delay<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-top </span><span class="token punctuation">{</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-duration<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-delay<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>-text-float-up </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>35%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> 0.25s ease-out<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// when hover, ease-in top-text; ease-out bottom-text</span>

    <span class="token selector">.btn-text </span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> 0.75s 0.1s <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token comment">// when hover, ease-in bottom-text; ease-out top-text</span>

      <span class="token selector">.btn-text </span><span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-25%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> 0.25s ease-out<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> 0.75s 0.1s <span class="token function">var</span><span class="token punctuation">(</span>--ease-out-exponential<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/那些开发中的css技巧/button_animation.gif" alt="按钮动画"></p><h3 id="_6-网站实现手电筒效果" tabindex="-1"><a class="header-anchor" href="#_6-网站实现手电筒效果" aria-hidden="true">#</a> 6. 网站实现手电筒效果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">canvas {
        position: fixed;
        left:0;
        top: 0;
        z-index: 9999;
        pointer-events: none;
    }</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cvs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> cvs<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cvs<span class="token punctuation">.</span>width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
cvs<span class="token punctuation">.</span>height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
  p<span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>width<span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> radial <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p<span class="token punctuation">.</span>r<span class="token punctuation">,</span> p<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y<span class="token punctuation">,</span> p<span class="token punctuation">.</span>r <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  radial<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(255, 255, 255, 0)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  radial<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> radial<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>width<span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cvs<span class="token punctuation">.</span>width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
  cvs<span class="token punctuation">.</span>height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function l(u,r){return s(),a("div",null,[c,t(" more "),i])}const d=n(o,[["render",l],["__file","好用的css交互.html.vue"]]);export{d as default};
