"use client";
import IReview from "@/interfaces/IReview";
import Review from "./Review";
import { useState } from "react";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import reviewFormSchema from "@/schemas/reviewFormSchema";

interface ReviewsProps {
  reviews: IReview[];
}

const Reviews: React.FC<ReviewsProps> = (props) => {
  const [reviews, setReviews] = useState<IReview[]>(props.reviews);

  return (
    <div className="max-w-5xl w-full bg-slate-200 px-4 md:px-16 py-4">
      <div className="flex flex-col gap-8">
        {reviews.map((review) => (
          <Review key={`review-${review.id}`} {...review} />
        ))}
      </div>
      <hr className="border-gray-300 my-8" />
      <button className="uppercase underline underline-offset-4 font-bold text-sm">
        read all reviews
      </button>

      <div className="mt-16 text-3xl">Leave a Review</div>
      <div className="mt-2">
        Your email address will not be published. Required fields are marked *
      </div>
      <Formik
        initialValues={{
          comment: "",
          name: "",
          email: "",
          phone: "",
          save: false,
        }}
        validationSchema={reviewFormSchema}
        onSubmit={(values, { resetForm }) => {
          const { comment, name } = values;
          setReviews((prev) => [
            ...prev,
            { id: prev.length + 1, comment, name, publishedAt: Date.now() },
          ]);
          resetForm();
        }}
      >
        <Form>
          <div className="my-4">
            <Field name="comment">
              {({ field }: FieldProps) => {
                return (
                  <textarea
                    id="comment"
                    name="comment"
                    cols={30}
                    rows={10}
                    className="w-full px-3 py-2 border border-cyan-800"
                    placeholder="Comment *"
                    value={field.value}
                    onChange={field.onChange}
                  />
                );
              }}
            </Field>
            <ErrorMessage name="comment" />
            <div className="mt-3 flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex-1">
                <Field
                  name="name"
                  type="text"
                  placeholder="Name *"
                  className="border border-cyan-800 px-3 py-2 w-full"
                />
                <ErrorMessage name="name" />
              </div>
              <div className="flex-1">
                <Field
                  name="email"
                  type="text"
                  placeholder="Email *"
                  className="border border-cyan-800 px-3 py-2 w-full"
                />
                <ErrorMessage name="email" />
              </div>
            </div>
            <Field
              name="phone"
              type="text"
              placeholder="Phone (optional)"
              className="border border-cyan-800 mt-4 w-full px-3 py-2"
            />
            <ErrorMessage name="phone" />
            <div className="mt-2">
              <label
                htmlFor="save"
                className="text-xs inline-block md:whitespace-nowrap cursor-pointer"
              >
                <Field
                  id="save"
                  name="save"
                  type="checkbox"
                  className="align-middle h-5 w-5"
                />
                <span className="align-middle ml-2">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="max-w-[240px] w-full text-center bg-cyan-800 text-white py-3 rounded-full uppercase font-medium text-sm"
          >
            post review
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Reviews;
