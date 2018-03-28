export const post = (path, data, queryParams) => {

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    if (keycloak.token != null) {
        headers.set('Authorization', 'Bearer ' + keycloak.token);
    }

    fetch(`${clientApiGateway}/${path}${convertToUriParams(queryParams)}`, {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    }).catch(err => {
        console.log(err.stack);
    });
}

export const remove = (path, queryParams) => {

    const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    });

    if (keycloak.token != null) {
        headers.set('Authorization', 'Bearer '+keycloak.token);
    }

    fetch(`${clientApiGateway}/${path}${convertToUriParams(queryParams)}`, {
        headers,
        method: "DELETE",
    })
    .catch(err => {
        console.log(err.stack)
    });
}

const convertToUriParams = (queryParams) => {

    if (!queryParams) {
        return '';
    }

    const paramsString = Object.entries(queryParams)
        .map(entry => `${entry.key}=${entry.value}`)
        .join('&');

    return paramsString ? `?${paramsString}` : '';
}