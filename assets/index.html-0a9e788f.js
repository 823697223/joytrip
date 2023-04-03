import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const p={},e=t(`<h1 id="createdom" tabindex="-1"><a class="header-anchor" href="#createdom" aria-hidden="true">#</a> createDom</h1><p>创建 dom</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token keyword">function</span> <span class="token function">createDom</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> children<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>type</code> 节点类型</li><li><code>options</code> 节点属性</li><li><code>children</code> 子节点</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>DomUtil<span class="token punctuation">.</span><span class="token function">createDom</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> className<span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
	DomUtil<span class="token punctuation">.</span><span class="token function">createDom</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> className<span class="token operator">:</span> <span class="token string">&#39;child1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	DomUtil<span class="token punctuation">.</span><span class="token function">createDom</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> className<span class="token operator">:</span> <span class="token string">&#39;child2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;  &lt;div class=&quot;parent&quot;&gt;&lt;div class=&quot;child1&quot;&gt;&lt;/div&gt;&lt;div class=&quot;child2&quot;&gt;&lt;/div&gt;&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
