import { handleActions } from 'redux-actions';

import { setUploadedFiles, uploadFiles } from '../actions';

const defaultState = [];

export default handleActions(
  {
    [setUploadedFiles](state, action) {
      const updatedFileUploads = action.payload;

      const newState = state.map((item) => {
        const fileUpload = updatedFileUploads.find((upload) => upload.file === item.file);

        return fileUpload ? { ...item, ...fileUpload } : item;
      });

      return newState;
    },
    [uploadFiles](state, action) {
      const filesToUpload = action.payload;

      const newState = filesToUpload.map((item) => ({
        file: item,
        status: 'Pending',
      }));

      return newState;
    },
  },
  defaultState,
);
