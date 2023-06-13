import { useState } from "react";
import { card, CardContent, Fab, Grid, Typography } from '@mui/material';
import { addCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
export const Counter = (props) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        const counter = count + 1;
        if(counter >=999) {
            return
        }
        setCount(counter)
    }
    const handleDecrement = () => {
        const counter = count - 1;
        if(counter < 0) {
            return
        }
        setCount(counter)
    }
    const parseCounter = () => {
        if(count < 10) {
            return `00${count}`
        }
        return count
    }
    return <div>
        <h2>Counter: {props.name} </h2>
        <div style={{ width: 550, margin: 'auto '}}>
            <Grid container spacing={1}>
                {
                    parseCounter().split('').map((digir, index) => {
                        return <Grid xs={4} key={`digit-${index}`} style={{padding: 5}}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">
                                        {digit}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </div>
        <Fab variant="circular" color="info" onClick={ handleIncrement }><addCircleOutline/> </Fab>
        <Fab variant="circular" color="error" onClick={ handleDecrement }><addCircleOutline/> </Fab>
    </div>
}
export default Counter;