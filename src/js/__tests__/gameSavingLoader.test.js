import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');

test('должен успешно загружать объект сохранения через async/await', async () => {

  const originalReader = jest.requireActual('../reader').default;
  read.mockImplementation(() => originalReader());

  const expectedSaving = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(expectedSaving);
});

test('должен выбрасывать ошибку, если чтение файла завершилось неудачей', async () => {

  read.mockRejectedValue(new Error('Ошибка чтения'));

  await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка при загрузке сохранения: Ошибка чтения');
});
