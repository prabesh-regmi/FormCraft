import { Api, buildQueryParams } from './api'

export const fetchData = async (url, params = {}) => {
    try {
        const query = buildQueryParams(params);
        const res = await Api.get(`${url}${query ? `?${query}` : ''}`);
        return res.data;
    } catch (err) {
        return err?.response?.data?.message
    }
};

export const getForms = async (params = {}) => {
    const data = await fetchData('/forms', params);
    return data;
}
export const getFormsById = async (id) => {
    const data = await fetchData(`/forms/${id}`);
    return data;
}