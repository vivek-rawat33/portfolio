(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
function uv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Ao = { exports: {} },
  al = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nm;
function rv() {
  if (Nm) return al;
  Nm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: r, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (al.Fragment = l), (al.jsx = u), (al.jsxs = u), al;
}
var jm;
function ov() {
  return jm || ((jm = 1), (Ao.exports = rv())), Ao.exports;
}
var G = ov(),
  xo = { exports: {} },
  at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wm;
function cv() {
  if (wm) return at;
  wm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    L = {};
  function Y(T, N, Z) {
    (this.props = T),
      (this.context = N),
      (this.refs = L),
      (this.updater = Z || R);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (T, N) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, N, "setState");
    }),
    (Y.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function _() {}
  _.prototype = Y.prototype;
  function K(T, N, Z) {
    (this.props = T),
      (this.context = N),
      (this.refs = L),
      (this.updater = Z || R);
  }
  var X = (K.prototype = new _());
  (X.constructor = K), j(X, Y.prototype), (X.isPureReactComponent = !0);
  var ot = Array.isArray,
    H = { H: null, A: null, T: null, S: null, V: null },
    it = Object.prototype.hasOwnProperty;
  function dt(T, N, Z, q, F, ft) {
    return (
      (Z = ft.ref),
      { $$typeof: a, type: T, key: N, ref: Z !== void 0 ? Z : null, props: ft }
    );
  }
  function k(T, N) {
    return dt(T.type, N, void 0, void 0, void 0, T.props);
  }
  function Mt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function _t(T) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (Z) {
        return N[Z];
      })
    );
  }
  var Wt = /\/+/g;
  function Lt(T, N) {
    return typeof T == "object" && T !== null && T.key != null
      ? _t("" + T.key)
      : N.toString(36);
  }
  function Pe() {}
  function we(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(Pe, Pe)
            : ((T.status = "pending"),
              T.then(
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = N));
                },
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = N));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function Kt(T, N, Z, q, F) {
    var ft = typeof T;
    (ft === "undefined" || ft === "boolean") && (T = null);
    var et = !1;
    if (T === null) et = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case l:
              et = !0;
              break;
            case v:
              return (et = T._init), Kt(et(T._payload), N, Z, q, F);
          }
      }
    if (et)
      return (
        (F = F(T)),
        (et = q === "" ? "." + Lt(T, 0) : q),
        ot(F)
          ? ((Z = ""),
            et != null && (Z = et.replace(Wt, "$&/") + "/"),
            Kt(F, N, Z, "", function (hn) {
              return hn;
            }))
          : F != null &&
            (Mt(F) &&
              (F = k(
                F,
                Z +
                  (F.key == null || (T && T.key === F.key)
                    ? ""
                    : ("" + F.key).replace(Wt, "$&/") + "/") +
                  et
              )),
            N.push(F)),
        1
      );
    et = 0;
    var ce = q === "" ? "." : q + ":";
    if (ot(T))
      for (var Et = 0; Et < T.length; Et++)
        (q = T[Et]), (ft = ce + Lt(q, Et)), (et += Kt(q, N, Z, ft, F));
    else if (((Et = E(T)), typeof Et == "function"))
      for (T = Et.call(T), Et = 0; !(q = T.next()).done; )
        (q = q.value), (ft = ce + Lt(q, Et++)), (et += Kt(q, N, Z, ft, F));
    else if (ft === "object") {
      if (typeof T.then == "function") return Kt(we(T), N, Z, q, F);
      throw (
        ((N = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return et;
  }
  function z(T, N, Z) {
    if (T == null) return T;
    var q = [],
      F = 0;
    return (
      Kt(T, q, "", "", function (ft) {
        return N.call(Z, ft, F++);
      }),
      q
    );
  }
  function w(T) {
    if (T._status === -1) {
      var N = T._result;
      (N = N()),
        N.then(
          function (Z) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = Z));
          },
          function (Z) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = Z));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = N));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function mt() {}
  return (
    (at.Children = {
      map: z,
      forEach: function (T, N, Z) {
        z(
          T,
          function () {
            N.apply(this, arguments);
          },
          Z
        );
      },
      count: function (T) {
        var N = 0;
        return (
          z(T, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (T) {
        return (
          z(T, function (N) {
            return N;
          }) || []
        );
      },
      only: function (T) {
        if (!Mt(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (at.Component = Y),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = K),
    (at.StrictMode = r),
    (at.Suspense = y),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H),
    (at.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return H.H.useMemoCache(T);
      },
    }),
    (at.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (at.cloneElement = function (T, N, Z) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var q = j({}, T.props),
        F = T.key,
        ft = void 0;
      if (N != null)
        for (et in (N.ref !== void 0 && (ft = void 0),
        N.key !== void 0 && (F = "" + N.key),
        N))
          !it.call(N, et) ||
            et === "key" ||
            et === "__self" ||
            et === "__source" ||
            (et === "ref" && N.ref === void 0) ||
            (q[et] = N[et]);
      var et = arguments.length - 2;
      if (et === 1) q.children = Z;
      else if (1 < et) {
        for (var ce = Array(et), Et = 0; Et < et; Et++)
          ce[Et] = arguments[Et + 2];
        q.children = ce;
      }
      return dt(T.type, F, void 0, void 0, ft, q);
    }),
    (at.createContext = function (T) {
      return (
        (T = {
          $$typeof: h,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: d, _context: T }),
        T
      );
    }),
    (at.createElement = function (T, N, Z) {
      var q,
        F = {},
        ft = null;
      if (N != null)
        for (q in (N.key !== void 0 && (ft = "" + N.key), N))
          it.call(N, q) &&
            q !== "key" &&
            q !== "__self" &&
            q !== "__source" &&
            (F[q] = N[q]);
      var et = arguments.length - 2;
      if (et === 1) F.children = Z;
      else if (1 < et) {
        for (var ce = Array(et), Et = 0; Et < et; Et++)
          ce[Et] = arguments[Et + 2];
        F.children = ce;
      }
      if (T && T.defaultProps)
        for (q in ((et = T.defaultProps), et))
          F[q] === void 0 && (F[q] = et[q]);
      return dt(T, ft, void 0, void 0, null, F);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (T) {
      return { $$typeof: m, render: T };
    }),
    (at.isValidElement = Mt),
    (at.lazy = function (T) {
      return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: w };
    }),
    (at.memo = function (T, N) {
      return { $$typeof: g, type: T, compare: N === void 0 ? null : N };
    }),
    (at.startTransition = function (T) {
      var N = H.T,
        Z = {};
      H.T = Z;
      try {
        var q = T(),
          F = H.S;
        F !== null && F(Z, q),
          typeof q == "object" &&
            q !== null &&
            typeof q.then == "function" &&
            q.then(mt, P);
      } catch (ft) {
        P(ft);
      } finally {
        H.T = N;
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return H.H.useCacheRefresh();
    }),
    (at.use = function (T) {
      return H.H.use(T);
    }),
    (at.useActionState = function (T, N, Z) {
      return H.H.useActionState(T, N, Z);
    }),
    (at.useCallback = function (T, N) {
      return H.H.useCallback(T, N);
    }),
    (at.useContext = function (T) {
      return H.H.useContext(T);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (T, N) {
      return H.H.useDeferredValue(T, N);
    }),
    (at.useEffect = function (T, N, Z) {
      var q = H.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return q.useEffect(T, N);
    }),
    (at.useId = function () {
      return H.H.useId();
    }),
    (at.useImperativeHandle = function (T, N, Z) {
      return H.H.useImperativeHandle(T, N, Z);
    }),
    (at.useInsertionEffect = function (T, N) {
      return H.H.useInsertionEffect(T, N);
    }),
    (at.useLayoutEffect = function (T, N) {
      return H.H.useLayoutEffect(T, N);
    }),
    (at.useMemo = function (T, N) {
      return H.H.useMemo(T, N);
    }),
    (at.useOptimistic = function (T, N) {
      return H.H.useOptimistic(T, N);
    }),
    (at.useReducer = function (T, N, Z) {
      return H.H.useReducer(T, N, Z);
    }),
    (at.useRef = function (T) {
      return H.H.useRef(T);
    }),
    (at.useState = function (T) {
      return H.H.useState(T);
    }),
    (at.useSyncExternalStore = function (T, N, Z) {
      return H.H.useSyncExternalStore(T, N, Z);
    }),
    (at.useTransition = function () {
      return H.H.useTransition();
    }),
    (at.version = "19.1.0"),
    at
  );
}
var _m;
function uc() {
  return _m || ((_m = 1), (xo.exports = cv())), xo.exports;
}
var nt = uc();
const ra = uv(nt);
var Mo = { exports: {} },
  il = {},
  Eo = { exports: {} },
  Do = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm;
function fv() {
  return (
    Lm ||
      ((Lm = 1),
      (function (a) {
        function l(z, w) {
          var P = z.length;
          z.push(w);
          t: for (; 0 < P; ) {
            var mt = (P - 1) >>> 1,
              T = z[mt];
            if (0 < c(T, w)) (z[mt] = w), (z[P] = T), (P = mt);
            else break t;
          }
        }
        function u(z) {
          return z.length === 0 ? null : z[0];
        }
        function r(z) {
          if (z.length === 0) return null;
          var w = z[0],
            P = z.pop();
          if (P !== w) {
            z[0] = P;
            t: for (var mt = 0, T = z.length, N = T >>> 1; mt < N; ) {
              var Z = 2 * (mt + 1) - 1,
                q = z[Z],
                F = Z + 1,
                ft = z[F];
              if (0 > c(q, P))
                F < T && 0 > c(ft, q)
                  ? ((z[mt] = ft), (z[F] = P), (mt = F))
                  : ((z[mt] = q), (z[Z] = P), (mt = Z));
              else if (F < T && 0 > c(ft, P))
                (z[mt] = ft), (z[F] = P), (mt = F);
              else break t;
            }
          }
          return w;
        }
        function c(z, w) {
          var P = z.sortIndex - w.sortIndex;
          return P !== 0 ? P : z.id - w.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            m = h.now();
          a.unstable_now = function () {
            return h.now() - m;
          };
        }
        var y = [],
          g = [],
          v = 1,
          b = null,
          E = 3,
          R = !1,
          j = !1,
          L = !1,
          Y = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function ot(z) {
          for (var w = u(g); w !== null; ) {
            if (w.callback === null) r(g);
            else if (w.startTime <= z)
              r(g), (w.sortIndex = w.expirationTime), l(y, w);
            else break;
            w = u(g);
          }
        }
        function H(z) {
          if (((L = !1), ot(z), !j))
            if (u(y) !== null) (j = !0), it || ((it = !0), Lt());
            else {
              var w = u(g);
              w !== null && Kt(H, w.startTime - z);
            }
        }
        var it = !1,
          dt = -1,
          k = 5,
          Mt = -1;
        function _t() {
          return Y ? !0 : !(a.unstable_now() - Mt < k);
        }
        function Wt() {
          if (((Y = !1), it)) {
            var z = a.unstable_now();
            Mt = z;
            var w = !0;
            try {
              t: {
                (j = !1), L && ((L = !1), K(dt), (dt = -1)), (R = !0);
                var P = E;
                try {
                  e: {
                    for (
                      ot(z), b = u(y);
                      b !== null && !(b.expirationTime > z && _t());

                    ) {
                      var mt = b.callback;
                      if (typeof mt == "function") {
                        (b.callback = null), (E = b.priorityLevel);
                        var T = mt(b.expirationTime <= z);
                        if (((z = a.unstable_now()), typeof T == "function")) {
                          (b.callback = T), ot(z), (w = !0);
                          break e;
                        }
                        b === u(y) && r(y), ot(z);
                      } else r(y);
                      b = u(y);
                    }
                    if (b !== null) w = !0;
                    else {
                      var N = u(g);
                      N !== null && Kt(H, N.startTime - z), (w = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (E = P), (R = !1);
                }
                w = void 0;
              }
            } finally {
              w ? Lt() : (it = !1);
            }
          }
        }
        var Lt;
        if (typeof X == "function")
          Lt = function () {
            X(Wt);
          };
        else if (typeof MessageChannel < "u") {
          var Pe = new MessageChannel(),
            we = Pe.port2;
          (Pe.port1.onmessage = Wt),
            (Lt = function () {
              we.postMessage(null);
            });
        } else
          Lt = function () {
            _(Wt, 0);
          };
        function Kt(z, w) {
          dt = _(function () {
            z(a.unstable_now());
          }, w);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (a.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (k = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (a.unstable_next = function (z) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = E;
            }
            var P = E;
            E = w;
            try {
              return z();
            } finally {
              E = P;
            }
          }),
          (a.unstable_requestPaint = function () {
            Y = !0;
          }),
          (a.unstable_runWithPriority = function (z, w) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var P = E;
            E = z;
            try {
              return w();
            } finally {
              E = P;
            }
          }),
          (a.unstable_scheduleCallback = function (z, w, P) {
            var mt = a.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? mt + P : mt))
                : (P = mt),
              z)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = P + T),
              (z = {
                id: v++,
                callback: w,
                priorityLevel: z,
                startTime: P,
                expirationTime: T,
                sortIndex: -1,
              }),
              P > mt
                ? ((z.sortIndex = P),
                  l(g, z),
                  u(y) === null &&
                    z === u(g) &&
                    (L ? (K(dt), (dt = -1)) : (L = !0), Kt(H, P - mt)))
                : ((z.sortIndex = T),
                  l(y, z),
                  j || R || ((j = !0), it || ((it = !0), Lt()))),
              z
            );
          }),
          (a.unstable_shouldYield = _t),
          (a.unstable_wrapCallback = function (z) {
            var w = E;
            return function () {
              var P = E;
              E = w;
              try {
                return z.apply(this, arguments);
              } finally {
                E = P;
              }
            };
          });
      })(Do)),
    Do
  );
}
var Hm;
function hv() {
  return Hm || ((Hm = 1), (Eo.exports = fv())), Eo.exports;
}
var Co = { exports: {} },
  te = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function dv() {
  if (Ym) return te;
  Ym = 1;
  var a = uc();
  function l(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(y, g, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: g,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (te.createPortal = function (y, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return d(y, g, null, v);
    }),
    (te.flushSync = function (y) {
      var g = h.T,
        v = r.p;
      try {
        if (((h.T = null), (r.p = 2), y)) return y();
      } finally {
        (h.T = g), (r.p = v), r.d.f();
      }
    }),
    (te.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(y, g));
    }),
    (te.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (te.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var v = g.as,
          b = m(v, g.crossOrigin),
          E = typeof g.integrity == "string" ? g.integrity : void 0,
          R = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? r.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: R,
            })
          : v === "script" &&
            r.d.X(y, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: R,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (te.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = m(g.as, g.crossOrigin);
            r.d.M(y, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(y);
    }),
    (te.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          b = m(v, g.crossOrigin);
        r.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (te.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var v = m(g.as, g.crossOrigin);
          r.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (te.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (te.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (te.useFormState = function (y, g, v) {
      return h.H.useFormState(y, g, v);
    }),
    (te.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (te.version = "19.1.0"),
    te
  );
}
var qm;
function mv() {
  if (qm) return Co.exports;
  qm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Co.exports = dv()), Co.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm;
function pv() {
  if (Gm) return il;
  Gm = 1;
  var a = hv(),
    l = uc(),
    u = mv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return m(s), t;
          if (o === i) return m(s), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) (n = s), (i = o);
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            (f = !0), (n = s), (i = o);
            break;
          }
          if (p === i) {
            (f = !0), (i = s), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = o.child; p; ) {
            if (p === n) {
              (f = !0), (n = o), (i = s);
              break;
            }
            if (p === i) {
              (f = !0), (i = o), (n = s);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
    K = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    Mt = Symbol.for("react.activity"),
    _t = Symbol.for("react.memo_cache_sentinel"),
    Wt = Symbol.iterator;
  function Lt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Wt && t[Wt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Pe = Symbol.for("react.client.reference");
  function we(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Pe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case j:
        return "Fragment";
      case Y:
        return "Profiler";
      case L:
        return "StrictMode";
      case H:
        return "Suspense";
      case it:
        return "SuspenseList";
      case Mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return "Portal";
        case X:
          return (t.displayName || "Context") + ".Provider";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case ot:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case dt:
          return (
            (e = t.displayName || null), e !== null ? e : we(t.type) || "Memo"
          );
        case k:
          (e = t._payload), (t = t._init);
          try {
            return we(t(e));
          } catch {}
      }
    return null;
  }
  var Kt = Array.isArray,
    z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    mt = [],
    T = -1;
  function N(t) {
    return { current: t };
  }
  function Z(t) {
    0 > T || ((t.current = mt[T]), (mt[T] = null), T--);
  }
  function q(t, e) {
    T++, (mt[T] = t.current), (t.current = e);
  }
  var F = N(null),
    ft = N(null),
    et = N(null),
    ce = N(null);
  function Et(t, e) {
    switch ((q(et, e), q(ft, t), q(F, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? rm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = rm(e)), (t = om(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Z(F), q(F, t);
  }
  function hn() {
    Z(F), Z(ft), Z(et);
  }
  function su(t) {
    t.memoizedState !== null && q(ce, t);
    var e = F.current,
      n = om(e, t.type);
    e !== n && (q(ft, t), q(F, n));
  }
  function Dl(t) {
    ft.current === t && (Z(F), Z(ft)),
      ce.current === t && (Z(ce), ($i._currentValue = P));
  }
  var uu = Object.prototype.hasOwnProperty,
    ru = a.unstable_scheduleCallback,
    ou = a.unstable_cancelCallback,
    Hp = a.unstable_shouldYield,
    Yp = a.unstable_requestPaint,
    _e = a.unstable_now,
    qp = a.unstable_getCurrentPriorityLevel,
    qc = a.unstable_ImmediatePriority,
    Gc = a.unstable_UserBlockingPriority,
    Cl = a.unstable_NormalPriority,
    Gp = a.unstable_LowPriority,
    Xc = a.unstable_IdlePriority,
    Xp = a.log,
    Zp = a.unstable_setDisableYieldValue,
    si = null,
    fe = null;
  function dn(t) {
    if (
      (typeof Xp == "function" && Zp(t),
      fe && typeof fe.setStrictMode == "function")
    )
      try {
        fe.setStrictMode(si, t);
      } catch {}
  }
  var he = Math.clz32 ? Math.clz32 : Pp,
    Qp = Math.log,
    Kp = Math.LN2;
  function Pp(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Qp(t) / Kp) | 0)) | 0;
  }
  var Ol = 256,
    Rl = 4194304;
  function Yn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      o = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var p = i & 134217727;
    return (
      p !== 0
        ? ((i = p & ~o),
          i !== 0
            ? (s = Yn(i))
            : ((f &= p),
              f !== 0
                ? (s = Yn(f))
                : n || ((n = p & ~t), n !== 0 && (s = Yn(n)))))
        : ((p = i & ~o),
          p !== 0
            ? (s = Yn(p))
            : f !== 0
            ? (s = Yn(f))
            : n || ((n = i & ~t), n !== 0 && (s = Yn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & o) === 0 &&
          ((o = s & -s),
          (n = e & -e),
          o >= n || (o === 32 && (n & 4194048) !== 0))
        ? e
        : s
    );
  }
  function ui(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Jp(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zc() {
    var t = Ol;
    return (Ol <<= 1), (Ol & 4194048) === 0 && (Ol = 256), t;
  }
  function Qc() {
    var t = Rl;
    return (Rl <<= 1), (Rl & 62914560) === 0 && (Rl = 4194304), t;
  }
  function cu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ri(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function kp(t, e, n, i, s, o) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var p = t.entanglements,
      S = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - he(n),
        B = 1 << V;
      (p[V] = 0), (S[V] = -1);
      var C = D[V];
      if (C !== null)
        for (D[V] = null, V = 0; V < C.length; V++) {
          var O = C[V];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~B;
    }
    i !== 0 && Kc(t, i, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function Kc(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - he(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194090));
  }
  function Pc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - he(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function fu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function hu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Jc() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Om(t.type));
  }
  function Fp(t, e) {
    var n = w.p;
    try {
      return (w.p = t), e();
    } finally {
      w.p = n;
    }
  }
  var mn = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + mn,
    le = "__reactProps$" + mn,
    ha = "__reactContainer$" + mn,
    du = "__reactEvents$" + mn,
    Wp = "__reactListeners$" + mn,
    $p = "__reactHandles$" + mn,
    kc = "__reactResources$" + mn,
    oi = "__reactMarker$" + mn;
  function mu(t) {
    delete t[$t], delete t[le], delete t[du], delete t[Wp], delete t[$p];
  }
  function da(t) {
    var e = t[$t];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[ha] || n[$t])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = dm(t); t !== null; ) {
            if ((n = t[$t])) return n;
            t = dm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function ma(t) {
    if ((t = t[$t] || t[ha])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ci(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function pa(t) {
    var e = t[kc];
    return (
      e ||
        (e = t[kc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[oi] = !0;
  }
  var Fc = new Set(),
    Wc = {};
  function qn(t, e) {
    ya(t, e), ya(t + "Capture", e);
  }
  function ya(t, e) {
    for (Wc[t] = e, t = 0; t < e.length; t++) Fc.add(e[t]);
  }
  var Ip = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    $c = {},
    Ic = {};
  function ty(t) {
    return uu.call(Ic, t)
      ? !0
      : uu.call($c, t)
      ? !1
      : Ip.test(t)
      ? (Ic[t] = !0)
      : (($c[t] = !0), !1);
  }
  function zl(t, e, n) {
    if (ty(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ul(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Je(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  var pu, tf;
  function ga(t) {
    if (pu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (pu = (e && e[1]) || ""),
          (tf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      pu +
      t +
      tf
    );
  }
  var yu = !1;
  function gu(t, e) {
    if (!t || yu) return "";
    yu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (O) {
                  var C = O;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  C = O;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                C = O;
              }
              (B = t()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (O) {
            if (O && C && typeof O.stack == "string") return [O.stack, C.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = i.DetermineComponentFrameRoot(),
        f = o[0],
        p = o[1];
      if (f && p) {
        var S = f.split(`
`),
          D = p.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === D.length)
          for (
            i = S.length - 1, s = D.length - 1;
            1 <= i && 0 <= s && S[i] !== D[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== D[s])) {
                  var V =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (yu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ga(n) : "";
  }
  function ey(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ga(t.type);
      case 16:
        return ga("Lazy");
      case 13:
        return ga("Suspense");
      case 19:
        return ga("SuspenseList");
      case 0:
      case 15:
        return gu(t.type, !1);
      case 11:
        return gu(t.type.render, !1);
      case 1:
        return gu(t.type, !0);
      case 31:
        return ga("Activity");
      default:
        return "";
    }
  }
  function ef(t) {
    try {
      var e = "";
      do (e += ey(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function nf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function ny(t) {
    var e = nf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (i = "" + f), o.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (f) {
            i = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Bl(t) {
    t._valueTracker || (t._valueTracker = ny(t));
  }
  function af(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = nf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Nl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ay = /[\n"\\]/g;
  function Te(t) {
    return t.replace(ay, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function vu(t, e, n, i, s, o, f, p) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + be(e))
          : t.value !== "" + be(e) && (t.value = "" + be(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Su(t, f, be(e))
        : n != null
        ? Su(t, f, be(n))
        : i != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.name = "" + be(p))
        : t.removeAttribute("name");
  }
  function lf(t, e, n, i, s, o, f, p) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + be(n) : ""),
        (e = e != null ? "" + be(e) : n),
        p || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = p ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function Su(t, e, n) {
    (e === "number" && Nl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function va(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + be(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function sf(t, e, n) {
    if (
      e != null &&
      ((e = "" + be(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + be(n) : "";
  }
  function uf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (Kt(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = be(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function Sa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var iy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function rf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || iy.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function of(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && rf(t, s, i);
    } else for (var o in e) e.hasOwnProperty(o) && rf(t, o, e[o]);
  }
  function bu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ly = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    sy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function jl(t) {
    return sy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Tu = null;
  function Au(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ba = null,
    Ta = null;
  function cf(t) {
    var e = ma(t);
    if (e && (t = e.stateNode)) {
      var n = t[le] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (vu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Te("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[le] || null;
                if (!s) throw Error(r(90));
                vu(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && af(i);
          }
          break t;
        case "textarea":
          sf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && va(t, !!n.multiple, e, !1);
      }
    }
  }
  var xu = !1;
  function ff(t, e, n) {
    if (xu) return t(e, n);
    xu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((xu = !1),
        (ba !== null || Ta !== null) &&
          (bs(), ba && ((e = ba), (t = Ta), (Ta = ba = null), cf(e), t)))
      )
        for (e = 0; e < t.length; e++) cf(t[e]);
    }
  }
  function fi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[le] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var ke = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mu = !1;
  if (ke)
    try {
      var hi = {};
      Object.defineProperty(hi, "passive", {
        get: function () {
          Mu = !0;
        },
      }),
        window.addEventListener("test", hi, hi),
        window.removeEventListener("test", hi, hi);
    } catch {
      Mu = !1;
    }
  var pn = null,
    Eu = null,
    wl = null;
  function hf() {
    if (wl) return wl;
    var t,
      e = Eu,
      n = e.length,
      i,
      s = "value" in pn ? pn.value : pn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[o - i]; i++);
    return (wl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function _l(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ll() {
    return !0;
  }
  function df() {
    return !1;
  }
  function se(t) {
    function e(n, i, s, o, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = o),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in t)
        t.hasOwnProperty(p) && ((n = t[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ll
          : df),
        (this.isPropagationStopped = df),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ll));
        },
        persist: function () {},
        isPersistent: Ll,
      }),
      e
    );
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hl = se(Gn),
    di = v({}, Gn, { view: 0, detail: 0 }),
    uy = se(di),
    Du,
    Cu,
    mi,
    Yl = v({}, di, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ru,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== mi &&
              (mi && t.type === "mousemove"
                ? ((Du = t.screenX - mi.screenX), (Cu = t.screenY - mi.screenY))
                : (Cu = Du = 0),
              (mi = t)),
            Du);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Cu;
      },
    }),
    mf = se(Yl),
    ry = v({}, Yl, { dataTransfer: 0 }),
    oy = se(ry),
    cy = v({}, di, { relatedTarget: 0 }),
    Ou = se(cy),
    fy = v({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hy = se(fy),
    dy = v({}, Gn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    my = se(dy),
    py = v({}, Gn, { data: 0 }),
    pf = se(py),
    yy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Sy(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = vy[t])
      ? !!e[t]
      : !1;
  }
  function Ru() {
    return Sy;
  }
  var by = v({}, di, {
      key: function (t) {
        if (t.key) {
          var e = yy[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = _l(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? gy[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ru,
      charCode: function (t) {
        return t.type === "keypress" ? _l(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? _l(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Ty = se(by),
    Ay = v({}, Yl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yf = se(Ay),
    xy = v({}, di, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ru,
    }),
    My = se(xy),
    Ey = v({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dy = se(Ey),
    Cy = v({}, Yl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Oy = se(Cy),
    Ry = v({}, Gn, { newState: 0, oldState: 0 }),
    Vy = se(Ry),
    zy = [9, 13, 27, 32],
    Vu = ke && "CompositionEvent" in window,
    pi = null;
  ke && "documentMode" in document && (pi = document.documentMode);
  var Uy = ke && "TextEvent" in window && !pi,
    gf = ke && (!Vu || (pi && 8 < pi && 11 >= pi)),
    vf = " ",
    Sf = !1;
  function bf(t, e) {
    switch (t) {
      case "keyup":
        return zy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Aa = !1;
  function By(t, e) {
    switch (t) {
      case "compositionend":
        return Tf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Sf = !0), vf);
      case "textInput":
        return (t = e.data), t === vf && Sf ? null : t;
      default:
        return null;
    }
  }
  function Ny(t, e) {
    if (Aa)
      return t === "compositionend" || (!Vu && bf(t, e))
        ? ((t = hf()), (wl = Eu = pn = null), (Aa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return gf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var jy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Af(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!jy[t.type] : e === "textarea";
  }
  function xf(t, e, n, i) {
    ba ? (Ta ? Ta.push(i) : (Ta = [i])) : (ba = i),
      (e = Ds(e, "onChange")),
      0 < e.length &&
        ((n = new Hl("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var yi = null,
    gi = null;
  function wy(t) {
    am(t, 0);
  }
  function ql(t) {
    var e = ci(t);
    if (af(e)) return t;
  }
  function Mf(t, e) {
    if (t === "change") return e;
  }
  var Ef = !1;
  if (ke) {
    var zu;
    if (ke) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var Df = document.createElement("div");
        Df.setAttribute("oninput", "return;"),
          (Uu = typeof Df.oninput == "function");
      }
      zu = Uu;
    } else zu = !1;
    Ef = zu && (!document.documentMode || 9 < document.documentMode);
  }
  function Cf() {
    yi && (yi.detachEvent("onpropertychange", Of), (gi = yi = null));
  }
  function Of(t) {
    if (t.propertyName === "value" && ql(gi)) {
      var e = [];
      xf(e, gi, t, Au(t)), ff(wy, e);
    }
  }
  function _y(t, e, n) {
    t === "focusin"
      ? (Cf(), (yi = e), (gi = n), yi.attachEvent("onpropertychange", Of))
      : t === "focusout" && Cf();
  }
  function Ly(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ql(gi);
  }
  function Hy(t, e) {
    if (t === "click") return ql(e);
  }
  function Yy(t, e) {
    if (t === "input" || t === "change") return ql(e);
  }
  function qy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var de = typeof Object.is == "function" ? Object.is : qy;
  function vi(t, e) {
    if (de(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!uu.call(e, s) || !de(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Rf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vf(t, e) {
    var n = Rf(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Rf(n);
    }
  }
  function zf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? zf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Uf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Nl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Nl(t.document);
    }
    return e;
  }
  function Bu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Gy = ke && "documentMode" in document && 11 >= document.documentMode,
    xa = null,
    Nu = null,
    Si = null,
    ju = !1;
  function Bf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ju ||
      xa == null ||
      xa !== Nl(i) ||
      ((i = xa),
      "selectionStart" in i && Bu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Si && vi(Si, i)) ||
        ((Si = i),
        (i = Ds(Nu, "onSelect")),
        0 < i.length &&
          ((e = new Hl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = xa))));
  }
  function Xn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ma = {
      animationend: Xn("Animation", "AnimationEnd"),
      animationiteration: Xn("Animation", "AnimationIteration"),
      animationstart: Xn("Animation", "AnimationStart"),
      transitionrun: Xn("Transition", "TransitionRun"),
      transitionstart: Xn("Transition", "TransitionStart"),
      transitioncancel: Xn("Transition", "TransitionCancel"),
      transitionend: Xn("Transition", "TransitionEnd"),
    },
    wu = {},
    Nf = {};
  ke &&
    ((Nf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ma.animationend.animation,
      delete Ma.animationiteration.animation,
      delete Ma.animationstart.animation),
    "TransitionEvent" in window || delete Ma.transitionend.transition);
  function Zn(t) {
    if (wu[t]) return wu[t];
    if (!Ma[t]) return t;
    var e = Ma[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Nf) return (wu[t] = e[n]);
    return t;
  }
  var jf = Zn("animationend"),
    wf = Zn("animationiteration"),
    _f = Zn("animationstart"),
    Xy = Zn("transitionrun"),
    Zy = Zn("transitionstart"),
    Qy = Zn("transitioncancel"),
    Lf = Zn("transitionend"),
    Hf = new Map(),
    _u =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  _u.push("scrollEnd");
  function Ue(t, e) {
    Hf.set(t, e), qn(e, [t]);
  }
  var Yf = new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Yf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: ef(e) }), Yf.set(t, e), e);
    }
    return { value: t, source: e, stack: ef(e) };
  }
  var xe = [],
    Ea = 0,
    Lu = 0;
  function Gl() {
    for (var t = Ea, e = (Lu = Ea = 0); e < t; ) {
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      xe[e++] = null;
      var s = xe[e];
      xe[e++] = null;
      var o = xe[e];
      if (((xe[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s);
      }
      o !== 0 && qf(n, s, o);
    }
  }
  function Xl(t, e, n, i) {
    (xe[Ea++] = t),
      (xe[Ea++] = e),
      (xe[Ea++] = n),
      (xe[Ea++] = i),
      (Lu |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function Hu(t, e, n, i) {
    return Xl(t, e, n, i), Zl(t);
  }
  function Da(t, e) {
    return Xl(t, null, null, e), Zl(t);
  }
  function qf(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (i = o.alternate),
        i !== null && (i.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - he(n)),
          (t = o.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function Zl(t) {
    if (50 < Zi) throw ((Zi = 0), (Qr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ca = {};
  function Ky(t, e, n, i) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function me(t, e, n, i) {
    return new Ky(t, e, n, i);
  }
  function Yu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Fe(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = me(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Gf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ql(t, e, n, i, s, o) {
    var f = 0;
    if (((i = t), typeof t == "function")) Yu(t) && (f = 1);
    else if (typeof t == "string")
      f = Jg(t, n, F.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Mt:
          return (t = me(31, n, e, s)), (t.elementType = Mt), (t.lanes = o), t;
        case j:
          return Qn(n.children, s, o, e);
        case L:
          (f = 8), (s |= 24);
          break;
        case Y:
          return (
            (t = me(12, n, e, s | 2)), (t.elementType = Y), (t.lanes = o), t
          );
        case H:
          return (t = me(13, n, e, s)), (t.elementType = H), (t.lanes = o), t;
        case it:
          return (t = me(19, n, e, s)), (t.elementType = it), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case _:
              case X:
                f = 10;
                break t;
              case K:
                f = 9;
                break t;
              case ot:
                f = 11;
                break t;
              case dt:
                f = 14;
                break t;
              case k:
                (f = 16), (i = null);
                break t;
            }
          (f = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = me(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = o), e
    );
  }
  function Qn(t, e, n, i) {
    return (t = me(7, t, i, e)), (t.lanes = n), t;
  }
  function qu(t, e, n) {
    return (t = me(6, t, null, e)), (t.lanes = n), t;
  }
  function Gu(t, e, n) {
    return (
      (e = me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Oa = [],
    Ra = 0,
    Kl = null,
    Pl = 0,
    Me = [],
    Ee = 0,
    Kn = null,
    We = 1,
    $e = "";
  function Pn(t, e) {
    (Oa[Ra++] = Pl), (Oa[Ra++] = Kl), (Kl = t), (Pl = e);
  }
  function Xf(t, e, n) {
    (Me[Ee++] = We), (Me[Ee++] = $e), (Me[Ee++] = Kn), (Kn = t);
    var i = We;
    t = $e;
    var s = 32 - he(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var o = 32 - he(e) + s;
    if (30 < o) {
      var f = s - (s % 5);
      (o = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (We = (1 << (32 - he(e) + s)) | (n << s) | i),
        ($e = o + t);
    } else (We = (1 << o) | (n << s) | i), ($e = t);
  }
  function Xu(t) {
    t.return !== null && (Pn(t, 1), Xf(t, 1, 0));
  }
  function Zu(t) {
    for (; t === Kl; )
      (Kl = Oa[--Ra]), (Oa[Ra] = null), (Pl = Oa[--Ra]), (Oa[Ra] = null);
    for (; t === Kn; )
      (Kn = Me[--Ee]),
        (Me[Ee] = null),
        ($e = Me[--Ee]),
        (Me[Ee] = null),
        (We = Me[--Ee]),
        (Me[Ee] = null);
  }
  var ae = null,
    Rt = null,
    pt = !1,
    Jn = null,
    Le = !1,
    Qu = Error(r(519));
  function kn(t) {
    var e = Error(r(418, ""));
    throw (Ai(Ae(e, t)), Qu);
  }
  function Zf(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[$t] = t), (e[le] = i), n)) {
      case "dialog":
        rt("cancel", e), rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        rt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ki.length; n++) rt(Ki[n], e);
        break;
      case "source":
        rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        rt("error", e), rt("load", e);
        break;
      case "details":
        rt("toggle", e);
        break;
      case "input":
        rt("invalid", e),
          lf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Bl(e);
        break;
      case "select":
        rt("invalid", e);
        break;
      case "textarea":
        rt("invalid", e), uf(e, i.value, i.defaultValue, i.children), Bl(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      um(e.textContent, n)
        ? (i.popover != null && (rt("beforetoggle", e), rt("toggle", e)),
          i.onScroll != null && rt("scroll", e),
          i.onScrollEnd != null && rt("scrollend", e),
          i.onClick != null && (e.onclick = Cs),
          (e = !0))
        : (e = !1),
      e || kn(t);
  }
  function Qf(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 5:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function bi(t) {
    if (t !== ae) return !1;
    if (!pt) return Qf(t), (pt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || uo(t.type, t.memoizedProps))),
        (n = !n)),
      n && Rt && kn(t),
      Qf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Rt = Ne(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Rt = null;
      }
    } else
      e === 27
        ? ((e = Rt), zn(t.type) ? ((t = fo), (fo = null), (Rt = t)) : (Rt = e))
        : (Rt = ae ? Ne(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ti() {
    (Rt = ae = null), (pt = !1);
  }
  function Kf() {
    var t = Jn;
    return (
      t !== null &&
        (oe === null ? (oe = t) : oe.push.apply(oe, t), (Jn = null)),
      t
    );
  }
  function Ai(t) {
    Jn === null ? (Jn = [t]) : Jn.push(t);
  }
  var Ku = N(null),
    Fn = null,
    Ie = null;
  function yn(t, e, n) {
    q(Ku, e._currentValue), (e._currentValue = n);
  }
  function tn(t) {
    (t._currentValue = Ku.current), Z(Ku);
  }
  function Pu(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Ju(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var p = o;
          o = s;
          for (var S = 0; S < e.length; S++)
            if (p.context === e[S]) {
              (o.lanes |= n),
                (p = o.alternate),
                p !== null && (p.lanes |= n),
                Pu(o.return, n, t),
                i || (f = null);
              break t;
            }
          o = p.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (o = f.alternate),
          o !== null && (o.lanes |= n),
          Pu(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function xi(t, e, n, i) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = s.type;
          de(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(p) : (t = [p]));
        }
      } else if (s === ce.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push($i) : (t = [$i]));
      }
      s = s.return;
    }
    t !== null && Ju(e, t, n, i), (e.flags |= 262144);
  }
  function Jl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Wn(t) {
    (Fn = t),
      (Ie = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function It(t) {
    return Pf(Fn, t);
  }
  function kl(t, e) {
    return Fn === null && Wn(t), Pf(t, e);
  }
  function Pf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Ie === null)) {
      if (t === null) throw Error(r(308));
      (Ie = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ie = Ie.next = e;
    return n;
  }
  var Py =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Jy = a.unstable_scheduleCallback,
    ky = a.unstable_NormalPriority,
    Ht = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ku() {
    return { controller: new Py(), data: new Map(), refCount: 0 };
  }
  function Mi(t) {
    t.refCount--,
      t.refCount === 0 &&
        Jy(ky, function () {
          t.controller.abort();
        });
  }
  var Ei = null,
    Fu = 0,
    Va = 0,
    za = null;
  function Fy(t, e) {
    if (Ei === null) {
      var n = (Ei = []);
      (Fu = 0),
        (Va = $r()),
        (za = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return Fu++, e.then(Jf, Jf), e;
  }
  function Jf() {
    if (--Fu === 0 && Ei !== null) {
      za !== null && (za.status = "fulfilled");
      var t = Ei;
      (Ei = null), (Va = 0), (za = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Wy(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var kf = z.S;
  z.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Fy(t, e),
      kf !== null && kf(t, e);
  };
  var $n = N(null);
  function Wu() {
    var t = $n.current;
    return t !== null ? t : At.pooledCache;
  }
  function Fl(t, e) {
    e === null ? q($n, $n.current) : q($n, e.pool);
  }
  function Ff() {
    var t = Wu();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var Di = Error(r(460)),
    Wf = Error(r(474)),
    Wl = Error(r(542)),
    $u = { then: function () {} };
  function $f(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function $l() {}
  function If(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then($l, $l), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), eh(t), t);
      default:
        if (typeof e.status == "string") e.then($l, $l);
        else {
          if (((t = At), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), eh(t), t);
        }
        throw ((Ci = e), Di);
    }
  }
  var Ci = null;
  function th() {
    if (Ci === null) throw Error(r(459));
    var t = Ci;
    return (Ci = null), t;
  }
  function eh(t) {
    if (t === Di || t === Wl) throw Error(r(483));
  }
  var gn = !1;
  function Iu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function tr(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (yt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Zl(t)),
        qf(t, null, n),
        e
      );
    }
    return Xl(t, i, e, n), Zl(t);
  }
  function Oi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Pc(t, n);
    }
  }
  function er(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = f) : (o = o.next = f), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var nr = !1;
  function Ri() {
    if (nr) {
      var t = za;
      if (t !== null) throw t;
    }
  }
  function Vi(t, e, n, i) {
    nr = !1;
    var s = t.updateQueue;
    gn = !1;
    var o = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var S = p,
        D = S.next;
      (S.next = null), f === null ? (o = D) : (f.next = D), (f = S);
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (p = V.lastBaseUpdate),
        p !== f &&
          (p === null ? (V.firstBaseUpdate = D) : (p.next = D),
          (V.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var B = s.baseState;
      (f = 0), (V = D = S = null), (p = o);
      do {
        var C = p.lane & -536870913,
          O = C !== p.lane;
        if (O ? (ct & C) === C : (i & C) === C) {
          C !== 0 && C === Va && (nr = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var tt = t,
              W = p;
            C = e;
            var bt = n;
            switch (W.tag) {
              case 1:
                if (((tt = W.payload), typeof tt == "function")) {
                  B = tt.call(bt, B, C);
                  break t;
                }
                B = tt;
                break t;
              case 3:
                tt.flags = (tt.flags & -65537) | 128;
              case 0:
                if (
                  ((tt = W.payload),
                  (C = typeof tt == "function" ? tt.call(bt, B, C) : tt),
                  C == null)
                )
                  break t;
                B = v({}, B, C);
                break t;
              case 2:
                gn = !0;
            }
          }
          (C = p.callback),
            C !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = s.callbacks),
              O === null ? (s.callbacks = [C]) : O.push(C));
        } else
          (O = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            V === null ? ((D = V = O), (S = B)) : (V = V.next = O),
            (f |= C);
        if (((p = p.next), p === null)) {
          if (((p = s.shared.pending), p === null)) break;
          (O = p),
            (p = O.next),
            (O.next = null),
            (s.lastBaseUpdate = O),
            (s.shared.pending = null);
        }
      } while (!0);
      V === null && (S = B),
        (s.baseState = S),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = V),
        o === null && (s.shared.lanes = 0),
        (Cn |= f),
        (t.lanes = f),
        (t.memoizedState = B);
    }
  }
  function nh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function ah(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) nh(n[t], e);
  }
  var Ua = N(null),
    Il = N(0);
  function ih(t, e) {
    (t = rn), q(Il, t), q(Ua, e), (rn = t | e.baseLanes);
  }
  function ar() {
    q(Il, rn), q(Ua, Ua.current);
  }
  function ir() {
    (rn = Il.current), Z(Ua), Z(Il);
  }
  var bn = 0,
    lt = null,
    vt = null,
    jt = null,
    ts = !1,
    Ba = !1,
    In = !1,
    es = 0,
    zi = 0,
    Na = null,
    $y = 0;
  function Ut() {
    throw Error(r(321));
  }
  function lr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!de(t[n], e[n])) return !1;
    return !0;
  }
  function sr(t, e, n, i, s, o) {
    return (
      (bn = o),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? qh : Gh),
      (In = !1),
      (o = n(i, s)),
      (In = !1),
      Ba && (o = sh(e, n, i, s)),
      lh(t),
      o
    );
  }
  function lh(t) {
    z.H = us;
    var e = vt !== null && vt.next !== null;
    if (((bn = 0), (jt = vt = lt = null), (ts = !1), (zi = 0), (Na = null), e))
      throw Error(r(300));
    t === null ||
      Xt ||
      ((t = t.dependencies), t !== null && Jl(t) && (Xt = !0));
  }
  function sh(t, e, n, i) {
    lt = t;
    var s = 0;
    do {
      if ((Ba && (Na = null), (zi = 0), (Ba = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (jt = vt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (z.H = lg), (o = e(n, i));
    } while (Ba);
    return o;
  }
  function Iy() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ui(e) : e),
      (t = t.useState()[0]),
      (vt !== null ? vt.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function ur() {
    var t = es !== 0;
    return (es = 0), t;
  }
  function rr(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function or(t) {
    if (ts) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ts = !1;
    }
    (bn = 0), (jt = vt = lt = null), (Ba = !1), (zi = es = 0), (Na = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jt === null ? (lt.memoizedState = jt = t) : (jt = jt.next = t), jt;
  }
  function wt() {
    if (vt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = vt.next;
    var e = jt === null ? lt.memoizedState : jt.next;
    if (e !== null) (jt = e), (vt = t);
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      (vt = t),
        (t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null,
        }),
        jt === null ? (lt.memoizedState = jt = t) : (jt = jt.next = t);
    }
    return jt;
  }
  function cr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ui(t) {
    var e = zi;
    return (
      (zi += 1),
      Na === null && (Na = []),
      (t = If(Na, t, e)),
      (e = lt),
      (jt === null ? e.memoizedState : jt.next) === null &&
        ((e = e.alternate),
        (z.H = e === null || e.memoizedState === null ? qh : Gh)),
      t
    );
  }
  function ns(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ui(t);
      if (t.$$typeof === X) return It(t);
    }
    throw Error(r(438, String(t)));
  }
  function fr(t) {
    var e = null,
      n = lt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = lt.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = cr()), (lt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = _t;
    return e.index++, n;
  }
  function en(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function as(t) {
    var e = wt();
    return hr(e, vt, t);
  }
  function hr(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = o.next), (o.next = f);
      }
      (e.baseQueue = s = o), (i.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var p = (f = null),
        S = null,
        D = e,
        V = !1;
      do {
        var B = D.lane & -536870913;
        if (B !== D.lane ? (ct & B) === B : (bn & B) === B) {
          var C = D.revertLane;
          if (C === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              B === Va && (V = !0);
          else if ((bn & C) === C) {
            (D = D.next), C === Va && (V = !0);
            continue;
          } else
            (B = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              S === null ? ((p = S = B), (f = o)) : (S = S.next = B),
              (lt.lanes |= C),
              (Cn |= C);
          (B = D.action),
            In && n(o, B),
            (o = D.hasEagerState ? D.eagerState : n(o, B));
        } else
          (C = {
            lane: B,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            S === null ? ((p = S = C), (f = o)) : (S = S.next = C),
            (lt.lanes |= B),
            (Cn |= B);
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (S === null ? (f = o) : (S.next = p),
        !de(o, t.memoizedState) && ((Xt = !0), V && ((n = za), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = f),
        (t.baseQueue = S),
        (i.lastRenderedState = o);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function dr(t) {
    var e = wt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (o = t(o, f.action)), (f = f.next);
      while (f !== s);
      de(o, e.memoizedState) || (Xt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, i];
  }
  function uh(t, e, n) {
    var i = lt,
      s = wt(),
      o = pt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !de((vt || s).memoizedState, n);
    f && ((s.memoizedState = n), (Xt = !0)), (s = s.queue);
    var p = ch.bind(null, i, s, t);
    if (
      (Bi(2048, 8, p, [t]),
      s.getSnapshot !== e || f || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ja(9, is(), oh.bind(null, i, s, n, e), null),
        At === null)
      )
        throw Error(r(349));
      o || (bn & 124) !== 0 || rh(i, e, n);
    }
    return n;
  }
  function rh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = lt.updateQueue),
      e === null
        ? ((e = cr()), (lt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function oh(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), fh(e) && hh(t);
  }
  function ch(t, e, n) {
    return n(function () {
      fh(e) && hh(t);
    });
  }
  function fh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !de(t, n);
    } catch {
      return !0;
    }
  }
  function hh(t) {
    var e = Da(t, 2);
    e !== null && Se(e, t, 2);
  }
  function mr(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), In)) {
        dn(!0);
        try {
          n();
        } finally {
          dn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: t,
      }),
      e
    );
  }
  function dh(t, e, n, i) {
    return (t.baseState = n), hr(t, vt, typeof i == "function" ? i : en);
  }
  function tg(t, e, n, i, s) {
    if (ss(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          o.listeners.push(f);
        },
      };
      z.T !== null ? n(!0) : (o.isTransition = !1),
        i(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), mh(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function mh(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = z.T,
        f = {};
      z.T = f;
      try {
        var p = n(s, i),
          S = z.S;
        S !== null && S(f, p), ph(t, e, p);
      } catch (D) {
        pr(t, e, D);
      } finally {
        z.T = o;
      }
    } else
      try {
        (o = n(s, i)), ph(t, e, o);
      } catch (D) {
        pr(t, e, D);
      }
  }
  function ph(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            yh(t, e, i);
          },
          function (i) {
            return pr(t, e, i);
          }
        )
      : yh(t, e, n);
  }
  function yh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      gh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), mh(t, n)));
  }
  function pr(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), gh(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function gh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function vh(t, e) {
    return e;
  }
  function Sh(t, e) {
    if (pt) {
      var n = At.formState;
      if (n !== null) {
        t: {
          var i = lt;
          if (pt) {
            if (Rt) {
              e: {
                for (var s = Rt, o = Le; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = Ne(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Rt = Ne(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            kn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = Lh.bind(null, lt, i)),
      (i.dispatch = n),
      (i = mr(!1)),
      (o = br.bind(null, lt, !1, i.queue)),
      (i = ue()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = tg.bind(null, lt, s, o, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function bh(t) {
    var e = wt();
    return Th(e, vt, t);
  }
  function Th(t, e, n) {
    if (
      ((e = hr(t, e, vh)[0]),
      (t = as(en)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Ui(e);
      } catch (f) {
        throw f === Di ? Wl : f;
      }
    else i = e;
    e = wt();
    var s = e.queue,
      o = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((lt.flags |= 2048), ja(9, is(), eg.bind(null, s, n), null)),
      [i, o, t]
    );
  }
  function eg(t, e) {
    t.action = e;
  }
  function Ah(t) {
    var e = wt(),
      n = vt;
    if (n !== null) return Th(e, n, t);
    wt(), (e = e.memoizedState), (n = wt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function ja(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = cr()), (lt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function is() {
    return { destroy: void 0, resource: void 0 };
  }
  function xh() {
    return wt().memoizedState;
  }
  function ls(t, e, n, i) {
    var s = ue();
    (i = i === void 0 ? null : i),
      (lt.flags |= t),
      (s.memoizedState = ja(1 | e, is(), n, i));
  }
  function Bi(t, e, n, i) {
    var s = wt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState.inst;
    vt !== null && i !== null && lr(i, vt.memoizedState.deps)
      ? (s.memoizedState = ja(e, o, n, i))
      : ((lt.flags |= t), (s.memoizedState = ja(1 | e, o, n, i)));
  }
  function Mh(t, e) {
    ls(8390656, 8, t, e);
  }
  function Eh(t, e) {
    Bi(2048, 8, t, e);
  }
  function Dh(t, e) {
    return Bi(4, 2, t, e);
  }
  function Ch(t, e) {
    return Bi(4, 4, t, e);
  }
  function Oh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Rh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Bi(4, 4, Oh.bind(null, e, t), n);
  }
  function yr() {}
  function Vh(t, e) {
    var n = wt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && lr(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function zh(t, e) {
    var n = wt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && lr(e, i[1])) return i[0];
    if (((i = t()), In)) {
      dn(!0);
      try {
        t();
      } finally {
        dn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function gr(t, e, n) {
    return n === void 0 || (bn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Nd()), (lt.lanes |= t), (Cn |= t), n);
  }
  function Uh(t, e, n, i) {
    return de(n, e)
      ? n
      : Ua.current !== null
      ? ((t = gr(t, n, i)), de(t, e) || (Xt = !0), t)
      : (bn & 42) === 0
      ? ((Xt = !0), (t.memoizedState = n))
      : ((t = Nd()), (lt.lanes |= t), (Cn |= t), e);
  }
  function Bh(t, e, n, i, s) {
    var o = w.p;
    w.p = o !== 0 && 8 > o ? o : 8;
    var f = z.T,
      p = {};
    (z.T = p), br(t, !1, e, n);
    try {
      var S = s(),
        D = z.S;
      if (
        (D !== null && D(p, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var V = Wy(S, i);
        Ni(t, e, V, ve(t));
      } else Ni(t, e, i, ve(t));
    } catch (B) {
      Ni(t, e, { then: function () {}, status: "rejected", reason: B }, ve());
    } finally {
      (w.p = o), (z.T = f);
    }
  }
  function ng() {}
  function vr(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Nh(t).queue;
    Bh(
      t,
      s,
      e,
      P,
      n === null
        ? ng
        : function () {
            return jh(t), n(i);
          }
    );
  }
  function Nh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: P,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: en,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function jh(t) {
    var e = Nh(t).next.queue;
    Ni(t, e, {}, ve());
  }
  function Sr() {
    return It($i);
  }
  function wh() {
    return wt().memoizedState;
  }
  function _h() {
    return wt().memoizedState;
  }
  function ag(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ve();
          t = vn(n);
          var i = Sn(e, t, n);
          i !== null && (Se(i, e, n), Oi(i, e, n)),
            (e = { cache: ku() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function ig(t, e, n) {
    var i = ve();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ss(t)
        ? Hh(e, n)
        : ((n = Hu(t, e, n, i)), n !== null && (Se(n, t, i), Yh(n, e, i)));
  }
  function Lh(t, e, n) {
    var i = ve();
    Ni(t, e, n, i);
  }
  function Ni(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ss(t)) Hh(e, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var f = e.lastRenderedState,
            p = o(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = p), de(p, f)))
            return Xl(t, e, s, 0), At === null && Gl(), !1;
        } catch {
        } finally {
        }
      if (((n = Hu(t, e, s, i)), n !== null))
        return Se(n, t, i), Yh(n, e, i), !0;
    }
    return !1;
  }
  function br(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: $r(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ss(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Hu(t, n, i, 2)), e !== null && Se(e, t, 2);
  }
  function ss(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function Hh(t, e) {
    Ba = ts = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Yh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Pc(t, n);
    }
  }
  var us = {
      readContext: It,
      use: ns,
      useCallback: Ut,
      useContext: Ut,
      useEffect: Ut,
      useImperativeHandle: Ut,
      useLayoutEffect: Ut,
      useInsertionEffect: Ut,
      useMemo: Ut,
      useReducer: Ut,
      useRef: Ut,
      useState: Ut,
      useDebugValue: Ut,
      useDeferredValue: Ut,
      useTransition: Ut,
      useSyncExternalStore: Ut,
      useId: Ut,
      useHostTransitionStatus: Ut,
      useFormState: Ut,
      useActionState: Ut,
      useOptimistic: Ut,
      useMemoCache: Ut,
      useCacheRefresh: Ut,
    },
    qh = {
      readContext: It,
      use: ns,
      useCallback: function (t, e) {
        return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: It,
      useEffect: Mh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ls(4194308, 4, Oh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ls(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ls(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var i = t();
        if (In) {
          dn(!0);
          try {
            t();
          } finally {
            dn(!1);
          }
        }
        return (n.memoizedState = [i, e]), i;
      },
      useReducer: function (t, e, n) {
        var i = ue();
        if (n !== void 0) {
          var s = n(e);
          if (In) {
            dn(!0);
            try {
              n(e);
            } finally {
              dn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = ig.bind(null, lt, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = mr(t);
        var e = t.queue,
          n = Lh.bind(null, lt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: yr,
      useDeferredValue: function (t, e) {
        var n = ue();
        return gr(n, t, e);
      },
      useTransition: function () {
        var t = mr(!1);
        return (
          (t = Bh.bind(null, lt, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = lt,
          s = ue();
        if (pt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), At === null)) throw Error(r(349));
          (ct & 124) !== 0 || rh(i, e, n);
        }
        s.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (s.queue = o),
          Mh(ch.bind(null, i, o, t), [t]),
          (i.flags |= 2048),
          ja(9, is(), oh.bind(null, i, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = At.identifierPrefix;
        if (pt) {
          var n = $e,
            i = We;
          (n = (i & ~(1 << (32 - he(i) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = es++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = $y++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Sr,
      useFormState: Sh,
      useActionState: Sh,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = br.bind(null, lt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: fr,
      useCacheRefresh: function () {
        return (ue().memoizedState = ag.bind(null, lt));
      },
    },
    Gh = {
      readContext: It,
      use: ns,
      useCallback: Vh,
      useContext: It,
      useEffect: Eh,
      useImperativeHandle: Rh,
      useInsertionEffect: Dh,
      useLayoutEffect: Ch,
      useMemo: zh,
      useReducer: as,
      useRef: xh,
      useState: function () {
        return as(en);
      },
      useDebugValue: yr,
      useDeferredValue: function (t, e) {
        var n = wt();
        return Uh(n, vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = as(en)[0],
          e = wt().memoizedState;
        return [typeof t == "boolean" ? t : Ui(t), e];
      },
      useSyncExternalStore: uh,
      useId: wh,
      useHostTransitionStatus: Sr,
      useFormState: bh,
      useActionState: bh,
      useOptimistic: function (t, e) {
        var n = wt();
        return dh(n, vt, t, e);
      },
      useMemoCache: fr,
      useCacheRefresh: _h,
    },
    lg = {
      readContext: It,
      use: ns,
      useCallback: Vh,
      useContext: It,
      useEffect: Eh,
      useImperativeHandle: Rh,
      useInsertionEffect: Dh,
      useLayoutEffect: Ch,
      useMemo: zh,
      useReducer: dr,
      useRef: xh,
      useState: function () {
        return dr(en);
      },
      useDebugValue: yr,
      useDeferredValue: function (t, e) {
        var n = wt();
        return vt === null ? gr(n, t, e) : Uh(n, vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = dr(en)[0],
          e = wt().memoizedState;
        return [typeof t == "boolean" ? t : Ui(t), e];
      },
      useSyncExternalStore: uh,
      useId: wh,
      useHostTransitionStatus: Sr,
      useFormState: Ah,
      useActionState: Ah,
      useOptimistic: function (t, e) {
        var n = wt();
        return vt !== null
          ? dh(n, vt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: fr,
      useCacheRefresh: _h,
    },
    wa = null,
    ji = 0;
  function rs(t) {
    var e = ji;
    return (ji += 1), wa === null && (wa = []), If(wa, t, e);
  }
  function wi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function os(t, e) {
    throw e.$$typeof === b
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Xh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Zh(t) {
    function e(x, A) {
      if (t) {
        var M = x.deletions;
        M === null ? ((x.deletions = [A]), (x.flags |= 16)) : M.push(A);
      }
    }
    function n(x, A) {
      if (!t) return null;
      for (; A !== null; ) e(x, A), (A = A.sibling);
      return null;
    }
    function i(x) {
      for (var A = new Map(); x !== null; )
        x.key !== null ? A.set(x.key, x) : A.set(x.index, x), (x = x.sibling);
      return A;
    }
    function s(x, A) {
      return (x = Fe(x, A)), (x.index = 0), (x.sibling = null), x;
    }
    function o(x, A, M) {
      return (
        (x.index = M),
        t
          ? ((M = x.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((x.flags |= 67108866), A) : M)
              : ((x.flags |= 67108866), A))
          : ((x.flags |= 1048576), A)
      );
    }
    function f(x) {
      return t && x.alternate === null && (x.flags |= 67108866), x;
    }
    function p(x, A, M, U) {
      return A === null || A.tag !== 6
        ? ((A = qu(M, x.mode, U)), (A.return = x), A)
        : ((A = s(A, M)), (A.return = x), A);
    }
    function S(x, A, M, U) {
      var Q = M.type;
      return Q === j
        ? V(x, A, M.props.children, U, M.key)
        : A !== null &&
          (A.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === k &&
              Xh(Q) === A.type))
        ? ((A = s(A, M.props)), wi(A, M), (A.return = x), A)
        : ((A = Ql(M.type, M.key, M.props, null, x.mode, U)),
          wi(A, M),
          (A.return = x),
          A);
    }
    function D(x, A, M, U) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Gu(M, x.mode, U)), (A.return = x), A)
        : ((A = s(A, M.children || [])), (A.return = x), A);
    }
    function V(x, A, M, U, Q) {
      return A === null || A.tag !== 7
        ? ((A = Qn(M, x.mode, U, Q)), (A.return = x), A)
        : ((A = s(A, M)), (A.return = x), A);
    }
    function B(x, A, M) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = qu("" + A, x.mode, M)), (A.return = x), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return (
              (M = Ql(A.type, A.key, A.props, null, x.mode, M)),
              wi(M, A),
              (M.return = x),
              M
            );
          case R:
            return (A = Gu(A, x.mode, M)), (A.return = x), A;
          case k:
            var U = A._init;
            return (A = U(A._payload)), B(x, A, M);
        }
        if (Kt(A) || Lt(A))
          return (A = Qn(A, x.mode, M, null)), (A.return = x), A;
        if (typeof A.then == "function") return B(x, rs(A), M);
        if (A.$$typeof === X) return B(x, kl(x, A), M);
        os(x, A);
      }
      return null;
    }
    function C(x, A, M, U) {
      var Q = A !== null ? A.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return Q !== null ? null : p(x, A, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case E:
            return M.key === Q ? S(x, A, M, U) : null;
          case R:
            return M.key === Q ? D(x, A, M, U) : null;
          case k:
            return (Q = M._init), (M = Q(M._payload)), C(x, A, M, U);
        }
        if (Kt(M) || Lt(M)) return Q !== null ? null : V(x, A, M, U, null);
        if (typeof M.then == "function") return C(x, A, rs(M), U);
        if (M.$$typeof === X) return C(x, A, kl(x, M), U);
        os(x, M);
      }
      return null;
    }
    function O(x, A, M, U, Q) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (x = x.get(M) || null), p(A, x, "" + U, Q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case E:
            return (
              (x = x.get(U.key === null ? M : U.key) || null), S(A, x, U, Q)
            );
          case R:
            return (
              (x = x.get(U.key === null ? M : U.key) || null), D(A, x, U, Q)
            );
          case k:
            var st = U._init;
            return (U = st(U._payload)), O(x, A, M, U, Q);
        }
        if (Kt(U) || Lt(U)) return (x = x.get(M) || null), V(A, x, U, Q, null);
        if (typeof U.then == "function") return O(x, A, M, rs(U), Q);
        if (U.$$typeof === X) return O(x, A, M, kl(A, U), Q);
        os(A, U);
      }
      return null;
    }
    function tt(x, A, M, U) {
      for (
        var Q = null, st = null, J = A, $ = (A = 0), Qt = null;
        J !== null && $ < M.length;
        $++
      ) {
        J.index > $ ? ((Qt = J), (J = null)) : (Qt = J.sibling);
        var ht = C(x, J, M[$], U);
        if (ht === null) {
          J === null && (J = Qt);
          break;
        }
        t && J && ht.alternate === null && e(x, J),
          (A = o(ht, A, $)),
          st === null ? (Q = ht) : (st.sibling = ht),
          (st = ht),
          (J = Qt);
      }
      if ($ === M.length) return n(x, J), pt && Pn(x, $), Q;
      if (J === null) {
        for (; $ < M.length; $++)
          (J = B(x, M[$], U)),
            J !== null &&
              ((A = o(J, A, $)),
              st === null ? (Q = J) : (st.sibling = J),
              (st = J));
        return pt && Pn(x, $), Q;
      }
      for (J = i(J); $ < M.length; $++)
        (Qt = O(J, x, $, M[$], U)),
          Qt !== null &&
            (t &&
              Qt.alternate !== null &&
              J.delete(Qt.key === null ? $ : Qt.key),
            (A = o(Qt, A, $)),
            st === null ? (Q = Qt) : (st.sibling = Qt),
            (st = Qt));
      return (
        t &&
          J.forEach(function (wn) {
            return e(x, wn);
          }),
        pt && Pn(x, $),
        Q
      );
    }
    function W(x, A, M, U) {
      if (M == null) throw Error(r(151));
      for (
        var Q = null, st = null, J = A, $ = (A = 0), Qt = null, ht = M.next();
        J !== null && !ht.done;
        $++, ht = M.next()
      ) {
        J.index > $ ? ((Qt = J), (J = null)) : (Qt = J.sibling);
        var wn = C(x, J, ht.value, U);
        if (wn === null) {
          J === null && (J = Qt);
          break;
        }
        t && J && wn.alternate === null && e(x, J),
          (A = o(wn, A, $)),
          st === null ? (Q = wn) : (st.sibling = wn),
          (st = wn),
          (J = Qt);
      }
      if (ht.done) return n(x, J), pt && Pn(x, $), Q;
      if (J === null) {
        for (; !ht.done; $++, ht = M.next())
          (ht = B(x, ht.value, U)),
            ht !== null &&
              ((A = o(ht, A, $)),
              st === null ? (Q = ht) : (st.sibling = ht),
              (st = ht));
        return pt && Pn(x, $), Q;
      }
      for (J = i(J); !ht.done; $++, ht = M.next())
        (ht = O(J, x, $, ht.value, U)),
          ht !== null &&
            (t &&
              ht.alternate !== null &&
              J.delete(ht.key === null ? $ : ht.key),
            (A = o(ht, A, $)),
            st === null ? (Q = ht) : (st.sibling = ht),
            (st = ht));
      return (
        t &&
          J.forEach(function (sv) {
            return e(x, sv);
          }),
        pt && Pn(x, $),
        Q
      );
    }
    function bt(x, A, M, U) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === j &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case E:
            t: {
              for (var Q = M.key; A !== null; ) {
                if (A.key === Q) {
                  if (((Q = M.type), Q === j)) {
                    if (A.tag === 7) {
                      n(x, A.sibling),
                        (U = s(A, M.props.children)),
                        (U.return = x),
                        (x = U);
                      break t;
                    }
                  } else if (
                    A.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === k &&
                      Xh(Q) === A.type)
                  ) {
                    n(x, A.sibling),
                      (U = s(A, M.props)),
                      wi(U, M),
                      (U.return = x),
                      (x = U);
                    break t;
                  }
                  n(x, A);
                  break;
                } else e(x, A);
                A = A.sibling;
              }
              M.type === j
                ? ((U = Qn(M.props.children, x.mode, U, M.key)),
                  (U.return = x),
                  (x = U))
                : ((U = Ql(M.type, M.key, M.props, null, x.mode, U)),
                  wi(U, M),
                  (U.return = x),
                  (x = U));
            }
            return f(x);
          case R:
            t: {
              for (Q = M.key; A !== null; ) {
                if (A.key === Q)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    n(x, A.sibling),
                      (U = s(A, M.children || [])),
                      (U.return = x),
                      (x = U);
                    break t;
                  } else {
                    n(x, A);
                    break;
                  }
                else e(x, A);
                A = A.sibling;
              }
              (U = Gu(M, x.mode, U)), (U.return = x), (x = U);
            }
            return f(x);
          case k:
            return (Q = M._init), (M = Q(M._payload)), bt(x, A, M, U);
        }
        if (Kt(M)) return tt(x, A, M, U);
        if (Lt(M)) {
          if (((Q = Lt(M)), typeof Q != "function")) throw Error(r(150));
          return (M = Q.call(M)), W(x, A, M, U);
        }
        if (typeof M.then == "function") return bt(x, A, rs(M), U);
        if (M.$$typeof === X) return bt(x, A, kl(x, M), U);
        os(x, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (n(x, A.sibling), (U = s(A, M)), (U.return = x), (x = U))
            : (n(x, A), (U = qu(M, x.mode, U)), (U.return = x), (x = U)),
          f(x))
        : n(x, A);
    }
    return function (x, A, M, U) {
      try {
        ji = 0;
        var Q = bt(x, A, M, U);
        return (wa = null), Q;
      } catch (J) {
        if (J === Di || J === Wl) throw J;
        var st = me(29, J, null, x.mode);
        return (st.lanes = U), (st.return = x), st;
      } finally {
      }
    };
  }
  var _a = Zh(!0),
    Qh = Zh(!1),
    De = N(null),
    He = null;
  function Tn(t) {
    var e = t.alternate;
    q(Yt, Yt.current & 1),
      q(De, t),
      He === null &&
        (e === null || Ua.current !== null || e.memoizedState !== null) &&
        (He = t);
  }
  function Kh(t) {
    if (t.tag === 22) {
      if ((q(Yt, Yt.current), q(De, t), He === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (He = t);
      }
    } else An();
  }
  function An() {
    q(Yt, Yt.current), q(De, De.current);
  }
  function nn(t) {
    Z(De), He === t && (He = null), Z(Yt);
  }
  var Yt = N(0);
  function cs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || co(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Tr(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ar = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = ve(),
        s = vn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = Sn(t, s, i)),
        e !== null && (Se(e, t, i), Oi(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = ve(),
        s = vn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Sn(t, s, i)),
        e !== null && (Se(e, t, i), Oi(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ve(),
        i = vn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = Sn(t, i, n)),
        e !== null && (Se(e, t, n), Oi(e, t, n));
    },
  };
  function Ph(t, e, n, i, s, o, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, o, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !vi(n, i) || !vi(s, o)
        : !0
    );
  }
  function Jh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Ar.enqueueReplaceState(e, e.state, null);
  }
  function ta(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var fs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function kh(t) {
    fs(t);
  }
  function Fh(t) {
    console.error(t);
  }
  function Wh(t) {
    fs(t);
  }
  function hs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function $h(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function xr(t, e, n) {
    return (
      (n = vn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        hs(t, e);
      }),
      n
    );
  }
  function Ih(t) {
    return (t = vn(t)), (t.tag = 3), t;
  }
  function td(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = i.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          $h(e, n, i);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        $h(e, n, i),
          typeof s != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var p = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function sg(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && xi(e, n, s, !0),
        (n = De.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              He === null ? Pr() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === $u
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  kr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === $u
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  kr(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return kr(t, i, s), Pr(), !1;
    }
    if (pt)
      return (
        (e = De.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Qu && ((t = Error(r(422), { cause: i })), Ai(Ae(t, n))))
          : (i !== Qu && ((e = Error(r(423), { cause: i })), Ai(Ae(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ae(i, n)),
            (s = xr(t.stateNode, i, s)),
            er(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var o = Error(r(520), { cause: i });
    if (
      ((o = Ae(o, n)),
      Xi === null ? (Xi = [o]) : Xi.push(o),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    (i = Ae(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = xr(n.stateNode, i, t)),
            er(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (On === null || !On.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Ih(s)),
              td(s, t, n, i),
              er(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ed = Error(r(461)),
    Xt = !1;
  function Pt(t, e, n, i) {
    e.child = t === null ? Qh(e, null, n, i) : _a(e, t.child, n, i);
  }
  function nd(t, e, n, i, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var p in i) p !== "ref" && (f[p] = i[p]);
    } else f = i;
    return (
      Wn(e),
      (i = sr(t, e, n, f, o, s)),
      (p = ur()),
      t !== null && !Xt
        ? (rr(t, e, s), an(t, e, s))
        : (pt && p && Xu(e), (e.flags |= 1), Pt(t, e, i, s), e.child)
    );
  }
  function ad(t, e, n, i, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Yu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), id(t, e, o, i, s))
        : ((t = Ql(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !zr(t, s))) {
      var f = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : vi), n(f, i) && t.ref === e.ref)
      )
        return an(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = Fe(o, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function id(t, e, n, i, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (vi(o, i) && t.ref === e.ref)
        if (((Xt = !1), (e.pendingProps = i = o), zr(t, s)))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else return (e.lanes = t.lanes), an(t, e, s);
    }
    return Mr(t, e, n, i, s);
  }
  function ld(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      o = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, o = 0; s !== null; )
            (o = o | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = o & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return sd(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Fl(e, o !== null ? o.cachePool : null),
          o !== null ? ih(e, o) : ar(),
          Kh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          sd(t, e, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (Fl(e, o.cachePool), ih(e, o), An(), (e.memoizedState = null))
        : (t !== null && Fl(e, null), ar(), An());
    return Pt(t, e, s, n), e.child;
  }
  function sd(t, e, n, i) {
    var s = Wu();
    return (
      (s = s === null ? null : { parent: Ht._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && Fl(e, null),
      ar(),
      Kh(e),
      t !== null && xi(t, e, i, !0),
      null
    );
  }
  function ds(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Mr(t, e, n, i, s) {
    return (
      Wn(e),
      (n = sr(t, e, n, i, void 0, s)),
      (i = ur()),
      t !== null && !Xt
        ? (rr(t, e, s), an(t, e, s))
        : (pt && i && Xu(e), (e.flags |= 1), Pt(t, e, n, s), e.child)
    );
  }
  function ud(t, e, n, i, s, o) {
    return (
      Wn(e),
      (e.updateQueue = null),
      (n = sh(e, i, n, s)),
      lh(t),
      (i = ur()),
      t !== null && !Xt
        ? (rr(t, e, o), an(t, e, o))
        : (pt && i && Xu(e), (e.flags |= 1), Pt(t, e, n, o), e.child)
    );
  }
  function rd(t, e, n, i, s) {
    if ((Wn(e), e.stateNode === null)) {
      var o = Ca,
        f = n.contextType;
      typeof f == "object" && f !== null && (o = It(f)),
        (o = new n(i, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Ar),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = i),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Iu(e),
        (f = n.contextType),
        (o.context = typeof f == "object" && f !== null ? It(f) : Ca),
        (o.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Tr(e, n, f, i), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((f = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          f !== o.state && Ar.enqueueReplaceState(o, o.state, null),
          Vi(e, i, o, s),
          Ri(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      o = e.stateNode;
      var p = e.memoizedProps,
        S = ta(n, p);
      o.props = S;
      var D = o.context,
        V = n.contextType;
      (f = Ca), typeof V == "object" && V !== null && (f = It(V));
      var B = n.getDerivedStateFromProps;
      (V =
        typeof B == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (p = e.pendingProps !== p),
        V ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p || D !== f) && Jh(e, o, i, f)),
        (gn = !1);
      var C = e.memoizedState;
      (o.state = C),
        Vi(e, i, o, s),
        Ri(),
        (D = e.memoizedState),
        p || C !== D || gn
          ? (typeof B == "function" && (Tr(e, n, B, i), (D = e.memoizedState)),
            (S = gn || Ph(e, n, S, i, C, D, f))
              ? (V ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = D)),
            (o.props = i),
            (o.state = D),
            (o.context = f),
            (i = S))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (o = e.stateNode),
        tr(t, e),
        (f = e.memoizedProps),
        (V = ta(n, f)),
        (o.props = V),
        (B = e.pendingProps),
        (C = o.context),
        (D = n.contextType),
        (S = Ca),
        typeof D == "object" && D !== null && (S = It(D)),
        (p = n.getDerivedStateFromProps),
        (D =
          typeof p == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((f !== B || C !== S) && Jh(e, o, i, S)),
        (gn = !1),
        (C = e.memoizedState),
        (o.state = C),
        Vi(e, i, o, s),
        Ri();
      var O = e.memoizedState;
      f !== B ||
      C !== O ||
      gn ||
      (t !== null && t.dependencies !== null && Jl(t.dependencies))
        ? (typeof p == "function" && (Tr(e, n, p, i), (O = e.memoizedState)),
          (V =
            gn ||
            Ph(e, n, V, i, C, O, S) ||
            (t !== null && t.dependencies !== null && Jl(t.dependencies)))
            ? (D ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(i, O, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(i, O, S)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = O)),
          (o.props = i),
          (o.state = O),
          (o.context = S),
          (i = V))
        : (typeof o.componentDidUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (o = i),
      ds(t, e),
      (i = (e.flags & 128) !== 0),
      o || i
        ? ((o = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = _a(e, t.child, null, s)),
              (e.child = _a(e, null, n, s)))
            : Pt(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = an(t, e, s)),
      t
    );
  }
  function od(t, e, n, i) {
    return Ti(), (e.flags |= 256), Pt(t, e, n, i), e.child;
  }
  var Er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Dr(t) {
    return { baseLanes: t, cachePool: Ff() };
  }
  function Cr(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ce), t;
  }
  function cd(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      f;
    if (
      ((f = o) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (pt) {
        if ((s ? Tn(e) : An(), pt)) {
          var p = Rt,
            S;
          if ((S = p)) {
            t: {
              for (S = p, p = Le; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break t;
                }
                if (((S = Ne(S.nextSibling)), S === null)) {
                  p = null;
                  break t;
                }
              }
              p = S;
            }
            p !== null
              ? ((e.memoizedState = {
                  dehydrated: p,
                  treeContext: Kn !== null ? { id: We, overflow: $e } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = me(18, null, null, 0)),
                (S.stateNode = p),
                (S.return = e),
                (e.child = S),
                (ae = e),
                (Rt = null),
                (S = !0))
              : (S = !1);
          }
          S || kn(e);
        }
        if (
          ((p = e.memoizedState),
          p !== null && ((p = p.dehydrated), p !== null))
        )
          return co(p) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        nn(e);
      }
      return (
        (p = i.children),
        (i = i.fallback),
        s
          ? (An(),
            (s = e.mode),
            (p = ms({ mode: "hidden", children: p }, s)),
            (i = Qn(i, s, n, null)),
            (p.return = e),
            (i.return = e),
            (p.sibling = i),
            (e.child = p),
            (s = e.child),
            (s.memoizedState = Dr(n)),
            (s.childLanes = Cr(t, f, n)),
            (e.memoizedState = Er),
            i)
          : (Tn(e), Or(e, p))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((p = S.dehydrated), p !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Tn(e), (e.flags &= -257), (e = Rr(t, e, n)))
          : e.memoizedState !== null
          ? (An(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (An(),
            (s = i.fallback),
            (p = e.mode),
            (i = ms({ mode: "visible", children: i.children }, p)),
            (s = Qn(s, p, n, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            _a(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = Dr(n)),
            (i.childLanes = Cr(t, f, n)),
            (e.memoizedState = Er),
            (e = s));
      else if ((Tn(e), co(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var D = f.dgst;
        (f = D),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = f),
          Ai({ value: i, source: null, stack: null }),
          (e = Rr(t, e, n));
      } else if (
        (Xt || xi(t, e, n, !1), (f = (n & t.childLanes) !== 0), Xt || f)
      ) {
        if (
          ((f = At),
          f !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : fu(i)),
            (i = (i & (f.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== S.retryLane))
        )
          throw ((S.retryLane = i), Da(t, i), Se(f, t, i), ed);
        p.data === "$?" || Pr(), (e = Rr(t, e, n));
      } else
        p.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Rt = Ne(p.nextSibling)),
            (ae = e),
            (pt = !0),
            (Jn = null),
            (Le = !1),
            t !== null &&
              ((Me[Ee++] = We),
              (Me[Ee++] = $e),
              (Me[Ee++] = Kn),
              (We = t.id),
              ($e = t.overflow),
              (Kn = e)),
            (e = Or(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (An(),
        (s = i.fallback),
        (p = e.mode),
        (S = t.child),
        (D = S.sibling),
        (i = Fe(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 65011712),
        D !== null ? (s = Fe(D, s)) : ((s = Qn(s, p, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (p = t.child.memoizedState),
        p === null
          ? (p = Dr(n))
          : ((S = p.cachePool),
            S !== null
              ? ((D = Ht._currentValue),
                (S = S.parent !== D ? { parent: D, pool: D } : S))
              : (S = Ff()),
            (p = { baseLanes: p.baseLanes | n, cachePool: S })),
        (s.memoizedState = p),
        (s.childLanes = Cr(t, f, n)),
        (e.memoizedState = Er),
        i)
      : (Tn(e),
        (n = t.child),
        (t = n.sibling),
        (n = Fe(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Or(t, e) {
    return (
      (e = ms({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ms(t, e) {
    return (
      (t = me(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Rr(t, e, n) {
    return (
      _a(e, t.child, null, n),
      (t = Or(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function fd(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Pu(t.return, e, n);
  }
  function Vr(t, e, n, i, s) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = i),
        (o.tail = n),
        (o.tailMode = s));
  }
  function hd(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      o = i.tail;
    if ((Pt(t, e, i.children, n), (i = Yt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && fd(t, n, e);
          else if (t.tag === 19) fd(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((q(Yt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && cs(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Vr(e, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && cs(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        Vr(e, !0, n, null, o);
        break;
      case "together":
        Vr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function an(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Cn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((xi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Fe(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Fe(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function zr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Jl(t)));
  }
  function ug(t, e, n) {
    switch (e.tag) {
      case 3:
        Et(e, e.stateNode.containerInfo),
          yn(e, Ht, t.memoizedState.cache),
          Ti();
        break;
      case 27:
      case 5:
        su(e);
        break;
      case 4:
        Et(e, e.stateNode.containerInfo);
        break;
      case 10:
        yn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Tn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? cd(t, e, n)
            : (Tn(e), (t = an(t, e, n)), t !== null ? t.sibling : null);
        Tn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (xi(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return hd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          q(Yt, Yt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), ld(t, e, n);
      case 24:
        yn(e, Ht, t.memoizedState.cache);
    }
    return an(t, e, n);
  }
  function dd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Xt = !0;
      else {
        if (!zr(t, n) && (e.flags & 128) === 0) return (Xt = !1), ug(t, e, n);
        Xt = (t.flags & 131072) !== 0;
      }
    else (Xt = !1), pt && (e.flags & 1048576) !== 0 && Xf(e, Pl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            Yu(i)
              ? ((t = ta(i, t)), (e.tag = 1), (e = rd(null, e, i, t, n)))
              : ((e.tag = 0), (e = Mr(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === ot)) {
                (e.tag = 11), (e = nd(null, e, i, t, n));
                break t;
              } else if (s === dt) {
                (e.tag = 14), (e = ad(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = we(i) || i), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Mr(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = ta(i, e.pendingProps)), rd(t, e, i, s, n);
      case 3:
        t: {
          if ((Et(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          i = e.pendingProps;
          var o = e.memoizedState;
          (s = o.element), tr(t, e), Vi(e, i, null, n);
          var f = e.memoizedState;
          if (
            ((i = f.cache),
            yn(e, Ht, i),
            i !== o.cache && Ju(e, [Ht], n, !0),
            Ri(),
            (i = f.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: i, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = od(t, e, i, n);
              break t;
            } else if (i !== s) {
              (s = Ae(Error(r(424)), e)), Ai(s), (e = od(t, e, i, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Rt = Ne(t.firstChild),
                  ae = e,
                  pt = !0,
                  Jn = null,
                  Le = !0,
                  n = Qh(e, null, i, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Ti(), i === s)) {
              e = an(t, e, n);
              break t;
            }
            Pt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ds(t, e),
          t === null
            ? (n = gm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : pt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Os(et.current).createElement(n)),
                (i[$t] = e),
                (i[le] = t),
                kt(i, n, t),
                Gt(i),
                (e.stateNode = i))
            : (e.memoizedState = gm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          su(e),
          t === null &&
            pt &&
            ((i = e.stateNode = mm(e.type, e.pendingProps, et.current)),
            (ae = e),
            (Le = !0),
            (s = Rt),
            zn(e.type) ? ((fo = s), (Rt = Ne(i.firstChild))) : (Rt = s)),
          Pt(t, e, e.pendingProps.children, n),
          ds(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            pt &&
            ((s = i = Rt) &&
              ((i = jg(i, e.type, e.pendingProps, Le)),
              i !== null
                ? ((e.stateNode = i),
                  (ae = e),
                  (Rt = Ne(i.firstChild)),
                  (Le = !1),
                  (s = !0))
                : (s = !1)),
            s || kn(e)),
          su(e),
          (s = e.type),
          (o = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = o.children),
          uo(s, o) ? (i = null) : f !== null && uo(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = sr(t, e, Iy, null, null, n)), ($i._currentValue = s)),
          ds(t, e),
          Pt(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            pt &&
            ((t = n = Rt) &&
              ((n = wg(n, e.pendingProps, Le)),
              n !== null
                ? ((e.stateNode = n), (ae = e), (Rt = null), (t = !0))
                : (t = !1)),
            t || kn(e)),
          null
        );
      case 13:
        return cd(t, e, n);
      case 4:
        return (
          Et(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = _a(e, null, i, n)) : Pt(t, e, i, n),
          e.child
        );
      case 11:
        return nd(t, e, e.type, e.pendingProps, n);
      case 7:
        return Pt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          yn(e, e.type, i.value),
          Pt(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          Wn(e),
          (s = It(s)),
          (i = i(s)),
          (e.flags |= 1),
          Pt(t, e, i, n),
          e.child
        );
      case 14:
        return ad(t, e, e.type, e.pendingProps, n);
      case 15:
        return id(t, e, e.type, e.pendingProps, n);
      case 19:
        return hd(t, e, n);
      case 31:
        return (
          (i = e.pendingProps),
          (n = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((n = ms(i, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = Fe(t.child, i)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return ld(t, e, n);
      case 24:
        return (
          Wn(e),
          (i = It(Ht)),
          t === null
            ? ((s = Wu()),
              s === null &&
                ((s = At),
                (o = ku()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: i, cache: s }),
              Iu(e),
              yn(e, Ht, s))
            : ((t.lanes & n) !== 0 && (tr(t, e), Vi(e, null, null, n), Ri()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  yn(e, Ht, i))
                : ((i = o.cache),
                  yn(e, Ht, i),
                  i !== s.cache && Ju(e, [Ht], n, !0))),
          Pt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ln(t) {
    t.flags |= 4;
  }
  function md(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Am(e))) {
      if (
        ((e = De.current),
        e !== null &&
          ((ct & 4194048) === ct
            ? He !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || e !== He))
      )
        throw ((Ci = $u), Wf);
      t.flags |= 8192;
    }
  }
  function ps(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Qc() : 536870912), (t.lanes |= e), (qa |= e));
  }
  function _i(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function rg(t, e, n) {
    var i = e.pendingProps;
    switch ((Zu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(e), null;
      case 1:
        return Ct(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          tn(Ht),
          hn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (bi(e)
              ? ln(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Kf())),
          Ct(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (ln(e),
              n !== null ? (Ct(e), md(e, n)) : (Ct(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (ln(e), Ct(e), md(e, n))
              : (Ct(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && ln(e), Ct(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Dl(e), (n = et.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && ln(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          (t = F.current),
            bi(e) ? Zf(e) : ((t = mm(s, i, n)), (e.stateNode = t), ln(e));
        }
        return Ct(e), null;
      case 5:
        if ((Dl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && ln(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          if (((t = F.current), bi(e))) Zf(e);
          else {
            switch (((s = Os(et.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            (t[$t] = e), (t[le] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((kt(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && ln(e);
          }
        }
        return Ct(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && ln(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = et.current), bi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ae),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[$t] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                um(t.nodeValue, n)
              )),
              t || kn(e);
          } else (t = Os(t).createTextNode(i)), (t[$t] = e), (e.stateNode = t);
        }
        return Ct(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = bi(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[$t] = e;
            } else
              Ti(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (s = !1);
          } else
            (s = Kf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (nn(e), e) : (nn(e), null);
        }
        if ((nn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var o = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
            o !== s && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          ps(e, e.updateQueue),
          Ct(e),
          null
        );
      case 4:
        return hn(), t === null && no(e.stateNode.containerInfo), Ct(e), null;
      case 10:
        return tn(e.type), Ct(e), null;
      case 19:
        if ((Z(Yt), (s = e.memoizedState), s === null)) return Ct(e), null;
        if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
          if (i) _i(s, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = cs(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      _i(s, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      ps(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Gf(n, t), (n = n.sibling);
                  return q(Yt, (Yt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              _e() > vs &&
              ((e.flags |= 128), (i = !0), _i(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = cs(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ps(e, t),
                _i(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !pt)
              )
                return Ct(e), null;
            } else
              2 * _e() - s.renderingStartTime > vs &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), _i(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = s.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = _e()),
            (e.sibling = null),
            (t = Yt.current),
            q(Yt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          nn(e),
          ir(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (n = e.updateQueue),
          n !== null && ps(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && Z($n),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          tn(Ht),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function og(t, e) {
    switch ((Zu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          tn(Ht),
          hn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Dl(e), null;
      case 13:
        if (
          (nn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ti();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Z(Yt), null;
      case 4:
        return hn(), null;
      case 10:
        return tn(e.type), null;
      case 22:
      case 23:
        return (
          nn(e),
          ir(),
          t !== null && Z($n),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return tn(Ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pd(t, e) {
    switch ((Zu(e), e.tag)) {
      case 3:
        tn(Ht), hn();
        break;
      case 26:
      case 27:
      case 5:
        Dl(e);
        break;
      case 4:
        hn();
        break;
      case 13:
        nn(e);
        break;
      case 19:
        Z(Yt);
        break;
      case 10:
        tn(e.type);
        break;
      case 22:
      case 23:
        nn(e), ir(), t !== null && Z($n);
        break;
      case 24:
        tn(Ht);
    }
  }
  function Li(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var o = n.create,
              f = n.inst;
            (i = o()), (f.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      Tt(e, e.return, p);
    }
  }
  function xn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        i = o;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              p = f.destroy;
            if (p !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n,
                D = p;
              try {
                D();
              } catch (V) {
                Tt(s, S, V);
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (V) {
      Tt(e, e.return, V);
    }
  }
  function yd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ah(e, n);
      } catch (i) {
        Tt(t, t.return, i);
      }
    }
  }
  function gd(t, e, n) {
    (n.props = ta(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Tt(t, e, i);
    }
  }
  function Hi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Tt(t, e, s);
    }
  }
  function Ye(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Tt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Tt(t, e, s);
        }
      else n.current = null;
  }
  function vd(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function Ur(t, e, n) {
    try {
      var i = t.stateNode;
      Vg(i, t.type, n, e), (i[le] = e);
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function Sd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && zn(t.type)) ||
      t.tag === 4
    );
  }
  function Br(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Sd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && zn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Nr(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Cs));
    else if (
      i !== 4 &&
      (i === 27 && zn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Nr(t, e, n), t = t.sibling; t !== null; )
        Nr(t, e, n), (t = t.sibling);
  }
  function ys(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && zn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ys(t, e, n), t = t.sibling; t !== null; )
        ys(t, e, n), (t = t.sibling);
  }
  function bd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      kt(e, i, n), (e[$t] = t), (e[le] = n);
    } catch (o) {
      Tt(t, t.return, o);
    }
  }
  var sn = !1,
    Bt = !1,
    jr = !1,
    Td = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null;
  function cg(t, e) {
    if (((t = t.containerInfo), (lo = Ns), (t = Uf(t)), Bu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              p = -1,
              S = -1,
              D = 0,
              V = 0,
              B = t,
              C = null;
            e: for (;;) {
              for (
                var O;
                B !== n || (s !== 0 && B.nodeType !== 3) || (p = f + s),
                  B !== o || (i !== 0 && B.nodeType !== 3) || (S = f + i),
                  B.nodeType === 3 && (f += B.nodeValue.length),
                  (O = B.firstChild) !== null;

              )
                (C = B), (B = O);
              for (;;) {
                if (B === t) break e;
                if (
                  (C === n && ++D === s && (p = f),
                  C === o && ++V === i && (S = f),
                  (O = B.nextSibling) !== null)
                )
                  break;
                (B = C), (C = B.parentNode);
              }
              B = O;
            }
            n = p === -1 || S === -1 ? null : { start: p, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      so = { focusedElem: t, selectionRange: n }, Ns = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (i = n.stateNode);
                try {
                  var tt = ta(n.type, s, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(tt, o)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (W) {
                  Tt(n, n.return, W);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  oo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      oo(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
  }
  function Ad(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Mn(t, n), i & 4 && Li(5, n);
        break;
      case 1:
        if ((Mn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Tt(n, n.return, f);
            }
          else {
            var s = ta(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Tt(n, n.return, f);
            }
          }
        i & 64 && yd(n), i & 512 && Hi(n, n.return);
        break;
      case 3:
        if ((Mn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            ah(t, e);
          } catch (f) {
            Tt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && bd(n);
      case 26:
      case 5:
        Mn(t, n), e === null && i & 4 && vd(n), i & 512 && Hi(n, n.return);
        break;
      case 12:
        Mn(t, n);
        break;
      case 13:
        Mn(t, n),
          i & 4 && Ed(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Sg.bind(null, n)), _g(t, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || sn), !i)) {
          (e = (e !== null && e.memoizedState !== null) || Bt), (s = sn);
          var o = Bt;
          (sn = i),
            (Bt = e) && !o ? En(t, n, (n.subtreeFlags & 8772) !== 0) : Mn(t, n),
            (sn = s),
            (Bt = o);
        }
        break;
      case 30:
        break;
      default:
        Mn(t, n);
    }
  }
  function xd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), xd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && mu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Dt = null,
    re = !1;
  function un(t, e, n) {
    for (n = n.child; n !== null; ) Md(t, e, n), (n = n.sibling);
  }
  function Md(t, e, n) {
    if (fe && typeof fe.onCommitFiberUnmount == "function")
      try {
        fe.onCommitFiberUnmount(si, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Bt || Ye(n, e),
          un(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Bt || Ye(n, e);
        var i = Dt,
          s = re;
        zn(n.type) && ((Dt = n.stateNode), (re = !1)),
          un(t, e, n),
          Ji(n.stateNode),
          (Dt = i),
          (re = s);
        break;
      case 5:
        Bt || Ye(n, e);
      case 6:
        if (
          ((i = Dt),
          (s = re),
          (Dt = null),
          un(t, e, n),
          (Dt = i),
          (re = s),
          Dt !== null)
        )
          if (re)
            try {
              (Dt.nodeType === 9
                ? Dt.body
                : Dt.nodeName === "HTML"
                ? Dt.ownerDocument.body
                : Dt
              ).removeChild(n.stateNode);
            } catch (o) {
              Tt(n, e, o);
            }
          else
            try {
              Dt.removeChild(n.stateNode);
            } catch (o) {
              Tt(n, e, o);
            }
        break;
      case 18:
        Dt !== null &&
          (re
            ? ((t = Dt),
              hm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              nl(t))
            : hm(Dt, n.stateNode));
        break;
      case 4:
        (i = Dt),
          (s = re),
          (Dt = n.stateNode.containerInfo),
          (re = !0),
          un(t, e, n),
          (Dt = i),
          (re = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bt || xn(2, n, e), Bt || xn(4, n, e), un(t, e, n);
        break;
      case 1:
        Bt ||
          (Ye(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && gd(n, e, i)),
          un(t, e, n);
        break;
      case 21:
        un(t, e, n);
        break;
      case 22:
        (Bt = (i = Bt) || n.memoizedState !== null), un(t, e, n), (Bt = i);
        break;
      default:
        un(t, e, n);
    }
  }
  function Ed(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        nl(t);
      } catch (n) {
        Tt(e, e.return, n);
      }
  }
  function fg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Td()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Td()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function wr(t, e) {
    var n = fg(t);
    e.forEach(function (i) {
      var s = bg.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          o = t,
          f = e,
          p = f;
        t: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (zn(p.type)) {
                (Dt = p.stateNode), (re = !1);
                break t;
              }
              break;
            case 5:
              (Dt = p.stateNode), (re = !1);
              break t;
            case 3:
            case 4:
              (Dt = p.stateNode.containerInfo), (re = !0);
              break t;
          }
          p = p.return;
        }
        if (Dt === null) throw Error(r(160));
        Md(o, f, s),
          (Dt = null),
          (re = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Dd(e, t), (e = e.sibling);
  }
  var Be = null;
  function Dd(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t),
          ye(t),
          i & 4 && (xn(3, t, t.return), Li(3, t), xn(5, t, t.return));
        break;
      case 1:
        pe(e, t),
          ye(t),
          i & 512 && (Bt || n === null || Ye(n, n.return)),
          i & 64 &&
            sn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = Be;
        if (
          (pe(e, t),
          ye(t),
          i & 512 && (Bt || n === null || Ye(n, n.return)),
          i & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[oi] ||
                          o[$t] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(i)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        kt(o, i, n),
                        (o[$t] = t),
                        Gt(o),
                        (i = o);
                      break t;
                    case "link":
                      var f = bm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        kt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (f = bm("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        kt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (o[$t] = t), Gt(o), (i = o);
                }
                t.stateNode = i;
              } else Tm(s, t.type, t.stateNode);
            else t.stateNode = Sm(s, i, t.memoizedProps);
          else
            o !== i
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                i === null
                  ? Tm(s, t.type, t.stateNode)
                  : Sm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Ur(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        pe(e, t),
          ye(t),
          i & 512 && (Bt || n === null || Ye(n, n.return)),
          n !== null && i & 4 && Ur(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (pe(e, t),
          ye(t),
          i & 512 && (Bt || n === null || Ye(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Sa(s, "");
          } catch (O) {
            Tt(t, t.return, O);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Ur(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (jr = !0);
        break;
      case 6:
        if ((pe(e, t), ye(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (O) {
            Tt(t, t.return, O);
          }
        }
        break;
      case 3:
        if (
          ((zs = null),
          (s = Be),
          (Be = Rs(e.containerInfo)),
          pe(e, t),
          (Be = s),
          ye(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nl(e.containerInfo);
          } catch (O) {
            Tt(t, t.return, O);
          }
        jr && ((jr = !1), Cd(t));
        break;
      case 4:
        (i = Be),
          (Be = Rs(t.stateNode.containerInfo)),
          pe(e, t),
          ye(t),
          (Be = i);
        break;
      case 12:
        pe(e, t), ye(t);
        break;
      case 13:
        pe(e, t),
          ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Gr = _e()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), wr(t, i)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          D = sn,
          V = Bt;
        if (
          ((sn = D || s),
          (Bt = V || S),
          pe(e, t),
          (Bt = V),
          (sn = D),
          ye(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || sn || Bt || ea(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((o = S.stateNode), s))
                    (f = o.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    p = S.stateNode;
                    var B = S.memoizedProps.style,
                      C =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    p.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (O) {
                  Tt(S, S.return, O);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (O) {
                  Tt(S, S.return, O);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), wr(t, n))));
        break;
      case 19:
        pe(e, t),
          ye(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), wr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), ye(t);
    }
  }
  function ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Sd(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = Br(t);
            ys(t, o, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Sa(f, ""), (n.flags &= -33));
            var p = Br(t);
            ys(t, p, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              D = Br(t);
            Nr(t, D, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (V) {
        Tt(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Cd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Cd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Mn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Ad(t, e.alternate, e), (e = e.sibling);
  }
  function ea(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xn(4, e, e.return), ea(e);
          break;
        case 1:
          Ye(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && gd(e, e.return, n),
            ea(e);
          break;
        case 27:
          Ji(e.stateNode);
        case 26:
        case 5:
          Ye(e, e.return), ea(e);
          break;
        case 22:
          e.memoizedState === null && ea(e);
          break;
        case 30:
          ea(e);
          break;
        default:
          ea(e);
      }
      t = t.sibling;
    }
  }
  function En(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        o = e,
        f = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          En(s, o, n), Li(4, o);
          break;
        case 1:
          if (
            (En(s, o, n),
            (i = o),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (D) {
              Tt(i, i.return, D);
            }
          if (((i = o), (s = i.updateQueue), s !== null)) {
            var p = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  nh(S[s], p);
            } catch (D) {
              Tt(i, i.return, D);
            }
          }
          n && f & 64 && yd(o), Hi(o, o.return);
          break;
        case 27:
          bd(o);
        case 26:
        case 5:
          En(s, o, n), n && i === null && f & 4 && vd(o), Hi(o, o.return);
          break;
        case 12:
          En(s, o, n);
          break;
        case 13:
          En(s, o, n), n && f & 4 && Ed(s, o);
          break;
        case 22:
          o.memoizedState === null && En(s, o, n), Hi(o, o.return);
          break;
        case 30:
          break;
        default:
          En(s, o, n);
      }
      e = e.sibling;
    }
  }
  function _r(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Mi(n));
  }
  function Lr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Mi(t));
  }
  function qe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Od(t, e, n, i), (e = e.sibling);
  }
  function Od(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qe(t, e, n, i), s & 2048 && Li(9, e);
        break;
      case 1:
        qe(t, e, n, i);
        break;
      case 3:
        qe(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Mi(t)));
        break;
      case 12:
        if (s & 2048) {
          qe(t, e, n, i), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              f = o.id,
              p = o.onPostCommit;
            typeof p == "function" &&
              p(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Tt(e, e.return, S);
          }
        } else qe(t, e, n, i);
        break;
      case 13:
        qe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? qe(t, e, n, i)
              : Yi(t, e)
            : o._visibility & 2
            ? qe(t, e, n, i)
            : ((o._visibility |= 2),
              La(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && _r(f, e);
        break;
      case 24:
        qe(t, e, n, i), s & 2048 && Lr(e.alternate, e);
        break;
      default:
        qe(t, e, n, i);
    }
  }
  function La(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        f = e,
        p = n,
        S = i,
        D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          La(o, f, p, S, s), Li(8, f);
          break;
        case 23:
          break;
        case 22:
          var V = f.stateNode;
          f.memoizedState !== null
            ? V._visibility & 2
              ? La(o, f, p, S, s)
              : Yi(o, f)
            : ((V._visibility |= 2), La(o, f, p, S, s)),
            s && D & 2048 && _r(f.alternate, f);
          break;
        case 24:
          La(o, f, p, S, s), s && D & 2048 && Lr(f.alternate, f);
          break;
        default:
          La(o, f, p, S, s);
      }
      e = e.sibling;
    }
  }
  function Yi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Yi(n, i), s & 2048 && _r(i.alternate, i);
            break;
          case 24:
            Yi(n, i), s & 2048 && Lr(i.alternate, i);
            break;
          default:
            Yi(n, i);
        }
        e = e.sibling;
      }
  }
  var qi = 8192;
  function Ha(t) {
    if (t.subtreeFlags & qi)
      for (t = t.child; t !== null; ) Rd(t), (t = t.sibling);
  }
  function Rd(t) {
    switch (t.tag) {
      case 26:
        Ha(t),
          t.flags & qi &&
            t.memoizedState !== null &&
            Fg(Be, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ha(t);
        break;
      case 3:
      case 4:
        var e = Be;
        (Be = Rs(t.stateNode.containerInfo)), Ha(t), (Be = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = qi), (qi = 16777216), Ha(t), (qi = e))
            : Ha(t));
        break;
      default:
        Ha(t);
    }
  }
  function Vd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Gi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), Ud(i, t);
        }
      Vd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) zd(t), (t = t.sibling);
  }
  function zd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gi(t), t.flags & 2048 && xn(9, t, t.return);
        break;
      case 3:
        Gi(t);
        break;
      case 12:
        Gi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), gs(t))
          : Gi(t);
        break;
      default:
        Gi(t);
    }
  }
  function gs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), Ud(i, t);
        }
      Vd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          xn(8, e, e.return), gs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), gs(e));
          break;
        default:
          gs(e);
      }
      t = t.sibling;
    }
  }
  function Ud(t, e) {
    for (; Zt !== null; ) {
      var n = Zt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Mi(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Zt = i);
      else
        t: for (n = t; Zt !== null; ) {
          i = Zt;
          var s = i.sibling,
            o = i.return;
          if ((xd(i), i === n)) {
            Zt = null;
            break t;
          }
          if (s !== null) {
            (s.return = o), (Zt = s);
            break t;
          }
          Zt = o;
        }
    }
  }
  var hg = {
      getCacheForType: function (t) {
        var e = It(Ht),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    dg = typeof WeakMap == "function" ? WeakMap : Map,
    yt = 0,
    At = null,
    ut = null,
    ct = 0,
    gt = 0,
    ge = null,
    Dn = !1,
    Ya = !1,
    Hr = !1,
    rn = 0,
    Vt = 0,
    Cn = 0,
    na = 0,
    Yr = 0,
    Ce = 0,
    qa = 0,
    Xi = null,
    oe = null,
    qr = !1,
    Gr = 0,
    vs = 1 / 0,
    Ss = null,
    On = null,
    Jt = 0,
    Rn = null,
    Ga = null,
    Xa = 0,
    Xr = 0,
    Zr = null,
    Bd = null,
    Zi = 0,
    Qr = null;
  function ve() {
    if ((yt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (z.T !== null) {
      var t = Va;
      return t !== 0 ? t : $r();
    }
    return Jc();
  }
  function Nd() {
    Ce === 0 && (Ce = (ct & 536870912) === 0 || pt ? Zc() : 536870912);
    var t = De.current;
    return t !== null && (t.flags |= 32), Ce;
  }
  function Se(t, e, n) {
    ((t === At && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
      (Za(t, 0), Vn(t, ct, Ce, !1)),
      ri(t, n),
      ((yt & 2) === 0 || t !== At) &&
        (t === At &&
          ((yt & 2) === 0 && (na |= n), Vt === 4 && Vn(t, ct, Ce, !1)),
        Ge(t));
  }
  function jd(t, e, n) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ui(t, e),
      s = i ? yg(t, e) : Jr(t, e, !0),
      o = i;
    do {
      if (s === 0) {
        Ya && !i && Vn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !mg(n))) {
          (s = Jr(t, e, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Xi;
              var S = p.current.memoizedState.isDehydrated;
              if ((S && (Za(p, f).flags |= 256), (f = Jr(p, f, !1)), f !== 2)) {
                if (Hr && !S) {
                  (p.errorRecoveryDisabledLanes |= o), (na |= o), (s = 4);
                  break t;
                }
                (o = oe),
                  (oe = s),
                  o !== null && (oe === null ? (oe = o) : oe.push.apply(oe, o));
              }
              s = f;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Za(t, 0), Vn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (o = s), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Vn(i, e, Ce, !Dn);
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = Gr + 300 - _e()), 10 < s)) {
            if ((Vn(i, e, Ce, !Dn), Vl(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = cm(
              wd.bind(null, i, n, oe, Ss, qr, e, Ce, na, qa, Dn, o, 2, -0, 0),
              s
            );
            break t;
          }
          wd(i, n, oe, Ss, qr, e, Ce, na, qa, Dn, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ge(t);
  }
  function wd(t, e, n, i, s, o, f, p, S, D, V, B, C, O) {
    if (
      ((t.timeoutHandle = -1),
      (B = e.subtreeFlags),
      (B & 8192 || (B & 16785408) === 16785408) &&
        ((Wi = { stylesheets: null, count: 0, unsuspend: kg }),
        Rd(e),
        (B = Wg()),
        B !== null))
    ) {
      (t.cancelPendingCommit = B(
        Xd.bind(null, t, e, o, n, i, s, f, p, S, V, 1, C, O)
      )),
        Vn(t, o, f, !D);
      return;
    }
    Xd(t, e, o, n, i, s, f, p, S);
  }
  function mg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!de(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Vn(t, e, n, i) {
    (e &= ~Yr),
      (e &= ~na),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var o = 31 - he(s),
        f = 1 << o;
      (i[o] = -1), (s &= ~f);
    }
    n !== 0 && Kc(t, n, e);
  }
  function bs() {
    return (yt & 6) === 0 ? (Qi(0), !1) : !0;
  }
  function Kr() {
    if (ut !== null) {
      if (gt === 0) var t = ut.return;
      else (t = ut), (Ie = Fn = null), or(t), (wa = null), (ji = 0), (t = ut);
      for (; t !== null; ) pd(t.alternate, t), (t = t.return);
      ut = null;
    }
  }
  function Za(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Ug(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Kr(),
      (At = t),
      (ut = n = Fe(t.current, null)),
      (ct = e),
      (gt = 0),
      (ge = null),
      (Dn = !1),
      (Ya = ui(t, e)),
      (Hr = !1),
      (qa = Ce = Yr = na = Cn = Vt = 0),
      (oe = Xi = null),
      (qr = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - he(i),
          o = 1 << s;
        (e |= t[s]), (i &= ~o);
      }
    return (rn = e), Gl(), n;
  }
  function _d(t, e) {
    (lt = null),
      (z.H = us),
      e === Di || e === Wl
        ? ((e = th()), (gt = 3))
        : e === Wf
        ? ((e = th()), (gt = 4))
        : (gt =
            e === ed
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (ge = e),
      ut === null && ((Vt = 1), hs(t, Ae(e, t.current)));
  }
  function Ld() {
    var t = z.H;
    return (z.H = us), t === null ? us : t;
  }
  function Hd() {
    var t = z.A;
    return (z.A = hg), t;
  }
  function Pr() {
    (Vt = 4),
      Dn || ((ct & 4194048) !== ct && De.current !== null) || (Ya = !0),
      ((Cn & 134217727) === 0 && (na & 134217727) === 0) ||
        At === null ||
        Vn(At, ct, Ce, !1);
  }
  function Jr(t, e, n) {
    var i = yt;
    yt |= 2;
    var s = Ld(),
      o = Hd();
    (At !== t || ct !== e) && ((Ss = null), Za(t, e)), (e = !1);
    var f = Vt;
    t: do
      try {
        if (gt !== 0 && ut !== null) {
          var p = ut,
            S = ge;
          switch (gt) {
            case 8:
              Kr(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              De.current === null && (e = !0);
              var D = gt;
              if (((gt = 0), (ge = null), Qa(t, p, S, D), n && Ya)) {
                f = 0;
                break t;
              }
              break;
            default:
              (D = gt), (gt = 0), (ge = null), Qa(t, p, S, D);
          }
        }
        pg(), (f = Vt);
        break;
      } catch (V) {
        _d(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ie = Fn = null),
      (yt = i),
      (z.H = s),
      (z.A = o),
      ut === null && ((At = null), (ct = 0), Gl()),
      f
    );
  }
  function pg() {
    for (; ut !== null; ) Yd(ut);
  }
  function yg(t, e) {
    var n = yt;
    yt |= 2;
    var i = Ld(),
      s = Hd();
    At !== t || ct !== e
      ? ((Ss = null), (vs = _e() + 500), Za(t, e))
      : (Ya = ui(t, e));
    t: do
      try {
        if (gt !== 0 && ut !== null) {
          e = ut;
          var o = ge;
          e: switch (gt) {
            case 1:
              (gt = 0), (ge = null), Qa(t, e, o, 1);
              break;
            case 2:
            case 9:
              if ($f(o)) {
                (gt = 0), (ge = null), qd(e);
                break;
              }
              (e = function () {
                (gt !== 2 && gt !== 9) || At !== t || (gt = 7), Ge(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              $f(o)
                ? ((gt = 0), (ge = null), qd(e))
                : ((gt = 0), (ge = null), Qa(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (ut.tag) {
                case 26:
                  f = ut.memoizedState;
                case 5:
                case 27:
                  var p = ut;
                  if (!f || Am(f)) {
                    (gt = 0), (ge = null);
                    var S = p.sibling;
                    if (S !== null) ut = S;
                    else {
                      var D = p.return;
                      D !== null ? ((ut = D), Ts(D)) : (ut = null);
                    }
                    break e;
                  }
              }
              (gt = 0), (ge = null), Qa(t, e, o, 5);
              break;
            case 6:
              (gt = 0), (ge = null), Qa(t, e, o, 6);
              break;
            case 8:
              Kr(), (Vt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        gg();
        break;
      } catch (V) {
        _d(t, V);
      }
    while (!0);
    return (
      (Ie = Fn = null),
      (z.H = i),
      (z.A = s),
      (yt = n),
      ut !== null ? 0 : ((At = null), (ct = 0), Gl(), Vt)
    );
  }
  function gg() {
    for (; ut !== null && !Hp(); ) Yd(ut);
  }
  function Yd(t) {
    var e = dd(t.alternate, t, rn);
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (ut = e);
  }
  function qd(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ud(n, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = ud(n, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        or(e);
      default:
        pd(n, e), (e = ut = Gf(e, rn)), (e = dd(n, e, rn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (ut = e);
  }
  function Qa(t, e, n, i) {
    (Ie = Fn = null), or(e), (wa = null), (ji = 0);
    var s = e.return;
    try {
      if (sg(t, s, e, n, ct)) {
        (Vt = 1), hs(t, Ae(n, t.current)), (ut = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ut = s), o);
      (Vt = 1), hs(t, Ae(n, t.current)), (ut = null);
      return;
    }
    e.flags & 32768
      ? (pt || i === 1
          ? (t = !0)
          : Ya || (ct & 536870912) !== 0
          ? (t = !1)
          : ((Dn = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = De.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Gd(e, t))
      : Ts(e);
  }
  function Ts(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Gd(e, Dn);
        return;
      }
      t = e.return;
      var n = rg(e.alternate, e, rn);
      if (n !== null) {
        ut = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function Gd(t, e) {
    do {
      var n = og(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ut = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = n;
    } while (t !== null);
    (Vt = 6), (ut = null);
  }
  function Xd(t, e, n, i, s, o, f, p, S) {
    t.cancelPendingCommit = null;
    do As();
    while (Jt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= Lu),
        kp(t, n, o, f, p, S),
        t === At && ((ut = At = null), (ct = 0)),
        (Ga = e),
        (Rn = t),
        (Xa = n),
        (Xr = o),
        (Zr = s),
        (Bd = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Tg(Cl, function () {
              return Jd(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = z.T), (z.T = null), (s = w.p), (w.p = 2), (f = yt), (yt |= 4);
        try {
          cg(t, e, n);
        } finally {
          (yt = f), (w.p = s), (z.T = i);
        }
      }
      (Jt = 1), Zd(), Qd(), Kd();
    }
  }
  function Zd() {
    if (Jt === 1) {
      Jt = 0;
      var t = Rn,
        e = Ga,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = w.p;
        w.p = 2;
        var s = yt;
        yt |= 4;
        try {
          Dd(e, t);
          var o = so,
            f = Uf(t.containerInfo),
            p = o.focusedElem,
            S = o.selectionRange;
          if (
            f !== p &&
            p &&
            p.ownerDocument &&
            zf(p.ownerDocument.documentElement, p)
          ) {
            if (S !== null && Bu(p)) {
              var D = S.start,
                V = S.end;
              if ((V === void 0 && (V = D), "selectionStart" in p))
                (p.selectionStart = D),
                  (p.selectionEnd = Math.min(V, p.value.length));
              else {
                var B = p.ownerDocument || document,
                  C = (B && B.defaultView) || window;
                if (C.getSelection) {
                  var O = C.getSelection(),
                    tt = p.textContent.length,
                    W = Math.min(S.start, tt),
                    bt = S.end === void 0 ? W : Math.min(S.end, tt);
                  !O.extend && W > bt && ((f = bt), (bt = W), (W = f));
                  var x = Vf(p, W),
                    A = Vf(p, bt);
                  if (
                    x &&
                    A &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== x.node ||
                      O.anchorOffset !== x.offset ||
                      O.focusNode !== A.node ||
                      O.focusOffset !== A.offset)
                  ) {
                    var M = B.createRange();
                    M.setStart(x.node, x.offset),
                      O.removeAllRanges(),
                      W > bt
                        ? (O.addRange(M), O.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), O.addRange(M));
                  }
                }
              }
            }
            for (B = [], O = p; (O = O.parentNode); )
              O.nodeType === 1 &&
                B.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < B.length;
              p++
            ) {
              var U = B[p];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (Ns = !!lo), (so = lo = null);
        } finally {
          (yt = s), (w.p = i), (z.T = n);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function Qd() {
    if (Jt === 2) {
      Jt = 0;
      var t = Rn,
        e = Ga,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = w.p;
        w.p = 2;
        var s = yt;
        yt |= 4;
        try {
          Ad(t, e.alternate, e);
        } finally {
          (yt = s), (w.p = i), (z.T = n);
        }
      }
      Jt = 3;
    }
  }
  function Kd() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), Yp();
      var t = Rn,
        e = Ga,
        n = Xa,
        i = Bd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Ga = Rn = null), Pd(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (On = null),
        hu(n),
        (e = e.stateNode),
        fe && typeof fe.onCommitFiberRoot == "function")
      )
        try {
          fe.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (e = z.T), (s = w.p), (w.p = 2), (z.T = null);
        try {
          for (var o = t.onRecoverableError, f = 0; f < i.length; f++) {
            var p = i[f];
            o(p.value, { componentStack: p.stack });
          }
        } finally {
          (z.T = e), (w.p = s);
        }
      }
      (Xa & 3) !== 0 && As(),
        Ge(t),
        (s = t.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? t === Qr
            ? Zi++
            : ((Zi = 0), (Qr = t))
          : (Zi = 0),
        Qi(0);
    }
  }
  function Pd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Mi(e)));
  }
  function As(t) {
    return Zd(), Qd(), Kd(), Jd();
  }
  function Jd() {
    if (Jt !== 5) return !1;
    var t = Rn,
      e = Xr;
    Xr = 0;
    var n = hu(Xa),
      i = z.T,
      s = w.p;
    try {
      (w.p = 32 > n ? 32 : n), (z.T = null), (n = Zr), (Zr = null);
      var o = Rn,
        f = Xa;
      if (((Jt = 0), (Ga = Rn = null), (Xa = 0), (yt & 6) !== 0))
        throw Error(r(331));
      var p = yt;
      if (
        ((yt |= 4),
        zd(o.current),
        Od(o, o.current, f, n),
        (yt = p),
        Qi(0, !1),
        fe && typeof fe.onPostCommitFiberRoot == "function")
      )
        try {
          fe.onPostCommitFiberRoot(si, o);
        } catch {}
      return !0;
    } finally {
      (w.p = s), (z.T = i), Pd(t, e);
    }
  }
  function kd(t, e, n) {
    (e = Ae(n, e)),
      (e = xr(t.stateNode, e, 2)),
      (t = Sn(t, e, 2)),
      t !== null && (ri(t, 2), Ge(t));
  }
  function Tt(t, e, n) {
    if (t.tag === 3) kd(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          kd(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (On === null || !On.has(i)))
          ) {
            (t = Ae(n, t)),
              (n = Ih(2)),
              (i = Sn(e, n, 2)),
              i !== null && (td(n, i, e, t), ri(i, 2), Ge(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function kr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new dg();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((Hr = !0), s.add(n), (t = vg.bind(null, t, e, n)), e.then(t, t));
  }
  function vg(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      At === t &&
        (ct & n) === n &&
        (Vt === 4 || (Vt === 3 && (ct & 62914560) === ct && 300 > _e() - Gr)
          ? (yt & 2) === 0 && Za(t, 0)
          : (Yr |= n),
        qa === ct && (qa = 0)),
      Ge(t);
  }
  function Fd(t, e) {
    e === 0 && (e = Qc()), (t = Da(t, e)), t !== null && (ri(t, e), Ge(t));
  }
  function Sg(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Fd(t, n);
  }
  function bg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), Fd(t, n);
  }
  function Tg(t, e) {
    return ru(t, e);
  }
  var xs = null,
    Ka = null,
    Fr = !1,
    Ms = !1,
    Wr = !1,
    aa = 0;
  function Ge(t) {
    t !== Ka &&
      t.next === null &&
      (Ka === null ? (xs = Ka = t) : (Ka = Ka.next = t)),
      (Ms = !0),
      Fr || ((Fr = !0), xg());
  }
  function Qi(t, e) {
    if (!Wr && Ms) {
      Wr = !0;
      do
        for (var n = !1, i = xs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = i.suspendedLanes,
                p = i.pingedLanes;
              (o = (1 << (31 - he(42 | t) + 1)) - 1),
                (o &= s & ~(f & ~p)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), tm(i, o));
          } else
            (o = ct),
              (o = Vl(
                i,
                i === At ? o : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (o & 3) === 0 || ui(i, o) || ((n = !0), tm(i, o));
          i = i.next;
        }
      while (n);
      Wr = !1;
    }
  }
  function Ag() {
    Wd();
  }
  function Wd() {
    Ms = Fr = !1;
    var t = 0;
    aa !== 0 && (zg() && (t = aa), (aa = 0));
    for (var e = _e(), n = null, i = xs; i !== null; ) {
      var s = i.next,
        o = $d(i, e);
      o === 0
        ? ((i.next = null),
          n === null ? (xs = s) : (n.next = s),
          s === null && (Ka = n))
        : ((n = i), (t !== 0 || (o & 3) !== 0) && (Ms = !0)),
        (i = s);
    }
    Qi(t);
  }
  function $d(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var f = 31 - he(o),
        p = 1 << f,
        S = s[f];
      S === -1
        ? ((p & n) === 0 || (p & i) !== 0) && (s[f] = Jp(p, e))
        : S <= e && (t.expiredLanes |= p),
        (o &= ~p);
    }
    if (
      ((e = At),
      (n = ct),
      (n = Vl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (gt === 2 || gt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && ou(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ui(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && ou(i), hu(n))) {
        case 2:
        case 8:
          n = Gc;
          break;
        case 32:
          n = Cl;
          break;
        case 268435456:
          n = Xc;
          break;
        default:
          n = Cl;
      }
      return (
        (i = Id.bind(null, t)),
        (n = ru(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && ou(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Id(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (As() && t.callbackNode !== n) return null;
    var i = ct;
    return (
      (i = Vl(
        t,
        t === At ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (jd(t, i, e),
          $d(t, _e()),
          t.callbackNode != null && t.callbackNode === n
            ? Id.bind(null, t)
            : null)
    );
  }
  function tm(t, e) {
    if (As()) return null;
    jd(t, e, !0);
  }
  function xg() {
    Bg(function () {
      (yt & 6) !== 0 ? ru(qc, Ag) : Wd();
    });
  }
  function $r() {
    return aa === 0 && (aa = Zc()), aa;
  }
  function em(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : jl("" + t);
  }
  function nm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Mg(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = em((s[le] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[le] || null)
          ? em(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((o = e), (f = null)));
      var p = new Hl("action", "action", null, i, s);
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (aa !== 0) {
                  var S = f ? nm(s, f) : new FormData(s);
                  vr(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" &&
                  (p.preventDefault(),
                  (S = f ? nm(s, f) : new FormData(s)),
                  vr(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    o,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Ir = 0; Ir < _u.length; Ir++) {
    var to = _u[Ir],
      Eg = to.toLowerCase(),
      Dg = to[0].toUpperCase() + to.slice(1);
    Ue(Eg, "on" + Dg);
  }
  Ue(jf, "onAnimationEnd"),
    Ue(wf, "onAnimationIteration"),
    Ue(_f, "onAnimationStart"),
    Ue("dblclick", "onDoubleClick"),
    Ue("focusin", "onFocus"),
    Ue("focusout", "onBlur"),
    Ue(Xy, "onTransitionRun"),
    Ue(Zy, "onTransitionStart"),
    Ue(Qy, "onTransitionCancel"),
    Ue(Lf, "onTransitionEnd"),
    ya("onMouseEnter", ["mouseout", "mouseover"]),
    ya("onMouseLeave", ["mouseout", "mouseover"]),
    ya("onPointerEnter", ["pointerout", "pointerover"]),
    ya("onPointerLeave", ["pointerout", "pointerover"]),
    qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ki =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Cg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ki)
    );
  function am(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var p = i[f],
              S = p.instance,
              D = p.currentTarget;
            if (((p = p.listener), S !== o && s.isPropagationStopped()))
              break t;
            (o = p), (s.currentTarget = D);
            try {
              o(s);
            } catch (V) {
              fs(V);
            }
            (s.currentTarget = null), (o = S);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((p = i[f]),
              (S = p.instance),
              (D = p.currentTarget),
              (p = p.listener),
              S !== o && s.isPropagationStopped())
            )
              break t;
            (o = p), (s.currentTarget = D);
            try {
              o(s);
            } catch (V) {
              fs(V);
            }
            (s.currentTarget = null), (o = S);
          }
      }
    }
  }
  function rt(t, e) {
    var n = e[du];
    n === void 0 && (n = e[du] = new Set());
    var i = t + "__bubble";
    n.has(i) || (im(e, t, 2, !1), n.add(i));
  }
  function eo(t, e, n) {
    var i = 0;
    e && (i |= 4), im(n, t, i, e);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function no(t) {
    if (!t[Es]) {
      (t[Es] = !0),
        Fc.forEach(function (n) {
          n !== "selectionchange" && (Cg.has(n) || eo(n, !1, t), eo(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Es] || ((e[Es] = !0), eo("selectionchange", !1, e));
    }
  }
  function im(t, e, n, i) {
    switch (Om(e)) {
      case 2:
        var s = tv;
        break;
      case 8:
        s = ev;
        break;
      default:
        s = go;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Mu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function ao(t, e, n, i, s) {
    var o = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var p = i.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = da(p)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = o = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        i = i.return;
      }
    ff(function () {
      var D = o,
        V = Au(n),
        B = [];
      t: {
        var C = Hf.get(t);
        if (C !== void 0) {
          var O = Hl,
            tt = t;
          switch (t) {
            case "keypress":
              if (_l(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = Ty;
              break;
            case "focusin":
              (tt = "focus"), (O = Ou);
              break;
            case "focusout":
              (tt = "blur"), (O = Ou);
              break;
            case "beforeblur":
            case "afterblur":
              O = Ou;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = mf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = oy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = My;
              break;
            case jf:
            case wf:
            case _f:
              O = hy;
              break;
            case Lf:
              O = Dy;
              break;
            case "scroll":
            case "scrollend":
              O = uy;
              break;
            case "wheel":
              O = Oy;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = my;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = yf;
              break;
            case "toggle":
            case "beforetoggle":
              O = Vy;
          }
          var W = (e & 4) !== 0,
            bt = !W && (t === "scroll" || t === "scrollend"),
            x = W ? (C !== null ? C + "Capture" : null) : C;
          W = [];
          for (var A = D, M; A !== null; ) {
            var U = A;
            if (
              ((M = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                M === null ||
                x === null ||
                ((U = fi(A, x)), U != null && W.push(Pi(A, U, M))),
              bt)
            )
              break;
            A = A.return;
          }
          0 < W.length &&
            ((C = new O(C, tt, null, n, V)),
            B.push({ event: C, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            C &&
              n !== Tu &&
              (tt = n.relatedTarget || n.fromElement) &&
              (da(tt) || tt[ha]))
          )
            break t;
          if (
            (O || C) &&
            ((C =
              V.window === V
                ? V
                : (C = V.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            O
              ? ((tt = n.relatedTarget || n.toElement),
                (O = D),
                (tt = tt ? da(tt) : null),
                tt !== null &&
                  ((bt = d(tt)),
                  (W = tt.tag),
                  tt !== bt || (W !== 5 && W !== 27 && W !== 6)) &&
                  (tt = null))
              : ((O = null), (tt = D)),
            O !== tt)
          ) {
            if (
              ((W = mf),
              (U = "onMouseLeave"),
              (x = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((W = yf),
                (U = "onPointerLeave"),
                (x = "onPointerEnter"),
                (A = "pointer")),
              (bt = O == null ? C : ci(O)),
              (M = tt == null ? C : ci(tt)),
              (C = new W(U, A + "leave", O, n, V)),
              (C.target = bt),
              (C.relatedTarget = M),
              (U = null),
              da(V) === D &&
                ((W = new W(x, A + "enter", tt, n, V)),
                (W.target = M),
                (W.relatedTarget = bt),
                (U = W)),
              (bt = U),
              O && tt)
            )
              e: {
                for (W = O, x = tt, A = 0, M = W; M; M = Pa(M)) A++;
                for (M = 0, U = x; U; U = Pa(U)) M++;
                for (; 0 < A - M; ) (W = Pa(W)), A--;
                for (; 0 < M - A; ) (x = Pa(x)), M--;
                for (; A--; ) {
                  if (W === x || (x !== null && W === x.alternate)) break e;
                  (W = Pa(W)), (x = Pa(x));
                }
                W = null;
              }
            else W = null;
            O !== null && lm(B, C, O, W, !1),
              tt !== null && bt !== null && lm(B, bt, tt, W, !0);
          }
        }
        t: {
          if (
            ((C = D ? ci(D) : window),
            (O = C.nodeName && C.nodeName.toLowerCase()),
            O === "select" || (O === "input" && C.type === "file"))
          )
            var Q = Mf;
          else if (Af(C))
            if (Ef) Q = Yy;
            else {
              Q = Ly;
              var st = _y;
            }
          else
            (O = C.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? D && bu(D.elementType) && (Q = Mf)
                : (Q = Hy);
          if (Q && (Q = Q(t, D))) {
            xf(B, Q, n, V);
            break t;
          }
          st && st(t, C, D),
            t === "focusout" &&
              D &&
              C.type === "number" &&
              D.memoizedProps.value != null &&
              Su(C, "number", C.value);
        }
        switch (((st = D ? ci(D) : window), t)) {
          case "focusin":
            (Af(st) || st.contentEditable === "true") &&
              ((xa = st), (Nu = D), (Si = null));
            break;
          case "focusout":
            Si = Nu = xa = null;
            break;
          case "mousedown":
            ju = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ju = !1), Bf(B, n, V);
            break;
          case "selectionchange":
            if (Gy) break;
          case "keydown":
          case "keyup":
            Bf(B, n, V);
        }
        var J;
        if (Vu)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          Aa
            ? bf(t, n) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (gf &&
            n.locale !== "ko" &&
            (Aa || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && Aa && (J = hf())
              : ((pn = V),
                (Eu = "value" in pn ? pn.value : pn.textContent),
                (Aa = !0))),
          (st = Ds(D, $)),
          0 < st.length &&
            (($ = new pf($, t, null, n, V)),
            B.push({ event: $, listeners: st }),
            J ? ($.data = J) : ((J = Tf(n)), J !== null && ($.data = J)))),
          (J = Uy ? By(t, n) : Ny(t, n)) &&
            (($ = Ds(D, "onBeforeInput")),
            0 < $.length &&
              ((st = new pf("onBeforeInput", "beforeinput", null, n, V)),
              B.push({ event: st, listeners: $ }),
              (st.data = J))),
          Mg(B, t, D, n, V);
      }
      am(B, e);
    });
  }
  function Pi(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ds(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = fi(t, n)),
          s != null && i.unshift(Pi(t, s, o)),
          (s = fi(t, e)),
          s != null && i.push(Pi(t, s, o))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function Pa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function lm(t, e, n, i, s) {
    for (var o = e._reactName, f = []; n !== null && n !== i; ) {
      var p = n,
        S = p.alternate,
        D = p.stateNode;
      if (((p = p.tag), S !== null && S === i)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        D === null ||
        ((S = D),
        s
          ? ((D = fi(n, o)), D != null && f.unshift(Pi(n, D, S)))
          : s || ((D = fi(n, o)), D != null && f.push(Pi(n, D, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Og = /\r\n?/g,
    Rg = /\u0000|\uFFFD/g;
  function sm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Og,
        `
`
      )
      .replace(Rg, "");
  }
  function um(t, e) {
    return (e = sm(e)), sm(t) === e;
  }
  function Cs() {}
  function St(t, e, n, i, s, o) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Sa(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Sa(t, "" + i);
        break;
      case "className":
        Ul(t, "class", i);
        break;
      case "tabIndex":
        Ul(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(t, n, i);
        break;
      case "style":
        of(t, i, o);
        break;
      case "data":
        if (e !== "object") {
          Ul(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = jl("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && St(t, e, "name", s.name, s, null),
                St(t, e, "formEncType", s.formEncType, s, null),
                St(t, e, "formMethod", s.formMethod, s, null),
                St(t, e, "formTarget", s.formTarget, s, null))
              : (St(t, e, "encType", s.encType, s, null),
                St(t, e, "method", s.method, s, null),
                St(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = jl("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Cs);
        break;
      case "onScroll":
        i != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && rt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = jl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        rt("beforetoggle", t), rt("toggle", t), zl(t, "popover", i);
        break;
      case "xlinkActuate":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        zl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = ly.get(n) || n), zl(t, n, i));
    }
  }
  function io(t, e, n, i, s, o) {
    switch (n) {
      case "style":
        of(t, i, o);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Sa(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Sa(t, "" + i);
        break;
      case "onScroll":
        i != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && rt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Cs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Wc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[le] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof i == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : zl(t, n, i);
          }
    }
  }
  function kt(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        rt("error", t), rt("load", t);
        var i = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  St(t, e, o, f, n, null);
              }
          }
        s && St(t, e, "srcSet", n.srcSet, n, null),
          i && St(t, e, "src", n.src, n, null);
        return;
      case "input":
        rt("invalid", t);
        var p = (o = f = s = null),
          S = null,
          D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  s = V;
                  break;
                case "type":
                  f = V;
                  break;
                case "checked":
                  S = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  o = V;
                  break;
                case "defaultValue":
                  p = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(r(137, e));
                  break;
                default:
                  St(t, e, i, V, n, null);
              }
          }
        lf(t, o, p, S, D, f, s, !1), Bl(t);
        return;
      case "select":
        rt("invalid", t), (i = f = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((p = n[s]), p != null))
            switch (s) {
              case "value":
                o = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                i = p;
              default:
                St(t, e, s, p, n, null);
            }
        (e = o),
          (n = f),
          (t.multiple = !!i),
          e != null ? va(t, !!i, e, !1) : n != null && va(t, !!i, n, !0);
        return;
      case "textarea":
        rt("invalid", t), (o = s = i = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((p = n[f]), p != null))
            switch (f) {
              case "value":
                i = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                o = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                St(t, e, f, p, n, null);
            }
        uf(t, i, s, o), Bl(t);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((i = n[S]), i != null))
            switch (S) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                St(t, e, S, i, n, null);
            }
        return;
      case "dialog":
        rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
        break;
      case "iframe":
      case "object":
        rt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ki.length; i++) rt(Ki[i], t);
        break;
      case "image":
        rt("error", t), rt("load", t);
        break;
      case "details":
        rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        rt("error", t), rt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((i = n[D]), i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                St(t, e, D, i, n, null);
            }
        return;
      default:
        if (bu(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((i = n[V]), i !== void 0 && io(t, e, V, i, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((i = n[p]), i != null && St(t, e, p, i, n, null));
  }
  function Vg(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          f = null,
          p = null,
          S = null,
          D = null,
          V = null;
        for (O in n) {
          var B = n[O];
          if (n.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
              default:
                i.hasOwnProperty(O) || St(t, e, O, null, i, B);
            }
        }
        for (var C in i) {
          var O = i[C];
          if (((B = n[C]), i.hasOwnProperty(C) && (O != null || B != null)))
            switch (C) {
              case "type":
                o = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                D = O;
                break;
              case "defaultChecked":
                V = O;
                break;
              case "value":
                f = O;
                break;
              case "defaultValue":
                p = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                O !== B && St(t, e, C, O, i, B);
            }
        }
        vu(t, f, p, S, D, V, o, s);
        return;
      case "select":
        O = f = p = C = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                i.hasOwnProperty(o) || St(t, e, o, null, i, S);
            }
        for (s in i)
          if (
            ((o = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (o != null || S != null))
          )
            switch (s) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                p = o;
                break;
              case "multiple":
                f = o;
              default:
                o !== S && St(t, e, s, o, i, S);
            }
        (e = p),
          (n = f),
          (i = O),
          C != null
            ? va(t, !!n, C, !1)
            : !!i != !!n &&
              (e != null ? va(t, !!n, e, !0) : va(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (p in n)
          if (
            ((s = n[p]),
            n.hasOwnProperty(p) && s != null && !i.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, e, p, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (o = n[f]),
            i.hasOwnProperty(f) && (s != null || o != null))
          )
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && St(t, e, f, s, i, o);
            }
        sf(t, C, O);
        return;
      case "option":
        for (var tt in n)
          if (
            ((C = n[tt]),
            n.hasOwnProperty(tt) && C != null && !i.hasOwnProperty(tt))
          )
            switch (tt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(t, e, tt, null, i, C);
            }
        for (S in i)
          if (
            ((C = i[S]),
            (O = n[S]),
            i.hasOwnProperty(S) && C !== O && (C != null || O != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                St(t, e, S, C, i, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in n)
          (C = n[W]),
            n.hasOwnProperty(W) &&
              C != null &&
              !i.hasOwnProperty(W) &&
              St(t, e, W, null, i, C);
        for (D in i)
          if (
            ((C = i[D]),
            (O = n[D]),
            i.hasOwnProperty(D) && C !== O && (C != null || O != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(137, e));
                break;
              default:
                St(t, e, D, C, i, O);
            }
        return;
      default:
        if (bu(e)) {
          for (var bt in n)
            (C = n[bt]),
              n.hasOwnProperty(bt) &&
                C !== void 0 &&
                !i.hasOwnProperty(bt) &&
                io(t, e, bt, void 0, i, C);
          for (V in i)
            (C = i[V]),
              (O = n[V]),
              !i.hasOwnProperty(V) ||
                C === O ||
                (C === void 0 && O === void 0) ||
                io(t, e, V, C, i, O);
          return;
        }
    }
    for (var x in n)
      (C = n[x]),
        n.hasOwnProperty(x) &&
          C != null &&
          !i.hasOwnProperty(x) &&
          St(t, e, x, null, i, C);
    for (B in i)
      (C = i[B]),
        (O = n[B]),
        !i.hasOwnProperty(B) ||
          C === O ||
          (C == null && O == null) ||
          St(t, e, B, C, i, O);
  }
  var lo = null,
    so = null;
  function Os(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function om(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function uo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ro = null;
  function zg() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ro
        ? !1
        : ((ro = t), !0)
      : ((ro = null), !1);
  }
  var cm = typeof setTimeout == "function" ? setTimeout : void 0,
    Ug = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fm = typeof Promise == "function" ? Promise : void 0,
    Bg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fm < "u"
        ? function (t) {
            return fm.resolve(null).then(t).catch(Ng);
          }
        : cm;
  function Ng(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function zn(t) {
    return t === "head";
  }
  function hm(t, e) {
    var n = e,
      i = 0,
      s = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var f = t.ownerDocument;
            if ((n & 1 && Ji(f.documentElement), n & 2 && Ji(f.body), n & 4))
              for (n = f.head, Ji(n), f = n.firstChild; f; ) {
                var p = f.nextSibling,
                  S = f.nodeName;
                f[oi] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(f),
                  (f = p);
              }
          }
          if (s === 0) {
            t.removeChild(o), nl(e);
            return;
          }
          s--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? s++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = o;
    } while (n);
    nl(e);
  }
  function oo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oo(n), mu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function jg(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[oi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Ne(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function wg(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ne(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function co(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function _g(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var i = function () {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function Ne(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var fo = null;
  function dm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function mm(t, e, n) {
    switch (((e = Os(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Ji(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    mu(t);
  }
  var Oe = new Map(),
    pm = new Set();
  function Rs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var on = w.d;
  w.d = { f: Lg, r: Hg, D: Yg, C: qg, L: Gg, m: Xg, X: Qg, S: Zg, M: Kg };
  function Lg() {
    var t = on.f(),
      e = bs();
    return t || e;
  }
  function Hg(t) {
    var e = ma(t);
    e !== null && e.tag === 5 && e.type === "form" ? jh(e) : on.r(t);
  }
  var Ja = typeof document > "u" ? null : document;
  function ym(t, e, n) {
    var i = Ja;
    if (i && typeof e == "string" && e) {
      var s = Te(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        pm.has(s) ||
          (pm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            kt(e, "link", t),
            Gt(e),
            i.head.appendChild(e)));
    }
  }
  function Yg(t) {
    on.D(t), ym("dns-prefetch", t, null);
  }
  function qg(t, e) {
    on.C(t, e), ym("preconnect", t, e);
  }
  function Gg(t, e, n) {
    on.L(t, e, n);
    var i = Ja;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Te(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Te(n.imageSizes) + '"]'))
        : (s += '[href="' + Te(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = ka(t);
          break;
        case "script":
          o = Fa(t);
      }
      Oe.has(o) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Oe.set(o, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(ki(o))) ||
          (e === "script" && i.querySelector(Fi(o))) ||
          ((e = i.createElement("link")),
          kt(e, "link", t),
          Gt(e),
          i.head.appendChild(e)));
    }
  }
  function Xg(t, e) {
    on.m(t, e);
    var n = Ja;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Te(i) + '"][href="' + Te(t) + '"]',
        o = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Fa(t);
      }
      if (
        !Oe.has(o) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        Oe.set(o, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Fi(o))) return;
        }
        (i = n.createElement("link")),
          kt(i, "link", t),
          Gt(i),
          n.head.appendChild(i);
      }
    }
  }
  function Zg(t, e, n) {
    on.S(t, e, n);
    var i = Ja;
    if (i && t) {
      var s = pa(i).hoistableStyles,
        o = ka(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = i.querySelector(ki(o)))) p.loading = 5;
        else {
          (t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Oe.get(o)) && ho(t, n);
          var S = (f = i.createElement("link"));
          Gt(S),
            kt(S, "link", t),
            (S._p = new Promise(function (D, V) {
              (S.onload = D), (S.onerror = V);
            })),
            S.addEventListener("load", function () {
              p.loading |= 1;
            }),
            S.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            Vs(f, e, i);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: p }),
          s.set(o, f);
      }
    }
  }
  function Qg(t, e) {
    on.X(t, e);
    var n = Ja;
    if (n && t) {
      var i = pa(n).hoistableScripts,
        s = Fa(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(Fi(s))),
        o ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = Oe.get(s)) && mo(t, e),
          (o = n.createElement("script")),
          Gt(o),
          kt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function Kg(t, e) {
    on.M(t, e);
    var n = Ja;
    if (n && t) {
      var i = pa(n).hoistableScripts,
        s = Fa(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(Fi(s))),
        o ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = Oe.get(s)) && mo(t, e),
          (o = n.createElement("script")),
          Gt(o),
          kt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function gm(t, e, n, i) {
    var s = (s = et.current) ? Rs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ka(n.href)),
            (n = pa(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ka(n.href);
          var o = pa(s).hoistableStyles,
            f = o.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, f),
              (o = s.querySelector(ki(t))) &&
                !o._p &&
                ((f.instance = o), (f.state.loading = 5)),
              Oe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Oe.set(t, n),
                o || Pg(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Fa(n)),
              (n = pa(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ka(t) {
    return 'href="' + Te(t) + '"';
  }
  function ki(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function vm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Pg(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        kt(e, "link", n),
        Gt(e),
        t.head.appendChild(e));
  }
  function Fa(t) {
    return '[src="' + Te(t) + '"]';
  }
  function Fi(t) {
    return "script[async]" + t;
  }
  function Sm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Te(n.href) + '"]');
          if (i) return (e.instance = i), Gt(i), i;
          var s = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Gt(i),
            kt(i, "style", s),
            Vs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = ka(n.href);
          var o = t.querySelector(ki(s));
          if (o) return (e.state.loading |= 4), (e.instance = o), Gt(o), o;
          (i = vm(n)),
            (s = Oe.get(s)) && ho(i, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Gt(o);
          var f = o;
          return (
            (f._p = new Promise(function (p, S) {
              (f.onload = p), (f.onerror = S);
            })),
            kt(o, "link", i),
            (e.state.loading |= 4),
            Vs(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Fa(n.src)),
            (s = t.querySelector(Fi(o)))
              ? ((e.instance = s), Gt(s), s)
              : ((i = n),
                (s = Oe.get(o)) && ((i = v({}, n)), mo(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Gt(s),
                kt(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Vs(i, n.precedence, t));
    return e.instance;
  }
  function Vs(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        o = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var p = i[f];
      if (p.dataset.precedence === e) o = p;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function ho(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function mo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var zs = null;
  function bm(t, e, n) {
    if (zs === null) {
      var i = new Map(),
        s = (zs = new Map());
      s.set(n, i);
    } else (s = zs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[oi] ||
          o[$t] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var p = i.get(f);
        p ? p.push(o) : i.set(f, [o]);
      }
    }
    return i;
  }
  function Tm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Jg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Am(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Wi = null;
  function kg() {}
  function Fg(t, e, n) {
    if (Wi === null) throw Error(r(475));
    var i = Wi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = ka(n.href),
          o = t.querySelector(ki(s));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Us.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = o),
            Gt(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = vm(n)),
          (s = Oe.get(s)) && ho(n, s),
          (o = o.createElement("link")),
          Gt(o);
        var f = o;
        (f._p = new Promise(function (p, S) {
          (f.onload = p), (f.onerror = S);
        })),
          kt(o, "link", n),
          (e.instance = o);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Us.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Wg() {
    if (Wi === null) throw Error(r(475));
    var t = Wi;
    return (
      t.stylesheets && t.count === 0 && po(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && po(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Us() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) po(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Bs = null;
  function po(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Bs = new Map()),
        e.forEach($g, t),
        (Bs = null),
        Us.call(t));
  }
  function $g(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Bs.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), Bs.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (o = n.get(f) || i),
        o === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = Us.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var $i = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Ig(t, e, n, i, s, o, f, p) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = cu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cu(0)),
      (this.hiddenUpdates = cu(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = p),
      (this.incompleteTransitions = new Map());
  }
  function xm(t, e, n, i, s, o, f, p, S, D, V, B) {
    return (
      (t = new Ig(t, e, n, f, p, S, D, B)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = me(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = ku()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: i, isDehydrated: n, cache: e }),
      Iu(o),
      t
    );
  }
  function Mm(t) {
    return t ? ((t = Ca), t) : Ca;
  }
  function Em(t, e, n, i, s, o) {
    (s = Mm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = vn(e)),
      (i.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (i.callback = o),
      (n = Sn(t, i, e)),
      n !== null && (Se(n, t, e), Oi(n, t, e));
  }
  function Dm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function yo(t, e) {
    Dm(t, e), (t = t.alternate) && Dm(t, e);
  }
  function Cm(t) {
    if (t.tag === 13) {
      var e = Da(t, 67108864);
      e !== null && Se(e, t, 67108864), yo(t, 67108864);
    }
  }
  var Ns = !0;
  function tv(t, e, n, i) {
    var s = z.T;
    z.T = null;
    var o = w.p;
    try {
      (w.p = 2), go(t, e, n, i);
    } finally {
      (w.p = o), (z.T = s);
    }
  }
  function ev(t, e, n, i) {
    var s = z.T;
    z.T = null;
    var o = w.p;
    try {
      (w.p = 8), go(t, e, n, i);
    } finally {
      (w.p = o), (z.T = s);
    }
  }
  function go(t, e, n, i) {
    if (Ns) {
      var s = vo(i);
      if (s === null) ao(t, e, i, js, n), Rm(t, i);
      else if (av(s, t, e, n, i)) i.stopPropagation();
      else if ((Rm(t, i), e & 4 && -1 < nv.indexOf(t))) {
        for (; s !== null; ) {
          var o = ma(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var f = Yn(o.pendingLanes);
                  if (f !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - he(f));
                      (p.entanglements[1] |= S), (f &= ~S);
                    }
                    Ge(o), (yt & 6) === 0 && ((vs = _e() + 500), Qi(0));
                  }
                }
                break;
              case 13:
                (p = Da(o, 2)), p !== null && Se(p, o, 2), bs(), yo(o, 2);
            }
          if (((o = vo(i)), o === null && ao(t, e, i, js, n), o === s)) break;
          s = o;
        }
        s !== null && i.stopPropagation();
      } else ao(t, e, i, null, n);
    }
  }
  function vo(t) {
    return (t = Au(t)), So(t);
  }
  var js = null;
  function So(t) {
    if (((js = null), (t = da(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (js = t), null;
  }
  function Om(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qp()) {
          case qc:
            return 2;
          case Gc:
            return 8;
          case Cl:
          case Gp:
            return 32;
          case Xc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bo = !1,
    Un = null,
    Bn = null,
    Nn = null,
    Ii = new Map(),
    tl = new Map(),
    jn = [],
    nv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Rm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        Bn = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ii.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tl.delete(e.pointerId);
    }
  }
  function el(t, e, n, i, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: o,
          targetContainers: [s],
        }),
        e !== null && ((e = ma(e)), e !== null && Cm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function av(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (Un = el(Un, t, e, n, i, s)), !0;
      case "dragenter":
        return (Bn = el(Bn, t, e, n, i, s)), !0;
      case "mouseover":
        return (Nn = el(Nn, t, e, n, i, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return Ii.set(o, el(Ii.get(o) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), tl.set(o, el(tl.get(o) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function Vm(t) {
    var e = da(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              Fp(t.priority, function () {
                if (n.tag === 13) {
                  var i = ve();
                  i = fu(i);
                  var s = Da(n, i);
                  s !== null && Se(s, n, i), yo(n, i);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ws(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = vo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (Tu = i), n.target.dispatchEvent(i), (Tu = null);
      } else return (e = ma(n)), e !== null && Cm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function zm(t, e, n) {
    ws(t) && n.delete(e);
  }
  function iv() {
    (bo = !1),
      Un !== null && ws(Un) && (Un = null),
      Bn !== null && ws(Bn) && (Bn = null),
      Nn !== null && ws(Nn) && (Nn = null),
      Ii.forEach(zm),
      tl.forEach(zm);
  }
  function _s(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      bo ||
        ((bo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, iv)));
  }
  var Ls = null;
  function Um(t) {
    Ls !== t &&
      ((Ls = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Ls === t && (Ls = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (So(i || n) === null) continue;
            break;
          }
          var o = ma(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            vr(o, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function nl(t) {
    function e(S) {
      return _s(S, t);
    }
    Un !== null && _s(Un, t),
      Bn !== null && _s(Bn, t),
      Nn !== null && _s(Nn, t),
      Ii.forEach(e),
      tl.forEach(e);
    for (var n = 0; n < jn.length; n++) {
      var i = jn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
      Vm(n), n.blockedOn === null && jn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          o = n[i + 1],
          f = s[le] || null;
        if (typeof o == "function") f || Um(n);
        else if (f) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (f = o[le] || null))) p = f.formAction;
            else if (So(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? (n[i + 1] = p) : (n.splice(i, 3), (i -= 3)),
            Um(n);
        }
      }
  }
  function To(t) {
    this._internalRoot = t;
  }
  (Hs.prototype.render = To.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = ve();
      Em(n, i, t, e, null, null);
    }),
    (Hs.prototype.unmount = To.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Em(t.current, 2, null, t, null, null), bs(), (e[ha] = null);
        }
      });
  function Hs(t) {
    this._internalRoot = t;
  }
  Hs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Jc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++);
      jn.splice(n, 0, t), n === 0 && Vm(t);
    }
  };
  var Bm = l.version;
  if (Bm !== "19.1.0") throw Error(r(527, Bm, "19.1.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var lv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ys.isDisabled && Ys.supportsFiber)
      try {
        (si = Ys.inject(lv)), (fe = Ys);
      } catch {}
  }
  return (
    (il.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = kh,
        o = Fh,
        f = Wh,
        p = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (p = e.unstable_transitionCallbacks)),
        (e = xm(t, 1, !1, null, null, n, i, s, o, f, p, null)),
        (t[ha] = e.current),
        no(t),
        new To(e)
      );
    }),
    (il.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        o = kh,
        f = Fh,
        p = Wh,
        S = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (e = xm(t, 1, !0, e, n ?? null, i, s, o, f, p, S, D)),
        (e.context = Mm(null)),
        (n = e.current),
        (i = ve()),
        (i = fu(i)),
        (s = vn(i)),
        (s.callback = null),
        Sn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        ri(e, n),
        Ge(e),
        (t[ha] = e.current),
        no(t),
        new Hs(e)
      );
    }),
    (il.version = "19.1.0"),
    il
  );
}
var Xm;
function yv() {
  if (Xm) return Mo.exports;
  Xm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Mo.exports = pv()), Mo.exports;
}
var gv = yv();
const vv =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAAJkSURBVGiBzVnRldowEJzNSwHuIHQQlwAdHB2YDrgO6CAl2KmA64Dr4FwCHcBVMPmw7h6PaCVLWhnmPX+gtXY1SJ5dSSCJu0fDGokg2QX8kWSX6jMhtvfxNZoQJtmSvAT87etQ/Y6/HGGSTYRsX5Hr1xi8z49K8U4AGsX2LiK7SnGjMCfsZq9VzCOArXXMJFguaZL7QP8LyaY+o++x1F3SJF8A/FHMVwAbEblaxcuFCWGSLYCQEO1EZLSIVYpiwm6Z9tBFaicib6VxrPDTwMcRukgNIjKUOHerp7lrvvpWjPusWgC/oYljiWiR7APvm+RakieP79ONvSF54P953yta2TPMqSzsFPMI4DXXd8IYWkwrbDW3T9Y3HBGpMxZQZPeHfyCBLJBBmOQKUyXlwxXAdoH0s0I4K6hIWtJOkY/QFXm7UPpZedpGAO8APgH8UnumiBbJY8DeVSCmidYterfqYrySd0sfAZtWYdUkfOGkJVq/YsIhBINXIHyhZ1bnELaqpRsAPZfbHIwics7paLk9bDEJ2lMjl/Cb0r7mAqcZJcghvBORLaY04EPHiodzxUgUrcNNv9i51dpofD7R0gqfEK9k0RpE5PD1w1VTm8D7x1rKXYIUwn/vG1xVpR3INVhWuWehWKXdfndQzC0ya95aMElL7th1VMwvrFiJpcIyD28w7ZZ82D+LcpsRniFi/TOImOlBfETEAOAUq4Frw/zmISJiDaZ01VjHnYsqd0sREWvxQOWudZkGhEXsYcpdjfAMEXuIctec4Tkitrhy+w7xtFkZcwKIyEDynNPX4RWem4dcZ/8AQ5hjblmxUS8AAAAASUVORK5CYII=";
var o1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Zm = ra.createContext && ra.createContext(o1),
  Sv = ["attr", "size", "title"];
function bv(a, l) {
  if (a == null) return {};
  var u = Tv(a, l),
    r,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (c = 0; c < d.length; c++)
      (r = d[c]),
        !(l.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(a, r) &&
          (u[r] = a[r]);
  }
  return u;
}
function Tv(a, l) {
  if (a == null) return {};
  var u = {};
  for (var r in a)
    if (Object.prototype.hasOwnProperty.call(a, r)) {
      if (l.indexOf(r) >= 0) continue;
      u[r] = a[r];
    }
  return u;
}
function Ps() {
  return (
    (Ps = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var l = 1; l < arguments.length; l++) {
            var u = arguments[l];
            for (var r in u)
              Object.prototype.hasOwnProperty.call(u, r) && (a[r] = u[r]);
          }
          return a;
        }),
    Ps.apply(this, arguments)
  );
}
function Qm(a, l) {
  var u = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    l &&
      (r = r.filter(function (c) {
        return Object.getOwnPropertyDescriptor(a, c).enumerable;
      })),
      u.push.apply(u, r);
  }
  return u;
}
function Js(a) {
  for (var l = 1; l < arguments.length; l++) {
    var u = arguments[l] != null ? arguments[l] : {};
    l % 2
      ? Qm(Object(u), !0).forEach(function (r) {
          Av(a, r, u[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
      : Qm(Object(u)).forEach(function (r) {
          Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(u, r));
        });
  }
  return a;
}
function Av(a, l, u) {
  return (
    (l = xv(l)),
    l in a
      ? Object.defineProperty(a, l, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[l] = u),
    a
  );
}
function xv(a) {
  var l = Mv(a, "string");
  return typeof l == "symbol" ? l : l + "";
}
function Mv(a, l) {
  if (typeof a != "object" || !a) return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var r = u.call(a, l);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(a);
}
function c1(a) {
  return (
    a &&
    a.map((l, u) =>
      ra.createElement(l.tag, Js({ key: u }, l.attr), c1(l.child))
    )
  );
}
function ca(a) {
  return (l) =>
    ra.createElement(Ev, Ps({ attr: Js({}, a.attr) }, l), c1(a.child));
}
function Ev(a) {
  var l = (u) => {
    var { attr: r, size: c, title: d } = a,
      h = bv(a, Sv),
      m = c || u.size || "1em",
      y;
    return (
      u.className && (y = u.className),
      a.className && (y = (y ? y + " " : "") + a.className),
      ra.createElement(
        "svg",
        Ps(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          u.attr,
          r,
          h,
          {
            className: y,
            style: Js(Js({ color: a.color || u.color }, u.style), a.style),
            height: m,
            width: m,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        d && ra.createElement("title", null, d),
        a.children
      )
    );
  };
  return Zm !== void 0
    ? ra.createElement(Zm.Consumer, null, (u) => l(u))
    : l(o1);
}
function Dv(a) {
  return ca({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(a);
}
function Cv(a) {
  return ca({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(a);
}
function Ov(a) {
  return ca({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function Rv(a) {
  return ca({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(a);
}
function Vv() {
  return G.jsxs("div", {
    className: "mb-10 flex items-center justify-between py-6 lg:mb-18 ",
    children: [
      G.jsx("div", {
        className: "flex flex-shrink-0 items-center-safe",
        children: G.jsx("img", {
          className: "mx-2 w-10 ",
          src: vv,
          alt: "logo",
        }),
      }),
      G.jsxs("div", {
        className: "m-8 flex items-center justify-center text-2xl gap-4",
        children: [G.jsx(Dv, {}), G.jsx(Cv, {}), G.jsx(Rv, {})],
      }),
    ],
  });
}
const zv = "/assets/project-1-hgWJFOHx.jpg",
  Uv = "/assets/project-2-Dsim69lq.jpg",
  Bv = "/assets/project-3-DJqjiGhQ.jpg",
  Nv = "/assets/project-4-D2aQLXBi.jpg",
  jv = `I’m a passionate full-stack web developer and a Physics undergraduate at DDUC, Delhi University. With hands-on experience in building responsive and dynamic web applications, I specialize in frontend technologies like React, Tailwind CSS, and JavaScript, and backend tools like Node.js, Express, and MongoDB.I enjoy crafting clean UI/UX experiences and robust backend systems. My goal is to continue learning, building, and contributing to impactful projects that blend creativity with code.

`,
  wv = `I am a dedicated and versatile full-stack developer with a passion for crafting modern, responsive web applications. As a Physics undergraduate at DDUC, Delhi University, I’ve built real-world projects using technologies like React, Tailwind CSS, Node.js, Express, and MongoDB. My journey into web development began with curiosity and has grown into a purposeful career path where I continuously learn and build meaningful products. I thrive in collaborative environments, enjoy tackling challenging problems, and love bringing creative ideas to life through code. Outside of development, I enjoy exploring the intersection of science and technology, staying active, and building personal projects that sharpen my skills.
.`,
  _v = [
    {
      title: "E-Commerce Website",
      image: zv,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: Uv,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: Bv,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
      title: "Blogging Platform",
      image: Nv,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
  ],
  Oo = {
    address: "New Delhi ,Delhi INDIA ",
    phoneNo: "+91 807 6909 867 ",
    email: "viveksr002@gmail.com",
  },
  Lv = "/assets/kevinRushProfile-C6ZBCIX3.png",
  f1 = nt.createContext({});
function Hv(a) {
  const l = nt.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const rc = typeof window < "u",
  Yv = rc ? nt.useLayoutEffect : nt.useEffect,
  oc = nt.createContext(null),
  h1 = nt.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function qv(a = !0) {
  const l = nt.useContext(oc);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: r, register: c } = l,
    d = nt.useId();
  nt.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const h = nt.useCallback(() => a && r && r(d), [d, r, a]);
  return !u && r ? [!1, h] : [!0];
}
function cc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function fc(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
let d1 = () => {};
const Go = { useManualTiming: !1 };
function hc(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const ze = (a) => a,
  dl = (a, l, u) => {
    const r = l - a;
    return r === 0 ? 1 : (u - a) / r;
  };
class dc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return cc(this.subscriptions, l), () => fc(this.subscriptions, l);
  }
  notify(l, u, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xe = (a) => a * 1e3,
  Ze = (a) => a / 1e3;
function m1(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Gv = hc(() => window.ScrollTimeline !== void 0);
class Xv {
  constructor(l) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = l.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((l) => l.finished));
  }
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][l] = u;
  }
  attachTimeline(l, u) {
    const r = this.animations.map((c) => {
      if (Gv() && c.attachTimeline) return c.attachTimeline(l);
      if (typeof u == "function") return u(c);
    });
    return () => {
      r.forEach((c, d) => {
        c && c(), this.animations[d].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let u = 0; u < this.animations.length; u++)
      l = Math.max(l, this.animations[u].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Zv extends Xv {
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
}
const Km = { value: null },
  mc = (a) => Array.isArray(a) && typeof a[0] == "number",
  Qv = {};
function Kv(a, l) {
  const u = hc(a);
  return () => Qv[l] ?? u();
}
const ml = Kv(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  p1 = (a, l, u = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++) r += a(d / (c - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  sl = ([a, l, u, r]) => `cubic-bezier(${a}, ${l}, ${u}, ${r})`,
  Xo = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: sl([0, 0.65, 0.55, 1]),
    circOut: sl([0.55, 0, 1, 0.45]),
    backIn: sl([0.31, 0.01, 0.66, -0.59]),
    backOut: sl([0.33, 1.53, 0.69, 0.99]),
  };
function y1(a, l) {
  if (a)
    return typeof a == "function" && ml()
      ? p1(a, l)
      : mc(a)
      ? sl(a)
      : Array.isArray(a)
      ? a.map((u) => y1(u, l) || Xo.easeOut)
      : Xo[a];
}
function Pv(
  a,
  l,
  u,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: m = "easeInOut",
    times: y,
  } = {},
  g = void 0
) {
  const v = { [l]: u };
  y && (v.offset = y);
  const b = y1(m, c);
  return (
    Array.isArray(b) && (v.easing = b),
    a.animate(v, {
      delay: r,
      duration: c,
      easing: Array.isArray(b) ? "linear" : b,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
      pseudoElement: g,
    })
  );
}
function pc(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function yc(a, l) {
  return (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
}
const ks = 2e4;
function gc(a) {
  let l = 0;
  const u = 50;
  let r = a.next(l);
  for (; !r.done && l < ks; ) (l += u), (r = a.next(l));
  return l >= ks ? 1 / 0 : l;
}
function Jv(a, l = 100, u) {
  const r = u({ ...a, keyframes: [0, l] }),
    c = Math.min(gc(r), ks);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: Ze(c),
  };
}
function g1(a) {
  return !!(
    (typeof a == "function" && ml()) ||
    !a ||
    (typeof a == "string" && (a in Xo || ml())) ||
    mc(a) ||
    (Array.isArray(a) && a.every(g1))
  );
}
function Pm(a, l) {
  (a.timeline = l), (a.onfinish = null);
}
const ul = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender",
];
function kv(a, l) {
  let u = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    y = 0;
  function g(b) {
    h.has(b) && (v.schedule(b), a()), y++, b(m);
  }
  const v = {
    schedule: (b, E = !1, R = !1) => {
      const L = R && c ? u : r;
      return E && h.add(b), L.has(b) || L.add(b), b;
    },
    cancel: (b) => {
      r.delete(b), h.delete(b);
    },
    process: (b) => {
      if (((m = b), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, r] = [r, u]),
        u.forEach(g),
        l && Km.value && Km.value.frameloop[l].push(y),
        (y = 0),
        u.clear(),
        (c = !1),
        d && ((d = !1), v.process(b));
    },
  };
  return v;
}
const Fv = 40;
function v1(a, l) {
  let u = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = ul.reduce((_, K) => ((_[K] = kv(d, l ? K : void 0)), _), {}),
    {
      read: m,
      resolveKeyframes: y,
      update: g,
      preRender: v,
      render: b,
      postRender: E,
    } = h,
    R = () => {
      const _ = performance.now();
      (u = !1),
        (c.delta = r ? 1e3 / 60 : Math.max(Math.min(_ - c.timestamp, Fv), 1)),
        (c.timestamp = _),
        (c.isProcessing = !0),
        m.process(c),
        y.process(c),
        g.process(c),
        v.process(c),
        b.process(c),
        E.process(c),
        (c.isProcessing = !1),
        u && l && ((r = !1), a(R));
    },
    j = () => {
      (u = !0), (r = !0), c.isProcessing || a(R);
    };
  return {
    schedule: ul.reduce((_, K) => {
      const X = h[K];
      return (
        (_[K] = (ot, H = !1, it = !1) => (u || j(), X.schedule(ot, H, it))), _
      );
    }, {}),
    cancel: (_) => {
      for (let K = 0; K < ul.length; K++) h[ul[K]].cancel(_);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: xt,
    cancel: cn,
    state: Ft,
    steps: Ro,
  } = v1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0),
  { schedule: vc } = v1(queueMicrotask, !1);
let Zs;
function Wv() {
  Zs = void 0;
}
const Qe = {
    now: () => (
      Zs === void 0 &&
        Qe.set(
          Ft.isProcessing || Go.useManualTiming
            ? Ft.timestamp
            : performance.now()
        ),
      Zs
    ),
    set: (a) => {
      (Zs = a), queueMicrotask(Wv);
    },
  },
  je = { x: !1, y: !1 };
function S1() {
  return je.x || je.y;
}
function $v(a) {
  return a === "x" || a === "y"
    ? je[a]
      ? null
      : ((je[a] = !0),
        () => {
          je[a] = !1;
        })
    : je.x || je.y
    ? null
    : ((je.x = je.y = !0),
      () => {
        je.x = je.y = !1;
      });
}
function Iv(a, l, u) {
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    const c = document.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a);
}
function b1(a, l) {
  const u = Iv(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [u, c, () => r.abort()];
}
function Jm(a) {
  return !(a.pointerType === "touch" || S1());
}
function t2(a, l, u = {}) {
  const [r, c, d] = b1(a, u),
    h = (m) => {
      if (!Jm(m)) return;
      const { target: y } = m,
        g = l(y, m);
      if (typeof g != "function" || !y) return;
      const v = (b) => {
        Jm(b) && (g(b), y.removeEventListener("pointerleave", v));
      };
      y.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((m) => {
      m.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
const T1 = (a, l) => (l ? (a === l ? !0 : T1(a, l.parentElement)) : !1),
  Sc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  e2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function n2(a) {
  return e2.has(a.tagName) || a.tabIndex !== -1;
}
const rl = new WeakSet();
function km(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Vo(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const a2 = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const r = km(() => {
    if (rl.has(u)) return;
    Vo(u, "down");
    const c = km(() => {
        Vo(u, "up");
      }),
      d = () => Vo(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", r, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", r), l);
};
function Fm(a) {
  return Sc(a) && !S1();
}
function i2(a, l, u = {}) {
  const [r, c, d] = b1(a, u),
    h = (m) => {
      const y = m.currentTarget;
      if (!Fm(m) || rl.has(y)) return;
      rl.add(y);
      const g = l(y, m),
        v = (R, j) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", E),
            !(!Fm(R) || !rl.has(y)) &&
              (rl.delete(y), typeof g == "function" && g(R, { success: j }));
        },
        b = (R) => {
          v(
            R,
            y === window ||
              y === document ||
              u.useGlobalTarget ||
              T1(y, R.target)
          );
        },
        E = (R) => {
          v(R, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", E, c);
    };
  return (
    r.forEach((m) => {
      (u.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        m instanceof HTMLElement &&
          (m.addEventListener("focus", (g) => a2(g, c)),
          !n2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    d
  );
}
const Wm = 30,
  l2 = (a) => !isNaN(parseFloat(a));
class s2 {
  constructor(l, u = {}) {
    (this.version = "12.6.5"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        const d = Qe.now();
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = Qe.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = l2(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new dc());
    const r = this.events[l].add(u);
    return l === "change"
      ? () => {
          r(),
            xt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l, u = !0) {
    !u || !this.passiveEffect
      ? this.updateAndNotify(l, u)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, u, r) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = Qe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Wm
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Wm);
    return m1(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function pl(a, l) {
  return new s2(a, l);
}
ul.reduce((a, l) => ((a[l] = (u) => cn(u)), a), {});
const A1 = nt.createContext({ strict: !1 }),
  $m = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ni = {};
for (const a in $m) ni[a] = { isEnabled: (l) => $m[a].some((u) => !!l[u]) };
function u2(a) {
  for (const l in a) ni[l] = { ...ni[l], ...a[l] };
}
const r2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Fs(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    r2.has(a)
  );
}
let x1 = (a) => !Fs(a);
function o2(a) {
  a && (x1 = (l) => (l.startsWith("on") ? !Fs(l) : a(l)));
}
try {
  o2(require("@emotion/is-prop-valid").default);
} catch {}
function c2(a, l, u) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((x1(c) ||
        (u === !0 && Fs(c)) ||
        (!l && !Fs(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
function f2(a) {
  if (typeof Proxy > "u") return a;
  const l = new Map(),
    u = (...r) => a(...r);
  return new Proxy(u, {
    get: (r, c) =>
      c === "create" ? a : (l.has(c) || l.set(c, a(c)), l.get(c)),
  });
}
const nu = nt.createContext({});
function au(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function yl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const bc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Tc = ["initial", ...bc];
function iu(a) {
  return au(a.animate) || Tc.some((l) => yl(a[l]));
}
function M1(a) {
  return !!(iu(a) || a.variants);
}
function h2(a, l) {
  if (iu(a)) {
    const { initial: u, animate: r } = a;
    return {
      initial: u === !1 || yl(u) ? u : void 0,
      animate: yl(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function d2(a) {
  const { initial: l, animate: u } = h2(a, nt.useContext(nu));
  return nt.useMemo(() => ({ initial: l, animate: u }), [Im(l), Im(u)]);
}
function Im(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const m2 = Symbol.for("motionComponentSymbol");
function Wa(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function p2(a, l, u) {
  return nt.useCallback(
    (r) => {
      r && a.onMount && a.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        u && (typeof u == "function" ? u(r) : Wa(u) && (u.current = r));
    },
    [l]
  );
}
const Ac = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  y2 = "framerAppearId",
  E1 = "data-" + Ac(y2),
  D1 = nt.createContext({});
function g2(a, l, u, r, c) {
  var L, Y;
  const { visualElement: d } = nt.useContext(nu),
    h = nt.useContext(A1),
    m = nt.useContext(oc),
    y = nt.useContext(h1).reducedMotion,
    g = nt.useRef(null);
  (r = r || h.renderer),
    !g.current &&
      r &&
      (g.current = r(a, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y,
      }));
  const v = g.current,
    b = nt.useContext(D1);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    v2(g.current, u, c, b);
  const E = nt.useRef(!1);
  nt.useInsertionEffect(() => {
    v && E.current && v.update(u, m);
  });
  const R = u[E1],
    j = nt.useRef(
      !!R &&
        !((L = window.MotionHandoffIsComplete) != null && L.call(window, R)) &&
        ((Y = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : Y.call(window, R))
    );
  return (
    Yv(() => {
      v &&
        ((E.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        vc.render(v.render),
        j.current && v.animationState && v.animationState.animateChanges());
    }),
    nt.useEffect(() => {
      v &&
        (!j.current && v.animationState && v.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            var _;
            (_ = window.MotionHandoffMarkAsComplete) == null ||
              _.call(window, R);
          }),
          (j.current = !1)));
    }),
    v
  );
}
function v2(a, l, u, r) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: m,
    layoutScroll: y,
    layoutRoot: g,
  } = l;
  (a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : C1(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (m && Wa(m)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      layoutScroll: y,
      layoutRoot: g,
    });
}
function C1(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : C1(a.parent);
}
function S2({
  preloadedFeatures: a,
  createVisualElement: l,
  useRender: u,
  useVisualState: r,
  Component: c,
}) {
  a && u2(a);
  function d(m, y) {
    let g;
    const v = { ...nt.useContext(h1), ...m, layoutId: b2(m) },
      { isStatic: b } = v,
      E = d2(m),
      R = r(m, b);
    if (!b && rc) {
      T2();
      const j = A2(v);
      (g = j.MeasureLayout),
        (E.visualElement = g2(c, R, v, l, j.ProjectionNode));
    }
    return G.jsxs(nu.Provider, {
      value: E,
      children: [
        g && E.visualElement
          ? G.jsx(g, { visualElement: E.visualElement, ...v })
          : null,
        u(c, m, p2(R, E.visualElement, y), R, b, E.visualElement),
      ],
    });
  }
  d.displayName = `motion.${
    typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`
  }`;
  const h = nt.forwardRef(d);
  return (h[m2] = c), h;
}
function b2({ layoutId: a }) {
  const l = nt.useContext(f1).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function T2(a, l) {
  nt.useContext(A1).strict;
}
function A2(a) {
  const { drag: l, layout: u } = ni;
  if (!l && !u) return {};
  const r = { ...l, ...u };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (u != null && u.isEnabled(a))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const O1 = (a) => (l) => typeof l == "string" && l.startsWith(a),
  xc = O1("--"),
  x2 = O1("var(--"),
  Mc = (a) => (x2(a) ? M2.test(a.split("/*")[0].trim()) : !1),
  M2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  gl = {};
function E2(a) {
  for (const l in a) (gl[l] = a[l]), xc(l) && (gl[l].isCSSVariable = !0);
}
const ii = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  fa = new Set(ii);
function R1(a, { layout: l, layoutId: u }) {
  return (
    fa.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!gl[a] || a === "opacity"))
  );
}
const ne = (a) => !!(a && a.getVelocity),
  V1 = (a, l) => (l && typeof a == "number" ? l.transform(a) : a),
  fn = (a, l, u) => (u > l ? l : u < a ? a : u),
  li = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  vl = { ...li, transform: (a) => fn(0, 1, a) },
  qs = { ...li, default: 1 },
  Al = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  _n = Al("deg"),
  Ke = Al("%"),
  I = Al("px"),
  D2 = Al("vh"),
  C2 = Al("vw"),
  t0 = {
    ...Ke,
    parse: (a) => Ke.parse(a) / 100,
    transform: (a) => Ke.transform(a * 100),
  },
  O2 = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I,
  },
  R2 = {
    rotate: _n,
    rotateX: _n,
    rotateY: _n,
    rotateZ: _n,
    scale: qs,
    scaleX: qs,
    scaleY: qs,
    scaleZ: qs,
    skew: _n,
    skewX: _n,
    skewY: _n,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: vl,
    originX: t0,
    originY: t0,
    originZ: I,
  },
  e0 = { ...li, transform: Math.round },
  Ec = {
    ...O2,
    ...R2,
    zIndex: e0,
    size: I,
    fillOpacity: vl,
    strokeOpacity: vl,
    numOctaves: e0,
  },
  V2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  z2 = ii.length;
function U2(a, l, u) {
  let r = "",
    c = !0;
  for (let d = 0; d < z2; d++) {
    const h = ii[d],
      m = a[h];
    if (m === void 0) continue;
    let y = !0;
    if (
      (typeof m == "number"
        ? (y = m === (h.startsWith("scale") ? 1 : 0))
        : (y = parseFloat(m) === 0),
      !y || u)
    ) {
      const g = V1(m, Ec[h]);
      if (!y) {
        c = !1;
        const v = V2[h] || h;
        r += `${v}(${g}) `;
      }
      u && (l[h] = g);
    }
  }
  return (r = r.trim()), u ? (r = u(l, c ? "" : r)) : c && (r = "none"), r;
}
function Dc(a, l, u) {
  const { style: r, vars: c, transformOrigin: d } = a;
  let h = !1,
    m = !1;
  for (const y in l) {
    const g = l[y];
    if (fa.has(y)) {
      h = !0;
      continue;
    } else if (xc(y)) {
      c[y] = g;
      continue;
    } else {
      const v = V1(g, Ec[y]);
      y.startsWith("origin") ? ((m = !0), (d[y] = v)) : (r[y] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (r.transform = U2(l, a.transform, u))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: y = "50%", originY: g = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${y} ${g} ${v}`;
  }
}
const Cc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function z1(a, l, u) {
  for (const r in l) !ne(l[r]) && !R1(r, u) && (a[r] = l[r]);
}
function B2({ transformTemplate: a }, l) {
  return nt.useMemo(() => {
    const u = Cc();
    return Dc(u, l, a), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function N2(a, l) {
  const u = a.style || {},
    r = {};
  return z1(r, u, a), Object.assign(r, B2(a, l)), r;
}
function j2(a, l) {
  const u = {},
    r = N2(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = r),
    u
  );
}
const w2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Oc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(w2.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
const _2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  L2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function H2(a, l, u = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? _2 : L2;
  a[d.offset] = I.transform(-r);
  const h = I.transform(l),
    m = I.transform(u);
  a[d.array] = `${h} ${m}`;
}
function n0(a, l, u) {
  return typeof a == "string" ? a : I.transform(l + u * a);
}
function Y2(a, l, u) {
  const r = n0(l, a.x, a.width),
    c = n0(u, a.y, a.height);
  return `${r} ${c}`;
}
function Rc(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: r,
    originX: c,
    originY: d,
    pathLength: h,
    pathSpacing: m = 1,
    pathOffset: y = 0,
    ...g
  },
  v,
  b
) {
  if ((Dc(a, g, b), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: E, style: R, dimensions: j } = a;
  E.transform && (j && (R.transform = E.transform), delete E.transform),
    j &&
      (c !== void 0 || d !== void 0 || R.transform) &&
      (R.transformOrigin = Y2(
        j,
        c !== void 0 ? c : 0.5,
        d !== void 0 ? d : 0.5
      )),
    l !== void 0 && (E.x = l),
    u !== void 0 && (E.y = u),
    r !== void 0 && (E.scale = r),
    h !== void 0 && H2(E, h, m, y, !1);
}
const U1 = () => ({ ...Cc(), attrs: {} }),
  Vc = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function q2(a, l, u, r) {
  const c = nt.useMemo(() => {
    const d = U1();
    return (
      Rc(d, l, Vc(r), a.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    z1(d, a.style, a), (c.style = { ...d, ...c.style });
  }
  return c;
}
function G2(a = !1) {
  return (u, r, c, { latestValues: d }, h) => {
    const y = (Oc(u) ? q2 : j2)(r, d, h, u),
      g = c2(r, typeof u == "string", a),
      v = u !== nt.Fragment ? { ...g, ...y, ref: c } : {},
      { children: b } = r,
      E = nt.useMemo(() => (ne(b) ? b.get() : b), [b]);
    return nt.createElement(u, { ...v, children: E });
  };
}
function a0(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((u, r) => {
        (l[0][r] = u.get()), (l[1][r] = u.getVelocity());
      }),
    l
  );
}
function zc(a, l, u, r) {
  if (typeof l == "function") {
    const [c, d] = a0(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = a0(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  return l;
}
const Zo = (a) => Array.isArray(a),
  X2 = (a) => !!(a && typeof a == "object" && a.mix && a.toValue),
  Z2 = (a) => (Zo(a) ? a[a.length - 1] || 0 : a);
function Qs(a) {
  const l = ne(a) ? a.get() : a;
  return X2(l) ? l.toValue() : l;
}
function Q2(
  { scrapeMotionValuesFromProps: a, createRenderState: l, onUpdate: u },
  r,
  c,
  d
) {
  const h = { latestValues: K2(r, c, d, a), renderState: l() };
  return (
    u &&
      ((h.onMount = (m) => u({ props: r, current: m, ...h })),
      (h.onUpdate = (m) => u(m))),
    h
  );
}
const B1 = (a) => (l, u) => {
  const r = nt.useContext(nu),
    c = nt.useContext(oc),
    d = () => Q2(a, l, r, c);
  return u ? d() : Hv(d);
};
function K2(a, l, u, r) {
  const c = {},
    d = r(a, {});
  for (const E in d) c[E] = Qs(d[E]);
  let { initial: h, animate: m } = a;
  const y = iu(a),
    g = M1(a);
  l &&
    g &&
    !y &&
    a.inherit !== !1 &&
    (h === void 0 && (h = l.initial), m === void 0 && (m = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const b = v ? m : h;
  if (b && typeof b != "boolean" && !au(b)) {
    const E = Array.isArray(b) ? b : [b];
    for (let R = 0; R < E.length; R++) {
      const j = zc(a, E[R]);
      if (j) {
        const { transitionEnd: L, transition: Y, ..._ } = j;
        for (const K in _) {
          let X = _[K];
          if (Array.isArray(X)) {
            const ot = v ? X.length - 1 : 0;
            X = X[ot];
          }
          X !== null && (c[K] = X);
        }
        for (const K in L) c[K] = L[K];
      }
    }
  }
  return c;
}
function Uc(a, l, u) {
  var d;
  const { style: r } = a,
    c = {};
  for (const h in r)
    (ne(r[h]) ||
      (l.style && ne(l.style[h])) ||
      R1(h, a) ||
      ((d = u == null ? void 0 : u.getValue(h)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (c[h] = r[h]);
  return c;
}
const P2 = {
  useVisualState: B1({
    scrapeMotionValuesFromProps: Uc,
    createRenderState: Cc,
  }),
};
function N1(a, l) {
  try {
    l.dimensions =
      typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
  } catch {
    l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function j1(a, { style: l, vars: u }, r, c) {
  Object.assign(a.style, l, c && c.getProjectionStyles(r));
  for (const d in u) a.style.setProperty(d, u[d]);
}
const w1 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function _1(a, l, u, r) {
  j1(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute(w1.has(c) ? c : Ac(c), l.attrs[c]);
}
function L1(a, l, u) {
  const r = Uc(a, l, u);
  for (const c in a)
    if (ne(a[c]) || ne(l[c])) {
      const d =
        ii.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = a[c];
    }
  return r;
}
const i0 = ["x", "y", "width", "height", "cx", "cy", "r"],
  J2 = {
    useVisualState: B1({
      scrapeMotionValuesFromProps: L1,
      createRenderState: U1,
      onUpdate: ({
        props: a,
        prevProps: l,
        current: u,
        renderState: r,
        latestValues: c,
      }) => {
        if (!u) return;
        let d = !!a.drag;
        if (!d) {
          for (const m in c)
            if (fa.has(m)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let h = !l;
        if (l)
          for (let m = 0; m < i0.length; m++) {
            const y = i0[m];
            a[y] !== l[y] && (h = !0);
          }
        h &&
          xt.read(() => {
            N1(u, r),
              xt.render(() => {
                Rc(r, c, Vc(u.tagName), a.transformTemplate), _1(u, r);
              });
          });
      },
    }),
  };
function k2(a, l) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(Oc(r) ? J2 : P2),
      preloadedFeatures: a,
      useRender: G2(c),
      createVisualElement: l,
      Component: r,
    };
    return S2(h);
  };
}
function Sl(a, l, u) {
  const r = a.getProps();
  return zc(r, l, u !== void 0 ? u : r.custom, a);
}
const H1 = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ii,
]);
function F2(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, pl(u));
}
function W2(a, l) {
  const u = Sl(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...r };
  for (const h in d) {
    const m = Z2(d[h]);
    F2(a, h, m);
  }
}
function $2(a) {
  return !!(ne(a) && a.add);
}
function Qo(a, l) {
  const u = a.getValue("willChange");
  if ($2(u)) return u.add(l);
  if (!u && Go.WillChange) {
    const r = new Go.WillChange("auto");
    a.addValue("willChange", r), r.add(l);
  }
}
function Y1(a) {
  return a.props[E1];
}
const q1 = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  I2 = 1e-7,
  t3 = 12;
function e3(a, l, u, r, c) {
  let d,
    h,
    m = 0;
  do (h = l + (u - l) / 2), (d = q1(h, r, c) - a), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > I2 && ++m < t3);
  return h;
}
function xl(a, l, u, r) {
  if (a === l && u === r) return ze;
  const c = (d) => e3(d, 0, 1, a, u);
  return (d) => (d === 0 || d === 1 ? d : q1(c(d), l, r));
}
const G1 = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  X1 = (a) => (l) => 1 - a(1 - l),
  Z1 = xl(0.33, 1.53, 0.69, 0.99),
  Bc = X1(Z1),
  Q1 = G1(Bc),
  K1 = (a) =>
    (a *= 2) < 1 ? 0.5 * Bc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Nc = (a) => 1 - Math.sin(Math.acos(a)),
  P1 = X1(Nc),
  J1 = G1(Nc),
  k1 = (a) => /^0[^.\s]+$/u.test(a);
function n3(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || k1(a)
    : !0;
}
const ol = (a) => Math.round(a * 1e5) / 1e5,
  jc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function a3(a) {
  return a == null;
}
const i3 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  wc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && i3.test(u) && u.startsWith(a)) ||
      (l && !a3(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  F1 = (a, l, u) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, h, m] = r.match(jc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  l3 = (a) => fn(0, 255, a),
  zo = { ...li, transform: (a) => Math.round(l3(a)) },
  sa = {
    test: wc("rgb", "red"),
    parse: F1("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: r = 1 }) =>
      "rgba(" +
      zo.transform(a) +
      ", " +
      zo.transform(l) +
      ", " +
      zo.transform(u) +
      ", " +
      ol(vl.transform(r)) +
      ")",
  };
function s3(a) {
  let l = "",
    u = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Ko = { test: wc("#"), parse: s3, transform: sa.transform },
  $a = {
    test: wc("hsl", "hue"),
    parse: F1("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Ke.transform(ol(l)) +
      ", " +
      Ke.transform(ol(u)) +
      ", " +
      ol(vl.transform(r)) +
      ")",
  },
  ee = {
    test: (a) => sa.test(a) || Ko.test(a) || $a.test(a),
    parse: (a) =>
      sa.test(a) ? sa.parse(a) : $a.test(a) ? $a.parse(a) : Ko.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? sa.transform(a)
        : $a.transform(a),
  },
  u3 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function r3(a) {
  var l, u;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(jc)) == null ? void 0 : l.length) || 0) +
      (((u = a.match(u3)) == null ? void 0 : u.length) || 0) >
      0
  );
}
const W1 = "number",
  $1 = "color",
  o3 = "var",
  c3 = "var(",
  l0 = "${}",
  f3 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bl(a) {
  const l = a.toString(),
    u = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      f3,
      (y) => (
        ee.test(y)
          ? (r.color.push(d), c.push($1), u.push(ee.parse(y)))
          : y.startsWith(c3)
          ? (r.var.push(d), c.push(o3), u.push(y))
          : (r.number.push(d), c.push(W1), u.push(parseFloat(y))),
        ++d,
        l0
      )
    )
    .split(l0);
  return { values: u, split: m, indexes: r, types: c };
}
function I1(a) {
  return bl(a).values;
}
function tp(a) {
  const { split: l, types: u } = bl(a),
    r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const m = u[h];
        m === W1
          ? (d += ol(c[h]))
          : m === $1
          ? (d += ee.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const h3 = (a) => (typeof a == "number" ? 0 : a);
function d3(a) {
  const l = I1(a);
  return tp(a)(l.map(h3));
}
const Ln = {
    test: r3,
    parse: I1,
    createTransformer: tp,
    getAnimatableNone: d3,
  },
  m3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function p3(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = u.match(jc) || [];
  if (!r) return a;
  const c = u.replace(r, "");
  let d = m3.has(l) ? 1 : 0;
  return r !== u && (d *= 100), l + "(" + d + c + ")";
}
const y3 = /\b([a-z-]*)\(.*?\)/gu,
  Po = {
    ...Ln,
    getAnimatableNone: (a) => {
      const l = a.match(y3);
      return l ? l.map(p3).join(" ") : a;
    },
  },
  g3 = {
    ...Ec,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: Po,
    WebkitFilter: Po,
  },
  ep = (a) => g3[a];
function np(a, l) {
  let u = ep(a);
  return (
    u !== Po && (u = Ln), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const v3 = new Set(["auto", "none", "0"]);
function S3(a, l, u) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const d = a[r];
    typeof d == "string" && !v3.has(d) && bl(d).values.length && (c = a[r]),
      r++;
  }
  if (c && u) for (const d of l) a[d] = np(u, c);
}
const ua = (a) => (a * 180) / Math.PI,
  Jo = (a) => {
    const l = ua(Math.atan2(a[1], a[0]));
    return ko(l);
  },
  b3 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: Jo,
    rotateZ: Jo,
    skewX: (a) => ua(Math.atan(a[1])),
    skewY: (a) => ua(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  ko = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  s0 = Jo,
  u0 = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  r0 = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  T3 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: u0,
    scaleY: r0,
    scale: (a) => (u0(a) + r0(a)) / 2,
    rotateX: (a) => ko(ua(Math.atan2(a[6], a[5]))),
    rotateY: (a) => ko(ua(Math.atan2(-a[2], a[0]))),
    rotateZ: s0,
    rotate: s0,
    skewX: (a) => ua(Math.atan(a[4])),
    skewY: (a) => ua(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function o0(a) {
  return a.includes("scale") ? 1 : 0;
}
function Fo(a, l) {
  if (!a || a === "none") return o0(l);
  const u = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (u) (r = T3), (c = u);
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = b3), (c = m);
  }
  if (!c) return o0(l);
  const d = r[l],
    h = c[1].split(",").map(x3);
  return typeof d == "function" ? d(h) : h[d];
}
const A3 = (a, l) => {
  const { transform: u = "none" } = getComputedStyle(a);
  return Fo(u, l);
};
function x3(a) {
  return parseFloat(a.trim());
}
const c0 = (a) => a === li || a === I,
  M3 = new Set(["x", "y", "z"]),
  E3 = ii.filter((a) => !M3.has(a));
function D3(a) {
  const l = [];
  return (
    E3.forEach((u) => {
      const r = a.getValue(u);
      r !== void 0 &&
        (l.push([u, r.get()]), r.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const ai = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => Fo(l, "x"),
  y: (a, { transform: l }) => Fo(l, "y"),
};
ai.translateX = ai.x;
ai.translateY = ai.y;
const oa = new Set();
let Wo = !1,
  $o = !1;
function ap() {
  if ($o) {
    const a = Array.from(oa).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      u = new Map();
    l.forEach((r) => {
      const c = D3(r);
      c.length && (u.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = u.get(r);
        c &&
          c.forEach(([d, h]) => {
            var m;
            (m = r.getValue(d)) == null || m.set(h);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  ($o = !1), (Wo = !1), oa.forEach((a) => a.complete()), oa.clear();
}
function ip() {
  oa.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && ($o = !0);
  });
}
function C3() {
  ip(), ap();
}
class _c {
  constructor(l, u, r, c, d, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (oa.add(this),
          Wo || ((Wo = !0), xt.read(ip), xt.resolveKeyframes(ap)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: r,
      motionValue: c,
    } = this;
    for (let d = 0; d < l.length; d++)
      if (l[d] === null)
        if (d === 0) {
          const h = c == null ? void 0 : c.get(),
            m = l[l.length - 1];
          if (h !== void 0) l[0] = h;
          else if (r && u) {
            const y = r.readValue(u, m);
            y != null && (l[0] = y);
          }
          l[0] === void 0 && (l[0] = m), c && h === void 0 && c.set(l[0]);
        } else l[d] = l[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      oa.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), oa.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const lp = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  O3 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function R3(a) {
  const l = O3.exec(a);
  if (!l) return [,];
  const [, u, r, c] = l;
  return [`--${u ?? r}`, c];
}
function sp(a, l, u = 1) {
  const [r, c] = R3(a);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return lp(h) ? parseFloat(h) : h;
  }
  return Mc(c) ? sp(c, l, u + 1) : c;
}
const up = (a) => (l) => l.test(a),
  V3 = { test: (a) => a === "auto", parse: (a) => a },
  rp = [li, I, Ke, _n, C2, D2, V3],
  f0 = (a) => rp.find(up(a));
class op extends _c {
  constructor(l, u, r, c, d) {
    super(l, u, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: r } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let y = 0; y < l.length; y++) {
      let g = l[y];
      if (typeof g == "string" && ((g = g.trim()), Mc(g))) {
        const v = sp(g, u.current);
        v !== void 0 && (l[y] = v),
          y === l.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !H1.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      h = f0(c),
      m = f0(d);
    if (h !== m)
      if (c0(h) && c0(m))
        for (let y = 0; y < l.length; y++) {
          const g = l[y];
          typeof g == "string" && (l[y] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      r = [];
    for (let c = 0; c < l.length; c++) n3(l[c]) && r.push(c);
    r.length && S3(l, r, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ai[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: u, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      h = r[d];
    (r[d] = ai[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
const h0 = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Ln.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function z3(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function U3(a, l, u, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    h = h0(c, l),
    m = h0(d, l);
  return !h || !m ? !1 : z3(a) || ((u === "spring" || pc(u)) && r);
}
const B3 = (a) => a !== null;
function lu(a, { repeat: l, repeatType: u = "loop" }, r) {
  const c = a.filter(B3),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return !d || r === void 0 ? c[d] : r;
}
const N3 = 40;
class cp {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Qe.now()),
      (this.options = {
        autoplay: l,
        delay: u,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        ...m,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > N3
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && C3(), this._resolved;
  }
  onKeyframesResolved(l, u) {
    (this.resolvedAt = Qe.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: c,
      velocity: d,
      delay: h,
      onComplete: m,
      onUpdate: y,
      isGenerator: g,
    } = this.options;
    if (!g && !U3(l, r, c, d))
      if (h) this.options.duration = 0;
      else {
        y && y(lu(l, this.options, u)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(l, u);
    v !== !1 &&
      ((this._resolved = { keyframes: l, finalKeyframe: u, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(l, u) {
    return this.currentFinishedPromise.then(l, u);
  }
  flatten() {
    this.options.allowFlatten &&
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Ot = (a, l, u) => a + (l - a) * u;
function Uo(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? a + (l - a) * (2 / 3 - u) * 6
      : a
  );
}
function j3({ hue: a, saturation: l, lightness: u, alpha: r }) {
  (a /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const m = u < 0.5 ? u * (1 + l) : u + l - u * l,
      y = 2 * u - m;
    (c = Uo(y, m, a + 1 / 3)), (d = Uo(y, m, a)), (h = Uo(y, m, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function Ws(a, l) {
  return (u) => (u > 0 ? l : a);
}
const Bo = (a, l, u) => {
    const r = a * a,
      c = u * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  w3 = [Ko, sa, $a],
  _3 = (a) => w3.find((l) => l.test(a));
function d0(a) {
  const l = _3(a);
  if (!l) return !1;
  let u = l.parse(a);
  return l === $a && (u = j3(u)), u;
}
const m0 = (a, l) => {
    const u = d0(a),
      r = d0(l);
    if (!u || !r) return Ws(a, l);
    const c = { ...u };
    return (d) => (
      (c.red = Bo(u.red, r.red, d)),
      (c.green = Bo(u.green, r.green, d)),
      (c.blue = Bo(u.blue, r.blue, d)),
      (c.alpha = Ot(u.alpha, r.alpha, d)),
      sa.transform(c)
    );
  },
  L3 = (a, l) => (u) => l(a(u)),
  Ml = (...a) => a.reduce(L3),
  Io = new Set(["none", "hidden"]);
function H3(a, l) {
  return Io.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function Y3(a, l) {
  return (u) => Ot(a, l, u);
}
function Lc(a) {
  return typeof a == "number"
    ? Y3
    : typeof a == "string"
    ? Mc(a)
      ? Ws
      : ee.test(a)
      ? m0
      : X3
    : Array.isArray(a)
    ? fp
    : typeof a == "object"
    ? ee.test(a)
      ? m0
      : q3
    : Ws;
}
function fp(a, l) {
  const u = [...a],
    r = u.length,
    c = a.map((d, h) => Lc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++) u[h] = c[h](d);
    return u;
  };
}
function q3(a, l) {
  const u = { ...a, ...l },
    r = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = Lc(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in r) u[d] = r[d](c);
    return u;
  };
}
function G3(a, l) {
  const u = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = a.indexes[d][r[d]],
      m = a.values[h] ?? 0;
    (u[c] = m), r[d]++;
  }
  return u;
}
const X3 = (a, l) => {
  const u = Ln.createTransformer(l),
    r = bl(a),
    c = bl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (Io.has(a) && !c.values.length) || (Io.has(l) && !r.values.length)
      ? H3(a, l)
      : Ml(fp(G3(r, c), c.values), u)
    : Ws(a, l);
};
function hp(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? Ot(a, l, u)
    : Lc(a)(a, l);
}
const Z3 = 5;
function dp(a, l, u) {
  const r = Math.max(l - Z3, 0);
  return m1(u - a(r), l - r);
}
const zt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  p0 = 0.001;
function Q3({
  duration: a = zt.duration,
  bounce: l = zt.bounce,
  velocity: u = zt.velocity,
  mass: r = zt.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = fn(zt.minDamping, zt.maxDamping, h)),
    (a = fn(zt.minDuration, zt.maxDuration, Ze(a))),
    h < 1
      ? ((c = (g) => {
          const v = g * h,
            b = v * a,
            E = v - u,
            R = tc(g, h),
            j = Math.exp(-b);
          return p0 - (E / R) * j;
        }),
        (d = (g) => {
          const b = g * h * a,
            E = b * u + u,
            R = Math.pow(h, 2) * Math.pow(g, 2) * a,
            j = Math.exp(-b),
            L = tc(Math.pow(g, 2), h);
          return ((-c(g) + p0 > 0 ? -1 : 1) * ((E - R) * j)) / L;
        }))
      : ((c = (g) => {
          const v = Math.exp(-g * a),
            b = (g - u) * a + 1;
          return -0.001 + v * b;
        }),
        (d = (g) => {
          const v = Math.exp(-g * a),
            b = (u - g) * (a * a);
          return v * b;
        }));
  const m = 5 / a,
    y = P3(c, d, m);
  if (((a = Xe(a)), isNaN(y)))
    return { stiffness: zt.stiffness, damping: zt.damping, duration: a };
  {
    const g = Math.pow(y, 2) * r;
    return { stiffness: g, damping: h * 2 * Math.sqrt(r * g), duration: a };
  }
}
const K3 = 12;
function P3(a, l, u) {
  let r = u;
  for (let c = 1; c < K3; c++) r = r - a(r) / l(r);
  return r;
}
function tc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const J3 = ["duration", "bounce"],
  k3 = ["stiffness", "damping", "mass"];
function y0(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function F3(a) {
  let l = {
    velocity: zt.velocity,
    stiffness: zt.stiffness,
    damping: zt.damping,
    mass: zt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!y0(a, k3) && y0(a, J3))
    if (a.visualDuration) {
      const u = a.visualDuration,
        r = (2 * Math.PI) / (u * 1.2),
        c = r * r,
        d = 2 * fn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: zt.mass, stiffness: c, damping: d };
    } else {
      const u = Q3(a);
      (l = { ...l, ...u, mass: zt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function $s(a = zt.visualDuration, l = zt.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: r, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: y,
      damping: g,
      mass: v,
      duration: b,
      velocity: E,
      isResolvedFromDuration: R,
    } = F3({ ...u, velocity: -Ze(u.velocity || 0) }),
    j = E || 0,
    L = g / (2 * Math.sqrt(y * v)),
    Y = h - d,
    _ = Ze(Math.sqrt(y / v)),
    K = Math.abs(Y) < 5;
  r || (r = K ? zt.restSpeed.granular : zt.restSpeed.default),
    c || (c = K ? zt.restDelta.granular : zt.restDelta.default);
  let X;
  if (L < 1) {
    const H = tc(_, L);
    X = (it) => {
      const dt = Math.exp(-L * _ * it);
      return (
        h -
        dt * (((j + L * _ * Y) / H) * Math.sin(H * it) + Y * Math.cos(H * it))
      );
    };
  } else if (L === 1) X = (H) => h - Math.exp(-_ * H) * (Y + (j + _ * Y) * H);
  else {
    const H = _ * Math.sqrt(L * L - 1);
    X = (it) => {
      const dt = Math.exp(-L * _ * it),
        k = Math.min(H * it, 300);
      return (
        h - (dt * ((j + L * _ * Y) * Math.sinh(k) + H * Y * Math.cosh(k))) / H
      );
    };
  }
  const ot = {
    calculatedDuration: (R && b) || null,
    next: (H) => {
      const it = X(H);
      if (R) m.done = H >= b;
      else {
        let dt = 0;
        L < 1 && (dt = H === 0 ? Xe(j) : dp(X, H, it));
        const k = Math.abs(dt) <= r,
          Mt = Math.abs(h - it) <= c;
        m.done = k && Mt;
      }
      return (m.value = m.done ? h : it), m;
    },
    toString: () => {
      const H = Math.min(gc(ot), ks),
        it = p1((dt) => ot.next(H * dt).value, H, 30);
      return H + "ms " + it;
    },
    toTransition: () => {},
  };
  return ot;
}
$s.applyToOptions = (a) => {
  const l = Jv(a, 100, $s);
  return (
    (a.ease = ml() ? l.ease : "easeOut"),
    (a.duration = Xe(l.duration)),
    (a.type = "keyframes"),
    a
  );
};
function g0({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: m,
  max: y,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    E = { done: !1, value: b },
    R = (k) => (m !== void 0 && k < m) || (y !== void 0 && k > y),
    j = (k) =>
      m === void 0
        ? y
        : y === void 0 || Math.abs(m - k) < Math.abs(y - k)
        ? m
        : y;
  let L = u * l;
  const Y = b + L,
    _ = h === void 0 ? Y : h(Y);
  _ !== Y && (L = _ - b);
  const K = (k) => -L * Math.exp(-k / r),
    X = (k) => _ + K(k),
    ot = (k) => {
      const Mt = K(k),
        _t = X(k);
      (E.done = Math.abs(Mt) <= g), (E.value = E.done ? _ : _t);
    };
  let H, it;
  const dt = (k) => {
    R(E.value) &&
      ((H = k),
      (it = $s({
        keyframes: [E.value, j(E.value)],
        velocity: dp(X, k, E.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: v,
      })));
  };
  return (
    dt(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let Mt = !1;
        return (
          !it && H === void 0 && ((Mt = !0), ot(k), dt(k)),
          H !== void 0 && k >= H ? it.next(k - H) : (!Mt && ot(k), E)
        );
      },
    }
  );
}
const W3 = xl(0.42, 0, 1, 1),
  $3 = xl(0, 0, 0.58, 1),
  mp = xl(0.42, 0, 0.58, 1),
  I3 = (a) => Array.isArray(a) && typeof a[0] != "number",
  t4 = {
    linear: ze,
    easeIn: W3,
    easeInOut: mp,
    easeOut: $3,
    circIn: Nc,
    circInOut: J1,
    circOut: P1,
    backIn: Bc,
    backInOut: Q1,
    backOut: Z1,
    anticipate: K1,
  },
  v0 = (a) => {
    if (mc(a)) {
      d1(a.length === 4);
      const [l, u, r, c] = a;
      return xl(l, u, r, c);
    } else if (typeof a == "string") return t4[a];
    return a;
  };
function e4(a, l, u) {
  const r = [],
    c = u || hp,
    d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let m = c(a[h], a[h + 1]);
    if (l) {
      const y = Array.isArray(l) ? l[h] || ze : l;
      m = Ml(y, m);
    }
    r.push(m);
  }
  return r;
}
function n4(a, l, { clamp: u = !0, ease: r, mixer: c } = {}) {
  const d = a.length;
  if ((d1(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = e4(l, r, c),
    y = m.length,
    g = (v) => {
      if (h && v < a[0]) return l[0];
      let b = 0;
      if (y > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const E = dl(a[b], a[b + 1], v);
      return m[b](E);
    };
  return u ? (v) => g(fn(a[0], a[d - 1], v)) : g;
}
function a4(a, l) {
  const u = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = dl(0, l, r);
    a.push(Ot(u, 1, c));
  }
}
function i4(a) {
  const l = [0];
  return a4(l, a.length - 1), l;
}
function l4(a, l) {
  return a.map((u) => u * l);
}
function s4(a, l) {
  return a.map(() => l || mp).splice(0, a.length - 1);
}
function Is({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: r = "easeInOut",
}) {
  const c = I3(r) ? r.map(v0) : v0(r),
    d = { done: !1, value: l[0] },
    h = l4(u && u.length === l.length ? u : i4(l), a),
    m = n4(h, l, { ease: Array.isArray(c) ? c : s4(l, c) });
  return {
    calculatedDuration: a,
    next: (y) => ((d.value = m(y)), (d.done = y >= a), d),
  };
}
const u4 = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: () => xt.update(l, !0),
      stop: () => cn(l),
      now: () => (Ft.isProcessing ? Ft.timestamp : Qe.now()),
    };
  },
  r4 = { decay: g0, inertia: g0, tween: Is, keyframes: Is, spring: $s },
  o4 = (a) => a / 100;
class Hc extends cp {
  constructor(l) {
    super(l),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: y } = this.options;
        y && y();
      });
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || _c,
      m = (y, g) => this.onKeyframesResolved(y, g);
    (this.resolver = new h(d, m, u, r, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(l) {
    const {
        type: u = "keyframes",
        repeat: r = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = this.options,
      m = pc(u) ? u : r4[u] || Is;
    let y, g;
    m !== Is &&
      typeof l[0] != "number" &&
      ((y = Ml(o4, hp(l[0], l[1]))), (l = [0, 100]));
    const v = m({ ...this.options, keyframes: l });
    d === "mirror" &&
      (g = m({ ...this.options, keyframes: [...l].reverse(), velocity: -h })),
      v.calculatedDuration === null && (v.calculatedDuration = gc(v));
    const { calculatedDuration: b } = v,
      E = b + c,
      R = E * (r + 1) - c;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: y,
      calculatedDuration: b,
      resolvedDuration: E,
      totalDuration: R,
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !l
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(l, u = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: h,
      mapPercentToKeyframes: m,
      keyframes: y,
      calculatedDuration: g,
      totalDuration: v,
      resolvedDuration: b,
    } = r;
    if (this.startTime === null) return d.next(0);
    const {
      delay: E,
      repeat: R,
      repeatType: j,
      repeatDelay: L,
      onUpdate: Y,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - v / this.speed, this.startTime)),
      u
        ? (this.currentTime = l)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(l - this.startTime) * this.speed);
    const _ = this.currentTime - E * (this.speed >= 0 ? 1 : -1),
      K = this.speed >= 0 ? _ < 0 : _ > v;
    (this.currentTime = Math.max(_, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let X = this.currentTime,
      ot = d;
    if (R) {
      const k = Math.min(this.currentTime, v) / b;
      let Mt = Math.floor(k),
        _t = k % 1;
      !_t && k >= 1 && (_t = 1),
        _t === 1 && Mt--,
        (Mt = Math.min(Mt, R + 1)),
        !!(Mt % 2) &&
          (j === "reverse"
            ? ((_t = 1 - _t), L && (_t -= L / b))
            : j === "mirror" && (ot = h)),
        (X = fn(0, 1, _t) * b);
    }
    const H = K ? { done: !1, value: y[0] } : ot.next(X);
    m && (H.value = m(H.value));
    let { done: it } = H;
    !K &&
      g !== null &&
      (it = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const dt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && it));
    return (
      dt && c !== void 0 && (H.value = lu(y, this.options, c)),
      Y && Y(H.value),
      dt && this.finish(),
      H
    );
  }
  get duration() {
    const { resolved: l } = this;
    return l ? Ze(l.calculatedDuration) : 0;
  }
  get time() {
    return Ze(this.currentTime);
  }
  set time(l) {
    (l = Xe(l)),
      (this.currentTime = l),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = Ze(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: l = u4, onPlay: u, startTime: r } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), u && u();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = c)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"), (this.holdTime = this.currentTime ?? 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: l } = this.options;
    l && l();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const c4 = new Set(["opacity", "clipPath", "filter", "transform"]),
  f4 = hc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  tu = 10,
  h4 = 2e4;
function d4(a) {
  return pc(a.type) || a.type === "spring" || !g1(a.ease);
}
function m4(a, l) {
  const u = new Hc({
    ...l,
    keyframes: a,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: a[0] };
  const c = [];
  let d = 0;
  for (; !r.done && d < h4; ) (r = u.sample(d)), c.push(r.value), (d += tu);
  return { times: void 0, keyframes: c, duration: d - tu, ease: "linear" };
}
const pp = { anticipate: K1, backInOut: Q1, circInOut: J1 };
function p4(a) {
  return a in pp;
}
class S0 extends cp {
  constructor(l) {
    super(l);
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options;
    (this.resolver = new op(
      d,
      (h, m) => this.onKeyframesResolved(h, m),
      u,
      r,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(l, u) {
    let {
      duration: r = 300,
      times: c,
      ease: d,
      type: h,
      motionValue: m,
      name: y,
      startTime: g,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof d == "string" && ml() && p4(d) && (d = pp[d]), d4(this.options))
    ) {
      const {
          onComplete: b,
          onUpdate: E,
          motionValue: R,
          element: j,
          ...L
        } = this.options,
        Y = m4(l, L);
      (l = Y.keyframes),
        l.length === 1 && (l[1] = l[0]),
        (r = Y.duration),
        (c = Y.times),
        (d = Y.ease),
        (h = "keyframes");
    }
    const v = Pv(m.owner.current, y, l, {
      ...this.options,
      duration: r,
      times: c,
      ease: d,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Pm(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: b } = this.options;
            m.set(lu(l, this.options, u)),
              b && b(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: r, times: c, type: h, ease: d, keyframes: l }
    );
  }
  get duration() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { duration: u } = l;
    return Ze(u);
  }
  get time() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { animation: u } = l;
    return Ze(u.currentTime || 0);
  }
  set time(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.currentTime = Xe(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l) return 1;
    const { animation: u } = l;
    return u.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l) return "idle";
    const { animation: u } = l;
    return u.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l) return null;
    const { animation: u } = l;
    return u.startTime;
  }
  attachTimeline(l) {
    if (!this._resolved) this.pendingTimeline = l;
    else {
      const { resolved: u } = this;
      if (!u) return ze;
      const { animation: r } = u;
      Pm(r, l);
    }
    return ze;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.playState === "finished" && this.updateFinishedPromise(), u.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l) return;
    const {
      animation: u,
      keyframes: r,
      duration: c,
      type: d,
      ease: h,
      times: m,
    } = l;
    if (u.playState === "idle" || u.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: g,
          onUpdate: v,
          onComplete: b,
          element: E,
          ...R
        } = this.options,
        j = new Hc({
          ...R,
          keyframes: r,
          duration: c,
          type: d,
          ease: h,
          times: m,
          isGenerator: !0,
        }),
        L = Xe(this.time);
      g.setWithVelocity(j.sample(L - tu).value, j.sample(L).value, tu);
    }
    const { onStop: y } = this.options;
    y && y(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const {
      motionValue: u,
      name: r,
      repeatDelay: c,
      repeatType: d,
      damping: h,
      type: m,
    } = l;
    if (!u || !u.owner || !(u.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: y, transformTemplate: g } = u.owner.getProps();
    return (
      f4() &&
      r &&
      c4.has(r) &&
      (r !== "transform" || !g) &&
      !y &&
      !c &&
      d !== "mirror" &&
      h !== 0 &&
      m !== "inertia"
    );
  }
}
const y4 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  g4 = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  v4 = { type: "keyframes", duration: 0.8 },
  S4 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  b4 = (a, { keyframes: l }) =>
    l.length > 2
      ? v4
      : fa.has(a)
      ? a.startsWith("scale")
        ? g4(l[1])
        : y4
      : S4;
function T4({
  when: a,
  delay: l,
  delayChildren: u,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: m,
  from: y,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Yc =
  (a, l, u, r = {}, c, d) =>
  (h) => {
    const m = yc(r, a) || {},
      y = m.delay || r.delay || 0;
    let { elapsed: g = 0 } = r;
    g = g - Xe(y);
    let v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -g,
      onUpdate: (E) => {
        l.set(E), m.onUpdate && m.onUpdate(E);
      },
      onComplete: () => {
        h(), m.onComplete && m.onComplete();
      },
      name: a,
      motionValue: l,
      element: d ? void 0 : c,
    };
    T4(m) || (v = { ...v, ...b4(a, v) }),
      v.duration && (v.duration = Xe(v.duration)),
      v.repeatDelay && (v.repeatDelay = Xe(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (b = !0)),
      (v.allowFlatten = !m.type && !m.ease),
      b && !d && l.get() !== void 0)
    ) {
      const E = lu(v.keyframes, m);
      if (E !== void 0)
        return (
          xt.update(() => {
            v.onUpdate(E), v.onComplete();
          }),
          new Zv([])
        );
    }
    return !d && S0.supports(v) ? new S0(v) : new Hc(v);
  };
function A4({ protectedKeys: a, needsAnimating: l }, u) {
  const r = a.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), r;
}
function yp(a, l, { delay: u = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d = a.getDefaultTransition(), transitionEnd: h, ...m } = l;
  r && (d = r);
  const y = [],
    g = c && a.animationState && a.animationState.getState()[c];
  for (const v in m) {
    const b = a.getValue(v, a.latestValues[v] ?? null),
      E = m[v];
    if (E === void 0 || (g && A4(g, v))) continue;
    const R = { delay: u, ...yc(d || {}, v) };
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const Y = Y1(a);
      if (Y) {
        const _ = window.MotionHandoffAnimation(Y, v, xt);
        _ !== null && ((R.startTime = _), (j = !0));
      }
    }
    Qo(a, v),
      b.start(
        Yc(v, b, E, a.shouldReduceMotion && H1.has(v) ? { type: !1 } : R, a, j)
      );
    const L = b.animation;
    L && y.push(L);
  }
  return (
    h &&
      Promise.all(y).then(() => {
        xt.update(() => {
          h && W2(a, h);
        });
      }),
    y
  );
}
function ec(a, l, u = {}) {
  var y;
  const r = Sl(
    a,
    l,
    u.type === "exit"
      ? (y = a.presenceContext) == null
        ? void 0
        : y.custom
      : void 0
  );
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = r ? () => Promise.all(yp(a, r, u)) : () => Promise.resolve(),
    h =
      a.variantChildren && a.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: E,
            } = c;
            return x4(a, l, v + g, b, E, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => v());
  } else return Promise.all([d(), h(u.delay)]);
}
function x4(a, l, u = 0, r = 0, c = 1, d) {
  const h = [],
    m = (a.variantChildren.size - 1) * r,
    y = c === 1 ? (g = 0) => g * r : (g = 0) => m - g * r;
  return (
    Array.from(a.variantChildren)
      .sort(M4)
      .forEach((g, v) => {
        g.notify("AnimationStart", l),
          h.push(
            ec(g, l, { ...d, delay: u + y(v) }).then(() =>
              g.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(h)
  );
}
function M4(a, l) {
  return a.sortNodePosition(l);
}
function E4(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => ec(a, d, u));
    r = Promise.all(c);
  } else if (typeof l == "string") r = ec(a, l, u);
  else {
    const c = typeof l == "function" ? Sl(a, l, u.custom) : l;
    r = Promise.all(yp(a, c, u));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function gp(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let r = 0; r < u; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const D4 = Tc.length;
function vp(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? vp(a.parent) || {} : {};
    return a.props.initial !== void 0 && (u.initial = a.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < D4; u++) {
    const r = Tc[u],
      c = a.props[r];
    (yl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const C4 = [...bc].reverse(),
  O4 = bc.length;
function R4(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: r }) => E4(a, u, r)));
}
function V4(a) {
  let l = R4(a),
    u = b0(),
    r = !0;
  const c = (y) => (g, v) => {
    var E;
    const b = Sl(
      a,
      v,
      y === "exit"
        ? (E = a.presenceContext) == null
          ? void 0
          : E.custom
        : void 0
    );
    if (b) {
      const { transition: R, transitionEnd: j, ...L } = b;
      g = { ...g, ...L, ...j };
    }
    return g;
  };
  function d(y) {
    l = y(a);
  }
  function h(y) {
    const { props: g } = a,
      v = vp(a.parent) || {},
      b = [],
      E = new Set();
    let R = {},
      j = 1 / 0;
    for (let Y = 0; Y < O4; Y++) {
      const _ = C4[Y],
        K = u[_],
        X = g[_] !== void 0 ? g[_] : v[_],
        ot = yl(X),
        H = _ === y ? K.isActive : null;
      H === !1 && (j = Y);
      let it = X === v[_] && X !== g[_] && ot;
      if (
        (it && r && a.manuallyAnimateOnMount && (it = !1),
        (K.protectedKeys = { ...R }),
        (!K.isActive && H === null) ||
          (!X && !K.prevProp) ||
          au(X) ||
          typeof X == "boolean")
      )
        continue;
      const dt = z4(K.prevProp, X);
      let k = dt || (_ === y && K.isActive && !it && ot) || (Y > j && ot),
        Mt = !1;
      const _t = Array.isArray(X) ? X : [X];
      let Wt = _t.reduce(c(_), {});
      H === !1 && (Wt = {});
      const { prevResolvedValues: Lt = {} } = K,
        Pe = { ...Lt, ...Wt },
        we = (w) => {
          (k = !0),
            E.has(w) && ((Mt = !0), E.delete(w)),
            (K.needsAnimating[w] = !0);
          const P = a.getValue(w);
          P && (P.liveStyle = !1);
        };
      for (const w in Pe) {
        const P = Wt[w],
          mt = Lt[w];
        if (R.hasOwnProperty(w)) continue;
        let T = !1;
        Zo(P) && Zo(mt) ? (T = !gp(P, mt)) : (T = P !== mt),
          T
            ? P != null
              ? we(w)
              : E.add(w)
            : P !== void 0 && E.has(w)
            ? we(w)
            : (K.protectedKeys[w] = !0);
      }
      (K.prevProp = X),
        (K.prevResolvedValues = Wt),
        K.isActive && (R = { ...R, ...Wt }),
        r && a.blockInitialAnimation && (k = !1),
        k &&
          (!(it && dt) || Mt) &&
          b.push(..._t.map((w) => ({ animation: w, options: { type: _ } })));
    }
    if (E.size) {
      const Y = {};
      if (typeof g.initial != "boolean") {
        const _ = Sl(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        _ && _.transition && (Y.transition = _.transition);
      }
      E.forEach((_) => {
        const K = a.getBaseTarget(_),
          X = a.getValue(_);
        X && (X.liveStyle = !0), (Y[_] = K ?? null);
      }),
        b.push({ animation: Y });
    }
    let L = !!b.length;
    return (
      r &&
        (g.initial === !1 || g.initial === g.animate) &&
        !a.manuallyAnimateOnMount &&
        (L = !1),
      (r = !1),
      L ? l(b) : Promise.resolve()
    );
  }
  function m(y, g) {
    var b;
    if (u[y].isActive === g) return Promise.resolve();
    (b = a.variantChildren) == null ||
      b.forEach((E) => {
        var R;
        return (R = E.animationState) == null ? void 0 : R.setActive(y, g);
      }),
      (u[y].isActive = g);
    const v = h(y);
    for (const E in u) u[E].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: m,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = b0()), (r = !0);
    },
  };
}
function z4(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !gp(l, a) : !1;
}
function ia(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function b0() {
  return {
    animate: ia(!0),
    whileInView: ia(),
    whileHover: ia(),
    whileTap: ia(),
    whileDrag: ia(),
    whileFocus: ia(),
    exit: ia(),
  };
}
class Hn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class U4 extends Hn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = V4(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    au(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let B4 = 0;
class N4 extends Hn {
  constructor() {
    super(...arguments), (this.id = B4++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const j4 = { animation: { Feature: U4 }, exit: { Feature: N4 } };
function Tl(a, l, u, r = { passive: !0 }) {
  return a.addEventListener(l, u, r), () => a.removeEventListener(l, u);
}
function El(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const w4 = (a) => (l) => Sc(l) && a(l, El(l));
function cl(a, l, u, r) {
  return Tl(a, l, w4(u), r);
}
function Sp({ top: a, left: l, right: u, bottom: r }) {
  return { x: { min: l, max: u }, y: { min: a, max: r } };
}
function _4({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function L4(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: r.y, right: r.x };
}
const bp = 1e-4,
  H4 = 1 - bp,
  Y4 = 1 + bp,
  Tp = 0.01,
  q4 = 0 - Tp,
  G4 = 0 + Tp;
function ie(a) {
  return a.max - a.min;
}
function X4(a, l, u) {
  return Math.abs(a - l) <= u;
}
function T0(a, l, u, r = 0.5) {
  (a.origin = r),
    (a.originPoint = Ot(l.min, l.max, a.origin)),
    (a.scale = ie(u) / ie(l)),
    (a.translate = Ot(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= H4 && a.scale <= Y4) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= q4 && a.translate <= G4) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function fl(a, l, u, r) {
  T0(a.x, l.x, u.x, r ? r.originX : void 0),
    T0(a.y, l.y, u.y, r ? r.originY : void 0);
}
function A0(a, l, u) {
  (a.min = u.min + l.min), (a.max = a.min + ie(l));
}
function Z4(a, l, u) {
  A0(a.x, l.x, u.x), A0(a.y, l.y, u.y);
}
function x0(a, l, u) {
  (a.min = l.min - u.min), (a.max = a.min + ie(l));
}
function hl(a, l, u) {
  x0(a.x, l.x, u.x), x0(a.y, l.y, u.y);
}
const M0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ia = () => ({ x: M0(), y: M0() }),
  E0 = () => ({ min: 0, max: 0 }),
  Nt = () => ({ x: E0(), y: E0() });
function Ve(a) {
  return [a("x"), a("y")];
}
function No(a) {
  return a === void 0 || a === 1;
}
function nc({ scale: a, scaleX: l, scaleY: u }) {
  return !No(a) || !No(l) || !No(u);
}
function la(a) {
  return (
    nc(a) ||
    Ap(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function Ap(a) {
  return D0(a.x) || D0(a.y);
}
function D0(a) {
  return a && a !== "0%";
}
function eu(a, l, u) {
  const r = a - u,
    c = l * r;
  return u + c;
}
function C0(a, l, u, r, c) {
  return c !== void 0 && (a = eu(a, c, r)), eu(a, u, r) + l;
}
function ac(a, l = 0, u = 1, r, c) {
  (a.min = C0(a.min, l, u, r, c)), (a.max = C0(a.max, l, u, r, c));
}
function xp(a, { x: l, y: u }) {
  ac(a.x, l.translate, l.scale, l.originPoint),
    ac(a.y, u.translate, u.scale, u.originPoint);
}
const O0 = 0.999999999999,
  R0 = 1.0000000000001;
function Q4(a, l, u, r = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let m = 0; m < c; m++) {
    (d = u[m]), (h = d.projectionDelta);
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        ei(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), xp(a, h)),
      r && la(d.latestValues) && ei(a, d.latestValues));
  }
  l.x < R0 && l.x > O0 && (l.x = 1), l.y < R0 && l.y > O0 && (l.y = 1);
}
function ti(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function V0(a, l, u, r, c = 0.5) {
  const d = Ot(a.min, a.max, c);
  ac(a, l, u, d, r);
}
function ei(a, l) {
  V0(a.x, l.x, l.scaleX, l.scale, l.originX),
    V0(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function Mp(a, l) {
  return Sp(L4(a.getBoundingClientRect(), l));
}
function K4(a, l, u) {
  const r = Mp(a, u),
    { scroll: c } = l;
  return c && (ti(r.x, c.offset.x), ti(r.y, c.offset.y)), r;
}
const Ep = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  z0 = (a, l) => Math.abs(a - l);
function P4(a, l) {
  const u = z0(a.x, l.x),
    r = z0(a.y, l.y);
  return Math.sqrt(u ** 2 + r ** 2);
}
class Dp {
  constructor(
    l,
    u,
    { transformPagePoint: r, contextWindow: c, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = wo(this.lastMoveEventInfo, this.history),
          E = this.startEvent !== null,
          R = P4(b.offset, { x: 0, y: 0 }) >= 3;
        if (!E && !R) return;
        const { point: j } = b,
          { timestamp: L } = Ft;
        this.history.push({ ...j, timestamp: L });
        const { onStart: Y, onMove: _ } = this.handlers;
        E ||
          (Y && Y(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          _ && _(this.lastMoveEvent, b);
      }),
      (this.handlePointerMove = (b, E) => {
        (this.lastMoveEvent = b),
          (this.lastMoveEventInfo = jo(E, this.transformPagePoint)),
          xt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (b, E) => {
        this.end();
        const { onEnd: R, onSessionEnd: j, resumeAnimation: L } = this.handlers;
        if (
          (this.dragSnapToOrigin && L && L(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = wo(
          b.type === "pointercancel"
            ? this.lastMoveEventInfo
            : jo(E, this.transformPagePoint),
          this.history
        );
        this.startEvent && R && R(b, Y), j && j(b, Y);
      }),
      !Sc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = r),
      (this.contextWindow = c || window);
    const h = El(l),
      m = jo(h, this.transformPagePoint),
      { point: y } = m,
      { timestamp: g } = Ft;
    this.history = [{ ...y, timestamp: g }];
    const { onSessionStart: v } = u;
    v && v(l, wo(m, this.history)),
      (this.removeListeners = Ml(
        cl(this.contextWindow, "pointermove", this.handlePointerMove),
        cl(this.contextWindow, "pointerup", this.handlePointerUp),
        cl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), cn(this.updatePoint);
  }
}
function jo(a, l) {
  return l ? { point: l(a.point) } : a;
}
function U0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function wo({ point: a }, l) {
  return {
    point: a,
    delta: U0(a, Cp(l)),
    offset: U0(a, J4(l)),
    velocity: k4(l, 0.1),
  };
}
function J4(a) {
  return a[0];
}
function Cp(a) {
  return a[a.length - 1];
}
function k4(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    r = null;
  const c = Cp(a);
  for (; u >= 0 && ((r = a[u]), !(c.timestamp - r.timestamp > Xe(l))); ) u--;
  if (!r) return { x: 0, y: 0 };
  const d = Ze(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function F4(a, { min: l, max: u }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? Ot(l, a, r.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = r ? Ot(u, a, r.max) : Math.min(a, u)),
    a
  );
}
function B0(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function W4(a, { top: l, left: u, bottom: r, right: c }) {
  return { x: B0(a.x, u, c), y: B0(a.y, l, r) };
}
function N0(a, l) {
  let u = l.min - a.min,
    r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([u, r] = [r, u]), { min: u, max: r };
}
function $4(a, l) {
  return { x: N0(a.x, l.x), y: N0(a.y, l.y) };
}
function I4(a, l) {
  let u = 0.5;
  const r = ie(a),
    c = ie(l);
  return (
    c > r
      ? (u = dl(l.min, l.max - r, a.min))
      : r > c && (u = dl(a.min, a.max - c, l.min)),
    fn(0, 1, u)
  );
}
function tS(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const ic = 0.35;
function eS(a = ic) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = ic),
    { x: j0(a, "left", "right"), y: j0(a, "top", "bottom") }
  );
}
function j0(a, l, u) {
  return { min: w0(a, l), max: w0(a, u) };
}
function w0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const nS = new WeakMap();
class aS {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Nt()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: b } = this.getProps();
        b ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(El(v).point);
      },
      d = (v, b) => {
        const { drag: E, dragPropagation: R, onDragStart: j } = this.getProps();
        if (
          E &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = $v(E)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ve((Y) => {
            let _ = this.getAxisMotionValue(Y).get() || 0;
            if (Ke.test(_)) {
              const { projection: K } = this.visualElement;
              if (K && K.layout) {
                const X = K.layout.layoutBox[Y];
                X && (_ = ie(X) * (parseFloat(_) / 100));
              }
            }
            this.originPoint[Y] = _;
          }),
          j && xt.postRender(() => j(v, b)),
          Qo(this.visualElement, "transform");
        const { animationState: L } = this.visualElement;
        L && L.setActive("whileDrag", !0);
      },
      h = (v, b) => {
        const {
          dragPropagation: E,
          dragDirectionLock: R,
          onDirectionLock: j,
          onDrag: L,
        } = this.getProps();
        if (!E && !this.openDragLock) return;
        const { offset: Y } = b;
        if (R && this.currentDirection === null) {
          (this.currentDirection = iS(Y)),
            this.currentDirection !== null && j && j(this.currentDirection);
          return;
        }
        this.updateAxis("x", b.point, Y),
          this.updateAxis("y", b.point, Y),
          this.visualElement.render(),
          L && L(v, b);
      },
      m = (v, b) => this.stop(v, b),
      y = () =>
        Ve((v) => {
          var b;
          return (
            this.getAnimationState(v) === "paused" &&
            ((b = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : b.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Dp(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: m,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: Ep(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = u;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && xt.postRender(() => d(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, r) {
    const { drag: c } = this.getProps();
    if (!r || !Gs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (h = F4(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
          ? void 0
          : d.layout,
      c = this.constraints;
    l && Wa(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
      ? (this.constraints = W4(r.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = eS(u)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ve((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = tS(r.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !Wa(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = K4(r, c.root, this.visualElement.getTransformPagePoint());
    let h = $4(c.layout.layoutBox, d);
    if (u) {
      const m = u(_4(h));
      (this.hasMutatedConstraints = !!m), m && (h = Sp(m));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: m,
      } = this.getProps(),
      y = this.constraints || {},
      g = Ve((v) => {
        if (!Gs(v, u, this.currentDirection)) return;
        let b = (y && y[v]) || {};
        h && (b = { min: 0, max: 0 });
        const E = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          j = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: E,
            bounceDamping: R,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...b,
          };
        return this.startAxisValueAnimation(v, j);
      });
    return Promise.all(g).then(m);
  }
  startAxisValueAnimation(l, u) {
    const r = this.getAxisMotionValue(l);
    return (
      Qo(this.visualElement, l), r.start(Yc(l, r, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ve((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Ve((l) => {
      var u;
      return (u = this.getAxisMotionValue(l).animation) == null
        ? void 0
        : u.pause();
    });
  }
  getAnimationState(l) {
    var u;
    return (u = this.getAxisMotionValue(l).animation) == null
      ? void 0
      : u.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[u];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Ve((u) => {
      const { drag: r } = this.getProps();
      if (!Gs(u, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: m } = c.layout.layoutBox[u];
        d.set(l[u] - Ot(h, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Wa(u) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ve((h) => {
      const m = this.getAxisMotionValue(h);
      if (m && this.constraints !== !1) {
        const y = m.get();
        c[h] = I4({ min: y, max: y }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ve((h) => {
        if (!Gs(h, l, null)) return;
        const m = this.getAxisMotionValue(h),
          { min: y, max: g } = this.constraints[h];
        m.set(Ot(y, g, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    nS.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = cl(l, "pointerdown", (y) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(y);
      }),
      r = () => {
        const { dragConstraints: y } = this.getProps();
        Wa(y) && y.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      xt.read(r);
    const h = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (Ve((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += y[v].translate),
                b.set(b.get() + y[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), m && m();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = ic,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: m,
    };
  }
}
function Gs(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function iS(a, l = 10) {
  let u = null;
  return Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u;
}
class lS extends Hn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = ze),
      (this.removeListeners = ze),
      (this.controls = new aS(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ze);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _0 = (a) => (l, u) => {
  a && xt.postRender(() => a(l, u));
};
class sS extends Hn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ze);
  }
  onPointerDown(l) {
    this.session = new Dp(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ep(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: _0(l),
      onStart: _0(u),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && xt.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = cl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ks = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function L0(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const ll = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (I.test(a)) a = parseFloat(a);
        else return a;
      const u = L0(a, l.target.x),
        r = L0(a, l.target.y);
      return `${u}% ${r}%`;
    },
  },
  uS = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const r = a,
        c = Ln.parse(a);
      if (c.length > 5) return r;
      const d = Ln.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * l.x,
        y = u.y.scale * l.y;
      (c[0 + h] /= m), (c[1 + h] /= y);
      const g = Ot(m, y, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= g),
        typeof c[3 + h] == "number" && (c[3 + h] /= g),
        d(c)
      );
    },
  };
class rS extends nt.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    E2(oS),
      d &&
        (u.group && u.group.add(d),
        r && r.register && c && r.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ks.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      h = r.projection;
    return (
      h &&
        ((h.isPresent = d),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              xt.postRender(() => {
                const m = h.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      vc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      u && u.group && u.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Op(a) {
  const [l, u] = qv(),
    r = nt.useContext(f1);
  return G.jsx(rS, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: nt.useContext(D1),
    isPresent: l,
    safeToRemove: u,
  });
}
const oS = {
  borderRadius: {
    ...ll,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ll,
  borderTopRightRadius: ll,
  borderBottomLeftRadius: ll,
  borderBottomRightRadius: ll,
  boxShadow: uS,
};
function cS(a, l, u) {
  const r = ne(a) ? a : pl(a);
  return r.start(Yc("", r, l, u)), r.animation;
}
function fS(a) {
  return a instanceof SVGElement && a.tagName !== "svg";
}
const hS = (a, l) => a.depth - l.depth;
class dS {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    cc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    fc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(hS),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function mS(a, l) {
  const u = Qe.now(),
    r = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (cn(r), a(d - l));
    };
  return xt.read(r, !0), () => cn(r);
}
const Rp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  pS = Rp.length,
  H0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  Y0 = (a) => typeof a == "number" || I.test(a);
function yS(a, l, u, r, c, d) {
  c
    ? ((a.opacity = Ot(0, u.opacity !== void 0 ? u.opacity : 1, gS(r))),
      (a.opacityExit = Ot(l.opacity !== void 0 ? l.opacity : 1, 0, vS(r))))
    : d &&
      (a.opacity = Ot(
        l.opacity !== void 0 ? l.opacity : 1,
        u.opacity !== void 0 ? u.opacity : 1,
        r
      ));
  for (let h = 0; h < pS; h++) {
    const m = `border${Rp[h]}Radius`;
    let y = q0(l, m),
      g = q0(u, m);
    if (y === void 0 && g === void 0) continue;
    y || (y = 0),
      g || (g = 0),
      y === 0 || g === 0 || Y0(y) === Y0(g)
        ? ((a[m] = Math.max(Ot(H0(y), H0(g), r), 0)),
          (Ke.test(g) || Ke.test(y)) && (a[m] += "%"))
        : (a[m] = g);
  }
  (l.rotate || u.rotate) && (a.rotate = Ot(l.rotate || 0, u.rotate || 0, r));
}
function q0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const gS = Vp(0, 0.5, P1),
  vS = Vp(0.5, 0.95, ze);
function Vp(a, l, u) {
  return (r) => (r < a ? 0 : r > l ? 1 : u(dl(a, l, r)));
}
function G0(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function Re(a, l) {
  G0(a.x, l.x), G0(a.y, l.y);
}
function X0(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function Z0(a, l, u, r, c) {
  return (
    (a -= l), (a = eu(a, 1 / u, r)), c !== void 0 && (a = eu(a, 1 / c, r)), a
  );
}
function SS(a, l = 0, u = 1, r = 0.5, c, d = a, h = a) {
  if (
    (Ke.test(l) &&
      ((l = parseFloat(l)), (l = Ot(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let m = Ot(d.min, d.max, r);
  a === d && (m -= l),
    (a.min = Z0(a.min, l, u, m, c)),
    (a.max = Z0(a.max, l, u, m, c));
}
function Q0(a, l, [u, r, c], d, h) {
  SS(a, l[u], l[r], l[c], l.scale, d, h);
}
const bS = ["x", "scaleX", "originX"],
  TS = ["y", "scaleY", "originY"];
function K0(a, l, u, r) {
  Q0(a.x, l, bS, u ? u.x : void 0, r ? r.x : void 0),
    Q0(a.y, l, TS, u ? u.y : void 0, r ? r.y : void 0);
}
function P0(a) {
  return a.translate === 0 && a.scale === 1;
}
function zp(a) {
  return P0(a.x) && P0(a.y);
}
function J0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function AS(a, l) {
  return J0(a.x, l.x) && J0(a.y, l.y);
}
function k0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function Up(a, l) {
  return k0(a.x, l.x) && k0(a.y, l.y);
}
function F0(a) {
  return ie(a.x) / ie(a.y);
}
function W0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class xS {
  constructor() {
    this.members = [];
  }
  add(l) {
    cc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (fc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let r;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, u) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        u && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: r } = l;
      u.onExitComplete && u.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function MS(a, l, u) {
  let r = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    h = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: g,
      rotate: v,
      rotateX: b,
      rotateY: E,
      skewX: R,
      skewY: j,
    } = u;
    g && (r = `perspective(${g}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      b && (r += `rotateX(${b}deg) `),
      E && (r += `rotateY(${E}deg) `),
      R && (r += `skewX(${R}deg) `),
      j && (r += `skewY(${j}deg) `);
  }
  const m = a.x.scale * l.x,
    y = a.y.scale * l.y;
  return (m !== 1 || y !== 1) && (r += `scale(${m}, ${y})`), r || "none";
}
const _o = ["", "X", "Y", "Z"],
  ES = { visibility: "hidden" },
  $0 = 1e3;
let DS = 0;
function Lo(a, l, u, r) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function Bp(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = Y1(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", xt, !(c || d));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && Bp(r);
}
function Np({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, m = l == null ? void 0 : l()) {
      (this.id = DS++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(RS),
            this.nodes.forEach(NS),
            this.nodes.forEach(jS),
            this.nodes.forEach(VS);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dS());
    }
    addEventListener(h, m) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new dc()),
        this.eventHandlers.get(h).add(m)
      );
    }
    notifyListeners(h, ...m) {
      const y = this.eventHandlers.get(h);
      y && y.notify(...m);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = fS(h)), (this.instance = h);
      const { layoutId: y, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (g || y) && (this.isLayoutDirty = !0),
        a)
      ) {
        let b;
        const E = () => (this.root.updateBlockedByResize = !1);
        a(h, () => {
          (this.root.updateBlockedByResize = !0),
            b && b(),
            (b = mS(E, 250)),
            Ks.hasAnimatedSinceResize &&
              ((Ks.hasAnimatedSinceResize = !1), this.nodes.forEach(t1));
        });
      }
      y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          v &&
          (y || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: b,
              hasLayoutChanged: E,
              hasRelativeLayoutChanged: R,
              layout: j,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const L =
                  this.options.transition || v.getDefaultTransition() || YS,
                { onLayoutAnimationStart: Y, onLayoutAnimationComplete: _ } =
                  v.getProps(),
                K = !this.targetLayout || !Up(this.targetLayout, j),
                X = !E && R;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                X ||
                (E && (K || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(b, X);
                const ot = { ...yc(L, "layout"), onPlay: Y, onComplete: _ };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((ot.delay = 0), (ot.type = !1)),
                  this.startAnimation(ot);
              } else
                E || t1(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = j;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        cn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(wS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Bp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(I0);
        return;
      }
      this.isUpdating || this.nodes.forEach(US),
        (this.isUpdating = !1),
        this.nodes.forEach(BS),
        this.nodes.forEach(CS),
        this.nodes.forEach(OS),
        this.clearAllSnapshots();
      const m = Qe.now();
      (Ft.delta = fn(0, 1e3 / 60, m - Ft.timestamp)),
        (Ft.timestamp = m),
        (Ft.isProcessing = !0),
        Ro.update.process(Ft),
        Ro.preRender.process(Ft),
        Ro.render.process(Ft),
        (Ft.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(zS), this.sharedNodes.forEach(_S);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        xt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      xt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ie(this.snapshot.measuredBox.x) &&
          !ie(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Nt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (m = !1),
        m)
      ) {
        const y = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: y,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !zp(this.projectionDelta),
        y = this.getTransformTemplate(),
        g = y ? y(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      h &&
        (m || la(this.latestValues) || v) &&
        (c(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return (
        h && (y = this.removeTransform(y)),
        qS(y),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var g;
      const { visualElement: h } = this.options;
      if (!h) return Nt();
      const m = h.measureViewportBox();
      if (
        !(
          ((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(GS)
        )
      ) {
        const { scroll: v } = this.root;
        v && (ti(m.x, v.offset.x), ti(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var y;
      const m = Nt();
      if ((Re(m, h), (y = this.scroll) != null && y.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: b, options: E } = v;
        v !== this.root &&
          b &&
          E.layoutScroll &&
          (b.wasRoot && Re(m, h), ti(m.x, b.offset.x), ti(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(h, m = !1) {
      const y = Nt();
      Re(y, h);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        !m &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          ei(y, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          la(v.latestValues) && ei(y, v.latestValues);
      }
      return la(this.latestValues) && ei(y, this.latestValues), y;
    }
    removeTransform(h) {
      const m = Nt();
      Re(m, h);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!g.instance || !la(g.latestValues)) continue;
        nc(g.latestValues) && g.updateSnapshot();
        const v = Nt(),
          b = g.measurePageBox();
        Re(v, b),
          K0(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v);
      }
      return la(this.latestValues) && K0(m, this.latestValues), m;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ft.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var E;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((E = this.parent) != null && E.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!(!this.layout || !(v || b))) {
        if (
          ((this.resolvedRelativeTargetAt = Ft.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const R = this.getClosestProjectingParent();
          R && R.layout && this.animationProgress !== 1
            ? ((this.relativeParent = R),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              hl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                R.layout.layoutBox
              ),
              Re(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Nt()), (this.targetWithTransforms = Nt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Z4(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Re(this.target, this.layout.layoutBox),
              xp(this.target, this.targetDelta))
            : Re(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const R = this.getClosestProjectingParent();
          R &&
          !!R.resumingFrom == !!this.resumingFrom &&
          !R.options.layoutScroll &&
          R.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = R),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              hl(this.relativeTargetOrigin, this.target, R.target),
              Re(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          nc(this.parent.latestValues) ||
          Ap(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var j;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          ((j = this.parent) != null && j.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === Ft.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      Re(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        E = this.treeScale.y;
      Q4(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Nt()));
      const { target: R } = h;
      if (!R) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (X0(this.prevProjectionDelta.x, this.projectionDelta.x),
          X0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fl(this.projectionDelta, this.layoutCorrected, R, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== E ||
          !W0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !W0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", R));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), h)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ia()),
        (this.projectionDelta = Ia()),
        (this.projectionDeltaWithTransform = Ia());
    }
    setAnimationOrigin(h, m = !1) {
      const y = this.snapshot,
        g = y ? y.latestValues : {},
        v = { ...this.latestValues },
        b = Ia();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const E = Nt(),
        R = y ? y.source : void 0,
        j = this.layout ? this.layout.source : void 0,
        L = R !== j,
        Y = this.getStack(),
        _ = !Y || Y.members.length <= 1,
        K = !!(L && !_ && this.options.crossfade === !0 && !this.path.some(HS));
      this.animationProgress = 0;
      let X;
      (this.mixTargetDelta = (ot) => {
        const H = ot / 1e3;
        e1(b.x, h.x, H),
          e1(b.y, h.y, H),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hl(E, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            LS(this.relativeTarget, this.relativeTargetOrigin, E, H),
            X && AS(this.relativeTarget, X) && (this.isProjectionDirty = !1),
            X || (X = Nt()),
            Re(X, this.relativeTarget)),
          L &&
            ((this.animationValues = v), yS(v, g, this.latestValues, H, K, _)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = H);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (cn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xt.update(() => {
          (Ks.hasAnimatedSinceResize = !0),
            (this.currentAnimation = cS(0, $0, {
              ...h,
              onUpdate: (m) => {
                this.mixTargetDelta(m), h.onUpdate && h.onUpdate(m);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta($0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: m,
        target: y,
        layout: g,
        latestValues: v,
      } = h;
      if (!(!m || !y || !g)) {
        if (
          this !== h &&
          this.layout &&
          g &&
          jp(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          y = this.target || Nt();
          const b = ie(this.layout.layoutBox.x);
          (y.x.min = h.target.x.min), (y.x.max = y.x.min + b);
          const E = ie(this.layout.layoutBox.y);
          (y.y.min = h.target.y.min), (y.y.max = y.y.min + E);
        }
        Re(m, y),
          ei(m, v),
          fl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(h, m) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new xS()),
        this.sharedNodes.get(h).add(m);
      const g = m.options.initialPromotionConfig;
      m.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: h } = this.options;
      return h
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: h } = this.options;
      return h ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: m, preserveFollowOpacity: y } = {}) {
      const g = this.getStack();
      g && g.promote(this, y),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let m = !1;
      const { latestValues: y } = h;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const g = {};
      y.z && Lo("z", h, g, this.animationValues);
      for (let v = 0; v < _o.length; v++)
        Lo(`rotate${_o[v]}`, h, g, this.animationValues),
          Lo(`skew${_o[v]}`, h, g, this.animationValues);
      h.render();
      for (const v in g)
        h.setStaticValue(v, g[v]),
          this.animationValues && (this.animationValues[v] = g[v]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ES;
      const m = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || ""),
          (m.transform = y ? y(this.latestValues, "") : "none"),
          m
        );
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const R = {};
        return (
          this.options.layoutId &&
            ((R.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (R.pointerEvents = Qs(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !la(this.latestValues) &&
            ((R.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          R
        );
      }
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = MS(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v
        )),
        y && (m.transform = y(v, m.transform));
      const { x: b, y: E } = this.projectionDelta;
      (m.transformOrigin = `${b.origin * 100}% ${E.origin * 100}% 0`),
        g.animationValues
          ? (m.opacity =
              g === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (m.opacity =
              g === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const R in gl) {
        if (v[R] === void 0) continue;
        const { correct: j, applyTo: L, isCSSVariable: Y } = gl[R],
          _ = m.transform === "none" ? v[R] : j(v[R], g);
        if (L) {
          const K = L.length;
          for (let X = 0; X < K; X++) m[L[X]] = _;
        } else
          Y ? (this.options.visualElement.renderState.vars[R] = _) : (m[R] = _);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            g === this
              ? Qs(h == null ? void 0 : h.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var m;
        return (m = h.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(I0),
        this.root.sharedNodes.clear();
    }
  };
}
function CS(a) {
  a.updateLayout();
}
function OS(a) {
  var u;
  const l = ((u = a.resumeFrom) == null ? void 0 : u.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: d } = a.options,
      h = l.source !== a.layout.source;
    d === "size"
      ? Ve((b) => {
          const E = h ? l.measuredBox[b] : l.layoutBox[b],
            R = ie(E);
          (E.min = r[b].min), (E.max = E.min + R);
        })
      : jp(d, l.layoutBox, r) &&
        Ve((b) => {
          const E = h ? l.measuredBox[b] : l.layoutBox[b],
            R = ie(r[b]);
          (E.max = E.min + R),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + R));
        });
    const m = Ia();
    fl(m, r, l.layoutBox);
    const y = Ia();
    h ? fl(y, a.applyTransform(c, !0), l.measuredBox) : fl(y, r, l.layoutBox);
    const g = !zp(m);
    let v = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: E, layout: R } = b;
        if (E && R) {
          const j = Nt();
          hl(j, l.layoutBox, E.layoutBox);
          const L = Nt();
          hl(L, r, R.layoutBox),
            Up(j, L) || (v = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = L),
              (a.relativeTargetOrigin = j),
              (a.relativeParent = b));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: y,
      layoutDelta: m,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function RS(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function VS(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function zS(a) {
  a.clearSnapshot();
}
function I0(a) {
  a.clearMeasurements();
}
function US(a) {
  a.isLayoutDirty = !1;
}
function BS(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function t1(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function NS(a) {
  a.resolveTargetDelta();
}
function jS(a) {
  a.calcProjection();
}
function wS(a) {
  a.resetSkewAndRotation();
}
function _S(a) {
  a.removeLeadSnapshot();
}
function e1(a, l, u) {
  (a.translate = Ot(l.translate, 0, u)),
    (a.scale = Ot(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function n1(a, l, u, r) {
  (a.min = Ot(l.min, u.min, r)), (a.max = Ot(l.max, u.max, r));
}
function LS(a, l, u, r) {
  n1(a.x, l.x, u.x, r), n1(a.y, l.y, u.y, r);
}
function HS(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const YS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  a1 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  i1 = a1("applewebkit/") && !a1("chrome/") ? Math.round : ze;
function l1(a) {
  (a.min = i1(a.min)), (a.max = i1(a.max));
}
function qS(a) {
  l1(a.x), l1(a.y);
}
function jp(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !X4(F0(l), F0(u), 0.2))
  );
}
function GS(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const XS = Np({
    attachResizeListener: (a, l) => Tl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ho = { current: void 0 },
  wp = Np({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Ho.current) {
        const a = new XS({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (Ho.current = a);
      }
      return Ho.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  ZS = {
    pan: { Feature: sS },
    drag: { Feature: lS, ProjectionNode: wp, MeasureLayout: Op },
  };
function s1(a, l, u) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = r[c];
  d && xt.postRender(() => d(l, El(l)));
}
class QS extends Hn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = t2(
        l,
        (u, r) => (s1(this.node, r, "Start"), (c) => s1(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class KS extends Hn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ml(
      Tl(this.node.current, "focus", () => this.onFocus()),
      Tl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function u1(a, l, u) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = r[c];
  d && xt.postRender(() => d(l, El(l)));
}
class PS extends Hn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = i2(
        l,
        (u, r) => (
          u1(this.node, r, "Start"),
          (c, { success: d }) => u1(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const lc = new WeakMap(),
  Yo = new WeakMap(),
  JS = (a) => {
    const l = lc.get(a.target);
    l && l(a);
  },
  kS = (a) => {
    a.forEach(JS);
  };
function FS({ root: a, ...l }) {
  const u = a || document;
  Yo.has(u) || Yo.set(u, {});
  const r = Yo.get(u),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(kS, { root: a, ...l })), r[c];
}
function WS(a, l, u) {
  const r = FS(l);
  return (
    lc.set(a, u),
    r.observe(a),
    () => {
      lc.delete(a), r.unobserve(a);
    }
  );
}
const $S = { some: 0, all: 1 };
class IS extends Hn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: r, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : $S[c],
      },
      m = (y) => {
        const { isIntersecting: g } = y;
        if (
          this.isInView === g ||
          ((this.isInView = g), d && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          E = g ? v : b;
        E && E(y);
      };
    return WS(this.node.current, h, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(t5(l, u)) && this.startObserver();
  }
  unmount() {}
}
function t5({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const e5 = {
    inView: { Feature: IS },
    tap: { Feature: PS },
    focus: { Feature: KS },
    hover: { Feature: QS },
  },
  n5 = { layout: { ProjectionNode: wp, MeasureLayout: Op } },
  sc = { current: null },
  _p = { current: !1 };
function a5() {
  if (((_p.current = !0), !!rc))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (sc.current = a.matches);
      a.addListener(l), l();
    } else sc.current = !1;
}
const i5 = [...rp, ee, Ln],
  l5 = (a) => i5.find(up(a)),
  s5 = new WeakMap();
function u5(a, l, u) {
  for (const r in l) {
    const c = l[r],
      d = u[r];
    if (ne(c)) a.addValue(r, c);
    else if (ne(d)) a.addValue(r, pl(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, pl(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in u) l[r] === void 0 && a.removeValue(r);
  return l;
}
const r1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class r5 {
  scrapeMotionValuesFromProps(l, u, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _c),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const R = Qe.now();
        this.renderScheduledAt < R &&
          ((this.renderScheduledAt = R), xt.render(this.render, !1, !0));
      });
    const { latestValues: y, renderState: g, onUpdate: v } = h;
    (this.onUpdate = v),
      (this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = u.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = iu(u)),
      (this.isVariantNode = M1(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: b, ...E } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const R in E) {
      const j = E[R];
      y[R] !== void 0 && ne(j) && j.set(y[R], !1);
    }
  }
  mount(l) {
    (this.current = l),
      s5.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, r) => this.bindToMotionValue(r, u)),
      _p.current || a5(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : sc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      cn(this.notifyUpdate),
      cn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = fa.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (m) => {
        (this.latestValues[l] = m),
          this.props.onUpdate && xt.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = u.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in ni) {
      const u = ni[l];
      if (!u) continue;
      const { isEnabled: r, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Nt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let r = 0; r < r1.length; r++) {
      const c = r1[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = u5(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const r = this.values.get(l);
    u !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        u !== void 0 &&
        ((r = pl(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, u) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      r != null &&
        (typeof r == "string" && (lp(r) || k1(r))
          ? (r = parseFloat(r))
          : !l5(r) && Ln.test(u) && (r = np(l, u)),
        this.setBaseTarget(l, ne(r) ? r.get() : r)),
      ne(r) ? r.get() : r
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var d;
    const { initial: u } = this.props;
    let r;
    if (typeof u == "string" || typeof u == "object") {
      const h = zc(
        this.props,
        u,
        (d = this.presenceContext) == null ? void 0 : d.custom
      );
      h && (r = h[l]);
    }
    if (u && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ne(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new dc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
}
class Lp extends r5 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = op);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: r }) {
    delete u[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ne(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function o5(a) {
  return window.getComputedStyle(a);
}
class c5 extends Lp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = j1);
  }
  readValueFromInstance(l, u) {
    if (fa.has(u)) return A3(l, u);
    {
      const r = o5(l),
        c = (xc(u) ? r.getPropertyValue(u) : r[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return Mp(l, u);
  }
  build(l, u, r) {
    Dc(l, u, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return Uc(l, u, r);
  }
}
class f5 extends Lp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Nt),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          N1(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (fa.has(u)) {
      const r = ep(u);
      return (r && r.default) || 0;
    }
    return (u = w1.has(u) ? u : Ac(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return L1(l, u, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      xt.postRender(this.updateDimensions);
  }
  build(l, u, r) {
    Rc(l, u, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(l, u, r, c) {
    _1(l, u, r, c);
  }
  mount(l) {
    (this.isSVGTag = Vc(l.tagName)), super.mount(l);
  }
}
const h5 = (a, l) =>
    Oc(a) ? new f5(l) : new c5(l, { allowProjection: a !== nt.Fragment }),
  d5 = k2({ ...j4, ...e5, ...ZS, ...n5 }, h5),
  qt = f2(d5),
  qo = (a) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: a } },
  });
function m5() {
  return G.jsx("div", {
    className: "border-b border-neutral-900 pb-4 lg:mb-34",
    children: G.jsxs("div", {
      className: "flex flex-wrap ",
      children: [
        G.jsx("div", {
          className: "w-full lg:w-1/2 lg:pl-8",
          children: G.jsxs("div", {
            className: "flex flex-col items-center lg:items-start",
            children: [
              G.jsx(qt.h1, {
                variants: qo(0),
                initial: "hidden",
                animate: "visible",
                className:
                  "pb-16 text-6xl font-thin tracking-tight lg: mt-15 lg:text-8xl",
                children: "Vivek Singh Rawat",
              }),
              G.jsx(qt.span, {
                variants: qo(0.5),
                initial: "hidden",
                animate: "visible",
                className:
                  "bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent",
                children: "MERN Stack Developer",
              }),
              G.jsx(qt.p, {
                variants: qo(1),
                initial: "hidden",
                animate: "visible",
                className: "my-2 max-w-xl py-6 font-light tracking-tight",
                children: jv,
              }),
            ],
          }),
        }),
        G.jsx("div", {
          className: "w-full lg:w-1/2 lg:p-6",
          children: G.jsx("div", {
            className: "flex justify-center",
            children: G.jsx(qt.img, {
              initial: { x: 100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 1, delay: 1.2 },
              src: Lv,
              alt: "",
            }),
          }),
        }),
      ],
    }),
  });
}
const p5 = "/assets/about-Cs4bjHyo.jpg";
function y5() {
  return G.jsxs("div", {
    className: "border-b border-neutral-900 pb-4",
    children: [
      G.jsxs("h1", {
        className: "my-20 text-center text-4xl",
        children: [
          "About",
          G.jsx("span", {
            className:
              "bg-gradient-to-r from-blue-400 via-slate-800 to-purple-600 bg-clip-text tracking-tight text-transparent ml-2",
            children: "Me",
          }),
        ],
      }),
      G.jsxs("div", {
        className: "flex flex-wrap",
        children: [
          G.jsx("div", {
            className: `w-full lg:w-1/2 lg:p-7\r
      `,
            children: G.jsx(qt.div, {
              whileInView: { opacity: 1, x: 0 },
              initial: { opacity: 0, x: -100 },
              transition: { duration: 0.5 },
              className: "flex items-center justify-center",
              children: G.jsx("img", {
                className: "rounded-2xl ",
                src: p5,
                alt: "",
              }),
            }),
          }),
          G.jsx("div", {
            className: "w-full lg:w-1/2",
            children: G.jsx(qt.div, {
              whileInView: { opacity: 1, x: 0 },
              initial: { x: 100, opacity: 0 },
              transition: { duration: 0.5 },
              className: "flex justify-center lg:justify-start",
              children: G.jsx("p", {
                className: "my-2 max-w-xl py-6",
                children: wv,
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function g5(a) {
  return ca({
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z",
        },
        child: [],
      },
    ],
  })(a);
}
function v5(a) {
  return ca({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
        },
        child: [],
      },
    ],
  })(a);
}
function S5(a) {
  return ca({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
        },
        child: [],
      },
    ],
  })(a);
}
const Xs = (a) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: a,
      ease: "linear",
      repeat: 1 / 0,
      repeatType: "reverse",
    },
  },
});
function b5() {
  return G.jsxs("div", {
    className: "border-b border-neutral-900 pb-20",
    children: [
      G.jsx(qt.h1, {
        whileInView: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: -100 },
        transition: { duration: 1.5 },
        className: "my-20 text-center text-4xl",
        children: "Tech Stack",
      }),
      G.jsxs(qt.div, {
        whileInView: { opacity: 1, x: 0 },
        initial: { x: -100, opacity: 0 },
        transition: { duration: 1.5 },
        className: "flex flex-wrap items-center justify-center gap-4",
        children: [
          G.jsx(qt.div, {
            variants: Xs(1),
            initial: "initail",
            animate: "animate",
            className: "rounded-2xl border-4 border-neutral-800 p-4 ",
            children: G.jsx(S5, { className: "text-7xl text-green-500" }),
          }),
          G.jsx(qt.div, {
            variants: Xs(1.5),
            initial: "initail",
            animate: "animate",
            className: "rounded-2xl border-4 border-neutral-800 p-4 ",
            children: G.jsx(v5, { className: "text-7xl text-slate-800" }),
          }),
          " ",
          G.jsx(qt.div, {
            variants: Xs(2),
            initial: "initail",
            animate: "animate",
            className: "rounded-2xl border-4 border-neutral-800 p-4 ",
            children: G.jsx(g5, { className: "text-7xl text-cyan-500" }),
          }),
          " ",
          G.jsx(qt.div, {
            variants: Xs(2.5),
            initial: "initail",
            animate: "animate",
            className: "rounded-2xl border-4 border-neutral-800 p-4 ",
            children: G.jsx(Ov, { className: "text-7xl text-yellow-500" }),
          }),
        ],
      }),
    ],
  });
}
function T5() {
  return G.jsxs("div", {
    className: "border-b border-neutral-900 pb-4",
    children: [
      G.jsx(qt.h1, {
        whileInView: { opacity: 1, y: 0 },
        initial: { y: -100, opacity: 0 },
        transition: { duration: 0.5 },
        className: "my-20 text-center text-4xl",
        children: "Projects",
      }),
      G.jsx("div", {
        children: _v.map((a, l) =>
          G.jsxs(
            "div",
            {
              className: "mb-8 flex flex-wrap lg:justify-center",
              children: [
                G.jsx(qt.div, {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { x: -100, opacity: 0 },
                  transition: { duration: 1 },
                  className: "w-full lg:w-1/4",
                  children: G.jsx("img", {
                    src: a.image,
                    alt: a.title,
                    width: 150,
                    height: 150,
                    className: "mb-6 rounded",
                  }),
                }),
                G.jsxs(qt.div, {
                  whileInView: { x: 0, opacity: 1 },
                  initial: { opacity: 0, x: 100 },
                  transition: { duration: 1 },
                  className: "w-full max-w-xl lg:w-3/4",
                  children: [
                    G.jsx("h6", {
                      className: "mb-2 font-semibold",
                      children: a.title,
                    }),
                    G.jsx("p", {
                      className: "mb-4 text-neutral-400",
                      children: a.description,
                    }),
                    a.technologies.map((u, r) =>
                      G.jsx(
                        "span",
                        {
                          className:
                            "mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900",
                          children: u,
                        },
                        r
                      )
                    ),
                  ],
                }),
              ],
            },
            l
          )
        ),
      }),
    ],
  });
}
function A5() {
  return G.jsxs("div", {
    className: "border-b border-neutral-900 pb-20",
    children: [
      G.jsxs(qt.h1, {
        whileInView: { opacity: 1, y: 0 },
        initial: { y: -100, opacity: 0 },
        transition: { duration: 0.5 },
        className: "my-10 text-center text-4xl ",
        children: ["Get in Touch", " "],
      }),
      G.jsxs("div", {
        className: "text-center tracking-tighter",
        children: [
          G.jsx(qt.p, {
            whileInView: { opacity: 1, x: 0 },
            initial: { x: -100, opacity: 0 },
            transition: { duration: 0.5 },
            className: "my-4",
            children: Oo.address,
          }),
          G.jsx(qt.p, {
            whileInView: { opacity: 1, x: 0 },
            initial: { x: 100, opacity: 0 },
            transition: { duration: 0.5 },
            className: "my-4 ",
            children: Oo.phoneNo,
          }),
          G.jsx(qt.a, {
            whileInView: { opacity: 1, x: 0 },
            initial: { x: -100, opacity: 0 },
            transition: { duration: 0.5 },
            href: "#",
            className: "border-b  ",
            children: Oo.email,
          }),
        ],
      }),
    ],
  });
}
function x5() {
  return G.jsxs("div", {
    className:
      "overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900",
    children: [
      G.jsx("div", {
        className: "fixed top-0 -z-10 h-full w-full ",
        children: G.jsx("div", {
          className:
            "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
        }),
      }),
      G.jsxs("div", {
        className: "container mx-auto px-8",
        children: [
          G.jsx(Vv, {}),
          G.jsx(m5, {}),
          G.jsx(y5, {}),
          G.jsx(b5, {}),
          G.jsx(T5, {}),
          G.jsx(A5, {}),
        ],
      }),
    ],
  });
}
gv.createRoot(document.getElementById("root")).render(
  G.jsx(nt.StrictMode, { children: G.jsx(x5, {}) })
);
