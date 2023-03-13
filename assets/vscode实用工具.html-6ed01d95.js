import{_ as n,p as s,q as a,Q as e,R as t,a1 as p}from"./framework-5866ffd3.js";const c={},o=t("p",null,"vscode 是前端开发的利器，分享一些个人在开发中使用的插件和配置",-1),l=p(`<h3 id="_1-高亮模板字符串语法" tabindex="-1"><a class="header-anchor" href="#_1-高亮模板字符串语法" aria-hidden="true">#</a> 1. 高亮模板字符串语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 默认情况下模板字符串不能像vue组件文件那样高亮显示，
   * 通过安装 es6-string-html 扩展，并在模板字符串前面加上 下面的标识就可以实现高亮显示
  */</span>
  <span class="token comment">/*html*/</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;count is {{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function i(r,u){return s(),a("div",null,[o,e(" more "),l])}const m=n(c,[["render",i],["__file","vscode实用工具.html.vue"]]);export{m as default};
