/**
 * modernizr
 */
!(function(e, n, t) {
  function r(e, n) {
    return typeof e === n
  }
  function o() {
    var e, n, t, o, i, s, a
    for (var f in C) {
      if (
        ((e = []),
        (n = C[f]),
        n.name &&
          (e.push(n.name.toLowerCase()),
          n.options && n.options.aliases && n.options.aliases.length))
      )
        for (t = 0; t < n.options.aliases.length; t++)
          e.push(n.options.aliases[t].toLowerCase())
      for (o = r(n.fn, 'function') ? n.fn() : n.fn, i = 0; i < e.length; i++)
        (s = e[i]),
          (a = s.split('.')),
          1 === a.length
            ? (Modernizr[a[0]] = o)
            : (!Modernizr[a[0]] ||
                Modernizr[a[0]] instanceof Boolean ||
                (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
              (Modernizr[a[0]][a[1]] = o)),
          g.push((o ? '' : 'no-') + a.join('-'))
    }
  }
  function i(e) {
    var n = x.className,
      t = Modernizr._config.classPrefix || ''
    if ((w && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)')
      n = n.replace(r, '$1' + t + 'js$2')
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + t + e.join(' ' + t)),
      w ? (x.className.baseVal = n) : (x.className = n))
  }
  function s(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, n, t) {
        return n + t.toUpperCase()
      })
      .replace(/^-/, '')
  }
  function a(e, n) {
    return !!~('' + e).indexOf(n)
  }
  function f() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : w
      ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
      : n.createElement.apply(n, arguments)
  }
  function l(e, n) {
    return function() {
      return e.apply(n, arguments)
    }
  }
  function u(e, n, t) {
    var o
    for (var i in e)
      if (e[i] in n)
        return t === !1
          ? e[i]
          : ((o = n[e[i]]), r(o, 'function') ? l(o, t || n) : o)
    return !1
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function(e, n) {
        return '-' + n.toLowerCase()
      })
      .replace(/^ms-/, '-ms-')
  }
  function d() {
    var e = n.body
    return e || ((e = f(w ? 'svg' : 'body')), (e.fake = !0)), e
  }
  function c(e, t, r, o) {
    var i,
      s,
      a,
      l,
      u = 'modernizr',
      p = f('div'),
      c = d()
    if (parseInt(r, 10))
      for (; r--; )
        (a = f('div')), (a.id = o ? o[r] : u + (r + 1)), p.appendChild(a)
    return (
      (i = f('style')),
      (i.type = 'text/css'),
      (i.id = 's' + u),
      (c.fake ? c : p).appendChild(i),
      c.appendChild(p),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(n.createTextNode(e)),
      (p.id = u),
      c.fake &&
        ((c.style.background = ''),
        (c.style.overflow = 'hidden'),
        (l = x.style.overflow),
        (x.style.overflow = 'hidden'),
        x.appendChild(c)),
      (s = t(p, e)),
      c.fake
        ? (c.parentNode.removeChild(c), (x.style.overflow = l), x.offsetHeight)
        : p.parentNode.removeChild(p),
      !!s
    )
  }
  function m(n, r) {
    var o = n.length
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0
      return !1
    }
    if ('CSSSupportsRule' in e) {
      for (var i = []; o--; ) i.push('(' + p(n[o]) + ':' + r + ')')
      return (
        (i = i.join(' or ')),
        c(
          '@supports (' + i + ') { #modernizr { position: absolute; } }',
          function(e) {
            return 'absolute' == getComputedStyle(e, null).position
          },
        )
      )
    }
    return t
  }
  function v(e, n, o, i) {
    function l() {
      p && (delete P.style, delete P.modElem)
    }
    if (((i = r(i, 'undefined') ? !1 : i), !r(o, 'undefined'))) {
      var u = m(e, o)
      if (!r(u, 'undefined')) return u
    }
    for (var p, d, c, v, h, y = ['modernizr', 'tspan']; !P.style; )
      (p = !0), (P.modElem = f(y.shift())), (P.style = P.modElem.style)
    for (c = e.length, d = 0; c > d; d++)
      if (
        ((v = e[d]),
        (h = P.style[v]),
        a(v, '-') && (v = s(v)),
        P.style[v] !== t)
      ) {
        if (i || r(o, 'undefined')) return l(), 'pfx' == n ? v : !0
        try {
          P.style[v] = o
        } catch (g) {}
        if (P.style[v] != h) return l(), 'pfx' == n ? v : !0
      }
    return l(), !1
  }
  function h(e, n, t, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + ' ' + b.join(s + ' ') + s).split(' ')
    return r(n, 'string') || r(n, 'undefined')
      ? v(a, n, o, i)
      : ((a = (e + ' ' + N.join(s + ' ') + s).split(' ')), u(a, n, t))
  }
  function y(e, n, r) {
    return h(e, t, t, n, r)
  }
  var g = [],
    C = [],
    _ = {
      _version: '3.1.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function(e, n) {
        var t = this
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        C.push({ name: e, fn: n, options: t })
      },
      addAsyncTest: function(e) {
        C.push({ name: null, fn: e })
      },
    },
    Modernizr = function() {}
  ;(Modernizr.prototype = _), (Modernizr = new Modernizr())
  var x = n.documentElement,
    w = 'svg' === x.nodeName.toLowerCase(),
    S = 'Moz O ms Webkit',
    b = _._config.usePrefixes ? S.split(' ') : []
  _._cssomPrefixes = b
  var E = function(n) {
    var r,
      o = prefixes.length,
      i = e.CSSRule
    if ('undefined' == typeof i) return t
    if (!n) return !1
    if (
      ((n = n.replace(/^@/, '')),
      (r = n.replace(/-/g, '_').toUpperCase() + '_RULE'),
      r in i)
    )
      return '@' + n
    for (var s = 0; o > s; s++) {
      var a = prefixes[s],
        f = a.toUpperCase() + '_' + r
      if (f in i) return '@-' + a.toLowerCase() + '-' + n
    }
    return !1
  }
  _.atRule = E
  var N = _._config.usePrefixes ? S.toLowerCase().split(' ') : []
  _._domPrefixes = N
  var z = { elem: f('modernizr') }
  Modernizr._q.push(function() {
    delete z.elem
  })
  var P = { style: z.elem.style }
  Modernizr._q.unshift(function() {
    delete P.style
  }),
    (_.testAllProps = h)
  _.prefixed = function(e, n, t) {
    return 0 === e.indexOf('@')
      ? E(e)
      : (-1 != e.indexOf('-') && (e = s(e)), n ? h(e, n, t) : h(e, 'pfx'))
  }
  ;(_.testAllProps = y),
    Modernizr.addTest('cssanimations', y('animationName', 'a', !0)),
    o(),
    i(g),
    delete _.addTest,
    delete _.addAsyncTest
  for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]()
  e.Modernizr = Modernizr
})(window, document)
/**
 * modernizr end
 */
