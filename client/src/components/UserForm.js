import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const UserForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Add User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="First Name"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Last Name"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Preferred Email"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Google Email"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="GitHub username"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Slack username"
            variant="filled"
            margin="dense"
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add User
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;
