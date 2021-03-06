/**
 * Two component vector
 */
export default class Vector2 {

	/**
	 * Returns an instance representing the x axis
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static X(target) {
		const n = [1.0, 0.0];

		if (target === undefined) target = new Vector2(n);
		else target.n = n;

		return target;
	}

	/**
	 * Returns an instance representing the y axis
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Y(target) {
		const n = [0.0, 1.0];

		if (target === undefined) target = new Vector2(n);
		else target.n = n;

		return target;
	}

	/**
	 * Returns a unit instance from rad
	 * @param {number} rad - The rotation in radians
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Rotation(rad, target) {
		const n = [
			Math.cos(rad),
			Math.sin(rad)
		];

		if (target === undefined) target = new Vector2(n);
		else target.n = n;

		return target;
	}

	/**
	 * Returns the resulting instance of cw triangle (v0,v1,v2) and barycentric coordinates (u,v)
	 * @param {Vector2} v0 - The first corner
	 * @param {Vector2} v1 - The second corner
	 * @param {Vector2} v2 - The third corner
	 * @param {number} u - The u-coordinate
	 * @param {number} v - The v-coordinate
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static BarycentricUV(v0, v1, v2, u, v, target) {
		const v0x = v0.n[0], v0y = v0.n[1];
		const v1n = v1.n, v2n = v2.n;

		const n = [
			v0x + (v1n[0] - v0x) * u + (v2n[0] - v0x) * v,
			v0y + (v1n[1] - v0y) * u + (v2n[1] - v0y) * v
		];

		if (target === undefined) target = new Vector2(n);
		else target.n = n;

		return target;
	}


	/**
	 * Returns the sum of v and w (v+w)
	 * @param {Vector2} v - The first summand
	 * @param {Vector2} w - The second summand
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Add(v, w, target) {
		return (target === undefined ? new Vector2() : target).add(v, w);
	}

	/**
	 * Returns the difference of v and w (v-w)
	 * @param {Vector2} v - The minuend
	 * @param {Vector2} w - The subtrahend
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Subtract(v, w, target) {
		return (target === undefined ? new Vector2() : target).subtract(v, w);
	}

	/**
	 * Returns the scalar product of v and n (v*n)
	 * @param {Vector2} v - The vector
	 * @param {number} n - The scalar
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static MultiplyScalar(v, n, target) {
		return (target === undefined ? new Vector2() : target).multiplyScalar(v, n);
	}

	/**
	 * Returns the transformation of v (m*v)
	 * @param {Matrix2} m - The transform
	 * @param {Vector2} v - The vector
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static MultiplyMatrix2(m, v, target) {
		return (target === undefined ? new Vector2() : target).multiplyMatrix2(m, v);
	}

	/**
	 * Returns the 2x3 transformation of v (m*v)
	 * @param {Matrix3} m - The transform
	 * @param {Vector2} v - The vector
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Multiply2x3Matrix3(m, v, target) {
		return (target === undefined ? new Vector2() : target).multiply2x3Matrix3(m, v);
	}

	/**
	 * Returns the transformation of v (m*v)
	 * @param {Matrix3} m - The transform
	 * @param {Vector2} v - The vector
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static MultiplyMatrix3(m, v, target) {
		return (target === undefined ? new Vector2() : target).multiplyMatrix3(m, v);
	}

	/**
	 * Returns the orthogonal projection of w on v
	 * @param {Vector2} v - The projection vector
	 * @param {Vector2} w - The projected vector
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Project(v, w, target) {
		return (target === undefined ? new Vector2() : target).project(v, w);
	}

	/**
	 * Returns a normal form of v
	 * @param {Vector2} v - The source
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Normalize(v, target) {
		return (target === undefined ? new Vector2() : target).normalizationOf(v);
	}

	/**
	 * Returns a perpendicular dot product of v
	 * @param {Vector2} v - The source
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Perpendicular(v, target) {
		return (target === undefined ? new Vector2() : target).perpendicularOf(v);
	}

	/**
	 * Returns a copy of v
	 * @param {Vector2} v - The source
	 * @param {Vector2} [target] - The target instance
	 * @returns {Vector2}
	 */
	static Copy(v, target) {
		return (target === undefined ? new Vector2() : target).copyOf(v);
	}


	/**
	 * Returns the outer product of v and w (v cross w)
	 * @param {Vector2} v - The first vector
	 * @param {Vector2} w - The second vector
	 * @returns {number}
	 */
	static cross(v, w) {
		return v.n[0] * w.n[1] - v.n[1] * w.n[0];
	}

	/**
	 * Returns the inner product of v and w (v dot w)
	 * @param {Vector2} v - The first vector
	 * @param {Vector2} w - The second vector
	 * @returns {number}
	 */
	static dot(v, w) {
		return v.n[0] * w.n[0] + v.n[1] * w.n[1];
	}

