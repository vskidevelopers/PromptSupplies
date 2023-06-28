// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getFirestore,
  getDocs,
  getDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1TuvhsJA5wcO41jq1bA7I90Uo7xw6kD0",
  authDomain: "prompt-supplies.firebaseapp.com",
  projectId: "prompt-supplies",
  storageBucket: "prompt-supplies.appspot.com",
  messagingSenderId: "740342027039",
  appId: "1:740342027039:web:4d61e2aee62449a33cd62a",
  measurementId: "G-CHV5DQZL0M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

export const useCallUsServicesFunctions = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [serviceItems, setServiceItems] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fetchServiceItems = async () => {
    const serviceItems = await getDocs(collection(db, "CallUsServices"));
    const serviceItemsData = serviceItems.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("setting doc items into serviceItemsData. ..");
    setServiceItems(serviceItemsData);
    console.log("complete! serviceItemsData >>", serviceItemsData);
  };

  useEffect(() => {
    fetchServiceItems();
  }, []);

  const fetchServiceDetails = async (serviceId) => {
    const serviceRef = doc(db, "CallUsServices", serviceId);
    const serviceSnap = await getDoc(serviceRef);
    if (serviceSnap.exists()) {
      setServiceDetails(serviceSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchServiceDetails();
  }, []);

  const uploadServicePoster = async (file) => {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "callusposters/" + file.name);
    try {
      setLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(parseInt(parseFloat(progress).toFixed(0)));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImageURL(downloadURL);
            setLoading(false);
          });
        }
      );
    } catch (err) {
      console.log("the folloing error occured >>", err);
    }
  };

  const handlePostServiceData = async (data) => {
    try {
      setLoading(true);
      const serviceRef = doc(collection(db, "CallUsServices"));
      await setDoc(serviceRef, data);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setError(err);
      console.error("An Error Occurred >>", err);
    }
  };

  return {
    uploadServicePoster,
    handlePostServiceData,
    fetchServiceDetails,
    serviceDetails,
    imageURL,
    success,
    error,
    loading,
    serviceItems,
    uploadProgress,
  };
};
