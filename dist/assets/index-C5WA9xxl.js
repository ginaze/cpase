(function () {
	let e = document.createElement(`link`).relList;
	if (e && e.supports && e.supports(`modulepreload`)) return;
	for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
	new MutationObserver((e) => {
		for (let t of e)
			if (t.type === `childList`)
				for (let e of t.addedNodes)
					e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
	}).observe(document, { childList: !0, subtree: !0 });
	function t(e) {
		let t = {};
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			(t.credentials =
				e.crossOrigin === `use-credentials`
					? `include`
					: e.crossOrigin === `anonymous`
						? `omit`
						: `same-origin`),
			t
		);
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})();
var e = Array.isArray,
	t = Array.prototype.indexOf,
	n = Array.prototype.includes,
	r = Array.from,
	i = Object.defineProperty,
	a = Object.getOwnPropertyDescriptor,
	o = Object.getOwnPropertyDescriptors,
	s = Object.prototype,
	c = Array.prototype,
	l = Object.getPrototypeOf,
	u = Object.isExtensible,
	d = () => {};
function f(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function p() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			((e = n), (t = r));
		}),
		resolve: e,
		reject: t
	};
}
var m = 1024,
	h = 2048,
	g = 4096,
	_ = 8192,
	v = 16384,
	y = 32768,
	b = 1 << 25,
	x = 65536,
	S = 1 << 19,
	ee = 1 << 20,
	te = 1 << 25,
	ne = 1 << 21,
	re = 1 << 22,
	ie = 1 << 23,
	ae = Symbol(`$state`),
	oe = Symbol(`component`),
	se = Symbol(``),
	ce = Symbol(`attributes`),
	le = Symbol(`class`),
	ue = Symbol(`style`),
	de = Symbol(`text`),
	fe = Symbol(`form reset`),
	pe = new (class extends Error {
		name = `StaleReactionError`;
		message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
	})(),
	me = !!globalThis.document?.contentType && globalThis.document.contentType.includes(`xml`),
	he = {},
	C = Symbol(`uninitialized`),
	ge = `http://www.w3.org/1999/xhtml`;