	/**
	 * Returns the angle in radians between v and w (acos(v dot w))
	 * @param {Vector2} v - The first vector
	 * @param {Vector2} w - The second vector
	 * @returns {number}
	 */
	static rad(v, w) {
		return Math.acos(v.n[0] * w.n[0] + v.n[1] * w.n[1]);
	}


	/**
	 * Returns true if v and w are equal, false otherwise
	 * @param {Vector2} v - The protagonist
	 * @param {Vector2} w - The antagonist
	 * @returns {boolean}
	 */
	static isEQ(v, w) {
		const vn = v.n, wn = w.n;

		return v === w || vn[0] === wn[0] && vn[1] === wn[1];
	}


	/**
	 * Creates a new instance
	 * @param {number[]} [n] - Array representing the two components
	 * Arrays of length !== 2 will return the zero (0,0) vector
	 */
	constructor(n) {
		/**
		 * The component array
		 * @type {number[]}
		 */
		this.n = (n && n.constructor === Array && n.length === 2 ? n : [0.0, 0.0]);
	}


	/**
	 * Redefines the instance
	 * @param {number[]} n - Array representing the two components
	 * @returns {Vector2}
	 */
	define(n) {
		this.constructor.call(this, n);

		return this;
	}


	/**
	 * The x component {@link Vector2#n}[0]
	 * @type {number}
	 */
	get x() {
		return this.n[0];
	}

	set x(n) {
		this.n[0] = n;
	}

	/**
	 * The y component {@link Vector2#n}[1]
	 * @type {number}
	 */
	get y() {
		return this.n[1];
	}

	set y(n) {
		this.n[1] = n;
	}

	/**
	 * The s component
	 * Alias of {@link Vector2#x}
	 * @type {number}
	 */
	get s() {
		return this.n[0];
	}

	set s(n) {
		this.n[0] = n;
	}

	/**
	 * The t component
	 * Alias of {@link Vector2#y}
	 * @type {number}
	 */
	get t() {
		return this.n[1];
	}

	set t(n) {
		this.n[1] = n;
	}


	/**
	 * The norm
	 * @type {number}
	 */
	get norm() {
		const x = this.n[0], y = this.n[1];

		return Math.sqrt(x * x + y * y);
	}

	/**
	 * The square of the norm (norm*norm)
	 * @type {number}
	 */
	get normSquared() {
		const x = this.n[0], y = this.n[1];

		return x * x + y * y;
	}


	/**
	 * The sum of v and w (v+w)
	 * @param {Vector2} v - The first summand
	 * @param {Vector2} w - The second summand
	 * @returns {Vector2}
	 */
	add(v, w) {
		this.n[0] = v.n[0] + w.n[0];
		this.n[1] = v.n[1] + w.n[1];

		return this;
	}

	/**
	 * The difference of v and w (v-w)
	 * @param {Vector2} v - The minuend
	 * @param {Vector2} w - The subtrahend
	 * @returns {Vector2}
	 */
	subtract(v, w) {
		this.n[0] = v.n[0] - w.n[0];
		this.n[1] = v.n[1] - w.n[1];

		return this;
	}

	/**
	 * The scalar product of v and n (v*n)
	 * @param {Vector2} v - The vector
	 * @param {number}   n - The scalar
	 * @returns {Vector2}
	 */
	multiplyScalar(v, n) {
		this.n[0] = v.n[0] * n;
		this.n[1] = v.n[1] * n;

		return this;
	}

	/**
	 * The transformation of v (m*v)
	 * @param {Matrix2} m - The transform
	 * @param {Vector2} v - The vector
	 * @returns {Vector2}
	 */
	multiplyMatrix2(m, v) {
		const mn = m.n, x = v.n[0], y = v.n[1];

		this.n[0] = x * mn[0] + y * mn[2];
		this.n[1] = x * mn[1] + y * mn[3];

		return this;
	}

	/**
	 * The 2x3 transformation of v (m*v)
	 * @param {Matrix3} m - The transform
	 * @param {Vector2} v - The vector
	 * @returns {Vector2}
	 */
	multiply2x3Matrix3(m, v) {
		const mn = m.n, x = v.n[0], y = v.n[1];

		this.n[0] = x * mn[0] + y * mn[3] + mn[6];
		this.n[1] = x * mn[1] + y * mn[4] + mn[7];

		return this;
	}

	/**
	 * The transformation of v (m*v)
	 * @param {Matrix3} m - The transform
	 * @param {Vector2} v - The vector
	 * @returns {Vector2}
	 */
	multiplyMatrix3(m, v) {
		const mn = m.n, x = v.n[0], y = v.n[1];
		const w = 1.0 / (x * mn[2] + y * mn[5] + mn[8]);

		this.n[0] = (x * mn[0] + y * mn[3] + mn[6]) * w;
		this.n[1] = (x * mn[1] + y * mn[4] + mn[7]) * w;

		return this;
	}

