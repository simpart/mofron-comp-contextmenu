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
const comutl  = mofron.util.common;

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
            /* init config */
	    this.confmng().add('offset_x', { type:'size', init:'0px' });
	    this.confmng().add('offset_y', { type:'size', init:'0px' });
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
            super.beforeRender();
	    let chd = this.child();
	    let hei = '0rem';
            for (let cidx in chd) {
                hei = comutl.sizesum(chd[cidx].height(), hei);
	    }
	    this.height(hei);
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
                'top':  comutl.sizesum(y+'px', this.offset()[1]),
		'left': comutl.sizesum(x+'px', this.offset()[0])
	    });
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    offset (x,y) {
        try {
            if (undefined === x) {
                return [this.confmng('offset_x'),this.confmng('offset_y')];
	    }
	    this.confmng('offset_x', x);
	    this.confmng('offset_y', y);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
