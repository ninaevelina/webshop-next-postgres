"use client";

import { useWishlist } from "@/app/lib/contexts/wishlist-context";
import Image from "next/image";
import Link from "next/link";
import "./wishlist.scss";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const hasWishlistItems = wishlist.length > 0;

  return (
    <section className="wishlist-section">
      <div className="wishlist-header">
        {hasWishlistItems ? (
          <h1>My wishlist</h1>
        ) : (
          <h1>Your wishlist is currently empty</h1>
        )}
      </div>
      {hasWishlistItems && (
        <ul className="wishlist">
          {wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <Link href={`/books/${item.id}`} className="item-card">
                <div className="item-card__image-container">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    loading="lazy"
                    height={100}
                    width={75}
                    className="item-card__image-container--image"
                  />
                </div>
                <div className="item-card__book-details">
                  <p className="item-card__book-details--name">{item.name}</p>
                  <p>{item.author_name}</p>
                  <p>{item.price} SEK</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
