export function formatBooksArray(data) {
  let rebuildData = data.map((row) => {
    let obj = {
      id: row["id"], 
      title: row["title"], 
      author: [row["author"]], 
      dateRealeased: [row["dateRealeased"]], 
      dateContext: [row["dateContext"]],
      race: row["race"].split(","),  
      tags: row["tags"].split(","),
      categories: row["categories"].split(","), 
      description: row["description"],  
      img: row["img"],
    }
    return obj
  });
  return rebuildData
};