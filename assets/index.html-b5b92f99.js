import{_ as n,p as s,q as a,a1 as e}from"./framework-fce7c3d2.js";const t={},p=e(`<h1 id="resetobject" tabindex="-1"><a class="header-anchor" href="#resetobject" aria-hidden="true">#</a> resetObject</h1><p>重置对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">resetObject</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> clearArray<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>obj</code> 要重置的对象</li><li><code>[clearArray=true]</code> 数组是否需要重置成空数组，否则递归清空每一项</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
	b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	c<span class="token operator">:</span> <span class="token punctuation">{</span>
		d<span class="token operator">:</span> <span class="token punctuation">{</span>
			e<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	f<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">resetObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">/* =&gt; {
    a: undefined,
    b: undefined,
    c: {
        d: {
            e: undefined,
        },
    },
    f: [],
} */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","index.html.vue"]]);export{u as default};
