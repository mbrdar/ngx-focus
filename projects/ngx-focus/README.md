<h1 align="center">ngx-focus</h1>



<p align="center">



Focus directive.



##  Getting Started



ngx-focus contains a angular directive. Directive can be applied to a DOM element in order to focus it conditionally.
Very useful when you are using field in combination with *ngIf.


##  Installation instructions

Install `ngx-focus` from `npm`:

```bash

npm install ngx-focus --save

```



Add `NgxFocusModule` to NgModule imports:

```

import { NgxFocusModule } from 'ngx-focus';



@NgModule({

...

imports: [NgxFocusModule,...]

...

})

```
Add directive to your page:
```

<input ngxFocus>


```
with condition:
```

<input [ngxFocus]="condition">

```

### Inputs
`ngxFocus` Indicates that element should be focused or not, default is `true`

### Outputs
`fieldFocused`
Emits event when field is focused.
