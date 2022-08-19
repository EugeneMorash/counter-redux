import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>

    createStyles({
        body: {
            minHeight: '101vh',
            padding: 30,
            fontSize: 30,
        },
        box: {
            textAlign: "center",
            height: '100%',
            color: 'steelblue',
            fontWeight: 'bold',
            fontStyle: 'italic',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "end",
        },
        paper: {
            height: '100%',
            padding: 5
        }
    })
);
