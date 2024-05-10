import axios from 'axios';

const baseEndpoint = 'http://localhost:5000';

export async function getAllImages() {
    let endpoint = `${baseEndpoint}/api/v1/images`;

    const response = await axios.get(endpoint);

    return response.data.data.images;
}

export async function createImage(data) {
    let endpoint = `${baseEndpoint}/api/v1/uploads`;

    const response = await axios.post(endpoint, data);

    return response.data.data.image;
}

export async function deleteImage(id) {
    let endpoint = `${baseEndpoint}/api/v1/images/${id}`;

    const response = await axios.delete(endpoint);
    return response;
}
