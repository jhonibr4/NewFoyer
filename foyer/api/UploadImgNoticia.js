import RNFetchBlob from 'react-native-fetch-blob'

let upload = (data) => {
  return RNFetchBlob.fetch('POST', `http://192.168.101.46:3333/noticia`, {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, data);
}

module.exports = upload;