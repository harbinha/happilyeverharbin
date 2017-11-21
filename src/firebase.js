import Firebase from 'firebase';

const conf = {
    apiKey: "AIzaSyD6TC_TqQ_8uFgn1VLkxMpT7FGFQ-RZrPU",
    authDomain: "happilyeverharbin-682dc.firebaseapp.com",
    databaseURL: "https://happilyeverharbin-682dc.firebaseio.com",
    projectId: "happilyeverharbin-682dc",
    storageBucket: "",
    messagingSenderId: "886292518859"
};
export const fb = Firebase.initializeApp(conf);