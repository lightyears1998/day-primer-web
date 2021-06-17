import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Theme, makeStyles, createStyles
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { Box, Divider } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import moment from "moment";
import TextField from "@material-ui/core/TextField/TextField";
import Alert from "@material-ui/lab/Alert";

import Link from "../components/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { paddingTop: theme.spacing(4) },
    main: {
      margin: "auto",
      padding: theme.spacing(2),
      textAlign: "center"
    },
    textField: { width: "100%" },
    button: { margin: theme.spacing(1) }
  })
);

export default function NextPage(): JSX.Element {
  const classes = useStyles({});

  const [page, setPage] = useState(1);
  const [date, handleDateChange] = useState<moment.Moment>(moment(new Date()));

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    console.log(date.toDate());
  }, [date]);

  return (
    <React.Fragment>
      <Head>
        <title>DayPrimer | 日志</title>
      </Head>
      <Container className={classes.root} maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>日志</Typography>

        <Box display="flex" justifyContent="center" marginY={2}>
          <Pagination count={10} page={page} onChange={handlePageChange} />
        </Box>

        <Box display="flex" justifyContent="center" marginY={2}>
          <Button variant="outlined">新建日志</Button>
        </Box>

        <Box marginY={2}>
          <Divider />
        </Box>

        <Alert severity="info">This is an info alert — check it out!</Alert>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DateTimePicker className={classes.textField} label="日期和时间" inputVariant="outlined" ampm={false} value={date} onChange={handleDateChange}></DateTimePicker>
          </Grid>
          <Grid item xs={8}>
            <TextField className={classes.textField} id="title" label="标题" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} id="outlined-basic" label="正文" variant="outlined" multiline rows={16}/>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" marginY={2}>
          <Button className={classes.button} variant="outlined">保存修改</Button>
          <Button className={classes.button} variant="outlined">放弃修改</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
