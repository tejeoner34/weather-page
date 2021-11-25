import { Grid, Container } from "@material-ui/core";

export default function DailiesComponent(){


    return (
        <Grid container xl={2}> 
            <Grid item>
                <Container> Esto es la info de los dailies por props</Container>
                <Container> Esto es la info de los dailies por props</Container>
                <Container> Esto es la info de los dailies por props</Container>
            </Grid>
        </Grid>
    )
}