import{_ as n,p as s,q as a,a1 as t}from"./framework-fce7c3d2.js";const p={},e=t(`<h1 id="uselist" tabindex="-1"><a class="header-anchor" href="#uselist" aria-hidden="true">#</a> UseList</h1><p>用于列表页，返回列表数据、分页事件、刷新方法等</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> global <span class="token punctuation">{</span>
	<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GetListParams<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
		pageIndex<span class="token operator">:</span> <span class="token builtin">number</span>
		pageSize<span class="token operator">:</span> <span class="token builtin">number</span>
		time<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GetListResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
		data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
		totalCount<span class="token operator">:</span> <span class="token builtin">number</span>
		pageIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
		pageSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 分页列表</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">usePageList</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
	<span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> GetListParams<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>GetListResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
	_condition<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">C</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	list<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
	condition<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;&gt;</span>
	loading<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>
	<span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	total<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
	pageSize<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
	currentPage<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
	<span class="token function-variable function">currentChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	<span class="token function-variable function">sizeChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>_pageSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	<span class="token function-variable function">freshList</span><span class="token operator">:</span> <span class="token punctuation">(</span>del<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token comment">// 无分页列表</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useList</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
	<span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
	_condition<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">C</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	list<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
	condition<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UnwrapRef<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;&gt;</span>
	loading<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>
	<span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ol><li><code>getList</code> 查询列表数据方法，注意返回类型为 <code>Promise&lt;GetListResponse&lt;T&gt;&gt;</code></li><li><code>_condition</code> 查询条件，注意对象类型为 <code>&lt;C&gt;</code></li></ol><p>返回</p><ol><li><code>list</code> 列表数据</li><li><code>condition</code> 查询条件</li><li><code>loading</code> 调用<code>getList</code>时候触发的 loading</li><li><code>getList</code> 查询数据方法</li><li><code>total</code> 总数</li><li><code>pageSize</code> 一页多少条数据</li><li><code>currentPage</code> 当前页数</li><li><code>currentChange</code> 分页变化事件</li><li><code>sizeChange</code> 每页条数变化事件</li><li><code>freshList</code> 刷新当前页数的数据</li></ol><p>example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">List</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	status<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	status<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">getList</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>params<span class="token operator">:</span> GetListParams<span class="token operator">&lt;</span>Condition<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>GetListResponse<span class="token operator">&lt;</span>List<span class="token operator">&gt;&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> total<span class="token punctuation">,</span> currentPage<span class="token punctuation">,</span> condition<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> currentChange<span class="token punctuation">,</span> sizeChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePageList</span><span class="token generic class-name"><span class="token operator">&lt;</span>
	List<span class="token punctuation">,</span>
	Condition
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">getList</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		status<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","index.html.vue"]]);export{u as default};