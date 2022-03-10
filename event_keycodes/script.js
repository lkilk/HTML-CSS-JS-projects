const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => { 
    insert.innerHTML = `
<div class="key">
    ${event.key === ' ' ? 'Space' : event.key}  
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${event.code} 
    <small>event.code</small>
</div>`
})

//event.key === ' ' ? 'Space' : event.key
//  this is a Turnery operator, it is the same as, 
// if event.key === ' ' return 'Space' else return event.key