import "./wishlist-button.scss";

interface WishlistButtonProps {
  onClick: () => void;
  isFilled: boolean;
  wishlistLength?: number;
  displayText?: boolean;
  isInHeader: boolean;
}

export default function WishlistButton({
  onClick,
  isFilled,
  wishlistLength,
  displayText = false,
  isInHeader,
}: WishlistButtonProps) {
  return (
    <div
      className={
        isInHeader
          ? "wishlist-button-container-header"
          : "wishlist-button-container"
      }
    >
      <button
        onClick={onClick}
        type="button"
        aria-label={isFilled ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={isFilled}
        className={
          isInHeader
            ? "wishlist-button-container-header__wishlist-button-header"
            : "wishlist-button"
        }
      >
        {displayText && (
          <span>{isFilled ? "Remove from wishlist" : "Add to wishlist"}</span>
        )}
        <svg
          viewBox="0 0 20 20"
          fill={isFilled ? "#c30010" : "none"}
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "20px", width: "20px" }}
          role="img"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            d="M10 6.67c-.94-2.69-2.5-4.03-4.67-4.03-4.01 0-5.48 4.5-3.05 7.3 1.63 1.88 4.28 4.64 7.96 8.3 3.42-3.64 5.94-6.41 7.56-8.3 2.43-2.82.96-7.3-2.66-7.3-2.42 0-4.13 1.34-5.14 4.03Z"
            fill={isFilled ? "#c30010" : "#fff"}
            fillOpacity="0.4"
            stroke="currentColor"
          ></path>
        </svg>
      </button>
      {wishlistLength !== undefined && wishlistLength > 0 && (
        <span
          style={{ display: "inline-block", paddingLeft: "8px" }}
          aria-label={`${wishlistLength} items in wishlist`}
        >
          {wishlistLength}
        </span>
      )}
    </div>
  );
}
