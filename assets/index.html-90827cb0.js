import{_ as n,p as s,q as a,a1 as e}from"./framework-6b3c435d.js";const t={},p=e(`<h1 id="hextorgba" tabindex="-1"><a class="header-anchor" href="#hextorgba" aria-hidden="true">#</a> hexToRgba</h1><p>深拷贝</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hexToRgba</span><span class="token punctuation">(</span>hex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> opacity<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><ol><li><code>hex</code> 要转换的色值</li><li><code>opacity</code> 要添加的透明度</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>OtherUtil<span class="token punctuation">.</span><span class="token function">hexToRgba</span><span class="token punctuation">(</span><span class="token string">&#39;#26A46B&#39;</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;rgb(38, 164, 107, 0.4)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
