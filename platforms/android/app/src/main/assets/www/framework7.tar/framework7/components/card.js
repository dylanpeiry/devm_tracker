(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);document,window;var t=e.$,n=(e.Template7,e.utils),r=(e.device,e.support),o=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{open:function(e,a){var n;void 0===e&&(e=".card-expandable"),void 0===a&&(a=!0);var o=this;if(!t(".card-opened").length){var s=t(e).eq(0);if(s&&s.length&&!(s.hasClass("card-opened")||s.hasClass("card-opening")||s.hasClass("card-closing"))){var d,c=s.parents(".page").eq(0);if(c.length)if(s.trigger("card:beforeopen",{prevent:J}),o.emit("cardBeforeOpen",s[0],J),!d){var i,l,p,h=Object.assign({animate:a},o.params.card,s.dataset()),f=s.parents(".page-content");s.attr("data-backdrop-el")&&(i=t(s.attr("data-backdrop-el"))),!i&&h.backdrop&&((i=f.find(".card-backdrop")).length||(i=t('<div class="card-backdrop"></div>'),f.append(i))),h.hideNavbarOnOpen&&((l=c.children(".navbar")).length||c[0].f7Page&&(l=c[0].f7Page.$navbarEl)),h.hideToolbarOnOpen&&((p=c.children(".toolbar")).length||(p=c.parents(".view").children(".toolbar")),p.length||(p=c.parents(".views").children(".toolbar")));var g,v=s.css("transform");v&&v.match(/[2-9]/)&&(g=!0);var b=s.children(".card-content"),m=t(document.createElement("div")).addClass("card-expandable-size");s.append(m);var u,C,O=s[0].offsetWidth,x=s[0].offsetHeight,k=c[0].offsetWidth,w=c[0].offsetHeight,T=m[0].offsetWidth||k,H=m[0].offsetHeight||w,E=T/O,M=H/x,N=s.offset(),$=c.offset();if(N.left-=$.left,g){var y=v.replace(/matrix\(|\)/g,"").split(",").map(function(e){return e.trim()});if(y&&y.length>1){var B=parseFloat(y[0]);u=N.left-O*(1-B)/2,C=N.top-$.top-x*(1-B)/2,o.rtl&&(u-=s[0].scrollLeft)}else u=s[0].offsetLeft,C=s[0].offsetTop-(f.length?f[0].scrollTop:0)}else u=N.left,C=N.top-$.top,o.rtl&&(u-=s[0].scrollLeft);C-=(w-H)/2;var K=T-O-(u-=(k-T)/2);o.rtl&&(u=(n=[K,u])[0],K=n[1]);var W,q,L,P,z,S,X,j,Y,D,F,I=H-x-C,A=(K-u)/2,G=(I-C)/2;h.hideNavbarOnOpen&&l&&l.length&&(l.closest(".navbar-hidden").length?s[0].f7KeepNavbarOnClose=!0:(delete s[0].f7KeepNavbarOnClose,o.navbar.hide(l,h.animate,h.hideStatusbarOnOpen))),h.hideToolbarOnOpen&&p&&p.length&&(p.closest(".toolbar-hidden").length?s[0].f7KeepToolbarOnClose=!0:(delete s[0].f7KeepToolbarOnClose,o.toolbar.hide(p,h.animate))),i&&i.removeClass("card-backdrop-out").addClass("card-backdrop-in"),s.removeClass("card-transitioning"),h.animate&&s.addClass("card-opening"),s.trigger("card:open"),o.emit("cardOpen",s[0]),b.css({width:T+"px",height:H+"px"}).transform("translate3d("+(o.rtl?u+A:-u-A)+"px, 0px, 0) scale("+1/E+", "+1/M+")"),s.transform("translate3d("+A+"px, "+G+"px, 0) scale("+E+", "+M+")"),h.animate?s.transitionEnd(function(){Q()}):Q(),s[0].detachEventHandlers=function(){o.off("resize",R),r.touch&&h.swipeToClose&&(o.off("touchstart:passive",U),o.off("touchmove:active",V),o.off("touchend:passive",Z))},o.on("resize",R),r.touch&&h.swipeToClose&&(o.on("touchstart:passive",U),o.on("touchmove:active",V),o.on("touchend:passive",Z))}}}function J(){d=!0}function Q(){c.addClass("page-with-card-opened"),o.device.ios&&f.length&&(f.css("height",f[0].offsetHeight+1+"px"),setTimeout(function(){f.css("height","")})),s.addClass("card-opened"),s.removeClass("card-opening"),s.trigger("card:opened"),o.emit("cardOpened",s[0],c[0])}function R(){var e;s.removeClass("card-transitioning"),O=s[0].offsetWidth,x=s[0].offsetHeight,k=c[0].offsetWidth,w=c[0].offsetHeight,T=m[0].offsetWidth||k,H=m[0].offsetHeight||w,E=T/O,M=H/x,s.transform("translate3d(0px, 0px, 0) scale(1)"),N=s.offset(),$=c.offset(),N.left-=$.left,N.top-=$.top,u=N.left-(k-T)/2,o.rtl&&(u-=s[0].scrollLeft),C=N.top-(w-H)/2,K=T-O-u,I=H-x-C,o.rtl&&(u=(e=[K,u])[0],K=e[1]),A=(K-u)/2,G=(I-C)/2,s.transform("translate3d("+A+"px, "+G+"px, 0) scale("+E+", "+M+")"),b.css({width:T+"px",height:H+"px"}).transform("translate3d("+(o.rtl?u+A:-u-A)+"px, 0px, 0) scale("+1/E+", "+1/M+")")}function U(e){t(e.target).closest(s).length&&s.hasClass("card-opened")&&(W=b.scrollTop(),q=!0,P=e.targetTouches[0].pageX,z=e.targetTouches[0].pageY,j=void 0,D=!1,F=!1)}function V(e){if(q){if(S=e.targetTouches[0].pageX,X=e.targetTouches[0].pageY,void 0===j&&(j=!!(j||Math.abs(X-z)>Math.abs(S-P))),F||D||(!j&&e.targetTouches[0].clientX<=50?F=!0:D=!0),!F&&!D||D&&0!==W)return q=!0,void(L=!0);L||s.removeClass("card-transitioning"),L=!0,((Y=D?Math.max((X-z)/150,0):Math.max((S-P)/(O/2),0))>0&&D||F)&&(D&&o.device.ios&&(b.css("-webkit-overflow-scrolling","auto"),b.scrollTop(0)),e.preventDefault()),Y>1&&(Y=Math.pow(Y,.3)),Y>(D?1.3:1.1)?(q=!1,L=!1,o.card.close(s)):s.transform("translate3d("+A+"px, "+G+"px, 0) scale("+E*(1-.2*Y)+", "+M*(1-.2*Y)+")")}}function Z(){q&&L&&(q=!1,L=!1,o.device.ios&&b.css("-webkit-overflow-scrolling",""),Y>=.8?o.card.close(s):s.addClass("card-transitioning").transform("translate3d("+A+"px, "+G+"px, 0) scale("+E+", "+M+")"))}},close:function(e,a){void 0===e&&(e=".card-expandable.card-opened"),void 0===a&&(a=!0);var n=this,r=t(e).eq(0);if(r&&r.length&&r.hasClass("card-opened")&&!r.hasClass("card-opening")&&!r.hasClass("card-closing")){var o=r.children(".card-content"),s=r.parents(".page-content"),d=r.parents(".page").eq(0);if(d.length){var c,i,l,p=Object.assign({animate:a},n.params.card,r.dataset());r.attr("data-backdrop-el")&&(l=t(r.attr("data-backdrop-el"))),p.backdrop&&(l=r.parents(".page-content").find(".card-backdrop")),p.hideNavbarOnOpen&&((c=d.children(".navbar")).length||d[0].f7Page&&(c=d[0].f7Page.$navbarEl),c&&c.length&&!r[0].f7KeepNavbarOnClose&&n.navbar.show(c,p.animate)),p.hideToolbarOnOpen&&((i=d.children(".toolbar")).length||(i=d.parents(".view").children(".toolbar")),i.length||(i=d.parents(".views").children(".toolbar")),i&&i.length&&!r[0].f7KeepToolbarOnClose&&n.toolbar.show(i,p.animate)),d.removeClass("page-with-card-opened"),n.device.ios&&s.length&&(s.css("height",s[0].offsetHeight+1+"px"),setTimeout(function(){s.css("height","")})),l&&l.length&&l.removeClass("card-backdrop-in").addClass("card-backdrop-out"),r.removeClass("card-opened card-transitioning"),p.animate?r.addClass("card-closing"):r.addClass("card-no-transition"),r.transform(""),r.trigger("card:close"),n.emit("cardClose",r[0]),o.css({width:"",height:""}).transform("").scrollTop(0,a?300:0),a?o.transitionEnd(function(){h()}):h(),r[0].detachEventHandlers&&(r[0].detachEventHandlers(),delete r[0].detachEventHandlers)}}function h(){r.removeClass("card-closing card-no-transition"),r.trigger("card:closed"),r.find(".card-expandable-size").remove(),n.emit("cardClosed",r[0],d[0])}},toggle:function(e,a){void 0===e&&(e=".card-expandable");var n=t(e).eq(0);n.length&&(n.hasClass("card-opened")?this.card.close(n,a):this.card.open(n,a))}}),s={name:"card",params:{card:{hideNavbarOnOpen:!0,hideStatusbarOnOpen:!0,hideToolbarOnOpen:!0,swipeToClose:!0,closeByBackdropClick:!0,backdrop:!0}},create:function(){n.extend(this,{card:{open:o.open.bind(this),close:o.close.bind(this),toggle:o.toggle.bind(this)}})},on:{pageBeforeIn:function(e){if(this.params.card.hideNavbarOnOpen&&e.navbarEl&&e.$el.find(".card-opened.card-expandable").length&&this.navbar.hide(e.navbarEl,!0,this.params.card.hideStatusbarOnOpen),this.params.card.hideToolbarOnOpen&&e.$el.find(".card-opened.card-expandable").length){var a=e.$el.children(".toolbar");a.length||(a=e.$el.parents(".view").children(".toolbar")),a.length||(a=e.$el.parents(".views").children(".toolbar")),a&&a.length&&this.toolbar.hide(a)}}},clicks:{".card-close":function(e,a){this.card.close(a.card,a.animate)},".card-open":function(e,a){this.card.open(a.card,a.animate)},".card-expandable":function(e,a,n){e.hasClass("card-opened")||e.hasClass("card-opening")||e.hasClass("card-closing")||t(n.target).closest(".card-prevent-open, .card-close").length||this.card.open(e)},".card-backdrop-in":function(){var e=!1;this.params.card.closeByBackdropClick&&(e=!0);var a=t(".card-opened");a.length&&("true"===a.attr("data-close-by-backdrop-click")?e=!0:"false"===a.attr("data-close-by-backdrop-click")&&(e=!1),e&&this.card.close(a))}}};if(a){if(e.prototype.modules&&e.prototype.modules[s.name])return;e.use(s),e.instance&&(e.instance.useModuleParams(s,e.instance.params),e.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
