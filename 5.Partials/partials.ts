// Use Case:
// When we have to update/modify subset of the attributes, in that case we can use Partials. For example - A ToDO will have 4 fields: title, description, id, and  done. If we only want to update TITLE of ToDO we can use partial

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

type updateInputOfToDo = Partial<Todo>;

/* 

Line Number 11 is equivalent to :

interface updateInputOfToDo {
  id?: number;
  title?: string;
  description?: string;
  done?: boolean;
}
*/

function updateToDo(newToDO: updateInputOfToDo) {
  console.log("ToDo Updated");
}

updateToDo({
  title: "New Todo",
});
