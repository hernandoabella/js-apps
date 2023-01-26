( () => {
    /**
    * Parse a password string into a numeric value.
    *
    * @param {string} password
    * @return {number}
    */
    let evaluatePassword = ( password ) => {
    let score = 0;
    score = password.length;
    score = ( password.match( /[!]/gmi ) ) ? score + ( password.match( /[!]/gmi ).length * 3 ) : score;
    score = ( password.match( /[A-Z]/gm ) ) ? score + 3 : score;
    score = ( password.match( /[0-9]/gmi ) ) ? score + 3 : score;
    return score;
    };
    /**
    * Convert a numeric score into an object of 'DOM update' data.
    *
    * @param {number} score
    * @return {Object}
    */
    let scoreToData = ( score ) => {
    if ( score >= 30 ) {
    return {
    width: '100%',
    color: '#26de81',
    label: 'Strong',
    };
    } else if ( score >= 20 ) {
    return {
    width: '66%',
    color: '#fd9644',
    label: 'Medium',
    };
    } else {
    return {
    width: '33%',
    color: '#fc5c65',
    label: 'Weak',
    };
    }
    };
    window.addEventListener( 'DOMContentLoaded', () => {
    // Get element refs.
    let p = document.querySelector( '.js--password' );
    let b = document.querySelector( '.js--password-bar' );
    let t = document.querySelector( '.js--password-text' );
    // Listen for updates to password field.
    p.addEventListener( 'input', () => {
    // Convert current value to data.
    let data = scoreToData( evaluatePassword( p.value ) );
    // Update DOM.
    b.style.width = data.width;
    b.style.background = data.color;
    t.innerText = data.label;
    } );
    } );
    } )();