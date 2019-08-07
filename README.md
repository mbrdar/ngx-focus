<h1 align="center">ngx-focus</h1>



<p align="center">



Focus directive.



##  Getting Started



ngx-focus contains a angular directive. Directive can be applied to input field in order for that field to be in focus.
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

<input ngxFocus">


```
with condition:
```

<input [ngxFocus]="condition">

```

### Inputs
`ngxFocus`
boolean flag that indicates will filed will be focused or not, default is true`

### Outputs
`fieldFocused`
Emits event when field is focused.
