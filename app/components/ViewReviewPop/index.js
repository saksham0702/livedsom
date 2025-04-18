import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import ReviewPopup from "../ReviewPopup";

const ViewReviewPop = ({ isClose, isOpen, title, reviews }) => {
  const [pop, setPop] = useState(false);
  // Ratings data calculation
  const totalReviews = reviews?.length || 0;
  const ratingCounts = [0, 0, 0, 0, 0];

  reviews?.forEach((review) => {
    const index = parseInt(review.rating) - 1;
    if (index >= 0 && index < 5) ratingCounts[index]++;
  });

  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((sum, r) => sum + parseInt(r.rating), 0) / totalReviews
        ).toFixed(1)
      : 0;

  return (
    <>
      {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-full top-0 left-0 flex items-center  justify-center">
          <div className=" relative h-[95vh] w-xl bg-white overflow-y-scroll mx-2 rounded-lg ">
            {/* Header */}
            <div className="flex justify-between font-semibold p-2">
              <div className="max-w-sm">
                <h1 className="text-start mb-2 sm:text-2xl text-[18px] font-medium">
                  {title}
                </h1>
              </div>
              <button
                onClick={isClose}
                className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-500"
              >
                <RxCross1 />
              </button>
            </div>
            <hr className="h-[1px] w-full py-1" />

            {/* Summary Section */}
            <div className="px-4 flex items-center justify-between">
              <div className=" pr-5 w-3/4">
                {[5, 4, 3, 2, 1].map((star, idx) => {
                  const count = ratingCounts[star - 1];
                  const percentage = totalReviews
                    ? (count / totalReviews) * 100
                    : 0;

                  return (
                    <div
                      key={star}
                      className="flex  items-center space-x-2 mb-1"
                    >
                      <span className="text-sm w-4">{star}</span>
                      <div className="w-full bg-gray-800 rounded h-2">
                        <div
                          className="bg-yellow-300 h-2 rounded"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-between pr-5 items-center mt-3">
                <button
                  onClick={() => setPop(true)}
                  className=" sm:text-lg text-[14px] whitespace-nowrap underline mb-2"
                >
                  + Write a Review
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-semibold">
                    {averageRating}
                  </span>
                  <div className="flex text-orange-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(averageRating)
                            ? "text-orange-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">({totalReviews})</p>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <h1 className=" font-semibold pl-2 capitalize ">filter by</h1>
            <div className="flex flex-wrap pl-2 gap-2 mt-2 mb-4">
              {["Oldest", "Newest", "Highest", "Lowest"].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-100"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* All Reviews */}
            <div className="h-[70vh]  px-5 pb-4">
              {reviews?.map((item) => {
                const reviewDate = new Date(item.date);
                const currentDate = new Date();
                const yearsAgo = Math.floor(
                  (currentDate - reviewDate) / (1000 * 60 * 60 * 24 * 365.25)
                );
                const rating = parseInt(item.rating);

                return (
                  <div key={item.id} className="mt-4  flex-wrap pb-2 mb-8">
                    <h1 className="font-semibold">{item.author}</h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={
                              index < rating
                                ? "text-orange-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p>{yearsAgo} years ago</p>
                    </div>
                    <p className="text-gray-700 mt-2 truncate">{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <ReviewPopup isOpen={pop} isClose={() => setPop(false)} />
    </>
  );
};

export default ViewReviewPop;
