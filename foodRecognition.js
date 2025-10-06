import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';


let model;


export async function loadModel() {
await tf.ready();
const modelJSON = await FileSystem.readAsStringAsync(
FileSystem.documentDirectory + 'food_recognition_model.tflite'
);
model = await tf.loadGraphModel(modelJSON);
}


export async function recognizeFood(imageTensor) {
if (!model) await loadModel();
const prediction = model.predict(imageTensor);
const index = prediction.argMax(-1).dataSync()[0];
return index;
}
