import{_ as n,p as s,q as a,a1 as e}from"./framework-fce7c3d2.js";const t={},p=e(`<h1 id="emptytoplaceholder" tabindex="-1"><a class="header-anchor" href="#emptytoplaceholder" aria-hidden="true">#</a> emptyToPlaceholder</h1><p>使用占位符替换空字符串</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">emptyToPlaceholder</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> placeholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>value</code> 要判断的值</li><li><code>placeholder</code> 占位符</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>StringUtil<span class="token punctuation">.</span><span class="token function">emptyToPlaceholder</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;—&#39;</span>
StringUtil<span class="token punctuation">.</span><span class="token function">emptyToPlaceholder</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;—&#39;</span>
StringUtil<span class="token punctuation">.</span><span class="token function">emptyToPlaceholder</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;—&#39;</span>
StringUtil<span class="token punctuation">.</span><span class="token function">emptyToPlaceholder</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;123&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","index.html.vue"]]);export{u as default};