;(function(window) {
  'use strict'
  var rotateArr = []
  var support = { animations: Modernizr.cssanimations },
    animEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend',
    },
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    onEndAnimation = function(el, callback) {
      var onEndCallbackFn = function(ev) {
        if (support.animations) {
          if (ev.target != this) return
          this.removeEventListener(animEndEventName, onEndCallbackFn)
        }
        if (callback && typeof callback === 'function') {
          callback.call()
        }
      }
      if (support.animations) {
        el.addEventListener(animEndEventName, onEndCallbackFn)
      } else {
        onEndCallbackFn()
      }
    }

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key]
      }
    }
    return a
  }

  function Stack(el, options) {
    this.el = el
    this.options = extend({}, this.options)
    extend(this.options, options)
    this.items = [].slice.call(this.el.children)
    this.itemsTotal = this.items.length
    // if (
    //   (this.options.infinite && this.options.visible >= this.itemsTotal) ||
    //   (!this.options.infinite && this.options.visible > this.itemsTotal) ||
    //   this.options.visible <= 0
    // ) {
    //   this.options.visible = 1
    // }
    this.current = 0
    this._init()
  }

  Stack.prototype.options = {
    perspective: 1000,
    perspectiveOrigin: '50% -50%',
    visible: 20,
    infinite: true,
    onEndStack: function() {
      return false
    },
    stackItemsAnimation: {
      duration: 500,
      type: dynamics.bezier,
      points: [
        { x: 0, y: 0, cp: [{ x: 0.25, y: 0.1 }] },
        { x: 1, y: 1, cp: [{ x: 0.25, y: 1 }] },
      ],
    },
    stackItemsAnimationDelay: 0,
  }

  // set the initial styles for the visible items
  Stack.prototype._init = function() {
    // set default styles
    // first, the stack
    this.el.style.WebkitPerspective = this.el.style.perspective =
      this.options.perspective + 'px'
    this.el.style.WebkitPerspectiveOrigin = this.el.style.perspectiveOrigin = this.options.perspectiveOrigin

    var self = this

    // the items
    for (var i = 0; i < this.itemsTotal; ++i) {
      var item = this.items[i]
      if (i < this.options.visible) {
        item.style.opacity = 1
        item.style.pointerEvents = 'auto'
        item.style.zIndex = this.itemsTotal - i
        var rotate = Math.round(i % 2 === 0 ? -18.5 + 6 * i : 13.5 - 5 * i)
        rotateArr.push(rotate)
        item.style.transform = 'translate3d(0px, 0px, 0px)'
        var imgDom = item.getElementsByTagName('img')[0]
        imgDom.style.transform = 'rotate(' + rotate + 'deg)'
      }
    }

    classie.add(this.items[this.current], 'stack__item--current')
  }

  Stack.prototype.reject = function(callback) {
    this._next('reject', callback)
  }

  Stack.prototype.accept = function(callback) {
    this._next('accept', callback)
  }

  Stack.prototype.restart = function() {
    this.hasEnded = false
    this._init()
  }

  Stack.prototype._next = function(action, callback) {
    if (this.isAnimating || (!this.options.infinite && this.hasEnded)) return
    this.isAnimating = true

    // current item
    var currentItem = this.items[this.current]
    classie.remove(currentItem, 'stack__item--current')

    // add animation class
    classie.add(
      currentItem,
      action === 'accept' ? 'stack__item--accept' : 'stack__item--reject',
    )

    var self = this
    onEndAnimation(currentItem, function() {
      // reset current item
      currentItem.style.opacity = 1
      currentItem.style.pointerEvents = 'none'
      currentItem.style.zIndex = 0
      // currentItem.style.WebkitTransform = currentItem.style.transform =
      //   'translate3d(0px, 0px, -' + parseInt(self.options.visible * 50) + 'px)'

      classie.remove(
        currentItem,
        action === 'accept' ? 'stack__item--accept' : 'stack__item--reject',
      )

      self.items[self.current].style.zIndex = self.options.visible + 1
      self.isAnimating = false

      if (callback) callback()

      if (!self.options.infinite && self.current === 0) {
        self.hasEnded = true
        // callback
        self.options.onEndStack(self)
      }
    })

    // set style for the other items
    for (var i = 0; i < this.itemsTotal; ++i) {
      if (i >= this.options.visible) break

      if (!this.options.infinite) {
        if (this.current + i >= this.itemsTotal - 1) break
        var pos = this.current + i + 1
      } else {
        var pos =
          this.current + i < this.itemsTotal - 1
            ? this.current + i + 1
            : i - (this.itemsTotal - this.current - 1)
      }

      var item = this.items[pos],
        // stack items animation
        animateStackItems = function(item, i) {
          item.style.pointerEvents = 'auto'
          item.style.opacity = 1
          item.style.zIndex = parseInt(self.options.visible - i)

          dynamics.animate(
            item,
            {
              translateZ: parseInt(-1 * 50 * i),
            },
            self.options.stackItemsAnimation,
          )
        }

      setTimeout(
        (function(item, i) {
          return function() {
            var preAnimation

            if (self.options.stackItemsPreAnimation) {
              preAnimation =
                action === 'accept'
                  ? self.options.stackItemsPreAnimation.accept
                  : self.options.stackItemsPreAnimation.reject
            }

            if (preAnimation) {
              // items "pre animation" properties
              var animProps = {}

              for (var key in preAnimation.animationProperties) {
                var interval = preAnimation.elastic
                  ? preAnimation.animationProperties[key] / self.options.visible
                  : 0
                animProps[key] =
                  preAnimation.animationProperties[key] - Number(i * interval)
              }

              // this one remains the same..
              // animProps.translateZ = parseInt(-1 * 50 * (i + 1))

              preAnimation.animationSettings.complete = function() {
                animateStackItems(item, i)
              }

              dynamics.animate(item, animProps, preAnimation.animationSettings)
            } else {
              animateStackItems(item, i)
            }
          }
        })(item, i),
        this.options.stackItemsAnimationDelay,
      )
    }

    // update current
    this.current = this.current < this.itemsTotal - 1 ? this.current + 1 : 0
    classie.add(this.items[this.current], 'stack__item--current')
  }

  window.Stack = Stack
})(window)

