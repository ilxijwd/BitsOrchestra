"use client";
import IProduct from "@/interfaces/IProduct";
import { cx } from "@/lib/cx";
import Image from "next/image";
import { useState } from "react";
import { RiHeart3Line, RiCircleFill } from "react-icons/ri";

interface ProductProps extends IProduct {}

const Product: React.FC<ProductProps> = (props) => {
  const { id, name, price, manufacturer, availableAt, imageSrc } = props;
  const [isMouseOverImage, setIsMouseOverImage] = useState(false);

  return (
    <div className="p-2 hover:outline outline-gray-400 max-w-xs">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsMouseOverImage(true)}
        onMouseLeave={() => setIsMouseOverImage(false)}
      >
        <Image
          className={cx("transition", isMouseOverImage && "brightness-75")}
          src={imageSrc}
          alt="furniture image"
          width={1024}
          height={1024}
          priority={false}
        />
        <div
          className={cx(
            "absolute top-0 left-0 p-2 bg-cyan-700",
            !isMouseOverImage && "hidden"
          )}
        >
          <div className="text-xs text-white">Shop by Room</div>
        </div>
        <button className="absolute top-1 right-1">
          <RiHeart3Line className="text-white" size={36} />
        </button>
        <div
          className={cx(
            "underline capitalize absolute bottom-2 left-2 text-white text-2xl underline-offset-4",
            !isMouseOverImage && "hidden"
          )}
        >
          product details
        </div>
      </div>
      <div className="flex justify-between">
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div className="text-xs">{manufacturer}</div>
      <div className="flex justify-between mt-1">
        <div className="flex items-center gap-1">
          <RiCircleFill
            size={12}
            className={cx(
              availableAt === null ? "text-red-500" : "text-green-500"
            )}
          />
          <div className="text-xs">{availableAt ?? "Not available"}</div>
        </div>
        <div className="flex gap-1">
          <label htmlFor={`compare-${id}`} className="text-xs">
            Compare
          </label>
          <input
            type="checkbox"
            id={`compare-${id}`}
            name={`compare-${id}`}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
