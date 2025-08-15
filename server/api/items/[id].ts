// server/api/items/[id].ts

// This simulates a slow API endpoint


export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be a number',
    });
  }

  // Artificial delay to simulate a slow database query or external API call
  await new Promise((resolve) => setTimeout(resolve, 2500));

  try {
    const data = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: `Item with ID ${id} not found`,
    });
  }
});
