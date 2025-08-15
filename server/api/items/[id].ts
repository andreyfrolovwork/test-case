
import type { Product } from '~/types/product';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  try {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    const data = await $fetch<Product>(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 404,
      statusMessage: `Item with ID ${id} not found`,
    });
  }
});
