import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { Button } from '@material-ui/core';

const Home = ({
  classes,
  uploadToAzure10,
  handleAzure10FileChange,
  azure10Time,
  uploads10,
  uploadToAzure12,
  handleAzure12FileChange,
  azure12Time,
  uploads12,
  uploadsAws,
  uploadToAws,
  handleAwsFileChange,
  awsTime,
  filesUploadedWithRedux,
}) => {
  return (
    <div>
      {/* <form onSubmit={uploadToAzure10}>
      {azure10Time}
        <input
          onChange={handleAzure10FileChange}
          className={classes.input}
          name="files"
          multiple
          type="file"
        />
        <Button color="secondary" variant="contained" type="submit" className={classes.button}>
          Upload To Azure 10
        </Button>
        {uploads10.map((upload10) => {
          return (
            <div key={upload10.link}>
              <a href={upload10.link}>{upload10.name}</a>
            </div>
          );
        })}
      </form> */}

      <form onSubmit={uploadToAzure12}>
        {azure12Time}
        <input
          onChange={handleAzure12FileChange}
          className={classes.input}
          name="files"
          multiple
          type="file"
        />
        <Button color="secondary" variant="contained" type="submit" className={classes.button}>
          Upload To Azure 12
        </Button>
        {filesUploadedWithRedux.map((upload12) => {
          return (
            <div key={upload12.file.name}>
              {upload12.status} <a href={upload12.url || '#'}>{upload12.file.name}</a>
            </div>
          );
        })}
      </form>

      {/*  <form onSubmit={uploadToAws}>
      {awsTime}
        <input
          onChange={handleAwsFileChange}
          className={classes.input}
          name="files"
          multiple
          type="file"
        />
        <Button color="secondary" variant="contained" type="submit" className={classes.button}>
          Upload To Aws
        </Button>
        {uploadsAws.map((uploadAws) => {
          return (
            <div key={uploadAws.key}>
              <a href={uploadAws.location}>{uploadAws.key}</a>
            </div>
          );
        })}
      </form> */}
    </div>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
