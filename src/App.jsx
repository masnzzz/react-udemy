import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompoleteTodos] = useState([]);


    /**
     * TODOに入力された値をvalueにセットする
     * @param {event} event
     * @returns
     */
    const onChangeTodoText = (event) => setTodoText(event.target.value);


    /**
     * 追加するボタンを押下するとTODOが追加
     * @returns
     */
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };


    /**
     * 削除ボタンを押下するとTODOが削除
     * @param {int} index
     */
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }


    /**
     * 完了ボタンを押下するとTODOが完了する
     * @param {int} index
     */
    const onClickComplete = (index) => {
        // 未完了のTODOから削除
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        // 完了のTODOに移動
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompoleteTodos(newCompleteTodos);
    }


    /**
     * 戻すボタンを押下するとTODOが未完了へ戻される
     * @param {int} index
     */
    const onClickBack = (index) => {
        // 完了のTODOから削除
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        // 未完了のTODOに移動
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]

        setCompoleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }


    return (
        <>
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={incompleteTodos.length >= 5}
            />
            {incompleteTodos.length >= 5 && (<p style={{ color: "red" }}>登録できるTODOは5個までです。</p>)
            }
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos
                todos={completeTodos}
                onClick={onClickBack}
            />
        </>
    );
};
