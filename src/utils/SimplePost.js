import fetch from 'isomorphic-fetch';

const ourEndpoint = 'http://35.238.193.206:5431/';

const SimplePost = async ({
    data, endpoint = ourEndpoint,
}) => {

    const APIConfig = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    };

    return await fetch(endpoint, APIConfig).then((response) => {
        const contentType = response.headers.get('content-type');
        if (response.ok) {
            if (contentType && contentType.indexOf('application/json') !== -1)
                return response.json().then(json => json);
            if (contentType && contentType.indexOf('text') !== -1)
                return response.text().then(text => text);
            return response;
        }
        throw response;
    }).catch((e) => {
        if(e.status === 500)
        {
            return  {
                errors: [{
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Internal Server Error",
                }],
                response: e
            };
        }
    });
};

export default SimplePost;