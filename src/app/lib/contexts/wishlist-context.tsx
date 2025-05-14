"use client";

import { Book } from "../definitions";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface WishlistContextProps {
  wishlist: Book[];
  addToWishlist: (book: Book) => void;
  removeFromWishlist: (book: Book) => void;
  isInWishlist: (book: Book) => boolean;
}

interface WishlistProviderProps {
  children: ReactNode;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<Book[]>(() => {
    try {
      const wishlistLS = localStorage.getItem("wishlist");
      return wishlistLS ? JSON.parse(wishlistLS) : [];
    } catch (error) {
      console.error("Failed to get wishlist from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (book: Book) => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
    console.log(`Added ${book.name} to wishlist`);
  };

  const removeFromWishlist = (book: Book) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== book.id)
    );
  };

  const isInWishlist = (book: Book) => {
    return wishlist.some((item) => item.id === book.id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within the WishlistProvider");
  }
  return context;
};