var timer = setInterval(function() {
  if (window.isInitCarcous || window.isInitCarcous === 0) {
    if (window.isInitCarcous > 1) {
      initTack()
    }
    clearInterval(timer)
  }
}, 500)

function initTack() {
  ;(function() {
    // 自动轮播
    var autoTimer = null
    function autoPlay() {
      var that = this
      autoTimer = setInterval(function() {
        dian.accept(buttonClickCallback.bind(that))
      }, 3000)
    }
    setTimeout(function() {
      autoPlay()
    }, 3000)

    var support = { animations: Modernizr.cssanimations },
      animEndEventNames = {
        WebkitAnimation: 'webkitAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd',
        animation: 'animationend',
      },
      animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
      onEndAnimation = function(el, callback) {
        var onEndCallbackFn = function(ev) {
          if (support.animations) {
            if (ev.target != this) return
            this.removeEventListener(animEndEventName, onEndCallbackFn)
          }
          if (callback && typeof callback === 'function') {
            callback.call()
          }
        }
        if (support.animations) {
          el.addEventListener(animEndEventName, onEndCallbackFn)
        } else {
          onEndCallbackFn()
        }
      }

    function nextSibling(el) {
      var nextSibling = el.nextSibling
      while (nextSibling && nextSibling.nodeType != 1) {
        nextSibling = nextSibling.nextSibling
      }
      return nextSibling
    }

    var dian = new Stack(document.getElementById('stack_dian'), {
      stackItemsAnimationDelay: 100,
      stackItemsAnimation: {
        duration: 800,
        type: dynamics.spring,
      },
      visible: 20,
      perspectiveOrigin: '50% 50%',
    })

    // controls the click ring effect on the button
    var buttonClickCallback = function(bttn) {
      var bttn = bttn || this
      if (!bttn.setAttribute) return
      bttn.setAttribute('data-state', 'unlocked')
    }

    document
      .querySelector('.button--accept[data-stack = stack_dian]')
      .addEventListener(clickeventtype, function() {
        dian.accept(buttonClickCallback.bind(this))
        clearInterval(autoTimer)
        autoPlay()
      })
    document
      .querySelector('.button--reject[data-stack = stack_dian]')
      .addEventListener(clickeventtype, function() {
        dian.reject(buttonClickCallback.bind(this))
        clearInterval(autoTimer)
        autoPlay()
      })
    ;[].slice
      .call(document.querySelectorAll('.button--sonar'))
      .forEach(function(bttn) {
        bttn.addEventListener(clickeventtype, function() {
          bttn.setAttribute('data-state', 'locked')
        })
      })
    ;[].slice
      .call(document.querySelectorAll('.button--material'))
      .forEach(function(bttn) {
        var radialAction = nextSibling(bttn.parentNode)

        bttn.addEventListener(clickeventtype, function(ev) {
          var boxOffset = radialAction.parentNode.getBoundingClientRect(),
            offset = bttn.getBoundingClientRect()

          radialAction.style.left = Number(offset.left - boxOffset.left) + 'px'
          radialAction.style.top = Number(offset.top - boxOffset.top) + 'px'

          classie.add(
            radialAction,
            classie.has(bttn, 'button--reject')
              ? 'material-circle--reject'
              : 'material-circle--accept',
          )
          classie.add(radialAction, 'material-circle--active')
          onEndAnimation(radialAction, function() {
            classie.remove(
              radialAction,
              classie.has(bttn, 'button--reject')
                ? 'material-circle--reject'
                : 'material-circle--accept',
            )
            classie.remove(radialAction, 'material-circle--active')
          })
        })
      })
  })()
}

