import { createSelector } from 'reselect';

export const getUploadedFiles = (state) => state.home.homePage.uploadedFiles;
