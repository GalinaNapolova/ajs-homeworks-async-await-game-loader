import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Сохранение успешно загружено через async/await:', saving);
  } catch (error) {
    console.error('Произошла ошибка в приложении:', error.message);
  }
})();