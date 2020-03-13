import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './liststyles';
import fileData from '../../data/getData';


export default function NestedGrid() {
  const classes = useStyles();
  const [dataObject, setDataObject] = useState(null);


  useEffect(() => {
    let data = fileData();
    setDataObject(data);
  }, []);
  
  function FormRow() {
    return (
      <React.Fragment>
        {/*Waits for the UseEffect to obtain the information, by using && Conditional THEN Maps... or else its null Idiot*/}
        {dataObject && dataObject.map((row, index) => {
          return (
          <Grid item xs={4} key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Box>
                  <Typography className={classes.title}>
                    {row.Difficulty}: {row.Name}
                  </Typography>
                  <Typography className={classes.body1}>
                    {row.Description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          )
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}