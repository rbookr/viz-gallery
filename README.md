# web-components

传递的所有参数类型都是`string`

## viz-gallery

需要:

 - full.render.js
 - viz.js


| 参数   | 作用                |
|--------|---------------------|
| `data` | 数组型`viz_data`    |
| title  | 标题                |
| engine | `dot`,`neato`,`...` |

```javascript
viz_data = [
    {
        src="graphviz G { a -- b;}",
        engine:'neato',
        log:""
    },
    {
        src="graphviz G { a -- c;}",
        engine:'neato',
        log:""
    }
]
```

样例:

```html
<viz-gallery data="[{&quot;engine&quot;:null,&quot;log&quot;:null,&quot;src&quot;:&quot;graph G{\n  a--b;\n}&quot;},{&quot;engine&quot;:&quot;neato&quot;,&quot;log&quot;:&quot;这是 log&quot;,&quot;src&quot;:&quot;graph G{\n  a--c;\n}&quot;}]" title="demo" engine="dot"></viz-gallery>
```
