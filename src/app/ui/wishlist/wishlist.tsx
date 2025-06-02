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
                    sizes="(min-width: 768px) 25vw, 50vw"
                    style={{
                      objectFit: "contain",
                      maxHeight: "100%",
                      padding: "20px 0px",
                    }}
                    fill
                    className="item-card__image-container--image"
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
