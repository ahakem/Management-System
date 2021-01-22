import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const TextField = withStyles((theme) => ({
  root: {
    border: "1px solid red",
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    height:46,
    border: "1px solid #ced4da",
    "label + &": {
      // marginTop: theme.spacing(3),
    },
  },

  input: {
    position: "relative",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);
export default TextField;