	/**
	 * The orthogonal projection of w on v
	 * @param {Vector2} v - The projection vector
	 * @param {Vector2} w - The projected vector
	 * @returns {Vector2}
	 */
	project(v, w) {
		const vx = v.n[0], vy = v.n[1];

		const n = (vx * w.n[0] + vy * w.n[1]) / (vx * vx + vy * vy);

		this.n[0] = vx * n, this.n[1] = vy * n;

		return this;
	}

	/**
	 * The componentwise minimum of v and w (min(v,w))
	 * @param {Vector2} v - The first vector
	 * @param {Vector2} w - The second vector
	 * @returns {Vector2}
	 */
	minXY(v, w) {
		const vn = v.n, wn = w.n;

		this.n[0] = vn[0] < wn[0] ? vn[0] : wn[0];
		this.n[1] = vn[1] < wn[1] ? vn[1] : wn[1];

		return this;
	}

	/**
	 * The componentwise maximum of v and w (max(v,w))
	 * @param {Vector2} v - The first vector
	 * @param {Vector2} w - The second vector
	 * @returns {Vector2}
	 */
	maxXY(v, w) {
		const vn = v.n, wn = w.n;

		this.n[0] = vn[0] > wn[0] ? vn[0] : wn[0];
		this.n[1] = vn[1] > wn[1] ? vn[1] : wn[1];

		return this;
	}


	/**
	 * The sum of the instance and w (v+w)
	 * @param {Vector2} w - The second summand
	 * @returns {Vector2}
	 */
	addEQ(w) {
		this.n[0] += w.n[0];
		this.n[1] += w.n[1];

		return this;
	}

	/**
	 * The difference of the instance and w (v-w)
	 * @param {Vector2} w - The subtrahend
	 * @returns {Vector2}
	 */
	subtractEQ(w) {
		this.n[0] -= w.n[0];
		this.n[1] -= w.n[1];

		return this;
	}

	/**
	 * The scalar product of the instance and n (v*n)
	 * @param {number} n - The scalar
	 * @returns {Vector2}
	 */
	multiplyScalarEQ(n) {
		this.n[0] *= n;
		this.n[1] *= n;

		return this;
	}

	/**
	 * The orthogonal projection of w on the instance
	 * @param {Vector2} w - The projected vector
	 * @returns {Vector2}
	 */
	projectEQ(w) {
		const n = this.n, x = n[0], y = n[1];

		const f = (x * w.n[0] + y * w.n[1]) / (x * x + y * y);

		n[0] *= f, n[1] *= f;

		return this;
	}


	/**
	 * The normal form of v
	 * @param {Vector2} v - The source
	 * @returns {Vector2}
	 */
	normalizationOf(v) {
		var n = this.n, vn = v.n, vx = vn[0], vy = vn[1];
		var norm = vx * vx + vy * vy;

		if (norm !== 0.0 && norm !== 1.0) norm = 1.0 / Math.sqrt(norm);

		n[0] = vx * norm, n[1] = vy * norm;

		return this;
	}

	/**
	 * The perpendicular dot product of v
	 * @param {Vector2} v - The source
	 * @returns {Vector2}
	 */
	perpendicularOf(v) {
		const n = this.n, vn = v.n;

		[n[0], n[1]] = [-vn[1], vn[0]];

		return this;
	}

	/**
	 * The copy of v
	 * @param {Vector2} v - The source
	 * @returns {Vector2}
	 */
	copyOf(v) {
		this.n = v.n.slice(0, 2);

		return this;
	}


	/**
	 * The normal form of the instance
	 * @returns {Vector2}
	 */
	normalize() {
		const n = this.n, x = n[0], y = n[1];
		let norm = x * x + y * y;

		if (norm === 0.0 || norm === 1.0) return this;

		norm = 1.0 / Math.sqrt(norm);
		n[0] *= norm, n[1] *= norm;

		return this;
	}

	/**
	 * The perpendicular dot product of the instance
	 * @returns {Vector2}
	 */
	perpendicular() {
		const n = this.n;

		[n[0], n[1]] = [-n[1], n[0]];

		return this;
	}


	/**
	 * Returns a string representation of the instance
	 * @param {int} [digits=3] - The decimal digits
	 * @returns {string}
	 */
	toString(digits = 3) {
		const str = this.n
			.map((item, index, source) => item.toFixed(digits))
			.join(" ");

		return `[Vector2](${ str })`;
	}

	/**
	 * Returns the {@link Vector2#norm} of the instance
	 * @returns {number}
	 */
	valueOf() {
		return this.norm;
	}
}
