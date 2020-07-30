# vue条件渲染

## 1.三元表达式

```html
<div :style="{ 'opacity': !editableCheckNum ? 0.5 : 1 }">555</div>
```

## 2.计算属性

```html
<div :style="computeStyle">555</div>
 
computed: {
  computeStyle() {    return { opacity: !this.editableCheckNum ? 0.5 : 1 }
  }
}
```

## 3.class

```html
<div :class="{ 'this-div-class': !this.editableCheckNum }">555</div>
 
.this-div-class {
  opacity: .5}
```

