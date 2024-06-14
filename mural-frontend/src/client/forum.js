import axios from 'axios';

import baseApiEndpoint from './backendConfig';

export async function getPosts() {
    let endpoint = `${baseApiEndpoint}/api/v1/posts`;

    const response = await axios.get(endpoint);

    return response.data.data.posts;
}

export async function postPost(data) {
    let endpoint = `${baseApiEndpoint}/api/v1/posts`;

    const response = await axios.post(endpoint, data);

    return response.data.data.post;
}

export async function postComment(data) {
    let endpoint = `${baseApiEndpoint}/api/v1/comments`;

    const response = await axios.post(endpoint, data);

    return response.data.data.post;
}

export async function deletePost(id) {
    let endpoint = `${baseApiEndpoint}/api/v1/posts/${id}`;

    const response = await axios.delete(endpoint);
    return response;
}

export async function getPost(id) {
    let endpoint = `${baseApiEndpoint}/api/v1/posts/${id}`;

    const response = await axios.get(endpoint);
    return response.data.data.document;
}

export async function updatePost(id, data) {
    let endpoint = `${baseApiEndpoint}/api/v1/posts/${id}`;
    const response = await axios.patch(endpoint, data);
    return response.data.data.post;
}

export async function deleteComment(id) {
    let endpoint = `${baseApiEndpoint}/api/v1/comments/${id}`;
    const response = await axios.delete(endpoint);
    return response;
}
