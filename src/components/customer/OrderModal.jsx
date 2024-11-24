"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  notes: "",
};

const validationSchema = Yup.object({
  notes: Yup.string(),
});

const OrderModal = ({
  isOpen,
  onClose,
  orderItems,
  setOrderItems,
  mutateOrder,
}) => {
  if (!isOpen) return null;

  const updateOrderItem = (id, newQuantity) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeOrderItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmitOrder = (orderDetails) => {
    mutateOrder({ ...orderDetails, items: orderItems });
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg bg-gray-900 p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-3xl font-bold text-white">Your order</h2>
        <ul className="mb-4 list-none text-gray-300">
          {orderItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-700 py-2"
            >
              <span className="text-white">{item.name}</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                  onClick={() => removeOrderItem(item.id)}
                >
                  &times;
                </button>
                <button
                  type="button"
                  className="rounded bg-gray-500 px-2 py-1 text-white hover:bg-gray-600"
                  onClick={() => updateOrderItem(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-white">{item.quantity}</span>
                <button
                  type="button"
                  className="rounded bg-gray-500 px-2 py-1 text-white hover:bg-gray-600"
                  onClick={() => updateOrderItem(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmitOrder(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-white">Notes</label>
                <Field
                  as="textarea"
                  name="notes"
                  className="mt-1 w-full rounded px-3 py-2 text-black"
                />
                <ErrorMessage
                  name="notes"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid || orderItems.length === 0}
                className={`w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 ${
                  orderItems.length === 0 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Place order
              </button>
            </Form>
          )}
        </Formik>

        <button
          type="button"
          className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
