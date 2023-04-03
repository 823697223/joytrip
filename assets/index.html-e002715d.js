import{_ as n,p as s,q as a,a1 as t}from"./framework-6b3c435d.js";const e={},o=t(`<h1 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> debounce</h1><p>创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 <code>wait</code> 毫秒后调用 <code>func</code> 方法。 debounced（防抖动）函数提供一个 <code>cancel</code> 方法取消延迟的函数调用以及 <code>flush</code> 方法立即调用。 可以提供一个 <code>options</code>（选项） 对象决定如何调用 <code>func</code> 方法，<code>options.leading</code> 与|或 <code>options.trailing</code> 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 <code>func</code> 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 <code>func</code> 调用的结果。</p><p>注意 如果 <code>leading</code> 和 <code>trailing</code> 选项为 true, 则 func 允许 <code>trailing</code> 方式调用的条件为: 在 <code>wait</code> 期间多次调用防抖方法。</p><p>如果 <code>wait</code> 为 0 并且 <code>leading</code> 为 false, <code>func</code>调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span>
	func<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
	wait<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
	options<span class="token operator">:</span> <span class="token punctuation">{</span>
		leading<span class="token operator">:</span> <span class="token builtin">any</span>
		maxWait<span class="token operator">:</span> <span class="token builtin">any</span>
		trailing<span class="token operator">:</span> <span class="token builtin">any</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span>
	<span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	<span class="token function-variable function">flush</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span>
	<span class="token function-variable function">pending</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ol><li><code>func</code> (Function): 要防抖动的函数。</li><li><code>[wait=0]</code> (number): 需要延迟的毫秒数。</li><li><code>[options=]</code> (Object): 选项对象。</li><li><code>[options.leading=false]</code> (boolean): 指定在延迟开始前调用。</li><li><code>[options.maxWait]</code> (number): 设置 func 允许被延迟的最大值。</li><li><code>[options.trailing=true]</code> (boolean): 指定在延迟结束后调用。</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 避免窗口在变动时出现昂贵的计算开销。</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> FunctionUtil<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>calculateLayout<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 当点击时 \`sendMail\` 随后就被调用。</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
	<span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
	FunctionUtil<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>sendMail<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		leading<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		trailing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// 确保 \`batchLog\` 调用1次之后，1秒内会被触发。</span>
<span class="token keyword">var</span> debounced <span class="token operator">=</span> FunctionUtil<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>batchLog<span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> maxWait<span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&#39;/stream&#39;</span><span class="token punctuation">)</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> debounced<span class="token punctuation">)</span>

<span class="token comment">// 取消一个 trailing 的防抖动调用</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> debounced<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","index.html.vue"]]);export{d as default};
