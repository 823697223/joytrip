import{_ as n,p as s,q as a,a1 as e}from"./framework-6b3c435d.js";const t={},o=e(`<h1 id="usetimeout" tabindex="-1"><a class="header-anchor" href="#usetimeout" aria-hidden="true">#</a> UseTimeout</h1><p>包装 <code>setTimeout</code>，作用域消失时候会自动清除<code>setTimeout</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">useTimeout</span><span class="token punctuation">(</span>
	<span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
	delay<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ol><li><code>fn</code> 定时器执行的方法</li><li><code>delay</code> 延时毫秒</li></ol><p>返回</p><ol start="3"><li><code>clear</code> 清除定时器方法</li></ol>`,7),c=[o];function i(p,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