/**classie.js */
;(function(window) {
  'use strict'

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass

  if ('classList' in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c)
    }
    addClass = function(elem, c) {
      elem.classList.add(c)
    }
    removeClass = function(elem, c) {
      elem.classList.remove(c)
    }
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className)
    }
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c
      }
    }
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ')
    }
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass
    fn(elem, c)
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  }

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie)
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = classie
  } else {
    // browser global
    window.classie = classie
  }
})(window)
;(function() {})()

// http://stackoverflow.com/a/11381730/989439
function mobilecheck() {
  var check = false
  ;(function(a) {
    if (
      /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

var clickeventtype = mobilecheck() ? 'touchstart' : 'click'

;(function() {
  var support = { animations: Modernizr.cssanimations },
    animEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend',
    },
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    onEndAnimation = function(el, callback) {
      var onEndCallbackFn = function(ev) {
        if (support.animations) {
          if (ev.target != this) return
          this.removeEventListener(animEndEventName, onEndCallbackFn)
        }
        if (callback && typeof callback === 'function') {
          callback.call()
        }
      }
      if (support.animations) {
        el.addEventListener(animEndEventName, onEndCallbackFn)
      } else {
        onEndCallbackFn()
      }
    }

  ;[].slice
    .call(document.querySelectorAll('.button--sonar'))
    .forEach(function(el) {
      el.addEventListener(clickeventtype, function(ev) {
        if (el.getAttribute('data-state') !== 'locked') {
          classie.add(el, 'button--active')
          onEndAnimation(el, function() {
            classie.remove(el, 'button--active')
          })
        }
      })
    })
})()
