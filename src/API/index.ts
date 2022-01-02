import axios, { AxiosError } from 'axios';
import QueryString from 'qs';
import { API_BASE } from '../Api.config';

export const getRecipes = async (query = 'Chicken') => {
  try {
    const response = await axios.get(API_BASE, {
      params: {
        q: query,
        app_id: process.env.REACT_APP_EDAMAM_APP_RECIPE_ID,
        app_key: process.env.REACT_APP_EDAMAM_APP_RECIPE_KEY,
        type: 'public',
        beta: 'false',
        health: ['alcohol-free', 'vegetarian'],
      },

      paramsSerializer: params => {
        return QueryString.stringify(params);
      },
    });
    console.warn(response.data);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return {
          status: axiosError.response?.status,
          msg: axiosError.response?.data.msg,
        };
      }
    }
    return { status: 500, msg: 'Server Error' };
  }
};
