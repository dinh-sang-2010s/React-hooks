import React, { useEffect, useState } from "react";
import queryString from "query-string";

import "./App.scss";
import TodoList from "./components/les01.UseState/TodoList";
import TodoForm from "./components/les01.UseState/TodoForm";
import PostList from "./components/les02.UseEffect/PostList";
import Pagination from "./components/les02.UseEffect/Pagination";
import FilterForm from "./components/les02.UseEffect/FilterForm";
import Clock from "./components/les02.UseEffect/Clock/index";

function App() {
  //todoList
  const [todos, setTodo] = useState([
    { id: 1, name: "Cras justo odio", description: "" },
    { id: 2, name: "Dapibus ac facilisis in", descriptio: "" },
    { id: 3, name: "Morbi leo risus", description: "" },
  ]);

  function onHandleClick(todo) {
    const idx = todos.findIndex((x) => x.id === todo.id);
    if (idx < 0) return;

    let newTodo = [...todos];
    newTodo.splice(idx, 1);

    setTodo(newTodo);
  }
  //----------------------------------------------------------------

  //todoForm
  function onHandleSubmit(objForm) {
    const id = todos.length + 1;

    const newTodo = {
      id: id,
      ...objForm,
    };
    let newTodos = [...todos];
    newTodos.push(newTodo);

    setTodo(newTodos);
  }
  //----------------------------------------------------------------

  //Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  //filter
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  //---------------------------------

  function handlePageChange(newPage) {
    setFilter({ ...filter, _page: newPage });
  }

  //----------------------------------------------------------------

  //PostList
  const [posts, setPost] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter);
        const req = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;

        const res = await fetch(req);
        const resJson = await res.json();

        setPost(resJson.data);
        setPagination(resJson.pagination);
      } catch (e) {
        console.log("Failed to fetch post list", e.message);
      }
    }
    fetchPostList();
  }, [filter]);
  //----------------------------------------------------------------
  //filter
  function onHandleFilterFormOnSubmit(newFilter) {
    //khi filter thi set lai page vd data filter chi co 1 thi o page 1 neu page 2 se ko thaya

    setFilter({ ...filter, _page: 1, title_like: newFilter.search });
  }
  //----------------------------------------------------------------
  return (
    <div className="App">
      <div className="row">
        <div className="col-4 px-5">
          <TodoForm onSubmit={onHandleSubmit} />
        </div>
        <div className="col-8">
          <TodoList todos={todos} onTodoClick={onHandleClick} />
        </div>
      </div>
      <FilterForm onSubmit={onHandleFilterFormOnSubmit} />
      <PostList posts={posts} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <Clock />
    </div>
  );
}

export default App;
