import { useEffect, useState } from 'react'
import { api } from '../../apis';
import Todo from '../todo/Todo';
import { todoAction } from '../../store/slices/todo.slice';
import { Store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
export default function layout() {
    const dispatch = useDispatch();


    useEffect(() => {
        api.todo.findAll()
            .then(res => {
                if (res.status == 200) {
                    dispatch(todoAction.setData(res.data.data))
                }
                console.log(res);
            })


    }, [])
    return (
        <div>
            <Todo />
        </div>
    )
}
