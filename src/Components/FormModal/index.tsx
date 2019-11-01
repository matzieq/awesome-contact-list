import React, { useContext, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import dayjs from "dayjs";
import { PhoneInput } from "baseui/phone-input";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Context } from "../StateProvider";
import TextInput from "./TextInput";
import { localStorageName } from "../../Lib/constants";

const FormModal = (props: any) => {
  const {
    modalOpen,
    setModalOpen,
    contacts,
    setContacts,
    tags,
    setTags
  } = useContext(Context);
  const { formType } = props;

  const generateId = (items: any) => {
    if (!items.length) {
      return "1";
    }

    return (
      Math.max(...items.map((item: any) => parseInt(item.id))) + 1
    ).toString();
  };

  return (
    <Modal
      onClose={() => setModalOpen(false)}
      closeable
      isOpen={modalOpen}
      animate
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Enter data</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={
            formType === 0
              ? { name: "", email: "", phone: "", company: "", department: "" }
              : { tagName: "" }
          }
          onSubmit={(values, actions) => {
            if (formType === 1) {
              setTags([
                ...tags,
                { id: generateId(tags), name: values.tagName }
              ]);
            } else {
              const dataItem = {
                ...values,
                dateAdded: dayjs().format("YYYY-MM-DD"),
                id: generateId(contacts),
                skills: []
              };
              setContacts([...contacts, dataItem]);
            }

            actions.setSubmitting(false);
            setModalOpen(false);
          }}
          render={({ isSubmitting }) => (
            <Form>
              {formType === 0 ? (
                <>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    component={TextInput}
                  />
                  <ErrorMessage name="name" component="div" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    component={TextInput}
                  />
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    component={TextInput}
                  />
                  <Field
                    type="text"
                    name="company"
                    placeholder="Company"
                    component={TextInput}
                  />
                  <Field
                    type="text"
                    name="department"
                    placeholder="Department"
                    component={TextInput}
                  />
                </>
              ) : (
                <Field
                  type="text"
                  name="tagName"
                  placeholder="Enter skill"
                  component={TextInput}
                />
              )}

              <ModalButton disabled={isSubmitting} type="submit">
                Add
              </ModalButton>
              <ModalButton
                disabled={isSubmitting}
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </ModalButton>
            </Form>
          )}
        />
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
