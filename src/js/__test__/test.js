import orderByProps from '../main';

test('Проверка сортировки по списку', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  let orderList = ['name', 'level', 'health', 'defence'];
  expect(orderByProps(obj, orderList)).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ]);
  orderList = ['invalid key'];
  expect(orderByProps(obj, orderList)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
