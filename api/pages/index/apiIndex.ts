//получение блоков слайдера
export const getSliderData = async <T = any>() => {
  try {
    const data = await $fetch<T>('https://api.los-bio.ru/info/group/slide', {
      method: 'GET',
    })
    return data
  } catch (error: unknown) {
    const err = error as { status?: number; data?: any; message?: string }
    if (err?.status) throw { status: err.status, data: err.data }
    throw new Error('Unknown error during fetching advantage data')
  };
};

//получение блока преимуществ
export const getAdvantageData = async <T = any>() => {
  try {
    const data = await $fetch<T>('https://api.los-bio.ru/info/group/advantage', {
      method: 'GET',
    })
    return data
  } catch (error: unknown) {
    const err = error as { status?: number; data?: any; message?: string }
    if (err?.status) throw { status: err.status, data: err.data }
    throw new Error('Unknown error during fetching advantage data')
  };
};
