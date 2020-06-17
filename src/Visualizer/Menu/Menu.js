import React, { useState } from "react";
// React Bootstrap.
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Material UI.
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function Menu(props) {
  // Manage the selected algorithm.
  const [selectedAlgorithm, setAlgo] = useState("dijkstra");

  // When the selected algorithm changed, clear the board and update the state.
  const onChangeAlgorithm = (reset, event) => {
    setAlgo(event.target.value);
    reset();
  };

  const onChangeSRow = (setStartNode, event) => {
    setStartNode(event.target.value, props.startNode.col);
  };

  const classes = useStyles();
  return (
    <Card className="text-center mx-auto w-75">
      <CardContent>
        <Typography>Menu</Typography>
        <Row className="d-flex justify-content-center my-3">
          <FormControl className={classes.formControl}>
            <Select
              disabled={!props.isAnimationFinished}
              defaultValue={"dijkstra"}
              onChange={onChangeAlgorithm.bind(this, props.reset)}
            >
              <MenuItem value={"dijkstra"}>Dijkstra's Algorithm</MenuItem>
              <MenuItem value={"dfs"}>Depth-first Search</MenuItem>
              <MenuItem value={"bfs"}>Breadth-first Search</MenuItem>
            </Select>
          </FormControl>
        </Row>
        {/* <Row className="d-flex justify-content-center my-3">
          <Col lg={6}>
            <TextField
              label="S-row"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              defaultValue={props.startNode.row}
              className="my-1"
              onChange={onChangeSRow.bind(this, props.setStartNode)}
            />
          </Col>
          <Col lg={6}>
            <TextField
              label="S-col"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              defaultValue={props.startNode.col}
              className="my-1"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <Col lg={6}>
            <TextField
              label="F-row"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              defaultValue={props.finishNode.row}
              className="my-1"
            />
          </Col>
          <Col lg={6}>
            <TextField
              label="F-col"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              defaultValue={props.finishNode.col}
              className="my-1"
            />
          </Col>
        </Row> */}
        <Row className="d-flex justify-content-center my-3">
          <Button
            disabled={!props.isAnimationFinished}
            className="w-50"
            variant="contained"
            color="primary"
            onClick={props.reset}
          >
            Reset
          </Button>
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <Button
            disabled={!props.isAnimationFinished}
            className="w-50"
            variant="contained"
            color="primary"
            onClick={props.start.bind(this, selectedAlgorithm)}
          >
            Start
          </Button>
        </Row>
      </CardContent>
    </Card>
  );
}

export default Menu;
