import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const e={},p=t(`<h1 id="isobject" tabindex="-1"><a class="header-anchor" href="#isobject" aria-hidden="true">#</a> isObject</h1><p>判断是否是一个对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>value</code> 要判断的值</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
ObjectUtil<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","index.html.vue"]]);export{k as default};
