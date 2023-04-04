import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const p={},e=t(`<h1 id="isempty" tabindex="-1"><a class="header-anchor" href="#isempty" aria-hidden="true">#</a> isEmpty</h1><p>判断是否是个空数组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>array</code> 要判断的数组</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};