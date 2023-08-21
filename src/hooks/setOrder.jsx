import { useState } from 'react';
import {
  getFirestore, collection, addDoc, serverTimestamp,
} from 'firebase/firestore';

const useOrders = () => {
  const [ordersLoading, setOrdersLoading] = useState(false);

  const createOrder = async (products) => {
    setOrdersLoading(true);

    try {
      const db = getFirestore();
      const ordersCollectionRef = collection(db, 'orders');

      const newOrder = {
        products,
        date: serverTimestamp(),
      };

      await addDoc(ordersCollectionRef, newOrder);
    } catch (error) {
      console.error('Error al crear la orden', error);
    } finally {
      setOrdersLoading(false);
    }
  };

  return {
    createOrder,
    ordersLoading,
  };
};

export default useOrders;
