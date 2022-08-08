import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({ 
    table: { 
       backGroundColor: "black"
    }
   });

export const Box = () => { 
    const container = useStyles()
    return <spam className={container.table}></spam>
}