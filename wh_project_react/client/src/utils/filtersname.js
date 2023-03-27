export const filtersName = (name =>{
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