function _e() {
	console.warn(`https://svelte.dev/e/derived_inert`);
}
function ve(e) {
	console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
function ye() {
	console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
var w = !1;
function be(e) {
	w = e;
}
var T;
function E(e) {
	if (e === null) throw (ve(), he);
	return (T = e);
}
function xe() {
	return E(L(T));
}
function D(e) {
	if (w) {
		if (L(T) !== null) throw (ve(), he);
		T = e;
	}
}
function Se(e = 1) {
	if (w) {
		for (var t = e, n = T; t--;) n = L(n);
		T = n;
	}
}
function Ce(e = !0) {
	for (var t = 0, n = T; ;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === `]`) {
				if (t === 0) return n;
				--t;
			} else
				(r === `[` || r === `[!` || (r[0] === `[` && !isNaN(Number(r.slice(1))))) &&
					(t += 1);
		}
		var i = L(n);
		(e && n.remove(), (n = i));
	}
}
function we(e) {
	if (!e || e.nodeType !== 8) throw (ve(), he);
	return e.data;
}
function Te(e) {
	return e === this.v;
}
function Ee(e, t) {
	return e == e ? e !== t || (typeof e == `object` && !!e) || typeof e == `function` : t == t;
}
function De(e) {
	return !Ee(e, this.v);
}
function Oe(e) {
	throw Error(`https://svelte.dev/e/lifecycle_outside_component`);
}
function ke() {
	throw Error(`https://svelte.dev/e/async_derived_orphan`);
}
function Ae(e, t, n) {
	throw Error(`https://svelte.dev/e/each_key_duplicate`);
}
function je(e) {
	throw Error(`https://svelte.dev/e/effect_in_teardown`);
}
function Me() {
	throw Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
function Ne(e) {
	throw Error(`https://svelte.dev/e/effect_orphan`);
}
function Pe() {
	throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
function Fe() {
	throw Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
function Ie() {
	throw Error(`https://svelte.dev/e/state_prototype_fixed`);
}
function Le() {
	throw Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
function Re() {
	throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
var O = null;
function ze(e) {
	O = e;
}
function Be(e, t = !1, n) {
	O = { p: O, i: !1, c: null, e: null, s: e, x: null, r: K, l: null };
}
function Ve(e) {
	var t = O,
		n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) sn(r);
	}
	return (e !== void 0 && (t.x = e), (t.i = !0), (O = t.p), He(e));
}
function He(e = {}) {
	return (i(e, oe, { value: !0 }), e);
}
function Ue() {
	return !0;
}
var We = [];
function Ge() {
	var e = We;
	((We = []), f(e));
}
function k(e) {
	if (We.length === 0 && !_t) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
var qe = ~(h | g | m);
function A(e, t) {
	e.f = (e.f & qe) | t;
}
function Je(e) {
	e.f & 512 || e.deps === null ? A(e, m) : A(e, g);
}
function Ye(e, t) {
	(e.f & 2048 ? t.set(e, h) : e.f & 4096 && t.get(e) !== 2048 && t.set(e, g), A(e, m));
}
var Xe = !1;
function Ze() {
	Xe ||
		((Xe = !0),
		document.addEventListener(
			`reset`,
			(e) => {
				Promise.resolve().then(() => {
					if (!e.defaultPrevented) for (let t of e.target.elements) t[fe]?.();
				});
			},
			{ capture: !0 }
		));
}
function Qe(e) {
	var t = U,
		n = K;
	(G(null), q(null));
	try {
		return e();
	} finally {
		(G(t), q(n));
	}
}
function $e(e, t, n, r = n) {
	e.addEventListener(t, () => Qe(n));
	let i = e[fe];
	((e[fe] = i
		? () => {
				(i(), r(!0));
			}
		: () => r(!0)),
		Ze());
}
function et(e, t, n, r) {
	let i = Ue() ? it : ct;
	var a = e.filter((e) => !e.settled),
		o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K,
		c = tt(),
		l =
			a.length === 1
				? a[0].promise
				: a.length > 1
					? Promise.all(a.map((e) => e.promise))
					: null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				B(e, s);
			}
			nt();
		}
	}
	var d = rt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => ot(e)))
			.then(u)
			.catch((e) => B(e, s))
			.finally(d);
	}
	l
		? l.then(() => {
				s.f & 16384 ? d() : (c(), f(), nt());
			})
		: f();
}
function tt() {
	var e = K,
		t = U,
		n = O,
		r = j;
	return function (i = !0) {
		(q(e), G(t), ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply()));
	};
}
function nt(e = !0) {
	(q(null), G(null), ze(null), e && j?.deactivate());
}
function rt() {
	var e = K,
		t = e.b,
		n = j,
		r = !!t?.is_rendered();
	return (
		t?.update_pending_count(1, n),
		n.increment(r, e),
		() => {
			(t?.update_pending_count(-1, n), n.decrement(r, e));
		}
	);
}
function it(e) {
	var t = 2 | h;
	return (
		K !== null && (K.f |= S),
		{
			ctx: O,
			deps: null,
			effects: null,
			equals: Te,
			f: t,
			fn: e,
			reactions: null,
			rv: 0,
			v: C,
			wv: 0,
			parent: K,
			ac: null
		}
	);
}
var at = Symbol(`obsolete`);
function ot(e, t, n) {
	let r = K;
	r === null && ke();
	var i = void 0,
		a = Mt(C),
		o = !U,
		s = new Set();
	return (
		ln(() => {
			var t = K,
				n = p();
			i = n.promise;
			try {
				Promise.resolve(e())
					.then(n.resolve, (e) => {
						e !== pe && n.reject(e);
					})
					.finally(nt);
			} catch (e) {
				(n.reject(e), nt());
			}
			var c = j;
			if (o) {
				if (t.f & 32768) var l = rt();
				if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(at);
				else for (let e of s.values()) e.reject(at);
				(s.add(n), c.async_deriveds.set(t, n));
			}
			let u = (e, t = void 0) => {
				(l?.(),
					s.delete(n),
					t !== at &&
						(c.activate(),
						t ? ((a.f |= ie), It(a, t)) : (a.f & 8388608 && (a.f ^= ie), It(a, e)),
						c.deactivate()));
			};
			n.promise.then(u, (e) => u(null, e || `unknown`));
		}),
		an(() => {
			for (let e of s) e.reject(at);
		}),
		new Promise((e) => {
			function t(n) {
				function r() {
					n === i ? e(a) : t(i);
				}
				n.then(r, r);
			}
			t(i);
		})
	);
}
function st(e) {
	let t = it(e);
	return (En(t), t);
}
function ct(e) {
	let t = it(e);
	return ((t.equals = De), t);
}
function lt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function ut(e) {
	var t,
		n = K,
		r = e.parent;
	if (!wn && r !== null && e.v !== C && r.f & 24576) return (_e(), e.v);
	q(r);
	try {
		(lt(e), (t = Fn(e)));
	} finally {
		q(n);
	}
	return t;
}
function dt(e) {
	var t = ut(e);
	!e.equals(t) &&
	((e.wv = Mn()),
	(!j?.is_fork || e.deps === null) &&
		(j === null ? (e.v = t) : (j.capture(e, t, !0), ht?.capture(e, t, !0)), e.deps === null))
		? A(e, m)
		: wn || (M === null ? Je(e) : (rn() || j?.is_fork) && M.set(e, t));
}
function ft(e) {
	if (e.effects !== null)
		for (let t of e.effects)
			(t.teardown || t.ac) &&
				(t.teardown?.(),
				t.ac !== null &&
					Qe(() => {
						(t.ac.abort(pe), (t.ac = null));
					}),
				t.fn !== null && (t.teardown = d),
				Rn(t, 0),
				mn(t));
}
function pt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && zn(t);
}
var mt = null,
	j = null,
	ht = null,
	M = null,
	gt = null,
	_t = !1,
	vt = !1,
	yt = null,
	bt = null,
	xt = 0,
	St = 1,
	Ct = class e {
		id = St++;
		started = !1;
		linked = !0;
		prev = null;
		next = null;
		async_deriveds = new Map();
		current = new Map();
		previous = new Map();
		#e = new Set();
		#t = new Set();
		#n = 0;
		#r = new Map();
		#i = null;
		#a = [];
		#o = [];
		#s = new Map();
		#c = new Map();
		#l = new Set();
		is_fork = !1;
		#u = !1;
		constructor() {
			(mt === null ? (mt = this) : ((mt.next = this), (this.prev = mt)), (mt = this));
		}
		#d() {
			if (this.is_fork) return !0;
			for (let e of this.#r.keys()) if (!this.#f(e)) return !0;
			return !1;
		}
		#f(e) {
			for (var t = e; t !== null; t = t.parent) if (this.#c.has(t)) return !0;
			return !1;
		}
		skip_effect(e) {
			(this.#c.has(e) || this.#c.set(e, { d: [], m: [] }), this.#l.delete(e));
		}
		unskip_effect(e, t = (e) => this.schedule(e)) {
			var n = this.#c.get(e);
			if (n) {
				this.#c.delete(e);
				for (var r of n.d) (A(r, h), t(r));
				for (r of n.m) (A(r, g), t(r));
			}
			this.#l.add(e);
		}
		#p() {
			var e = [];
			for (let i of this.#a)
				if (!(i.f & 16384 || !(i.f & 6144))) {
					for (var t = i, n = !1; t.parent !== null;) {
						t = t.parent;
						var r = t.f;
						if (r & 96) {
							if (!(r & 1024)) {
								n = !0;
								break;
							}
							t.f ^= m;
						}
					}
					n || e.push(t);
				}
			return ((this.#a = []), e);
		}
		#m() {
			this.started = !0;
			for (let [e, t] of this.#s) (A(e, t), this.schedule(e));
			this.apply();
			for (var t = (yt = []), n = [], r = (bt = []); this.#a.length > 0;) {
				xt++ > 1e3 && (this.#b(), Tt());
				for (let e of this.#p())
					try {
						this.#h(e, t, n);
					} catch (t) {
						throw (kt(e), this.#d() || this.discard(), t);
					}
			}
			if (((j = null), r.length > 0)) {
				var i = e.ensure();
				for (let e of r) i.schedule(e);
			}
			if (((yt = null), (bt = null), this.#d())) {
				(this.#y(n), this.#y(t));
				for (let [e, t] of this.#c) Ot(e, t);
				r.length > 0 && j.#m();
				return;
			}
			let a = this.#g();
			if (a) (this.#y(n), this.#y(t), a.#v(this));
			else {
				this.#s.clear();
				for (let e of this.#e) e(this);
				(this.#e.clear(), (ht = this), Et(n), Et(t), (ht = null), this.#i?.resolve());
				var o = j;
				(this.#n === 0 && (this.#a.length === 0 || o !== null) && this.#b(),
					o !== null && (P.clear(), o.#m()));
			}
		}
		#h(e, t, n) {
			e.f ^= m;
			for (var r = e.first; r !== null;) {
				var i = r.f,
					a = !!(i & 96);
				if (!((a && i & 1024) || i & 8192 || this.#c.has(r)) && r.fn !== null) {
					a
						? (r.f ^= m)
						: i & 4
							? t.push(r)
							: Nn(r) && (i & 16 && this.add_dirty_reaction(r, g), zn(r));
					var o = r.first;
					if (o !== null) {
						r = o;
						continue;
					}
				}
				for (; r !== null;) {
					var s = r.next;
					if (s !== null) {
						r = s;
						break;
					}
					r = r.parent;
				}
			}
		}
		#g() {
			for (var e = this.prev; e !== null; e = e.prev) if (!e.is_fork && this.#_(e)) return e;
			return null;
		}
		#_(e) {
			for (let [t, [, n]] of this.current) if (!n && e.current.has(t)) return !0;
			return !1;
		}
		#v(e) {
			for (let [t, n] of e.current)
				(!this.previous.has(t) &&
					e.previous.has(t) &&
					this.previous.set(t, e.previous.get(t)),
					this.current.set(t, n));
			for (let [t, n] of e.async_deriveds) {
				let e = this.async_deriveds.get(t);
				e && n.promise.then(e.resolve).catch(e.reject);
			}
			(e.async_deriveds.clear(), this.transfer_reactions(e.#s));
			let t = (e) => {
				var n = e.reactions;
				if (n !== null && !(e.f & 2 && !(e.f & 6144)))
					for (let e of n) {
						var r = e.f;
						if (r & 2) t(e);
						else {
							var i = e;
							r & 4194320 &&
								!this.async_deriveds.has(i) &&
								(this.#s.delete(i), A(i, h), this.schedule(i));
						}
					}
			};
			for (let e of this.current.keys()) t(e);
			(this.oncommit(() => e.discard()), e.#b(), (j = this), this.#m());
		}
		#y(e) {
			for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#s);
		}
		capture(e, t, n = !1) {
			(e.v !== C && !this.previous.has(e) && this.previous.set(e, e.v),
				e.f & 8388608 || (this.current.set(e, [t, n]), M?.set(e, t)),
				this.is_fork || (e.v = t));
		}
		activate() {
			j = this;
		}
		deactivate() {
			((j = null), (M = null));
		}
		flush() {
			try {
				((vt = !0), (j = this), this.#m());
			} finally {
				((xt = 0),
					(gt = null),
					(yt = null),
					(bt = null),
					(vt = !1),
					(j = null),
					(M = null),
					P.clear());
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear();
			for (let e of this.async_deriveds.values()) e.reject(at);
			(this.#b(), this.#i?.resolve());
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		increment(e, t) {
			if (((this.#n += 1), e)) {
				let e = this.#r.get(t) ?? 0;
				this.#r.set(t, e + 1);
			}
		}
		decrement(e, t) {
			if ((--this.#n, e)) {
				let e = this.#r.get(t) ?? 0;
				e === 1 ? this.#r.delete(t) : this.#r.set(t, e - 1);
			}
			this.#u ||
				((this.#u = !0),
				k(() => {
					((this.#u = !1), this.linked && this.flush());
				}));
		}
		transfer_reactions(e) {
			for (let [t, n] of e) this.add_dirty_reaction(t, n);
			e.clear();
		}
		add_dirty_reaction(e, t) {
			(t === 2048 || this.#s.get(e) !== 2048) && this.#s.set(e, t);
		}
		oncommit(e) {
			this.#e.add(e);
		}
		ondiscard(e) {
			this.#t.add(e);
		}
		settled() {
			return (this.#i ??= p()).promise;
		}
		static ensure() {
			if (j === null) {
				let t = (j = new e());
				!vt &&
					!_t &&
					k(() => {
						t.started || t.flush();
					});
			}
			return j;
		}
		apply() {
			M = null;
		}
		schedule(e) {
			((gt = e),
				e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)
					? e.b.defer_effect(e)
					: this.#a.push(e));
		}
		#b() {
			if (this.linked) {
				var e = this.prev,
					t = this.next;
				(e === null || (e.next = t),
					t === null ? (mt = e) : (t.prev = e),
					(this.linked = !1));
			}
		}
	};
function wt(e) {
	var t = _t,
		n = ht;
	((ht = null), (_t = !0));
	try {
		var r;
		for (e && (wt(), (r = e())); ;) {
			if ((Ke(), j === null)) return r;
			j.flush();
		}
	} finally {
		((_t = t), (ht = n));
	}
}
function Tt() {
	try {
		Pe();
	} catch (e) {
		B(e, gt);
	}
}
var N = null;
function Et(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (
				!(r.f & 24576) &&
				Nn(r) &&
				((N = new Set()),
				zn(r),
				r.deps === null &&
					r.first === null &&
					r.nodes === null &&
					r.teardown === null &&
					r.ac === null &&
					_n(r),
				N?.size > 0)
			) {
				P.clear();
				for (let e of N) {
					if (e.f & 24576) continue;
					let t = [e],
						n = e.parent;
					for (; n !== null;) (N.has(n) && (N.delete(n), t.push(n)), (n = n.parent));
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || zn(n);
					}
				}
				N.clear();
			}
		}
		N = null;
	}
}
function Dt(e) {
	j.schedule(e);
}
function Ot(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		(e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), A(e, m));
		for (var n = e.first; n !== null;) (Ot(n, t), (n = n.next));
	}
}
function kt(e) {
	A(e, m);
	for (var t = e.first; t !== null;) (kt(t), (t = t.next));
}
var At = new Set(),
	P = new Map(),
	jt = !1;
function Mt(e, t) {
	return { f: 0, v: e, reactions: null, equals: Te, rv: 0, wv: 0 };
}
function F(e, t) {
	let n = Mt(e, t);
	return (En(n), n);
}
function Nt(e, t = !1, n = !0) {
	let r = Mt(e);
	return (t || (r.equals = De), r);
}
function I(e, t, n = !1) {
	return (
		U !== null &&
			(!W || U.f & 131072) &&
			Ue() &&
			U.f & 4325394 &&
			(J === null || !J.has(e)) &&
			Le(),
		It(e, n ? Bt(t) : t, bt)
	);
}
var Pt = null,
	Ft = 0;
function It(e, t, n = null) {
	if (!e.equals(t)) {
		wn ? P.set(e, t) : P.has(e) || P.set(e, e.v);
		var r = Ct.ensure();
		if ((r.capture(e, t), e.f & 2)) {
			let t = e;
			(e.f & 2048 && ut(t), M === null && Je(t));
		}
		((e.wv = Mn()),
			(Pt = null),
			(Ft = 0),
			zt(e, h, n),
			(Pt = null),
			Ue() && K !== null && K.f & 1024 && !(K.f & 96) && (Z === null ? Dn([e]) : Z.push(e)),
			!r.is_fork && At.size > 0 && !jt && Lt());
	}
	return t;
}
function Lt() {
	jt = !1;
	for (let e of At) {
		e.f & 1024 && A(e, g);
		let t;
		try {
			t = Nn(e);
		} catch {
			t = !0;
		}
		t && zn(e);
	}
	At.clear();
}
function Rt(e) {
	I(e, e.v + 1);
}
function zt(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = Ue(),
			a = r.length;
		if (((Ft += a), Ft > 1e5 && Pt === null && (Pt = new Set()), Pt !== null)) {
			if (Pt.has(e)) return;
			Pt.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o],
				c = s.f;
			if (i || s !== K) {
				var l = (c & h) === 0;
				if ((l && A(s, t), c & 131072)) At.add(s);
				else if (c & 2) {
					var u = s;
					(M?.delete(u), zt(u, g, n));
				} else if (l) {
					var d = s;
					(c & 16 && N !== null && N.add(d), n === null ? Dt(d) : n.push(d));
				}
			}
		}
	}
}
function Bt(t) {
	if (typeof t != `object` || !t || ae in t || oe in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = new Map(),
		i = e(t),
		o = F(0),
		u = null,
		d = An,
		f = (e) => {
			if (An === d) return e();
			var t = U,
				n = An;
			(G(null), jn(d));
			var r = e();
			return (G(t), jn(n), r);
		};
	return (
		i && r.set(`length`, F(t.length, u)),
		new Proxy(t, {
			defineProperty(e, t, n) {
				(`value` in n &&
					n.configurable !== !1 &&
					n.enumerable !== !1 &&
					n.writable !== !1) ||
					Fe();
				var i = r.get(t);
				return (
					i === void 0
						? f(() => {
								var e = F(n.value, u);
								return (r.set(t, e), e);
							})
						: I(i, n.value, !0),
					!0
				);
			},
			deleteProperty(e, t) {
				var n = r.get(t);
				if (n === void 0) {
					if (t in e) {
						let e = f(() => F(C, u));
						(r.set(t, e), Rt(o));
					}
				} else (I(n, C), Rt(o));
				return !0;
			},
			get(e, n, i) {
				if (n === ae) return t;
				var o = r.get(n),
					s = n in e;
				if (
					(o === void 0 &&
						(!s || a(e, n)?.writable) &&
						((o = f(() => F(Bt(s ? e[n] : C), u))), r.set(n, o)),
					o !== void 0)
				) {
					var c = Q(o);
					return c === C ? void 0 : c;
				}
				return Reflect.get(e, n, i);
			},
			getOwnPropertyDescriptor(e, t) {
				this.has?.(e, t);
				var n = Reflect.getOwnPropertyDescriptor(e, t),
					i = r.get(t);
				if (i !== void 0) {
					var a = Q(i);
					if (a === C) return;
					if (n && `value` in n) n.value = a;
					else return { enumerable: !0, configurable: !0, value: a, writable: !0 };
				}
				return n;
			},
			has(e, t) {
				if (t === ae) return !0;
				var n = r.get(t),
					i = (n !== void 0 && n.v !== C) || Reflect.has(e, t);
				return (n !== void 0 ||
					((K !== null || U !== null) && (!i || a(e, t)?.writable))) &&
					(n === void 0 && ((n = f(() => F(i ? Bt(e[t]) : C, u))), r.set(t, n)),
					Q(n) === C)
					? !1
					: i;
			},
			set(e, t, n, s) {
				var c = r.get(t),
					l = t in e;
				if (i && t === `length`)
					for (var d = n; d < c.v; d += 1) {
						var p = r.get(d + ``);
						p === void 0
							? d in e && ((p = f(() => F(C, u))), r.set(d + ``, p))
							: I(p, C);
					}
				if (c === void 0)
					(!l || a(e, t)?.writable) &&
						((c = f(() => F(void 0, u))), I(c, Bt(n)), r.set(t, c));
				else {
					l = c.v !== C;
					var m = f(() => Bt(n));
					I(c, m);
				}
				var h = Reflect.getOwnPropertyDescriptor(e, t);
				if ((h?.set && h.set.call(s, n), !l)) {
					if (i && typeof t == `string`) {
						var g = r.get(`length`),
							_ = Number(t);
						Number.isInteger(_) && _ >= g.v && I(g, _ + 1);
					}
					Rt(o);
				}
				return !0;
			},
			ownKeys(e) {
				Q(o);
				var t = Reflect.ownKeys(e).filter((e) => {
					var t = r.get(e);
					return t === void 0 || t.v !== C;
				});
				for (var [n, i] of r) i.v !== C && !(n in e) && t.push(n);
				return t;
			},
			setPrototypeOf() {
				Ie();
			}
		})
	);
}
var Vt, Ht, Ut, Wt;
function Gt() {
	if (Vt === void 0) {
		((Vt = window), (Ht = /Firefox/.test(navigator.userAgent)));
		var e = Element.prototype,
			t = Node.prototype,
			n = Text.prototype;
		((Ut = a(t, `firstChild`).get),
			(Wt = a(t, `nextSibling`).get),
			u(e) && ((e[le] = void 0), (e[ce] = null), (e[ue] = void 0), (e.__e = void 0)),
			u(n) && (n[de] = void 0));
	}
}
function Kt(e = ``) {
	return document.createTextNode(e);
}
function qt(e) {
	return Ut.call(e);
}
function L(e) {
	return Wt.call(e);
}
function R(e, t) {
	if (!w) return qt(e);
	var n = qt(T);
	if (n === null) n = T.appendChild(Kt());
	else if (t && n.nodeType !== 3) {
		var r = Kt();
		return (n?.before(r), E(r), r);
	}
	return (t && Qt(n), E(n), n);
}
function Jt(e, t = !1) {
	if (!w) return qt(e);
	var n = R(e, t);
	return (D(e), n);
}
function z(e, t = 1, n = !1) {
	let r = w ? T : e;
	for (var i; t--;) ((i = r), (r = L(r)));
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Kt();
			return (r === null ? i?.after(a) : r.before(a), E(a), a);
		}
		Qt(r);
	}
	return (E(r), r);
}
function Yt(e) {
	e.textContent = ``;
}
function Xt() {
	return !1;
}
function Zt(e, t, n) {
	return t == null || t === `http://www.w3.org/1999/xhtml`
		? n
			? document.createElement(e, { is: n })
			: document.createElement(e)
		: n
			? document.createElementNS(t, e, { is: n })
			: document.createElementNS(t, e);
}
function Qt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;)
		(t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
function $t(e) {
	var t = K;
	if (t === null) return ((U.f |= ie), e);
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	B(e, t);
}
function B(e, t) {
	if (e === he) throw e;
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128 && !(t.f & 33570816)) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
function en(e) {
	(K === null && (U === null && Ne(e), Me()), wn && je(e));
}
function tn(e, t) {
	var n = t.last;
	n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function nn(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= _);
	var r = {
		ctx: O,
		deps: null,
		nodes: null,
		f: e | h | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	j?.register_created_effect(r);
	var i = r;
	if (e & 4) yt === null ? Ct.ensure().schedule(r) : yt.push(r);
	else if (t !== null) {
		try {
			zn(r);
		} catch (e) {
			throw (H(r), e);
		}
		i.deps === null &&
			i.teardown === null &&
			i.nodes === null &&
			i.first === i.last &&
			!(i.f & 524288) &&
			((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= x));
	}
	if (
		i !== null &&
		((i.parent = n), n !== null && tn(i, n), U !== null && U.f & 2 && !(e & 64))
	) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function rn() {
	return U !== null && !W;
}
function an(e) {
	let t = nn(8, null);
	return (A(t, m), (t.teardown = e), t);
}
function on(e) {
	en(`$effect`);
	var t = K.f;
	if (!U && t & 32 && O !== null && !O.i) {
		var n = O;
		(n.e ??= []).push(e);
	} else return sn(e);
}
function sn(e) {
	return nn(4 | ee, e);
}
function cn(e) {
	Ct.ensure();
	let t = nn(64 | S, e);
	return (e = {}) =>
		new Promise((n) => {
			e.outro
				? vn(t, () => {
						(H(t), n(void 0));
					})
				: (H(t), n(void 0));
		});
}
function ln(e) {
	return nn(re | S, e);
}
function un(e, t = 0) {
	return nn(8 | t, e);
}
function dn(e, t = [], n = [], r = []) {
	et(r, t, n, (t) => {
		nn(8, () => {
			e(...t.map(Q));
		});
	});
}
function fn(e, t = 0) {
	return nn(16 | t, e);
}
function V(e) {
	return nn(32 | S, e);
}
function pn(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = wn,
			r = U;
		(Tn(!0), G(null));
		try {
			t.call(null);
		} catch (t) {
			B(t, e.parent);
		} finally {
			(Tn(n), G(r));
		}
	}
}
function mn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null &&
			Qe(() => {
				e.abort(pe);
			});
		var r = n.next;
		(n.f & 64 ? (n.parent = null) : H(n, t), (n = r));
	}
}
function hn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		(t.f & 32 || H(t), (t = n));
	}
}
function H(e, t = !0) {
	var n = !1;
	((t || e.f & 262144) &&
		e.nodes !== null &&
		e.nodes.end !== null &&
		(gn(e.nodes.start, e.nodes.end), (n = !0)),
		(e.f |= b),
		mn(e, t && !n),
		Rn(e, 0));
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	(pn(e), (e.f ^= b), (e.f |= v));
	var i = e.parent;
	(i !== null && i.first !== null && _n(e),
		(e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function gn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : L(e);
		(e.remove(), (e = n));
	}
}
function _n(e) {
	var t = e.parent,
		n = e.prev,
		r = e.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function vn(e, t, n = !0) {
	var r = [];
	((e.f |= 256), yn(e, r, !0));
	var i = () => {
			(n && H(e), t && t());
		},
		a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function yn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= _;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || (!!(i.f & 32) && !!(e.f & 16));
				yn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function bn(e) {
	((e.f &= -257), xn(e, !0));
}
function xn(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		((e.f ^= _), e.f & 1024 || (A(e, h), Ct.ensure().schedule(e)));
		for (var n = e.first; n !== null;) {
			var r = n.next,
				i = !!(n.f & 65536) || !!(n.f & 32);
			(xn(n, i ? t : !1), (n = r));
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Sn(e, t) {
	if (e.nodes)
		for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
			var i = n === r ? null : L(n);
			(t.append(n), (n = i));
		}
}
var Cn = null,
	wn = !1;
function Tn(e) {
	wn = e;
}
var U = null,
	W = !1;
function G(e) {
	U = e;
}
var K = null;
function q(e) {
	K = e;
}
var J = null;
function En(e) {
	U !== null && (U.f & 2097152 || U.f & 2) && (J ??= new Set()).add(e);
}
var Y = null,
	X = 0,
	Z = null;
function Dn(e) {
	Z = e;
}
var On = 1,
	kn = 0,
	An = kn;
function jn(e) {
	An = e;
}
function Mn() {
	return ++On;
}
function Nn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if ((Nn(a) && dt(a), a.wv > e.wv)) return !0;
		}
		t & 512 && M === null && A(e, m);
	}
	return !1;
}
function Pn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(J !== null && J.has(e)))
		for (var i = 0; i < r.length; i++) {
			var a = r[i];
			a.f & 2 ? Pn(a, t, !1) : t === a && (n ? A(a, h) : a.f & 1024 && A(a, g), Dt(a));
		}
}
function Fn(e) {
	var t = Y,
		n = X,
		r = Z,
		i = U,
		a = J,
		o = O,
		s = W,
		c = An,
		l = e.f;
	((Y = null),
		(X = 0),
		(Z = null),
		(U = l & 96 ? null : e),
		(J = null),
		ze(e.ctx),
		(W = !1),
		(An = ++kn),
		e.ac !== null &&
			(Qe(() => {
				e.ac.abort(pe);
			}),
			(e.ac = null)));
	try {
		e.f |= ne;
		var u = e.fn,
			d = u();
		e.f |= y;
		var f = In(e);
		if (Ue() && Z !== null && !W && f !== null && !(e.f & 6146))
			for (var p = 0; p < Z.length; p++) Pn(Z[p], e);
		if (i !== null && i !== e) {
			if ((kn++, i.deps !== null)) for (let e = 0; e < n; e += 1) i.deps[e].rv = kn;
			if (t !== null) for (let e of t) e.rv = kn;
			Z !== null && (r === null ? (r = Z) : r.push(...Z));
		}
		return (e.f & 8388608 && (e.f ^= ie), d);
	} catch (t) {
		return (In(e), $t(t));
	} finally {
		((e.f ^= ne), (Y = t), (X = n), (Z = r), (U = i), (J = a), ze(o), (W = s), (An = c));
	}
}
function In(e) {
	var t = e.deps,
		n = j?.is_fork;
	if (Y !== null) {
		var r;
		if ((n || Rn(e, X), t !== null && X > 0))
			for (t.length = X + Y.length, r = 0; r < Y.length; r++) t[X + r] = Y[r];
		else e.deps = t = Y;
		if (rn() && e.f & 512) for (r = X; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && X < t.length && (Rn(e, X), (t.length = X));
	return t;
}
function Ln(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? (i = r.reactions = null) : ((i[a] = i[o]), i.pop());
		}
	}
	if (i === null && r.f & 2 && (Y === null || !n.call(Y, r))) {
		var s = r;
		(s.f & 512 && (s.f ^= 512),
			s.v !== C && Je(s),
			s.ac !== null &&
				Qe(() => {
					(s.ac.abort(pe), (s.ac = null), A(s, h));
				}),
			ft(s),
			Rn(s, 0));
	}
}
function Rn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ln(e, n[r]);
}
function zn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		A(e, m);
		var n = K;
		K = e;
		try {
			(t & 16777232 ? hn(e) : mn(e), pn(e));
			var r = Fn(e);
			((e.teardown = typeof r == `function` ? r : null), (e.wv = On));
		} finally {
			K = n;
		}
	}
}
async function Bn() {
	(await Promise.resolve(), wt());
}
function Q(e) {
	var t = !!(e.f & 2);
	if (
		(Cn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (J === null || !J.has(e)))
	) {
		var r = U.deps;
		if (U.f & 2097152)
			e.rv < kn &&
				((e.rv = kn),
				Y === null && r !== null && r[X] === e ? X++ : Y === null ? (Y = [e]) : Y.push(e));
		else {
			((U.deps ??= []), n.call(U.deps, e) || U.deps.push(e));
			var i = e.reactions;
			i === null ? (e.reactions = [U]) : n.call(i, U) || i.push(U);
		}
	}
	if (wn && P.has(e)) return P.get(e);
	if (t) {
		var a = e;
		if (wn) {
			var o = a.v;
			return (
				((!(a.f & 1024) && a.reactions !== null) || Hn(a)) && (o = ut(a)), P.set(a, o), o
			);
		}
		var s = !(a.f & 512) && !W && U !== null && !!(U.f & 512),
			c = (a.f & y) === 0;
		(Nn(a) && (s && (a.f |= 512), dt(a)), s && !c && (pt(a), Vn(a)));
	}
	if (M?.has(e)) return M.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vn(e) {
	if (((e.f |= 512), e.deps !== null))
		for (let r of e.deps) {
			var t = r.reactions;
			(t === null ? (r.reactions = [e]) : n.call(t, e) || t.push(e),
				r.f & 2 && !(r.f & 512) && (pt(r), Vn(r)));
		}
}
function Hn(e) {
	if (e.v === C) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (P.has(t) || (t.f & 2 && Hn(t))) return !0;
	return !1;
}
function Un(e) {
	var t = W;
	try {
		return ((W = !0), e());
	} finally {
		W = t;
	}
}
[
	...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(
		`.`
	)
];
var Wn = [`touchstart`, `touchmove`];
function Gn(e) {
	return Wn.includes(e);
}
var Kn = Symbol(`events`),
	qn = new Set(),
	Jn = new Set();
function Yn(e, t, n, r = {}) {
	function i(e) {
		if ((r.capture || tr.call(t, e), !e.cancelBubble)) return Qe(() => n?.call(this, e));
	}
	return (
		e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel`
			? ((i.__removed = !1),
				k(() => {
					i.__removed || t.addEventListener(e, i, r);
				}))
			: t.addEventListener(e, i, r),
		i
	);
}
function Xn(e, t, n, r, i) {
	var a = { capture: r, passive: i },
		o = Yn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
		an(() => {
			((o.__removed = !0), t.removeEventListener(e, o, a));
		});
}
function Zn(e, t, n) {
	(t[Kn] ??= {})[e] = n;
}
function Qn(e) {
	for (var t = 0; t < e.length; t++) qn.add(e[t]);
	for (var n of Jn) n(e);
}
var $n = null,
	er = !1;
function tr(e) {
	var t = this,
		n = t.ownerDocument,
		r = e.type,
		a = e.composedPath?.() || [],
		o = a[0] || e.target;
	(($n = e),
		er ||
			((er = !0),
			setTimeout(() => {
				((er = !1), ($n = null));
			})));
	var s = 0,
		c = $n === e && e[Kn];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Kn] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (((o = a[s] || e.target), o !== t)) {
		i(e, `currentTarget`, {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = U,
			f = K;
		(G(null), q(null));
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[Kn]?.[r];
					h == null || (o.disabled && e.target !== o) || h.call(o, e);
				} catch (e) {
					p ? m.push(e) : (p = e);
				}
				if (e.cancelBubble) break;
				(s++, (o = s < a.length ? a[s] : null));
			}
			if (p) {
				for (let e of m)
					queueMicrotask(() => {
						throw e;
					});
				throw p;
			}
		} finally {
			((e[Kn] = t), delete e.currentTarget, G(d), q(f));
		}
	}
}
var nr =
	globalThis?.window?.trustedTypes &&
	globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, { createHTML: (e) => e });
function rr(e) {
	return nr?.createHTML(e) ?? e;
}
function ir(e) {
	var t = Zt(`template`);
	return ((t.innerHTML = rr(e.replaceAll(`<!>`, `<!---->`))), t.content);
}
function ar(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function or(e, t) {
	var n = !!(t & 1),
		r = !!(t & 2),
		i,
		a = !e.startsWith(`<!>`);
	return () => {
		if (w) return (ar(T, null), T);
		i === void 0 && ((i = ir(a ? e : `<!>` + e)), n || (i = qt(i)));
		var t = r || Ht ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = qt(t),
				s = t.lastChild;
			ar(o, s);
		} else ar(t, t);
		return t;
	};
}
function sr(e, t) {
	if (w) {
		var n = K;
		((n.f & 32768 && n.nodes.end !== null) || (n.nodes.end = T), xe());
	} else e !== null && e.before(t);
}
function cr(e) {
	let t = 0,
		n = Mt(0),
		r;
	return () => {
		rn() &&
			(Q(n),
			un(
				() => (
					t === 0 && (r = Un(() => e(() => Rt(n)))),
					(t += 1),
					() => {
						k(() => {
							(--t, t === 0 && (r?.(), (r = void 0), Rt(n)));
						});
					}
				)
			));
	};
}
var lr = x | S;
function ur(e, t, n, r) {
	new dr(e, t, n, r);
}
var dr = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? T : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = new Map();
	#p = null;
	#m = cr(
		() => (
			(this.#p = Mt(this.#l)),
			() => {
				this.#p = null;
			}
		)
	);
	constructor(e, t, n, r) {
		((this.#e = e),
			(this.#n = t),
			(this.#r = (e) => {
				var t = K;
				((t.b = this), (t.f |= 128), n(e));
			}),
			(this.parent = K.b),
			(this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e)),
			(this.#i = fn(() => {
				if (w) {
					let e = we(this.#t);
					xe();
					let t = e === `[!`;
					if (e.startsWith(`[?`)) {
						let t = JSON.parse(e.slice(2));
						this.#g(t);
					} else t ? this.#y() : this.#h();
				} else this.#b();
			}, lr)),
			w && (this.#e = T));
	}
	#h() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#g(e) {
		let t = this.#n.failed,
			{ reset: n, invoke_onerror: r } = this.#_(e);
		(k(r),
			t &&
				(this.#s = V(() => {
					t(
						this.#e,
						() => e,
						() => n
					);
				})));
	}
	#_(e) {
		var t = !1,
			n = !1;
		let r = () => {
			this.#v() ||
				(t
					? ye()
					: ((t = !0),
						n && Re(),
						this.#s !== null &&
							vn(this.#s, () => {
								this.#s = null;
							}),
						this.#S(() => {
							this.#b();
						})));
		};
		return {
			reset: r,
			invoke_onerror: () => {
				if (!this.#v())
					try {
						((n = !0), this.#n.onerror?.(e, r), (n = !1));
					} catch (e) {
						B(e, this.#i && this.#i.parent);
					}
			}
		};
	}
	#v() {
		return (this.#i.f & (v | b)) !== 0;
	}
	#y() {
		let e = this.#n.pending;
		e &&
			((this.is_pending = !0),
			(this.#o = V(() => e(this.#e))),
			k(() => {
				if (!this.#v()) {
					var e = (this.#c = document.createDocumentFragment()),
						t = Kt(),
						n = !1;
					(e.append(t),
						(this.#a = this.#S(() => {
							try {
								return V(() => this.#r(t));
							} catch (e) {
								try {
									(this.error(e), (n = !0));
								} catch (e) {
									B(e, this.#i.parent);
								}
								return null;
							}
						})),
						this.#a === null
							? ((this.#c = null), n && this.#x(j))
							: this.#u === 0 &&
								(this.#e.before(e),
								(this.#c = null),
								vn(this.#o, () => {
									this.#o = null;
								}),
								this.#x(j)));
				}
			}));
	}
	#b() {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				(this.#u = 0),
				(this.#l = 0),
				(this.#a = V(() => {
					this.#r(this.#e);
				})),
				this.#u > 0)
			) {
				var e = (this.#c = document.createDocumentFragment());
				Sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#x(j);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		((this.is_pending = !1), e.transfer_reactions(this.#f));
	}
	defer_effect(e) {
		Ye(e, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K,
			n = U,
			r = O;
		(q(this.#i), G(this.#i), ze(this.#i.ctx));
		try {
			return (Ct.ensure(), e());
		} finally {
			(q(t), G(n), ze(r));
		}
	}
	#C(e, t) {
		this.has_pending_snippet()
			? ((this.#u += e),
				this.#u === 0 &&
					(this.#x(t),
					this.#o &&
						vn(this.#o, () => {
							this.#o = null;
						}),
					(this.#c &&= (this.#e.before(this.#c), null))))
			: this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		(this.#C(e, t),
			(this.#l += e),
			!(!this.#p || this.#d) &&
				((this.#d = !0),
				k(() => {
					((this.#d = !1), this.#p && It(this.#p, this.#l));
				})));
	}
	get_effect_pending() {
		return (this.#m(), Q(this.#p));
	}
	error(e) {
		if (e === he || (!this.#n.onerror && !this.#n.failed)) throw e;
		j?.is_fork
			? (this.#a && j.skip_effect(this.#a),
				this.#o && j.skip_effect(this.#o),
				this.#s && j.skip_effect(this.#s),
				j.oncommit(() => {
					this.#v() || this.#w(e);
				}))
			: this.#w(e);
	}
	#w(e) {
		((this.#a &&= (H(this.#a), null)),
			(this.#o &&= (H(this.#o), null)),
			(this.#s &&= (H(this.#s), null)),
			w && (E(this.#t), Se(), E(Ce())));
		let t = this.#n.failed,
			n = (e) => {
				if (this.#v()) return;
				let { reset: n, invoke_onerror: r } = this.#_(e);
				(r(),
					t &&
						!this.#v() &&
						(this.#s = this.#S(() => {
							try {
								return V(() => {
									var r = K;
									((r.b = this),
										(r.f |= 128),
										t(
											this.#e,
											() => e,
											() => n
										));
								});
							} catch (e) {
								return (B(e, this.#i.parent), null);
							}
						})));
			};
		k(() => {
			if (!this.#v()) {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					B(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == `object` && t && typeof t.then == `function`
					? t.then(n, (e) => B(e, this.#i && this.#i.parent))
					: n(t);
			}
		});
	}
};
function fr(e, t) {
	var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
	n !== (e[de] ??= e.nodeValue) && ((e[de] = n), (e.nodeValue = `${n}`));
}
function pr(e, t) {
	return hr(e, t);
}
var mr = new Map();
function hr(
	e,
	{ target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }
) {
	Gt();
	var l = void 0,
		u = cn(() => {
			var s = n ?? t.appendChild(Kt());
			ur(
				s,
				{ pending: () => {} },
				(t) => {
					Be({});
					var n = O;
					if (
						(o && (n.c = o),
						a && (i.$$events = a),
						w && ar(t, null),
						(l = e(t, i) || He()),
						w && ((K.nodes.end = T), T === null || T.nodeType !== 8 || T.data !== `]`))
					)
						throw (ve(), he);
					Ve();
				},
				c
			);
			var u = new Set(),
				d = (e) => {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						if (!u.has(r)) {
							u.add(r);
							var i = Gn(r);
							for (let e of [t, document]) {
								var a = mr.get(e);
								a === void 0 && ((a = new Map()), mr.set(e, a));
								var o = a.get(r);
								o === void 0
									? (e.addEventListener(r, tr, { passive: i }), a.set(r, 1))
									: a.set(r, o + 1);
							}
						}
					}
				};
			return (
				d(r(qn)),
				Jn.add(d),
				() => {
					for (var e of u)
						for (let n of [t, document]) {
							var r = mr.get(n),
								i = r.get(e);
							--i == 0
								? (n.removeEventListener(e, tr),
									r.delete(e),
									r.size === 0 && mr.delete(n))
								: r.set(e, i);
						}
					(Jn.delete(d), s !== n && s.parentNode?.removeChild(s));
				}
			);
		});
	return (gr.set(l, u), l);
}
var gr = new WeakMap();
function _r(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		vn(
			n,
			() => {
				if (o) {
					if ((o.pending.delete(n), o.done.add(n), o.pending.size === 0)) {
						var t = e.outrogroups;
						(vr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null));
					}
				} else --s;
			},
			!1
		);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n,
				d = u.parentNode;
			(Yt(d), d.append(u), e.items.clear());
		}
		vr(e, t, !l);
	} else ((o = { pending: new Set(t), done: new Set() }), (e.outrogroups ??= new Set()).add(o));
}
function vr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? ((a.f |= te), Sn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var yr;
function br(t, n, i, a, o, s = null) {
	var c = t,
		l = new Map();
	if (n & 4) {
		var u = t;
		c = w ? E(qt(u)) : u.appendChild(Kt());
	}
	w && xe();
	var d = null,
		f = ct(() => {
			var t = i();
			return e(t) ? t : t == null ? [] : r(t);
		}),
		p = new Map(),
		m = !0;
	function h(e) {
		if (!(_.effect.f & 16384)) {
			_.pending.delete(e);
			var t = Q(f);
			((_.fallback = d),
				Sr(_, t, c, n, a),
				d !== null &&
					(t.length === 0
						? d.f & 33554432
							? ((d.f ^= te), wr(d, null, c))
							: bn(d)
						: vn(d, () => {
								d = null;
							})));
		}
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: fn(() => {
			var e = Q(f),
				t = e.length;
			let r = !1;
			w && (we(c) === `[!`) != (t === 0) && ((c = Ce()), E(c), be(!1), (r = !0));
			for (var u = new Set(), _ = j, v = Xt(), y = 0; y < t; y += 1) {
				w && T.nodeType === 8 && T.data === `]` && ((c = T), (r = !0), be(!1));
				var b = e[y],
					x = a(b, y),
					S = m ? null : l.get(x);
				(S
					? (S.v && It(S.v, b), S.i && It(S.i, y), v && _.unskip_effect(S.e))
					: ((S = Cr(l, m ? c : (yr ??= Kt()), b, x, y, o, n, i)),
						m || (S.e.f |= te),
						l.set(x, S)),
					u.add(x));
			}
			if (
				(t === 0 &&
					s &&
					!d &&
					(m ? (d = V(() => s(c))) : ((d = V(() => s((yr ??= Kt())))), (d.f |= te))),
				t > u.size && Ae(``, ``, ``),
				w && t > 0 && E(Ce()),
				!m)
			) {
				if ((p.set(_, u), v)) {
					for (let [e, t] of l) u.has(e) || _.skip_effect(t.e);
					(_.oncommit(h), _.ondiscard(g));
				} else h(_);
			}
			(r && be(!0), Q(f));
		}),
		flags: n,
		items: l,
		pending: p,
		outrogroups: null,
		fallback: d
	};
	((m = !1), w && (c = T));
}
function xr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Sr(e, t, n, i, a) {
	var o = !!(i & 8),
		s = t.length,
		c = e.items,
		l = xr(e.effect.first),
		u,
		d = null,
		f,
		p = [],
		m = [],
		h,
		g,
		_,
		v;
	if (o)
		for (v = 0; v < s; v += 1)
			((h = t[v]),
				(g = a(h, v)),
				(_ = c.get(g).e),
				_.f & 33554432 || (_.nodes?.a?.measure(), (f ??= new Set()).add(_)));
	for (v = 0; v < s; v += 1) {
		if (((h = t[v]), (g = a(h, v)), (_ = c.get(g).e), e.outrogroups !== null))
			for (let t of e.outrogroups) (t.pending.delete(_), t.done.delete(_));
		if (
			(_.f & 8192 && (bn(_), o && (_.nodes?.a?.unfix(), (f ??= new Set()).delete(_))),
			_.f & 33554432)
		) {
			if (((_.f ^= te), _ === l)) wr(_, null, n);
			else {
				var y = d ? d.next : l;
				(_ === e.effect.last && (e.effect.last = _.prev),
					_.prev && (_.prev.next = _.next),
					_.next && (_.next.prev = _.prev),
					Tr(e, d, _),
					Tr(e, _, y),
					wr(_, y, n),
					(d = _),
					(p = []),
					(m = []),
					(l = xr(d.next)));
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0],
						x;
					d = b.prev;
					var S = p[0],
						ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) wr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					(Tr(e, S.prev, ee.next),
						Tr(e, d, S),
						Tr(e, ee, b),
						(l = b),
						(d = ee),
						--v,
						(p = []),
						(m = []));
				} else
					(u.delete(_),
						wr(_, l, n),
						Tr(e, _.prev, _.next),
						Tr(e, _, d === null ? e.effect.first : d.next),
						Tr(e, d, _),
						(d = _));
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;)
				((u ??= new Set()).add(l), m.push(l), (l = xr(l.next)));
			if (l === null) continue;
		}
		(_.f & 33554432 || p.push(_), (d = _), (l = xr(_.next)));
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups)
			t.pending.size === 0 && (vr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var ne = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || ne.push(_);
		for (; l !== null;) (!(l.f & 8192) && l !== e.fallback && ne.push(l), (l = xr(l.next)));
		var re = ne.length;
		if (re > 0) {
			var ie = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < re; v += 1) ne[v].nodes?.a?.measure();
				for (v = 0; v < re; v += 1) ne[v].nodes?.a?.fix();
			}
			_r(e, ne, ie);
		}
	}
	o &&
		k(() => {
			if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
		});
}
function Cr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? (o & 16 ? Mt(n) : Nt(n, !1, !1)) : null,
		l = o & 2 ? Mt(i) : null;
	return {
		v: c,
		i: l,
		e: V(
			() => (
				a(t, c ?? n, l ?? i, s),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function wr(e, t, n) {
	if (e.nodes)
		for (
			var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n;
			r !== null;
		) {
			var o = L(r);
			if ((a.before(r), r === i)) return;
			r = o;
		}
}
function Tr(e, t, n) {
	(t === null ? (e.effect.first = n) : (t.next = n),
		n === null ? (e.effect.last = t) : (n.prev = t));
}
function Er(e) {
	var t,
		n,
		r = ``;
	if (typeof e == `string` || typeof e == `number`) r += e;
	else if (typeof e == `object`) {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Er(e[t])) && (r && (r += ` `), (r += n));
		} else for (n in e) e[n] && (r && (r += ` `), (r += n));
	}
	return r;
}
function Dr() {
	for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
		(e = arguments[n]) && (t = Er(e)) && (r && (r += ` `), (r += t));
	return r;
}
function Or(e) {
	return typeof e == `object` ? Dr(e) : (e ?? ``);
}
var kr = [
	...` 	
\r\f\xA0\v﻿`
];
function Ar(e, t, n) {
	var r = e == null ? `` : `` + e;
	if ((t && (r = r ? r + ` ` + t : t), n)) {
		for (var i of Object.keys(n))
			if (n[i]) r = r ? r + ` ` + i : i;
			else if (r.length)
				for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
					var s = o + a;
					(o === 0 || kr.includes(r[o - 1])) && (s === r.length || kr.includes(r[s]))
						? (r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1))
						: (o = s);
				}
	}
	return r === `` ? null : r;
}
function jr(e, t, n, r, i, a) {
	var o = e[le];
	if (w || o !== n || o === void 0) {
		var s = Ar(n, r, a);
		((w && s === e.getAttribute(`class`)) ||
			(s == null
				? e.removeAttribute(`class`)
				: t
					? (e.className = s)
					: e.setAttribute(`class`, s)),
			(e[le] = n));
	} else if (a && i !== a)
		for (var c in a) {
			var l = !!a[c];
			(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
		}
	return a;
}
var Mr = Symbol(`is custom element`),
	Nr = Symbol(`is html`),
	Pr = me ? `link` : `LINK`;
function Fr(e) {
	if (w) {
		var t = !1,
			n = () => {
				if (!t) {
					if (((t = !0), e.hasAttribute(`value`))) {
						var n = e.value;
						(Lr(e, `value`, null), (e.value = n));
					}
					if (e.hasAttribute(`checked`)) {
						var r = e.checked;
						(Lr(e, `checked`, null), (e.checked = r));
					}
				}
			};
		((e[fe] = n), k(n), Ze());
	}
}
function Ir(e, t) {
	var n = Rr(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Lr(e, t, n, r) {
	var i = Rr(e);
	if (
		!(
			w &&
			((i[t] = e.getAttribute(t)),
			t === `src` || t === `srcset` || (t === `href` && e.nodeName === Pr))
		)
	) {
		var a = i[t];
		a !== (i[t] = n) &&
			(t === `loading` && (e[se] = n),
			n == null
				? e.removeAttribute(t)
				: typeof n != `string` && Br(e).has(t)
					? (e[t] = n)
					: (!w || (typeof n != `number` && typeof n != `boolean`) || a !== String(n)) &&
						e.setAttribute(t, n));
	}
}
function Rr(e) {
	return (e[ce] ??= { [Mr]: e.nodeName.includes(`-`), [Nr]: e.namespaceURI === ge });
}
var zr = new Map();
function Br(e) {
	var t = e.getAttribute(`is`) || e.nodeName,
		n = zr.get(t);
	if (n) return n;
	zr.set(t, (n = new Set()));
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in ((r = o(i)), r))
			r[s].set && s !== `innerHTML` && s !== `textContent` && s !== `innerText` && n.add(s);
		i = l(i);
	}
	return n;
}
function Vr(e, t, n = t) {
	var r = new WeakSet();
	($e(e, `input`, async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (((a = Hr(e) ? Ur(a) : a), n(a), j !== null && r.add(j), await Bn(), a !== (a = t()))) {
			var o = e.selectionStart,
				s = e.selectionEnd,
				c = e.value.length;
			if (((e.value = a ?? ``), s !== null)) {
				var l = e.value.length;
				o === s && s === c && l > c
					? ((e.selectionStart = l), (e.selectionEnd = l))
					: ((e.selectionStart = o), (e.selectionEnd = Math.min(s, l)));
			}
		}
	}),
		((w && e.defaultValue !== e.value) || (Un(t) == null && e.value)) &&
			(n(Hr(e) ? Ur(e.value) : e.value), j !== null && r.add(j)),
		un(() => {
			var n = t();
			if (e === document.activeElement) {
				var i = j;
				if (r.has(i)) return;
			}
			(Hr(e) && n === Ur(e.value)) ||
				((e.type !== `date` || n || e.value) && n !== e.value && (e.value = n ?? ``));
		}));
}
function Hr(e) {
	var t = e.type;
	return t === `number` || t === `range`;
}
function Ur(e) {
	return e === `` ? null : +e;
}
function Wr(e) {
	(O === null && Oe(`onMount`),
		on(() => {
			let t = Un(e);
			if (typeof t == `function`) return t;
		}));
}
typeof window < `u` && ((window.__svelte ??= {}).v ??= new Set()).add(`5`);
var $ = new (class {
		#e = F(Bt([]));
		get todos() {
			return Q(this.#e);
		}
		set todos(e) {
			I(this.#e, e, !0);
		}
		constructor() {
			if (typeof window < `u`) {
				let e = localStorage.getItem(`todomvc-svelte5`);
				e && (this.todos = JSON.parse(e));
			}
		}
		save() {
			typeof window < `u` &&
				localStorage.setItem(`todomvc-svelte5`, JSON.stringify(this.todos));
		}
		add(e) {
			(this.todos.push({ id: crypto.randomUUID(), text: e, completed: !1 }), this.save());
		}
		toggle(e) {
			let t = this.todos.find((t) => t.id === e);
			t && ((t.completed = !t.completed), this.save());
		}
		toggleAll() {
			let e = this.activeCount === 0;
			((this.todos = this.todos.map((t) => ({ ...t, completed: !e }))), this.save());
		}
		remove(e) {
			((this.todos = this.todos.filter((t) => t.id !== e)), this.save());
		}
		clearCompleted() {
			((this.todos = this.todos.filter((e) => !e.completed)), this.save());
		}
		get activeCount() {
			return this.todos.filter((e) => !e.completed).length;
		}
	})(),
	Gr = or(
		`<header class="header"><h1>tugas</h1> <input class="new-todo" placeholder="Apa yang perlu dilakukan?"/></header>`
	);
function Kr(e, t) {
	Be(t, !0);
	let n = F(``);
	function r(e) {
		e.key === `Enter` && Q(n).trim() && ($.add(Q(n).trim()), I(n, ``));
	}
	var i = Gr(),
		a = z(R(i), 2);
	(Fr(a),
		D(i),
		Zn(`keydown`, a, r),
		Vr(
			a,
			() => Q(n),
			(e) => I(n, e)
		),
		sr(e, i),
		Ve());
}
Qn([`keydown`]);
var qr = or(
	`<li><div class="view"><input type="checkbox" class="toggle"/> <label> </label> <button class="destroy" aria-label="Hapus"></button></div> <input class="edit"/></li>`
);
function Jr(e, t) {
	Be(t, !0);
	let n = F(!1),
		r = st(() => t.todo.text);
	function i() {
		$.toggle(t.todo.id);
	}
	function a() {
		$.remove(t.todo.id);
	}
	function o() {
		(I(n, !0), I(r, t.todo.text));
	}
	function s() {
		I(n, !1);
	}
	function c(e) {
		e.key === `Enter`
			? (Q(r).trim() &&
					($.todos = $.todos.map((e) =>
						e.id === t.todo.id ? { ...e, text: Q(r).trim() } : e
					)),
				s())
			: e.key === `Escape` && (I(r, t.todo.text), s());
	}
	var l = qr();
	let u;
	var d = R(l),
		f = R(d);
	Fr(f);
	var p = z(f, 2),
		m = Jt(p, !0),
		h = z(p, 2);
	D(d);
	var g = z(d, 2);
	(Fr(g),
		D(l),
		dn(() => {
			((u = jr(l, 1, ``, null, u, { completed: t.todo.completed, editing: Q(n) })),
				Lr(f, `id`, `toggle-${t.todo.id ?? ``}`),
				Ir(f, t.todo.completed),
				Lr(p, `for`, `toggle-${t.todo.id ?? ``}`),
				fr(m, t.todo.text));
		}),
		Zn(`change`, f, i),
		Zn(`dblclick`, p, o),
		Zn(`click`, h, a),
		Zn(`keydown`, g, c),
		Xn(`blur`, g, s),
		Vr(
			g,
			() => Q(r),
			(e) => I(r, e)
		),
		sr(e, l),
		Ve());
}
Qn([`change`, `dblclick`, `click`, `keydown`]);
var Yr = or(
	`<section class="main"><input type="checkbox" id="toggle-all" class="toggle-all"/> <label for="toggle-all">Tandai semua selesai</label> <ul class="todo-list"></ul></section>`
);
function Xr(e, t) {
	Be(t, !0);
	let n = F(`semua`);
	function r() {
		switch (Q(n)) {
			case `aktif`:
				return $.todos.filter((e) => !e.completed);
			case `selesai`:
				return $.todos.filter((e) => e.completed);
			default:
				return $.todos;
		}
	}
	Wr(() => {
		function e() {
			let e = window.location.hash.slice(2);
			[`semua`, `aktif`, `selesai`].includes(e) ? I(n, e, !0) : I(n, `semua`);
		}
		return (
			window.addEventListener(`hashchange`, e),
			e(),
			() => window.removeEventListener(`hashchange`, e)
		);
	});
	var i = Yr(),
		a = R(i);
	Fr(a);
	var o = z(a, 4);
	(br(
		o,
		21,
		r,
		(e) => e.id,
		(e, t) => {
			Jr(e, {
				get todo() {
					return Q(t);
				}
			});
		}
	),
		D(o),
		D(i),
		dn(() => Ir(a, $.activeCount === 0 && $.todos.length > 0)),
		Zn(`change`, a, () => $.toggleAll()),
		sr(e, i),
		Ve());
}
Qn([`change`]);
var Zr = or(
	`<footer class="footer"><span class="todo-count"><strong> </strong> tugas tersisa</span> <ul class="filters"><li><a href="#/semua">Semua</a></li> <li><a href="#/aktif">Aktif</a></li> <li><a href="#/selesai">Selesai</a></li></ul> <button class="clear-completed">Hapus yang selesai</button></footer>`
);
function Qr(e, t) {
	Be(t, !0);
	function n() {
		$.clearCompleted();
	}
	var r = Zr(),
		i = R(r),
		a = Jt(R(i), !0);
	(Se(), D(i));
	var o = z(i, 2),
		s = R(o);
	(jr(
		R(s),
		1,
		Or(window.location.hash === `#/semua` || window.location.hash === `` ? `selected` : ``)
	),
		D(s));
	var c = z(s, 2);
	(jr(R(c), 1, Or(window.location.hash === `#/aktif` ? `selected` : ``)), D(c));
	var l = z(c, 2);
	(jr(R(l), 1, Or(window.location.hash === `#/selesai` ? `selected` : ``)), D(l), D(o));
	var u = z(o, 2);
	(D(r), dn(() => fr(a, $.activeCount)), Zn(`click`, u, n), sr(e, r), Ve());
}
Qn([`click`]);
var $r = or(`<section class="todoapp"><!> <!> <!></section>`);
function ei(e) {
	var t = $r(),
		n = R(t);
	Kr(n, {});
	var r = z(n, 2);
	(Xr(r, {}), Qr(z(r, 2), {}), D(t), sr(e, t));
}
pr(ei, { target: document.getElementById(`app`) });
