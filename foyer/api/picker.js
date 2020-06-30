import ImagePicker from 'react-native-image-picker'

var options = {
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

let pick = (cb) => {
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      cb(source, response.data, response.fileName);
    }
  });
}

module.exports = pick;