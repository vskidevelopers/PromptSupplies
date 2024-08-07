/* eslint-disable no-unused-vars */
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
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
export const auth = getAuth(app);

export const useCallUsServicesFunctions = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [allServiceItems, setAllServiceItems] = useState([]);
  const [pendingServiceItems, setPendingServiceItems] = useState([]);
  const [approvedServiceItems, setApprovedServiceItems] = useState([]);
  const [popularServiceItems, setPopularServiceItems] = useState([]);
  const [featuredServiceItems, setFeaturedServiceItems] = useState([]);
  const [offerServiceItems, setOfferServiceItems] = useState([]);
  const [salesServiceItems, setSalesServiceItems] = useState([]);
  const [dealsServiceItems, setDealsServiceItems] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fetchServiceItems = async () => {
    const serviceItemsRef = collection(db, "CallUsServices");
    const serviceSnapshot = await getDocs(serviceItemsRef);

    // fetchAllAds
    const serviceItemsData = serviceSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchApprovedAds
    const approved = query(
      serviceItemsRef,
      where("approved", "==", true),
      where("offer", "==", false),
      where("sale", "==", false),
      where("popular", "==", false),
      where("featured", "==", false)
    );
    const approvedQuerySnapshot = await getDocs(approved);
    const approvedItemsData = approvedQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchPopularAds
    const popular = query(serviceItemsRef, where("popular", "==", true));
    const popularQuerySnapshot = await getDocs(popular);
    const popularItemsData = popularQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchFeaturedAds
    const featured = query(serviceItemsRef, where("featured", "==", true));
    const featuredQuerySnapshot = await getDocs(featured);
    const featuredItemsData = featuredQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchOfferAds
    const offer = query(serviceItemsRef, where("offer", "==", true));
    const offerQuerySnapshot = await getDocs(offer);
    const offerItemsData = offerQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchSalesAds
    const sales = query(serviceItemsRef, where("sales", "==", true));
    const salesQuerySnapshot = await getDocs(sales);
    const salesItemsData = salesQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchPendingAds
    const pending = query(serviceItemsRef, where("approved", "==", false));
    const pendingQuerySnapshot = await getDocs(pending);
    const pendingItemsData = pendingQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchDealsAds
    const querySale = query(serviceItemsRef, where("sale", "==", true));
    const queryOffer = query(serviceItemsRef, where("offer", "==", true));

    const querySaleSnapshot = await getDocs(querySale);
    const queryOfferSnapshot = await getDocs(queryOffer);
    // const [querySaleSnapshot, queryOfferSnapshot] = await Promise.all([
    //   getDocs(querySale),
    //   getDocs(queryOffer),
    // ]);

    const dealsQuerySnapshot = [
      ...querySaleSnapshot.docs,
      ...queryOfferSnapshot.docs,
    ];

    const dealsItemsData = dealsQuerySnapshot.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("setting doc items into serviceItemsData. ..");
    setAllServiceItems(serviceItemsData);
    setApprovedServiceItems(approvedItemsData);
    setPendingServiceItems(pendingItemsData);
    setFeaturedServiceItems(featuredItemsData);
    setPopularServiceItems(popularItemsData);
    setOfferServiceItems(offerItemsData);
    setSalesServiceItems(salesItemsData);
    setDealsServiceItems(dealsItemsData);
    console.log("complete! serviceItemsData >>", serviceItemsData);
    console.log("complete! serviceItemsData >>", typeof serviceItemsData);
    console.log("complete! approvedServiceItemsData >>", approvedItemsData);
    console.log("complete! pendingServiceItemsData >>", pendingItemsData);
    console.log("complete! popularServiceItemsData >>", popularItemsData);
    console.log("complete! dealsServiceItemsData >>", dealsItemsData);
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

  const handleDeleteServiceItem = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "CallUsServices", id));
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setError(err);
    }
  };

  const handleApproveServiceItem = async (id) => {
    try {
      setLoading(true);
      const serviceItemRef = doc(db, "CallUsServices", id);
      await updateDoc(serviceItemRef, {
        approved: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setError(err);
    }
  };

  const handleMakePopular = async (id) => {
    try {
      setLoading(true);
      const serviceItemRef = doc(db, "CallUsServices", id);
      await updateDoc(serviceItemRef, {
        popular: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setError(err);
    }
  };

  const handleMakeFeatured = async (id) => {
    try {
      setLoading(true);
      const serviceItemRef = doc(db, "CallUsServices", id);
      await updateDoc(serviceItemRef, {
        featured: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setError(err);
    }
  };

  const handleMakeSale = async (id) => {
    try {
      setLoading(true);
      const serviceItemRef = doc(db, "CallUsServices", id);
      await updateDoc(serviceItemRef, {
        sale: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setError(err);
    }
  };

  const handleMakeOffer = async (id) => {
    try {
      setLoading(true);
      const serviceItemRef = doc(db, "CallUsServices", id);
      await updateDoc(serviceItemRef, {
        offer: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setError(err);
    }
  };

  return {
    uploadServicePoster,
    handlePostServiceData,
    fetchServiceDetails,
    handleDeleteServiceItem,
    handleApproveServiceItem,
    handleMakeFeatured,
    handleMakeOffer,
    handleMakeSale,
    handleMakePopular,
    serviceDetails,
    imageURL,
    success,
    error,
    loading,
    allServiceItems,
    approvedServiceItems,
    pendingServiceItems,
    popularServiceItems,
    featuredServiceItems,
    offerServiceItems,
    salesServiceItems,
    uploadProgress,
    dealsServiceItems,
  };
};

export const useVipServicesFunctions = () => {
  const [vipSuccess, setVipSuccess] = useState(false);
  const [vipError, setVipError] = useState(null);
  const [vipLoading, setVipLoading] = useState(false);
  const [vipImageURL, setVipImageURL] = useState(null);
  const [allVipAdsItems, setAllVipAdsItems] = useState([]);
  const [pendingVipAdsItems, setPendingVipAdsItems] = useState([]);
  const [approvedVipAdsItems, setApprovedVipAdsItems] = useState([]);
  const [featuredVipAdsItems, setFeaturedVipAdsItems] = useState([]);
  const [vipAdvertDetails, setVipAdvertDetails] = useState([]);
  const [uploadVipProgress, setUploadVipProgress] = useState(0);

  const fetchVipAdverts = async () => {
    const vipAdvertsRef = collection(db, "VipServices");
    const vipAdvertsSnapshot = await getDocs(vipAdvertsRef);

    // fetchAllVipAds
    const vipAdvertsData = vipAdvertsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchApprovedAds
    const approvedVipAds = query(
      vipAdvertsRef,
      where("approved", "==", true),
      where("featured", "==", false)
    );
    const approvedVipAdsQuerySnapshot = await getDocs(approvedVipAds);
    const approvedVipAdsData = approvedVipAdsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchPendingAds
    const pendingVipAds = query(vipAdvertsRef, where("approved", "==", false));
    const pendingVipAdsQuerySnapshot = await getDocs(pendingVipAds);
    const pendingVipAdsData = pendingVipAdsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetchFeaturedAds
    const featuredVipAds = query(vipAdvertsRef, where("featured", "==", true));
    const featuredVipAdsQuerySnapshot = await getDocs(featuredVipAds);
    const featuredVipAdsData = featuredVipAdsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("setting doc items into serviceItemsData. ..");
    setAllVipAdsItems(vipAdvertsData);
    setApprovedVipAdsItems(approvedVipAdsData);
    setPendingVipAdsItems(pendingVipAdsData);
    setFeaturedVipAdsItems(featuredVipAdsData);

    console.log("complete! serviceItemsData >>", vipAdvertsData);

    console.log("complete! approvedServiceItemsData >>", approvedVipAdsData);
    console.log("complete! approvedServiceItemsData >>", pendingVipAdsData);
  };
  useEffect(() => {
    fetchVipAdverts();
  }, []);

  const fetchVipAdDetails = async (serviceId) => {
    const vipAdvertRef = doc(db, "VipServices", serviceId);
    const vipAdvertSnap = await getDoc(vipAdvertRef);
    if (vipAdvertSnap.exists()) {
      setVipAdvertDetails(vipAdvertSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchVipAdDetails();
  }, []);

  const uploadVipAdvertPoster = async (file) => {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const vipStorageRef = ref(storage, "vipposters/" + file.name);
    try {
      setVipLoading(true);
      const uploadTask = uploadBytesResumable(vipStorageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const vipProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + vipProgress + "% done");
          setUploadVipProgress(parseInt(parseFloat(vipProgress).toFixed(0)));

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
            setVipImageURL(downloadURL);
            setVipLoading(false);
          });
        }
      );
    } catch (err) {
      console.log("the folloing error occured >>", err);
    }
  };

  const handlePostVipAdvert = async (data) => {
    try {
      setVipLoading(true);
      const vipAdvertsRef = doc(collection(db, "VipServices"));
      await setDoc(vipAdvertsRef, data);
      setVipLoading(false);
      setVipSuccess(true);
    } catch (err) {
      setVipError(err);
      console.error("An Error Occurred >>", err);
    }
  };

  const handleDeleteVipAdvert = async (id) => {
    try {
      setVipLoading(true);
      await deleteDoc(doc(db, "VipServices", id));
      setVipLoading(false);
      setVipSuccess(true);
    } catch (err) {
      setVipError(err);
    }
  };

  const handleApproveVipAdvert = async (id) => {
    try {
      setVipLoading(true);
      const vipAdvertRef = doc(db, "VipServices", id);
      await updateDoc(vipAdvertRef, {
        approved: true,
      });
      setVipLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setVipError(err);
    }
  };

  const handleMakeVipFeatured = async (id) => {
    try {
      setVipLoading(true);
      const vipAdvertRef = doc(db, "VipServices", id);
      await updateDoc(vipAdvertRef, {
        featured: true,
      });
      setVipLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setVipError(err);
    }
  };

  return {
    vipSuccess,
    vipError,
    vipLoading,
    vipImageURL,
    allVipAdsItems,
    featuredVipAdsItems,
    approvedVipAdsItems,
    pendingVipAdsItems,
    vipAdvertDetails,
    uploadVipProgress,
    uploadVipAdvertPoster,
    handlePostVipAdvert,
    handleDeleteVipAdvert,
    handleApproveVipAdvert,
    handleMakeVipFeatured,
  };
};

export const useUpcomingEventsFunctions = () => {
  const [eventsSuccess, setEventsSuccess] = useState(false);
  const [eventsError, setEventsError] = useState(null);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventImageURL, setEventImageURL] = useState(null);
  const [uploadEventProgress, setUploadEventProgress] = useState(null);

  const [allUpcomingEvents, setAllUpcomingEvents] = useState([]);
  const [approvedUpcomingEvents, setApprovedUpcomingEvents] = useState([]);
  const [pendingUpcomingEvents, setPendingUpcomingEvents] = useState([]);
  const [upcomingEventDetails, setUpcomingEventDetails] = useState([]);

  // fetch data
  const getUpcomingEventsData = async () => {
    const upcomingEventsRef = collection(db, "UpcomingEvents");
    const upcomingEventsSnapshot = await getDocs(upcomingEventsRef);

    // fetch all events
    const upcomingEventsData = upcomingEventsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetch approved Events
    const approvedEvents = query(
      upcomingEventsRef,
      where("approved", "==", true)
    );
    const approvedEventsQuerySnapshot = await getDocs(approvedEvents);
    const approvedEventsData = approvedEventsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fecth pending Events
    const pendingEvents = query(
      upcomingEventsRef,
      where("approved", "==", false)
    );
    const pendingEventsQuerySnapshot = await getDocs(pendingEvents);
    const pendingEventsData = pendingEventsQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetch passed events

    console.log("setting doc items into serviceItemsData. ..");
    setAllUpcomingEvents(upcomingEventsData);
    setApprovedUpcomingEvents(approvedEventsData);
    setPendingUpcomingEvents(pendingEventsData);
  };

  useEffect(() => {
    getUpcomingEventsData();
  }, []);

  const getUpcomingEventDetails = async (eventId) => {
    const upcomingEventRef = doc(db, "UpcomingEvents", eventId);
    const upcomingEventSnap = await getDoc(upcomingEventRef);
    if (upcomingEventSnap.exists()) {
      setUpcomingEventDetails(upcomingEventSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUpcomingEventDetails();
  }, []);

  // Post Data

  const uploadUpcomingEventPoster = async (file) => {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const upcomingEventStorageRef = ref(storage, "eventposter/" + file.name);
    try {
      setEventsLoading(true);
      const uploadTask = uploadBytesResumable(
        upcomingEventStorageRef,
        file,
        metadata
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const upcomingEventProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + upcomingEventProgress + "% done");
          setUploadEventProgress(
            parseInt(parseFloat(upcomingEventProgress).toFixed(0))
          );

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
            setEventImageURL(downloadURL);
            setEventsLoading(false);
          });
        }
      );
    } catch (err) {
      console.log("the folloing error occured >>", err);
    }
  };

  const handlePostUpcomingEvent = async (data) => {
    try {
      setEventsLoading(true);
      const upcomingEventsRef = doc(collection(db, "UpcomingEvents"));
      await setDoc(upcomingEventsRef, data);
      setEventsLoading(false);
      setEventsSuccess(true);
    } catch (err) {
      setEventsError(err);
      console.error("An Error Occurred >>", err);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      setEventsLoading(true);
      await deleteDoc(doc(db, "UpcomingEvents", id));
      setEventsLoading(false);
      setEventsSuccess(true);
    } catch (err) {
      setEventsError(err);
    }
  };

  const handleApproveUpcomingEvents = async (id) => {
    try {
      setEventsLoading(true);
      const upcomingEventsRef = doc(db, "UpcomingEvents", id);
      await updateDoc(upcomingEventsRef, {
        approved: true,
      });
      setEventsLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setEventsError(err);
    }
  };

  return {
    eventsSuccess,
    eventsError,
    eventsLoading,
    eventImageURL,
    uploadEventProgress,
    allUpcomingEvents,
    approvedUpcomingEvents,
    pendingUpcomingEvents,
    upcomingEventDetails,
    uploadUpcomingEventPoster,
    handlePostUpcomingEvent,
    handleDeleteEvent,
    handleApproveUpcomingEvents,
  };
};

export const useBlogFunctions = () => {
  const [blogSuccess, setBlogSuccess] = useState(false);
  const [blogError, setBlogError] = useState(null);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogImageURL, setBlogImageURL] = useState(null);
  const [uploadBlogProgress, setUploadBlogProgress] = useState(null);

  const [allBlogs, setAllBlogs] = useState([]);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [unpublishedBlogs, setUnpublishedBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState([]);

  // fetch data
  const getBlogsData = async () => {
    const blogsRef = collection(db, "Blogs");
    const blogsSnapshot = await getDocs(blogsRef);

    // fetch all Blogs
    const allBlogsData = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetch published blogs
    const publishedBlogs = query(blogsRef, where("approved", "==", true));
    const publishedBlogsSnapshot = await getDocs(publishedBlogs);
    const publishedBlogsData = publishedBlogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fetch featured blogs
    const featuredBlogs = query(blogsRef, where("featured", "==", true));
    const featuredBlogsSnapshot = await getDocs(featuredBlogs);
    const featuredBlogsData = featuredBlogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // fecth unpublished Blogs
    const unpublishedBlogs = query(blogsRef, where("approved", "==", false));
    const unpublishedBlogsSnapshot = await getDocs(unpublishedBlogs);
    const unpublishedBlogsData = unpublishedBlogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("setting doc items into serviceItemsData. ..");
    setAllBlogs(allBlogsData);
    setPublishedBlogs(publishedBlogsData);
    setFeaturedBlogs(featuredBlogsData);
    setUnpublishedBlogs(unpublishedBlogsData);
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  const getBlogDetails = async (blogId) => {
    const blogRef = doc(db, "Blogs", blogId);
    const blogSnapshot = await getDoc(blogRef);
    if (blogSnapshot.exists()) {
      setBlogDetails(blogSnapshot.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  // Post Data

  const uploadBlogPoster = async (file) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const blogsStorageRef = ref(storage, "blogposters/" + file.name);
    try {
      setBlogLoading(true);
      const uploadTask = uploadBytesResumable(blogsStorageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const blogProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + blogProgress + "% done");
          setUploadBlogProgress(parseInt(parseFloat(blogProgress).toFixed(0)));

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
            setBlogImageURL(downloadURL);
            setBlogLoading(false);
          });
        }
      );
    } catch (err) {
      console.log("the folloing error occured >>", err);
    }
  };

  const handlePostBlog = async (data) => {
    try {
      setBlogLoading(true);
      const blogRef = doc(collection(db, "Blogs"));
      await setDoc(blogRef, data);
      setBlogLoading(false);
      setBlogSuccess(true);
    } catch (err) {
      setBlogError(err);
      console.error("An Error Occurred >>", err);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      setBlogLoading(true);
      await deleteDoc(doc(db, "Blogs", id));
      setBlogLoading(false);
      setBlogSuccess(true);
    } catch (err) {
      setBlogError(err);
    }
  };

  const handlePublishBlog = async (id) => {
    try {
      setBlogLoading(true);
      const blogsRef = doc(db, "Blogs", id);
      await updateDoc(blogsRef, {
        published: true,
      });
      setBlogLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setBlogError(err);
    }
  };

  const handleMakeBlogFeatured = async (id) => {
    try {
      setBlogLoading(true);
      const blogsRef = doc(db, "Blogs", id);
      await updateDoc(blogsRef, {
        featured: true,
      });
      setBlogLoading(false);
    } catch (err) {
      console.log("The folowing error occured >> ", err);
      setBlogError(err);
    }
  };

  return {
    blogSuccess,
    blogError,
    blogLoading,
    blogImageURL,
    uploadBlogProgress,
    allBlogs,
    publishedBlogs,
    featuredBlogs,
    unpublishedBlogs,
    blogDetails,

    uploadBlogPoster,
    getBlogDetails,
    handlePostBlog,
    handlePublishBlog,
    handleMakeBlogFeatured,
    handleDeleteBlog,
  };
};

// AUTHENTICATION
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState();

  useEffect(() => {
    // Set up an observer to listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      // Authenticate the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      // Optionally perform any additional actions after successful login
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed", error.code);
      setAuthError(error.code);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  return { user, authError, login, logout };
};

// PARTNERS
export const usePartnersFunctions = () => {
  const [partnersSuccess, setPartnersSuccess] = useState(false);
  const [partnersError, setPartnersError] = useState(null);
  const [partnersLoading, setPartnersLoading] = useState(false);
  const [partnersImageURL, setPartnersImageURL] = useState(null);
  const [uploadPartnersProgress, setUploadPartnersProgress] = useState(null);

  const [allPartners, setAllPartners] = useState([]);

  // fetch data
  const getPartnersData = async () => {
    const partnersRef = collection(db, "Partners");
    const partnersSnapshot = await getDocs(partnersRef);

    // fetch all Blogs
    const allPartnersData = partnersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("setting doc items into serviceItemsData. ..");
    setAllPartners(allPartnersData);
  };

  useEffect(() => {
    getPartnersData();
  }, []);

  // Post Data

  const uploadPartnersLogo = async (file) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const partnersStorageRef = ref(storage, "partnersLogos/" + file.name);
    try {
      setPartnersLoading(true);
      const uploadTask = uploadBytesResumable(
        partnersStorageRef,
        file,
        metadata
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const partnersProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + partnersProgress + "% done");
          setUploadPartnersProgress(
            parseInt(parseFloat(partnersProgress).toFixed(0))
          );

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
            setPartnersImageURL(downloadURL);
            setPartnersLoading(false);
          });
        }
      );
    } catch (err) {
      console.log("the folloing error occured >>", err);
    }
  };

  const handlePostParnersData = async (data) => {
    try {
      setPartnersLoading(true);
      const partnersRef = doc(collection(db, "Partners"));
      await setDoc(partnersRef, data);
      setPartnersLoading(false);
      setPartnersSuccess(true);
    } catch (err) {
      setPartnersError(err);
      console.error("An Error Occurred >>", err);
    }
  };

  const handleDeletePartnersData = async (id) => {
    try {
      setPartnersLoading(true);
      await deleteDoc(doc(db, "Partners", id));
      setPartnersLoading(false);
      setPartnersSuccess(true);
    } catch (err) {
      setPartnersError(err);
    }
  };

  return {
    allPartners,
    partnersSuccess,
    partnersError,
    partnersImageURL,
    partnersLoading,
    uploadPartnersProgress,

    uploadPartnersLogo,
    handlePostParnersData,
    handleDeletePartnersData,
  };
};

