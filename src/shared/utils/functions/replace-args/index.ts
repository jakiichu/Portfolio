/**
 * Функция для подстановки аргументов в URL и добавления параметров запроса.
 *
 * Эта функция принимает строку URL с опциональными заполнителями (например, `:id`) и объект с парами ключ-значение для их замены.
 * Заполнители в пути URL заменяются соответствующими значениями из объекта `args`, если ключ начинается с двоеточия (`:`).
 * Остальные пары ключ-значение добавляются как параметры запроса.
 * Значения автоматически кодируются с помощью `encodeURIComponent` для безопасного построения URL.
 *
 * @example
 * ```typescript
 * // Замена параметра пути
 * replaceArgs('http://example.com/:id', { ':id': '123' })
 * // Возвращает: 'http://example.com/123'
 *
 * // Добавление параметров запроса
 * replaceArgs('http://example.com', { name: 'Иван', age: '30' })
 * // Возвращает: 'http://example.com?name=Иван&age=30'
 *
 * // Комбинация пути и параметров запроса
 * replaceArgs('http://example.com/:id', { ':id': '123', name: 'Иван' })
 * // Возвращает: 'http://example.com/123?name=Иван'
 *
 * // Обработка специальных символов
 * replaceArgs('http://example.com/:id', { ':id': 'user@123' })
 * // Возвращает: 'http://example.com/user%40123'
 * ```
 *
 * @param url - Базовая строка URL, содержащая опциональные заполнители (например, `:id`).
 * @param args - Объект с парами ключ-значение, где ключи, начинающиеся с `:`, заменяют заполнители в пути URL,
 *               а остальные ключи добавляются как параметры запроса.
 * @returns Строка, представляющая сформированный URL с заменёнными заполнителями и добавленными параметрами запроса.
 *
 * @remarks
 * - Заполнители в URL должны точно совпадать с ключами в `args`, включая начальное `:`.
 * - Ключи, не начинающиеся с `:`, обрабатываются как параметры запроса.
 * - Если параметры запроса отсутствуют, в возвращаемом URL не будет символа `?`.
 * - Специальные символы в значениях автоматически кодируются с помощью `encodeURIComponent`.
 * - Если заполнитель не найден в `args`, он остаётся неизменным в URL.
 */

const replaceArgs = (url: string, args: Record<string, string>): string => {
  const path = Object.keys(args).reduce(
    (currentUrl, key) =>
      key.startsWith(":")
        ? currentUrl.replace(key, encodeURIComponent(args[key]))
        : currentUrl,
    url,
  );

  const query = new URLSearchParams(
    Object.fromEntries(
      Object.entries(args).filter(([key]) => !key.startsWith(":")),
    ),
  ).toString();

  return query ? `${path}?${query}` : path;
};

export { replaceArgs };
