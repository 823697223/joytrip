import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const e={},o=t(`<h1 id="throttle" tabindex="-1"><a class="header-anchor" href="#throttle" aria-hidden="true">#</a> throttle</h1><p>创建一个节流函数，在 <code>wait</code> 秒内最多执行 <code>func</code> 一次的函数。 该函数提供一个 <code>cancel</code> 方法取消延迟的函数调用以及 <code>flush</code> 方法立即调用。 可以提供一个 <code>options</code> 对象决定如何调用 <code>func</code> 方法， <code>options.leading</code> 与|或 <code>options.trailing</code> 决定 <code>wait</code> 前后如何触发。 <code>func</code> 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 <code>func</code> 调用的结果。</p><p>注意：如果 <code>leading</code> 和 <code>trailing</code> 都设定为 <code>true</code> 则 <code>func</code> 允许 <code>trailing</code> 方式调用的条件为: 在 <code>wait</code> 期间多次调用。</p><p>如果 <code>wait</code> 为 0 并且 <code>leading</code> 为 false, <code>func</code>调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span>
	func<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
	wait<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
	options<span class="token operator">:</span> <span class="token punctuation">{</span>
		leading<span class="token operator">:</span> <span class="token builtin">any</span>
		trailing<span class="token operator">:</span> <span class="token builtin">any</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span>
	<span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	<span class="token function-variable function">flush</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span>
	<span class="token function-variable function">pending</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ol><li><code>func</code> (Function): 要节流的函数。</li><li><code>[wait=0]</code> (number): 需要节流的毫秒。</li><li><code>[options=]</code> (Object): 选项对象。</li><li><code>[options.leading=true]</code> (boolean): 指定调用在节流开始前。</li><li><code>[options.trailing=true]</code> (boolean): 指定调用在节流结束后。</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 避免在滚动时过分的更新定位</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> FunctionUtil<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span>updatePosition<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 点击后就调用 \`renewToken\`，但5分钟内超过1次。</span>
<span class="token keyword">var</span> throttled <span class="token operator">=</span> FunctionUtil<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span>renewToken<span class="token punctuation">,</span> <span class="token number">300000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> trailing<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> throttled<span class="token punctuation">)</span>

<span class="token comment">// 取消一个 trailing 的节流调用。</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> throttled<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","index.html.vue"]]);export{d as default};
