import{_ as n,p as a,q as s,a1 as t}from"./framework-fce7c3d2.js";const p={},e=t(`<h1 id="uniqueby" tabindex="-1"><a class="header-anchor" href="#uniqueby" aria-hidden="true">#</a> uniqueBy</h1><p>对象数组去重</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">uniqueBy</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>array</code> 要操作的数组</li><li><code>fn</code> 对象的 key 或者一个方法返回一个唯一的值</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">uniqueBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [{ a: 1 }, { a: 2 }, { a: 3 }]</span>
ArrayUtil<span class="token punctuation">.</span><span class="token function">uniqueBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// =&gt; [{ a: 1 }, { a: 2 }, { a: 3 }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,u){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};