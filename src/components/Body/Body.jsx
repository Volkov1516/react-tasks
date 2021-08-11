import React, {useContext} from "react";
import tasksContext from "../../context/tasks-context";

import {Button, TextField, IconButton, Typography} from "@material-ui/core";
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const Body = () => {

    const { tasks, listIdValue, isVisibleCompleted2, showCompleted2, taskInputValue2, setTaskInputValue2, createTask2, updateTask2, deleteTask2, completeTask2 } = useContext(tasksContext)

    return (
        <div>
            <div>
                <TextField value={taskInputValue2} onChange={e => setTaskInputValue2(e.target.value)}  variant="outlined" size="small" />
                <Button onClick={() => createTask2()} size="medium" variant="contained" color="primary" >Submit</Button>
            </div>
            <div>
                {tasks.map((i) => {
                    if (i.listID === listIdValue && !i.completed) {
                        return <div key={i.id}>
                            <IconButton>
                                <DonutLargeRoundedIcon onClick={() => completeTask2(i.id)} fontSize="small"/>
                            </IconButton>
                            <Typography style={({display: 'inline-block'})}>
                                {i.text}
                            </Typography>
                            <IconButton>
                                <EditRoundedIcon onClick={() => updateTask2(i.id)} fontSize="small" />
                            </IconButton>
                            <IconButton>
                                <DeleteRoundedIcon onClick={() => deleteTask2(i.id)} fontSize="small" />
                            </IconButton>
                        </div>
                    }
                })}
            </div>
            <div>
                <Button onClick={showCompleted2} color="primary" >Show Completed</Button>
                <div style={isVisibleCompleted2 ?  ({display: 'block'}) : ({display: 'none'})}>
                    {tasks.map((i) => {
                        if (i.listID === listIdValue && i.completed) {
                            return <div key={i.id}>
                                <IconButton>
                                    <DoneRoundedIcon onClick={() => completeTask2(i.id)} fontSize="small" color="primary"/>
                                </IconButton>
                                <Typography style={({display: 'inline-block'})}>
                                    {i.text}
                                </Typography>
                                <IconButton>
                                    <DeleteRoundedIcon onClick={() => deleteTask2(i.id)} fontSize="small" />
                                </IconButton>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body