// MOVIES
export const useMovieFunctions = () => {
  const [moviePosterUploadProgress, setMoviePosterUploadProgress] = useState(0);
  const [moviePosterURL, setMoviePosterURL] = useState(null);
  const [loading, setLoading] = useState(false);
  //    addMovie
  //    updateMovieStatus
  //    fetchSingleMovie
  //    getAllMoviesByType (e.g., genre)
  //    getAllMovies

  const uploadMoviePoster = (file) => {
    const result = {
      data: null,
      status: "pending",
    };

    console.log("uploading_product_image >>", file);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "moviePosters/" + file.name);

    try {
      setLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload_is " + progress + "% done");
          setMoviePosterUploadProgress(
            parseInt(parseFloat(progress).toFixed(0))
          );

          switch (snapshot.state) {
            case "paused":
              console.log("upload_is_paused");
              break;
            case "running":
              console.log("upload_is_running");
              break;
          }
        },
        (error) => {
          // Handle errors
          result.status = "error";
          result.error = error;
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              setMoviePosterURL(downloadURL);
              setLoading(false);
              // Update the result object with the download URL and status
              result.data = downloadURL;
              result.status = "success";
            })
            .catch((error) => {
              // Handle errors when getting the download URL
              result.status = "error";
              result.error = error;
            });
        }
      );
    } catch (err) {
      // Handle any other errors that may occur
      console.log("the_following_error_occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result;
  };

  const addMovie = async (data) => {
    const movieCategory = data?.category;
    const movieCollectionRef = collection(
      db,
      "Movies",
      movieCategory,
      movieCategory
    );
    try {
      const newMovieRef = doc(movieCollectionRef);
      await setDoc(newMovieRef, data);
      alert(`movie ${data?.name} added successfully`);
      return { success: true, message: "Movie added successfully" };
    } catch (error) {
      console.log("Error in adding product >>> ", error);
      return { success: false, message: "Failed to add the movie" };
    }
  };

  const getAllMoviesByCategory = async (movieCategory) => {
    const movieCollectionRef = collection(
      db,
      "Movies",
      movieCategory,
      movieCategory
    );
    const movieQuery = query(movieCollectionRef);

    const movieSnapshot = await getDocs(movieQuery);

    if (movieSnapshot?.empty) {
      console.log("No movie exists in the selected Category");
      return {
        success: false,
        data: [],
        message: `No movie exists in the selected Category >> ${movieCategory}`,
      };
    } else {
      console.log("movieSnapshot from fetchMovie >> ", movieSnapshot);
      const movieData = movieSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return {
        success: true,
        data: movieData,
        message: "Movies exist in the selected category",
      };
    }
  };

  const updateMovieStatusById = async (id, status, movieType) => {
    console.log(`movie_id : ${id} ||  Status : ${status}`);
    const movieDocRef = doc(db, "Movies", movieType, movieType, id);
    try {
      const movieToUpdateSnapshot = await getDoc(movieDocRef);
      if (movieToUpdateSnapshot.exists()) {
        console.log(
          "movie_found_and_ready_for_update >> ",
          movieToUpdateSnapshot
        );
        await updateDoc(movieDocRef, {
          status: status,
        });
        return {
          success: true,
          message: "Movie updated Successfully",
          status: status,
        };
      }
    } catch (error) {
      console.log("error occurred trying to update a movie");
      return {
        success: false,
        message: "Failed to update the movie",
        error: error,
      };
    }
  };

  return {
    moviePosterUploadProgress,
    moviePosterURL,
    addMovie,
    getAllMoviesByCategory,
    updateMovieStatusById,
    uploadMoviePoster,
  };
};
