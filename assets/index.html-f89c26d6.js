import{_ as n,p as s,q as a,a1 as e}from"./framework-fce7c3d2.js";const t={},p=e(`<h1 id="fromenum" tabindex="-1"><a class="header-anchor" href="#fromenum" aria-hidden="true">#</a> fromEnum</h1><p>枚举转化为数组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fromEnum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>
	obj<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	label<span class="token operator">:</span> <span class="token builtin">string</span>
	value<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ol><li><code>obj</code> 枚举</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
	a<span class="token punctuation">,</span>
	b<span class="token punctuation">,</span>
	c<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">fromEnum</span><span class="token punctuation">(</span>Status<span class="token punctuation">)</span> <span class="token comment">/* =&gt;  [
    { label: &#39;a&#39;, value: 0 },
    { label: &#39;b&#39;, value: 1 },
    { label: &#39;c&#39;, value: 2 },
] */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[p];function i(c,o){return s(),a("div",null,l)}const r=n(t,[["render",i],["__file","index.html.vue"]]);export{r as default};
