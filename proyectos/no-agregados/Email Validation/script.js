function handleInput(evt) {
    const value = evt.target.value
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    if (emailRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }

    if (!value) {
        evt.target.classList.remove('invalid')
    }
}