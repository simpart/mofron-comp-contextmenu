/**
 * @file  mofron-comp-split/index.js
 * @brief split component for mofron
 *        this component splits screen to two.
 *        exp. one is for menu or navigate and the other is for main contents.
 * @feature default ratio is 20:80
 *          vertical split the screen into two
 *          the user can change the division ratio by dragging
 * @attention supported size is 'px' or 'rem'
 * @license MIT
 */
const Frame    = require('mofron-comp-frame');
const FadePack = require('mofron-effect-fadepack');
const Click    = require('mofron-event-click');
const ConfArg = mofron.class.ConfArg;

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) ratio parameter
     *                key-value: component option
     * @short ratio
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ContextMenu");
            //this.shortForm("");
            /* init config */
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    let ctxmenu = this;
            this.config({
	        style:     { 'position': 'fixed', 'z-index': '100' },
	        size:      new ConfArg('1.8rem', '2rem'),
		baseColor: [255,255,255],
                effect:    [new FadePack(200)],
                shadow:  "0.05rem",
	        visible: false
            });
	    mofron.window.event(new Click(() => { ctxmenu.visible(false); }));
	    //console.log(mofron);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    position (x,y) {
        try {
            this.style({
                'top':  y + 'px',
		'left': x + 'px'
	    });
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
