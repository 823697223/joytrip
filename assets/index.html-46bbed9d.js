import{_ as n,p as s,q as a,a1 as e}from"./framework-6b3c435d.js";const t={},p=e(`<h1 id="deepclone" tabindex="-1"><a class="header-anchor" href="#deepclone" aria-hidden="true">#</a> deepClone</h1><p>深拷贝</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">deepClone</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>obj</code> 要转换的对象</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	b<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
	c<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	d<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	e<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
	f<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	h<span class="token operator">:</span> <span class="token punctuation">{</span>
		i<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">await</span> ObjectUtil<span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">/* =&gt; {
	a: 1,
	b: &#39;2&#39;,
	c: 0,
	d: true,
	e: undefined,
	f: null,
	h: {
		i: [1, 2, 3],
	},
}*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
