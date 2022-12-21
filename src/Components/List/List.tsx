import React, {useEffect, useState} from "react";
import ListItem from "./ListItem/ListItem";
import moment from "moment";
import {Task} from "../../intefacets";
import c from './List.module.css'

//Random function(from,to)
function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const List = () => {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        newIds()
    }, [tasks.length])

    function addTask() {
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                created: moment(),
                timeToDelete: randomIntFromInterval(5, 6),
            }
        ])

    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const newIds = () => {
        setTasks(tasks.map(el => {
            let id = tasks.indexOf(el) + 1
            return {
                ...el,
                id: id
            }
        }))
    }


    return (
        <div className={c.List}>
            <button onClick={(e) => {
                addTask()
            }}>PressMe
            </button>
            {tasks?.map(task => <ListItem task={task} deleteTask={deleteTask} key={task.id}/>)}

        </div>)
}
export default List