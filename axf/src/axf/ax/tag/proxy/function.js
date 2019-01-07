/**
 * Tag Generator proxy function.
 * Accepts an HTML fragment and returns a Node or NodeList.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy.function = function( html ) {

    let jig = document.createElement('div')
    jig.innerHTML = html
    return jig.childNodes

}
