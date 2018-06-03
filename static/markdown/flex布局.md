# flex布局

标签（空格分隔）： css

---

### flex属性：

* flex-direction
> 设置主轴的方向，有四种取值，分别是：row | row-reverse | column | column-reverse

* flex-wrap
> 定义如果项目在一条轴线排不下时换行的方式，有三种取值，分别是：nowrap | wrap | wrap-reverse

* flex-flow
> flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

* justify-content
> 定义了项目在主轴上的对齐方式，有五种取值，分别是：flex-start | flex-end | center | space-between | space-around

* align-items
> 定义项目在交叉轴上如何对齐，有五种取值，分别是：flex-start | flex-end | center | baseline | stretch

* align-content
> 定义多根轴线时的对齐方式（如果项目只有一根轴线，该属性不起作用）有六种取值，分别是：flex-start | flex-end | center | space-between | space-around | stretch

### flex项目的属性：

* order
> 定义项目的排列顺序，数值越小，排列越靠前，默认为0

* flex-grow
> 定义项目的放大比例，默认为0，如果存在剩余空间，也不放大

* flex-shrink
> 定义项目的缩小比例，默认为1，如果空间不足，该项目将缩小，负值对该属性无效

* flex-basis
> 定义了在分配多余空间之前，项目占据的主轴空间，可以设为跟width或height属性一样的值，默认值为auto

* flex
> flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

* align-self
> align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性，默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch



//强：字母+数字+特殊字符 
 ^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$
    
     
//中：字母+数字，字母+特殊字符，数字+特殊字符
     ^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$
 
//弱：纯数字，纯字母，纯特殊字符
^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$

