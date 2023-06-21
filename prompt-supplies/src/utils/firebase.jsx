// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
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
export const storage = getStorage(app);

export const useCallUsServicesFunctions = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [serviceItems, setServiceItems] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);

  const fetchServiceItems = async () => {
    const serviceItems = await getDocs(collection(db, "CallUsServices"));
    const serviceItemsData = serviceItems.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setServiceItems(serviceItemsData);
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
    try {
      setLoading(true);
      const servicePosterStorageRef = ref(
        storage,
        "callusposters/" + file.name
      );
      await uploadBytes(servicePosterStorageRef, file);
      console.log("Uploaded Image #", file.name);

      // get download url
      try {
        const url = await getDownloadURL(servicePosterStorageRef);
        setImageURL(url);
        console.log("ImageURL >>", imageURL);
      } catch (err) {
        setError(err);
        console.error(
          "The following error occured during image upload >>",
          err
        );
      }
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setError(err);
      console.error(
        "The following error occured during menuItem upload >>",
        err
      );
      setSuccess(false);
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
  };
};
