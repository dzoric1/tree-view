import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMockStore = defineStore('mock', () => {
  const selectedFileId = ref<number | null>();

  const data = ref([
    {
      id: 1,
      name: 'Папка 1',
      children: [
        { id: 2, name: 'Папка 1.1', children: [] },
        {
          id: 3,
          name: 'Папка 1.2',
          children: [
            {
              id: 4,
              name: 'Папка 1.2.1',
              children: [{ id: 5, name: 'Папка 1.2.1.1', children: [] }],
            },
          ],
        },
      ],
    },
    { id: 6, name: 'Папка 2', children: [] },
  ]);

  const getData = () => data.value;
  const getSelectedFileId = () => selectedFileId.value;
  const setSelectedFileId = (id: number | null) => {
    selectedFileId.value = id;
  };

  return {
    data,
    selectedFileId,
    getData,
    getSelectedFileId,
    setSelectedFileId,
  };
});
