import { memo } from "react";
import Rating from "react-rating";
import { MdOutlineStarPurple500 } from "react-icons/md";
function RatingBox({ value, onChange, readonly = true }) {
    return <> <Rating fullSymbol={<MdOutlineStarPurple500 color="#FFC200"/>} emptySymbol={<MdOutlineStarPurple500 color="#ffffff54"/>} initialRating={value} readonly={readonly} onChange={onChange}/></>;
}
export default memo(RatingBox);
