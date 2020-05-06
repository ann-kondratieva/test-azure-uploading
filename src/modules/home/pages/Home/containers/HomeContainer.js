import React, { useState } from 'react';
import azure from 'azure-storage/browser/azure-storage.blob.export';
import { BlobServiceClient } from '@azure/storage-blob';
import ReactS3 from 'react-s3';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../components/Home';
import { uploadFiles } from '../actions';
import { getUploadedFiles } from '../selectors';

const AZURE_ACCOUNT = 'testtabeebblob';
const sas =
  '?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-06-08T18:01:44Z&st=2020-04-08T10:01:44Z&spr=https,http&sig=19%2BD2fnViaf0CRmEMRw4gHwpIsgKugpBPC7PfBA2sz4%3D';
//azure 10
const blobService = azure.createBlobService(
  AZURE_ACCOUNT,
  '3R0ANZD7PesJGHXaSyQmDu/skzKy0W7FI3HjnQs21E4UJr310wD14yFtWakZMgaeJfMCevX0qjOC+eb62I53Ig==',
);
//azure 12
const blobServiceClient12 = new BlobServiceClient(
  `https://${AZURE_ACCOUNT}.blob.core.windows.net${sas}`,
);

//aws
export const S3_CONFIG = {
  bucketName: 'fusionmarkets',
  dirName: 'idverification',
  region: 'ap-southeast-2',
  accessKeyId: 'AKIAJZNGEISFNO2OE3WQ',
  secretAccessKey: '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',
};

const HomeContainer = () => {
  const dispatch = useDispatch();

  const filesUploadedWithRedux = useSelector(getUploadedFiles);

  const [azure10FilesToUpload, setAzure10FilesToApload] = useState([]);
  const [azure10Time, setAzure10Time] = useState(0);
  const [uploads10, setUploads10] = useState([]);
  let interval1StartTime = 0;

  const [azure12FilesToUpload, setAzure12FilesToApload] = useState([]);
  const [azure12Time, setAzure12Time] = useState(0);
  const [uploads12, setUploads12] = useState([]);
  let interval2StartTime = 0;

  const [awsFilesToUpload, setAwsFilesToApload] = useState([]);
  const [awsTime, setAwsTime] = useState(0);
  const [uploadsAws, setUploadsAws] = useState([]);
  let intervalAwsStartTime = 0;

  const uploadToAzure12 = (e) => {
    e.preventDefault();
    setAzure12Time(0);
    interval2StartTime = Date.now();
    const interval2 = setInterval(() => {
      setAzure12Time((Date.now() - interval2StartTime) / 1000);
    }, 500);
    Array.from(azure12FilesToUpload).forEach((file) => {
      const containerClient = blobServiceClient12.getContainerClient('testcontainer');
      const blobName = file.name;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      console.log(file.name);
      blockBlobClient
        .uploadBrowserData(file)
        .then((file) => {
          console.log('uploaded', blobName);
          setUploads12((uploads12) => {
            const newUploads = [
              ...uploads12,
              {
                ...blockBlobClient,
                ...file,
              },
            ];
            if (newUploads.length === Array.from(azure12FilesToUpload).length) {
              clearInterval(interval2);
              setAzure12FilesToApload([]);
            }
            return newUploads;
          });
        })
        .catch((error) => {
          console.log(error);
          clearInterval(interval2);
          setAzure12FilesToApload([]);
        });
    });
  };

  const uploadToAzure10 = (e) => {
    e.preventDefault();
    setAzure10Time(0);
    interval1StartTime = Date.now();
    const interval1 = setInterval(() => {
      setAzure10Time((Date.now() - interval1StartTime) / 1000);
    }, 500);
    Array.from(azure10FilesToUpload).forEach((file) => {
      console.log(file);
      blobService.createBlockBlobFromBrowserFile('testcontainer', file.name, file, function(
        error,
        result,
        response,
      ) {
        setUploads10((uploads10) => {
          const newUploads = [
            ...uploads10,
            {
              ...result,
              link: `https://${AZURE_ACCOUNT}.blob.core.windows.net/${result.container}/${result.name}`,
            },
          ];
          if (newUploads.length === Array.from(azure10FilesToUpload).length) {
            clearInterval(interval1);
            setAzure10FilesToApload([]);
          }
          return newUploads;
        });
        console.log(error, result, response);
      });
    });
  };

  const uploadToAws = (e) => {
    e.preventDefault();
    setAwsTime(0);
    intervalAwsStartTime = Date.now();
    const intervalAws = setInterval(() => {
      setAwsTime((Date.now() - intervalAwsStartTime) / 1000);
    }, 500);
    for (const file of awsFilesToUpload) {
      ReactS3.uploadFile(file, S3_CONFIG)
        .then((result) => {
          console.log(result);
          setUploadsAws((uploads) => {
            const newUploads = [...uploads, result];
            if (newUploads.length === awsFilesToUpload.length) {
              clearInterval(intervalAws);
            }
            return newUploads;
          });
        })
        .catch((err) => console.error(err));
    }
  };

  const handleAzure10FileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    setAzure10FilesToApload(e.target.files);
  };

  const handleAzure12FileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    dispatch(uploadFiles(Array.prototype.slice.call(e.target.files)));
  };

  const handleAwsFileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    setAwsFilesToApload(e.target.files);
  };

  return (
    <Home
      uploadToAzure10={uploadToAzure10}
      azure10Time={azure10Time}
      handleAzure10FileChange={handleAzure10FileChange}
      uploads10={uploads10}
      uploadToAzure12={uploadToAzure12}
      azure12Time={azure12Time}
      handleAzure12FileChange={handleAzure12FileChange}
      uploads12={uploads12}
      uploadsAws={uploadsAws}
      uploadToAws={uploadToAws}
      handleAwsFileChange={handleAwsFileChange}
      awsTime={awsTime}
      filesUploadedWithRedux={filesUploadedWithRedux}
    />
  );
};

HomeContainer.propTypes = {};

export default HomeContainer;
