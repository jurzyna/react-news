// async function
export async function fetchAsync(base, path, params) {
    // Create params for the api call
    const paramsString = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    const url = paramsString ? `${base}${path}?${paramsString}` : `${base}${path}`;

    const response = await fetch(url);
    return await response.json();
}
