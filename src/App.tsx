import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");


const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


function App() {
  const reducer = (state = [], action: any): any => {
    action.id = Date.now()
    switch (action.type) {
      case ADD_TODO:
        return [...state, { text: action.text, id: action.id }]
      case DELETE_TODO:
        return []
      default:
        return state
    }
  }
  const store = createStore<never[], any, unknown, unknown>(reducer)

  store.subscribe(() =>
    console.log(store.getState())
  )

  const onSubmit = (e: any) => {
    e.preventDefault()
    const toDo = input?.value;
    input!.value = ""
    store.dispatch({ type: ADD_TODO, text: toDo })
  }
  form?.addEventListener("submit", onSubmit)
  return (
    <div className="App">
      <h1>To Dos</h1>
      <form>
        <input type="text" placeholder="Write to do" />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default App;
