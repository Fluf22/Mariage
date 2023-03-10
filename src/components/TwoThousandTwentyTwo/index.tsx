import {Button, CircularProgress, Grid, TextField} from "@material-ui/core";
import useStyles from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from "@material-ui/icons/Send";
import React, {useCallback, useState} from "react";
import {VideoLinkError, VideoLinkResponse, X_SECRET_PASSWORD_HEADER} from "../../types";

const TwoThousandTwentyTwo = () => {
    const classes = useStyles();
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successState, setSuccessState] = useState<boolean | undefined>(undefined);
    const [errorState, setErrorState] = useState<boolean | undefined>(undefined);

    const handleSendPassword = useCallback(() => {
        setIsLoading(true);
        setErrorState(false);
        fetch("/.netlify/functions/get-video", {headers: {[X_SECRET_PASSWORD_HEADER]: password}}).then(res => {
            return res.json();
        }).then((res: VideoLinkResponse) => {
            if (!res.success) {
                throw res;
            }

            setErrorState(false);
            setSuccessState(res.success);
            setTimeout(() => {
                window.open(res.link, "_blank")
            }, 1500);
        }).catch((err: VideoLinkError) => {
            console.error(err)
            setSuccessState(err.success);
            setErrorState(true);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [password]);

    return (
        <Grid container direction={"row"} justifyContent="center" alignItems={"center"} className={classes.root}>
            <Grid item container direction="row" justifyContent="center" alignItems="center" className={classes.card}>
                <Grid item className={classes.field}>
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
                        spellCheck={false}
                        value={password}
                        onChange={({target: {value}}) => setPassword(value)}
                        error={errorState}
                        helperText={errorState && "Mot de passe invalide"}
                        required
                        disabled={isLoading || successState === true}
                        className="w-full"
                        style={errorState ? {} : {marginBottom: "23px"}}
                    />
                </Grid>
                <Grid item className={classes.buttonContainer}>
                    {
                        isLoading ? (
                            <Button
                                variant="contained"
                                color="primary"
                                disabled
                                className={classes.button}
                            >
                                <CircularProgress color="primary" style={{width: "25px", height: "25px"}}/>
                            </Button>
                        ) : successState === true ? (
                            <Button
                                variant="contained"
                                disabled
                                className={[classes.button, "bg-green-500"].join(" ")}
                            >
                                <CheckCircleIcon htmlColor="#ffffff"/>
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSendPassword}
                                startIcon={<SendIcon/>}
                                className={classes.button}
                            >
                                Envoyer
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TwoThousandTwentyTwo;