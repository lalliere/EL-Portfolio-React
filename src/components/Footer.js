import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import { pink } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #06A77D 30%, #005C97 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: 0,
  },
  title: {
    fontSize: "24pt",
    fontWeight: "bold",
    color: "#FFFFFF",
    alignItems: "middle"
  }
  
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation position="sticky" value={value} onChange={handleChange} className={classes.root} showLabels>
      <Typography className={classes.title}>Contact Me:</Typography>
      <BottomNavigationAction target="_blank" href="https://github.com/lalliere" rel="noopener" style={{ color: pink[50] }} alt="Link to GitHub Repository" label="GitHub" value="github" icon={<GitHubIcon style={{ color: pink[50] }} />} />
      <BottomNavigationAction target="_blank" href="https://www.linkedin.com/in/emilylallier" rel="noopener" style={{ color: pink[50] }} label="LinkedIn" value="linkedin" icon={<LinkedInIcon style={{ color: pink[50] }}/>} />
      <BottomNavigationAction target="_blank" href="https://drive.google.com/file/d/19hPHDWf16moj5aqPjAHZbxC2N32V6gJq/view?usp=sharing" rel="noopener" style={{ color: pink[50] }} label="Resume" value="resume" icon={<DescriptionIcon style={{ color: pink[50] }} />} />
    </BottomNavigation>
  );
}
