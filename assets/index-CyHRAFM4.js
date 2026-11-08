const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./code-editor-CgfjvLSn.js","./app-DjuJBqAb.js","./app-CsXs_P9C.css","./code-editor-CVRqtHXc.css"])))=>i.map(i=>d[i]);
import{c as V,a as F,b as j,d as G,f as z,_ as W}from"./app-DjuJBqAb.js";const K=""+new URL("image-tXxY0xW2.webp",import.meta.url).href,X=""+new URL("image-DIbldwsz.webp",import.meta.url).href,Y=""+new URL("image-OPsw90LC.webp",import.meta.url).href,J=""+new URL("image-CFC7qCpq.webp",import.meta.url).href,E=[{slug:"edit-a-page",order:1,title:"Edit a page",description:"Pages, content blocks, draft and publish. No code.",duration:"5 min",image:K,tags:["CMS"],steps:[{title:"The site tree",url:"/admin/pages",open:[],create:[],text:`<p>On the right is the CMS of a real Silverstripe site. <strong>Pages</strong> shows the site tree: every page of the site, in
the order of the menu.</p>
<p>Click <strong>Home</strong> to open it.</p>
`,hint:`<p>The tree is in the column next to the CMS menu. If you see a list instead, switch to the tree with the icon
above it.</p>
`,tasks:[{label:"Opened a page",visited:"^/admin/pages/edit/show/\\d+"}],solution:{files:[],build:!1}},{title:"Content blocks",url:null,open:[],create:[],text:`<p>A page is made of <strong>content blocks</strong>: text, images, lists. Click a block to open it, change its text and press
<strong>Save</strong> below the block.</p>
<p>Saving keeps a draft: the published site does not change yet.</p>
`,hint:`<p>The blocks are on the <strong>Main content</strong> tab of the page. A block opens inline; its <strong>Save</strong> button is below it.</p>
`,tasks:[{label:"Opened a page",visited:"^/admin/pages/edit/show/\\d+"}],solution:{files:[],build:!1}},{title:"Draft and publish",url:null,open:[],create:[],text:`<p>Press <strong>Publish</strong> at the bottom of the page: now the change is live. Then look at the page on the site with
<strong>Site</strong> above the preview.</p>
`,hint:`<p><strong>Publish</strong> publishes the page and its blocks. The CMS shows a page&#39;s state next to its title in the tree:
draft, modified or published.</p>
`,tasks:[{label:"Looked at the site",visited:"^/(?!admin)"}],solution:{files:[],build:!1}},{title:"A new page",url:"/admin/pages",open:[],create:[],text:`<p>Add a page: <strong>Add new</strong> above the tree, choose <strong>Page</strong> and where it goes, then give it a title and a block.
Publish it and find it in the site&#39;s menu.</p>
`,hint:`<p>A page&#39;s place in the tree is its place in the menu. Drag pages in the tree to move them.</p>
`,tasks:[{label:"Added a page",visited:"^/admin/pages/(add|edit/show/\\d+)"},{label:"Looked at the site",visited:"^/(?!admin)"}],solution:{files:[],build:!1}}]},{slug:"add-a-field",order:2,title:"Add a field",description:"Give contacts a birthday and show it in the CMS list.",duration:"10 min",image:X,tags:["PHP"],steps:[{title:"Find the model",url:"/admin/contacts",open:["app/src/Contacts/Contact.php","app/src/Contacts/ContactAdmin.php"],create:[],text:`<p>The Contacts section in the CMS comes from one PHP class, <code>Contact</code>. Its <code>$db</code> list defines what is stored for
each contact.</p>
<p>Compare the fields in the code with the columns on the right.</p>
`,hint:`<p><code>ContactAdmin</code> puts the contacts into the CMS menu: its <code>$managed_models</code> lists <code>Contact</code>. The columns of the
list come from <code>$summary_fields</code> in <code>Contact.php</code>.</p>
`,tasks:[{label:"Opened Contact.php",opened:"app/src/Contacts/Contact.php"},{label:"Looked at ContactAdmin.php",opened:"app/src/Contacts/ContactAdmin.php"}],solution:{files:[],build:!1}},{title:"Add a field",url:"/admin/contacts",open:["app/src/Contacts/Contact.php"],create:[],text:`<p>Add a birthday to the <code>$db</code> list of <code>Contact</code>:</p>
<pre><code class="language-php">&#39;Birthday&#39; =&gt; &#39;Date&#39;,
</code></pre>
<p>Save the file with <strong>Save</strong> or Ctrl+S. The CMS on the right shows an error then: the database has no column
for the field yet. The next step adds it.</p>
`,hint:`<p>Put the new line after <code>&#39;Company&#39; =&gt; &#39;Varchar&#39;,</code>, inside the square brackets. <code>Date</code> is one of Silverstripe&#39;s
field types; others are <code>Varchar</code>, <code>Text</code>, <code>Int</code>, <code>Boolean</code> and <code>Enum</code>.</p>
`,tasks:[{label:"Added Birthday to $db",contains:{file:"app/src/Contacts/Contact.php",pattern:"\\$db\\s*=\\s*\\[[^\\]]*'Birthday'\\s*=>\\s*'Date'"}}],solution:{files:[{file:"app/src/Contacts/Contact.php",after:"'Company' => 'Varchar',",insert:`
        'Birthday' => 'Date',`}],build:!1}},{title:"Build the database",url:"/admin/contacts",open:["app/src/Contacts/Contact.php"],create:[],text:`<p>The database does not know the new field yet. <strong>dev/build</strong> adds a column for it and clears the caches.</p>
<p>Then edit a contact in the CMS: the form has a <strong>Birthday</strong> field now. Silverstripe built it from the field type.</p>
`,hint:`<p><strong>dev/build</strong> is the button above the code. Its output appears below the code: look for <code>Birthday</code> in the list
of changed tables.</p>
`,tasks:[{label:"Ran dev/build",built:!0},{label:"Opened a contact in the CMS",visited:"/admin/contacts/.*/item/\\d+"}],solution:{files:[],build:!0}},{title:"Show it in the list",url:"/admin/contacts",open:["app/src/Contacts/Contact.php"],create:[],text:`<p>The list of contacts shows the fields in <code>$summary_fields</code>. Add the birthday there too, save, and look at the
list on the right.</p>
`,hint:`<p>The key is the field, the value the column&#39;s title: <code>&#39;Birthday&#39; =&gt; &#39;Birthday&#39;,</code>. Changes to <code>$summary_fields</code>
are configuration, not database: saving is enough, no dev/build needed.</p>
`,tasks:[{label:"Added Birthday to $summary_fields",contains:{file:"app/src/Contacts/Contact.php",pattern:"\\$summary_fields\\s*=\\s*\\[[^\\]]*'Birthday"}}],solution:{files:[{file:"app/src/Contacts/Contact.php",after:"'Email' => 'Email',",insert:`
        'Birthday' => 'Birthday',`}],build:!1}},{title:"Show it on the site",url:"/contacts",open:["app/templates/Layout/ContactPage.ss"],create:[],text:`<p>Each contact has a page of its own, made from the template <code>ContactPage.ss</code>. Add the birthday below the phone
number:</p>
<pre><code class="language-html">&lt;% if $Birthday %&gt;&lt;dt&gt;Birthday&lt;/dt&gt;&lt;dd&gt;$Birthday.Nice&lt;/dd&gt;&lt;% end_if %&gt;
</code></pre>
<p>Then open a contact on the site.</p>
`,hint:`<p><code>$Birthday.Nice</code> formats the date for people. Give a contact a birthday in the CMS first, or the <code>&lt;% if %&gt;</code>
hides it. A contact&#39;s page is linked from the cards on the Contacts page.</p>
`,tasks:[{label:"Added $Birthday to the template",contains:{file:"app/templates/Layout/ContactPage.ss",pattern:"\\$Birthday"}},{label:"Opened a contact's page",visited:"^/contact/\\d+"}],solution:{files:[{file:"app/templates/Layout/ContactPage.ss",after:'<dd><a href="tel:$Phone">$Phone</a></dd><% end_if %>',insert:`
            <% if $Birthday %><dt>Birthday</dt><dd>$Birthday.Nice</dd><% end_if %>`}],build:!1}}]},{slug:"page-type",order:3,title:"A page type of your own",description:"An Event page with a date and a template.",duration:"15 min",image:Y,tags:["PHP","Template"],steps:[{title:"A new class",url:"/admin/pages",open:["app/src/EventPage.php"],create:[{file:"app/src/EventPage.php",content:`<?php

/**
 * A page for an event.
 */
class EventPage extends Page
{
    private static $db = [
    ];
}
`}],text:`<p>Every kind of page is a PHP class. <code>EventPage</code> extends <code>Page</code>, so it can do all a page can.</p>
<p>Give it a date: add a field to <code>$db</code> and save.</p>
<pre><code class="language-php">&#39;Date&#39; =&gt; &#39;Date&#39;,
</code></pre>
`,hint:`<p>The field goes between the square brackets of <code>$db</code>: the key is the field&#39;s name, the value its type.</p>
`,tasks:[{label:"Added Date to $db",contains:{file:"app/src/EventPage.php",pattern:"'Date'\\s*=>\\s*'Date'"}}],solution:{files:[{file:"app/src/EventPage.php",after:"private static $db = [",insert:`
        'Date' => 'Date',`}],build:!1}},{title:"Build the database",url:"/admin/pages",open:["app/src/EventPage.php"],create:[],text:`<p>Run <strong>dev/build</strong>: Silverstripe creates a table for the event pages, with a column for the date.</p>
`,hint:`<p>The output below the code lists the new table <code>EventPage</code>.</p>
`,tasks:[{label:"Ran dev/build",built:!0}],solution:{files:[],build:!0}},{title:"An event in the CMS",url:"/admin/pages",open:["app/src/EventPage.php"],create:[],text:`<p>In <strong>Pages</strong>, choose <strong>Add new</strong>: there is a page type <strong>Event Page</strong> now. Add one, give it a title and a date,
and publish it.</p>
`,hint:`<p>Silverstripe made the date field from the field type <code>Date</code>: it shows a date picker.</p>
`,tasks:[{label:"Added a page",visited:"^/admin/pages/(add|edit/show/\\d+)"}],solution:{files:[],build:!1}},{title:"A template",url:null,open:["app/templates/Layout/EventPage.ss"],create:[{file:"app/templates/Layout/EventPage.ss",content:`<div class="page__content">
    <h1 class="page__title">$Title</h1>
    $ElementalArea
</div>
`}],text:`<p>A page type gets its look from a template of the same name. Show the date below the title:</p>
<pre><code class="language-html">&lt;p class=&quot;event__date&quot;&gt;$Date.Nice&lt;/p&gt;
</code></pre>
<p>Save, then open your event on the site.</p>
`,hint:`<p><code>$Date</code> is the field; <code>.Nice</code> formats it. Without a template of its own, a page type uses the one of its parent
class, <code>Page</code>.</p>
`,tasks:[{label:"Added $Date to the template",contains:{file:"app/templates/Layout/EventPage.ss",pattern:"\\$Date"}},{label:"Looked at the site",visited:"^/(?!admin)"}],solution:{files:[{file:"app/templates/Layout/EventPage.ss",after:'<h1 class="page__title">$Title</h1>',insert:`
    <p class="event__date">$Date.Nice</p>`}],build:!1}}]},{slug:"content-block",order:4,title:"A content block",description:"Build a block editors can drop onto any page.",duration:"15 min",image:J,tags:["PHP","Template"],steps:[{title:"A block class",url:"/admin/pages",open:["app/src/Blocks/QuoteBlock.php","app/src/Blocks/ContactsBlock.php"],create:[{file:"app/src/Blocks/QuoteBlock.php",content:`<?php

use DNADesign\\Elemental\\Models\\BaseElement;

/**
 * A quote with its author.
 */
class QuoteBlock extends BaseElement
{
    private static $singular_name = 'Quote';

    private static $icon = 'font-icon-chat';

    private static $db = [
        'Quote' => 'Text',
    ];

    public function getType()
    {
        return 'Quote';
    }
}
`}],text:`<p>A content block is a class that extends <code>BaseElement</code>. <code>QuoteBlock</code> stores a quote; give it an author too:</p>
<pre><code class="language-php">&#39;Author&#39; =&gt; &#39;Varchar&#39;,
</code></pre>
<p>Compare it with <code>ContactsBlock</code>, the block that lists contacts.</p>
`,hint:`<p><code>Text</code> is for longer text, <code>Varchar</code> for a line. <code>getType()</code> is the name the CMS shows for the block.</p>
`,tasks:[{label:"Added Author to $db",contains:{file:"app/src/Blocks/QuoteBlock.php",pattern:"'Author'\\s*=>"}}],solution:{files:[{file:"app/src/Blocks/QuoteBlock.php",after:"'Quote' => 'Text',",insert:`
        'Author' => 'Varchar',`}],build:!1}},{title:"Build the database",url:"/admin/pages",open:["app/src/Blocks/QuoteBlock.php"],create:[],text:`<p>Run <strong>dev/build</strong>, so the block gets its table.</p>
`,hint:"",tasks:[{label:"Ran dev/build",built:!0}],solution:{files:[],build:!0}},{title:"A template",url:null,open:["app/templates/QuoteBlock.ss","app/templates/ContactsBlock.ss"],create:[{file:"app/templates/QuoteBlock.ss",content:`<blockquote class="quote">
    <p>$Quote</p>
</blockquote>
`}],text:`<p>A block&#39;s template has the class&#39;s name. Add the author below the quote and save:</p>
<pre><code class="language-html">&lt;% if $Author %&gt;&lt;footer&gt;$Author&lt;/footer&gt;&lt;% end_if %&gt;
</code></pre>
`,hint:"",tasks:[{label:"Added $Author to the template",contains:{file:"app/templates/QuoteBlock.ss",pattern:"\\$Author"}}],solution:{files:[{file:"app/templates/QuoteBlock.ss",after:"<p>$Quote</p>",insert:`
    <% if $Author %><footer>$Author</footer><% end_if %>`}],build:!1}},{title:"Use it",url:"/admin/pages",open:[],create:[],text:`<p>Open a page in the CMS, add a block with <strong>Add block</strong>: <strong>Quote</strong> is in the list now. Fill it in, publish the
page and look at it on the site.</p>
`,hint:`<p>Every page has content blocks, so the new block works on all of them. <code>$allowed_elements</code> on a page type can
limit which blocks it takes.</p>
`,tasks:[{label:"Opened a page",visited:"^/admin/pages/edit/show/\\d+"},{label:"Looked at the site",visited:"^/(?!admin)"}],solution:{files:[],build:!1}}]}];function Z({elements:e,editor:a,preview:d,setStatus:h,onFinish:k}){let p=null,r=0,f=[],x=new Map;const m=()=>p.steps[r],U=t=>[...new Set([...t.open,...t.create.map(({file:o})=>o),...t.solution.files.map(o=>o.file)])];async function v(t){try{return await a.read(t)}catch{return null}}function D(){const t=m();e.title.textContent=`${p.order} · ${p.title}`,e.steps.replaceChildren(...p.steps.map((o,n)=>{const c=document.createElement("li"),s=Object.assign(document.createElement("button"),{type:"button",textContent:String(n+1),title:o.title});return n===r&&s.setAttribute("aria-current","step"),s.classList.toggle("done",q(n)),s.onclick=()=>P(n).catch(b),c.append(s),c})),e.count.textContent=`Step ${r+1} of ${p.steps.length}`,e.stepTitle.textContent=t.title,e.text.innerHTML=t.text,e.hint.innerHTML=t.hint,e.hintToggle.hidden=!t.hint,e.solution.hidden=t.solution.files.length===0&&!t.solution.build,e.back.disabled=r===0,e.next.textContent=r===p.steps.length-1?"Finish":"Next",R()}function R(){e.tasks.replaceChildren(...m().tasks.map((t,o)=>{const n=Object.assign(document.createElement("li"),{textContent:t.label});return n.classList.toggle("done",f[r].has(o)),n}));for(const[t,o]of[...e.steps.querySelectorAll("button")].entries())o.classList.toggle("done",q(t))}function q(t){return p.steps[t].tasks.length>0&&f[t].size===p.steps[t].tasks.length}function b(t){console.error(t),h(t.message,!0)}function O(t){e.hint.hidden=!t,e.hintToggle.setAttribute("aria-expanded",String(t))}async function C(t){if(!p)return;const o=m().tasks;let n=!1;for(const[c,s]of o.entries()){if(f[r].has(c))continue;let u=!1;"opened"in s?u=t.type==="opened"&&t.path===s.opened:"built"in s?u=t.type==="built"&&t.ok:"visited"in s?u=t.type==="visited"&&new RegExp(s.visited).test(t.path):"contains"in s&&(t.type==="saved"||t.type==="check")&&(t.path??s.contains.file)===s.contains.file&&(u=new RegExp(s.contains.pattern).test(await v(s.contains.file)??"")),u&&(f[r].add(c),n=!0)}n&&R()}async function N(t){let o=!1;for(const n of t.solution.files){const c=await v(n.file);let s;if("content"in n)s=n.content;else{if(c===null)throw new Error(`${n.file} does not exist: reset the step or the tutorial`);if(c.includes(n.insert.trim()))s=c;else{const u=c.indexOf(n.after);if(u<0)throw new Error(`Cannot find the place for the solution in ${n.file}: reset the step and try again`);s=c.slice(0,u+n.after.length)+n.insert+c.slice(u+n.after.length)}}s!==c&&(await a.write(n.file,s),o=!0)}return o}async function A(t,o){let n=!1;for(const c of t)n=await N(c)||n;t.some(c=>c.solution.build)?await a.build():n&&await a.flushAndReload(o)}async function B(t){r=t,O(!1),D();const o=new URL(location.href);o.searchParams.set("step",String(t+1)),history.replaceState(history.state,"",o.href);const n=m();let c=!1;for(const{file:s,content:u}of n.create)await v(s)===null&&(await a.write(s,u),c=!0);c&&await a.flushAndReload("Created the files of this step"),x=new Map;for(const s of U(n))x.set(s,await v(s));document.body.classList.toggle("without-code",n.open.length===0),await a.showOnly(n.open),n.url&&d.go(n.url),await C({type:"check"}),n.url||await C({type:"visited",path:d.path}),e.resetStep.disabled=!1,h("")}async function P(t){t!==r&&(t>r&&(h(`Catching up to step ${t+1}`),await A(p.steps.slice(r,t),"Applied the steps in between")),await B(t))}async function H(){e.resetStep.disabled=!0;try{for(const[t,o]of x)o!==null&&await v(t)!==o&&await a.write(t,o);f[r]=new Set,await a.flushAndReload(`Reset step ${r+1}`),await B(r)}finally{e.resetStep.disabled=!1}}async function I(){e.solution.disabled=!0;try{await A([m()],"Applied the solution"),await a.showOnly(m().open),await C({type:"check"})}finally{e.solution.disabled=!1}}return e.hintToggle.onclick=()=>O(e.hint.hidden),e.back.onclick=()=>r>0&&P(r-1).catch(b),e.next.onclick=()=>r<p.steps.length-1?P(r+1).catch(b):k(),e.solution.onclick=()=>I().catch(b),e.resetStep.onclick=()=>H().catch(b),{async start(t,o=1){p=t,f=p.steps.map(()=>new Set),r=0;const n=Math.min(Math.max(1,o),p.steps.length)-1;D(),n>0&&(h(`Catching up to step ${n+1}`),await A(p.steps.slice(0,n),"Applied the steps before")),await B(n)},stop(){p=null},handle:t=>C(t).catch(b)}}const i=e=>document.querySelector(e),l={progressBar:i("#progress-bar"),progressLabel:i("#progress-label"),cards:i("#tutorial-cards"),status:i("#status"),leave:i("#leave-tutorial"),code:i("#tutorial-code"),panel:{title:i("#tutorial-title"),steps:i("#tutorial-steps"),count:i("#step-count"),stepTitle:i("#step-title"),text:i("#step-text"),tasks:i("#step-tasks"),hintToggle:i("#hint-toggle"),hint:i("#step-hint"),back:i("#step-back"),solution:i("#step-solution"),next:i("#step-next"),resetStep:i("#reset-step")}};function g(e,a=!1){l.status.textContent=e,l.status.title=e,l.status.classList.toggle("ssp-status--error",a)}function ee(e,a){a!==void 0&&(l.progressBar.style.width=`${Math.round(a*100)}%`,l.progressLabel.textContent=`Preparing the site… ${Math.round(a*100)} %`),g(e)}const T=V({onProgress:ee});let w=null,S=null;const y=F(i("#tutorial-preview"),{onNavigate:e=>w?.handle({type:"visited",path:e})});j(i("#splitter"),l.code,{storageKey:"explore-silverstripe:code-width"});G(i("#sites-menu"),{link:e=>`./playground.html?site=${encodeURIComponent(e)}`});let $=null,_=!1;function Q(){return _=!0,l.progressBar.parentElement.parentElement.classList.remove("progress--done"),$=T.boot({login:!0}).then(e=>(y.setSiteUrl(e.siteUrl),y.setMeta(`${e.username} / ${e.password}`,`Silverstripe ${e.manifest.silverstripe} · PHP ${e.phpVersion}`),l.progressBar.style.width="100%",l.progressLabel.textContent=`The site is ready (Silverstripe ${e.manifest.silverstripe})`,l.progressBar.parentElement.parentElement.classList.add("progress--done"),g(`Ready in ${(e.timings.ready/1e3).toFixed(1)} s`),window.silverstripePlayground=e,e)),$.catch(e=>{console.error(e),l.progressLabel.textContent=e.message,g(e.message,!0)}),$}async function te(){if(!w){const{createCodeEditor:e}=await W(async()=>{const{createCodeEditor:a}=await import("./code-editor-CgfjvLSn.js").then(d=>d.c);return{createCodeEditor:a}},__vite__mapDeps([0,1,2,3]),import.meta.url);S=e(l.code,{call:T.call,setStatus:g,reloadSite:()=>y.reload(),onEvent:a=>w?.handle(a),tree:!1,output:"dark"}),w=Z({elements:l.panel,editor:S,preview:y,setStatus:g,onFinish:()=>M("")})}return w}function ae(){const e=l.cards.querySelector(".card--playground");for(const a of E){const d=Object.assign(document.createElement("li"),{className:"card"}),h=Object.assign(document.createElement("a"),{className:"card__link",href:`?tutorial=${a.slug}`});h.innerHTML=`
      <img class="card__image" width="800" height="394" alt="">
      <div class="card__body">
        <h2 class="card__title"></h2>
        <p class="card__text"></p>
        <ul class="card__tags"></ul>
      </div>`,a.image?h.querySelector(".card__image").src=a.image:(h.querySelector(".card__image").remove(),h.prepend(Object.assign(document.createElement("div"),{className:"card__image"}))),h.querySelector(".card__title").textContent=`${a.order} · ${a.title}`,h.querySelector(".card__text").textContent=a.description,h.querySelector(".card__tags").append(...[a.duration,...a.tags].filter(Boolean).map(k=>Object.assign(document.createElement("li"),{textContent:k}))),h.onclick=k=>{k.preventDefault(),M(`?tutorial=${a.slug}`)},d.append(h),l.cards.insertBefore(d,e)}}async function ne(e,a){document.body.dataset.view="tutorial",document.title=`${e.title} · Explore Silverstripe`,l.leave.disabled=!0,l.panel.resetStep.disabled=!0;const d=await te();d.stop(),_||(y.setSiteUrl(null),Q()),await $,_=!1,await S.reset(),await d.start(e,a),l.leave.disabled=!1}function se(){document.body.dataset.view="home",document.title="Explore Silverstripe",w?.stop()}function L(){const e=new URLSearchParams(location.search),a=E.find(({slug:d})=>d===e.get("tutorial"));a?ne(a,Number(e.get("step"))||1).catch(d=>{console.error(d),g(d.message,!0)}):se()}function M(e){history.pushState(null,"",e||location.pathname),L()}async function oe(){if(!(S.hasUnsavedChanges()&&!confirm("Some files have unsaved changes, which the playground will not have. Continue?"))){l.leave.disabled=!0;try{const e=`${E.find(({slug:d})=>d===new URLSearchParams(location.search).get("tutorial"))?.title??"Tutorial"} (tutorial)`,a=await z(e);g("Saving the site in this browser"),await T.save(a,e),location.href=`./playground.html?site=${encodeURIComponent(a)}&url=${encodeURIComponent(y.path)}`}catch(e){g(e.message,!0),l.leave.disabled=!1}}}for(const e of document.querySelectorAll('[data-link="home"]'))e.onclick=a=>{a.preventDefault(),M("")};l.leave.onclick=oe;addEventListener("popstate",L);ae();Q();L();
