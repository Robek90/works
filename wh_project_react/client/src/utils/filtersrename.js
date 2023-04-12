export const filtersCategories = (name =>{
  switch (name) {
    case "categories":
      return "Категории";
    case "race":
      return "Рассы";
    case "author":
      return "Авторы";
    case "dateRealeased":
      return "Дата релиза";
    case "dateContext":
      return "Миллениум событий";
    case "tags":
      return "Тэги";
    default:
      return "NONE";
  }
});

export const filtersRace = (name =>{
  switch (name) {
    case "imperium":
      return "Империум";
    case "chaos":
      return "Хаос";
    case "necrons":
      return "Некроны";
    case "eldar":
      return "Эльдары";
    case "darkeldar":
      return "Темные эльдары";
    case "tau":
      return "Тау";
    case "orks":
      return "Орки";
    case "tyranids":
      return "Тираниды";
    default:
      return name;
  }
});