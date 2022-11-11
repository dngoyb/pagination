/**
 *
 * @param {string} url
 * @param {RequestInit} options
 */

export async function fetchJSON(url, options = {}) {
	const headers = { Accept: 'application/json', ...options };
	const res = await fetch(url, { ...options, headers });

	if (!res.ok) {
		throw new Error('Servor error', { cause: res });
	}
	return await res.json();
}
