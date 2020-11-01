import {setMode} from '@stencil/core'

const themes = ['boticario', 'eudora'];
const theme = document.documentElement.getAttribute('fn-theme') || 'default'

setMode(() => (themes.includes(theme) ? theme : 'default'));

console.log(theme)
