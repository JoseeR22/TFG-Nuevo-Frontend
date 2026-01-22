async function readPayload(res) {
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        return await res.json().catch(() => ({}));
    }
    return await res.text().catch(() => "");
}

function errorMessage(payload, fallback) {
    if (typeof payload === "string" && payload.trim()) return payload;
    return payload?.mistake || payload?.error || payload?.message || fallback;
}

export async function getJson(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        headers: {
            Accept: "application/json",
            ...(options.headers || {}),
        },
    });

    const payload = await readPayload(res);
    if (!res.ok) throw new Error(errorMessage(payload, `HTTP ${res.status}`));

    return payload;
}

export async function postForm(url, formData, options = {}) {
    const res = await fetch(url, {
        method: "POST",
        ...options,
        body: formData,
        headers: {
            Accept: "application/json",
            ...(options.headers || {}),
        },
    });

    const payload = await readPayload(res);
    if (!res.ok) throw new Error(errorMessage(payload, `HTTP ${res.status}`));

    return payload;
}
