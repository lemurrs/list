import React, {useEffect, useState} from "react";
import moment from "moment";
import {Task} from "../../../intefacets";

type Props = {
    task: Task
    deleteTask: (a: number) => void,
}

const ListItem = ({task, deleteTask}: Props) => {

    const [duration, setDuration] = useState(Math.floor(moment.duration(moment().diff(moment(task.created))).asSeconds()))
    let diff = task.timeToDelete - duration

    useEffect(() => {
        const timer = setInterval(() => {
            setDuration(Math.floor(moment.duration(moment().diff(moment(task.created))).asSeconds()))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    if (duration >= task.timeToDelete) deleteTask(task.id)

    return (<div>
        <p><b>Number: </b>{task.id}</p>
        <p><b>This item will be deleted in:</b> <span style={{color:diff<=5? 'red':'initial'}}>{diff}</span></p>
    </div>)
}
export default React.memo(ListItem)