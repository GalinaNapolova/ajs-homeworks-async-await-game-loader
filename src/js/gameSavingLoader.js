import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read(); // Ожидаем чтение файла
      const stringData = await json(buffer); // Ожидаем парсинг в строку
      return JSON.parse(stringData); // Возвращаем готовый объект
    } catch (error) {
      throw new Error(`Ошибка при загрузке сохранения: ${error.message}`);
    }
  }
}

