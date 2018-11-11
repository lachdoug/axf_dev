ax.tag.proxy.function = function( html ) {

    let jig = document.createElement('div')
    jig.innerHTML = html
    return jig.firstChild

}
