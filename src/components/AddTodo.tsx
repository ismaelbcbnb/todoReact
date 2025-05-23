import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate(); // Inicializa o useNavigate

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <h4>Nova tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" ref={register} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddTodo;