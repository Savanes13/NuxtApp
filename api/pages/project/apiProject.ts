//получение полной информации о проекте
export const getProjectData = async <T = any>(slug: string) => {
  try {
    const data = await $fetch<T>(`https://api.los-bio.ru/projects/${slug}`, {
      method: 'GET',
    })
    return data
  } catch (error: unknown) {
    const err = error as { status?: number; data?: any; message?: string }
    if (err?.status) throw { status: err.status, data: err.data }
    throw new Error('Unknown error during fetching advantage data')
  };
};
