import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

/* Styles */
const useStyles = makeStyles({
    root: {
        width: "100vw",
        position: "fixed",
        bottom: 0,
        overflow: "hidden",
        borderTop: "1px solid lightgray",
        paddingBottom: "0.25em",
        paddingTop: "0.25em",
    },
});

const BottomNav: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction icon={<SettingsIcon />} />
            <Link to="/addNew">
                <BottomNavigationAction icon={<AddIcon />} />
            </Link>

            <BottomNavigationAction icon={<BarChartIcon />} />
        </BottomNavigation>
    );
};

export default BottomNav;
