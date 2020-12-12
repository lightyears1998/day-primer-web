import React, { useEffect } from "react";
import Head from "next/head";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from "@material-ui/data-grid";

import Link from "../components/Link";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: "center", paddingTop: theme.spacing(4), paddingBottom: theme.spacing(4)
    },
    button: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  })
);

export default function HomePage(): JSX.Element {
  const classes = useStyles({});

  const [documentPath, setDocumentPath] = React.useState("");

  const openDocumentPath = () => {
    documentPath;
  };

  return (
    <React.Fragment>
      <Head>
        <title>DayPrimer | Home</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom>
          时间线
        </Typography>
        <Button>开始记录行动</Button>

        <Typography variant="h6" gutterBottom>
          项目
        </Typography>
        <Button>添加项目</Button>
        <Button>编辑项目</Button>
        <Button>删除项目</Button>

        <Typography variant="h6" gutterBottom>
          行动
        </Typography>
        <Button>添加行动</Button>
        <Button>编辑行动</Button>
        <Button>删除行动</Button>

        <Typography variant="h6" gutterBottom>
          开发人员工具
        </Typography>
        <Button variant="contained" color="secondary" onClick={openDocumentPath}>
          打开数据文件夹
        </Button>
        <Button className={classes.button}>
          <Link href="/settings">打开设置</Link>
        </Button>
      </div>
    </React.Fragment>
  );
}
