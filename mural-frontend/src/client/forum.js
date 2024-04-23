import axios from 'axios';

const baseEndpoint = 'http://localhost:5000';

export async function getPosts() {
    let endpoint = `${baseEndpoint}/api/v1/posts`;

    const response = await axios.get(endpoint);

    return response.data.data.posts;
}

export async function postPost(data) {
    let endpoint = `${baseEndpoint}/api/v1/posts`;

    const response = await axios.post(endpoint, data);

    return response.data.data.post;
}

export async function deletePost(id) {
    let endpoint = `${baseEndpoint}/api/v1/posts/${id}`;

    const response = await axios.delete(endpoint);
    return response;
}

export async function getPost(id) {
    let endpoint = `${baseEndpoint}/api/v1/posts/${id}`;

    const response = await axios.get(endpoint);
    return response.data.data.post;
}

export async function updatePost(id, data) {
    let endpoint = `${baseEndpoint}/api/v1/posts/${id}`;
    const response = await axios.patch(endpoint, data);
    return response.data.data.post;
}
