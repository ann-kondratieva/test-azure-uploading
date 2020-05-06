import { all, takeEvery, call, put, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { BlobServiceClient } from '@azure/storage-blob';
import { AbortController } from '@azure/abort-controller';

import { uploadFiles, setUploadedFiles } from '../actions';

const AZURE_ACCOUNT = 'testtabeebblob';
const sas =
  '?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-06-08T18:01:44Z&st=2020-04-08T10:01:44Z&spr=https,http&sig=19%2BD2fnViaf0CRmEMRw4gHwpIsgKugpBPC7PfBA2sz4%3D';

//azure 12
const blobServiceClient12 = new BlobServiceClient(
  `https://${AZURE_ACCOUNT}.blob.core.windows.net${sas}`,
);
const containerClient = blobServiceClient12.getContainerClient('testcontainer');

function uploadFileAzure({ blockBlobClient, file, abortController }) {
  const blockSize = file.size;
  return blockBlobClient.uploadBrowserData(file, {
    blockSize,
    abortSignal: abortController.signal,
  });
}

const uploadFile = ({ file, containerClient }) => {
  let fileToUpload = file;
  const blockBlobClient = containerClient.getBlockBlobClient(file.name);
  const downloadUrl = blockBlobClient.url;
  const abortController = new AbortController();
  console.log(file.name);
  return new Promise(function(resolve) {
    return uploadFileAzure({ blockBlobClient, file: fileToUpload, abortController }).then(() => {
      resolve(downloadUrl);
    });
  });
};

function uploadFilesConcurrently({ files, containerClient }) {
  return eventChannel((emitter) => {
    let uploadedFiles = 0;
    files.forEach((file) => {
      uploadFile({
        file,
        containerClient,
      }).then(function onUpload(downloadUrl) {
        emitter({ file, downloadUrl });
        uploadedFiles++;
        console.log(uploadedFiles, downloadUrl);
        if (uploadedFiles === files.length) {
          emitter(END);
        }
      });
    });
    return () => {};
  });
}

function* onUploadFiles({ payload }) {
  const files = payload;
  const filesEvents = yield call(uploadFilesConcurrently, {
    files,
    containerClient,
  });
  try {
    while (true) {
      let { file, downloadUrl } = yield take(filesEvents);

      yield put(setUploadedFiles([{ file, url: downloadUrl, status: 'Uploaded' }]));
    }
  } finally {
  }
}

export default function* watchRequest() {
  yield all([takeEvery(uploadFiles, onUploadFiles)]);
}
