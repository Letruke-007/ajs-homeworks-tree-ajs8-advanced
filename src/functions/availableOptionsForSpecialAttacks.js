export default function availableOptionsForSpecialAttacks(character) {
  const availableOptions = [];

  character.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;

    availableOptions.push({
      id, name, icon, description,
    });
  });

  return availableOptions;
}
